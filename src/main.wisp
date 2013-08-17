(ns interactivate-wisp.main
  (:require [interactivate :as interactivate]
            [codemirror-hashare :as hashare]
            [codemirror-persist :as persist]
            [interactivate-wisp.host :refer [start-host!]]))


;; Install plugins

(interactivate CodeMirror)

;; Install other plugins
(persist CodeMirror)

;; Start evaluation host

(start-host!)

(def editor (CodeMirror (.-body document)
                        {:persist true
                         :matchBrackets true
                         :electricChars true
                         :styleActiveLine true
                         :autofocus true
                         :theme "solarized dark"
                         :mode :clojure

                         :value (.-textContent (.get-element-by-id document :intro))

                         :interactivate true
                         :interactiveSeparator #"(?m)^;; =>[^\n]*$"
                         :interactiveSection ";; =>\n"

                         :extraKeys {:Tab :indentSelection}}))

(set! (.-editor global) editor)
