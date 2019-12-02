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

Blockly.Themes.MaterialDesign.defaultBlockStyles = {
  "erefide_blocks": {
    "colourPrimary": "#4faac6",
    "colourSecondary": "#b9dde8",
    "colourTertiary": "#3f889e"
  },
  "list_blocks": {
    "colourPrimary": "#708fcc",
    "colourSecondary": "#c6d2eb",
    "colourTertiary": "#5a72a3"
  },
  "logic_blocks": {
    "colourPrimary": "#dc7b63",
    "colourSecondary": "#f1cac1",
    "colourTertiary": "#b0624f"
  },
  "loop_blocks": {
    "colourPrimary": "#ffb340",
    "colourSecondary": "#ffe1b3",
    "colourTertiary": "#cc8f33"
  },
  "math_blocks": {
    "colourPrimary": "#46964b",
    "colourSecondary": "#b5d5b7",
    "colourTertiary": "#38783c"
  },
  "text_blocks": {
    "colourPrimary": "#993d99",
    "colourSecondary": "#d6b1d6",
    "colourTertiary": "#7a317a"
  },
  "variable_blocks": {
    "colourPrimary": "#686bac",
    "colourSecondary": "#c3c4de",
    "colourTertiary": "#53568a"
  }
};

Blockly.Themes.MaterialDesign.categoryStyles = {
  "erefide_category": {
    "colour": "#0099c6"
  },
  "list_category": {
    "colour": "#3366cc"
  },
  "logic_category": {
    "colour": "#dc3912"
  },
  "loop_category": {
    "colour": "#ff9900"
  },
  "math_category": {
    "colour": "#109618"
  },
  "text_category": {
    "colour": "#990099"
  },
  "variable_category": {
    "colour": "#3b3eac"
  }
};

Blockly.Themes.MaterialDesign =
    new Blockly.Theme(Blockly.Themes.MaterialDesign.defaultBlockStyles,
        Blockly.Themes.MaterialDesign.categoryStyles);
