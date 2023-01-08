(ns script.core
  (:require 
   ["ws"]))

(defonce args-var (volatile! nil))

(defn main [& args]
  (println "=>" args)
  (vreset! args-var args)
  args)

(defn ^:dev/before-load loading []
  (println "\nLoading code changes..."))

(defn ^:dev/after-load activate! [] 
  (try
    (tap> (apply main @args-var))
    (catch :default e 
      (println e))))
