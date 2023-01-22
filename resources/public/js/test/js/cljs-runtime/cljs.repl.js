goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56703){
var map__56704 = p__56703;
var map__56704__$1 = cljs.core.__destructure_map(map__56704);
var m = map__56704__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56704__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56704__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56706_56808 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56707_56809 = null;
var count__56708_56810 = (0);
var i__56709_56811 = (0);
while(true){
if((i__56709_56811 < count__56708_56810)){
var f_56812 = chunk__56707_56809.cljs$core$IIndexed$_nth$arity$2(null,i__56709_56811);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56812], 0));


var G__56813 = seq__56706_56808;
var G__56814 = chunk__56707_56809;
var G__56815 = count__56708_56810;
var G__56816 = (i__56709_56811 + (1));
seq__56706_56808 = G__56813;
chunk__56707_56809 = G__56814;
count__56708_56810 = G__56815;
i__56709_56811 = G__56816;
continue;
} else {
var temp__5804__auto___56817 = cljs.core.seq(seq__56706_56808);
if(temp__5804__auto___56817){
var seq__56706_56818__$1 = temp__5804__auto___56817;
if(cljs.core.chunked_seq_QMARK_(seq__56706_56818__$1)){
var c__5568__auto___56819 = cljs.core.chunk_first(seq__56706_56818__$1);
var G__56820 = cljs.core.chunk_rest(seq__56706_56818__$1);
var G__56821 = c__5568__auto___56819;
var G__56822 = cljs.core.count(c__5568__auto___56819);
var G__56823 = (0);
seq__56706_56808 = G__56820;
chunk__56707_56809 = G__56821;
count__56708_56810 = G__56822;
i__56709_56811 = G__56823;
continue;
} else {
var f_56824 = cljs.core.first(seq__56706_56818__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_56824], 0));


var G__56825 = cljs.core.next(seq__56706_56818__$1);
var G__56826 = null;
var G__56827 = (0);
var G__56828 = (0);
seq__56706_56808 = G__56825;
chunk__56707_56809 = G__56826;
count__56708_56810 = G__56827;
i__56709_56811 = G__56828;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56829 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_56829], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_56829)))?cljs.core.second(arglists_56829):arglists_56829)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__56711_56830 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56712_56831 = null;
var count__56713_56832 = (0);
var i__56714_56833 = (0);
while(true){
if((i__56714_56833 < count__56713_56832)){
var vec__56724_56834 = chunk__56712_56831.cljs$core$IIndexed$_nth$arity$2(null,i__56714_56833);
var name_56835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724_56834,(0),null);
var map__56727_56836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724_56834,(1),null);
var map__56727_56837__$1 = cljs.core.__destructure_map(map__56727_56836);
var doc_56838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727_56837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56727_56837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56835], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56839], 0));

if(cljs.core.truth_(doc_56838)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56838], 0));
} else {
}


var G__56840 = seq__56711_56830;
var G__56841 = chunk__56712_56831;
var G__56842 = count__56713_56832;
var G__56843 = (i__56714_56833 + (1));
seq__56711_56830 = G__56840;
chunk__56712_56831 = G__56841;
count__56713_56832 = G__56842;
i__56714_56833 = G__56843;
continue;
} else {
var temp__5804__auto___56844 = cljs.core.seq(seq__56711_56830);
if(temp__5804__auto___56844){
var seq__56711_56845__$1 = temp__5804__auto___56844;
if(cljs.core.chunked_seq_QMARK_(seq__56711_56845__$1)){
var c__5568__auto___56846 = cljs.core.chunk_first(seq__56711_56845__$1);
var G__56847 = cljs.core.chunk_rest(seq__56711_56845__$1);
var G__56848 = c__5568__auto___56846;
var G__56849 = cljs.core.count(c__5568__auto___56846);
var G__56850 = (0);
seq__56711_56830 = G__56847;
chunk__56712_56831 = G__56848;
count__56713_56832 = G__56849;
i__56714_56833 = G__56850;
continue;
} else {
var vec__56728_56851 = cljs.core.first(seq__56711_56845__$1);
var name_56852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56728_56851,(0),null);
var map__56731_56853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56728_56851,(1),null);
var map__56731_56854__$1 = cljs.core.__destructure_map(map__56731_56853);
var doc_56855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56731_56854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56731_56854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_56852], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_56856], 0));

if(cljs.core.truth_(doc_56855)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_56855], 0));
} else {
}


var G__56857 = cljs.core.next(seq__56711_56845__$1);
var G__56858 = null;
var G__56859 = (0);
var G__56860 = (0);
seq__56711_56830 = G__56857;
chunk__56712_56831 = G__56858;
count__56713_56832 = G__56859;
i__56714_56833 = G__56860;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__56732 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56733 = null;
var count__56734 = (0);
var i__56735 = (0);
while(true){
if((i__56735 < count__56734)){
var role = chunk__56733.cljs$core$IIndexed$_nth$arity$2(null,i__56735);
var temp__5804__auto___56861__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___56861__$1)){
var spec_56862 = temp__5804__auto___56861__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56862)], 0));
} else {
}


