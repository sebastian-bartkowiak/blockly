Blockly.Python.addReservedWords('logging,TimedRotatingFileHandler,log');
const logger_init =
`import logging
from logging.handlers import TimedRotatingFileHandler
logging.basicConfig(level=logging.DEBUG,format='%(asctime)s %(levelname)s %(message)s',handlers=[TimedRotatingFileHandler("/etc/readerapp/intelligent_logs",interval=1,when='midnight',backupCount=7,utc=True)])
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

Blockly.Python.addReservedWords('strftime,s');
const strftime = `def strftime(s):
return time.strftime(s)`

Blockly.Python.addReservedWords('setGpo,pin,value');
Blockly.Python['set_gpo'] = function(block) {
  var this_id = block.id;
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);
  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  
  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_setGpo'] = 
`def setGpo(pin,value):
  return gpios.setGpo(pin,value)`;

  return 'setGpo('+value_pin+','+value_value+')\n';
};

Blockly.Python.addReservedWords('getGpi,pin');
Blockly.Python['read_gpi'] = function(block) {
  var this_id = block.id;
  var value_pin = Blockly.Python.valueToCode(block, 'pin', Blockly.Python.ORDER_ATOMIC);

  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_getGpi'] = 
`def getGpi(pin):
  return gpios.getGpi(pin)`;

  return ['getGpi('+value_pin+')\n', Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('INT_RISING,INT_FALLING,INT_BOTH,gpi_int_callback_INT_RISING_GPI0,gpi_int_callback_INT_RISING_GPI1,gpi_int_callback_INT_RISING_GPI2,gpi_int_callback_INT_RISING_GPI3,gpi_int_callback_INT_FALLING_GPI0,gpi_int_callback_INT_FALLING_GPI1,gpi_int_callback_INT_FALLING_GPI2,gpi_int_callback_INT_FALLING_GPI3,gpi_int_callback_INT_BOTH_GPI0,gpi_int_callback_INT_BOTH_GPI1,gpi_int_callback_INT_BOTH_GPI2,gpi_int_callback_INT_BOTH_GPI3');
Blockly.Python['gpi_trigger'] = function(block) {
  var this_id = block.id;
  var dropdown_edge = block.getFieldValue('edge');
  var dropdown_pin = block.getFieldValue('pin');
  var statements_fn = Blockly.Python.statementToCode(block, 'fn');

  dropdown_edge = dropdown_edge==0?'INT_RISING':(dropdown_edge==1?'INT_FALLING':'INT_BOTH');

  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['logger_init'] = logger_init

  var code = 
`def gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin}():
  log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function called -v-")
${statements_fn}  log.info("gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin} function ended -^-")

