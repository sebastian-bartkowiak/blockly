const globalizeWorkspaceVariables = (block,indent)=>{
  var variables = Blockly.Variables.allUsedVarModels(block.workspace).map((e)=>Blockly.Python.variableDB_.getName(e.name,Blockly.Variables.NAME_TYPE));
  var ret = '';
  for(var variable of variables){
    ret += `global ${variable}\n`;
  }
  return ret.length?Blockly.Python.prefixLines(ret,indent):'';
}

const variablesDebug = (block)=>{
  var variables = Blockly.Variables.allUsedVarModels(block.workspace).map((e)=>{return {user_name:e.name, real_name:Blockly.Python.variableDB_.getName(e.name,Blockly.Variables.NAME_TYPE)}});
  var ret = ',"v":{';
  for(var variable of variables){
    ret += `"${variable.user_name}":${variable.real_name},`;
  }
  if(ret != ',"v":{'){
    ret = ret.slice(0,-1);
    ret += '}';
    return ret;
  }  
  return '';
}
// -v- common debug logging function -v-
Blockly.Python.addReservedWords('debugLogEntry,block_id,text,comment,time,json,logging,TimedRotatingFileHandler,debugLog');
const trans_keyword = '#TRANS#';
Blockly.Python.addReservedWords(trans_keyword);
const divider_comment_start = 
`
#-----v----- %% -----v-----#`;
const divider_comment_stop  = 
`#-----^----- %% -----^-----#
`;
const import_time = 
`${divider_comment_start.replace('%%','import_time')}
import time
${divider_comment_stop.replace('%%','import_time')}`;
const import_json = 
`${divider_comment_start.replace('%%','import_json')}
import json
${divider_comment_stop.replace('%%','import_json')}`;
const importDebugLogDependancies = (block)=>{
  Blockly.Python.definitions_['import_time'] = import_time;
  Blockly.Python.definitions_['import_json'] = import_json;
  Blockly.Python.definitions_['global_debugLogEntry'] = 
`${divider_comment_start.replace('%%','global_debugLogEntry')}
import logging
from logging.handlers import TimedRotatingFileHandler
debugLog = logging.getLogger('debugLog')
debugLog.addHandler(TimedRotatingFileHandler("/etc/readerapp/inteligent-debug.log",interval=1,when='midnight',backupCount=1,utc=True))
debugLog.setLevel(10)
def debugLogEntry(block_id,text,comment=False):
  if isinstance(text, str):
    text = {"t":text}
  if comment is not False:
    entry = {
      "t":time.strftime("%H:%M:%S"),
      "i":block_id,
      "s":text,
      "c":comment${variablesDebug(block)}
    }
  else:
    entry = {
      "t":time.strftime("%H:%M:%S"),
      "i":block_id,
      "s":text${variablesDebug(block)}
    }
  debugLog.debug(json.dumps(entry)+',')
${divider_comment_stop.replace('%%','global_debugLogEntry')}`;
};
/*
implementation:
importDebugLogDependancies(block);
Blockly.Python.injectId(`%1`, block)
*/
// -^- common debug logging function -^-

Blockly.Python.addReservedWords('logger,log,inteligent');

Blockly.Python.addReservedWords('mercury');
const import_mercury =
`${divider_comment_start.replace('%%','import_mercury')}
import mercury
${divider_comment_stop.replace('%%','import_mercury')}`;

const import_threading =
`${divider_comment_start.replace('%%','import_threading')}
import threading
${divider_comment_stop.replace('%%','import_threading')}`;

Blockly.Python.addReservedWords('readerapp,onioni2cgpio,ErefideGPIO,gpios');
const gpios_init = 
`${divider_comment_start.replace('%%','gpios_init')}
from readerapp.onioni2cgpio import ErefideGPIO
gpios = ErefideGPIO()
${divider_comment_stop.replace('%%','gpios_init')}`

