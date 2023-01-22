goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__57050,p__57051){
var map__57052 = p__57050;
var map__57052__$1 = cljs.core.__destructure_map(map__57052);
var svc = map__57052__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57052__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57053 = p__57051;
var map__57053__$1 = cljs.core.__destructure_map(map__57053);
var msg = map__57053__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57053__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57053__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57053__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57053__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__57054,p__57055){
var map__57056 = p__57054;
var map__57056__$1 = cljs.core.__destructure_map(map__57056);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57056__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__57057 = p__57055;
var map__57057__$1 = cljs.core.__destructure_map(map__57057);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57057__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__57058,p__57059){
var map__57060 = p__57058;
var map__57060__$1 = cljs.core.__destructure_map(map__57060);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57060__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__57061 = p__57059;
var map__57061__$1 = cljs.core.__destructure_map(map__57061);
var msg = map__57061__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__57061__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__57062,tid){
var map__57063 = p__57062;
var map__57063__$1 = cljs.core.__destructure_map(map__57063);
var svc = map__57063__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57063__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__57068 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__57069 = null;
var count__57070 = (0);
var i__57071 = (0);
while(true){
if((i__57071 < count__57070)){
var vec__57078 = chunk__57069.cljs$core$IIndexed$_nth$arity$2(null,i__57071);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57078,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57078,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57086 = seq__57068;
var G__57087 = chunk__57069;
var G__57088 = count__57070;
var G__57089 = (i__57071 + (1));
seq__57068 = G__57086;
chunk__57069 = G__57087;
count__57070 = G__57088;
i__57071 = G__57089;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__57068);
if(temp__5804__auto__){
var seq__57068__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57068__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__57068__$1);
var G__57090 = cljs.core.chunk_rest(seq__57068__$1);
var G__57091 = c__5568__auto__;
var G__57092 = cljs.core.count(c__5568__auto__);
var G__57093 = (0);
seq__57068 = G__57090;
chunk__57069 = G__57091;
count__57070 = G__57092;
i__57071 = G__57093;
continue;
} else {
var vec__57081 = cljs.core.first(seq__57068__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57081,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57081,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__57094 = cljs.core.next(seq__57068__$1);
var G__57095 = null;
var G__57096 = (0);
var G__57097 = (0);
seq__57068 = G__57094;
chunk__57069 = G__57095;
count__57070 = G__57096;
i__57071 = G__57097;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__57064_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__57064_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__57065_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__57065_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__57066_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__57066_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__57067_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__57067_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__57084){
var map__57085 = p__57084;
var map__57085__$1 = cljs.core.__destructure_map(map__57085);
var svc = map__57085__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57085__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57085__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
