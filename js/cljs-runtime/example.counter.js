goog.provide('example.counter');
example.counter.reagent_atom_counter = (function example$counter$reagent_atom_counter(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",2139924085),(0)], null));
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Count: ",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count","count",2139924085)], null),cljs.core.inc);
})], null),"Increment"], null)], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"reagent-atom-counter","reagent-atom-counter",605252509)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reagent-atom-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.counter !== 'undefined') && (typeof example.counter.t_example$counter24060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.counter.t_example$counter24060 = (function (meta24061){
this.meta24061 = meta24061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.counter.t_example$counter24060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24062,meta24061__$1){
var self__ = this;
var _24062__$1 = this;
return (new example.counter.t_example$counter24060(meta24061__$1));
}));

(example.counter.t_example$counter24060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24062){
var self__ = this;
var _24062__$1 = this;
return self__.meta24061;
}));

(example.counter.t_example$counter24060.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.counter.t_example$counter24060.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__17480__auto__,devcard_opts__17481__auto__){
var self__ = this;
var this__17480__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__17481__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__17499__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.counter.reagent_atom_counter], null);
if(cljs.core.fn_QMARK_(v__17499__auto__)){
return (function (data_atom__17500__auto__,owner__17501__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__17499__auto__,data_atom__17500__auto__,owner__17501__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__17499__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__17481__auto__))], 0))], 0));
}));

(example.counter.t_example$counter24060.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24061","meta24061",-793728546,null)], null);
}));

(example.counter.t_example$counter24060.cljs$lang$type = true);

(example.counter.t_example$counter24060.cljs$lang$ctorStr = "example.counter/t_example$counter24060");

(example.counter.t_example$counter24060.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.counter/t_example$counter24060");
}));

/**
 * Positional factory function for example.counter/t_example$counter24060.
 */
example.counter.__GT_t_example$counter24060 = (function example$counter$__GT_t_example$counter24060(meta24061){
return (new example.counter.t_example$counter24060(meta24061));
});

}

return (new example.counter.t_example$counter24060(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n```clojure\n","(defn reagent-atom-counter []\n  (let [state (r/atom {:count 0})]\n    (fn []\n      [:div \"Count: \" (:count @state)\n       [:div\n        [:button {:on-click #(swap! state update-in [:count] inc)}\n         \"Increment\"]]])))","\n```\n"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));
example.counter.lmr_count = (function example$counter$lmr_count(conn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),"Count: ",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(homebase.reagent.q((1),conn))], null);
});
example.counter.lmr_inc_button = (function example$counter$lmr_inc_button(conn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return homebase.reagent.transact_BANG_(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword(null,"count","count",2139924085),(new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(homebase.reagent.q((1),conn)) + (1))], null)], null));
})], null),"Increment"], null);
});
example.counter.lmr_counter = (function example$counter$lmr_counter(){
var conn = homebase.reagent.new_db_conn(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(1),new cljs.core.Keyword(null,"count","count",2139924085),(0)], null)], null));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.counter.lmr_count,conn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.counter.lmr_inc_button,conn], null)], null)], null);
});
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"reagent-homebase-counter","reagent-homebase-counter",1084453747)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"reagent-homebase-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.counter !== 'undefined') && (typeof example.counter.t_example$counter24069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.counter.t_example$counter24069 = (function (meta24070){
this.meta24070 = meta24070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.counter.t_example$counter24069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24071,meta24070__$1){
var self__ = this;
var _24071__$1 = this;
return (new example.counter.t_example$counter24069(meta24070__$1));
}));

(example.counter.t_example$counter24069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24071){
var self__ = this;
var _24071__$1 = this;
return self__.meta24070;
}));

(example.counter.t_example$counter24069.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.counter.t_example$counter24069.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__17480__auto__,devcard_opts__17481__auto__){
var self__ = this;
var this__17480__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__17481__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__17499__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [example.counter.lmr_counter], null);
if(cljs.core.fn_QMARK_(v__17499__auto__)){
return (function (data_atom__17500__auto__,owner__17501__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__17499__auto__,data_atom__17500__auto__,owner__17501__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__17499__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__17481__auto__))], 0))], 0));
}));

(example.counter.t_example$counter24069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24070","meta24070",641081724,null)], null);
}));

(example.counter.t_example$counter24069.cljs$lang$type = true);

