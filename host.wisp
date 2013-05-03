(import [read*] "../lib/reader")
(import [compile*] "../lib/compiler")
(import [rest] "../lib/sequence")

(defn **out** [])
(set! (.-exports window) {})
(set! (.-Out window) **out**)

(defn send
  [packet]
  (let [event (.create-event document :CustomEvent)]
    (.init-custom-event event :client false true packet)
    (.dispatch-event window event)))


(defn start-host!
  []
  (.add-event-listener window :server handle false))

(defn handle
  [packet]
  (let [address (:to (:detail packet))
        input (:source (:detail packet))
        output (evaluate input)
        result (represent output)]
    (set! (get **out** address) result)
    (send {:from address
           :message result})))

(defn evaluate
  [input]
  (try (let [forms (read* input)
             js-code (compile* forms)
             result (.eval window js-code)]
         {:input input
          :forms forms
          :js-code js-code
          :result result})
    (catch error {:input input
                  :error error})))

(defn represent
  [output]
  (or (:error output)
      (:result output)))