Blockly.defineBlocksWithJsonArray([{
  "type": "set_gpo",
  "message0": "%{BKY_EREFIDE_SET_GPO_1} %1 %{BKY_EREFIDE_SET_GPO_2} %2",
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_SET_GPO_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SET_GPO_HELP_URL}"
},
{
  "type": "read_gpi",
  "message0": "%{BKY_EREFIDE_READ_GPI} %1",
  "args0": [
    {
      "type": "input_value",
      "name": "pin",
      "check": "erefide_input_type"
    }
  ],
  "output": "erefide_gpio_state_type",
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_READ_GPI_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_READ_GPI_HELP_URL}"
},
{
  "type": "gpi_trigger",
  "message0": "%{BKY_EREFIDE_GPI_TRIGGER_1} %1 %{BKY_EREFIDE_GPI_TRIGGER_2} %2 %3 %{BKY_EREFIDE_GPI_TRIGGER_3} %4",
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_GPI_TRIGGER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPI_TRIGGER_HELP_URL}"
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_GPI_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPI_PICKER_HELP_URL}"
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_GPO_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPO_PICKER_HELP_URL}"
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_GPIO_STATE_PICKER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_GPIO_STATE_PICKER_HELP_URL}"
},
{
  "type": "sleep",
  "message0": "%{BKY_EREFIDE_SLEEP_1} %1 %{BKY_EREFIDE_SLEEP_2}",
  "args0": [
    {
      "type": "field_number",
      "name": "sleep_time",
      "value": 1,
      "min": 0.1,
      "max": 300,
      "precision": 0.01
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 210,
  "tooltip": "%{BKY_EREFIDE_SLEEP_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SLEEP_HELP_URL}"
},
{
  "type": "beep_buzzer",
  "message0": "%{BKY_EREFIDE_BUZZER_1} %1 %{BKY_EREFIDE_BUZZER_2}",
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_BUZZER_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_BUZZER_HELP_URL}"
},
{
  "type": "post_data",
  "message0": "%{BKY_EREFIDE_POST_DATA_1} %1 %{BKY_EREFIDE_POST_DATA_2} %2",
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_POST_DATA_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_POST_DATA_HELP_URL}"
},
{
  "type": "current_time",
  "message0": "%{BKY_EREFIDE_CURRENT_TIME}",
  "output": "String",
  "colour": 160,
  "tooltip": "%{BKY_EREFIDE_CURRENT_TIME_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_CURRENT_TIME_HELP_URL}"
},
{
  "type": "current_date",
  "message0": "%{BKY_EREFIDE_CURRENT_DATE}",
  "output": "String",
  "colour": 160,
  "tooltip": "%{BKY_EREFIDE_CURRENT_DATE_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_CURRENT_DATE_HELP_URL}"
},
{
  "type": "current_datetime",
  "message0": "%{BKY_EREFIDE_CURRENT_DATETIME}",
  "output": "String",
  "colour": 160,
  "tooltip": "%{BKY_EREFIDE_CURRENT_DATETIME_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_CURRENT_DATETIME_HELP_URL}"
},
{
  "type": "simple_read",
  "message0": "%{BKY_EREFIDE_SIMPLE_READ_1} %1 %{BKY_EREFIDE_SIMPLE_READ_2} %2 %{BKY_EREFIDE_SIMPLE_READ_3} %3 %4 ANT1 %5 ANT2 %6 ANT3 %7 ANT4 %8 %{BKY_EREFIDE_SIMPLE_READ_4} %9 %{BKY_EREFIDE_SIMPLE_READ_5}",
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
      "value": 75,
      "min": 1,
      "max": 100,
      "precision": 1
    }
  ],
  "inputsInline": false,
  "output": null,
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_SIMPLE_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_SIMPLE_READ_HELP_URL}"
},
{
  "type": "autonomous_read",
  "message0": "%{BKY_EREFIDE_AUTONOMOUS_READ_1} %1 %{BKY_EREFIDE_AUTONOMOUS_READ_2} %2 %3 ANT1 %4 ANT2 %5 ANT3 %6 ANT4 %7 %{BKY_EREFIDE_AUTONOMOUS_READ_5} %8 %{BKY_EREFIDE_AUTONOMOUS_READ_6} %9 %{BKY_EREFIDE_AUTONOMOUS_READ_3} %10 %11 %{BKY_EREFIDE_AUTONOMOUS_READ_4} %12 %13",
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
      "value": 75,
      "min": 1,
      "max": 100,
      "precision": 1
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
  "colour": 0,
  "tooltip": "%{BKY_EREFIDE_AUTONOMOUS_READ_TOOLTIP}",
  "helpUrl": "%{BKY_EREFIDE_AUTONOMOUS_READ_HELP_URL}"
}]);