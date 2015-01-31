"use strict";

var curry2 = require("fj-curry").curry2;



function _and(x, y) {
  return function () {
    return x() && y();
  };
}

var and = curry2(_and);

module.exports = and;