var G__56863 = seq__56732;
var G__56864 = chunk__56733;
var G__56865 = count__56734;
var G__56866 = (i__56735 + (1));
seq__56732 = G__56863;
chunk__56733 = G__56864;
count__56734 = G__56865;
i__56735 = G__56866;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__56732);
if(temp__5804__auto____$1){
var seq__56732__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__56732__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__56732__$1);
var G__56867 = cljs.core.chunk_rest(seq__56732__$1);
var G__56868 = c__5568__auto__;
var G__56869 = cljs.core.count(c__5568__auto__);
var G__56870 = (0);
seq__56732 = G__56867;
chunk__56733 = G__56868;
count__56734 = G__56869;
i__56735 = G__56870;
continue;
} else {
var role = cljs.core.first(seq__56732__$1);
var temp__5804__auto___56871__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___56871__$2)){
var spec_56872 = temp__5804__auto___56871__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_56872)], 0));
} else {
}


var G__56873 = cljs.core.next(seq__56732__$1);
var G__56874 = null;
var G__56875 = (0);
var G__56876 = (0);
seq__56732 = G__56873;
chunk__56733 = G__56874;
count__56734 = G__56875;
i__56735 = G__56876;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__56877 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__56878 = cljs.core.ex_cause(t);
via = G__56877;
t = G__56878;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__56739 = datafied_throwable;
var map__56739__$1 = cljs.core.__destructure_map(map__56739);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56739__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56739__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__56740 = cljs.core.last(via);
var map__56740__$1 = cljs.core.__destructure_map(map__56740);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56740__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56740__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56740__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__56741 = data;
var map__56741__$1 = cljs.core.__destructure_map(map__56741);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56741__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56741__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56741__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__56742 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__56742__$1 = cljs.core.__destructure_map(map__56742);
var top_data = map__56742__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56742__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__56743 = phase;
var G__56743__$1 = (((G__56743 instanceof cljs.core.Keyword))?G__56743.fqn:null);
switch (G__56743__$1) {
case "read-source":
var map__56744 = data;
var map__56744__$1 = cljs.core.__destructure_map(map__56744);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__56745 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__56745__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56745,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56745);
var G__56745__$2 = (cljs.core.truth_((function (){var fexpr__56750 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56750.cljs$core$IFn$_invoke$arity$1 ? fexpr__56750.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56750.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56745__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56745__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56745__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56745__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__56751 = top_data;
var G__56751__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56751,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__56751);
var G__56751__$2 = (cljs.core.truth_((function (){var fexpr__56752 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56752.cljs$core$IFn$_invoke$arity$1 ? fexpr__56752.cljs$core$IFn$_invoke$arity$1(source) : fexpr__56752.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56751__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__56751__$1);
var G__56751__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56751__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56751__$2);
var G__56751__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56751__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56751__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56751__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56751__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__56753 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56753,(3),null);
var G__56760 = top_data;
var G__56760__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56760,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__56760);
var G__56760__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56760__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__56760__$1);
var G__56760__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56760__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__56760__$2);
var G__56760__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56760__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__56760__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56760__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__56760__$4;
}

break;
case "execution":
var vec__56761 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56761,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56761,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56761,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56761,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56738_SHARP_){
var or__5045__auto__ = (p1__56738_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__56764 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__56764.cljs$core$IFn$_invoke$arity$1 ? fexpr__56764.cljs$core$IFn$_invoke$arity$1(p1__56738_SHARP_) : fexpr__56764.call(null,p1__56738_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__56765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__56765__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56765,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__56765);
var G__56765__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56765__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__56765__$1);
var G__56765__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56765__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__56765__$2);
var G__56765__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56765__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__56765__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56765__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__56765__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56743__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__56768){
var map__56769 = p__56768;
var map__56769__$1 = cljs.core.__destructure_map(map__56769);
var triage_data = map__56769__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56769__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__56770 = phase;
var G__56770__$1 = (((G__56770 instanceof cljs.core.Keyword))?G__56770.fqn:null);
switch (G__56770__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__56771 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__56772 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56773 = loc;
var G__56774 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56775_56882 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56776_56883 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56777_56884 = true;
var _STAR_print_fn_STAR__temp_val__56778_56885 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56777_56884);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56778_56885);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56766_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56766_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56776_56883);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56775_56882);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56771,G__56772,G__56773,G__56774) : format.call(null,G__56771,G__56772,G__56773,G__56774));

break;
case "macroexpansion":
var G__56779 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__56780 = cause_type;
var G__56781 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56782 = loc;
var G__56783 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56779,G__56780,G__56781,G__56782,G__56783) : format.call(null,G__56779,G__56780,G__56781,G__56782,G__56783));

break;
case "compile-syntax-check":
var G__56784 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__56785 = cause_type;
var G__56786 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56787 = loc;
var G__56788 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56784,G__56785,G__56786,G__56787,G__56788) : format.call(null,G__56784,G__56785,G__56786,G__56787,G__56788));

break;
case "compilation":
var G__56789 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__56790 = cause_type;
var G__56791 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56792 = loc;
var G__56793 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56789,G__56790,G__56791,G__56792,G__56793) : format.call(null,G__56789,G__56790,G__56791,G__56792,G__56793));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__56794 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__56795 = symbol;
var G__56796 = loc;
var G__56797 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__56798_56890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__56799_56891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__56800_56892 = true;
var _STAR_print_fn_STAR__temp_val__56801_56893 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__56800_56892);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__56801_56893);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56767_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56767_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__56799_56891);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__56798_56890);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__56794,G__56795,G__56796,G__56797) : format.call(null,G__56794,G__56795,G__56796,G__56797));
} else {
var G__56802 = "Execution error%s at %s(%s).\n%s\n";
var G__56803 = cause_type;
var G__56804 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__56805 = loc;
var G__56806 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__56802,G__56803,G__56804,G__56805,G__56806) : format.call(null,G__56802,G__56803,G__56804,G__56805,G__56806));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56770__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
