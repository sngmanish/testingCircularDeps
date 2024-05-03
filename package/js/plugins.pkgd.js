(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(require("editor"))
    : typeof define === "function" && define.amd
    ? define(["@test/editor"], factory)
    : factory(global.Editor);
})(this, function (E) {
  "use strict";
  E.plugin1 = function () {
    function f1() {
      console.log("Hello from plugin1 f1");
    }
    function f2() {
      console.log("Hello from plugin1 f2");
    }

    return {
      f1: f1,
      f2: f2,
    };
  };

  E.plugin2 = function () {
    function f1() {
      console.log("Hello from plugin2 f1");
    }
    function f2() {
      console.log("Hello from plugin2 f2");
    }

    return {
      f1: f1,
      f2: f2,
    };
  };
});
