goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51269 = (function (f,blockable,meta51270){
this.f = f;
this.blockable = blockable;
this.meta51270 = meta51270;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51271,meta51270__$1){
var self__ = this;
var _51271__$1 = this;
return (new cljs.core.async.t_cljs$core$async51269(self__.f,self__.blockable,meta51270__$1));
}));

(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51271){
var self__ = this;
var _51271__$1 = this;
return self__.meta51270;
}));

(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async51269.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async51269.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta51270","meta51270",-675125414,null)], null);
}));

(cljs.core.async.t_cljs$core$async51269.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51269.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51269");

(cljs.core.async.t_cljs$core$async51269.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51269");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51269.
 */
cljs.core.async.__GT_t_cljs$core$async51269 = (function cljs$core$async$__GT_t_cljs$core$async51269(f,blockable,meta51270){
return (new cljs.core.async.t_cljs$core$async51269(f,blockable,meta51270));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__51268 = arguments.length;
switch (G__51268) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async51269(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__51274 = arguments.length;
switch (G__51274) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__51276 = arguments.length;
switch (G__51276) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__51278 = arguments.length;
switch (G__51278) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52695 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52695) : fn1.call(null,val_52695));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52695) : fn1.call(null,val_52695));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__51280 = arguments.length;
switch (G__51280) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___52699 = n;
var x_52700 = (0);
while(true){
if((x_52700 < n__5636__auto___52699)){
(a[x_52700] = x_52700);

var G__52701 = (x_52700 + (1));
x_52700 = G__52701;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51281 = (function (flag,meta51282){
this.flag = flag;
this.meta51282 = meta51282;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51283,meta51282__$1){
var self__ = this;
var _51283__$1 = this;
return (new cljs.core.async.t_cljs$core$async51281(self__.flag,meta51282__$1));
}));

(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51283){
var self__ = this;
var _51283__$1 = this;
return self__.meta51282;
}));

(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51281.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async51281.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta51282","meta51282",-2083276320,null)], null);
}));

(cljs.core.async.t_cljs$core$async51281.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51281.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51281");

(cljs.core.async.t_cljs$core$async51281.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51281");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51281.
 */
cljs.core.async.__GT_t_cljs$core$async51281 = (function cljs$core$async$__GT_t_cljs$core$async51281(flag,meta51282){
return (new cljs.core.async.t_cljs$core$async51281(flag,meta51282));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async51281(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51284 = (function (flag,cb,meta51285){
this.flag = flag;
this.cb = cb;
this.meta51285 = meta51285;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51286,meta51285__$1){
var self__ = this;
var _51286__$1 = this;
return (new cljs.core.async.t_cljs$core$async51284(self__.flag,self__.cb,meta51285__$1));
}));

(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51286){
var self__ = this;
var _51286__$1 = this;
return self__.meta51285;
}));

(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51284.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async51284.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta51285","meta51285",-2110688131,null)], null);
}));