Blockly.Python.addReservedWords('setGpo,pin,value');
Blockly.Python['set_gpo'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  
  importDebugLogDependancies(block);
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_setGpo'] = 
`${divider_comment_start.replace('%%','global_setGpo')}
def setGpo(pin,value,block_id):
  log.info("setGpo function called")
  debugLogEntry(block_id,{"t":"blockly.debug.set_gpo","d":[str(pin),("${trans_keyword}blockly.debug.high" if value else "${trans_keyword}blockly.debug.low")]})
  return gpios.setGpo(pin,value)
${divider_comment_stop.replace('%%','global_setGpo')}`;

  return Blockly.Python.injectId(`setGpo(${value_pin},${value_value},%1)\n`, block);
};

Blockly.Python.addReservedWords('getGpi,pin');
Blockly.Python['read_gpi'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_getGpi'] = 
`${divider_comment_start.replace('%%','global_getGpi')}
def getGpi(pin,block_id):
  log.info("getGpi function called")
  ret = gpios.getGpi(pin)
  debugLogEntry(block_id,{"t":"blockly.debug.get_gpi","d":[str(pin)]},{"t":"blockly.debug.get_gpi_value","d":[str(pin),("${trans_keyword}blockly.debug.high" if ret else "${trans_keyword}blockly.debug.low")]})
  return ret
${divider_comment_stop.replace('%%','global_getGpi')}`;

  return [Blockly.Python.injectId(`getGpi(${value_pin},%1)\n`, block), Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('getGpo,pin');
Blockly.Python['read_gpo'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_getGpo'] = 
`${divider_comment_start.replace('%%','global_getGpo')}
def getGpo(pin,block_id):
  log.info("getGpo function called")
  ret = gpios.getGpo(pin)
  debugLogEntry(block_id,{"t":"blockly.debug.get_gpo","d":[str(pin)]},{"t":"blockly.debug.get_gpo_value","d":[str(pin),("${trans_keyword}blockly.debug.high" if ret else "${trans_keyword}blockly.debug.low")]})
  return ret
${divider_comment_stop.replace('%%','global_getGpo')}`;

  return [Blockly.Python.injectId(`getGpo(${value_pin},%1)\n`, block), Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('INT_RISING,INT_FALLING,INT_BOTH,gpi_int_callback_INT_RISING_GPI0,gpi_int_callback_INT_RISING_GPI1,gpi_int_callback_INT_RISING_GPI2,gpi_int_callback_INT_RISING_GPI3,gpi_int_callback_INT_FALLING_GPI0,gpi_int_callback_INT_FALLING_GPI1,gpi_int_callback_INT_FALLING_GPI2,gpi_int_callback_INT_FALLING_GPI3,gpi_int_callback_INT_BOTH_GPI0,gpi_int_callback_INT_BOTH_GPI1,gpi_int_callback_INT_BOTH_GPI2,gpi_int_callback_INT_BOTH_GPI3,gpi_semaphore_INT_RISING_GPI0,gpi_semaphore_INT_RISING_GPI1,gpi_semaphore_INT_RISING_GPI2gpi_semaphore_INT_RISING_GPI3,gpi_semaphore_INT_FALLING_GPI0,gpi_semaphore_INT_FALLING_GPI1,gpi_semaphore_INT_FALLING_GPI2,gpi_semaphore_INT_FALLING_GPI3,gpi_semaphore_INT_BOTH_GPI0,gpi_semaphore_INT_BOTH_GPI1,gpi_semaphore_INT_BOTH_GPI2,gpi_semaphore_INT_BOTH_GPI3');

Blockly.Python['gpi_trigger'] = function(block) {
  var dropdown_edge = block.getFieldValue('edge');
  var dropdown_pin = block.getFieldValue('pin');
  var statements_fn = Blockly.Python.prefixLines(Blockly.Python.statementToCode(block, 'fn'),'    ');

  var edge_string = trans_keyword+'blockly.debug.edge_'+(dropdown_edge==0?'rising':(dropdown_edge==1?'falling':'any'))
  dropdown_edge = dropdown_edge==0?'INT_RISING':(dropdown_edge==1?'INT_FALLING':'INT_BOTH');

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;

  var code = 
`${divider_comment_start.replace('%%','gpi_trigger %1')}
gpi_semaphore_${dropdown_edge}_GPI${dropdown_pin} = threading.BoundedSemaphore()
def gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin}(pin_no,pin_val,int_type):
  log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function called for pin "+str(pin_no)+", with new value of "+str(pin_val))
  try:
    if gpi_semaphore_${dropdown_edge}_GPI${dropdown_pin}.acquire(timeout=0.1):
${globalizeWorkspaceVariables(block,'      ')}\
      debugLogEntry(%1,{"t": "blockly.debug.gpi_interrupt", "d": ["${edge_string}","${dropdown_pin}"]})
${statements_fn}\
      gpi_semaphore_${dropdown_edge}_GPI${dropdown_pin}.release()
      log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function ended")
    else:
      log.warning("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function execution skipped, due to previous execution still beeing in progress")
  except Exception:
    sys.excepthook(*sys.exc_info())

log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init code")
gpios.setupGPIInterrupt(${dropdown_pin},gpios.${dropdown_edge},gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin})
log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init ended")
${divider_comment_stop.replace('%%','gpi_trigger %1')}`;
  return Blockly.Python.injectId(code, block);
};

Blockly.Python['gpi_picker'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');

  return [dropdown_pin, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpo_picker'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');

  return [dropdown_pin, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpio_state_picker'] = function(block) {
  var dropdown_state = block.getFieldValue('state');

  return [dropdown_state, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python.addReservedWords('time,sleep,t,format');
Blockly.Python['sleep'] = function(block) {
  var number_sleep_time = block.getFieldValue('sleep_time');

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['import_time'] = import_time;
  Blockly.Python.definitions_['global_sleep'] = 
`${divider_comment_start.replace('%%','global_sleep')}
def sleep(t,block_id):
  log.info("sleep function called")
  debugLogEntry(block_id,{"t": "blockly.debug.sleep", "d": [("{:.2f}".format(t)).rstrip('0').rstrip('.')]})
  time.sleep(t)
${divider_comment_stop.replace('%%','global_sleep')}`;

  return Blockly.Python.injectId(`sleep(${number_sleep_time},%1)\n`, block);
};

Blockly.Python.addReservedWords('buzzer,t,format');
Blockly.Python['beep_buzzer'] = function(block) {
  var number_time = block.getFieldValue('time');

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_buzzer'] = 
`${divider_comment_start.replace('%%','global_buzzer')}
def buzzer(t,block_id):
  log.info("buzzer function called")
  debugLogEntry(block_id,{"t": "blockly.debug.buzzer", "d": [("{:.2f}".format(t)).rstrip('0').rstrip('.')]})
  gpios.buzzer(t*1000)
${divider_comment_stop.replace('%%','global_buzzer')}`;

  return Blockly.Python.injectId(`buzzer(${number_time},%1)\n`, block);
};

Blockly.Python.addReservedWords('urllib,request,json,OnionUtils,my_unique_id,post_function,url,data,req,jsondataasbytes');
Blockly.Python['post_data'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

  if(!(value_url.startsWith('\'http://') || value_url.startsWith('\'https://'))){
    value_url = '\'http://'+value_url.substr(1);
  }
  
  importDebugLogDependancies(block);
  Blockly.Python.definitions_['import_json'] = 'import json';
  Blockly.Python.definitions_['global_getID_function'] = 
`${divider_comment_start.replace('%%','global_getID_function')}
from readerapp.utils import OnionUtils
my_unique_id = OnionUtils().get_unique_id()
${divider_comment_stop.replace('%%','global_getID_function')}`;
  Blockly.Python.definitions_['global_post_function'] = 
`${divider_comment_start.replace('%%','global_post_function')}
from urllib import request
def post_function(url,data,block_id):
  log.info("post_function function called")
  try:
    req = request.Request(url)
    req.add_header('Content-Type', 'application/json; charset=utf-8')
    jsondataasbytes = json.dumps(data).encode('utf-8')
    req.add_header('Content-Length', len(jsondataasbytes))
    req.add_header('Erefide-Id', my_unique_id)
    request.urlopen(req, jsondataasbytes)
    debugLogEntry(block_id,"blockly.debug.post_success",{"${trans_keyword}blockly.debug.post_url":str(url),"${trans_keyword}blockly.debug.post_data":data})
  except Exception as e:
    log.error("Exception occured!")
    log.error(e)
    debugLogEntry(block_id,"blockly.debug.post_failed",{"${trans_keyword}blockly.debug.post_url":str(url),"${trans_keyword}blockly.debug.post_error":str(e),"${trans_keyword}blockly.debug.post_data":data})
  log.info("post_function function ended")
${divider_comment_stop.replace('%%','global_post_function')}`;

  return Blockly.Python.injectId(`post_function(${value_url},${value_data},%1)\n`,block);
};

Blockly.Python['current_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%H:%M:%S")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_date'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%d.%m.%Y")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_datetime'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%d.%m.%Y %H:%M:%S")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_timestamp'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['int(time.time())', Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('OnionUtils,my_unique_id');
Blockly.Python['reader_id'] = function(block) {
  Blockly.Python.definitions_['global_getID_function'] = 
`${divider_comment_start.replace('%%','global_getID_function')}
from readerapp.utils import OnionUtils
my_unique_id = OnionUtils().get_unique_id()
${divider_comment_stop.replace('%%','global_getID_function')}`;

  return ['my_unique_id', Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('simple_read,ant,readTime,power,subprocess,reader,antenna,ret,power_object,reader_semaphore,threading,BoundedSemaphore');
Blockly.Python['simple_read'] = function(block) {
  var number_time = block.getFieldValue('time')*1000;
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var number_power = block.getFieldValue('power')*100;
  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);
  var epc_filter_mode = block.getFieldValue("epc_filter_options");
  var epc_filter_value = block.getFieldValue("epc_filter_value");
  var epc_filter_code = '';
  if(epc_filter_value !== null){
    epc_filter_value = epc_filter_value.toUpperCase();
    const totalBitLen = 96;
    const filterBitLen = epc_filter_value.length*4;
    switch(epc_filter_mode){
      case 'equal': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':0, 'len':${totalBitLen}}`;
      } break;
      case 'startswith': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':0, 'len':${filterBitLen}}`;
      } break;
      case 'endswith': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':${totalBitLen-filterBitLen}, 'len':${filterBitLen}}`;
      } break;
    }
  }

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['import_mercury'] = import_mercury;
  Blockly.Python.definitions_['import_threading'] = import_threading;
  Blockly.Python.definitions_['global_simple_read'] = 
`${divider_comment_start.replace('%%','simple_read')}
import subprocess
reader = mercury.Reader("tmr:///dev/ttyS1")
reader_semaphore = threading.BoundedSemaphore()
def simple_read(ant,readTime,power,block_id):
  log.info("simple_read function called")
  reader_semaphore.acquire()
  reader.set_read_plan(ant, "GEN2"${epc_filter_code})
  reader.set_region(str(subprocess.check_output(['uci','get','reader.main.region']))[2:-3])
  reader.set_gen2_q(int(str(subprocess.check_output(['uci','get','reader.main.Q_dynamic']))[2:-3]),int(str(subprocess.check_output(['uci','get','reader.main.Q_value']))[2:-3]))
  power_object = []
  for antenna in ant:
    power_object.append((antenna,power))
  reader.set_read_powers(power_object)
  ret = list(map(lambda t: t.epc.decode('utf-8'), reader.read(readTime)))
  reader_semaphore.release()
  debugLogEntry(block_id,"blockly.debug.simple_read",ret)
  log.info("simple_read function ended")
  return ret
${divider_comment_stop.replace('%%','simple_read')}`;

  return [Blockly.Python.injectId(`simple_read([${antennas_string}],${number_time},${number_power},%1)`,block), Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('autonomousHandle,AutonomousThread');
Blockly.Python['autonomous_read'] = function(block) {
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var variable_read_tag = Blockly.Python.variableDB_.getName(block.getFieldValue('read_tag'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.Python.prefixLines(Blockly.Python.statementToCode(block, 'callback'),'        ');
  var number_power = block.getFieldValue('power')*100;

  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);

  var epc_filter_mode = block.getFieldValue("epc_filter_options");
  var epc_filter_value = block.getFieldValue("epc_filter_value");
  var epc_filter_code = '';
  if(epc_filter_value !== null){
    epc_filter_value = epc_filter_value.toUpperCase();
    const totalBitLen = 96;
    const filterBitLen = epc_filter_value.length*4;
    switch(epc_filter_mode){
      case 'equal': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':0, 'len':${totalBitLen}}`;
      } break;
      case 'startswith': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':0, 'len':${filterBitLen}}`;
      } break;
      case 'endswith': {
        epc_filter_code = `, epc_target={'epc':b'${epc_filter_value}', 'bit':${totalBitLen-filterBitLen}, 'len':${filterBitLen}}`;
      } break;
    }
  }

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['import_threading'] = import_threading;
  Blockly.Python.definitions_['import_mercury'] = import_mercury;

  var code = 
`${divider_comment_start.replace('%%','autonomous_read %1')}
class AutonomousThread(threading.Thread):
  reader = None
  startFlag = threading.Event()
  def __init__(self, ant, power):
    self.startFlag.clear()
    threading.Thread.__init__(self)
    self.reader = mercury.Reader("tmr:///dev/ttyS1")
    self.reader.set_read_plan(ant, "GEN2"${epc_filter_code})
    self.reader.set_region(str(subprocess.check_output(['uci','get','reader.main.region']))[2:-3])
    self.reader.set_gen2_q(int(str(subprocess.check_output(['uci','get','reader.main.Q_dynamic']))[2:-3]),int(str(subprocess.check_output(['uci','get','reader.main.Q_value']))[2:-3]))
    power_object = []
    for antenna in ant:
      power_object.append((antenna,power))
    self.reader.set_read_powers(power_object)
    self.start()

  def run(self):
    try:
${globalizeWorkspaceVariables(block,'      ')}\
      while True:
        if self.startFlag.wait(1):
          log.info("autonomous_cb function called")
          ${variable_read_tag} = list(map(lambda t: t.epc.decode('utf-8'), self.reader.read(750)))
          debugLogEntry(%1,"blockly.debug.autonomous_read",${variable_read_tag})
${statements_callback}\
          log.info("autonomous_cb function ended")
          time.sleep(0.25)
    except Exception:
      sys.excepthook(*sys.exc_info())

log.info("autonomous_cb init code")
autonomousHandle = AutonomousThread([${antennas_string}],${number_power})
log.info("autonomous_cb init ended")
${divider_comment_stop.replace('%%','autonomous_read %1')}`;

  return Blockly.Python.injectId(code,block);
};

Blockly.Python.addReservedWords('global_autonomous_start');
Blockly.Python['autonomous_start'] = function(block) {
  importDebugLogDependancies(block);

  Blockly.Python.definitions_['global_autonomous_start'] = 
`${divider_comment_start.replace('%%','global_autonomous_start')}
def global_autonomous_start(block_id):
  log.info("autonomous start")
  autonomousHandle.startFlag.set()
  debugLogEntry(block_id,{"t": "blockly.debug.autonomous_start"})
${divider_comment_stop.replace('%%','global_autonomous_start')}`;

  return Blockly.Python.injectId('global_autonomous_start(%1)\n',block);
};

Blockly.Python.addReservedWords('global_autonomous_stop');
Blockly.Python['autonomous_stop'] = function(block) {
  importDebugLogDependancies(block);

  Blockly.Python.definitions_['global_autonomous_stop'] = 
`${divider_comment_start.replace('%%','global_autonomous_stop')}
def global_autonomous_stop(block_id):
  log.info("autonomous stop")
  autonomousHandle.startFlag.clear()
  debugLogEntry(block_id,{"t": "blockly.debug.autonomous_stop"})
${divider_comment_stop.replace('%%','global_autonomous_stop')}`;

  return Blockly.Python.injectId('global_autonomous_stop(%1)\n',block);
}

Blockly.Python['autonomous_state'] = function(block) {
  return ['autonomousHandle.startFlag.is_set()', Blockly.Python.ORDER_NONE];
}

Blockly.Python.addReservedWords('program_start');
Blockly.Python['program_start'] = function(block) {
  var statements_code = Blockly.Python.statementToCode(block, 'code');

  importDebugLogDependancies(block);

  var code = 
`${divider_comment_start.replace('%%','program_start %1')}
def program_start():
  log.info("program_start function called")
${globalizeWorkspaceVariables(block,'  ')}\
  debugLogEntry(%1,"blockly.debug.program_start")
${statements_code}\
  log.info("program_start function ended")

program_start()
${divider_comment_stop.replace('%%','program_start %1')}`;
  return Blockly.Python.injectId(code,block);
};

Blockly.Python.addReservedWords('CustomTimer');
Blockly.Python['cron_task'] = function(block) {
  var number_time = block.getFieldValue('time');
  var dropdown_selector = block.getFieldValue('selector');
  var statements_code = Blockly.Python.prefixLines(Blockly.Python.statementToCode(block, 'code'),'  ');

  importDebugLogDependancies(block);
  Blockly.Python.definitions_['import_customtimer'] = 
`${divider_comment_start.replace('%%','import_customtimer')}
from readerapp.customtimer import CustomTimer
${divider_comment_stop.replace('%%','import_customtimer')}`;

  var function_name = Blockly.Python.variableDB_.getDistinctName(`cron_task_${number_time.toString()}_${dropdown_selector}`,Blockly.Procedures.NAME_TYPE);
  var dropdown_multiplier = 1000*60*(dropdown_selector=='hours'?60:1);

  var code = 
`${divider_comment_start.replace('%%','cron_task %1')}
def ${function_name}():
  log.info("${function_name} function called")
  try:
${globalizeWorkspaceVariables(block,'    ')}\
    debugLogEntry(%1,{"t": "blockly.debug.cron_task", "d": ["${number_time}","${trans_keyword}blockly.debug.${dropdown_selector}"]})
${statements_code}\
    log.info("${function_name} function ended")
  except Exception:
    sys.excepthook(*sys.exc_info())

log.info("${function_name} init code")
CustomTimer(${number_time*dropdown_multiplier},${function_name}).start()
log.info("${function_name} init ended")
${divider_comment_stop.replace('%%','cron_task %1')}`;

  return Blockly.Python.injectId(code,block);
};

Blockly.Python.addReservedWords('subprocess,global_restart_function');
Blockly.Python['restart_app'] = function(block) {
  importDebugLogDependancies(block);

  Blockly.Python.definitions_['import_time'] = import_time;
  Blockly.Python.definitions_['global_restart_function'] = 
`${divider_comment_start.replace('%%','global_restart_function')}
def global_restart_function(block_id):
  debugLogEntry(block_id,{"t": "blockly.debug.restart_app"})
  subprocess.run(['/etc/init.d/inteligent','restart'])
  while True:
    time.sleep(1)
${divider_comment_stop.replace('%%','global_restart_function')}`;

  return Blockly.Python.injectId('global_restart_function(%1)\n',block);
};

Blockly.Python.addReservedWords('sys,common_except_hook,error_handler,exception_type,exception_value,exception_trace,error,format_tb,unhadled_error_hook,kill,getpid,SIGINT');
Blockly.Python['error_handler'] = function(block) {
  var variable_error_var = Blockly.Python.variableDB_.getName(block.getFieldValue('error_var'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.Python.statementToCode(block, 'callback');

  importDebugLogDependancies(block);

  var code = 
`${divider_comment_start.replace('%%','error_handler %1')}
def error_handler(exception_type,exception_value,exception_trace):
${globalizeWorkspaceVariables(block,'  ')}\
  common_except_hook(exception_type,exception_value,exception_trace)
  ${variable_error_var} = exception_type.__name__ + ": " + str(exception_value)
  debugLogEntry(%1,{"t": "blockly.debug.error_handler"},${variable_error_var})
${statements_callback}
sys.excepthook = error_handler
${divider_comment_stop.replace('%%','error_handler %1')}`;
  return Blockly.Python.injectId(code,block);
};