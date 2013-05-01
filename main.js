"use strict";

var interactivate = require("../interactivate")
var server = require("../host/window")

var hashare = require("codemirror-hashare")
var persist = require("codemirror-persist")
var activine = require("codemirror-activine")

// Install plugins
interactivate(CodeMirror)
activine(CodeMirror)
hashare(CodeMirror)
persist(CodeMirror)


var editor = CodeMirror(document.body, {
  value: document.getElementById("intro").textContent.substr(1),
  hashare: true,
  persist: true,
  matchBrackets: true,
  electricChars: true,
  interactivate: true,
  activeLine: true,
  autofocus: true,
  theme: "solarized dark",
  mode: "javascript",
  extraKeys: {
    "Tab": function indent(editor) {
      if (!editor.getOption("indentWithTabs")) {
        var size = editor.getOption("indentUnit")
        var indentation = Array(size + 1).join(" ")
        editor.replaceSelection(indentation, "end")
      }
    }
  }
})

// Start an evaluation server
server(editor)

global.editor = editor