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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
  "tooltip": "%{BKY_EREFIDE_READ_GPI_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_READ_GPI_HELPURL}"
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
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
    }
  ],
  "inputsInline": false,
  "output": null,
  "style": "erefide_blocks",
  "tooltip": "%{BKY_EREFIDE_SIMPLE_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SIMPLE_READ_HELPURL}"
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
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "callback"
    }
  ],
  "style": "erefide_blocks",
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_READ_HELPURL}"
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
  "style": "erefide_blocks",
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
  "style": "erefide_blocks",
  "tooltip": "%{BKY_EREFIDE_CRON_TASK_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_CRON_HELPURL}"
}]);