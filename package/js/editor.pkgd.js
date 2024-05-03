(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
    ? define(factory)
    : (global.Editor = factory());
})(this, function () {
  "use strict";
  function Editor() {
    return "Editor";
  }
  Editor.greet = function () {
    return "Hello, I'm the Editor module!";
  };

  Editor.plugin1 = function () {
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

  Editor.plugin2 = function () {
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
  return Editor;
});
