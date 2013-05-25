(ns interactivate-wisp.host
  (:require [interactivate.render :as render]
            [wisp.reader :refer [read*]]
            [wisp.compiler :refer [compile*]]
            [wisp.sequence :refer [first rest list]]
            [wisp.ast :refer [symbol pr-str]]
            [wisp.runtime :refer [subs]]
            [util :refer [inspect]]))

(defn **out** [])
(set! (.-exports window) {})
(set! (.-module window) {:exports (.-exports window)})
(set! (.-list window) list)
(set! (.-symbol window) symbol)
(set! (.-Out window) **out**)
(set! (.-**print-compiled** window) false)
(set! (.-**print-read** window) false)

(defn EvaluationResult
  [output]
  (set! (.-value this) output)
  this)

(.define render EvaluationResult
  (fn [result]
    (let [output (.-value result)
          view (.create-element document "pre")]
      (set! (.-innerHTML view)
            (or (:error output)
                (str (if **print-read**
                       (str "<h1>Read</h1>"
                            "<div>"
                            (inspect (:forms output))
                            "</div>")
                       "")
                     (if **print-compiled**
                       (str "<h3>Compiled JS</h3>"
                            "<div>" (:js-code output) "</div>")
                       "")
                     "<h3>Eval result</h3>"
                     "<div>" (:print output) "</div>")))
      view)))

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
        result (EvaluationResult. output)]
    (set! (get **out** address) result)
    (send {:from address
           :message result})))

(defn evaluate
  [input]
  (try (let [forms (read* input)
             js-code (compile* forms)
             prefix-code (if (identical? "var" (subs js-code 0 3))
                           ""
                           "_ = ")
             js-normalized (str "try { "
                                prefix-code
                                js-code
                                " } catch(e) { e }")
             result (.eval window js-normalized)]
         {:input input
          :forms forms
          :js-code js-code
          :result result
          :print (pr-str result)})
    (catch error {:input input
                  :error error})))

