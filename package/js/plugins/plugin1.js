(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(require("editor"))
    : typeof define === "function" && define.amd
    ? define(["editor"], factory)
    : factory(global.Editor);
})(this, function (E) {
  console.log({ E });
  ("use strict");
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
});
