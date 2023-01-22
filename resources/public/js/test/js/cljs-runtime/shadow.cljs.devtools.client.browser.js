goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___57558 = arguments.length;
var i__5770__auto___57559 = (0);
while(true){
if((i__5770__auto___57559 < len__5769__auto___57558)){
args__5775__auto__.push((arguments[i__5770__auto___57559]));

var G__57560 = (i__5770__auto___57559 + (1));
i__5770__auto___57559 = G__57560;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq57278){
var G__57279 = cljs.core.first(seq57278);
var seq57278__$1 = cljs.core.next(seq57278);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57279,seq57278__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__57280 = cljs.core.seq(sources);
var chunk__57281 = null;
var count__57282 = (0);
var i__57283 = (0);
while(true){
if((i__57283 < count__57282)){
var map__57288 = chunk__57281.cljs$core$IIndexed$_nth$arity$2(null,i__57283);
var map__57288__$1 = cljs.core.__destructure_map(map__57288);
var src = map__57288__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57288__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57289){var e_57561 = e57289;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57561);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57561.message)].join('')));
}

var G__57562 = seq__57280;
var G__57563 = chunk__57281;
var G__57564 = count__57282;
var G__57565 = (i__57283 + (1));
seq__57280 = G__57562;
chunk__57281 = G__57563;
count__57282 = G__57564;
i__57283 = G__57565;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57280);
if(temp__5804__auto__){
var seq__57280__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57280__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57280__$1);
var G__57566 = cljs.core.chunk_rest(seq__57280__$1);
var G__57567 = c__5568__auto__;
var G__57568 = cljs.core.count(c__5568__auto__);
var G__57569 = (0);
seq__57280 = G__57566;
chunk__57281 = G__57567;
count__57282 = G__57568;
i__57283 = G__57569;
continue;
} else {
var map__57290 = cljs.core.first(seq__57280__$1);
var map__57290__$1 = cljs.core.__destructure_map(map__57290);
var src = map__57290__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57290__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e57291){var e_57570 = e57291;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_57570);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_57570.message)].join('')));
}

var G__57571 = cljs.core.next(seq__57280__$1);
var G__57572 = null;
var G__57573 = (0);
var G__57574 = (0);
seq__57280 = G__57571;
chunk__57281 = G__57572;
count__57282 = G__57573;
i__57283 = G__57574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__57292 = cljs.core.seq(js_requires);
var chunk__57293 = null;
var count__57294 = (0);
var i__57295 = (0);
while(true){
if((i__57295 < count__57294)){
var js_ns = chunk__57293.cljs$core$IIndexed$_nth$arity$2(null,i__57295);
var require_str_57575 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57575);


var G__57576 = seq__57292;
var G__57577 = chunk__57293;
var G__57578 = count__57294;
var G__57579 = (i__57295 + (1));
seq__57292 = G__57576;
chunk__57293 = G__57577;
count__57294 = G__57578;
i__57295 = G__57579;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57292);
if(temp__5804__auto__){
var seq__57292__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57292__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57292__$1);
var G__57580 = cljs.core.chunk_rest(seq__57292__$1);
var G__57581 = c__5568__auto__;
var G__57582 = cljs.core.count(c__5568__auto__);
var G__57583 = (0);
seq__57292 = G__57580;
chunk__57293 = G__57581;
count__57294 = G__57582;
i__57295 = G__57583;
continue;
} else {
var js_ns = cljs.core.first(seq__57292__$1);
var require_str_57584 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_57584);


