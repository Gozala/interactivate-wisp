(ns interactivate-wisp.host
  (:require [interactivate.render :as render]
            [wisp.reader :refer [read*]]
            [wisp.compiler :refer [compile]]
            [wisp.sequence :refer [first rest list conj]]
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
(set! (.-**print-analyzed** window) false)
(set! (.-**print-as-js** window) false)


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
        result output]
    (set! (get **out** address) result)
    (send {:from address
           :result result})))

(defn evaluate
  [input]
  (let [result (compile input {:include-ast true
                               :include-forms true})

        js-code (:code result)
        prefix-code (if (identical? "var" (subs js-code 0 3))
                      ""
                      "_ = ")
        js-normalized (str "try { "
                           ;prefix-code
                           js-code
                           " } catch(e) { e }")
        output (if (not (:error result))
                 (.eval window js-normalized))]
         {:error (and (:error result) {:value (:error result)})
          :read (if **print-read**
                  {:title "Read" :value (:forms result)})
          :ast (if **print-analyzed**
                 {:title "Analyzed" :value (:ast result)})
          :js-code (if **print-compiled**
                     {:title "Compiled JS" :value js-code})
          :result {:title (if (or **print-read**
                                  **print-analyzed**
                                  **print-compiled**)
                            "Result")
                   :value (if **print-as-js**
                            output
                            (pr-str output))}}))
