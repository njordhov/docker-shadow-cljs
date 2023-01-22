(ns script.core-nodetest
  (:require 
   [cljs.test 
    :refer [deftest is]]))

(deftest true-test
  (is (= true true)))
