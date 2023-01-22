goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__57948){
var vec__57949 = p__57948;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57949,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57949,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__57952 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__57952__$1 = (((G__57952 instanceof cljs.core.Keyword))?G__57952.fqn:null);
switch (G__57952__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__57954 = (function (){
var seq__57955 = cljs.core.seq(vars__$1);
var chunk__57956 = null;
var count__57957 = (0);
var i__57958 = (0);
while(true){
if((i__57958 < count__57957)){
var v = chunk__57956.cljs$core$IIndexed$_nth$arity$2(null,i__57958);
var temp__5804__auto___58002 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___58002)){
var t_58003 = temp__5804__auto___58002;
var G__57961_58004 = ((function (seq__57955,chunk__57956,count__57957,i__57958,t_58003,temp__5804__auto___58002,v,each_fixture_fn,G__57952,G__57952__$1,env,once_fixtures,each_fixtures,vec__57949,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_58003)));
});})(seq__57955,chunk__57956,count__57957,i__57958,t_58003,temp__5804__auto___58002,v,each_fixture_fn,G__57952,G__57952__$1,env,once_fixtures,each_fixtures,vec__57949,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__57961_58004) : each_fixture_fn.call(null,G__57961_58004));
} else {
}


var G__58005 = seq__57955;
var G__58006 = chunk__57956;
var G__58007 = count__57957;
var G__58008 = (i__57958 + (1));
seq__57955 = G__58005;
chunk__57956 = G__58006;
count__57957 = G__58007;
i__57958 = G__58008;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57955);
if(temp__5804__auto__){
var seq__57955__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57955__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57955__$1);
var G__58009 = cljs.core.chunk_rest(seq__57955__$1);
var G__58010 = c__5568__auto__;
var G__58011 = cljs.core.count(c__5568__auto__);
var G__58012 = (0);
seq__57955 = G__58009;
chunk__57956 = G__58010;
count__57957 = G__58011;
i__57958 = G__58012;
continue;
} else {
var v = cljs.core.first(seq__57955__$1);
var temp__5804__auto___58013__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5804__auto___58013__$1)){
var t_58014 = temp__5804__auto___58013__$1;
var G__57962_58015 = ((function (seq__57955,chunk__57956,count__57957,i__57958,t_58014,temp__5804__auto___58013__$1,v,seq__57955__$1,temp__5804__auto__,each_fixture_fn,G__57952,G__57952__$1,env,once_fixtures,each_fixtures,vec__57949,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_58014)));
});})(seq__57955,chunk__57956,count__57957,i__57958,t_58014,temp__5804__auto___58013__$1,v,seq__57955__$1,temp__5804__auto__,each_fixture_fn,G__57952,G__57952__$1,env,once_fixtures,each_fixtures,vec__57949,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__57962_58015) : each_fixture_fn.call(null,G__57962_58015));
} else {
}


var G__58016 = cljs.core.next(seq__57955__$1);
var G__58017 = null;
var G__58018 = (0);
var G__58019 = (0);
seq__57955 = G__58016;
chunk__57956 = G__58017;
count__57957 = G__58018;
i__57958 = G__58019;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__57953 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__57953.cljs$core$IFn$_invoke$arity$1 ? fexpr__57953.cljs$core$IFn$_invoke$arity$1(G__57954) : fexpr__57953.call(null,G__57954));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__57952__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__57947_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__57947_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__57963 = shadow.test.env.get_test_ns_info(ns);
var map__57963__$1 = cljs.core.__destructure_map(map__57963);
var test_ns = map__57963__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57963__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__57965,vars){
var map__57966 = p__57965;
var map__57966__$1 = cljs.core.__destructure_map(map__57966);
var env = map__57966__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57966__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__57967_58020 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__57969_58021 = null;
var count__57970_58022 = (0);
var i__57971_58023 = (0);
while(true){
if((i__57971_58023 < count__57970_58022)){
var vec__57981_58024 = chunk__57969_58021.cljs$core$IIndexed$_nth$arity$2(null,i__57971_58023);
var test_ns_58025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57981_58024,(0),null);
var ns_info_58026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57981_58024,(1),null);
var map__57984_58027 = ns_info_58026;
var map__57984_58028__$1 = cljs.core.__destructure_map(map__57984_58027);
var fixtures_58029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57984_58028__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___58030 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_58029);
if(cljs.core.truth_(temp__5804__auto___58030)){
var fix_58031 = temp__5804__auto___58030;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58025,fix_58031], 0));
} else {
}

var temp__5804__auto___58032 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_58029);
if(cljs.core.truth_(temp__5804__auto___58032)){
var fix_58033 = temp__5804__auto___58032;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58025,fix_58033], 0));
} else {
}


var G__58034 = seq__57967_58020;
var G__58035 = chunk__57969_58021;
var G__58036 = count__57970_58022;
var G__58037 = (i__57971_58023 + (1));
seq__57967_58020 = G__58034;
chunk__57969_58021 = G__58035;
count__57970_58022 = G__58036;
i__57971_58023 = G__58037;
continue;
} else {
var temp__5804__auto___58038 = cljs.core.seq(seq__57967_58020);
if(temp__5804__auto___58038){
var seq__57967_58039__$1 = temp__5804__auto___58038;
if(cljs.core.chunked_seq_QMARK_(seq__57967_58039__$1)){
var c__5568__auto___58040 = cljs.core.chunk_first(seq__57967_58039__$1);
var G__58041 = cljs.core.chunk_rest(seq__57967_58039__$1);
var G__58042 = c__5568__auto___58040;
var G__58043 = cljs.core.count(c__5568__auto___58040);
var G__58044 = (0);
seq__57967_58020 = G__58041;
chunk__57969_58021 = G__58042;
count__57970_58022 = G__58043;
i__57971_58023 = G__58044;
continue;
} else {
var vec__57985_58045 = cljs.core.first(seq__57967_58039__$1);
var test_ns_58046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57985_58045,(0),null);
var ns_info_58047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57985_58045,(1),null);
var map__57988_58048 = ns_info_58047;
var map__57988_58049__$1 = cljs.core.__destructure_map(map__57988_58048);
var fixtures_58050 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57988_58049__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5804__auto___58051__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_58050);
if(cljs.core.truth_(temp__5804__auto___58051__$1)){
var fix_58052 = temp__5804__auto___58051__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58046,fix_58052], 0));
} else {
}

var temp__5804__auto___58053__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_58050);
if(cljs.core.truth_(temp__5804__auto___58053__$1)){
var fix_58054 = temp__5804__auto___58053__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_58046,fix_58054], 0));
} else {
}


var G__58055 = cljs.core.next(seq__57967_58039__$1);
var G__58056 = null;
var G__58057 = (0);
var G__58058 = (0);
seq__57967_58020 = G__58055;
chunk__57969_58021 = G__58056;
count__57970_58022 = G__58057;
i__57971_58023 = G__58058;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__57964_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__57964_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__57989 = cljs.test.get_current_env();
var map__57989__$1 = cljs.core.__destructure_map(map__57989);
var env = map__57989__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57989__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57989__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__57991 = arguments.length;
switch (G__57991) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__57993 = arguments.length;
switch (G__57993) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__57994 = shadow.test.env.get_test_ns_info(ns);
var map__57994__$1 = cljs.core.__destructure_map(map__57994);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57994__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__57997 = arguments.length;
switch (G__57997) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57995_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__57995_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__58000 = arguments.length;
switch (G__58000) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__57998_SHARP_){
var or__5045__auto__ = (re == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__57998_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