(cljs.core.async.t_cljs$core$async51284.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51284.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51284");

(cljs.core.async.t_cljs$core$async51284.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51284");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51284.
 */
cljs.core.async.__GT_t_cljs$core$async51284 = (function cljs$core$async$__GT_t_cljs$core$async51284(flag,cb,meta51285){
return (new cljs.core.async.t_cljs$core$async51284(flag,cb,meta51285));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async51284(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51287_SHARP_){
var G__51289 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51287_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51289) : fret.call(null,G__51289));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__51288_SHARP_){
var G__51290 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__51288_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__51290) : fret.call(null,G__51290));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52705 = (i + (1));
i = G__52705;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52707 = arguments.length;
var i__5770__auto___52708 = (0);
while(true){
if((i__5770__auto___52708 < len__5769__auto___52707)){
args__5775__auto__.push((arguments[i__5770__auto___52708]));

var G__52709 = (i__5770__auto___52708 + (1));
i__5770__auto___52708 = G__52709;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__51293){
var map__51294 = p__51293;
var map__51294__$1 = cljs.core.__destructure_map(map__51294);
var opts = map__51294__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq51291){
var G__51292 = cljs.core.first(seq51291);
var seq51291__$1 = cljs.core.next(seq51291);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51292,seq51291__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__51296 = arguments.length;
switch (G__51296) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33344__auto___52712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51320){
var state_val_51321 = (state_51320[(1)]);
if((state_val_51321 === (7))){
var inst_51316 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51322_52713 = state_51320__$1;
(statearr_51322_52713[(2)] = inst_51316);

(statearr_51322_52713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (1))){
var state_51320__$1 = state_51320;
var statearr_51323_52714 = state_51320__$1;
(statearr_51323_52714[(2)] = null);

(statearr_51323_52714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (4))){
var inst_51299 = (state_51320[(7)]);
var inst_51299__$1 = (state_51320[(2)]);
var inst_51300 = (inst_51299__$1 == null);
var state_51320__$1 = (function (){var statearr_51324 = state_51320;
(statearr_51324[(7)] = inst_51299__$1);

return statearr_51324;
})();
if(cljs.core.truth_(inst_51300)){
var statearr_51325_52715 = state_51320__$1;
(statearr_51325_52715[(1)] = (5));

} else {
var statearr_51326_52717 = state_51320__$1;
(statearr_51326_52717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (13))){
var state_51320__$1 = state_51320;
var statearr_51327_52718 = state_51320__$1;
(statearr_51327_52718[(2)] = null);

(statearr_51327_52718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (6))){
var inst_51299 = (state_51320[(7)]);
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51320__$1,(11),to,inst_51299);
} else {
if((state_val_51321 === (3))){
var inst_51318 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51320__$1,inst_51318);
} else {
if((state_val_51321 === (12))){
var state_51320__$1 = state_51320;
var statearr_51328_52720 = state_51320__$1;
(statearr_51328_52720[(2)] = null);

(statearr_51328_52720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (2))){
var state_51320__$1 = state_51320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51320__$1,(4),from);
} else {
if((state_val_51321 === (11))){
var inst_51309 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
if(cljs.core.truth_(inst_51309)){
var statearr_51329_52721 = state_51320__$1;
(statearr_51329_52721[(1)] = (12));

} else {
var statearr_51330_52722 = state_51320__$1;
(statearr_51330_52722[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (9))){
var state_51320__$1 = state_51320;
var statearr_51331_52723 = state_51320__$1;
(statearr_51331_52723[(2)] = null);

(statearr_51331_52723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (5))){
var state_51320__$1 = state_51320;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51332_52724 = state_51320__$1;
(statearr_51332_52724[(1)] = (8));

} else {
var statearr_51333_52725 = state_51320__$1;
(statearr_51333_52725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (14))){
var inst_51314 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51334_52726 = state_51320__$1;
(statearr_51334_52726[(2)] = inst_51314);

(statearr_51334_52726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (10))){
var inst_51306 = (state_51320[(2)]);
var state_51320__$1 = state_51320;
var statearr_51335_52727 = state_51320__$1;
(statearr_51335_52727[(2)] = inst_51306);

(statearr_51335_52727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51321 === (8))){
var inst_51303 = cljs.core.async.close_BANG_(to);
var state_51320__$1 = state_51320;
var statearr_51336_52728 = state_51320__$1;
(statearr_51336_52728[(2)] = inst_51303);

(statearr_51336_52728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_51337 = [null,null,null,null,null,null,null,null];
(statearr_51337[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_51337[(1)] = (1));

return statearr_51337;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_51320){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51320);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51338){var ex__33312__auto__ = e51338;
var statearr_51339_52729 = state_51320;
(statearr_51339_52729[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51320[(4)]))){
var statearr_51340_52730 = state_51320;
(statearr_51340_52730[(1)] = cljs.core.first((state_51320[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52732 = state_51320;
state_51320 = G__52732;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_51320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_51320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51341 = f__33345__auto__();
(statearr_51341[(6)] = c__33344__auto___52712);

return statearr_51341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__51342){
var vec__51343 = p__51342;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51343,(1),null);
var job = vec__51343;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33344__auto___52734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51350){
var state_val_51351 = (state_51350[(1)]);
if((state_val_51351 === (1))){
var state_51350__$1 = state_51350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51350__$1,(2),res,v);
} else {
if((state_val_51351 === (2))){
var inst_51347 = (state_51350[(2)]);
var inst_51348 = cljs.core.async.close_BANG_(res);
var state_51350__$1 = (function (){var statearr_51352 = state_51350;
(statearr_51352[(7)] = inst_51347);

return statearr_51352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51350__$1,inst_51348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_51353 = [null,null,null,null,null,null,null,null];
(statearr_51353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_51353[(1)] = (1));

return statearr_51353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_51350){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51350);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51354){var ex__33312__auto__ = e51354;
var statearr_51355_52735 = state_51350;
(statearr_51355_52735[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51350[(4)]))){
var statearr_51356_52736 = state_51350;
(statearr_51356_52736[(1)] = cljs.core.first((state_51350[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52737 = state_51350;
state_51350 = G__52737;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_51350){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_51350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51357 = f__33345__auto__();
(statearr_51357[(6)] = c__33344__auto___52734);

return statearr_51357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__51358){
var vec__51359 = p__51358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51359,(1),null);
var job = vec__51359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___52738 = n;
var __52739 = (0);
while(true){
if((__52739 < n__5636__auto___52738)){
var G__51362_52740 = type;
var G__51362_52741__$1 = (((G__51362_52740 instanceof cljs.core.Keyword))?G__51362_52740.fqn:null);
switch (G__51362_52741__$1) {
case "compute":
var c__33344__auto___52743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52739,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = ((function (__52739,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function (state_51375){
var state_val_51376 = (state_51375[(1)]);
if((state_val_51376 === (1))){
var state_51375__$1 = state_51375;
var statearr_51377_52744 = state_51375__$1;
(statearr_51377_52744[(2)] = null);

(statearr_51377_52744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (2))){
var state_51375__$1 = state_51375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51375__$1,(4),jobs);
} else {
if((state_val_51376 === (3))){
var inst_51373 = (state_51375[(2)]);
var state_51375__$1 = state_51375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51375__$1,inst_51373);
} else {
if((state_val_51376 === (4))){
var inst_51365 = (state_51375[(2)]);
var inst_51366 = process__$1(inst_51365);
var state_51375__$1 = state_51375;
if(cljs.core.truth_(inst_51366)){
var statearr_51378_52746 = state_51375__$1;
(statearr_51378_52746[(1)] = (5));

} else {
var statearr_51379_52747 = state_51375__$1;
(statearr_51379_52747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (5))){
var state_51375__$1 = state_51375;
var statearr_51380_52748 = state_51375__$1;
(statearr_51380_52748[(2)] = null);

(statearr_51380_52748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (6))){
var state_51375__$1 = state_51375;
var statearr_51381_52750 = state_51375__$1;
(statearr_51381_52750[(2)] = null);

(statearr_51381_52750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51376 === (7))){
var inst_51371 = (state_51375[(2)]);
var state_51375__$1 = state_51375;
var statearr_51382_52751 = state_51375__$1;
(statearr_51382_52751[(2)] = inst_51371);

(statearr_51382_52751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52739,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
;
return ((function (__52739,switch__33308__auto__,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_51383 = [null,null,null,null,null,null,null];
(statearr_51383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_51383[(1)] = (1));

return statearr_51383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_51375){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51375);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51384){var ex__33312__auto__ = e51384;
var statearr_51385_52753 = state_51375;
(statearr_51385_52753[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51375[(4)]))){
var statearr_51386_52754 = state_51375;
(statearr_51386_52754[(1)] = cljs.core.first((state_51375[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52755 = state_51375;
state_51375 = G__52755;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_51375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_51375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(__52739,switch__33308__auto__,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
})();
var state__33346__auto__ = (function (){var statearr_51387 = f__33345__auto__();
(statearr_51387[(6)] = c__33344__auto___52743);

return statearr_51387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
});})(__52739,c__33344__auto___52743,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
);


break;
case "async":
var c__33344__auto___52756 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52739,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = ((function (__52739,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function (state_51400){
var state_val_51401 = (state_51400[(1)]);
if((state_val_51401 === (1))){
var state_51400__$1 = state_51400;
var statearr_51402_52757 = state_51400__$1;
(statearr_51402_52757[(2)] = null);

(statearr_51402_52757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51401 === (2))){
var state_51400__$1 = state_51400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51400__$1,(4),jobs);
} else {
if((state_val_51401 === (3))){
var inst_51398 = (state_51400[(2)]);
var state_51400__$1 = state_51400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51400__$1,inst_51398);
} else {
if((state_val_51401 === (4))){
var inst_51390 = (state_51400[(2)]);
var inst_51391 = async(inst_51390);
var state_51400__$1 = state_51400;
if(cljs.core.truth_(inst_51391)){
var statearr_51403_52758 = state_51400__$1;
(statearr_51403_52758[(1)] = (5));

} else {
var statearr_51404_52759 = state_51400__$1;
(statearr_51404_52759[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51401 === (5))){
var state_51400__$1 = state_51400;
var statearr_51405_52760 = state_51400__$1;
(statearr_51405_52760[(2)] = null);

(statearr_51405_52760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51401 === (6))){
var state_51400__$1 = state_51400;
var statearr_51406_52765 = state_51400__$1;
(statearr_51406_52765[(2)] = null);

(statearr_51406_52765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51401 === (7))){
var inst_51396 = (state_51400[(2)]);
var state_51400__$1 = state_51400;
var statearr_51407_52766 = state_51400__$1;
(statearr_51407_52766[(2)] = inst_51396);

(statearr_51407_52766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52739,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
;
return ((function (__52739,switch__33308__auto__,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_51408 = [null,null,null,null,null,null,null];
(statearr_51408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_51408[(1)] = (1));

return statearr_51408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_51400){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51400);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51409){var ex__33312__auto__ = e51409;
var statearr_51410_52767 = state_51400;
(statearr_51410_52767[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51400[(4)]))){
var statearr_51411_52768 = state_51400;
(statearr_51411_52768[(1)] = cljs.core.first((state_51400[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52769 = state_51400;
state_51400 = G__52769;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_51400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_51400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(__52739,switch__33308__auto__,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
})();
var state__33346__auto__ = (function (){var statearr_51412 = f__33345__auto__();
(statearr_51412[(6)] = c__33344__auto___52756);

return statearr_51412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
});})(__52739,c__33344__auto___52756,G__51362_52740,G__51362_52741__$1,n__5636__auto___52738,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51362_52741__$1)].join('')));

}

var G__52770 = (__52739 + (1));
__52739 = G__52770;
continue;
} else {
}
break;
}

var c__33344__auto___52771 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51434){
var state_val_51435 = (state_51434[(1)]);
if((state_val_51435 === (7))){
var inst_51430 = (state_51434[(2)]);
var state_51434__$1 = state_51434;
var statearr_51436_52772 = state_51434__$1;
(statearr_51436_52772[(2)] = inst_51430);

(statearr_51436_52772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51435 === (1))){
var state_51434__$1 = state_51434;
var statearr_51437_52773 = state_51434__$1;
(statearr_51437_52773[(2)] = null);

(statearr_51437_52773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51435 === (4))){
var inst_51415 = (state_51434[(7)]);
var inst_51415__$1 = (state_51434[(2)]);
var inst_51416 = (inst_51415__$1 == null);
var state_51434__$1 = (function (){var statearr_51438 = state_51434;
(statearr_51438[(7)] = inst_51415__$1);

return statearr_51438;
})();
if(cljs.core.truth_(inst_51416)){
var statearr_51439_52774 = state_51434__$1;
(statearr_51439_52774[(1)] = (5));

} else {
var statearr_51440_52775 = state_51434__$1;
(statearr_51440_52775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51435 === (6))){
var inst_51415 = (state_51434[(7)]);
var inst_51420 = (state_51434[(8)]);
var inst_51420__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_51421 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51422 = [inst_51415,inst_51420__$1];
var inst_51423 = (new cljs.core.PersistentVector(null,2,(5),inst_51421,inst_51422,null));
var state_51434__$1 = (function (){var statearr_51441 = state_51434;
(statearr_51441[(8)] = inst_51420__$1);

return statearr_51441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51434__$1,(8),jobs,inst_51423);
} else {
if((state_val_51435 === (3))){
var inst_51432 = (state_51434[(2)]);
var state_51434__$1 = state_51434;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51434__$1,inst_51432);
} else {
if((state_val_51435 === (2))){
var state_51434__$1 = state_51434;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51434__$1,(4),from);
} else {
if((state_val_51435 === (9))){
var inst_51427 = (state_51434[(2)]);
var state_51434__$1 = (function (){var statearr_51442 = state_51434;
(statearr_51442[(9)] = inst_51427);

return statearr_51442;
})();
var statearr_51443_52776 = state_51434__$1;
(statearr_51443_52776[(2)] = null);

(statearr_51443_52776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51435 === (5))){
var inst_51418 = cljs.core.async.close_BANG_(jobs);
var state_51434__$1 = state_51434;
var statearr_51444_52777 = state_51434__$1;
(statearr_51444_52777[(2)] = inst_51418);

(statearr_51444_52777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51435 === (8))){
var inst_51420 = (state_51434[(8)]);
var inst_51425 = (state_51434[(2)]);
var state_51434__$1 = (function (){var statearr_51445 = state_51434;
(statearr_51445[(10)] = inst_51425);

return statearr_51445;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51434__$1,(9),results,inst_51420);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_51446 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_51446[(1)] = (1));

return statearr_51446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_51434){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51434);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51447){var ex__33312__auto__ = e51447;
var statearr_51448_52778 = state_51434;
(statearr_51448_52778[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51434[(4)]))){
var statearr_51449_52779 = state_51434;
(statearr_51449_52779[(1)] = cljs.core.first((state_51434[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52780 = state_51434;
state_51434 = G__52780;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_51434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_51434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51450 = f__33345__auto__();
(statearr_51450[(6)] = c__33344__auto___52771);

return statearr_51450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


var c__33344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51488){
var state_val_51489 = (state_51488[(1)]);
if((state_val_51489 === (7))){
var inst_51484 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
var statearr_51490_52782 = state_51488__$1;
(statearr_51490_52782[(2)] = inst_51484);

(statearr_51490_52782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (20))){
var state_51488__$1 = state_51488;
var statearr_51491_52783 = state_51488__$1;
(statearr_51491_52783[(2)] = null);

(statearr_51491_52783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (1))){
var state_51488__$1 = state_51488;
var statearr_51492_52785 = state_51488__$1;
(statearr_51492_52785[(2)] = null);

(statearr_51492_52785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (4))){
var inst_51453 = (state_51488[(7)]);
var inst_51453__$1 = (state_51488[(2)]);
var inst_51454 = (inst_51453__$1 == null);
var state_51488__$1 = (function (){var statearr_51493 = state_51488;
(statearr_51493[(7)] = inst_51453__$1);

return statearr_51493;
})();
if(cljs.core.truth_(inst_51454)){
var statearr_51494_52786 = state_51488__$1;
(statearr_51494_52786[(1)] = (5));

} else {
var statearr_51495_52787 = state_51488__$1;
(statearr_51495_52787[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (15))){
var inst_51466 = (state_51488[(8)]);
var state_51488__$1 = state_51488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51488__$1,(18),to,inst_51466);
} else {
if((state_val_51489 === (21))){
var inst_51479 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
var statearr_51496_52788 = state_51488__$1;
(statearr_51496_52788[(2)] = inst_51479);

(statearr_51496_52788[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (13))){
var inst_51481 = (state_51488[(2)]);
var state_51488__$1 = (function (){var statearr_51497 = state_51488;
(statearr_51497[(9)] = inst_51481);

return statearr_51497;
})();
var statearr_51498_52789 = state_51488__$1;
(statearr_51498_52789[(2)] = null);

(statearr_51498_52789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (6))){
var inst_51453 = (state_51488[(7)]);
var state_51488__$1 = state_51488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51488__$1,(11),inst_51453);
} else {
if((state_val_51489 === (17))){
var inst_51474 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
if(cljs.core.truth_(inst_51474)){
var statearr_51499_52790 = state_51488__$1;
(statearr_51499_52790[(1)] = (19));

} else {
var statearr_51500_52791 = state_51488__$1;
(statearr_51500_52791[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (3))){
var inst_51486 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51488__$1,inst_51486);
} else {
if((state_val_51489 === (12))){
var inst_51463 = (state_51488[(10)]);
var state_51488__$1 = state_51488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51488__$1,(14),inst_51463);
} else {
if((state_val_51489 === (2))){
var state_51488__$1 = state_51488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51488__$1,(4),results);
} else {
if((state_val_51489 === (19))){
var state_51488__$1 = state_51488;
var statearr_51501_52792 = state_51488__$1;
(statearr_51501_52792[(2)] = null);

(statearr_51501_52792[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (11))){
var inst_51463 = (state_51488[(2)]);
var state_51488__$1 = (function (){var statearr_51502 = state_51488;
(statearr_51502[(10)] = inst_51463);

return statearr_51502;
})();
var statearr_51503_52793 = state_51488__$1;
(statearr_51503_52793[(2)] = null);

(statearr_51503_52793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (9))){
var state_51488__$1 = state_51488;
var statearr_51504_52794 = state_51488__$1;
(statearr_51504_52794[(2)] = null);

(statearr_51504_52794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (5))){
var state_51488__$1 = state_51488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51505_52818 = state_51488__$1;
(statearr_51505_52818[(1)] = (8));

} else {
var statearr_51506_52819 = state_51488__$1;
(statearr_51506_52819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (14))){
var inst_51468 = (state_51488[(11)]);
var inst_51466 = (state_51488[(8)]);
var inst_51466__$1 = (state_51488[(2)]);
var inst_51467 = (inst_51466__$1 == null);
var inst_51468__$1 = cljs.core.not(inst_51467);
var state_51488__$1 = (function (){var statearr_51507 = state_51488;
(statearr_51507[(11)] = inst_51468__$1);

(statearr_51507[(8)] = inst_51466__$1);

return statearr_51507;
})();
if(inst_51468__$1){
var statearr_51508_52820 = state_51488__$1;
(statearr_51508_52820[(1)] = (15));

} else {
var statearr_51509_52821 = state_51488__$1;
(statearr_51509_52821[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (16))){
var inst_51468 = (state_51488[(11)]);
var state_51488__$1 = state_51488;
var statearr_51510_52822 = state_51488__$1;
(statearr_51510_52822[(2)] = inst_51468);

(statearr_51510_52822[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (10))){
var inst_51460 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
var statearr_51511_52823 = state_51488__$1;
(statearr_51511_52823[(2)] = inst_51460);

(statearr_51511_52823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (18))){
var inst_51471 = (state_51488[(2)]);
var state_51488__$1 = state_51488;
var statearr_51512_52824 = state_51488__$1;
(statearr_51512_52824[(2)] = inst_51471);

(statearr_51512_52824[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51489 === (8))){
var inst_51457 = cljs.core.async.close_BANG_(to);
var state_51488__$1 = state_51488;
var statearr_51513_52828 = state_51488__$1;
(statearr_51513_52828[(2)] = inst_51457);

(statearr_51513_52828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_51514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51514[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_51514[(1)] = (1));

return statearr_51514;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_51488){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51488);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51515){var ex__33312__auto__ = e51515;
var statearr_51516_52829 = state_51488;
(statearr_51516_52829[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51488[(4)]))){
var statearr_51517_52830 = state_51488;
(statearr_51517_52830[(1)] = cljs.core.first((state_51488[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52834 = state_51488;
state_51488 = G__52834;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_51488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_51488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51518 = f__33345__auto__();
(statearr_51518[(6)] = c__33344__auto__);

return statearr_51518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

return c__33344__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__51520 = arguments.length;
switch (G__51520) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__51522 = arguments.length;
switch (G__51522) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__51524 = arguments.length;
switch (G__51524) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33344__auto___52842 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51550){
var state_val_51551 = (state_51550[(1)]);
if((state_val_51551 === (7))){
var inst_51546 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
var statearr_51552_52843 = state_51550__$1;
(statearr_51552_52843[(2)] = inst_51546);

(statearr_51552_52843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (1))){
var state_51550__$1 = state_51550;
var statearr_51553_52844 = state_51550__$1;
(statearr_51553_52844[(2)] = null);

(statearr_51553_52844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (4))){
var inst_51527 = (state_51550[(7)]);
var inst_51527__$1 = (state_51550[(2)]);
var inst_51528 = (inst_51527__$1 == null);
var state_51550__$1 = (function (){var statearr_51554 = state_51550;
(statearr_51554[(7)] = inst_51527__$1);

return statearr_51554;
})();
if(cljs.core.truth_(inst_51528)){
var statearr_51555_52845 = state_51550__$1;
(statearr_51555_52845[(1)] = (5));

} else {
var statearr_51556_52846 = state_51550__$1;
(statearr_51556_52846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (13))){
var state_51550__$1 = state_51550;
var statearr_51557_52847 = state_51550__$1;
(statearr_51557_52847[(2)] = null);

(statearr_51557_52847[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (6))){
var inst_51527 = (state_51550[(7)]);
var inst_51533 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51527) : p.call(null,inst_51527));
var state_51550__$1 = state_51550;
if(cljs.core.truth_(inst_51533)){
var statearr_51558_52848 = state_51550__$1;
(statearr_51558_52848[(1)] = (9));

} else {
var statearr_51559_52849 = state_51550__$1;
(statearr_51559_52849[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (3))){
var inst_51548 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51550__$1,inst_51548);
} else {
if((state_val_51551 === (12))){
var state_51550__$1 = state_51550;
var statearr_51560_52850 = state_51550__$1;
(statearr_51560_52850[(2)] = null);

(statearr_51560_52850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (2))){
var state_51550__$1 = state_51550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51550__$1,(4),ch);
} else {
if((state_val_51551 === (11))){
var inst_51527 = (state_51550[(7)]);
var inst_51537 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51550__$1,(8),inst_51537,inst_51527);
} else {
if((state_val_51551 === (9))){
var state_51550__$1 = state_51550;
var statearr_51561_52851 = state_51550__$1;
(statearr_51561_52851[(2)] = tc);

(statearr_51561_52851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (5))){
var inst_51530 = cljs.core.async.close_BANG_(tc);
var inst_51531 = cljs.core.async.close_BANG_(fc);
var state_51550__$1 = (function (){var statearr_51562 = state_51550;
(statearr_51562[(8)] = inst_51530);

return statearr_51562;
})();
var statearr_51563_52852 = state_51550__$1;
(statearr_51563_52852[(2)] = inst_51531);

(statearr_51563_52852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (14))){
var inst_51544 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
var statearr_51564_52853 = state_51550__$1;
(statearr_51564_52853[(2)] = inst_51544);

(statearr_51564_52853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (10))){
var state_51550__$1 = state_51550;
var statearr_51565_52854 = state_51550__$1;
(statearr_51565_52854[(2)] = fc);

(statearr_51565_52854[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51551 === (8))){
var inst_51539 = (state_51550[(2)]);
var state_51550__$1 = state_51550;
if(cljs.core.truth_(inst_51539)){
var statearr_51566_52855 = state_51550__$1;
(statearr_51566_52855[(1)] = (12));

} else {
var statearr_51567_52856 = state_51550__$1;
(statearr_51567_52856[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_51568 = [null,null,null,null,null,null,null,null,null];
(statearr_51568[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_51568[(1)] = (1));

return statearr_51568;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_51550){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51550);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51569){var ex__33312__auto__ = e51569;
var statearr_51570_52857 = state_51550;
(statearr_51570_52857[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51550[(4)]))){
var statearr_51571_52858 = state_51550;
(statearr_51571_52858[(1)] = cljs.core.first((state_51550[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52859 = state_51550;
state_51550 = G__52859;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_51550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_51550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51572 = f__33345__auto__();
(statearr_51572[(6)] = c__33344__auto___52842);

return statearr_51572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51594){
var state_val_51595 = (state_51594[(1)]);
if((state_val_51595 === (7))){
var inst_51590 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51596_52860 = state_51594__$1;
(statearr_51596_52860[(2)] = inst_51590);

(statearr_51596_52860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (1))){
var inst_51573 = init;
var inst_51574 = inst_51573;
var state_51594__$1 = (function (){var statearr_51597 = state_51594;
(statearr_51597[(7)] = inst_51574);

return statearr_51597;
})();
var statearr_51598_52861 = state_51594__$1;
(statearr_51598_52861[(2)] = null);

(statearr_51598_52861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (4))){
var inst_51577 = (state_51594[(8)]);
var inst_51577__$1 = (state_51594[(2)]);
var inst_51578 = (inst_51577__$1 == null);
var state_51594__$1 = (function (){var statearr_51599 = state_51594;
(statearr_51599[(8)] = inst_51577__$1);

return statearr_51599;
})();
if(cljs.core.truth_(inst_51578)){
var statearr_51600_52862 = state_51594__$1;
(statearr_51600_52862[(1)] = (5));

} else {
var statearr_51601_52863 = state_51594__$1;
(statearr_51601_52863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (6))){
var inst_51577 = (state_51594[(8)]);
var inst_51581 = (state_51594[(9)]);
var inst_51574 = (state_51594[(7)]);
var inst_51581__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_51574,inst_51577) : f.call(null,inst_51574,inst_51577));
var inst_51582 = cljs.core.reduced_QMARK_(inst_51581__$1);
var state_51594__$1 = (function (){var statearr_51602 = state_51594;
(statearr_51602[(9)] = inst_51581__$1);

return statearr_51602;
})();
if(inst_51582){
var statearr_51603_52864 = state_51594__$1;
(statearr_51603_52864[(1)] = (8));

} else {
var statearr_51604_52865 = state_51594__$1;
(statearr_51604_52865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (3))){
var inst_51592 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51594__$1,inst_51592);
} else {
if((state_val_51595 === (2))){
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51594__$1,(4),ch);
} else {
if((state_val_51595 === (9))){
var inst_51581 = (state_51594[(9)]);
var inst_51574 = inst_51581;
var state_51594__$1 = (function (){var statearr_51605 = state_51594;
(statearr_51605[(7)] = inst_51574);

return statearr_51605;
})();
var statearr_51606_52866 = state_51594__$1;
(statearr_51606_52866[(2)] = null);

(statearr_51606_52866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (5))){
var inst_51574 = (state_51594[(7)]);
var state_51594__$1 = state_51594;
var statearr_51607_52867 = state_51594__$1;
(statearr_51607_52867[(2)] = inst_51574);

(statearr_51607_52867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (10))){
var inst_51588 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51608_52868 = state_51594__$1;
(statearr_51608_52868[(2)] = inst_51588);

(statearr_51608_52868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (8))){
var inst_51581 = (state_51594[(9)]);
var inst_51584 = cljs.core.deref(inst_51581);
var state_51594__$1 = state_51594;
var statearr_51609_52869 = state_51594__$1;
(statearr_51609_52869[(2)] = inst_51584);

(statearr_51609_52869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33309__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33309__auto____0 = (function (){
var statearr_51610 = [null,null,null,null,null,null,null,null,null,null];
(statearr_51610[(0)] = cljs$core$async$reduce_$_state_machine__33309__auto__);

(statearr_51610[(1)] = (1));

return statearr_51610;
});
var cljs$core$async$reduce_$_state_machine__33309__auto____1 = (function (state_51594){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51594);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51611){var ex__33312__auto__ = e51611;
var statearr_51612_52870 = state_51594;
(statearr_51612_52870[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51594[(4)]))){
var statearr_51613_52871 = state_51594;
(statearr_51613_52871[(1)] = cljs.core.first((state_51594[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52872 = state_51594;
state_51594 = G__52872;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33309__auto__ = function(state_51594){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33309__auto____1.call(this,state_51594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33309__auto____0;
cljs$core$async$reduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33309__auto____1;
return cljs$core$async$reduce_$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51614 = f__33345__auto__();
(statearr_51614[(6)] = c__33344__auto__);

return statearr_51614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

return c__33344__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51620){
var state_val_51621 = (state_51620[(1)]);
if((state_val_51621 === (1))){
var inst_51615 = cljs.core.async.reduce(f__$1,init,ch);
var state_51620__$1 = state_51620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51620__$1,(2),inst_51615);
} else {
if((state_val_51621 === (2))){
var inst_51617 = (state_51620[(2)]);
var inst_51618 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_51617) : f__$1.call(null,inst_51617));
var state_51620__$1 = state_51620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51620__$1,inst_51618);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33309__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33309__auto____0 = (function (){
var statearr_51622 = [null,null,null,null,null,null,null];
(statearr_51622[(0)] = cljs$core$async$transduce_$_state_machine__33309__auto__);

(statearr_51622[(1)] = (1));

return statearr_51622;
});
var cljs$core$async$transduce_$_state_machine__33309__auto____1 = (function (state_51620){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51620);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51623){var ex__33312__auto__ = e51623;
var statearr_51624_52879 = state_51620;
(statearr_51624_52879[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51620[(4)]))){
var statearr_51625_52880 = state_51620;
(statearr_51625_52880[(1)] = cljs.core.first((state_51620[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52881 = state_51620;
state_51620 = G__52881;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33309__auto__ = function(state_51620){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33309__auto____1.call(this,state_51620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33309__auto____0;
cljs$core$async$transduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33309__auto____1;
return cljs$core$async$transduce_$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51626 = f__33345__auto__();
(statearr_51626[(6)] = c__33344__auto__);

return statearr_51626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

return c__33344__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__51628 = arguments.length;
switch (G__51628) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51653){
var state_val_51654 = (state_51653[(1)]);
if((state_val_51654 === (7))){
var inst_51635 = (state_51653[(2)]);
var state_51653__$1 = state_51653;
var statearr_51655_52884 = state_51653__$1;
(statearr_51655_52884[(2)] = inst_51635);

(statearr_51655_52884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (1))){
var inst_51629 = cljs.core.seq(coll);
var inst_51630 = inst_51629;
var state_51653__$1 = (function (){var statearr_51656 = state_51653;
(statearr_51656[(7)] = inst_51630);

return statearr_51656;
})();
var statearr_51657_52885 = state_51653__$1;
(statearr_51657_52885[(2)] = null);

(statearr_51657_52885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (4))){
var inst_51630 = (state_51653[(7)]);
var inst_51633 = cljs.core.first(inst_51630);
var state_51653__$1 = state_51653;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51653__$1,(7),ch,inst_51633);
} else {
if((state_val_51654 === (13))){
var inst_51647 = (state_51653[(2)]);
var state_51653__$1 = state_51653;
var statearr_51658_52887 = state_51653__$1;
(statearr_51658_52887[(2)] = inst_51647);

(statearr_51658_52887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (6))){
var inst_51638 = (state_51653[(2)]);
var state_51653__$1 = state_51653;
if(cljs.core.truth_(inst_51638)){
var statearr_51659_52888 = state_51653__$1;
(statearr_51659_52888[(1)] = (8));

} else {
var statearr_51660_52889 = state_51653__$1;
(statearr_51660_52889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (3))){
var inst_51651 = (state_51653[(2)]);
var state_51653__$1 = state_51653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51653__$1,inst_51651);
} else {
if((state_val_51654 === (12))){
var state_51653__$1 = state_51653;
var statearr_51661_52890 = state_51653__$1;
(statearr_51661_52890[(2)] = null);

(statearr_51661_52890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (2))){
var inst_51630 = (state_51653[(7)]);
var state_51653__$1 = state_51653;
if(cljs.core.truth_(inst_51630)){
var statearr_51662_52891 = state_51653__$1;
(statearr_51662_52891[(1)] = (4));

} else {
var statearr_51663_52892 = state_51653__$1;
(statearr_51663_52892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (11))){
var inst_51644 = cljs.core.async.close_BANG_(ch);
var state_51653__$1 = state_51653;
var statearr_51664_52893 = state_51653__$1;
(statearr_51664_52893[(2)] = inst_51644);

(statearr_51664_52893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (9))){
var state_51653__$1 = state_51653;
if(cljs.core.truth_(close_QMARK_)){
var statearr_51665_52894 = state_51653__$1;
(statearr_51665_52894[(1)] = (11));

} else {
var statearr_51666_52895 = state_51653__$1;
(statearr_51666_52895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (5))){
var inst_51630 = (state_51653[(7)]);
var state_51653__$1 = state_51653;
var statearr_51667_52896 = state_51653__$1;
(statearr_51667_52896[(2)] = inst_51630);

(statearr_51667_52896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (10))){
var inst_51649 = (state_51653[(2)]);
var state_51653__$1 = state_51653;
var statearr_51668_52897 = state_51653__$1;
(statearr_51668_52897[(2)] = inst_51649);

(statearr_51668_52897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51654 === (8))){
var inst_51630 = (state_51653[(7)]);
var inst_51640 = cljs.core.next(inst_51630);
var inst_51630__$1 = inst_51640;
var state_51653__$1 = (function (){var statearr_51669 = state_51653;
(statearr_51669[(7)] = inst_51630__$1);

return statearr_51669;
})();
var statearr_51670_52898 = state_51653__$1;
(statearr_51670_52898[(2)] = null);

(statearr_51670_52898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_51671 = [null,null,null,null,null,null,null,null];
(statearr_51671[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_51671[(1)] = (1));

return statearr_51671;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_51653){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51653);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51672){var ex__33312__auto__ = e51672;
var statearr_51673_52903 = state_51653;
(statearr_51673_52903[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51653[(4)]))){
var statearr_51674_52904 = state_51653;
(statearr_51674_52904[(1)] = cljs.core.first((state_51653[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52905 = state_51653;
state_51653 = G__52905;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_51653){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_51653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51675 = f__33345__auto__();
(statearr_51675[(6)] = c__33344__auto__);

return statearr_51675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

return c__33344__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__51677 = arguments.length;
switch (G__51677) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_52911 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_52911(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_52919 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_52919(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_52926 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_52926(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_52927 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_52927(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51678 = (function (ch,cs,meta51679){
this.ch = ch;
this.cs = cs;
this.meta51679 = meta51679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51680,meta51679__$1){
var self__ = this;
var _51680__$1 = this;
return (new cljs.core.async.t_cljs$core$async51678(self__.ch,self__.cs,meta51679__$1));
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51680){
var self__ = this;
var _51680__$1 = this;
return self__.meta51679;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async51678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async51678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta51679","meta51679",1955617560,null)], null);
}));

(cljs.core.async.t_cljs$core$async51678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51678");

(cljs.core.async.t_cljs$core$async51678.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51678.
 */
cljs.core.async.__GT_t_cljs$core$async51678 = (function cljs$core$async$__GT_t_cljs$core$async51678(ch,cs,meta51679){
return (new cljs.core.async.t_cljs$core$async51678(ch,cs,meta51679));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async51678(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33344__auto___52928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51813){
var state_val_51814 = (state_51813[(1)]);
if((state_val_51814 === (7))){
var inst_51809 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51815_52935 = state_51813__$1;
(statearr_51815_52935[(2)] = inst_51809);

(statearr_51815_52935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (20))){
var inst_51714 = (state_51813[(7)]);
var inst_51726 = cljs.core.first(inst_51714);
var inst_51727 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51726,(0),null);
var inst_51728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51726,(1),null);
var state_51813__$1 = (function (){var statearr_51816 = state_51813;
(statearr_51816[(8)] = inst_51727);

return statearr_51816;
})();
if(cljs.core.truth_(inst_51728)){
var statearr_51817_52936 = state_51813__$1;
(statearr_51817_52936[(1)] = (22));

} else {
var statearr_51818_52937 = state_51813__$1;
(statearr_51818_52937[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (27))){
var inst_51756 = (state_51813[(9)]);
var inst_51763 = (state_51813[(10)]);
var inst_51683 = (state_51813[(11)]);
var inst_51758 = (state_51813[(12)]);
var inst_51763__$1 = cljs.core._nth(inst_51756,inst_51758);
var inst_51764 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51763__$1,inst_51683,done);
var state_51813__$1 = (function (){var statearr_51819 = state_51813;
(statearr_51819[(10)] = inst_51763__$1);

return statearr_51819;
})();
if(cljs.core.truth_(inst_51764)){
var statearr_51820_52938 = state_51813__$1;
(statearr_51820_52938[(1)] = (30));

} else {
var statearr_51821_52939 = state_51813__$1;
(statearr_51821_52939[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (1))){
var state_51813__$1 = state_51813;
var statearr_51822_52940 = state_51813__$1;
(statearr_51822_52940[(2)] = null);

(statearr_51822_52940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (24))){
var inst_51714 = (state_51813[(7)]);
var inst_51733 = (state_51813[(2)]);
var inst_51734 = cljs.core.next(inst_51714);
var inst_51692 = inst_51734;
var inst_51693 = null;
var inst_51694 = (0);
var inst_51695 = (0);
var state_51813__$1 = (function (){var statearr_51823 = state_51813;
(statearr_51823[(13)] = inst_51733);

(statearr_51823[(14)] = inst_51695);

(statearr_51823[(15)] = inst_51693);

(statearr_51823[(16)] = inst_51694);

(statearr_51823[(17)] = inst_51692);

return statearr_51823;
})();
var statearr_51824_52941 = state_51813__$1;
(statearr_51824_52941[(2)] = null);

(statearr_51824_52941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (39))){
var state_51813__$1 = state_51813;
var statearr_51828_52942 = state_51813__$1;
(statearr_51828_52942[(2)] = null);

(statearr_51828_52942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (4))){
var inst_51683 = (state_51813[(11)]);
var inst_51683__$1 = (state_51813[(2)]);
var inst_51684 = (inst_51683__$1 == null);
var state_51813__$1 = (function (){var statearr_51829 = state_51813;
(statearr_51829[(11)] = inst_51683__$1);

return statearr_51829;
})();
if(cljs.core.truth_(inst_51684)){
var statearr_51830_52943 = state_51813__$1;
(statearr_51830_52943[(1)] = (5));

} else {
var statearr_51831_52944 = state_51813__$1;
(statearr_51831_52944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (15))){
var inst_51695 = (state_51813[(14)]);
var inst_51693 = (state_51813[(15)]);
var inst_51694 = (state_51813[(16)]);
var inst_51692 = (state_51813[(17)]);
var inst_51710 = (state_51813[(2)]);
var inst_51711 = (inst_51695 + (1));
var tmp51825 = inst_51693;
var tmp51826 = inst_51694;
var tmp51827 = inst_51692;
var inst_51692__$1 = tmp51827;
var inst_51693__$1 = tmp51825;
var inst_51694__$1 = tmp51826;
var inst_51695__$1 = inst_51711;
var state_51813__$1 = (function (){var statearr_51832 = state_51813;
(statearr_51832[(18)] = inst_51710);

(statearr_51832[(14)] = inst_51695__$1);

(statearr_51832[(15)] = inst_51693__$1);

(statearr_51832[(16)] = inst_51694__$1);

(statearr_51832[(17)] = inst_51692__$1);

return statearr_51832;
})();
var statearr_51833_52945 = state_51813__$1;
(statearr_51833_52945[(2)] = null);

(statearr_51833_52945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (21))){
var inst_51737 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51837_52946 = state_51813__$1;
(statearr_51837_52946[(2)] = inst_51737);

(statearr_51837_52946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (31))){
var inst_51763 = (state_51813[(10)]);
var inst_51767 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51763);
var state_51813__$1 = state_51813;
var statearr_51838_52953 = state_51813__$1;
(statearr_51838_52953[(2)] = inst_51767);

(statearr_51838_52953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (32))){
var inst_51756 = (state_51813[(9)]);
var inst_51757 = (state_51813[(19)]);
var inst_51755 = (state_51813[(20)]);
var inst_51758 = (state_51813[(12)]);
var inst_51769 = (state_51813[(2)]);
var inst_51770 = (inst_51758 + (1));
var tmp51834 = inst_51756;
var tmp51835 = inst_51757;
var tmp51836 = inst_51755;
var inst_51755__$1 = tmp51836;
var inst_51756__$1 = tmp51834;
var inst_51757__$1 = tmp51835;
var inst_51758__$1 = inst_51770;
var state_51813__$1 = (function (){var statearr_51839 = state_51813;
(statearr_51839[(9)] = inst_51756__$1);

(statearr_51839[(19)] = inst_51757__$1);

(statearr_51839[(20)] = inst_51755__$1);

(statearr_51839[(12)] = inst_51758__$1);

(statearr_51839[(21)] = inst_51769);

return statearr_51839;
})();
var statearr_51840_52954 = state_51813__$1;
(statearr_51840_52954[(2)] = null);

(statearr_51840_52954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (40))){
var inst_51782 = (state_51813[(22)]);
var inst_51786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51782);
var state_51813__$1 = state_51813;
var statearr_51841_52955 = state_51813__$1;
(statearr_51841_52955[(2)] = inst_51786);

(statearr_51841_52955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (33))){
var inst_51773 = (state_51813[(23)]);
var inst_51775 = cljs.core.chunked_seq_QMARK_(inst_51773);
var state_51813__$1 = state_51813;
if(inst_51775){
var statearr_51842_52956 = state_51813__$1;
(statearr_51842_52956[(1)] = (36));

} else {
var statearr_51843_52957 = state_51813__$1;
(statearr_51843_52957[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (13))){
var inst_51704 = (state_51813[(24)]);
var inst_51707 = cljs.core.async.close_BANG_(inst_51704);
var state_51813__$1 = state_51813;
var statearr_51844_52958 = state_51813__$1;
(statearr_51844_52958[(2)] = inst_51707);

(statearr_51844_52958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (22))){
var inst_51727 = (state_51813[(8)]);
var inst_51730 = cljs.core.async.close_BANG_(inst_51727);
var state_51813__$1 = state_51813;
var statearr_51845_52959 = state_51813__$1;
(statearr_51845_52959[(2)] = inst_51730);

(statearr_51845_52959[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (36))){
var inst_51773 = (state_51813[(23)]);
var inst_51777 = cljs.core.chunk_first(inst_51773);
var inst_51778 = cljs.core.chunk_rest(inst_51773);
var inst_51779 = cljs.core.count(inst_51777);
var inst_51755 = inst_51778;
var inst_51756 = inst_51777;
var inst_51757 = inst_51779;
var inst_51758 = (0);
var state_51813__$1 = (function (){var statearr_51846 = state_51813;
(statearr_51846[(9)] = inst_51756);

(statearr_51846[(19)] = inst_51757);

(statearr_51846[(20)] = inst_51755);

(statearr_51846[(12)] = inst_51758);

return statearr_51846;
})();
var statearr_51847_52960 = state_51813__$1;
(statearr_51847_52960[(2)] = null);

(statearr_51847_52960[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (41))){
var inst_51773 = (state_51813[(23)]);
var inst_51788 = (state_51813[(2)]);
var inst_51789 = cljs.core.next(inst_51773);
var inst_51755 = inst_51789;
var inst_51756 = null;
var inst_51757 = (0);
var inst_51758 = (0);
var state_51813__$1 = (function (){var statearr_51848 = state_51813;
(statearr_51848[(9)] = inst_51756);

(statearr_51848[(19)] = inst_51757);

(statearr_51848[(25)] = inst_51788);

(statearr_51848[(20)] = inst_51755);

(statearr_51848[(12)] = inst_51758);

return statearr_51848;
})();
var statearr_51849_52961 = state_51813__$1;
(statearr_51849_52961[(2)] = null);

(statearr_51849_52961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (43))){
var state_51813__$1 = state_51813;
var statearr_51850_52962 = state_51813__$1;
(statearr_51850_52962[(2)] = null);

(statearr_51850_52962[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (29))){
var inst_51797 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51851_52963 = state_51813__$1;
(statearr_51851_52963[(2)] = inst_51797);

(statearr_51851_52963[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (44))){
var inst_51806 = (state_51813[(2)]);
var state_51813__$1 = (function (){var statearr_51852 = state_51813;
(statearr_51852[(26)] = inst_51806);

return statearr_51852;
})();
var statearr_51853_52964 = state_51813__$1;
(statearr_51853_52964[(2)] = null);

(statearr_51853_52964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (6))){
var inst_51747 = (state_51813[(27)]);
var inst_51746 = cljs.core.deref(cs);
var inst_51747__$1 = cljs.core.keys(inst_51746);
var inst_51748 = cljs.core.count(inst_51747__$1);
var inst_51749 = cljs.core.reset_BANG_(dctr,inst_51748);
var inst_51754 = cljs.core.seq(inst_51747__$1);
var inst_51755 = inst_51754;
var inst_51756 = null;
var inst_51757 = (0);
var inst_51758 = (0);
var state_51813__$1 = (function (){var statearr_51854 = state_51813;
(statearr_51854[(9)] = inst_51756);

(statearr_51854[(19)] = inst_51757);

(statearr_51854[(27)] = inst_51747__$1);

(statearr_51854[(20)] = inst_51755);

(statearr_51854[(12)] = inst_51758);

(statearr_51854[(28)] = inst_51749);

return statearr_51854;
})();
var statearr_51855_52971 = state_51813__$1;
(statearr_51855_52971[(2)] = null);

(statearr_51855_52971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (28))){
var inst_51773 = (state_51813[(23)]);
var inst_51755 = (state_51813[(20)]);
var inst_51773__$1 = cljs.core.seq(inst_51755);
var state_51813__$1 = (function (){var statearr_51856 = state_51813;
(statearr_51856[(23)] = inst_51773__$1);

return statearr_51856;
})();
if(inst_51773__$1){
var statearr_51857_52972 = state_51813__$1;
(statearr_51857_52972[(1)] = (33));

} else {
var statearr_51858_52973 = state_51813__$1;
(statearr_51858_52973[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (25))){
var inst_51757 = (state_51813[(19)]);
var inst_51758 = (state_51813[(12)]);
var inst_51760 = (inst_51758 < inst_51757);
var inst_51761 = inst_51760;
var state_51813__$1 = state_51813;
if(cljs.core.truth_(inst_51761)){
var statearr_51859_52974 = state_51813__$1;
(statearr_51859_52974[(1)] = (27));

} else {
var statearr_51860_52975 = state_51813__$1;
(statearr_51860_52975[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (34))){
var state_51813__$1 = state_51813;
var statearr_51861_52976 = state_51813__$1;
(statearr_51861_52976[(2)] = null);

(statearr_51861_52976[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (17))){
var state_51813__$1 = state_51813;
var statearr_51862_52977 = state_51813__$1;
(statearr_51862_52977[(2)] = null);

(statearr_51862_52977[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (3))){
var inst_51811 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51813__$1,inst_51811);
} else {
if((state_val_51814 === (12))){
var inst_51742 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51863_52978 = state_51813__$1;
(statearr_51863_52978[(2)] = inst_51742);

(statearr_51863_52978[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (2))){
var state_51813__$1 = state_51813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51813__$1,(4),ch);
} else {
if((state_val_51814 === (23))){
var state_51813__$1 = state_51813;
var statearr_51864_52979 = state_51813__$1;
(statearr_51864_52979[(2)] = null);

(statearr_51864_52979[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (35))){
var inst_51795 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51865_52980 = state_51813__$1;
(statearr_51865_52980[(2)] = inst_51795);

(statearr_51865_52980[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (19))){
var inst_51714 = (state_51813[(7)]);
var inst_51718 = cljs.core.chunk_first(inst_51714);
var inst_51719 = cljs.core.chunk_rest(inst_51714);
var inst_51720 = cljs.core.count(inst_51718);
var inst_51692 = inst_51719;
var inst_51693 = inst_51718;
var inst_51694 = inst_51720;
var inst_51695 = (0);
var state_51813__$1 = (function (){var statearr_51866 = state_51813;
(statearr_51866[(14)] = inst_51695);

(statearr_51866[(15)] = inst_51693);

(statearr_51866[(16)] = inst_51694);

(statearr_51866[(17)] = inst_51692);

return statearr_51866;
})();
var statearr_51867_52981 = state_51813__$1;
(statearr_51867_52981[(2)] = null);

(statearr_51867_52981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (11))){
var inst_51692 = (state_51813[(17)]);
var inst_51714 = (state_51813[(7)]);
var inst_51714__$1 = cljs.core.seq(inst_51692);
var state_51813__$1 = (function (){var statearr_51868 = state_51813;
(statearr_51868[(7)] = inst_51714__$1);

return statearr_51868;
})();
if(inst_51714__$1){
var statearr_51869_52982 = state_51813__$1;
(statearr_51869_52982[(1)] = (16));

} else {
var statearr_51870_52983 = state_51813__$1;
(statearr_51870_52983[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (9))){
var inst_51744 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51871_52984 = state_51813__$1;
(statearr_51871_52984[(2)] = inst_51744);

(statearr_51871_52984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (5))){
var inst_51690 = cljs.core.deref(cs);
var inst_51691 = cljs.core.seq(inst_51690);
var inst_51692 = inst_51691;
var inst_51693 = null;
var inst_51694 = (0);
var inst_51695 = (0);
var state_51813__$1 = (function (){var statearr_51872 = state_51813;
(statearr_51872[(14)] = inst_51695);

(statearr_51872[(15)] = inst_51693);

(statearr_51872[(16)] = inst_51694);

(statearr_51872[(17)] = inst_51692);

return statearr_51872;
})();
var statearr_51873_52985 = state_51813__$1;
(statearr_51873_52985[(2)] = null);

(statearr_51873_52985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (14))){
var state_51813__$1 = state_51813;
var statearr_51874_52986 = state_51813__$1;
(statearr_51874_52986[(2)] = null);

(statearr_51874_52986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (45))){
var inst_51803 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51875_52987 = state_51813__$1;
(statearr_51875_52987[(2)] = inst_51803);

(statearr_51875_52987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (26))){
var inst_51747 = (state_51813[(27)]);
var inst_51799 = (state_51813[(2)]);
var inst_51800 = cljs.core.seq(inst_51747);
var state_51813__$1 = (function (){var statearr_51876 = state_51813;
(statearr_51876[(29)] = inst_51799);

return statearr_51876;
})();
if(inst_51800){
var statearr_51877_52988 = state_51813__$1;
(statearr_51877_52988[(1)] = (42));

} else {
var statearr_51878_52989 = state_51813__$1;
(statearr_51878_52989[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (16))){
var inst_51714 = (state_51813[(7)]);
var inst_51716 = cljs.core.chunked_seq_QMARK_(inst_51714);
var state_51813__$1 = state_51813;
if(inst_51716){
var statearr_51879_52990 = state_51813__$1;
(statearr_51879_52990[(1)] = (19));

} else {
var statearr_51880_52991 = state_51813__$1;
(statearr_51880_52991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (38))){
var inst_51792 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51881_52992 = state_51813__$1;
(statearr_51881_52992[(2)] = inst_51792);

(statearr_51881_52992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (30))){
var state_51813__$1 = state_51813;
var statearr_51882_52993 = state_51813__$1;
(statearr_51882_52993[(2)] = null);

(statearr_51882_52993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (10))){
var inst_51695 = (state_51813[(14)]);
var inst_51693 = (state_51813[(15)]);
var inst_51703 = cljs.core._nth(inst_51693,inst_51695);
var inst_51704 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51703,(0),null);
var inst_51705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51703,(1),null);
var state_51813__$1 = (function (){var statearr_51883 = state_51813;
(statearr_51883[(24)] = inst_51704);

return statearr_51883;
})();
if(cljs.core.truth_(inst_51705)){
var statearr_51884_52994 = state_51813__$1;
(statearr_51884_52994[(1)] = (13));

} else {
var statearr_51885_52995 = state_51813__$1;
(statearr_51885_52995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (18))){
var inst_51740 = (state_51813[(2)]);
var state_51813__$1 = state_51813;
var statearr_51886_52996 = state_51813__$1;
(statearr_51886_52996[(2)] = inst_51740);

(statearr_51886_52996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (42))){
var state_51813__$1 = state_51813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51813__$1,(45),dchan);
} else {
if((state_val_51814 === (37))){
var inst_51782 = (state_51813[(22)]);
var inst_51683 = (state_51813[(11)]);
var inst_51773 = (state_51813[(23)]);
var inst_51782__$1 = cljs.core.first(inst_51773);
var inst_51783 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51782__$1,inst_51683,done);
var state_51813__$1 = (function (){var statearr_51887 = state_51813;
(statearr_51887[(22)] = inst_51782__$1);

return statearr_51887;
})();
if(cljs.core.truth_(inst_51783)){
var statearr_51888_52997 = state_51813__$1;
(statearr_51888_52997[(1)] = (39));

} else {
var statearr_51889_52998 = state_51813__$1;
(statearr_51889_52998[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51814 === (8))){
var inst_51695 = (state_51813[(14)]);
var inst_51694 = (state_51813[(16)]);
var inst_51697 = (inst_51695 < inst_51694);
var inst_51698 = inst_51697;
var state_51813__$1 = state_51813;
if(cljs.core.truth_(inst_51698)){
var statearr_51890_52999 = state_51813__$1;
(statearr_51890_52999[(1)] = (10));

} else {
var statearr_51891_53000 = state_51813__$1;
(statearr_51891_53000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33309__auto__ = null;
var cljs$core$async$mult_$_state_machine__33309__auto____0 = (function (){
var statearr_51892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51892[(0)] = cljs$core$async$mult_$_state_machine__33309__auto__);

(statearr_51892[(1)] = (1));

return statearr_51892;
});
var cljs$core$async$mult_$_state_machine__33309__auto____1 = (function (state_51813){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51813);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e51893){var ex__33312__auto__ = e51893;
var statearr_51894_53001 = state_51813;
(statearr_51894_53001[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51813[(4)]))){
var statearr_51895_53002 = state_51813;
(statearr_51895_53002[(1)] = cljs.core.first((state_51813[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53004 = state_51813;
state_51813 = G__53004;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33309__auto__ = function(state_51813){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33309__auto____1.call(this,state_51813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33309__auto____0;
cljs$core$async$mult_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33309__auto____1;
return cljs$core$async$mult_$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_51896 = f__33345__auto__();
(statearr_51896[(6)] = c__33344__auto___52928);

return statearr_51896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51898 = arguments.length;
switch (G__51898) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53010 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53010(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53011 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53011(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53012 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53012(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53013 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53013(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53014 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53014(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53017 = arguments.length;
var i__5770__auto___53018 = (0);
while(true){
if((i__5770__auto___53018 < len__5769__auto___53017)){
args__5775__auto__.push((arguments[i__5770__auto___53018]));

var G__53019 = (i__5770__auto___53018 + (1));
i__5770__auto___53018 = G__53019;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51903){
var map__51904 = p__51903;
var map__51904__$1 = cljs.core.__destructure_map(map__51904);
var opts = map__51904__$1;
var statearr_51905_53020 = state;
(statearr_51905_53020[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51906_53021 = state;
(statearr_51906_53021[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_51907_53022 = state;
(statearr_51907_53022[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51899){
var G__51900 = cljs.core.first(seq51899);
var seq51899__$1 = cljs.core.next(seq51899);
var G__51901 = cljs.core.first(seq51899__$1);
var seq51899__$2 = cljs.core.next(seq51899__$1);
var G__51902 = cljs.core.first(seq51899__$2);
var seq51899__$3 = cljs.core.next(seq51899__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51900,G__51901,G__51902,seq51899__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51908 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51909){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51909 = meta51909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51910,meta51909__$1){
var self__ = this;
var _51910__$1 = this;
return (new cljs.core.async.t_cljs$core$async51908(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51909__$1));
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51910){
var self__ = this;
var _51910__$1 = this;
return self__.meta51909;
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51908.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51908.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51909","meta51909",377058950,null)], null);
}));

(cljs.core.async.t_cljs$core$async51908.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51908");

(cljs.core.async.t_cljs$core$async51908.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51908");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51908.
 */
cljs.core.async.__GT_t_cljs$core$async51908 = (function cljs$core$async$__GT_t_cljs$core$async51908(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51909){
return (new cljs.core.async.t_cljs$core$async51908(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51909));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async51908(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33344__auto___53025 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_51978){
var state_val_51979 = (state_51978[(1)]);
if((state_val_51979 === (7))){
var inst_51938 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
if(cljs.core.truth_(inst_51938)){
var statearr_51980_53026 = state_51978__$1;
(statearr_51980_53026[(1)] = (8));

} else {
var statearr_51981_53027 = state_51978__$1;
(statearr_51981_53027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (20))){
var inst_51931 = (state_51978[(7)]);
var state_51978__$1 = state_51978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51978__$1,(23),out,inst_51931);
} else {
if((state_val_51979 === (1))){
var inst_51914 = calc_state();
var inst_51915 = cljs.core.__destructure_map(inst_51914);
var inst_51916 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51915,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51915,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51915,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51919 = inst_51914;
var state_51978__$1 = (function (){var statearr_51982 = state_51978;
(statearr_51982[(8)] = inst_51919);

(statearr_51982[(9)] = inst_51916);

(statearr_51982[(10)] = inst_51917);

(statearr_51982[(11)] = inst_51918);

return statearr_51982;
})();
var statearr_51983_53028 = state_51978__$1;
(statearr_51983_53028[(2)] = null);

(statearr_51983_53028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (24))){
var inst_51922 = (state_51978[(12)]);
var inst_51919 = inst_51922;
var state_51978__$1 = (function (){var statearr_51984 = state_51978;
(statearr_51984[(8)] = inst_51919);

return statearr_51984;
})();
var statearr_51985_53029 = state_51978__$1;
(statearr_51985_53029[(2)] = null);

(statearr_51985_53029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (4))){
var inst_51931 = (state_51978[(7)]);
var inst_51933 = (state_51978[(13)]);
var inst_51930 = (state_51978[(2)]);
var inst_51931__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51930,(0),null);
var inst_51932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51930,(1),null);
var inst_51933__$1 = (inst_51931__$1 == null);
var state_51978__$1 = (function (){var statearr_51986 = state_51978;
(statearr_51986[(7)] = inst_51931__$1);

(statearr_51986[(14)] = inst_51932);

(statearr_51986[(13)] = inst_51933__$1);

return statearr_51986;
})();
if(cljs.core.truth_(inst_51933__$1)){
var statearr_51987_53030 = state_51978__$1;
(statearr_51987_53030[(1)] = (5));

} else {
var statearr_51988_53031 = state_51978__$1;
(statearr_51988_53031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (15))){
var inst_51952 = (state_51978[(15)]);
var inst_51923 = (state_51978[(16)]);
var inst_51952__$1 = cljs.core.empty_QMARK_(inst_51923);
var state_51978__$1 = (function (){var statearr_51989 = state_51978;
(statearr_51989[(15)] = inst_51952__$1);

return statearr_51989;
})();
if(inst_51952__$1){
var statearr_51990_53034 = state_51978__$1;
(statearr_51990_53034[(1)] = (17));

} else {
var statearr_51991_53035 = state_51978__$1;
(statearr_51991_53035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (21))){
var inst_51922 = (state_51978[(12)]);
var inst_51919 = inst_51922;
var state_51978__$1 = (function (){var statearr_51992 = state_51978;
(statearr_51992[(8)] = inst_51919);

return statearr_51992;
})();
var statearr_51993_53036 = state_51978__$1;
(statearr_51993_53036[(2)] = null);

(statearr_51993_53036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (13))){
var inst_51945 = (state_51978[(2)]);
var inst_51946 = calc_state();
var inst_51919 = inst_51946;
var state_51978__$1 = (function (){var statearr_51994 = state_51978;
(statearr_51994[(8)] = inst_51919);

(statearr_51994[(17)] = inst_51945);

return statearr_51994;
})();
var statearr_51995_53037 = state_51978__$1;
(statearr_51995_53037[(2)] = null);

(statearr_51995_53037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (22))){
var inst_51972 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_51996_53038 = state_51978__$1;
(statearr_51996_53038[(2)] = inst_51972);

(statearr_51996_53038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (6))){
var inst_51932 = (state_51978[(14)]);
var inst_51936 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51932,change);
var state_51978__$1 = state_51978;
var statearr_51997_53039 = state_51978__$1;
(statearr_51997_53039[(2)] = inst_51936);

(statearr_51997_53039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (25))){
var state_51978__$1 = state_51978;
var statearr_51998_53040 = state_51978__$1;
(statearr_51998_53040[(2)] = null);

(statearr_51998_53040[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (17))){
var inst_51932 = (state_51978[(14)]);
var inst_51924 = (state_51978[(18)]);
var inst_51954 = (inst_51924.cljs$core$IFn$_invoke$arity$1 ? inst_51924.cljs$core$IFn$_invoke$arity$1(inst_51932) : inst_51924.call(null,inst_51932));
var inst_51955 = cljs.core.not(inst_51954);
var state_51978__$1 = state_51978;
var statearr_51999_53041 = state_51978__$1;
(statearr_51999_53041[(2)] = inst_51955);

(statearr_51999_53041[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (3))){
var inst_51976 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51978__$1,inst_51976);
} else {
if((state_val_51979 === (12))){
var state_51978__$1 = state_51978;
var statearr_52000_53042 = state_51978__$1;
(statearr_52000_53042[(2)] = null);

(statearr_52000_53042[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (2))){
var inst_51919 = (state_51978[(8)]);
var inst_51922 = (state_51978[(12)]);
var inst_51922__$1 = cljs.core.__destructure_map(inst_51919);
var inst_51923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51922__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51922__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51922__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51978__$1 = (function (){var statearr_52001 = state_51978;
(statearr_52001[(12)] = inst_51922__$1);

(statearr_52001[(18)] = inst_51924);

(statearr_52001[(16)] = inst_51923);

return statearr_52001;
})();
return cljs.core.async.ioc_alts_BANG_(state_51978__$1,(4),inst_51925);
} else {
if((state_val_51979 === (23))){
var inst_51963 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
if(cljs.core.truth_(inst_51963)){
var statearr_52002_53043 = state_51978__$1;
(statearr_52002_53043[(1)] = (24));

} else {
var statearr_52003_53044 = state_51978__$1;
(statearr_52003_53044[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (19))){
var inst_51958 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_52004_53045 = state_51978__$1;
(statearr_52004_53045[(2)] = inst_51958);

(statearr_52004_53045[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (11))){
var inst_51932 = (state_51978[(14)]);
var inst_51942 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51932);
var state_51978__$1 = state_51978;
var statearr_52005_53046 = state_51978__$1;
(statearr_52005_53046[(2)] = inst_51942);

(statearr_52005_53046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (9))){
var inst_51949 = (state_51978[(19)]);
var inst_51932 = (state_51978[(14)]);
var inst_51923 = (state_51978[(16)]);
var inst_51949__$1 = (inst_51923.cljs$core$IFn$_invoke$arity$1 ? inst_51923.cljs$core$IFn$_invoke$arity$1(inst_51932) : inst_51923.call(null,inst_51932));
var state_51978__$1 = (function (){var statearr_52006 = state_51978;
(statearr_52006[(19)] = inst_51949__$1);

return statearr_52006;
})();
if(cljs.core.truth_(inst_51949__$1)){
var statearr_52007_53047 = state_51978__$1;
(statearr_52007_53047[(1)] = (14));

} else {
var statearr_52008_53048 = state_51978__$1;
(statearr_52008_53048[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (5))){
var inst_51933 = (state_51978[(13)]);
var state_51978__$1 = state_51978;
var statearr_52009_53049 = state_51978__$1;
(statearr_52009_53049[(2)] = inst_51933);

(statearr_52009_53049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (14))){
var inst_51949 = (state_51978[(19)]);
var state_51978__$1 = state_51978;
var statearr_52010_53050 = state_51978__$1;
(statearr_52010_53050[(2)] = inst_51949);

(statearr_52010_53050[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (26))){
var inst_51968 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_52011_53051 = state_51978__$1;
(statearr_52011_53051[(2)] = inst_51968);

(statearr_52011_53051[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (16))){
var inst_51960 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
if(cljs.core.truth_(inst_51960)){
var statearr_52012_53052 = state_51978__$1;
(statearr_52012_53052[(1)] = (20));

} else {
var statearr_52013_53053 = state_51978__$1;
(statearr_52013_53053[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (10))){
var inst_51974 = (state_51978[(2)]);
var state_51978__$1 = state_51978;
var statearr_52014_53054 = state_51978__$1;
(statearr_52014_53054[(2)] = inst_51974);

(statearr_52014_53054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (18))){
var inst_51952 = (state_51978[(15)]);
var state_51978__$1 = state_51978;
var statearr_52015_53055 = state_51978__$1;
(statearr_52015_53055[(2)] = inst_51952);

(statearr_52015_53055[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (8))){
var inst_51931 = (state_51978[(7)]);
var inst_51940 = (inst_51931 == null);
var state_51978__$1 = state_51978;
if(cljs.core.truth_(inst_51940)){
var statearr_52016_53056 = state_51978__$1;
(statearr_52016_53056[(1)] = (11));

} else {
var statearr_52017_53057 = state_51978__$1;
(statearr_52017_53057[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33309__auto__ = null;
var cljs$core$async$mix_$_state_machine__33309__auto____0 = (function (){
var statearr_52018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52018[(0)] = cljs$core$async$mix_$_state_machine__33309__auto__);

(statearr_52018[(1)] = (1));

return statearr_52018;
});
var cljs$core$async$mix_$_state_machine__33309__auto____1 = (function (state_51978){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_51978);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52019){var ex__33312__auto__ = e52019;
var statearr_52020_53059 = state_51978;
(statearr_52020_53059[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_51978[(4)]))){
var statearr_52021_53060 = state_51978;
(statearr_52021_53060[(1)] = cljs.core.first((state_51978[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53061 = state_51978;
state_51978 = G__53061;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33309__auto__ = function(state_51978){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33309__auto____1.call(this,state_51978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33309__auto____0;
cljs$core$async$mix_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33309__auto____1;
return cljs$core$async$mix_$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52022 = f__33345__auto__();
(statearr_52022[(6)] = c__33344__auto___53025);

return statearr_52022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53062 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53062(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53067 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53067(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53068 = (function() {
var G__53069 = null;
var G__53069__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53069__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53069 = function(p,v){
switch(arguments.length){
case 1:
return G__53069__1.call(this,p);
case 2:
return G__53069__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53069.cljs$core$IFn$_invoke$arity$1 = G__53069__1;
G__53069.cljs$core$IFn$_invoke$arity$2 = G__53069__2;
return G__53069;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__52024 = arguments.length;
switch (G__52024) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53068(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53068(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52028 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta52029){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta52029 = meta52029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52030,meta52029__$1){
var self__ = this;
var _52030__$1 = this;
return (new cljs.core.async.t_cljs$core$async52028(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta52029__$1));
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52030){
var self__ = this;
var _52030__$1 = this;
return self__.meta52029;
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async52028.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async52028.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta52029","meta52029",-1706606100,null)], null);
}));

(cljs.core.async.t_cljs$core$async52028.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52028");

(cljs.core.async.t_cljs$core$async52028.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52028");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52028.
 */
cljs.core.async.__GT_t_cljs$core$async52028 = (function cljs$core$async$__GT_t_cljs$core$async52028(ch,topic_fn,buf_fn,mults,ensure_mult,meta52029){
return (new cljs.core.async.t_cljs$core$async52028(ch,topic_fn,buf_fn,mults,ensure_mult,meta52029));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__52027 = arguments.length;
switch (G__52027) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__52025_SHARP_){
if(cljs.core.truth_((p1__52025_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__52025_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__52025_SHARP_.call(null,topic)))){
return p1__52025_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52025_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async52028(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33344__auto___53085 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52102){
var state_val_52103 = (state_52102[(1)]);
if((state_val_52103 === (7))){
var inst_52098 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52104_53086 = state_52102__$1;
(statearr_52104_53086[(2)] = inst_52098);

(statearr_52104_53086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (20))){
var state_52102__$1 = state_52102;
var statearr_52105_53090 = state_52102__$1;
(statearr_52105_53090[(2)] = null);

(statearr_52105_53090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (1))){
var state_52102__$1 = state_52102;
var statearr_52106_53091 = state_52102__$1;
(statearr_52106_53091[(2)] = null);

(statearr_52106_53091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (24))){
var inst_52081 = (state_52102[(7)]);
var inst_52090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_52081);
var state_52102__$1 = state_52102;
var statearr_52107_53092 = state_52102__$1;
(statearr_52107_53092[(2)] = inst_52090);

(statearr_52107_53092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (4))){
var inst_52033 = (state_52102[(8)]);
var inst_52033__$1 = (state_52102[(2)]);
var inst_52034 = (inst_52033__$1 == null);
var state_52102__$1 = (function (){var statearr_52108 = state_52102;
(statearr_52108[(8)] = inst_52033__$1);

return statearr_52108;
})();
if(cljs.core.truth_(inst_52034)){
var statearr_52109_53097 = state_52102__$1;
(statearr_52109_53097[(1)] = (5));

} else {
var statearr_52110_53098 = state_52102__$1;
(statearr_52110_53098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (15))){
var inst_52075 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52111_53099 = state_52102__$1;
(statearr_52111_53099[(2)] = inst_52075);

(statearr_52111_53099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (21))){
var inst_52095 = (state_52102[(2)]);
var state_52102__$1 = (function (){var statearr_52112 = state_52102;
(statearr_52112[(9)] = inst_52095);

return statearr_52112;
})();
var statearr_52113_53100 = state_52102__$1;
(statearr_52113_53100[(2)] = null);

(statearr_52113_53100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (13))){
var inst_52057 = (state_52102[(10)]);
var inst_52059 = cljs.core.chunked_seq_QMARK_(inst_52057);
var state_52102__$1 = state_52102;
if(inst_52059){
var statearr_52114_53101 = state_52102__$1;
(statearr_52114_53101[(1)] = (16));

} else {
var statearr_52115_53102 = state_52102__$1;
(statearr_52115_53102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (22))){
var inst_52087 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52087)){
var statearr_52116_53103 = state_52102__$1;
(statearr_52116_53103[(1)] = (23));

} else {
var statearr_52117_53104 = state_52102__$1;
(statearr_52117_53104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (6))){
var inst_52033 = (state_52102[(8)]);
var inst_52083 = (state_52102[(11)]);
var inst_52081 = (state_52102[(7)]);
var inst_52081__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_52033) : topic_fn.call(null,inst_52033));
var inst_52082 = cljs.core.deref(mults);
var inst_52083__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_52082,inst_52081__$1);
var state_52102__$1 = (function (){var statearr_52118 = state_52102;
(statearr_52118[(11)] = inst_52083__$1);

(statearr_52118[(7)] = inst_52081__$1);

return statearr_52118;
})();
if(cljs.core.truth_(inst_52083__$1)){
var statearr_52119_53105 = state_52102__$1;
(statearr_52119_53105[(1)] = (19));

} else {
var statearr_52120_53106 = state_52102__$1;
(statearr_52120_53106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (25))){
var inst_52092 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52121_53107 = state_52102__$1;
(statearr_52121_53107[(2)] = inst_52092);

(statearr_52121_53107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (17))){
var inst_52057 = (state_52102[(10)]);
var inst_52066 = cljs.core.first(inst_52057);
var inst_52067 = cljs.core.async.muxch_STAR_(inst_52066);
var inst_52068 = cljs.core.async.close_BANG_(inst_52067);
var inst_52069 = cljs.core.next(inst_52057);
var inst_52043 = inst_52069;
var inst_52044 = null;
var inst_52045 = (0);
var inst_52046 = (0);
var state_52102__$1 = (function (){var statearr_52122 = state_52102;
(statearr_52122[(12)] = inst_52045);

(statearr_52122[(13)] = inst_52044);

(statearr_52122[(14)] = inst_52043);

(statearr_52122[(15)] = inst_52068);

(statearr_52122[(16)] = inst_52046);

return statearr_52122;
})();
var statearr_52123_53108 = state_52102__$1;
(statearr_52123_53108[(2)] = null);

(statearr_52123_53108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (3))){
var inst_52100 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52102__$1,inst_52100);
} else {
if((state_val_52103 === (12))){
var inst_52077 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52124_53111 = state_52102__$1;
(statearr_52124_53111[(2)] = inst_52077);

(statearr_52124_53111[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (2))){
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52102__$1,(4),ch);
} else {
if((state_val_52103 === (23))){
var state_52102__$1 = state_52102;
var statearr_52125_53112 = state_52102__$1;
(statearr_52125_53112[(2)] = null);

(statearr_52125_53112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (19))){
var inst_52033 = (state_52102[(8)]);
var inst_52083 = (state_52102[(11)]);
var inst_52085 = cljs.core.async.muxch_STAR_(inst_52083);
var state_52102__$1 = state_52102;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52102__$1,(22),inst_52085,inst_52033);
} else {
if((state_val_52103 === (11))){
var inst_52043 = (state_52102[(14)]);
var inst_52057 = (state_52102[(10)]);
var inst_52057__$1 = cljs.core.seq(inst_52043);
var state_52102__$1 = (function (){var statearr_52126 = state_52102;
(statearr_52126[(10)] = inst_52057__$1);

return statearr_52126;
})();
if(inst_52057__$1){
var statearr_52127_53113 = state_52102__$1;
(statearr_52127_53113[(1)] = (13));

} else {
var statearr_52128_53114 = state_52102__$1;
(statearr_52128_53114[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (9))){
var inst_52079 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52129_53115 = state_52102__$1;
(statearr_52129_53115[(2)] = inst_52079);

(statearr_52129_53115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (5))){
var inst_52040 = cljs.core.deref(mults);
var inst_52041 = cljs.core.vals(inst_52040);
var inst_52042 = cljs.core.seq(inst_52041);
var inst_52043 = inst_52042;
var inst_52044 = null;
var inst_52045 = (0);
var inst_52046 = (0);
var state_52102__$1 = (function (){var statearr_52130 = state_52102;
(statearr_52130[(12)] = inst_52045);

(statearr_52130[(13)] = inst_52044);

(statearr_52130[(14)] = inst_52043);

(statearr_52130[(16)] = inst_52046);

return statearr_52130;
})();
var statearr_52131_53116 = state_52102__$1;
(statearr_52131_53116[(2)] = null);

(statearr_52131_53116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (14))){
var state_52102__$1 = state_52102;
var statearr_52135_53117 = state_52102__$1;
(statearr_52135_53117[(2)] = null);

(statearr_52135_53117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (16))){
var inst_52057 = (state_52102[(10)]);
var inst_52061 = cljs.core.chunk_first(inst_52057);
var inst_52062 = cljs.core.chunk_rest(inst_52057);
var inst_52063 = cljs.core.count(inst_52061);
var inst_52043 = inst_52062;
var inst_52044 = inst_52061;
var inst_52045 = inst_52063;
var inst_52046 = (0);
var state_52102__$1 = (function (){var statearr_52136 = state_52102;
(statearr_52136[(12)] = inst_52045);

(statearr_52136[(13)] = inst_52044);

(statearr_52136[(14)] = inst_52043);

(statearr_52136[(16)] = inst_52046);

return statearr_52136;
})();
var statearr_52137_53118 = state_52102__$1;
(statearr_52137_53118[(2)] = null);

(statearr_52137_53118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (10))){
var inst_52045 = (state_52102[(12)]);
var inst_52044 = (state_52102[(13)]);
var inst_52043 = (state_52102[(14)]);
var inst_52046 = (state_52102[(16)]);
var inst_52051 = cljs.core._nth(inst_52044,inst_52046);
var inst_52052 = cljs.core.async.muxch_STAR_(inst_52051);
var inst_52053 = cljs.core.async.close_BANG_(inst_52052);
var inst_52054 = (inst_52046 + (1));
var tmp52132 = inst_52045;
var tmp52133 = inst_52044;
var tmp52134 = inst_52043;
var inst_52043__$1 = tmp52134;
var inst_52044__$1 = tmp52133;
var inst_52045__$1 = tmp52132;
var inst_52046__$1 = inst_52054;
var state_52102__$1 = (function (){var statearr_52138 = state_52102;
(statearr_52138[(12)] = inst_52045__$1);

(statearr_52138[(13)] = inst_52044__$1);

(statearr_52138[(17)] = inst_52053);

(statearr_52138[(14)] = inst_52043__$1);

(statearr_52138[(16)] = inst_52046__$1);

return statearr_52138;
})();
var statearr_52139_53119 = state_52102__$1;
(statearr_52139_53119[(2)] = null);

(statearr_52139_53119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (18))){
var inst_52072 = (state_52102[(2)]);
var state_52102__$1 = state_52102;
var statearr_52140_53120 = state_52102__$1;
(statearr_52140_53120[(2)] = inst_52072);

(statearr_52140_53120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52103 === (8))){
var inst_52045 = (state_52102[(12)]);
var inst_52046 = (state_52102[(16)]);
var inst_52048 = (inst_52046 < inst_52045);
var inst_52049 = inst_52048;
var state_52102__$1 = state_52102;
if(cljs.core.truth_(inst_52049)){
var statearr_52141_53121 = state_52102__$1;
(statearr_52141_53121[(1)] = (10));

} else {
var statearr_52142_53122 = state_52102__$1;
(statearr_52142_53122[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52143[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52143[(1)] = (1));

return statearr_52143;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52102){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52102);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52144){var ex__33312__auto__ = e52144;
var statearr_52145_53123 = state_52102;
(statearr_52145_53123[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52102[(4)]))){
var statearr_52146_53128 = state_52102;
(statearr_52146_53128[(1)] = cljs.core.first((state_52102[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53129 = state_52102;
state_52102 = G__53129;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52147 = f__33345__auto__();
(statearr_52147[(6)] = c__33344__auto___53085);

return statearr_52147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__52149 = arguments.length;
switch (G__52149) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__52151 = arguments.length;
switch (G__52151) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__52153 = arguments.length;
switch (G__52153) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33344__auto___53137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52196){
var state_val_52197 = (state_52196[(1)]);
if((state_val_52197 === (7))){
var state_52196__$1 = state_52196;
var statearr_52198_53138 = state_52196__$1;
(statearr_52198_53138[(2)] = null);

(statearr_52198_53138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (1))){
var state_52196__$1 = state_52196;
var statearr_52199_53140 = state_52196__$1;
(statearr_52199_53140[(2)] = null);

(statearr_52199_53140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (4))){
var inst_52157 = (state_52196[(7)]);
var inst_52156 = (state_52196[(8)]);
var inst_52159 = (inst_52157 < inst_52156);
var state_52196__$1 = state_52196;
if(cljs.core.truth_(inst_52159)){
var statearr_52200_53141 = state_52196__$1;
(statearr_52200_53141[(1)] = (6));

} else {
var statearr_52201_53142 = state_52196__$1;
(statearr_52201_53142[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (15))){
var inst_52182 = (state_52196[(9)]);
var inst_52187 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_52182);
var state_52196__$1 = state_52196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52196__$1,(17),out,inst_52187);
} else {
if((state_val_52197 === (13))){
var inst_52182 = (state_52196[(9)]);
var inst_52182__$1 = (state_52196[(2)]);
var inst_52183 = cljs.core.some(cljs.core.nil_QMARK_,inst_52182__$1);
var state_52196__$1 = (function (){var statearr_52202 = state_52196;
(statearr_52202[(9)] = inst_52182__$1);

return statearr_52202;
})();
if(cljs.core.truth_(inst_52183)){
var statearr_52203_53143 = state_52196__$1;
(statearr_52203_53143[(1)] = (14));

} else {
var statearr_52204_53144 = state_52196__$1;
(statearr_52204_53144[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (6))){
var state_52196__$1 = state_52196;
var statearr_52205_53145 = state_52196__$1;
(statearr_52205_53145[(2)] = null);

(statearr_52205_53145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (17))){
var inst_52189 = (state_52196[(2)]);
var state_52196__$1 = (function (){var statearr_52207 = state_52196;
(statearr_52207[(10)] = inst_52189);

return statearr_52207;
})();
var statearr_52208_53147 = state_52196__$1;
(statearr_52208_53147[(2)] = null);

(statearr_52208_53147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (3))){
var inst_52194 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52196__$1,inst_52194);
} else {
if((state_val_52197 === (12))){
var _ = (function (){var statearr_52209 = state_52196;
(statearr_52209[(4)] = cljs.core.rest((state_52196[(4)])));

return statearr_52209;
})();
var state_52196__$1 = state_52196;
var ex52206 = (state_52196__$1[(2)]);
var statearr_52210_53152 = state_52196__$1;
(statearr_52210_53152[(5)] = ex52206);


if((ex52206 instanceof Object)){
var statearr_52211_53153 = state_52196__$1;
(statearr_52211_53153[(1)] = (11));

(statearr_52211_53153[(5)] = null);

} else {
throw ex52206;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (2))){
var inst_52155 = cljs.core.reset_BANG_(dctr,cnt);
var inst_52156 = cnt;
var inst_52157 = (0);
var state_52196__$1 = (function (){var statearr_52212 = state_52196;
(statearr_52212[(7)] = inst_52157);

(statearr_52212[(11)] = inst_52155);

(statearr_52212[(8)] = inst_52156);

return statearr_52212;
})();
var statearr_52213_53154 = state_52196__$1;
(statearr_52213_53154[(2)] = null);

(statearr_52213_53154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (11))){
var inst_52161 = (state_52196[(2)]);
var inst_52162 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_52196__$1 = (function (){var statearr_52214 = state_52196;
(statearr_52214[(12)] = inst_52161);

return statearr_52214;
})();
var statearr_52215_53155 = state_52196__$1;
(statearr_52215_53155[(2)] = inst_52162);

(statearr_52215_53155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (9))){
var inst_52157 = (state_52196[(7)]);
var _ = (function (){var statearr_52216 = state_52196;
(statearr_52216[(4)] = cljs.core.cons((12),(state_52196[(4)])));

return statearr_52216;
})();
var inst_52168 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_52157) : chs__$1.call(null,inst_52157));
var inst_52169 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_52157) : done.call(null,inst_52157));
var inst_52170 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_52168,inst_52169);
var ___$1 = (function (){var statearr_52217 = state_52196;
(statearr_52217[(4)] = cljs.core.rest((state_52196[(4)])));

return statearr_52217;
})();
var state_52196__$1 = state_52196;
var statearr_52218_53156 = state_52196__$1;
(statearr_52218_53156[(2)] = inst_52170);

(statearr_52218_53156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (5))){
var inst_52180 = (state_52196[(2)]);
var state_52196__$1 = (function (){var statearr_52219 = state_52196;
(statearr_52219[(13)] = inst_52180);

return statearr_52219;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52196__$1,(13),dchan);
} else {
if((state_val_52197 === (14))){
var inst_52185 = cljs.core.async.close_BANG_(out);
var state_52196__$1 = state_52196;
var statearr_52220_53157 = state_52196__$1;
(statearr_52220_53157[(2)] = inst_52185);

(statearr_52220_53157[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (16))){
var inst_52192 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
var statearr_52221_53158 = state_52196__$1;
(statearr_52221_53158[(2)] = inst_52192);

(statearr_52221_53158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (10))){
var inst_52157 = (state_52196[(7)]);
var inst_52173 = (state_52196[(2)]);
var inst_52174 = (inst_52157 + (1));
var inst_52157__$1 = inst_52174;
var state_52196__$1 = (function (){var statearr_52222 = state_52196;
(statearr_52222[(7)] = inst_52157__$1);

(statearr_52222[(14)] = inst_52173);

return statearr_52222;
})();
var statearr_52223_53159 = state_52196__$1;
(statearr_52223_53159[(2)] = null);

(statearr_52223_53159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52197 === (8))){
var inst_52178 = (state_52196[(2)]);
var state_52196__$1 = state_52196;
var statearr_52224_53160 = state_52196__$1;
(statearr_52224_53160[(2)] = inst_52178);

(statearr_52224_53160[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52225[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52225[(1)] = (1));

return statearr_52225;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52196){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52196);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52226){var ex__33312__auto__ = e52226;
var statearr_52227_53161 = state_52196;
(statearr_52227_53161[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52196[(4)]))){
var statearr_52228_53162 = state_52196;
(statearr_52228_53162[(1)] = cljs.core.first((state_52196[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53163 = state_52196;
state_52196 = G__53163;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52229 = f__33345__auto__();
(statearr_52229[(6)] = c__33344__auto___53137);

return statearr_52229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__52232 = arguments.length;
switch (G__52232) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53165 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52264){
var state_val_52265 = (state_52264[(1)]);
if((state_val_52265 === (7))){
var inst_52244 = (state_52264[(7)]);
var inst_52243 = (state_52264[(8)]);
var inst_52243__$1 = (state_52264[(2)]);
var inst_52244__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52243__$1,(0),null);
var inst_52245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_52243__$1,(1),null);
var inst_52246 = (inst_52244__$1 == null);
var state_52264__$1 = (function (){var statearr_52266 = state_52264;
(statearr_52266[(7)] = inst_52244__$1);

(statearr_52266[(9)] = inst_52245);

(statearr_52266[(8)] = inst_52243__$1);

return statearr_52266;
})();
if(cljs.core.truth_(inst_52246)){
var statearr_52267_53166 = state_52264__$1;
(statearr_52267_53166[(1)] = (8));

} else {
var statearr_52268_53167 = state_52264__$1;
(statearr_52268_53167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (1))){
var inst_52233 = cljs.core.vec(chs);
var inst_52234 = inst_52233;
var state_52264__$1 = (function (){var statearr_52269 = state_52264;
(statearr_52269[(10)] = inst_52234);

return statearr_52269;
})();
var statearr_52270_53169 = state_52264__$1;
(statearr_52270_53169[(2)] = null);

(statearr_52270_53169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (4))){
var inst_52234 = (state_52264[(10)]);
var state_52264__$1 = state_52264;
return cljs.core.async.ioc_alts_BANG_(state_52264__$1,(7),inst_52234);
} else {
if((state_val_52265 === (6))){
var inst_52260 = (state_52264[(2)]);
var state_52264__$1 = state_52264;
var statearr_52271_53173 = state_52264__$1;
(statearr_52271_53173[(2)] = inst_52260);

(statearr_52271_53173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (3))){
var inst_52262 = (state_52264[(2)]);
var state_52264__$1 = state_52264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52264__$1,inst_52262);
} else {
if((state_val_52265 === (2))){
var inst_52234 = (state_52264[(10)]);
var inst_52236 = cljs.core.count(inst_52234);
var inst_52237 = (inst_52236 > (0));
var state_52264__$1 = state_52264;
if(cljs.core.truth_(inst_52237)){
var statearr_52273_53174 = state_52264__$1;
(statearr_52273_53174[(1)] = (4));

} else {
var statearr_52274_53175 = state_52264__$1;
(statearr_52274_53175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (11))){
var inst_52234 = (state_52264[(10)]);
var inst_52253 = (state_52264[(2)]);
var tmp52272 = inst_52234;
var inst_52234__$1 = tmp52272;
var state_52264__$1 = (function (){var statearr_52275 = state_52264;
(statearr_52275[(11)] = inst_52253);

(statearr_52275[(10)] = inst_52234__$1);

return statearr_52275;
})();
var statearr_52276_53176 = state_52264__$1;
(statearr_52276_53176[(2)] = null);

(statearr_52276_53176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (9))){
var inst_52244 = (state_52264[(7)]);
var state_52264__$1 = state_52264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52264__$1,(11),out,inst_52244);
} else {
if((state_val_52265 === (5))){
var inst_52258 = cljs.core.async.close_BANG_(out);
var state_52264__$1 = state_52264;
var statearr_52277_53177 = state_52264__$1;
(statearr_52277_53177[(2)] = inst_52258);

(statearr_52277_53177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (10))){
var inst_52256 = (state_52264[(2)]);
var state_52264__$1 = state_52264;
var statearr_52278_53178 = state_52264__$1;
(statearr_52278_53178[(2)] = inst_52256);

(statearr_52278_53178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52265 === (8))){
var inst_52244 = (state_52264[(7)]);
var inst_52234 = (state_52264[(10)]);
var inst_52245 = (state_52264[(9)]);
var inst_52243 = (state_52264[(8)]);
var inst_52248 = (function (){var cs = inst_52234;
var vec__52239 = inst_52243;
var v = inst_52244;
var c = inst_52245;
return (function (p1__52230_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__52230_SHARP_);
});
})();
var inst_52249 = cljs.core.filterv(inst_52248,inst_52234);
var inst_52234__$1 = inst_52249;
var state_52264__$1 = (function (){var statearr_52279 = state_52264;
(statearr_52279[(10)] = inst_52234__$1);

return statearr_52279;
})();
var statearr_52280_53179 = state_52264__$1;
(statearr_52280_53179[(2)] = null);

(statearr_52280_53179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52281[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52281[(1)] = (1));

return statearr_52281;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52264){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52264);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52282){var ex__33312__auto__ = e52282;
var statearr_52283_53180 = state_52264;
(statearr_52283_53180[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52264[(4)]))){
var statearr_52284_53181 = state_52264;
(statearr_52284_53181[(1)] = cljs.core.first((state_52264[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53182 = state_52264;
state_52264 = G__53182;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52285 = f__33345__auto__();
(statearr_52285[(6)] = c__33344__auto___53165);

return statearr_52285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__52287 = arguments.length;
switch (G__52287) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52311){
var state_val_52312 = (state_52311[(1)]);
if((state_val_52312 === (7))){
var inst_52293 = (state_52311[(7)]);
var inst_52293__$1 = (state_52311[(2)]);
var inst_52294 = (inst_52293__$1 == null);
var inst_52295 = cljs.core.not(inst_52294);
var state_52311__$1 = (function (){var statearr_52313 = state_52311;
(statearr_52313[(7)] = inst_52293__$1);

return statearr_52313;
})();
if(inst_52295){
var statearr_52314_53185 = state_52311__$1;
(statearr_52314_53185[(1)] = (8));

} else {
var statearr_52315_53186 = state_52311__$1;
(statearr_52315_53186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (1))){
var inst_52288 = (0);
var state_52311__$1 = (function (){var statearr_52316 = state_52311;
(statearr_52316[(8)] = inst_52288);

return statearr_52316;
})();
var statearr_52317_53188 = state_52311__$1;
(statearr_52317_53188[(2)] = null);

(statearr_52317_53188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (4))){
var state_52311__$1 = state_52311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52311__$1,(7),ch);
} else {
if((state_val_52312 === (6))){
var inst_52306 = (state_52311[(2)]);
var state_52311__$1 = state_52311;
var statearr_52318_53189 = state_52311__$1;
(statearr_52318_53189[(2)] = inst_52306);

(statearr_52318_53189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (3))){
var inst_52308 = (state_52311[(2)]);
var inst_52309 = cljs.core.async.close_BANG_(out);
var state_52311__$1 = (function (){var statearr_52319 = state_52311;
(statearr_52319[(9)] = inst_52308);

return statearr_52319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52311__$1,inst_52309);
} else {
if((state_val_52312 === (2))){
var inst_52288 = (state_52311[(8)]);
var inst_52290 = (inst_52288 < n);
var state_52311__$1 = state_52311;
if(cljs.core.truth_(inst_52290)){
var statearr_52320_53190 = state_52311__$1;
(statearr_52320_53190[(1)] = (4));

} else {
var statearr_52321_53191 = state_52311__$1;
(statearr_52321_53191[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (11))){
var inst_52288 = (state_52311[(8)]);
var inst_52298 = (state_52311[(2)]);
var inst_52299 = (inst_52288 + (1));
var inst_52288__$1 = inst_52299;
var state_52311__$1 = (function (){var statearr_52322 = state_52311;
(statearr_52322[(8)] = inst_52288__$1);

(statearr_52322[(10)] = inst_52298);

return statearr_52322;
})();
var statearr_52323_53192 = state_52311__$1;
(statearr_52323_53192[(2)] = null);

(statearr_52323_53192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (9))){
var state_52311__$1 = state_52311;
var statearr_52324_53193 = state_52311__$1;
(statearr_52324_53193[(2)] = null);

(statearr_52324_53193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (5))){
var state_52311__$1 = state_52311;
var statearr_52325_53194 = state_52311__$1;
(statearr_52325_53194[(2)] = null);

(statearr_52325_53194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (10))){
var inst_52303 = (state_52311[(2)]);
var state_52311__$1 = state_52311;
var statearr_52326_53195 = state_52311__$1;
(statearr_52326_53195[(2)] = inst_52303);

(statearr_52326_53195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52312 === (8))){
var inst_52293 = (state_52311[(7)]);
var state_52311__$1 = state_52311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52311__$1,(11),out,inst_52293);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52327 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52327[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52327[(1)] = (1));

return statearr_52327;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52311){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52311);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52328){var ex__33312__auto__ = e52328;
var statearr_52329_53201 = state_52311;
(statearr_52329_53201[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52311[(4)]))){
var statearr_52330_53202 = state_52311;
(statearr_52330_53202[(1)] = cljs.core.first((state_52311[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53203 = state_52311;
state_52311 = G__53203;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52331 = f__33345__auto__();
(statearr_52331[(6)] = c__33344__auto___53184);

return statearr_52331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52336 = (function (f,ch,meta52334,_,fn1,meta52337){
this.f = f;
this.ch = ch;
this.meta52334 = meta52334;
this._ = _;
this.fn1 = fn1;
this.meta52337 = meta52337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52338,meta52337__$1){
var self__ = this;
var _52338__$1 = this;
return (new cljs.core.async.t_cljs$core$async52336(self__.f,self__.ch,self__.meta52334,self__._,self__.fn1,meta52337__$1));
}));

(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52338){
var self__ = this;
var _52338__$1 = this;
return self__.meta52337;
}));

(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async52336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__52332_SHARP_){
var G__52339 = (((p1__52332_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__52332_SHARP_) : self__.f.call(null,p1__52332_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__52339) : f1.call(null,G__52339));
});
}));

(cljs.core.async.t_cljs$core$async52336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52334","meta52334",1238769511,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async52333","cljs.core.async/t_cljs$core$async52333",336920874,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta52337","meta52337",-70896209,null)], null);
}));

(cljs.core.async.t_cljs$core$async52336.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52336");

(cljs.core.async.t_cljs$core$async52336.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52336");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52336.
 */
cljs.core.async.__GT_t_cljs$core$async52336 = (function cljs$core$async$__GT_t_cljs$core$async52336(f,ch,meta52334,_,fn1,meta52337){
return (new cljs.core.async.t_cljs$core$async52336(f,ch,meta52334,_,fn1,meta52337));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52333 = (function (f,ch,meta52334){
this.f = f;
this.ch = ch;
this.meta52334 = meta52334;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52335,meta52334__$1){
var self__ = this;
var _52335__$1 = this;
return (new cljs.core.async.t_cljs$core$async52333(self__.f,self__.ch,meta52334__$1));
}));

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52335){
var self__ = this;
var _52335__$1 = this;
return self__.meta52334;
}));

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async52336(self__.f,self__.ch,self__.meta52334,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__52340 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__52340) : self__.f.call(null,G__52340));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52333.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async52333.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52334","meta52334",1238769511,null)], null);
}));

(cljs.core.async.t_cljs$core$async52333.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52333.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52333");

(cljs.core.async.t_cljs$core$async52333.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52333");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52333.
 */
cljs.core.async.__GT_t_cljs$core$async52333 = (function cljs$core$async$__GT_t_cljs$core$async52333(f,ch,meta52334){
return (new cljs.core.async.t_cljs$core$async52333(f,ch,meta52334));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async52333(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52341 = (function (f,ch,meta52342){
this.f = f;
this.ch = ch;
this.meta52342 = meta52342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52343,meta52342__$1){
var self__ = this;
var _52343__$1 = this;
return (new cljs.core.async.t_cljs$core$async52341(self__.f,self__.ch,meta52342__$1));
}));

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52343){
var self__ = this;
var _52343__$1 = this;
return self__.meta52342;
}));

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async52341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52342","meta52342",-756185109,null)], null);
}));

(cljs.core.async.t_cljs$core$async52341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52341");

(cljs.core.async.t_cljs$core$async52341.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52341.
 */
cljs.core.async.__GT_t_cljs$core$async52341 = (function cljs$core$async$__GT_t_cljs$core$async52341(f,ch,meta52342){
return (new cljs.core.async.t_cljs$core$async52341(f,ch,meta52342));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async52341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async52344 = (function (p,ch,meta52345){
this.p = p;
this.ch = ch;
this.meta52345 = meta52345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52346,meta52345__$1){
var self__ = this;
var _52346__$1 = this;
return (new cljs.core.async.t_cljs$core$async52344(self__.p,self__.ch,meta52345__$1));
}));

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52346){
var self__ = this;
var _52346__$1 = this;
return self__.meta52345;
}));

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async52344.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async52344.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta52345","meta52345",-1440369325,null)], null);
}));

(cljs.core.async.t_cljs$core$async52344.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async52344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async52344");

(cljs.core.async.t_cljs$core$async52344.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async52344");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async52344.
 */
cljs.core.async.__GT_t_cljs$core$async52344 = (function cljs$core$async$__GT_t_cljs$core$async52344(p,ch,meta52345){
return (new cljs.core.async.t_cljs$core$async52344(p,ch,meta52345));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async52344(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__52348 = arguments.length;
switch (G__52348) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53210 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52369){
var state_val_52370 = (state_52369[(1)]);
if((state_val_52370 === (7))){
var inst_52365 = (state_52369[(2)]);
var state_52369__$1 = state_52369;
var statearr_52371_53211 = state_52369__$1;
(statearr_52371_53211[(2)] = inst_52365);

(statearr_52371_53211[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (1))){
var state_52369__$1 = state_52369;
var statearr_52372_53213 = state_52369__$1;
(statearr_52372_53213[(2)] = null);

(statearr_52372_53213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (4))){
var inst_52351 = (state_52369[(7)]);
var inst_52351__$1 = (state_52369[(2)]);
var inst_52352 = (inst_52351__$1 == null);
var state_52369__$1 = (function (){var statearr_52373 = state_52369;
(statearr_52373[(7)] = inst_52351__$1);

return statearr_52373;
})();
if(cljs.core.truth_(inst_52352)){
var statearr_52374_53214 = state_52369__$1;
(statearr_52374_53214[(1)] = (5));

} else {
var statearr_52375_53215 = state_52369__$1;
(statearr_52375_53215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (6))){
var inst_52351 = (state_52369[(7)]);
var inst_52356 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_52351) : p.call(null,inst_52351));
var state_52369__$1 = state_52369;
if(cljs.core.truth_(inst_52356)){
var statearr_52376_53216 = state_52369__$1;
(statearr_52376_53216[(1)] = (8));

} else {
var statearr_52377_53220 = state_52369__$1;
(statearr_52377_53220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (3))){
var inst_52367 = (state_52369[(2)]);
var state_52369__$1 = state_52369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52369__$1,inst_52367);
} else {
if((state_val_52370 === (2))){
var state_52369__$1 = state_52369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52369__$1,(4),ch);
} else {
if((state_val_52370 === (11))){
var inst_52359 = (state_52369[(2)]);
var state_52369__$1 = state_52369;
var statearr_52378_53221 = state_52369__$1;
(statearr_52378_53221[(2)] = inst_52359);

(statearr_52378_53221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (9))){
var state_52369__$1 = state_52369;
var statearr_52379_53222 = state_52369__$1;
(statearr_52379_53222[(2)] = null);

(statearr_52379_53222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (5))){
var inst_52354 = cljs.core.async.close_BANG_(out);
var state_52369__$1 = state_52369;
var statearr_52380_53223 = state_52369__$1;
(statearr_52380_53223[(2)] = inst_52354);

(statearr_52380_53223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (10))){
var inst_52362 = (state_52369[(2)]);
var state_52369__$1 = (function (){var statearr_52381 = state_52369;
(statearr_52381[(8)] = inst_52362);

return statearr_52381;
})();
var statearr_52382_53224 = state_52369__$1;
(statearr_52382_53224[(2)] = null);

(statearr_52382_53224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52370 === (8))){
var inst_52351 = (state_52369[(7)]);
var state_52369__$1 = state_52369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52369__$1,(11),out,inst_52351);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52383 = [null,null,null,null,null,null,null,null,null];
(statearr_52383[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52383[(1)] = (1));

return statearr_52383;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52369){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52369);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52384){var ex__33312__auto__ = e52384;
var statearr_52385_53225 = state_52369;
(statearr_52385_53225[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52369[(4)]))){
var statearr_52386_53226 = state_52369;
(statearr_52386_53226[(1)] = cljs.core.first((state_52369[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53227 = state_52369;
state_52369 = G__53227;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52387 = f__33345__auto__();
(statearr_52387[(6)] = c__33344__auto___53210);

return statearr_52387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52389 = arguments.length;
switch (G__52389) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33344__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52451){
var state_val_52452 = (state_52451[(1)]);
if((state_val_52452 === (7))){
var inst_52447 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
var statearr_52453_53229 = state_52451__$1;
(statearr_52453_53229[(2)] = inst_52447);

(statearr_52453_53229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (20))){
var inst_52417 = (state_52451[(7)]);
var inst_52428 = (state_52451[(2)]);
var inst_52429 = cljs.core.next(inst_52417);
var inst_52403 = inst_52429;
var inst_52404 = null;
var inst_52405 = (0);
var inst_52406 = (0);
var state_52451__$1 = (function (){var statearr_52454 = state_52451;
(statearr_52454[(8)] = inst_52406);

(statearr_52454[(9)] = inst_52428);

(statearr_52454[(10)] = inst_52404);

(statearr_52454[(11)] = inst_52403);

(statearr_52454[(12)] = inst_52405);

return statearr_52454;
})();
var statearr_52455_53230 = state_52451__$1;
(statearr_52455_53230[(2)] = null);

(statearr_52455_53230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (1))){
var state_52451__$1 = state_52451;
var statearr_52456_53232 = state_52451__$1;
(statearr_52456_53232[(2)] = null);

(statearr_52456_53232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (4))){
var inst_52392 = (state_52451[(13)]);
var inst_52392__$1 = (state_52451[(2)]);
var inst_52393 = (inst_52392__$1 == null);
var state_52451__$1 = (function (){var statearr_52457 = state_52451;
(statearr_52457[(13)] = inst_52392__$1);

return statearr_52457;
})();
if(cljs.core.truth_(inst_52393)){
var statearr_52458_53233 = state_52451__$1;
(statearr_52458_53233[(1)] = (5));

} else {
var statearr_52459_53234 = state_52451__$1;
(statearr_52459_53234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (15))){
var state_52451__$1 = state_52451;
var statearr_52463_53235 = state_52451__$1;
(statearr_52463_53235[(2)] = null);

(statearr_52463_53235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (21))){
var state_52451__$1 = state_52451;
var statearr_52464_53236 = state_52451__$1;
(statearr_52464_53236[(2)] = null);

(statearr_52464_53236[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (13))){
var inst_52406 = (state_52451[(8)]);
var inst_52404 = (state_52451[(10)]);
var inst_52403 = (state_52451[(11)]);
var inst_52405 = (state_52451[(12)]);
var inst_52413 = (state_52451[(2)]);
var inst_52414 = (inst_52406 + (1));
var tmp52460 = inst_52404;
var tmp52461 = inst_52403;
var tmp52462 = inst_52405;
var inst_52403__$1 = tmp52461;
var inst_52404__$1 = tmp52460;
var inst_52405__$1 = tmp52462;
var inst_52406__$1 = inst_52414;
var state_52451__$1 = (function (){var statearr_52465 = state_52451;
(statearr_52465[(14)] = inst_52413);

(statearr_52465[(8)] = inst_52406__$1);

(statearr_52465[(10)] = inst_52404__$1);

(statearr_52465[(11)] = inst_52403__$1);

(statearr_52465[(12)] = inst_52405__$1);

return statearr_52465;
})();
var statearr_52466_53237 = state_52451__$1;
(statearr_52466_53237[(2)] = null);

(statearr_52466_53237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (22))){
var state_52451__$1 = state_52451;
var statearr_52467_53238 = state_52451__$1;
(statearr_52467_53238[(2)] = null);

(statearr_52467_53238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (6))){
var inst_52392 = (state_52451[(13)]);
var inst_52401 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52392) : f.call(null,inst_52392));
var inst_52402 = cljs.core.seq(inst_52401);
var inst_52403 = inst_52402;
var inst_52404 = null;
var inst_52405 = (0);
var inst_52406 = (0);
var state_52451__$1 = (function (){var statearr_52468 = state_52451;
(statearr_52468[(8)] = inst_52406);

(statearr_52468[(10)] = inst_52404);

(statearr_52468[(11)] = inst_52403);

(statearr_52468[(12)] = inst_52405);

return statearr_52468;
})();
var statearr_52469_53239 = state_52451__$1;
(statearr_52469_53239[(2)] = null);

(statearr_52469_53239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (17))){
var inst_52417 = (state_52451[(7)]);
var inst_52421 = cljs.core.chunk_first(inst_52417);
var inst_52422 = cljs.core.chunk_rest(inst_52417);
var inst_52423 = cljs.core.count(inst_52421);
var inst_52403 = inst_52422;
var inst_52404 = inst_52421;
var inst_52405 = inst_52423;
var inst_52406 = (0);
var state_52451__$1 = (function (){var statearr_52470 = state_52451;
(statearr_52470[(8)] = inst_52406);

(statearr_52470[(10)] = inst_52404);

(statearr_52470[(11)] = inst_52403);

(statearr_52470[(12)] = inst_52405);

return statearr_52470;
})();
var statearr_52471_53240 = state_52451__$1;
(statearr_52471_53240[(2)] = null);

(statearr_52471_53240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (3))){
var inst_52449 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52451__$1,inst_52449);
} else {
if((state_val_52452 === (12))){
var inst_52437 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
var statearr_52472_53241 = state_52451__$1;
(statearr_52472_53241[(2)] = inst_52437);

(statearr_52472_53241[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (2))){
var state_52451__$1 = state_52451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52451__$1,(4),in$);
} else {
if((state_val_52452 === (23))){
var inst_52445 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
var statearr_52473_53242 = state_52451__$1;
(statearr_52473_53242[(2)] = inst_52445);

(statearr_52473_53242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (19))){
var inst_52432 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
var statearr_52474_53243 = state_52451__$1;
(statearr_52474_53243[(2)] = inst_52432);

(statearr_52474_53243[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (11))){
var inst_52417 = (state_52451[(7)]);
var inst_52403 = (state_52451[(11)]);
var inst_52417__$1 = cljs.core.seq(inst_52403);
var state_52451__$1 = (function (){var statearr_52475 = state_52451;
(statearr_52475[(7)] = inst_52417__$1);

return statearr_52475;
})();
if(inst_52417__$1){
var statearr_52476_53244 = state_52451__$1;
(statearr_52476_53244[(1)] = (14));

} else {
var statearr_52477_53245 = state_52451__$1;
(statearr_52477_53245[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (9))){
var inst_52439 = (state_52451[(2)]);
var inst_52440 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52451__$1 = (function (){var statearr_52478 = state_52451;
(statearr_52478[(15)] = inst_52439);

return statearr_52478;
})();
if(cljs.core.truth_(inst_52440)){
var statearr_52479_53246 = state_52451__$1;
(statearr_52479_53246[(1)] = (21));

} else {
var statearr_52480_53247 = state_52451__$1;
(statearr_52480_53247[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (5))){
var inst_52395 = cljs.core.async.close_BANG_(out);
var state_52451__$1 = state_52451;
var statearr_52481_53248 = state_52451__$1;
(statearr_52481_53248[(2)] = inst_52395);

(statearr_52481_53248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (14))){
var inst_52417 = (state_52451[(7)]);
var inst_52419 = cljs.core.chunked_seq_QMARK_(inst_52417);
var state_52451__$1 = state_52451;
if(inst_52419){
var statearr_52482_53249 = state_52451__$1;
(statearr_52482_53249[(1)] = (17));

} else {
var statearr_52483_53250 = state_52451__$1;
(statearr_52483_53250[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (16))){
var inst_52435 = (state_52451[(2)]);
var state_52451__$1 = state_52451;
var statearr_52484_53251 = state_52451__$1;
(statearr_52484_53251[(2)] = inst_52435);

(statearr_52484_53251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52452 === (10))){
var inst_52406 = (state_52451[(8)]);
var inst_52404 = (state_52451[(10)]);
var inst_52411 = cljs.core._nth(inst_52404,inst_52406);
var state_52451__$1 = state_52451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52451__$1,(13),out,inst_52411);
} else {
if((state_val_52452 === (18))){
var inst_52417 = (state_52451[(7)]);
var inst_52426 = cljs.core.first(inst_52417);
var state_52451__$1 = state_52451;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52451__$1,(20),out,inst_52426);
} else {
if((state_val_52452 === (8))){
var inst_52406 = (state_52451[(8)]);
var inst_52405 = (state_52451[(12)]);
var inst_52408 = (inst_52406 < inst_52405);
var inst_52409 = inst_52408;
var state_52451__$1 = state_52451;
if(cljs.core.truth_(inst_52409)){
var statearr_52485_53252 = state_52451__$1;
(statearr_52485_53252[(1)] = (10));

} else {
var statearr_52486_53253 = state_52451__$1;
(statearr_52486_53253[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_52487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52487[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__);

(statearr_52487[(1)] = (1));

return statearr_52487;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1 = (function (state_52451){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52451);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52488){var ex__33312__auto__ = e52488;
var statearr_52489_53254 = state_52451;
(statearr_52489_53254[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52451[(4)]))){
var statearr_52490_53255 = state_52451;
(statearr_52490_53255[(1)] = cljs.core.first((state_52451[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53256 = state_52451;
state_52451 = G__53256;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__ = function(state_52451){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1.call(this,state_52451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52491 = f__33345__auto__();
(statearr_52491[(6)] = c__33344__auto__);

return statearr_52491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));

return c__33344__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52493 = arguments.length;
switch (G__52493) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52495 = arguments.length;
switch (G__52495) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52497 = arguments.length;
switch (G__52497) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53269 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52521){
var state_val_52522 = (state_52521[(1)]);
if((state_val_52522 === (7))){
var inst_52516 = (state_52521[(2)]);
var state_52521__$1 = state_52521;
var statearr_52523_53271 = state_52521__$1;
(statearr_52523_53271[(2)] = inst_52516);

(statearr_52523_53271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (1))){
var inst_52498 = null;
var state_52521__$1 = (function (){var statearr_52524 = state_52521;
(statearr_52524[(7)] = inst_52498);

return statearr_52524;
})();
var statearr_52525_53272 = state_52521__$1;
(statearr_52525_53272[(2)] = null);

(statearr_52525_53272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (4))){
var inst_52501 = (state_52521[(8)]);
var inst_52501__$1 = (state_52521[(2)]);
var inst_52502 = (inst_52501__$1 == null);
var inst_52503 = cljs.core.not(inst_52502);
var state_52521__$1 = (function (){var statearr_52526 = state_52521;
(statearr_52526[(8)] = inst_52501__$1);

return statearr_52526;
})();
if(inst_52503){
var statearr_52527_53273 = state_52521__$1;
(statearr_52527_53273[(1)] = (5));

} else {
var statearr_52528_53274 = state_52521__$1;
(statearr_52528_53274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (6))){
var state_52521__$1 = state_52521;
var statearr_52529_53275 = state_52521__$1;
(statearr_52529_53275[(2)] = null);

(statearr_52529_53275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (3))){
var inst_52518 = (state_52521[(2)]);
var inst_52519 = cljs.core.async.close_BANG_(out);
var state_52521__$1 = (function (){var statearr_52530 = state_52521;
(statearr_52530[(9)] = inst_52518);

return statearr_52530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52521__$1,inst_52519);
} else {
if((state_val_52522 === (2))){
var state_52521__$1 = state_52521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52521__$1,(4),ch);
} else {
if((state_val_52522 === (11))){
var inst_52501 = (state_52521[(8)]);
var inst_52510 = (state_52521[(2)]);
var inst_52498 = inst_52501;
var state_52521__$1 = (function (){var statearr_52531 = state_52521;
(statearr_52531[(10)] = inst_52510);

(statearr_52531[(7)] = inst_52498);

return statearr_52531;
})();
var statearr_52532_53276 = state_52521__$1;
(statearr_52532_53276[(2)] = null);

(statearr_52532_53276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (9))){
var inst_52501 = (state_52521[(8)]);
var state_52521__$1 = state_52521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52521__$1,(11),out,inst_52501);
} else {
if((state_val_52522 === (5))){
var inst_52501 = (state_52521[(8)]);
var inst_52498 = (state_52521[(7)]);
var inst_52505 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52501,inst_52498);
var state_52521__$1 = state_52521;
if(inst_52505){
var statearr_52534_53277 = state_52521__$1;
(statearr_52534_53277[(1)] = (8));

} else {
var statearr_52535_53278 = state_52521__$1;
(statearr_52535_53278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (10))){
var inst_52513 = (state_52521[(2)]);
var state_52521__$1 = state_52521;
var statearr_52536_53279 = state_52521__$1;
(statearr_52536_53279[(2)] = inst_52513);

(statearr_52536_53279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52522 === (8))){
var inst_52498 = (state_52521[(7)]);
var tmp52533 = inst_52498;
var inst_52498__$1 = tmp52533;
var state_52521__$1 = (function (){var statearr_52537 = state_52521;
(statearr_52537[(7)] = inst_52498__$1);

return statearr_52537;
})();
var statearr_52538_53280 = state_52521__$1;
(statearr_52538_53280[(2)] = null);

(statearr_52538_53280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52539 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52539[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52539[(1)] = (1));

return statearr_52539;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52521){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52521);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52540){var ex__33312__auto__ = e52540;
var statearr_52541_53281 = state_52521;
(statearr_52541_53281[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52521[(4)]))){
var statearr_52542_53282 = state_52521;
(statearr_52542_53282[(1)] = cljs.core.first((state_52521[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53283 = state_52521;
state_52521 = G__53283;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52543 = f__33345__auto__();
(statearr_52543[(6)] = c__33344__auto___53269);

return statearr_52543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52545 = arguments.length;
switch (G__52545) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52583){
var state_val_52584 = (state_52583[(1)]);
if((state_val_52584 === (7))){
var inst_52579 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
var statearr_52585_53286 = state_52583__$1;
(statearr_52585_53286[(2)] = inst_52579);

(statearr_52585_53286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (1))){
var inst_52546 = (new Array(n));
var inst_52547 = inst_52546;
var inst_52548 = (0);
var state_52583__$1 = (function (){var statearr_52586 = state_52583;
(statearr_52586[(7)] = inst_52548);

(statearr_52586[(8)] = inst_52547);

return statearr_52586;
})();
var statearr_52587_53287 = state_52583__$1;
(statearr_52587_53287[(2)] = null);

(statearr_52587_53287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (4))){
var inst_52551 = (state_52583[(9)]);
var inst_52551__$1 = (state_52583[(2)]);
var inst_52552 = (inst_52551__$1 == null);
var inst_52553 = cljs.core.not(inst_52552);
var state_52583__$1 = (function (){var statearr_52588 = state_52583;
(statearr_52588[(9)] = inst_52551__$1);

return statearr_52588;
})();
if(inst_52553){
var statearr_52589_53288 = state_52583__$1;
(statearr_52589_53288[(1)] = (5));

} else {
var statearr_52590_53289 = state_52583__$1;
(statearr_52590_53289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (15))){
var inst_52573 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
var statearr_52591_53290 = state_52583__$1;
(statearr_52591_53290[(2)] = inst_52573);

(statearr_52591_53290[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (13))){
var state_52583__$1 = state_52583;
var statearr_52592_53291 = state_52583__$1;
(statearr_52592_53291[(2)] = null);

(statearr_52592_53291[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (6))){
var inst_52548 = (state_52583[(7)]);
var inst_52569 = (inst_52548 > (0));
var state_52583__$1 = state_52583;
if(cljs.core.truth_(inst_52569)){
var statearr_52593_53292 = state_52583__$1;
(statearr_52593_53292[(1)] = (12));

} else {
var statearr_52594_53293 = state_52583__$1;
(statearr_52594_53293[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (3))){
var inst_52581 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52583__$1,inst_52581);
} else {
if((state_val_52584 === (12))){
var inst_52547 = (state_52583[(8)]);
var inst_52571 = cljs.core.vec(inst_52547);
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52583__$1,(15),out,inst_52571);
} else {
if((state_val_52584 === (2))){
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52583__$1,(4),ch);
} else {
if((state_val_52584 === (11))){
var inst_52563 = (state_52583[(2)]);
var inst_52564 = (new Array(n));
var inst_52547 = inst_52564;
var inst_52548 = (0);
var state_52583__$1 = (function (){var statearr_52595 = state_52583;
(statearr_52595[(10)] = inst_52563);

(statearr_52595[(7)] = inst_52548);

(statearr_52595[(8)] = inst_52547);

return statearr_52595;
})();
var statearr_52596_53294 = state_52583__$1;
(statearr_52596_53294[(2)] = null);

(statearr_52596_53294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (9))){
var inst_52547 = (state_52583[(8)]);
var inst_52561 = cljs.core.vec(inst_52547);
var state_52583__$1 = state_52583;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52583__$1,(11),out,inst_52561);
} else {
if((state_val_52584 === (5))){
var inst_52548 = (state_52583[(7)]);
var inst_52556 = (state_52583[(11)]);
var inst_52547 = (state_52583[(8)]);
var inst_52551 = (state_52583[(9)]);
var inst_52555 = (inst_52547[inst_52548] = inst_52551);
var inst_52556__$1 = (inst_52548 + (1));
var inst_52557 = (inst_52556__$1 < n);
var state_52583__$1 = (function (){var statearr_52597 = state_52583;
(statearr_52597[(11)] = inst_52556__$1);

(statearr_52597[(12)] = inst_52555);

return statearr_52597;
})();
if(cljs.core.truth_(inst_52557)){
var statearr_52598_53295 = state_52583__$1;
(statearr_52598_53295[(1)] = (8));

} else {
var statearr_52599_53296 = state_52583__$1;
(statearr_52599_53296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (14))){
var inst_52576 = (state_52583[(2)]);
var inst_52577 = cljs.core.async.close_BANG_(out);
var state_52583__$1 = (function (){var statearr_52601 = state_52583;
(statearr_52601[(13)] = inst_52576);

return statearr_52601;
})();
var statearr_52602_53297 = state_52583__$1;
(statearr_52602_53297[(2)] = inst_52577);

(statearr_52602_53297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (10))){
var inst_52567 = (state_52583[(2)]);
var state_52583__$1 = state_52583;
var statearr_52603_53298 = state_52583__$1;
(statearr_52603_53298[(2)] = inst_52567);

(statearr_52603_53298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52584 === (8))){
var inst_52556 = (state_52583[(11)]);
var inst_52547 = (state_52583[(8)]);
var tmp52600 = inst_52547;
var inst_52547__$1 = tmp52600;
var inst_52548 = inst_52556;
var state_52583__$1 = (function (){var statearr_52604 = state_52583;
(statearr_52604[(7)] = inst_52548);

(statearr_52604[(8)] = inst_52547__$1);

return statearr_52604;
})();
var statearr_52605_53299 = state_52583__$1;
(statearr_52605_53299[(2)] = null);

(statearr_52605_53299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52606[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52606[(1)] = (1));

return statearr_52606;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52583){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52583);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52607){var ex__33312__auto__ = e52607;
var statearr_52608_53300 = state_52583;
(statearr_52608_53300[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52583[(4)]))){
var statearr_52609_53301 = state_52583;
(statearr_52609_53301[(1)] = cljs.core.first((state_52583[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53302 = state_52583;
state_52583 = G__53302;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52610 = f__33345__auto__();
(statearr_52610[(6)] = c__33344__auto___53285);

return statearr_52610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52612 = arguments.length;
switch (G__52612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33344__auto___53307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33345__auto__ = (function (){var switch__33308__auto__ = (function (state_52657){
var state_val_52658 = (state_52657[(1)]);
if((state_val_52658 === (7))){
var inst_52653 = (state_52657[(2)]);
var state_52657__$1 = state_52657;
var statearr_52659_53312 = state_52657__$1;
(statearr_52659_53312[(2)] = inst_52653);

(statearr_52659_53312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (1))){
var inst_52613 = [];
var inst_52614 = inst_52613;
var inst_52615 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52657__$1 = (function (){var statearr_52660 = state_52657;
(statearr_52660[(7)] = inst_52614);

(statearr_52660[(8)] = inst_52615);

return statearr_52660;
})();
var statearr_52661_53316 = state_52657__$1;
(statearr_52661_53316[(2)] = null);

(statearr_52661_53316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (4))){
var inst_52618 = (state_52657[(9)]);
var inst_52618__$1 = (state_52657[(2)]);
var inst_52619 = (inst_52618__$1 == null);
var inst_52620 = cljs.core.not(inst_52619);
var state_52657__$1 = (function (){var statearr_52662 = state_52657;
(statearr_52662[(9)] = inst_52618__$1);

return statearr_52662;
})();
if(inst_52620){
var statearr_52663_53317 = state_52657__$1;
(statearr_52663_53317[(1)] = (5));

} else {
var statearr_52664_53318 = state_52657__$1;
(statearr_52664_53318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (15))){
var inst_52614 = (state_52657[(7)]);
var inst_52645 = cljs.core.vec(inst_52614);
var state_52657__$1 = state_52657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52657__$1,(18),out,inst_52645);
} else {
if((state_val_52658 === (13))){
var inst_52640 = (state_52657[(2)]);
var state_52657__$1 = state_52657;
var statearr_52665_53319 = state_52657__$1;
(statearr_52665_53319[(2)] = inst_52640);

(statearr_52665_53319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (6))){
var inst_52614 = (state_52657[(7)]);
var inst_52642 = inst_52614.length;
var inst_52643 = (inst_52642 > (0));
var state_52657__$1 = state_52657;
if(cljs.core.truth_(inst_52643)){
var statearr_52666_53320 = state_52657__$1;
(statearr_52666_53320[(1)] = (15));

} else {
var statearr_52667_53321 = state_52657__$1;
(statearr_52667_53321[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (17))){
var inst_52650 = (state_52657[(2)]);
var inst_52651 = cljs.core.async.close_BANG_(out);
var state_52657__$1 = (function (){var statearr_52668 = state_52657;
(statearr_52668[(10)] = inst_52650);

return statearr_52668;
})();
var statearr_52669_53325 = state_52657__$1;
(statearr_52669_53325[(2)] = inst_52651);

(statearr_52669_53325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (3))){
var inst_52655 = (state_52657[(2)]);
var state_52657__$1 = state_52657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52657__$1,inst_52655);
} else {
if((state_val_52658 === (12))){
var inst_52614 = (state_52657[(7)]);
var inst_52633 = cljs.core.vec(inst_52614);
var state_52657__$1 = state_52657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52657__$1,(14),out,inst_52633);
} else {
if((state_val_52658 === (2))){
var state_52657__$1 = state_52657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52657__$1,(4),ch);
} else {
if((state_val_52658 === (11))){
var inst_52618 = (state_52657[(9)]);
var inst_52622 = (state_52657[(11)]);
var inst_52614 = (state_52657[(7)]);
var inst_52630 = inst_52614.push(inst_52618);
var tmp52670 = inst_52614;
var inst_52614__$1 = tmp52670;
var inst_52615 = inst_52622;
var state_52657__$1 = (function (){var statearr_52671 = state_52657;
(statearr_52671[(7)] = inst_52614__$1);

(statearr_52671[(12)] = inst_52630);

(statearr_52671[(8)] = inst_52615);

return statearr_52671;
})();
var statearr_52672_53326 = state_52657__$1;
(statearr_52672_53326[(2)] = null);

(statearr_52672_53326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (9))){
var inst_52615 = (state_52657[(8)]);
var inst_52626 = cljs.core.keyword_identical_QMARK_(inst_52615,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52657__$1 = state_52657;
var statearr_52673_53330 = state_52657__$1;
(statearr_52673_53330[(2)] = inst_52626);

(statearr_52673_53330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (5))){
var inst_52618 = (state_52657[(9)]);
var inst_52622 = (state_52657[(11)]);
var inst_52623 = (state_52657[(13)]);
var inst_52615 = (state_52657[(8)]);
var inst_52622__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52618) : f.call(null,inst_52618));
var inst_52623__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52622__$1,inst_52615);
var state_52657__$1 = (function (){var statearr_52674 = state_52657;
(statearr_52674[(11)] = inst_52622__$1);

(statearr_52674[(13)] = inst_52623__$1);

return statearr_52674;
})();
if(inst_52623__$1){
var statearr_52675_53331 = state_52657__$1;
(statearr_52675_53331[(1)] = (8));

} else {
var statearr_52676_53332 = state_52657__$1;
(statearr_52676_53332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (14))){
var inst_52618 = (state_52657[(9)]);
var inst_52622 = (state_52657[(11)]);
var inst_52635 = (state_52657[(2)]);
var inst_52636 = [];
var inst_52637 = inst_52636.push(inst_52618);
var inst_52614 = inst_52636;
var inst_52615 = inst_52622;
var state_52657__$1 = (function (){var statearr_52677 = state_52657;
(statearr_52677[(14)] = inst_52637);

(statearr_52677[(15)] = inst_52635);

(statearr_52677[(7)] = inst_52614);

(statearr_52677[(8)] = inst_52615);

return statearr_52677;
})();
var statearr_52678_53333 = state_52657__$1;
(statearr_52678_53333[(2)] = null);

(statearr_52678_53333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (16))){
var state_52657__$1 = state_52657;
var statearr_52679_53334 = state_52657__$1;
(statearr_52679_53334[(2)] = null);

(statearr_52679_53334[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (10))){
var inst_52628 = (state_52657[(2)]);
var state_52657__$1 = state_52657;
if(cljs.core.truth_(inst_52628)){
var statearr_52680_53338 = state_52657__$1;
(statearr_52680_53338[(1)] = (11));

} else {
var statearr_52681_53339 = state_52657__$1;
(statearr_52681_53339[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (18))){
var inst_52647 = (state_52657[(2)]);
var state_52657__$1 = state_52657;
var statearr_52682_53340 = state_52657__$1;
(statearr_52682_53340[(2)] = inst_52647);

(statearr_52682_53340[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52658 === (8))){
var inst_52623 = (state_52657[(13)]);
var state_52657__$1 = state_52657;
var statearr_52683_53341 = state_52657__$1;
(statearr_52683_53341[(2)] = inst_52623);

(statearr_52683_53341[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_52684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52684[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_52684[(1)] = (1));

return statearr_52684;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_52657){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_52657);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e52685){var ex__33312__auto__ = e52685;
var statearr_52686_53342 = state_52657;
(statearr_52686_53342[(2)] = ex__33312__auto__);


if(cljs.core.seq((state_52657[(4)]))){
var statearr_52687_53343 = state_52657;
(statearr_52687_53343[(1)] = cljs.core.first((state_52657[(4)])));

} else {
throw ex__33312__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53344 = state_52657;
state_52657 = G__53344;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_52657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_52657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
})();
var state__33346__auto__ = (function (){var statearr_52688 = f__33345__auto__();
(statearr_52688[(6)] = c__33344__auto___53307);

return statearr_52688;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33346__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