log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init code -v-")
gpios.setupGPIInterrupt(${dropdown_pin},gpios.${dropdown_edge},gpi_int_callback_${dropdown_edge}_GPI${dropdown_pin})
log.info("gpi_trigger for pin GPI${dropdown_pin} and edge ${dropdown_edge} init ended -^-")`;
  return code;
};

Blockly.Python['gpi_picker'] = function(block) {
  var this_id = block.id;
  var dropdown_pin = block.getFieldValue('pin');

  return [dropdown_pin, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['gpo_picker'] = function(block) {
  var this_id = block.id;
  var dropdown_pin = block.getFieldValue('pin');

  return [dropdown_pin, Blockly.Python.ORDER_NONE];
};

Blockly.Python['gpio_state_picker'] = function(block) {
  var this_id = block.id;
  var dropdown_state = block.getFieldValue('state');

  return [dropdown_state, Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('time,sleep,t');
Blockly.Python['sleep'] = function(block) {
  var this_id = block.id;
  var number_sleep_time = block.getFieldValue('sleep_time');

  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['global_sleep'] = 
`def sleep(t):
  time.sleep(t)`;

  return 'sleep('+number_sleep_time+')\n';
};

Blockly.Python.addReservedWords('buzzer,t');
Blockly.Python['beep_buzzer'] = function(block) {
  var this_id = block.id;
  var number_time = block.getFieldValue('time') * 1000;

  Blockly.Python.definitions_['global_ErefideGPIO'] = gpios_init;
  Blockly.Python.definitions_['global_buzzer'] = 
`def buzzer(t):
  gpios.buzzer(t)`;

  return 'buzzer('+number_time+')\n';
};

Blockly.Python.addReservedWords('urllib,request,json,OnionUtils,my_unique_id,post_function,url,data,req,jsondataasbytes');
Blockly.Python['post_data'] = function(block) {
  var this_id = block.id;
  var value_data = Blockly.Python.valueToCode(block, 'data', Blockly.Python.ORDER_ATOMIC);
  var value_url = Blockly.Python.valueToCode(block, 'url', Blockly.Python.ORDER_ATOMIC);

  if(!(value_url.startsWith('\'http://') || value_url.startsWith('\'https://'))){
    value_url = '\'http://'+value_url.substr(1);
  }
  
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['global_post_function'] = 
`from urllib import request
import json
from readerapp.utils import OnionUtils
my_unique_id = OnionUtils(True).get_unique_id()
def post_function(url,data):
  log.info("Starting post_function block code -v-")
  try:
    req = request.Request(url)
    req.add_header('Content-Type', 'application/json; charset=utf-8')
    jsondataasbytes = json.dumps(data).encode('utf-8')
    req.add_header('Content-Length', len(jsondataasbytes))
    req.add_header('Erefide-Id', my_unique_id)
    request.urlopen(req, jsondataasbytes)
  except Exception as e:
    log.error("Exception occured!")
    log.error(e)
  log.info("Ended post_function block code -^-")`;

  return `post_function(${value_url},${value_data})\n`;
};

Blockly.Python['current_time'] = function(block) {
  var this_id = block.id;
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['global_strftime'] = strftime;

  return ['strftime("%H:%M")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_date'] = function(block) {
  var this_id = block.id;
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['global_strftime'] = strftime;

  return ['strftime("%d.%m.%Y")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['current_datetime'] = function(block) {
  var this_id = block.id;
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['global_strftime'] = strftime;

  return ['strftime("%d.%m.%Y %H:%M")', Blockly.Python.ORDER_NONE];
};

Blockly.Python['simple_read'] = function(block) {
  var this_id = block.id;
  var number_time = block.getFieldValue('time')*1000;
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var number_power = block.getFieldValue('power');
  
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['global_simple_read'] = simple_read;

  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);

  return [`simple_read([${antennas_string}],${number_time},${number_power})`, Blockly.Python.ORDER_NONE];
};

Blockly.Python.addReservedWords('CustomTimer,autonomous_cb');
Blockly.Python['autonomous_read'] = function(block) {
  var this_id = block.id;
  var checkbox_ant_1 = block.getFieldValue('ant_1') == 'TRUE';
  var checkbox_ant_2 = block.getFieldValue('ant_2') == 'TRUE';
  var checkbox_ant_3 = block.getFieldValue('ant_3') == 'TRUE';
  var checkbox_ant_4 = block.getFieldValue('ant_4') == 'TRUE';
  var variable_read_tag = Blockly.Python.variableDB_.getName(block.getFieldValue('read_tag'), Blockly.Variables.NAME_TYPE);
  var statements_callback = Blockly.Python.prefixLines(Blockly.Python.statementToCode(block, 'callback'),'    ');
  var number_power = block.getFieldValue('power');

  var antennas_string = ((checkbox_ant_1?'1,':'')+(checkbox_ant_2?'2,':'')+(checkbox_ant_3?'3,':'')+(checkbox_ant_4?'4,':'')).slice(0, -1);

  Blockly.Python.definitions_['import_customtimer'] = 'from readerapp.customtimer import CustomTimer';
  Blockly.Python.definitions_['logger_init'] = logger_init;
  Blockly.Python.definitions_['global_simple_read'] = simple_read;

  const number_time = 900;

  return `def autonomous_cb():
    log.info("autonomous_cb function called -v-")
    ${variable_read_tag} = simple_read([${antennas_string}],${number_time},${number_power})
    if len(${variable_read_tag}):
      log.info("statements_callback called -v-")
${statements_callback}      log.info("statements_callback ended -^-")
    log.info("autonomous_cb function ended -^-")

log.info("autonomous_read init code -v-")
CustomTimer(1000,autonomous_cb).start()
log.info("autonomous_read init ended -^-")`;
};