goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_53395 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_53395(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_53396 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_53396(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__52689 = coll;
var G__52690 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__52689,G__52690) : shadow.dom.lazy_native_coll_seq.call(null,G__52689,G__52690));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__52702 = arguments.length;
switch (G__52702) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__52704 = arguments.length;
switch (G__52704) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__52710 = arguments.length;
switch (G__52710) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__52719 = arguments.length;
switch (G__52719) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__52733 = arguments.length;
switch (G__52733) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__52749 = arguments.length;
switch (G__52749) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e52752){if((e52752 instanceof Object)){
var e = e52752;
return console.log("didnt support attachEvent",el,e);
} else {
throw e52752;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__52761 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__52762 = null;
var count__52763 = (0);
var i__52764 = (0);
while(true){
if((i__52764 < count__52763)){
var el = chunk__52762.cljs$core$IIndexed$_nth$arity$2(null,i__52764);
var handler_53403__$1 = ((function (seq__52761,chunk__52762,count__52763,i__52764,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52761,chunk__52762,count__52763,i__52764,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53403__$1);


var G__53404 = seq__52761;
var G__53405 = chunk__52762;
var G__53406 = count__52763;
var G__53407 = (i__52764 + (1));
seq__52761 = G__53404;
chunk__52762 = G__53405;
count__52763 = G__53406;
i__52764 = G__53407;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52761);
if(temp__5804__auto__){
var seq__52761__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52761__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52761__$1);
var G__53408 = cljs.core.chunk_rest(seq__52761__$1);
var G__53409 = c__5568__auto__;
var G__53410 = cljs.core.count(c__5568__auto__);
var G__53411 = (0);
seq__52761 = G__53408;
chunk__52762 = G__53409;
count__52763 = G__53410;
i__52764 = G__53411;
continue;
} else {
var el = cljs.core.first(seq__52761__$1);
var handler_53412__$1 = ((function (seq__52761,chunk__52762,count__52763,i__52764,el,seq__52761__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__52761,chunk__52762,count__52763,i__52764,el,seq__52761__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_53412__$1);


var G__53413 = cljs.core.next(seq__52761__$1);
var G__53414 = null;
var G__53415 = (0);
var G__53416 = (0);
seq__52761 = G__53413;
chunk__52762 = G__53414;
count__52763 = G__53415;
i__52764 = G__53416;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__52784 = arguments.length;
switch (G__52784) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__52795 = cljs.core.seq(events);
var chunk__52796 = null;
var count__52797 = (0);
var i__52798 = (0);
while(true){
if((i__52798 < count__52797)){
var vec__52805 = chunk__52796.cljs$core$IIndexed$_nth$arity$2(null,i__52798);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52805,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53418 = seq__52795;
var G__53419 = chunk__52796;
var G__53420 = count__52797;
var G__53421 = (i__52798 + (1));
seq__52795 = G__53418;
chunk__52796 = G__53419;
count__52797 = G__53420;
i__52798 = G__53421;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52795);
if(temp__5804__auto__){
var seq__52795__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52795__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52795__$1);
var G__53422 = cljs.core.chunk_rest(seq__52795__$1);
var G__53423 = c__5568__auto__;
var G__53424 = cljs.core.count(c__5568__auto__);
var G__53425 = (0);
seq__52795 = G__53422;
chunk__52796 = G__53423;
count__52797 = G__53424;
i__52798 = G__53425;
continue;
} else {
var vec__52808 = cljs.core.first(seq__52795__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52808,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__53426 = cljs.core.next(seq__52795__$1);
var G__53427 = null;
var G__53428 = (0);
var G__53429 = (0);
seq__52795 = G__53426;
chunk__52796 = G__53427;
count__52797 = G__53428;
i__52798 = G__53429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__52811 = cljs.core.seq(styles);
var chunk__52812 = null;
var count__52813 = (0);
var i__52814 = (0);
while(true){
if((i__52814 < count__52813)){
var vec__52831 = chunk__52812.cljs$core$IIndexed$_nth$arity$2(null,i__52814);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52831,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53430 = seq__52811;
var G__53431 = chunk__52812;
var G__53432 = count__52813;
var G__53433 = (i__52814 + (1));
seq__52811 = G__53430;
chunk__52812 = G__53431;
count__52813 = G__53432;
i__52814 = G__53433;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__52811);
if(temp__5804__auto__){
var seq__52811__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52811__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__52811__$1);
var G__53434 = cljs.core.chunk_rest(seq__52811__$1);
var G__53435 = c__5568__auto__;
var G__53436 = cljs.core.count(c__5568__auto__);
var G__53437 = (0);
seq__52811 = G__53434;
chunk__52812 = G__53435;
count__52813 = G__53436;
i__52814 = G__53437;
continue;
} else {
var vec__52837 = cljs.core.first(seq__52811__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52837,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__53438 = cljs.core.next(seq__52811__$1);
var G__53439 = null;
var G__53440 = (0);
var G__53441 = (0);
seq__52811 = G__53438;
chunk__52812 = G__53439;
count__52813 = G__53440;
i__52814 = G__53441;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__52841_53442 = key;
var G__52841_53443__$1 = (((G__52841_53442 instanceof cljs.core.Keyword))?G__52841_53442.fqn:null);
switch (G__52841_53443__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_53445 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_53445,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_53445,"aria-");
}
})())){
el.setAttribute(ks_53445,value);
} else {
(el[ks_53445] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__52873){
var map__52874 = p__52873;
var map__52874__$1 = cljs.core.__destructure_map(map__52874);
var props = map__52874__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52874__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__52875 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52875,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52875,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52875,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__52878 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__52878,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__52878;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__52886 = arguments.length;
switch (G__52886) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__52899){
var vec__52900 = p__52899;
var seq__52901 = cljs.core.seq(vec__52900);
var first__52902 = cljs.core.first(seq__52901);
var seq__52901__$1 = cljs.core.next(seq__52901);
var nn = first__52902;
var first__52902__$1 = cljs.core.first(seq__52901__$1);
var seq__52901__$2 = cljs.core.next(seq__52901__$1);
var np = first__52902__$1;
var nc = seq__52901__$2;
var node = vec__52900;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52906 = nn;
var G__52907 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52906,G__52907) : create_fn.call(null,G__52906,G__52907));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__52908 = nn;
var G__52909 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__52908,G__52909) : create_fn.call(null,G__52908,G__52909));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__52912 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52912,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52912,(1),null);
var seq__52915_53447 = cljs.core.seq(node_children);
var chunk__52916_53448 = null;
var count__52917_53449 = (0);
var i__52918_53450 = (0);
while(true){
if((i__52918_53450 < count__52917_53449)){
var child_struct_53451 = chunk__52916_53448.cljs$core$IIndexed$_nth$arity$2(null,i__52918_53450);
var children_53452 = shadow.dom.dom_node(child_struct_53451);
if(cljs.core.seq_QMARK_(children_53452)){
var seq__52947_53453 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53452));
var chunk__52949_53454 = null;
var count__52950_53455 = (0);
var i__52951_53456 = (0);
while(true){
if((i__52951_53456 < count__52950_53455)){
var child_53457 = chunk__52949_53454.cljs$core$IIndexed$_nth$arity$2(null,i__52951_53456);
if(cljs.core.truth_(child_53457)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53457);


var G__53458 = seq__52947_53453;
var G__53459 = chunk__52949_53454;
var G__53460 = count__52950_53455;
var G__53461 = (i__52951_53456 + (1));
seq__52947_53453 = G__53458;
chunk__52949_53454 = G__53459;
count__52950_53455 = G__53460;
i__52951_53456 = G__53461;
continue;
} else {
var G__53462 = seq__52947_53453;
var G__53463 = chunk__52949_53454;
var G__53464 = count__52950_53455;
var G__53465 = (i__52951_53456 + (1));
seq__52947_53453 = G__53462;
chunk__52949_53454 = G__53463;
count__52950_53455 = G__53464;
i__52951_53456 = G__53465;
continue;
}
} else {
var temp__5804__auto___53466 = cljs.core.seq(seq__52947_53453);
if(temp__5804__auto___53466){
var seq__52947_53467__$1 = temp__5804__auto___53466;
if(cljs.core.chunked_seq_QMARK_(seq__52947_53467__$1)){
var c__5568__auto___53468 = cljs.core.chunk_first(seq__52947_53467__$1);
var G__53469 = cljs.core.chunk_rest(seq__52947_53467__$1);
var G__53470 = c__5568__auto___53468;
var G__53471 = cljs.core.count(c__5568__auto___53468);
var G__53472 = (0);
seq__52947_53453 = G__53469;
chunk__52949_53454 = G__53470;
count__52950_53455 = G__53471;
i__52951_53456 = G__53472;
continue;
} else {
var child_53473 = cljs.core.first(seq__52947_53467__$1);
if(cljs.core.truth_(child_53473)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53473);


var G__53474 = cljs.core.next(seq__52947_53467__$1);
var G__53475 = null;
var G__53476 = (0);
var G__53477 = (0);
seq__52947_53453 = G__53474;
chunk__52949_53454 = G__53475;
count__52950_53455 = G__53476;
i__52951_53456 = G__53477;
continue;
} else {
var G__53478 = cljs.core.next(seq__52947_53467__$1);
var G__53479 = null;
var G__53480 = (0);
var G__53481 = (0);
seq__52947_53453 = G__53478;
chunk__52949_53454 = G__53479;
count__52950_53455 = G__53480;
i__52951_53456 = G__53481;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53452);
}


var G__53482 = seq__52915_53447;
var G__53483 = chunk__52916_53448;
var G__53484 = count__52917_53449;
var G__53485 = (i__52918_53450 + (1));
seq__52915_53447 = G__53482;
chunk__52916_53448 = G__53483;
count__52917_53449 = G__53484;
i__52918_53450 = G__53485;
continue;
} else {
var temp__5804__auto___53486 = cljs.core.seq(seq__52915_53447);
if(temp__5804__auto___53486){
var seq__52915_53487__$1 = temp__5804__auto___53486;
if(cljs.core.chunked_seq_QMARK_(seq__52915_53487__$1)){
var c__5568__auto___53488 = cljs.core.chunk_first(seq__52915_53487__$1);
var G__53489 = cljs.core.chunk_rest(seq__52915_53487__$1);
var G__53490 = c__5568__auto___53488;
var G__53491 = cljs.core.count(c__5568__auto___53488);
var G__53492 = (0);
seq__52915_53447 = G__53489;
chunk__52916_53448 = G__53490;
count__52917_53449 = G__53491;
i__52918_53450 = G__53492;
continue;
} else {
var child_struct_53493 = cljs.core.first(seq__52915_53487__$1);
var children_53494 = shadow.dom.dom_node(child_struct_53493);
if(cljs.core.seq_QMARK_(children_53494)){
var seq__52965_53495 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_53494));
var chunk__52967_53496 = null;
var count__52968_53497 = (0);
var i__52969_53498 = (0);
while(true){
if((i__52969_53498 < count__52968_53497)){
var child_53499 = chunk__52967_53496.cljs$core$IIndexed$_nth$arity$2(null,i__52969_53498);
if(cljs.core.truth_(child_53499)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53499);


var G__53500 = seq__52965_53495;
var G__53501 = chunk__52967_53496;
var G__53502 = count__52968_53497;
var G__53503 = (i__52969_53498 + (1));
seq__52965_53495 = G__53500;
chunk__52967_53496 = G__53501;
count__52968_53497 = G__53502;
i__52969_53498 = G__53503;
continue;
} else {
var G__53504 = seq__52965_53495;
var G__53505 = chunk__52967_53496;
var G__53506 = count__52968_53497;
var G__53507 = (i__52969_53498 + (1));
seq__52965_53495 = G__53504;
chunk__52967_53496 = G__53505;
count__52968_53497 = G__53506;
i__52969_53498 = G__53507;
continue;
}
} else {
var temp__5804__auto___53508__$1 = cljs.core.seq(seq__52965_53495);
if(temp__5804__auto___53508__$1){
var seq__52965_53509__$1 = temp__5804__auto___53508__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52965_53509__$1)){
var c__5568__auto___53510 = cljs.core.chunk_first(seq__52965_53509__$1);
var G__53511 = cljs.core.chunk_rest(seq__52965_53509__$1);
var G__53512 = c__5568__auto___53510;
var G__53513 = cljs.core.count(c__5568__auto___53510);
var G__53514 = (0);
seq__52965_53495 = G__53511;
chunk__52967_53496 = G__53512;
count__52968_53497 = G__53513;
i__52969_53498 = G__53514;
continue;
} else {
var child_53515 = cljs.core.first(seq__52965_53509__$1);
if(cljs.core.truth_(child_53515)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_53515);


var G__53516 = cljs.core.next(seq__52965_53509__$1);
var G__53517 = null;
var G__53518 = (0);
var G__53519 = (0);
seq__52965_53495 = G__53516;
chunk__52967_53496 = G__53517;
count__52968_53497 = G__53518;
i__52969_53498 = G__53519;
continue;
} else {
var G__53520 = cljs.core.next(seq__52965_53509__$1);
var G__53521 = null;
var G__53522 = (0);
var G__53523 = (0);
seq__52965_53495 = G__53520;
chunk__52967_53496 = G__53521;
count__52968_53497 = G__53522;
i__52969_53498 = G__53523;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_53494);
}


var G__53524 = cljs.core.next(seq__52915_53487__$1);
var G__53525 = null;
var G__53526 = (0);
var G__53527 = (0);
seq__52915_53447 = G__53524;
chunk__52916_53448 = G__53525;
count__52917_53449 = G__53526;
i__52918_53450 = G__53527;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__53006 = cljs.core.seq(node);
var chunk__53007 = null;
var count__53008 = (0);
var i__53009 = (0);
while(true){
if((i__53009 < count__53008)){
var n = chunk__53007.cljs$core$IIndexed$_nth$arity$2(null,i__53009);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53528 = seq__53006;
var G__53529 = chunk__53007;
var G__53530 = count__53008;
var G__53531 = (i__53009 + (1));
seq__53006 = G__53528;
chunk__53007 = G__53529;
count__53008 = G__53530;
i__53009 = G__53531;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53006);
if(temp__5804__auto__){
var seq__53006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53006__$1);
var G__53532 = cljs.core.chunk_rest(seq__53006__$1);
var G__53533 = c__5568__auto__;
var G__53534 = cljs.core.count(c__5568__auto__);
var G__53535 = (0);
seq__53006 = G__53532;
chunk__53007 = G__53533;
count__53008 = G__53534;
i__53009 = G__53535;
continue;
} else {
var n = cljs.core.first(seq__53006__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__53536 = cljs.core.next(seq__53006__$1);
var G__53537 = null;
var G__53538 = (0);
var G__53539 = (0);
seq__53006 = G__53536;
chunk__53007 = G__53537;
count__53008 = G__53538;
i__53009 = G__53539;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__53016 = arguments.length;
switch (G__53016) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__53024 = arguments.length;
switch (G__53024) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__53033 = arguments.length;
switch (G__53033) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53543 = arguments.length;
var i__5770__auto___53544 = (0);
while(true){
if((i__5770__auto___53544 < len__5769__auto___53543)){
args__5775__auto__.push((arguments[i__5770__auto___53544]));

var G__53545 = (i__5770__auto___53544 + (1));
i__5770__auto___53544 = G__53545;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__53063_53546 = cljs.core.seq(nodes);
var chunk__53064_53547 = null;
var count__53065_53548 = (0);
var i__53066_53549 = (0);
while(true){
if((i__53066_53549 < count__53065_53548)){
var node_53550 = chunk__53064_53547.cljs$core$IIndexed$_nth$arity$2(null,i__53066_53549);
fragment.appendChild(shadow.dom._to_dom(node_53550));


var G__53551 = seq__53063_53546;
var G__53552 = chunk__53064_53547;
var G__53553 = count__53065_53548;
var G__53554 = (i__53066_53549 + (1));
seq__53063_53546 = G__53551;
chunk__53064_53547 = G__53552;
count__53065_53548 = G__53553;
i__53066_53549 = G__53554;
continue;
} else {
var temp__5804__auto___53555 = cljs.core.seq(seq__53063_53546);
if(temp__5804__auto___53555){
var seq__53063_53556__$1 = temp__5804__auto___53555;
if(cljs.core.chunked_seq_QMARK_(seq__53063_53556__$1)){
var c__5568__auto___53557 = cljs.core.chunk_first(seq__53063_53556__$1);
var G__53558 = cljs.core.chunk_rest(seq__53063_53556__$1);
var G__53559 = c__5568__auto___53557;
var G__53560 = cljs.core.count(c__5568__auto___53557);
var G__53561 = (0);
seq__53063_53546 = G__53558;
chunk__53064_53547 = G__53559;
count__53065_53548 = G__53560;
i__53066_53549 = G__53561;
continue;
} else {
var node_53562 = cljs.core.first(seq__53063_53556__$1);
fragment.appendChild(shadow.dom._to_dom(node_53562));


var G__53563 = cljs.core.next(seq__53063_53556__$1);
var G__53564 = null;
var G__53565 = (0);
var G__53566 = (0);
seq__53063_53546 = G__53563;
chunk__53064_53547 = G__53564;
count__53065_53548 = G__53565;
i__53066_53549 = G__53566;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq53058){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq53058));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__53071_53567 = cljs.core.seq(scripts);
var chunk__53072_53568 = null;
var count__53073_53569 = (0);
var i__53074_53570 = (0);
while(true){
if((i__53074_53570 < count__53073_53569)){
var vec__53082_53571 = chunk__53072_53568.cljs$core$IIndexed$_nth$arity$2(null,i__53074_53570);
var script_tag_53572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53082_53571,(0),null);
var script_body_53573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53082_53571,(1),null);
eval(script_body_53573);


var G__53574 = seq__53071_53567;
var G__53575 = chunk__53072_53568;
var G__53576 = count__53073_53569;
var G__53577 = (i__53074_53570 + (1));
seq__53071_53567 = G__53574;
chunk__53072_53568 = G__53575;
count__53073_53569 = G__53576;
i__53074_53570 = G__53577;
continue;
} else {
var temp__5804__auto___53578 = cljs.core.seq(seq__53071_53567);
if(temp__5804__auto___53578){
var seq__53071_53579__$1 = temp__5804__auto___53578;
if(cljs.core.chunked_seq_QMARK_(seq__53071_53579__$1)){
var c__5568__auto___53580 = cljs.core.chunk_first(seq__53071_53579__$1);
var G__53581 = cljs.core.chunk_rest(seq__53071_53579__$1);
var G__53582 = c__5568__auto___53580;
var G__53583 = cljs.core.count(c__5568__auto___53580);
var G__53584 = (0);
seq__53071_53567 = G__53581;
chunk__53072_53568 = G__53582;
count__53073_53569 = G__53583;
i__53074_53570 = G__53584;
continue;
} else {
var vec__53087_53585 = cljs.core.first(seq__53071_53579__$1);
var script_tag_53586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53585,(0),null);
var script_body_53587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53087_53585,(1),null);
eval(script_body_53587);


var G__53588 = cljs.core.next(seq__53071_53579__$1);
var G__53589 = null;
var G__53590 = (0);
var G__53591 = (0);
seq__53071_53567 = G__53588;
chunk__53072_53568 = G__53589;
count__53073_53569 = G__53590;
i__53074_53570 = G__53591;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__53093){
var vec__53094 = p__53093;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53094,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53094,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__53110 = arguments.length;
switch (G__53110) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__53124 = cljs.core.seq(style_keys);
var chunk__53125 = null;
var count__53126 = (0);
var i__53127 = (0);
while(true){
if((i__53127 < count__53126)){
var it = chunk__53125.cljs$core$IIndexed$_nth$arity$2(null,i__53127);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53593 = seq__53124;
var G__53594 = chunk__53125;
var G__53595 = count__53126;
var G__53596 = (i__53127 + (1));
seq__53124 = G__53593;
chunk__53125 = G__53594;
count__53126 = G__53595;
i__53127 = G__53596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__53124);
if(temp__5804__auto__){
var seq__53124__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53124__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__53124__$1);
var G__53597 = cljs.core.chunk_rest(seq__53124__$1);
var G__53598 = c__5568__auto__;
var G__53599 = cljs.core.count(c__5568__auto__);
var G__53600 = (0);
seq__53124 = G__53597;
chunk__53125 = G__53598;
count__53126 = G__53599;
i__53127 = G__53600;
continue;
} else {
var it = cljs.core.first(seq__53124__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__53601 = cljs.core.next(seq__53124__$1);
var G__53602 = null;
var G__53603 = (0);
var G__53604 = (0);
seq__53124 = G__53601;
chunk__53125 = G__53602;
count__53126 = G__53603;
i__53127 = G__53604;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k53134,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__53146 = k53134;
var G__53146__$1 = (((G__53146 instanceof cljs.core.Keyword))?G__53146.fqn:null);
switch (G__53146__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53134,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__53148){
var vec__53149 = p__53148;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53149,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53149,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53133){
var self__ = this;
var G__53133__$1 = this;
return (new cljs.core.RecordIter((0),G__53133__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53135,other53136){
var self__ = this;
var this53135__$1 = this;
return (((!((other53136 == null)))) && ((((this53135__$1.constructor === other53136.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53135__$1.x,other53136.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53135__$1.y,other53136.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53135__$1.__extmap,other53136.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k53134){
var self__ = this;
var this__5350__auto____$1 = this;
var G__53168 = k53134;
var G__53168__$1 = (((G__53168 instanceof cljs.core.Keyword))?G__53168.fqn:null);
switch (G__53168__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53134);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__53133){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__53170 = cljs.core.keyword_identical_QMARK_;
var expr__53171 = k__5352__auto__;
if(cljs.core.truth_((pred__53170.cljs$core$IFn$_invoke$arity$2 ? pred__53170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__53171) : pred__53170.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__53171)))){
return (new shadow.dom.Coordinate(G__53133,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53170.cljs$core$IFn$_invoke$arity$2 ? pred__53170.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__53171) : pred__53170.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__53171)))){
return (new shadow.dom.Coordinate(self__.x,G__53133,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__53133),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__53133){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__53133,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__53139){
var extmap__5385__auto__ = (function (){var G__53187 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53139,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__53139)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53187);
} else {
return G__53187;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__53139),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__53139),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k53197,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__53204 = k53197;
var G__53204__$1 = (((G__53204 instanceof cljs.core.Keyword))?G__53204.fqn:null);
switch (G__53204__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53197,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__53205){
var vec__53206 = p__53205;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53206,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53206,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53196){
var self__ = this;
var G__53196__$1 = this;
return (new cljs.core.RecordIter((0),G__53196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53198,other53199){
var self__ = this;
var this53198__$1 = this;
return (((!((other53199 == null)))) && ((((this53198__$1.constructor === other53199.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53198__$1.w,other53199.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53198__$1.h,other53199.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53198__$1.__extmap,other53199.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k53197){
var self__ = this;
var this__5350__auto____$1 = this;
var G__53212 = k53197;
var G__53212__$1 = (((G__53212 instanceof cljs.core.Keyword))?G__53212.fqn:null);
switch (G__53212__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k53197);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__53196){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__53217 = cljs.core.keyword_identical_QMARK_;
var expr__53218 = k__5352__auto__;
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__53218)))){
return (new shadow.dom.Size(G__53196,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__53217.cljs$core$IFn$_invoke$arity$2 ? pred__53217.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__53218) : pred__53217.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__53218)))){
return (new shadow.dom.Size(self__.w,G__53196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__53196),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__53196){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__53196,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__53200){
var extmap__5385__auto__ = (function (){var G__53231 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53200,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__53200)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53231);
} else {
return G__53231;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__53200),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__53200),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__53609 = (i + (1));
var G__53610 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__53609;
ret = G__53610;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53262){
var vec__53264 = p__53262;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53264,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__53270 = arguments.length;
switch (G__53270) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__53612 = ps;
var G__53613 = (i + (1));
el__$1 = G__53612;
i = G__53613;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__53303 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53303,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__53308_53614 = cljs.core.seq(props);
var chunk__53309_53615 = null;
var count__53310_53616 = (0);
var i__53311_53617 = (0);
while(true){
if((i__53311_53617 < count__53310_53616)){
var vec__53327_53618 = chunk__53309_53615.cljs$core$IIndexed$_nth$arity$2(null,i__53311_53617);
var k_53619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327_53618,(0),null);
var v_53620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53327_53618,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_53619);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53619),v_53620);


var G__53621 = seq__53308_53614;
var G__53622 = chunk__53309_53615;
var G__53623 = count__53310_53616;
var G__53624 = (i__53311_53617 + (1));
seq__53308_53614 = G__53621;
chunk__53309_53615 = G__53622;
count__53310_53616 = G__53623;
i__53311_53617 = G__53624;
continue;
} else {
var temp__5804__auto___53625 = cljs.core.seq(seq__53308_53614);
if(temp__5804__auto___53625){
var seq__53308_53626__$1 = temp__5804__auto___53625;
if(cljs.core.chunked_seq_QMARK_(seq__53308_53626__$1)){
var c__5568__auto___53627 = cljs.core.chunk_first(seq__53308_53626__$1);
var G__53628 = cljs.core.chunk_rest(seq__53308_53626__$1);
var G__53629 = c__5568__auto___53627;
var G__53630 = cljs.core.count(c__5568__auto___53627);
var G__53631 = (0);
seq__53308_53614 = G__53628;
chunk__53309_53615 = G__53629;
count__53310_53616 = G__53630;
i__53311_53617 = G__53631;
continue;
} else {
var vec__53335_53632 = cljs.core.first(seq__53308_53626__$1);
var k_53633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53335_53632,(0),null);
var v_53634 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53335_53632,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_53633);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_53633),v_53634);


var G__53635 = cljs.core.next(seq__53308_53626__$1);
var G__53636 = null;
var G__53637 = (0);
var G__53638 = (0);
seq__53308_53614 = G__53635;
chunk__53309_53615 = G__53636;
count__53310_53616 = G__53637;
i__53311_53617 = G__53638;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__53346 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53346,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53346,(1),null);
var seq__53349_53639 = cljs.core.seq(node_children);
var chunk__53351_53640 = null;
var count__53352_53641 = (0);
var i__53353_53642 = (0);
while(true){
if((i__53353_53642 < count__53352_53641)){
var child_struct_53643 = chunk__53351_53640.cljs$core$IIndexed$_nth$arity$2(null,i__53353_53642);
if((!((child_struct_53643 == null)))){
if(typeof child_struct_53643 === 'string'){
var text_53644 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53644),child_struct_53643].join(''));
} else {
var children_53645 = shadow.dom.svg_node(child_struct_53643);
if(cljs.core.seq_QMARK_(children_53645)){
var seq__53367_53646 = cljs.core.seq(children_53645);
var chunk__53369_53647 = null;
var count__53370_53648 = (0);
var i__53371_53649 = (0);
while(true){
if((i__53371_53649 < count__53370_53648)){
var child_53650 = chunk__53369_53647.cljs$core$IIndexed$_nth$arity$2(null,i__53371_53649);
if(cljs.core.truth_(child_53650)){
node.appendChild(child_53650);


var G__53651 = seq__53367_53646;
var G__53652 = chunk__53369_53647;
var G__53653 = count__53370_53648;
var G__53654 = (i__53371_53649 + (1));
seq__53367_53646 = G__53651;
chunk__53369_53647 = G__53652;
count__53370_53648 = G__53653;
i__53371_53649 = G__53654;
continue;
} else {
var G__53655 = seq__53367_53646;
var G__53656 = chunk__53369_53647;
var G__53657 = count__53370_53648;
var G__53658 = (i__53371_53649 + (1));
seq__53367_53646 = G__53655;
chunk__53369_53647 = G__53656;
count__53370_53648 = G__53657;
i__53371_53649 = G__53658;
continue;
}
} else {
var temp__5804__auto___53659 = cljs.core.seq(seq__53367_53646);
if(temp__5804__auto___53659){
var seq__53367_53660__$1 = temp__5804__auto___53659;
if(cljs.core.chunked_seq_QMARK_(seq__53367_53660__$1)){
var c__5568__auto___53661 = cljs.core.chunk_first(seq__53367_53660__$1);
var G__53662 = cljs.core.chunk_rest(seq__53367_53660__$1);
var G__53663 = c__5568__auto___53661;
var G__53664 = cljs.core.count(c__5568__auto___53661);
var G__53665 = (0);
seq__53367_53646 = G__53662;
chunk__53369_53647 = G__53663;
count__53370_53648 = G__53664;
i__53371_53649 = G__53665;
continue;
} else {
var child_53666 = cljs.core.first(seq__53367_53660__$1);
if(cljs.core.truth_(child_53666)){
node.appendChild(child_53666);


var G__53667 = cljs.core.next(seq__53367_53660__$1);
var G__53668 = null;
var G__53669 = (0);
var G__53670 = (0);
seq__53367_53646 = G__53667;
chunk__53369_53647 = G__53668;
count__53370_53648 = G__53669;
i__53371_53649 = G__53670;
continue;
} else {
var G__53671 = cljs.core.next(seq__53367_53660__$1);
var G__53672 = null;
var G__53673 = (0);
var G__53674 = (0);
seq__53367_53646 = G__53671;
chunk__53369_53647 = G__53672;
count__53370_53648 = G__53673;
i__53371_53649 = G__53674;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53645);
}
}


var G__53675 = seq__53349_53639;
var G__53676 = chunk__53351_53640;
var G__53677 = count__53352_53641;
var G__53678 = (i__53353_53642 + (1));
seq__53349_53639 = G__53675;
chunk__53351_53640 = G__53676;
count__53352_53641 = G__53677;
i__53353_53642 = G__53678;
continue;
} else {
var G__53679 = seq__53349_53639;
var G__53680 = chunk__53351_53640;
var G__53681 = count__53352_53641;
var G__53682 = (i__53353_53642 + (1));
seq__53349_53639 = G__53679;
chunk__53351_53640 = G__53680;
count__53352_53641 = G__53681;
i__53353_53642 = G__53682;
continue;
}
} else {
var temp__5804__auto___53683 = cljs.core.seq(seq__53349_53639);
if(temp__5804__auto___53683){
var seq__53349_53684__$1 = temp__5804__auto___53683;
if(cljs.core.chunked_seq_QMARK_(seq__53349_53684__$1)){
var c__5568__auto___53685 = cljs.core.chunk_first(seq__53349_53684__$1);
var G__53686 = cljs.core.chunk_rest(seq__53349_53684__$1);
var G__53687 = c__5568__auto___53685;
var G__53688 = cljs.core.count(c__5568__auto___53685);
var G__53689 = (0);
seq__53349_53639 = G__53686;
chunk__53351_53640 = G__53687;
count__53352_53641 = G__53688;
i__53353_53642 = G__53689;
continue;
} else {
var child_struct_53690 = cljs.core.first(seq__53349_53684__$1);
if((!((child_struct_53690 == null)))){
if(typeof child_struct_53690 === 'string'){
var text_53691 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_53691),child_struct_53690].join(''));
} else {
var children_53692 = shadow.dom.svg_node(child_struct_53690);
if(cljs.core.seq_QMARK_(children_53692)){
var seq__53373_53693 = cljs.core.seq(children_53692);
var chunk__53375_53694 = null;
var count__53376_53695 = (0);
var i__53377_53696 = (0);
while(true){
if((i__53377_53696 < count__53376_53695)){
var child_53697 = chunk__53375_53694.cljs$core$IIndexed$_nth$arity$2(null,i__53377_53696);
if(cljs.core.truth_(child_53697)){
node.appendChild(child_53697);


var G__53698 = seq__53373_53693;
var G__53699 = chunk__53375_53694;
var G__53700 = count__53376_53695;
var G__53701 = (i__53377_53696 + (1));
seq__53373_53693 = G__53698;
chunk__53375_53694 = G__53699;
count__53376_53695 = G__53700;
i__53377_53696 = G__53701;
continue;
} else {
var G__53702 = seq__53373_53693;
var G__53703 = chunk__53375_53694;
var G__53704 = count__53376_53695;
var G__53705 = (i__53377_53696 + (1));
seq__53373_53693 = G__53702;
chunk__53375_53694 = G__53703;
count__53376_53695 = G__53704;
i__53377_53696 = G__53705;
continue;
}
} else {
var temp__5804__auto___53706__$1 = cljs.core.seq(seq__53373_53693);
if(temp__5804__auto___53706__$1){
var seq__53373_53707__$1 = temp__5804__auto___53706__$1;
if(cljs.core.chunked_seq_QMARK_(seq__53373_53707__$1)){
var c__5568__auto___53708 = cljs.core.chunk_first(seq__53373_53707__$1);
var G__53709 = cljs.core.chunk_rest(seq__53373_53707__$1);
var G__53710 = c__5568__auto___53708;
var G__53711 = cljs.core.count(c__5568__auto___53708);
var G__53712 = (0);
seq__53373_53693 = G__53709;
chunk__53375_53694 = G__53710;
count__53376_53695 = G__53711;
i__53377_53696 = G__53712;
continue;
} else {
var child_53713 = cljs.core.first(seq__53373_53707__$1);
if(cljs.core.truth_(child_53713)){
node.appendChild(child_53713);


var G__53714 = cljs.core.next(seq__53373_53707__$1);
var G__53715 = null;
var G__53716 = (0);
var G__53717 = (0);
seq__53373_53693 = G__53714;
chunk__53375_53694 = G__53715;
count__53376_53695 = G__53716;
i__53377_53696 = G__53717;
continue;
} else {
var G__53718 = cljs.core.next(seq__53373_53707__$1);
var G__53719 = null;
var G__53720 = (0);
var G__53721 = (0);
seq__53373_53693 = G__53718;
chunk__53375_53694 = G__53719;
count__53376_53695 = G__53720;
i__53377_53696 = G__53721;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_53692);
}
}


var G__53722 = cljs.core.next(seq__53349_53684__$1);
var G__53723 = null;
var G__53724 = (0);
var G__53725 = (0);
seq__53349_53639 = G__53722;
chunk__53351_53640 = G__53723;
count__53352_53641 = G__53724;
i__53353_53642 = G__53725;
continue;
} else {
var G__53726 = cljs.core.next(seq__53349_53684__$1);
var G__53727 = null;
var G__53728 = (0);
var G__53729 = (0);
seq__53349_53639 = G__53726;
chunk__53351_53640 = G__53727;
count__53352_53641 = G__53728;
i__53353_53642 = G__53729;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53730 = arguments.length;
var i__5770__auto___53731 = (0);
while(true){
if((i__5770__auto___53731 < len__5769__auto___53730)){
args__5775__auto__.push((arguments[i__5770__auto___53731]));

var G__53732 = (i__5770__auto___53731 + (1));
i__5770__auto___53731 = G__53732;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq53379){
var G__53380 = cljs.core.first(seq53379);
var seq53379__$1 = cljs.core.next(seq53379);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53380,seq53379__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__53382 = arguments.length;
switch (G__53382) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33344__auto___53734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_53387){
var state_val_53388 = (state_53387[(1)]);
if((state_val_53388 === (1))){
var state_53387__$1 = state_53387;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53387__$1,(2),once_or_cleanup);
} else {
if((state_val_53388 === (2))){
var inst_53384 = (state_53387[(2)]);
var inst_53385 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_53387__$1 = (function (){var statearr_53389 = state_53387;
(statearr_53389[(7)] = inst_53384);

return statearr_53389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_53387__$1,inst_53385);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33309__auto__ = null;
var shadow$dom$state_machine__33309__auto____0 = (function (){
var statearr_53390 = [null,null,null,null,null,null,null,null];
(statearr_53390[(0)] = shadow$dom$state_machine__33309__auto__);

(statearr_53390[(1)] = (1));

return statearr_53390;
});
var shadow$dom$state_machine__33309__auto____1 = (function (state_53387){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_53387);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e53391){var ex__33312__auto__ = e53391;
var statearr_53392_53735 = state_53387;
(statearr_53392_53735[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_53387[(4)]))){
var statearr_53393_53736 = state_53387;
(statearr_53393_53736[(1)] = cljs.core.first((state_53387[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53737 = state_53387;
state_53387 = G__53737;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
shadow$dom$state_machine__33309__auto__ = function(state_53387){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33309__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33309__auto____1.call(this,state_53387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33309__auto____0;
shadow$dom$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33309__auto____1;
return shadow$dom$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_53394 = f__33345__auto__();
(statearr_53394[(6)] = c__33344__auto___53734);

return statearr_53394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
