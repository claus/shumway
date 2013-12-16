/* -*- Mode: js; js-indent-level: 2; indent-tabs-mode: nil; tab-width: 2 -*- */
/* vim: set shiftwidth=2 tabstop=2 autoindent cindent expandtab: */
/*
 * Copyright 2013 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var BitmapFilterDefinition = (function () {
  var EPS = 0.000000001;
  var blurFilterStepWidths = [
    2,
    1 / 1.05,
    1 / 1.35,
    1 / 1.55,
    1 / 1.75,
    1 / 1.9,
    1 / 2,
    1 / 2.1,
    1 / 2.2,
    1 / 2.3,
    1 / 2.5,
    1 / 3,
    1 / 3,
    1 / 3.5,
    1 / 3.5
  ];
  var def = {
    __class__: 'flash.filters.BitmapFilter',

    initialize: function () {

    },
    _updateBlurBounds: function (bounds, isBlurFilter) {
      var stepWidth = blurFilterStepWidths[this._quality - 1];
      var bx = this._blurX;
      var by = this._blurY;
      if (isBlurFilter) {
        var stepWidth4 = stepWidth / 4;
        bx -= stepWidth4;
        by -= stepWidth4;
      }
      var bh = Math.ceil((bx < 1 ? 1 : bx) / (stepWidth - EPS));
      var bv = Math.ceil((by < 1 ? 1 : by) / (stepWidth - EPS));
      bounds.xmin -= bh;
      bounds.xmax += bh;
      bounds.ymin -= bv;
      bounds.ymax += bv;
    },
    _updateFilterBounds: function (bounds) {

    }
  };

  def.__glue__ = { };

  return def;
}).call(this);