var G__57585 = cljs.core.next(seq__57292__$1);
var G__57586 = null;
var G__57587 = (0);
var G__57588 = (0);
seq__57292 = G__57585;
chunk__57293 = G__57586;
count__57294 = G__57587;
i__57295 = G__57588;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__57297){
var map__57298 = p__57297;
var map__57298__$1 = cljs.core.__destructure_map(map__57298);
var msg = map__57298__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57298__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57299(s__57300){
return (new cljs.core.LazySeq(null,(function (){
var s__57300__$1 = s__57300;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57300__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__57305 = cljs.core.first(xs__6360__auto__);
var map__57305__$1 = cljs.core.__destructure_map(map__57305);
var src = map__57305__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57305__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__57300__$1,map__57305,map__57305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57298,map__57298__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57299_$_iter__57301(s__57302){
return (new cljs.core.LazySeq(null,((function (s__57300__$1,map__57305,map__57305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57298,map__57298__$1,msg,info,reload_info){
return (function (){
var s__57302__$1 = s__57302;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__57302__$1);
if(temp__5804__auto____$1){
var s__57302__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__57302__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57302__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57304 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57303 = (0);
while(true){
if((i__57303 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__57303);
cljs.core.chunk_append(b__57304,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__57589 = (i__57303 + (1));
i__57303 = G__57589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57304),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57299_$_iter__57301(cljs.core.chunk_rest(s__57302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57304),null);
}
} else {
var warning = cljs.core.first(s__57302__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57299_$_iter__57301(cljs.core.rest(s__57302__$2)));
}
} else {
return null;
}
break;
}
});})(s__57300__$1,map__57305,map__57305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57298,map__57298__$1,msg,info,reload_info))
,null,null));
});})(s__57300__$1,map__57305,map__57305__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__57298,map__57298__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__57299(cljs.core.rest(s__57300__$1)));
} else {
var G__57590 = cljs.core.rest(s__57300__$1);
s__57300__$1 = G__57590;
continue;
}
} else {
var G__57591 = cljs.core.rest(s__57300__$1);
s__57300__$1 = G__57591;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__57306_57592 = cljs.core.seq(warnings);
var chunk__57307_57593 = null;
var count__57308_57594 = (0);
var i__57309_57595 = (0);
while(true){
if((i__57309_57595 < count__57308_57594)){
var map__57312_57596 = chunk__57307_57593.cljs$core$IIndexed$_nth$arity$2(null,i__57309_57595);
var map__57312_57597__$1 = cljs.core.__destructure_map(map__57312_57596);
var w_57598 = map__57312_57597__$1;
var msg_57599__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57312_57597__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57312_57597__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57312_57597__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57312_57597__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57602)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57600),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57601),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57599__$1)].join(''));


var G__57603 = seq__57306_57592;
var G__57604 = chunk__57307_57593;
var G__57605 = count__57308_57594;
var G__57606 = (i__57309_57595 + (1));
seq__57306_57592 = G__57603;
chunk__57307_57593 = G__57604;
count__57308_57594 = G__57605;
i__57309_57595 = G__57606;
continue;
} else {
var temp__5804__auto___57607 = cljs.core.seq(seq__57306_57592);
if(temp__5804__auto___57607){
var seq__57306_57608__$1 = temp__5804__auto___57607;
if(cljs.core.chunked_seq_QMARK_(seq__57306_57608__$1)){
var c__5568__auto___57609 = cljs.core.chunk_first(seq__57306_57608__$1);
var G__57610 = cljs.core.chunk_rest(seq__57306_57608__$1);
var G__57611 = c__5568__auto___57609;
var G__57612 = cljs.core.count(c__5568__auto___57609);
var G__57613 = (0);
seq__57306_57592 = G__57610;
chunk__57307_57593 = G__57611;
count__57308_57594 = G__57612;
i__57309_57595 = G__57613;
continue;
} else {
var map__57313_57614 = cljs.core.first(seq__57306_57608__$1);
var map__57313_57615__$1 = cljs.core.__destructure_map(map__57313_57614);
var w_57616 = map__57313_57615__$1;
var msg_57617__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313_57615__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_57618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313_57615__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_57619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313_57615__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_57620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57313_57615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_57620)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_57618),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_57619),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_57617__$1)].join(''));


