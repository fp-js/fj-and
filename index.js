"use strict";

var curry2 = require("fj-curry").curry2;



function _and(x, y) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return x.apply(null, args) && y.apply(null, args);
  };
}

var and = curry2(_and);

module.exports = and;