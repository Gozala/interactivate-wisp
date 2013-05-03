(import interactivate "interactivate")
(import [start-host!] "./host")

(import hashare "codemirror-hashare")
(import persist "codemirror-persist")
(import activine "codemirror-activine")

;; Install plugins

(interactivate CodeMirror)

;; Install other plugins

(activine CodeMirror)
(hashare CodeMirror)
(persist CodeMirror)

;; Start evaluation host

(start-host!)

(def editor (CodeMirror (.-body document)
                        {;:hashare true
                         :persist true
                         :matchBrackets true
                         :electricChars true
                         :activeLine true
                         :autofocus true
                         :theme "solarized dark"
                         :mode :clojure

                         :interactivate true
                         :interactiveSeparator #"(?m)^;; =>[^\n]*$"

                         :extraKeys {:Tab :indentSelection}}))

(set! (.-editor global) editor)