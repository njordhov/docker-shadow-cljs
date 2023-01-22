goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__55727,res){
var map__55728 = p__55727;
var map__55728__$1 = cljs.core.__destructure_map(map__55728);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55728__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55728__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__55729 = res;
var G__55729__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55729,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__55729);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55729__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__55729__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__55731 = arguments.length;
switch (G__55731) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__55732,msg,handlers,timeout_after_ms){
var map__55733 = p__55732;
var map__55733__$1 = cljs.core.__destructure_map(map__55733);
var runtime = map__55733__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55733__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55786 = arguments.length;
var i__5770__auto___55787 = (0);
while(true){
if((i__5770__auto___55787 < len__5769__auto___55786)){
args__5775__auto__.push((arguments[i__5770__auto___55787]));

var G__55788 = (i__5770__auto___55787 + (1));
i__5770__auto___55787 = G__55788;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__55737,ev,args){
var map__55738 = p__55737;
var map__55738__$1 = cljs.core.__destructure_map(map__55738);
var runtime = map__55738__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55738__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__55739 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55742 = null;
var count__55743 = (0);
var i__55744 = (0);
while(true){
if((i__55744 < count__55743)){
var ext = chunk__55742.cljs$core$IIndexed$_nth$arity$2(null,i__55744);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__55789 = seq__55739;
var G__55790 = chunk__55742;
var G__55791 = count__55743;
var G__55792 = (i__55744 + (1));
seq__55739 = G__55789;
chunk__55742 = G__55790;
count__55743 = G__55791;
i__55744 = G__55792;
continue;
} else {
var G__55793 = seq__55739;
var G__55794 = chunk__55742;
var G__55795 = count__55743;
var G__55796 = (i__55744 + (1));
seq__55739 = G__55793;
chunk__55742 = G__55794;
count__55743 = G__55795;
i__55744 = G__55796;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55739);
if(temp__5804__auto__){
var seq__55739__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55739__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55739__$1);
var G__55797 = cljs.core.chunk_rest(seq__55739__$1);
var G__55798 = c__5568__auto__;
var G__55799 = cljs.core.count(c__5568__auto__);
var G__55800 = (0);
seq__55739 = G__55797;
chunk__55742 = G__55798;
count__55743 = G__55799;
i__55744 = G__55800;
continue;
} else {
var ext = cljs.core.first(seq__55739__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__55801 = cljs.core.next(seq__55739__$1);
var G__55802 = null;
var G__55803 = (0);
var G__55804 = (0);
seq__55739 = G__55801;
chunk__55742 = G__55802;
count__55743 = G__55803;
i__55744 = G__55804;
continue;
} else {
var G__55805 = cljs.core.next(seq__55739__$1);
var G__55806 = null;
var G__55807 = (0);
var G__55808 = (0);
seq__55739 = G__55805;
chunk__55742 = G__55806;
count__55743 = G__55807;
i__55744 = G__55808;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq55734){
var G__55735 = cljs.core.first(seq55734);
var seq55734__$1 = cljs.core.next(seq55734);
var G__55736 = cljs.core.first(seq55734__$1);
var seq55734__$2 = cljs.core.next(seq55734__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55735,G__55736,seq55734__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__55747,p__55748){
var map__55749 = p__55747;
var map__55749__$1 = cljs.core.__destructure_map(map__55749);
var runtime = map__55749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55750 = p__55748;
var map__55750__$1 = cljs.core.__destructure_map(map__55750);
var msg = map__55750__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55750__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__55751 = cljs.core.deref(state_ref);
var map__55751__$1 = cljs.core.__destructure_map(map__55751);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55751__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55751__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__55752){
var map__55753 = p__55752;
var map__55753__$1 = cljs.core.__destructure_map(map__55753);
var runtime = map__55753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__55754,msg){
var map__55755 = p__55754;
var map__55755__$1 = cljs.core.__destructure_map(map__55755);
var runtime = map__55755__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__55756,key,p__55757){
var map__55758 = p__55756;
var map__55758__$1 = cljs.core.__destructure_map(map__55758);
var state = map__55758__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55758__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__55759 = p__55757;
var map__55759__$1 = cljs.core.__destructure_map(map__55759);
var spec = map__55759__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55759__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__55760,key,spec){
var map__55761 = p__55760;
var map__55761__$1 = cljs.core.__destructure_map(map__55761);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55761__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__55762_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__55762_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__55763_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__55763_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__55764_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__55764_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__55765_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__55765_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__55766_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__55766_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__55767,key){
var map__55768 = p__55767;
var map__55768__$1 = cljs.core.__destructure_map(map__55768);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__55769,msg){
var map__55770 = p__55769;
var map__55770__$1 = cljs.core.__destructure_map(map__55770);
var runtime = map__55770__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55770__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__55771,p__55772){
var map__55773 = p__55771;
var map__55773__$1 = cljs.core.__destructure_map(map__55773);
var runtime = map__55773__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55773__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__55774 = p__55772;
var map__55774__$1 = cljs.core.__destructure_map(map__55774);
var msg = map__55774__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55774__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55774__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__55775 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__55777 = null;
var count__55778 = (0);
var i__55779 = (0);
while(true){
if((i__55779 < count__55778)){
var map__55783 = chunk__55777.cljs$core$IIndexed$_nth$arity$2(null,i__55779);
var map__55783__$1 = cljs.core.__destructure_map(map__55783);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55783__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__55809 = seq__55775;
var G__55810 = chunk__55777;
var G__55811 = count__55778;
var G__55812 = (i__55779 + (1));
seq__55775 = G__55809;
chunk__55777 = G__55810;
count__55778 = G__55811;
i__55779 = G__55812;
continue;
} else {
var G__55813 = seq__55775;
var G__55814 = chunk__55777;
var G__55815 = count__55778;
var G__55816 = (i__55779 + (1));
seq__55775 = G__55813;
chunk__55777 = G__55814;
count__55778 = G__55815;
i__55779 = G__55816;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__55775);
if(temp__5804__auto__){
var seq__55775__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55775__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__55775__$1);
var G__55817 = cljs.core.chunk_rest(seq__55775__$1);
var G__55818 = c__5568__auto__;
var G__55819 = cljs.core.count(c__5568__auto__);
var G__55820 = (0);
seq__55775 = G__55817;
chunk__55777 = G__55818;
count__55778 = G__55819;
i__55779 = G__55820;
continue;
} else {
var map__55784 = cljs.core.first(seq__55775__$1);
var map__55784__$1 = cljs.core.__destructure_map(map__55784);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55784__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__55821 = cljs.core.next(seq__55775__$1);
var G__55822 = null;
var G__55823 = (0);
var G__55824 = (0);
seq__55775 = G__55821;
chunk__55777 = G__55822;
count__55778 = G__55823;
i__55779 = G__55824;
continue;
} else {
var G__55825 = cljs.core.next(seq__55775__$1);
var G__55826 = null;
var G__55827 = (0);
var G__55828 = (0);
seq__55775 = G__55825;
chunk__55777 = G__55826;
count__55778 = G__55827;
i__55779 = G__55828;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
