(ns interactivate-wisp.main
  (:require [interactivate :as interactivate]
            [codemirror-hashare :as hashare]
            [codemirror-persist :as persist])
  (:use [interactivate-wisp.host :only [start-host!]]))


;; Install plugins

(interactivate CodeMirror)

;; Install other plugins

(hashare CodeMirror)
(persist CodeMirror)

;; Start evaluation host

(start-host!)

(def editor (CodeMirror (.-body document)
                        {;:hashare true
                         :persist true
                         :matchBrackets true
                         :electricChars true
                         :styleActiveLine true
                         :autofocus true
                         :theme "solarized dark"
                         :mode :clojure

                         :value (.-textContent (.get-element-by-id document :intro))

                         :interactivate true
                         :interactiveSeparator #"(?m)^;; =>[^\n]*$"

                         :extraKeys {:Tab :indentSelection}}))

(set! (.-editor global) editor)
