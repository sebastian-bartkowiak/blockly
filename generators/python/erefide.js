// -v- common debug logging function -v-
Blockly.Python.addReservedWords('debugLogEntry,block_id,text,comment,time,json');
const trans_keyword = '#TRANS#';
const import_time = 'import time';
const import_json = 'import json';
const global_debugLogEntry = 
`debugLog = logging.getLogger('debugLog')
debugLog.addHandler(TimedRotatingFileHandler("F:\\\\SBartkow\\\\Pulpit\\\\test\\\\log.txt",interval=1,when='midnight',backupCount=1,utc=True))
debugLog.setLevel(10)
def debugLogEntry(block_id,text,comment=False):
  if isinstance(text, str):
    text = {"t":text}
  if comment is not False:
    entry = {
      "t":time.strftime("%H:%M:%S"),
      "i":block_id,
      "s":text,
      "c":comment
    }
  else:
    entry = {
      "t":time.strftime("%H:%M:%S"),
      "i":block_id,
      "s":text
    }
  debugLog.debug(json.dumps(entry)+',')`;
/*
implementation:
Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
Blockly.Python.injectId(`%1`, block)
*/
// -^- common debug logging function -^-

Blockly.Python.addReservedWords('logging,TimedRotatingFileHandler,log');
const logger_import = 
`import logging
from logging.handlers import TimedRotatingFileHandler`;
const logger_init =
`logging.basicConfig(level=logging.DEBUG,format='%(asctime)s %(levelname)s %(message)s',handlers=[TimedRotatingFileHandler("/etc/readerapp/intelligent_logs",interval=1,when='midnight',backupCount=7,utc=True)])
log = logging.getLogger(__name__)
log.info("--- Intelligent script started ---")`;

Blockly.Python.addReservedWords('mercury,reader,simple_read,ant,readTime,power,max_power,power_object,antenna,read_epcs_data,ret,list,map,t');
const simple_read =
`import mercury
reader = mercury.Reader("tmr:///dev/ttyS1")
def simple_read(ant,readTime,power):
  log.info("simple_read function called -v-")
  reader.set_read_plan(ant, "GEN2")
  reader.set_region("open")
  max_power = reader.get_power_range()[1]
  power_object = []
  for antenna in ant:
    power_object.append((antenna,(max_power/100.0)*power))
  reader.set_read_powers(power_object)
  log.info("simple_read config sent ---")
  read_epcs_data = reader.read(readTime)
  log.info("len(read_epcs_data)="+str(len(read_epcs_data)))
  ret = list(map(lambda t: t.epc.decode('utf-8'), read_epcs_data))
  log.info("simple_read function ended -^-")
  return ret`;

Blockly.Python.addReservedWords('readerapp,onioni2cgpio,ErefideGPIO,gpios');
const gpios_init = `from readerapp.onioni2cgpio import ErefideGPIO
gpios = ErefideGPIO()`

Blockly.Python.addReservedWords('setGpo,pin,value');
Blockly.Python['set_gpo'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_setGpo'] = 
`def setGpo(pin,value,block_id):
  debugLogEntry(block_id,{"t":"blockly.debug.set_gpo","d":[str(pin),("${trans_keyword}blockly.debug.high" if value else "${trans_keyword}blockly.debug.low")]})
  return gpios.setGpo(pin,value)`;

  return Blockly.Python.injectId(`setGpo(${value_pin},${value_value},%1)\n`, block);
};

