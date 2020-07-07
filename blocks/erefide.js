goog.provide('Blockly.Constants.Erefide');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');

Blockly.defineBlocksWithJsonArray([{
  "type": "set_gpo",
  "message0": "%{BKY_EREFIDE_SET_GPO}",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "erefide_output_type"
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "erefide_gpio_state_type"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_SET_GPO_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SET_GPO_HELPURL}"
},
{
  "type": "read_gpi",
  "message0": "%{BKY_EREFIDE_READ_GPI}",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "erefide_input_type"
    }
  ],
  "output": "erefide_gpio_state_type",
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_READ_GPI_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_READ_GPI_HELPURL}"
},
{
  "type": "read_gpo",
  "message0": "%{BKY_EREFIDE_READ_GPO}",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "erefide_output_type"
    }
  ],
  "output": "erefide_gpio_state_type",
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_READ_GPO_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_READ_GPO_HELPURL}"
},
{
  "type": "gpi_trigger",
  "message0": "%{BKY_EREFIDE_GPI_TRIGGER}",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "GPI0",
          "0"
        ],
        [
          "GPI1",
          "1"
        ],
        [
          "GPI2",
          "2"
        ],
        [
          "GPI3",
          "3"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "edge",
      "options": [
        [
          {
            "src": "/img/rising.png",
            "width": 45,
            "height": 45,
            "alt": "%{BKY_EREFIDE_RISING_EDGE}"
          },
          "0"
        ],
        [
          {
            "src": "/img/falling.png",
            "width": 45,
            "height": 45,
            "alt": "%{BKY_EREFIDE_FALLING_EDGE}"
          },
          "1"
        ],
        [
          {
            "src": "/img/both.png",
            "width": 45,
            "height": 45,
            "alt": "%{BKY_EREFIDE_BOTH_EDGE}"
          },
          "2"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "fn"
    }
  ],
  "inputsInline": true,
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_GPI_TRIGGER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPI_TRIGGER_HELPURL}"
},
{
  "type": "gpi_picker",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "GPI0",
          "0"
        ],
        [
          "GPI1",
          "1"
        ],
        [
          "GPI2",
          "2"
        ],
        [
          "GPI3",
          "3"
        ]
      ]
    }
  ],
  "output": "erefide_input_type",
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_GPI_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPI_PICKER_HELPURL}"
},
{
  "type": "gpo_picker",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "pin",
      "options": [
        [
          "GPO0",
          "0"
        ],
        [
          "GPO1",
          "1"
        ],
        [
          "GPO2",
          "2"
        ],
        [
          "GPO3",
          "3"
        ]
      ]
    }
  ],
  "output": "erefide_output_type",
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_GPO_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPO_PICKER_HELPURL}"
},
{
  "type": "gpio_state_picker",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [
          "%{BKY_EREFIDE_STATE_LOW}",
          "False"
        ],
        [
          "%{BKY_EREFIDE_STATE_HIGH}",
          "True"
        ]
      ]
    }
  ],
  "output": "erefide_gpio_state_type",
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_GPIO_STATE_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPIO_STATE_PICKER_HELPURL}"
},
{
  "type": "beep_buzzer",
  "message0": "%{BKY_EREFIDE_BUZZER}",
  "args0": [
    {
      "type": "field_number",
      "name": "time",
      "value": 0.25,
      "min": 0.1,
      "max": 60,
      "precision": 0.01
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "gpios_blocks",
  "tooltip": "%{BKY_EREFIDE_BUZZER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_BUZZER_HELPURL}"
},
{
  "type": "post_data",
  "message0": "%{BKY_EREFIDE_POST_DATA}",
  "args0": [
    {
      "type": "input_value",
      "name": "data"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "misc_blocks",
  "tooltip": "%{BKY_EREFIDE_POST_DATA_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_POST_DATA_HELPURL}"
},
{
  "type": "simple_read",
  "message0": "%{BKY_EREFIDE_SIMPLE_READ}",
  "args0": [
    {
      "type": "field_number",
      "name": "time",
      "value": 1,
      "min": 0.5,
      "max": 30,
      "precision": 0.1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "ant_1",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_2",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_3",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_4",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "power",
      "value": 20,
      "min": -10,
      "max": 31.5,
      "precision": 0.1
    },
    {
      "type": "input_dummy",
    },
    {
      "type": "field_dropdown",
      "name": "epc_filter_options",
      "options": [
        [
          "%{BKY_EREFIDE_READ_FILTER_NONE}",
          "none"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_EQUAL}",
          "equal"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_STARTSWITH}",
          "startswith"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_ENDSWITH}",
          "endswith"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "output": "Array",
  "style": "rfid_blocks",
  "tooltip": "%{BKY_EREFIDE_SIMPLE_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SIMPLE_READ_HELPURL}",
  "mutator": "erefide_read_filter_mutator"
},
{
  "type": "autonomous_read",
  "message0": "%{BKY_EREFIDE_AUTONOMOUS_READ}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_checkbox",
      "name": "ant_1",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_2",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_3",
      "checked": true
    },
    {
      "type": "field_checkbox",
      "name": "ant_4",
      "checked": true
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "power",
      "value": 20,
      "min": -10,
      "max": 31.5,
      "precision": 0.1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_variable",
      "name": "read_tag",
      "variable": "EPCs"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "epc_filter_options",
      "options": [
        [
          "%{BKY_EREFIDE_READ_FILTER_NONE}",
          "none"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_EQUAL}",
          "equal"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_STARTSWITH}",
          "startswith"
        ],
        [
          "%{BKY_EREFIDE_READ_FILTER_ENDSWITH}",
          "endswith"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_dummy",
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "style": "rfid_blocks",
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_READ_HELPURL}",
  "mutator": "erefide_read_filter_mutator"
},
{
  "type": "program_start",
  "message0": "%{BKY_EREFIDE_PROGRAM_START}",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "style": "misc_blocks",
  "tooltip": "%{BKY_EREFIDE_PROGRAM_START_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_PROGRAM_START_HELPURL}"
},
{
  "type": "cron_task",
  "message0": "%{BKY_EREFIDE_CRON_TASK}",
  "args0": [
    {
      "type": "field_number",
      "name": "time",
      "value": 5,
      "min": 1,
      "max": 300
    },
    {
      "type": "field_dropdown",
      "name": "selector",
      "options": [
        [
          "%{BKY_EREFIDE_MINUTES}",
          "minutes"
        ],
        [
          "%{BKY_EREFIDE_HOURS}",
          "hours"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "style": "misc_blocks",
  "tooltip": "%{BKY_EREFIDE_CRON_TASK_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_CRON_TASK_HELPURL}"
},
{
  "type": "error_handler",
  "message0": "%{BKY_EREFIDE_ERROR_HANDLER}",
  "args0": [
    {
      "type": "field_variable",
      "name": "error_var",
      "variable": "error"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "style": "misc_blocks",
  "tooltip": "%{BKY_EREFIDE_ERROR_HANDLER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_ERROR_HANDLER_HELPURL}"
},
{
  "type": "restart_app",
  "message0": "%{BKY_EREFIDE_RESTART_APP}",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "style": "misc_blocks",
  "tooltip": "%{BKY_EREFIDE_RESTART_APP_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_RESTART_APP_HELPURL}"
},
{
  "type": "autonomous_start",
  "message0": "%{BKY_EREFIDE_AUTONOMOUS_START}",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "style": "rfid_blocks",
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_START_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_START_HELPURL}"
},
{
  "type": "autonomous_stop",
  "message0": "%{BKY_EREFIDE_AUTONOMOUS_STOP}",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "style": "rfid_blocks",
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_STOP_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_STOP_HELPURL}"
},
{
  "type": "autonomous_state",
  "message0": "%{BKY_EREFIDE_AUTONOMOUS_STATE}",
  "args0": [
    {
      "type": "input_dummy"
    }
  ],
  "output": "Boolean",
  "style": "rfid_blocks",
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_STATE_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_STATE_HELPURL}"
}]);

Blockly.Constants.Erefide.EREFIDE_READ_FILTER_MUTATOR_MIXIN = {
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('epc_filter_present', this.getFieldValue('epc_filter_options') != 'none');
    return container;
  },

  domToMutation: function(xmlElement) {
    this.updateShape_(xmlElement.getAttribute('epc_filter_present') == 'true');
  },

  updateShape_: function(should_have_input) {
    const input_idx = this.type === 'simple_read'?4:5;
    const has_input = typeof this.inputList[input_idx].fieldRow[2] !== 'undefined';
    if (should_have_input) {
      if (!has_input) {
        this.inputList[input_idx].appendField(new Blockly.FieldTextInput(), 'epc_filter_value');
      }
    } else if (has_input) {
      this.inputList[input_idx].removeField('epc_filter_value');
    }
  }
};

Blockly.Constants.Erefide.EREFIDE_READ_FILTER_MUTATOR_EXTENSION = function() {
  this.getField('epc_filter_options').setValidator(function(option) {
    this.getSourceBlock().updateShape_(option != 'none');
  });
};

Blockly.Extensions.registerMutator('erefide_read_filter_mutator', Blockly.Constants.Erefide.EREFIDE_READ_FILTER_MUTATOR_MIXIN, Blockly.Constants.Erefide.EREFIDE_READ_FILTER_MUTATOR_EXTENSION);