var G__57621 = cljs.core.next(seq__57306_57608__$1);
var G__57622 = null;
var G__57623 = (0);
var G__57624 = (0);
seq__57306_57592 = G__57621;
chunk__57307_57593 = G__57622;
count__57308_57594 = G__57623;
i__57309_57595 = G__57624;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__57296_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__57296_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__57314){
var map__57315 = p__57314;
var map__57315__$1 = cljs.core.__destructure_map(map__57315);
var msg = map__57315__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57315__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__57316 = cljs.core.seq(updates);
var chunk__57318 = null;
var count__57319 = (0);
var i__57320 = (0);
while(true){
if((i__57320 < count__57319)){
var path = chunk__57318.cljs$core$IIndexed$_nth$arity$2(null,i__57320);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57430_57625 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57434_57626 = null;
var count__57435_57627 = (0);
var i__57436_57628 = (0);
while(true){
if((i__57436_57628 < count__57435_57627)){
var node_57629 = chunk__57434_57626.cljs$core$IIndexed$_nth$arity$2(null,i__57436_57628);
if(cljs.core.not(node_57629.shadow$old)){
var path_match_57630 = shadow.cljs.devtools.client.browser.match_paths(node_57629.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57630)){
var new_link_57631 = (function (){var G__57462 = node_57629.cloneNode(true);
G__57462.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57630),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57462;
})();
(node_57629.shadow$old = true);

(new_link_57631.onload = ((function (seq__57430_57625,chunk__57434_57626,count__57435_57627,i__57436_57628,seq__57316,chunk__57318,count__57319,i__57320,new_link_57631,path_match_57630,node_57629,path,map__57315,map__57315__$1,msg,updates,reload_info){
return (function (e){
var seq__57463_57632 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57465_57633 = null;
var count__57466_57634 = (0);
var i__57467_57635 = (0);
while(true){
if((i__57467_57635 < count__57466_57634)){
var map__57471_57636 = chunk__57465_57633.cljs$core$IIndexed$_nth$arity$2(null,i__57467_57635);
var map__57471_57637__$1 = cljs.core.__destructure_map(map__57471_57636);
var task_57638 = map__57471_57637__$1;
var fn_str_57639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57471_57637__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57640 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57471_57637__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57641 = goog.getObjectByName(fn_str_57639,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57640)].join(''));

(fn_obj_57641.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57641.cljs$core$IFn$_invoke$arity$2(path,new_link_57631) : fn_obj_57641.call(null,path,new_link_57631));


var G__57642 = seq__57463_57632;
var G__57643 = chunk__57465_57633;
var G__57644 = count__57466_57634;
var G__57645 = (i__57467_57635 + (1));
seq__57463_57632 = G__57642;
chunk__57465_57633 = G__57643;
count__57466_57634 = G__57644;
i__57467_57635 = G__57645;
continue;
} else {
var temp__5804__auto___57646 = cljs.core.seq(seq__57463_57632);
if(temp__5804__auto___57646){
var seq__57463_57647__$1 = temp__5804__auto___57646;
if(cljs.core.chunked_seq_QMARK_(seq__57463_57647__$1)){
var c__5568__auto___57648 = cljs.core.chunk_first(seq__57463_57647__$1);
var G__57649 = cljs.core.chunk_rest(seq__57463_57647__$1);
var G__57650 = c__5568__auto___57648;
var G__57651 = cljs.core.count(c__5568__auto___57648);
var G__57652 = (0);
seq__57463_57632 = G__57649;
chunk__57465_57633 = G__57650;
count__57466_57634 = G__57651;
i__57467_57635 = G__57652;
continue;
} else {
var map__57472_57653 = cljs.core.first(seq__57463_57647__$1);
var map__57472_57654__$1 = cljs.core.__destructure_map(map__57472_57653);
var task_57655 = map__57472_57654__$1;
var fn_str_57656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57472_57654__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57472_57654__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57658 = goog.getObjectByName(fn_str_57656,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57657)].join(''));

(fn_obj_57658.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57658.cljs$core$IFn$_invoke$arity$2(path,new_link_57631) : fn_obj_57658.call(null,path,new_link_57631));


var G__57659 = cljs.core.next(seq__57463_57647__$1);
var G__57660 = null;
var G__57661 = (0);
var G__57662 = (0);
seq__57463_57632 = G__57659;
chunk__57465_57633 = G__57660;
count__57466_57634 = G__57661;
i__57467_57635 = G__57662;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57629);
});})(seq__57430_57625,chunk__57434_57626,count__57435_57627,i__57436_57628,seq__57316,chunk__57318,count__57319,i__57320,new_link_57631,path_match_57630,node_57629,path,map__57315,map__57315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57630], 0));

goog.dom.insertSiblingAfter(new_link_57631,node_57629);


var G__57663 = seq__57430_57625;
var G__57664 = chunk__57434_57626;
var G__57665 = count__57435_57627;
var G__57666 = (i__57436_57628 + (1));
seq__57430_57625 = G__57663;
chunk__57434_57626 = G__57664;
count__57435_57627 = G__57665;
i__57436_57628 = G__57666;
continue;
} else {
var G__57667 = seq__57430_57625;
var G__57668 = chunk__57434_57626;
var G__57669 = count__57435_57627;
var G__57670 = (i__57436_57628 + (1));
seq__57430_57625 = G__57667;
chunk__57434_57626 = G__57668;
count__57435_57627 = G__57669;
i__57436_57628 = G__57670;
continue;
}
} else {
var G__57671 = seq__57430_57625;
var G__57672 = chunk__57434_57626;
var G__57673 = count__57435_57627;
var G__57674 = (i__57436_57628 + (1));
seq__57430_57625 = G__57671;
chunk__57434_57626 = G__57672;
count__57435_57627 = G__57673;
i__57436_57628 = G__57674;
continue;
}
} else {
var temp__5804__auto___57675 = cljs.core.seq(seq__57430_57625);
if(temp__5804__auto___57675){
var seq__57430_57676__$1 = temp__5804__auto___57675;
if(cljs.core.chunked_seq_QMARK_(seq__57430_57676__$1)){
var c__5568__auto___57677 = cljs.core.chunk_first(seq__57430_57676__$1);
var G__57678 = cljs.core.chunk_rest(seq__57430_57676__$1);
var G__57679 = c__5568__auto___57677;
var G__57680 = cljs.core.count(c__5568__auto___57677);
var G__57681 = (0);
seq__57430_57625 = G__57678;
chunk__57434_57626 = G__57679;
count__57435_57627 = G__57680;
i__57436_57628 = G__57681;
continue;
} else {
var node_57682 = cljs.core.first(seq__57430_57676__$1);
if(cljs.core.not(node_57682.shadow$old)){
var path_match_57683 = shadow.cljs.devtools.client.browser.match_paths(node_57682.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57683)){
var new_link_57684 = (function (){var G__57473 = node_57682.cloneNode(true);
G__57473.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57683),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57473;
})();
(node_57682.shadow$old = true);

(new_link_57684.onload = ((function (seq__57430_57625,chunk__57434_57626,count__57435_57627,i__57436_57628,seq__57316,chunk__57318,count__57319,i__57320,new_link_57684,path_match_57683,node_57682,seq__57430_57676__$1,temp__5804__auto___57675,path,map__57315,map__57315__$1,msg,updates,reload_info){
return (function (e){
var seq__57474_57685 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57476_57686 = null;
var count__57477_57687 = (0);
var i__57478_57688 = (0);
while(true){
if((i__57478_57688 < count__57477_57687)){
var map__57482_57689 = chunk__57476_57686.cljs$core$IIndexed$_nth$arity$2(null,i__57478_57688);
var map__57482_57690__$1 = cljs.core.__destructure_map(map__57482_57689);
var task_57691 = map__57482_57690__$1;
var fn_str_57692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482_57690__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57482_57690__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57694 = goog.getObjectByName(fn_str_57692,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57693)].join(''));

(fn_obj_57694.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57694.cljs$core$IFn$_invoke$arity$2(path,new_link_57684) : fn_obj_57694.call(null,path,new_link_57684));


var G__57695 = seq__57474_57685;
var G__57696 = chunk__57476_57686;
var G__57697 = count__57477_57687;
var G__57698 = (i__57478_57688 + (1));
seq__57474_57685 = G__57695;
chunk__57476_57686 = G__57696;
count__57477_57687 = G__57697;
i__57478_57688 = G__57698;
continue;
} else {
var temp__5804__auto___57699__$1 = cljs.core.seq(seq__57474_57685);
if(temp__5804__auto___57699__$1){
var seq__57474_57700__$1 = temp__5804__auto___57699__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57474_57700__$1)){
var c__5568__auto___57701 = cljs.core.chunk_first(seq__57474_57700__$1);
var G__57702 = cljs.core.chunk_rest(seq__57474_57700__$1);
var G__57703 = c__5568__auto___57701;
var G__57704 = cljs.core.count(c__5568__auto___57701);
var G__57705 = (0);
seq__57474_57685 = G__57702;
chunk__57476_57686 = G__57703;
count__57477_57687 = G__57704;
i__57478_57688 = G__57705;
continue;
} else {
var map__57483_57706 = cljs.core.first(seq__57474_57700__$1);
var map__57483_57707__$1 = cljs.core.__destructure_map(map__57483_57706);
var task_57708 = map__57483_57707__$1;
var fn_str_57709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483_57707__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57483_57707__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57711 = goog.getObjectByName(fn_str_57709,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57710)].join(''));

(fn_obj_57711.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57711.cljs$core$IFn$_invoke$arity$2(path,new_link_57684) : fn_obj_57711.call(null,path,new_link_57684));


var G__57712 = cljs.core.next(seq__57474_57700__$1);
var G__57713 = null;
var G__57714 = (0);
var G__57715 = (0);
seq__57474_57685 = G__57712;
chunk__57476_57686 = G__57713;
count__57477_57687 = G__57714;
i__57478_57688 = G__57715;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57682);
});})(seq__57430_57625,chunk__57434_57626,count__57435_57627,i__57436_57628,seq__57316,chunk__57318,count__57319,i__57320,new_link_57684,path_match_57683,node_57682,seq__57430_57676__$1,temp__5804__auto___57675,path,map__57315,map__57315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57683], 0));

goog.dom.insertSiblingAfter(new_link_57684,node_57682);


var G__57716 = cljs.core.next(seq__57430_57676__$1);
var G__57717 = null;
var G__57718 = (0);
var G__57719 = (0);
seq__57430_57625 = G__57716;
chunk__57434_57626 = G__57717;
count__57435_57627 = G__57718;
i__57436_57628 = G__57719;
continue;
} else {
var G__57720 = cljs.core.next(seq__57430_57676__$1);
var G__57721 = null;
var G__57722 = (0);
var G__57723 = (0);
seq__57430_57625 = G__57720;
chunk__57434_57626 = G__57721;
count__57435_57627 = G__57722;
i__57436_57628 = G__57723;
continue;
}
} else {
var G__57724 = cljs.core.next(seq__57430_57676__$1);
var G__57725 = null;
var G__57726 = (0);
var G__57727 = (0);
seq__57430_57625 = G__57724;
chunk__57434_57626 = G__57725;
count__57435_57627 = G__57726;
i__57436_57628 = G__57727;
continue;
}
}
} else {
}
}
break;
}