(example.counter.t_example$counter24069.cljs$lang$ctorStr = "example.counter/t_example$counter24069");

(example.counter.t_example$counter24069.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.counter/t_example$counter24069");
}));

/**
 * Positional factory function for example.counter/t_example$counter24069.
 */
example.counter.__GT_t_example$counter24069 = (function example$counter$__GT_t_example$counter24069(meta24070){
return (new example.counter.t_example$counter24069(meta24070));
});

}

return (new example.counter.t_example$counter24069(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n```clojure\n","(defn lmr-count [conn]\n  [:<> \"Count: \" (:count (lmr/q 1 conn))])","\n```\n"].join(''),["\n```clojure\n","(defn lmr-inc-button [conn]\n  [:button {:on-click #(lmr/transact! conn [[:db/add 1 :count (inc (:count (lmr/q 1 conn)))]])}\n   \"Increment\"])","\n```\n"].join(''),["\n```clojure\n","(defn lmr-counter []\n  (let [conn (lmr/new-db-conn [{:db/id 1, :count 0}])]\n    (fn []\n      [:div [lmr-count conn]\n       [:div [lmr-inc-button conn]]])))","\n```\n"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"react-js-homebase-counter","react-js-homebase-counter",446494497)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"react-js-homebase-counter",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if((typeof example !== 'undefined') && (typeof example.counter !== 'undefined') && (typeof example.counter.t_example$counter24072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
example.counter.t_example$counter24072 = (function (meta24073){
this.meta24073 = meta24073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(example.counter.t_example$counter24072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24074,meta24073__$1){
var self__ = this;
var _24074__$1 = this;
return (new example.counter.t_example$counter24072(meta24073__$1));
}));

(example.counter.t_example$counter24072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24074){
var self__ = this;
var _24074__$1 = this;
return self__.meta24073;
}));

(example.counter.t_example$counter24072.prototype.devcards$core$IDevcardOptions$ = cljs.core.PROTOCOL_SENTINEL);

(example.counter.t_example$counter24072.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__17480__auto__,devcard_opts__17481__auto__){
var self__ = this;
var this__17480__auto____$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(devcard_opts__17481__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__17499__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$js_gen$counter_example.App], null);
if(cljs.core.fn_QMARK_(v__17499__auto__)){
return (function (data_atom__17500__auto__,owner__17501__auto__){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__17499__auto__,data_atom__17500__auto__,owner__17501__auto__], null));
});
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(v__17499__auto__);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__17481__auto__))], 0))], 0));
}));

(example.counter.t_example$counter24072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta24073","meta24073",-744161087,null)], null);
}));

(example.counter.t_example$counter24072.cljs$lang$type = true);

(example.counter.t_example$counter24072.cljs$lang$ctorStr = "example.counter/t_example$counter24072");

(example.counter.t_example$counter24072.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"example.counter/t_example$counter24072");
}));

/**
 * Positional factory function for example.counter/t_example$counter24072.
 */
example.counter.__GT_t_example$counter24072 = (function example$counter$__GT_t_example$counter24072(meta24073){
return (new example.counter.t_example$counter24072(meta24073));
});

}

return (new example.counter.t_example$counter24072(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
example.counter.code_snippet = "import React from 'react'\n// import { HomebaseProvider, useTransact, useEntity } from 'homebase-react'\nconst { HomebaseProvider, useTransact, useEntity } = window.homebase.react\n\nconst counterId = 1\nconst config = { initialData: [{\n  ':db/id': counterId, \n  ':count': 0 \n}]}\n\nexport const App = () => (\n  <HomebaseProvider config={config}>\n    <Counter/>\n  </HomebaseProvider>\n)\n\nconst Counter = () => {\n  const [counter] = useEntity(counterId)\n  const [transact] = useTransact()\n  return (\n    <div>\n      Count: {counter.get(':count')}\n      <div>\n        <button onClick={() => transact([{\n          ':db/id': counterId, \n          ':count': counter.get(':count') + 1\n        }])}>\n          Increment\n        </button>\n      </div>\n    </div>\n  )\n}";
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"example.counter","example.counter",1071420893),new cljs.core.Keyword(null,"card","card",-1430355152)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["```javascript\n",example.counter.code_snippet,"\n```"].join('')], 0)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"heading","heading",-1312171873),false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border","hide-border",1463657151),true], null))], 0))], null));
})], null));

//# sourceMappingURL=example.counter.js.map
