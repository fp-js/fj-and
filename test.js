"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var and = _interopRequire(require("./"));




test("fj-and", function (t) {
  t.plan(7);

  var T = function () {
    return true;
  };
  var F = function () {
    return false;
  };
  var isT = function (x) {
    return x === true;
  };

  t.ok(and(T, T)());
  t.ok(and(T)(T)());

  t.ok(and(isT, isT)(true));
  t.notOk(and(isT, isT)(false));
  t.notOk(and(T, F)());
  t.notOk(and(F, F)());
  t.notOk(and(F, F)());
});