var G__57728 = seq__57316;
var G__57729 = chunk__57318;
var G__57730 = count__57319;
var G__57731 = (i__57320 + (1));
seq__57316 = G__57728;
chunk__57318 = G__57729;
count__57319 = G__57730;
i__57320 = G__57731;
continue;
} else {
var G__57732 = seq__57316;
var G__57733 = chunk__57318;
var G__57734 = count__57319;
var G__57735 = (i__57320 + (1));
seq__57316 = G__57732;
chunk__57318 = G__57733;
count__57319 = G__57734;
i__57320 = G__57735;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57316);
if(temp__5804__auto__){
var seq__57316__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57316__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57316__$1);
var G__57736 = cljs.core.chunk_rest(seq__57316__$1);
var G__57737 = c__5568__auto__;
var G__57738 = cljs.core.count(c__5568__auto__);
var G__57739 = (0);
seq__57316 = G__57736;
chunk__57318 = G__57737;
count__57319 = G__57738;
i__57320 = G__57739;
continue;
} else {
var path = cljs.core.first(seq__57316__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__57484_57740 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__57488_57741 = null;
var count__57489_57742 = (0);
var i__57490_57743 = (0);
while(true){
if((i__57490_57743 < count__57489_57742)){
var node_57744 = chunk__57488_57741.cljs$core$IIndexed$_nth$arity$2(null,i__57490_57743);
if(cljs.core.not(node_57744.shadow$old)){
var path_match_57745 = shadow.cljs.devtools.client.browser.match_paths(node_57744.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57745)){
var new_link_57746 = (function (){var G__57516 = node_57744.cloneNode(true);
G__57516.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57745),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57516;
})();
(node_57744.shadow$old = true);

(new_link_57746.onload = ((function (seq__57484_57740,chunk__57488_57741,count__57489_57742,i__57490_57743,seq__57316,chunk__57318,count__57319,i__57320,new_link_57746,path_match_57745,node_57744,path,seq__57316__$1,temp__5804__auto__,map__57315,map__57315__$1,msg,updates,reload_info){
return (function (e){
var seq__57517_57747 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57519_57748 = null;
var count__57520_57749 = (0);
var i__57521_57750 = (0);
while(true){
if((i__57521_57750 < count__57520_57749)){
var map__57525_57751 = chunk__57519_57748.cljs$core$IIndexed$_nth$arity$2(null,i__57521_57750);
var map__57525_57752__$1 = cljs.core.__destructure_map(map__57525_57751);
var task_57753 = map__57525_57752__$1;
var fn_str_57754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57525_57752__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57525_57752__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57756 = goog.getObjectByName(fn_str_57754,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57755)].join(''));

(fn_obj_57756.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57756.cljs$core$IFn$_invoke$arity$2(path,new_link_57746) : fn_obj_57756.call(null,path,new_link_57746));


var G__57757 = seq__57517_57747;
var G__57758 = chunk__57519_57748;
var G__57759 = count__57520_57749;
var G__57760 = (i__57521_57750 + (1));
seq__57517_57747 = G__57757;
chunk__57519_57748 = G__57758;
count__57520_57749 = G__57759;
i__57521_57750 = G__57760;
continue;
} else {
var temp__5804__auto___57761__$1 = cljs.core.seq(seq__57517_57747);
if(temp__5804__auto___57761__$1){
var seq__57517_57762__$1 = temp__5804__auto___57761__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57517_57762__$1)){
var c__5568__auto___57763 = cljs.core.chunk_first(seq__57517_57762__$1);
var G__57764 = cljs.core.chunk_rest(seq__57517_57762__$1);
var G__57765 = c__5568__auto___57763;
var G__57766 = cljs.core.count(c__5568__auto___57763);
var G__57767 = (0);
seq__57517_57747 = G__57764;
chunk__57519_57748 = G__57765;
count__57520_57749 = G__57766;
i__57521_57750 = G__57767;
continue;
} else {
var map__57526_57768 = cljs.core.first(seq__57517_57762__$1);
var map__57526_57769__$1 = cljs.core.__destructure_map(map__57526_57768);
var task_57770 = map__57526_57769__$1;
var fn_str_57771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526_57769__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57526_57769__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57773 = goog.getObjectByName(fn_str_57771,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57772)].join(''));

(fn_obj_57773.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57773.cljs$core$IFn$_invoke$arity$2(path,new_link_57746) : fn_obj_57773.call(null,path,new_link_57746));


var G__57774 = cljs.core.next(seq__57517_57762__$1);
var G__57775 = null;
var G__57776 = (0);
var G__57777 = (0);
seq__57517_57747 = G__57774;
chunk__57519_57748 = G__57775;
count__57520_57749 = G__57776;
i__57521_57750 = G__57777;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57744);
});})(seq__57484_57740,chunk__57488_57741,count__57489_57742,i__57490_57743,seq__57316,chunk__57318,count__57319,i__57320,new_link_57746,path_match_57745,node_57744,path,seq__57316__$1,temp__5804__auto__,map__57315,map__57315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57745], 0));

goog.dom.insertSiblingAfter(new_link_57746,node_57744);


var G__57778 = seq__57484_57740;
var G__57779 = chunk__57488_57741;
var G__57780 = count__57489_57742;
var G__57781 = (i__57490_57743 + (1));
seq__57484_57740 = G__57778;
chunk__57488_57741 = G__57779;
count__57489_57742 = G__57780;
i__57490_57743 = G__57781;
continue;
} else {
var G__57782 = seq__57484_57740;
var G__57783 = chunk__57488_57741;
var G__57784 = count__57489_57742;
var G__57785 = (i__57490_57743 + (1));
seq__57484_57740 = G__57782;
chunk__57488_57741 = G__57783;
count__57489_57742 = G__57784;
i__57490_57743 = G__57785;
continue;
}
} else {
var G__57786 = seq__57484_57740;
var G__57787 = chunk__57488_57741;
var G__57788 = count__57489_57742;
var G__57789 = (i__57490_57743 + (1));
seq__57484_57740 = G__57786;
chunk__57488_57741 = G__57787;
count__57489_57742 = G__57788;
i__57490_57743 = G__57789;
continue;
}
} else {
var temp__5804__auto___57790__$1 = cljs.core.seq(seq__57484_57740);
if(temp__5804__auto___57790__$1){
var seq__57484_57791__$1 = temp__5804__auto___57790__$1;
if(cljs.core.chunked_seq_QMARK_(seq__57484_57791__$1)){
var c__5568__auto___57792 = cljs.core.chunk_first(seq__57484_57791__$1);
var G__57793 = cljs.core.chunk_rest(seq__57484_57791__$1);
var G__57794 = c__5568__auto___57792;
var G__57795 = cljs.core.count(c__5568__auto___57792);
var G__57796 = (0);
seq__57484_57740 = G__57793;
chunk__57488_57741 = G__57794;
count__57489_57742 = G__57795;
i__57490_57743 = G__57796;
continue;
} else {
var node_57797 = cljs.core.first(seq__57484_57791__$1);
if(cljs.core.not(node_57797.shadow$old)){
var path_match_57798 = shadow.cljs.devtools.client.browser.match_paths(node_57797.getAttribute("href"),path);
if(cljs.core.truth_(path_match_57798)){
var new_link_57799 = (function (){var G__57527 = node_57797.cloneNode(true);
G__57527.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_57798),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__57527;
})();
(node_57797.shadow$old = true);

(new_link_57799.onload = ((function (seq__57484_57740,chunk__57488_57741,count__57489_57742,i__57490_57743,seq__57316,chunk__57318,count__57319,i__57320,new_link_57799,path_match_57798,node_57797,seq__57484_57791__$1,temp__5804__auto___57790__$1,path,seq__57316__$1,temp__5804__auto__,map__57315,map__57315__$1,msg,updates,reload_info){
return (function (e){
var seq__57528_57800 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__57530_57801 = null;
var count__57531_57802 = (0);
var i__57532_57803 = (0);
while(true){
if((i__57532_57803 < count__57531_57802)){
var map__57536_57804 = chunk__57530_57801.cljs$core$IIndexed$_nth$arity$2(null,i__57532_57803);
var map__57536_57805__$1 = cljs.core.__destructure_map(map__57536_57804);
var task_57806 = map__57536_57805__$1;
var fn_str_57807 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57536_57805__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57808 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57536_57805__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57809 = goog.getObjectByName(fn_str_57807,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57808)].join(''));

(fn_obj_57809.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57809.cljs$core$IFn$_invoke$arity$2(path,new_link_57799) : fn_obj_57809.call(null,path,new_link_57799));


var G__57810 = seq__57528_57800;
var G__57811 = chunk__57530_57801;
var G__57812 = count__57531_57802;
var G__57813 = (i__57532_57803 + (1));
seq__57528_57800 = G__57810;
chunk__57530_57801 = G__57811;
count__57531_57802 = G__57812;
i__57532_57803 = G__57813;
continue;
} else {
var temp__5804__auto___57814__$2 = cljs.core.seq(seq__57528_57800);
if(temp__5804__auto___57814__$2){
var seq__57528_57815__$1 = temp__5804__auto___57814__$2;
if(cljs.core.chunked_seq_QMARK_(seq__57528_57815__$1)){
var c__5568__auto___57816 = cljs.core.chunk_first(seq__57528_57815__$1);
var G__57817 = cljs.core.chunk_rest(seq__57528_57815__$1);
var G__57818 = c__5568__auto___57816;
var G__57819 = cljs.core.count(c__5568__auto___57816);
var G__57820 = (0);
seq__57528_57800 = G__57817;
chunk__57530_57801 = G__57818;
count__57531_57802 = G__57819;
i__57532_57803 = G__57820;
continue;
} else {
var map__57537_57821 = cljs.core.first(seq__57528_57815__$1);
var map__57537_57822__$1 = cljs.core.__destructure_map(map__57537_57821);
var task_57823 = map__57537_57822__$1;
var fn_str_57824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57537_57822__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_57825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57537_57822__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_57826 = goog.getObjectByName(fn_str_57824,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_57825)].join(''));

(fn_obj_57826.cljs$core$IFn$_invoke$arity$2 ? fn_obj_57826.cljs$core$IFn$_invoke$arity$2(path,new_link_57799) : fn_obj_57826.call(null,path,new_link_57799));


var G__57827 = cljs.core.next(seq__57528_57815__$1);
var G__57828 = null;
var G__57829 = (0);
var G__57830 = (0);
seq__57528_57800 = G__57827;
chunk__57530_57801 = G__57828;
count__57531_57802 = G__57829;
i__57532_57803 = G__57830;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_57797);
});})(seq__57484_57740,chunk__57488_57741,count__57489_57742,i__57490_57743,seq__57316,chunk__57318,count__57319,i__57320,new_link_57799,path_match_57798,node_57797,seq__57484_57791__$1,temp__5804__auto___57790__$1,path,seq__57316__$1,temp__5804__auto__,map__57315,map__57315__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_57798], 0));

goog.dom.insertSiblingAfter(new_link_57799,node_57797);


var G__57831 = cljs.core.next(seq__57484_57791__$1);
var G__57832 = null;
var G__57833 = (0);
var G__57834 = (0);
seq__57484_57740 = G__57831;
chunk__57488_57741 = G__57832;
count__57489_57742 = G__57833;
i__57490_57743 = G__57834;
continue;
} else {
var G__57835 = cljs.core.next(seq__57484_57791__$1);
var G__57836 = null;
var G__57837 = (0);
var G__57838 = (0);
seq__57484_57740 = G__57835;
chunk__57488_57741 = G__57836;
count__57489_57742 = G__57837;
i__57490_57743 = G__57838;
continue;
}
} else {
var G__57839 = cljs.core.next(seq__57484_57791__$1);
var G__57840 = null;
var G__57841 = (0);
var G__57842 = (0);
seq__57484_57740 = G__57839;
chunk__57488_57741 = G__57840;
count__57489_57742 = G__57841;
i__57490_57743 = G__57842;
continue;
}
}
} else {
}
}
break;
}


