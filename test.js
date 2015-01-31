"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var and = _interopRequire(require("./"));




test("fj-and", function (t) {
  t.plan(5);

  var T = function () {
    return true;
  };
  var F = function () {
    return false;
  };

  t.ok(and(T, T)());
  t.ok(and(T)(T)());
  t.notOk(and(T, F)());
  t.notOk(and(F, F)());
  t.notOk(and(F, F)());
});