Blockly.Python.addReservedWords('getGpi,pin');
Blockly.Python['read_gpi'] = function(block) {
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_getGpi'] = 
`def getGpi(pin,block_id):
  ret = gpios.getGpi(pin)
  debugLogEntry(block_id,{"t":"blockly.debug.get_gpi","d":[str(pin)]},{"t":"blockly.debug.get_gpi_value","d":[str(pin),("${trans_keyword}blockly.debug.high" if ret else "${trans_keyword}blockly.debug.low")]})
  return ret`;

  return [Blockly.Python.injectId(`getGpi(${value_pin},%1)\n`, block), Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('INT_RISING,INT_FALLING,INT_BOTH,gpi_int_callback_INT_RISING_GPI0,gpi_int_callback_INT_RISING_GPI1,gpi_int_callback_INT_RISING_GPI2,gpi_int_callback_INT_RISING_GPI3,gpi_int_callback_INT_FALLING_GPI0,gpi_int_callback_INT_FALLING_GPI1,gpi_int_callback_INT_FALLING_GPI2,gpi_int_callback_INT_FALLING_GPI3,gpi_int_callback_INT_BOTH_GPI0,gpi_int_callback_INT_BOTH_GPI1,gpi_int_callback_INT_BOTH_GPI2,gpi_int_callback_INT_BOTH_GPI3');
Blockly.Python['gpi_trigger'] = function(block) {
  var dropdown_edge = block.getFieldValue('edge');
  var dropdown_pin = block.getFieldValue('pin');
  var statements_fn = Blockly.Python.statementToCode(block, 'fn');

  var edge_string = trans_keyword+'blockly.debug.edge_'+(dropdown_edge==0?'rising':(dropdown_edge==1?'falling':'any'))
  dropdown_edge = dropdown_edge==0?'INT_RISING':(dropdown_edge==1?'INT_FALLING':'INT_BOTH');

  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['logger_import'] = logger_import;
  Blockly.Python.definitions_['logger_init'] = logger_init;

  var code = 
`def gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin}():
  log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function called -v-")
  debugLogEntry(%1,{"t": "blockly.debug.gpi_interrupt", "d": ["${edge_string}","${dropdown_pin}"]})
${statements_fn}  log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function ended -^-")

log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init code -v-")
gpios.setupGPIInterrupt(${dropdown_pin},gpios.${dropdown_edge},gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin})
log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init ended -^-")`;
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

Blockly.Python.addReservedWords('time,sleep,t');
Blockly.Python['sleep'] = function(block) {
  var number_sleep_time = block.getFieldValue('sleep_time');

  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['import_time'] = import_time;
  Blockly.Python.definitions_['global_sleep'] = 
`def sleep(t,block_id):
  debugLogEntry(block_id,{"t": "blockly.debug.sleep", "d": [str(t)]})
  time.sleep(t)`;

  return Blockly.Python.injectId(`sleep(${number_sleep_time},%1)\n`, block);
};

Blockly.Python.addReservedWords('buzzer,t');
Blockly.Python['beep_buzzer'] = function(block) {
  var number_time = block.getFieldValue('time');

  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_buzzer'] = 
`def buzzer(t,block_id):
  debugLogEntry(block_id,{"t": "blockly.debug.buzzer", "d": [str(t)]})
  gpios.buzzer(t*1000)`;

  return Blockly.Python.injectId(`buzzer(${number_time},%1)\n`, block);
};

Blockly.Python.addReservedWords('urllib,request,json,OnionUtils,my_unique_id,post_function,url,data,req,jsondataasbytes');
Blockly.Python['post_data'] = function(block) {
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

  if(!(value_url.startsWith('\'http://') || value_url.startsWith('\'https://'))){
    value_url = '\'http://'+value_url.substr(1);
  }
  
  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['logger_import'] = logger_import;
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['import_json'] = 'import json';
  Blockly.Python.definitions_['global_post_function'] = 
`from urllib import request
from readerapp.utils import OnionUtils
my_unique_id = OnionUtils().get_unique_id()
def post_function(url,data,block_id):
  log.info("Starting post_function block code -v-")
  try:
    req = request.Request(url)
    req.add_header('Content-Type', 'application/json; charset=utf-8')
    jsondataasbytes = json.dumps(data).encode('utf-8')
    req.add_header('Content-Length', len(jsondataasbytes))
    req.add_header('Erefide-Id', my_unique_id)
    request.urlopen(req, jsondataasbytes)
    debugLogEntry(block_id,"blockly.debug.post_success",{"#TRANS#blockly.debug.post_url":str(url),"#TRANS#blockly.debug.post_data":data})
  except Exception as e:
    log.error("Exception occured!")
    log.error(e)
    debugLogEntry(block_id,"blockly.debug.post_failed",{"#TRANS#blockly.debug.post_url":str(url),"#TRANS#blockly.debug.post_error":str(e),"#TRANS#blockly.debug.post_data":data})
  log.info("Ended post_function block code -^-")`;

  return Blockly.Python.injectId(`post_function(${value_url},${value_data},%1)\n`,block);
};

Blockly.Python['current_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%H:%M")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_date'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%d.%m.%Y")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_datetime'] = function(block) {
  Blockly.Python.definitions_['import_time'] = import_time;

  return ['time.strftime("%d.%m.%Y %H:%M")', Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('simple_read_wrapper');
Blockly.Python['simple_read'] = function(block) {
  var number_time = block.getFieldValue('time')*1000;
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var number_power = block.getFieldValue('power');
  
  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['logger_import'] = logger_import;
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['global_simple_read'] = simple_read;

  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);

Blockly.Python.definitions_['simple_read_wrapper'] = 
`def simple_read_wrapper(ant,readTime,power,block_id):
  ret = simple_read(ant,readTime,power)
  debugLogEntry(block_id,"blockly.debug.simple_read",ret)
  return ret`;

  return [Blockly.Python.injectId(`simple_read_wrapper([${antennas_string}],${number_time},${number_power},%1)`,block), Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('CustomTimer,autonomous_cb');
Blockly.Python['autonomous_read'] = function(block) {
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var variable_read_tag = Blockly.Python.variableDB_.getName(block.getFieldValue('read_tag'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.Python.prefixLines(Blockly.Python.statementToCode(block, 'callback'),'    ');
  var number_power = block.getFieldValue('power');

  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);

  Blockly.Python.definitions_['import_time'] = import_time;Blockly.Python.definitions_['import_json'] = import_json;Blockly.Python.definitions_['logger_import'] = logger_import;Blockly.Python.definitions_['global_debugLogEntry'] = global_debugLogEntry;
  Blockly.Python.definitions_['import_customtimer'] = 'from readerapp.customtimer import CustomTimer';
  Blockly.Python.definitions_['logger_import'] = logger_import;
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['global_simple_read'] = simple_read;

  const number_time = 900;

  var code = `def autonomous_cb():
    log.info("autonomous_cb function called -v-")
    ${variable_read_tag} = simple_read([${antennas_string}],${number_time},${number_power})
    if len(${variable_read_tag}):
      log.info("statements_callback called -v-")
      debugLogEntry(%1,"blockly.debug.autonomous_read",${variable_read_tag})
${statements_callback}      log.info("statements_callback ended -^-")
    log.info("autonomous_cb function ended -^-")

log.info("autonomous_read init code -v-")
CustomTimer(1000,autonomous_cb).start()
log.info("autonomous_read init ended -^-")`;

  return Blockly.Python.injectId(code,block);
};