var G__57843 = cljs.core.next(seq__57316__$1);
var G__57844 = null;
var G__57845 = (0);
var G__57846 = (0);
seq__57316 = G__57843;
chunk__57318 = G__57844;
count__57319 = G__57845;
i__57320 = G__57846;
continue;
} else {
var G__57847 = cljs.core.next(seq__57316__$1);
var G__57848 = null;
var G__57849 = (0);
var G__57850 = (0);
seq__57316 = G__57847;
chunk__57318 = G__57848;
count__57319 = G__57849;
i__57320 = G__57850;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__57538){
var map__57539 = p__57538;
var map__57539__$1 = cljs.core.__destructure_map(map__57539);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57539__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__57540){
var map__57541 = p__57540;
var map__57541__$1 = cljs.core.__destructure_map(map__57541);
var _ = map__57541__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57541__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__57542,done,error){
var map__57543 = p__57542;
var map__57543__$1 = cljs.core.__destructure_map(map__57543);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57543__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__57544,done,error){
var map__57545 = p__57544;
var map__57545__$1 = cljs.core.__destructure_map(map__57545);
var msg = map__57545__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57545__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57545__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57545__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__57546){
var map__57547 = p__57546;
var map__57547__$1 = cljs.core.__destructure_map(map__57547);
var src = map__57547__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57547__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__57548 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__57548) : done.call(null,G__57548));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__57549){
var map__57550 = p__57549;
var map__57550__$1 = cljs.core.__destructure_map(map__57550);
var msg__$1 = map__57550__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57550__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e57551){var ex = e57551;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__57552){
var map__57553 = p__57552;
var map__57553__$1 = cljs.core.__destructure_map(map__57553);
var env = map__57553__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__57554){
var map__57555 = p__57554;
var map__57555__$1 = cljs.core.__destructure_map(map__57555);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57555__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57555__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__57556){
var map__57557 = p__57556;
var map__57557__$1 = cljs.core.__destructure_map(map__57557);
var svc = map__57557__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57557__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
