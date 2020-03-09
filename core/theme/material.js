/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

goog.provide('Blockly.Themes.MaterialDesign');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.MaterialDesign = {};

Blockly.Themes.MaterialDesign.defaultBlockStyles={
  "gpios_blocks": {
    "colourPrimary": "#26baf1",
    "colourSecondary": "#a8e3f9",
    "colourTertiary": "#1e95c1"
  },
  "list_blocks": {
    "colourPrimary": "#26b26a",
    "colourSecondary": "#a8e0c3",
    "colourTertiary": "#1e8e55"
  },
  "logic_blocks": {
    "colourPrimary": "#f13f45",
    "colourSecondary": "#f9b2b5",
    "colourTertiary": "#c13237"
  },
  "loop_blocks": {
    "colourPrimary": "#f9a43f",
    "colourSecondary": "#fddbb2",
    "colourTertiary": "#c78332"
  },
  "math_blocks": {
    "colourPrimary": "#a49258",
    "colourSecondary": "#dbd3bc",
    "colourTertiary": "#837546"
  },
  "misc_blocks": {
    "colourPrimary": "#a2479f",
    "colourSecondary": "#dab5d9",
    "colourTertiary": "#82397f"
  },
  "rfid_blocks": {
    "colourPrimary": "#6f8c90",
    "colourSecondary": "#c5d1d3",
    "colourTertiary": "#597073"
  },
  "text_blocks": {
    "colourPrimary": "#9dcf5c",
    "colourSecondary": "#d8ecbe",
    "colourTertiary": "#7ea64a"
  },
  "variable_blocks": {
    "colourPrimary": "#648dc7",
    "colourSecondary": "#c1d1e9",
    "colourTertiary": "#50719f"
  }
};

Blockly.Themes.MaterialDesign.categoryStyles={
  logic_category:     {colour:"#ee1d24"},
  loop_category:      {colour:"#f8941d"},
  math_category:      {colour:"#947f3a"},
  text_category:      {colour:"#8cc63f"},
  list_category:      {colour:"#00a550"},
  rfid_category:      {colour:"#56787d"},
  gpios_category:     {colour:"#00aeef"},
  misc_category:      {colour:"#92278e"},
  variable_category:  {colour:"#4979bd"}
};

Blockly.Themes.MaterialDesign =
    new Blockly.Theme(Blockly.Themes.MaterialDesign.defaultBlockStyles,
                      Blockly.Themes.MaterialDesign.categoryStyles);