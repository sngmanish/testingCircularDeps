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
  return Editor;
});
