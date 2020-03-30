if (self.CavalryLogger) { CavalryLogger.start_js(["GJ\/yh"]); }

__d("AddSeeFirstGroupsMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"AddSeeFirstGroupsData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"LinkedField",alias:null,name:"see_first_groups",storageKey:null,args:null,concreteType:"SeeFirstGroupsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"AddSeeFirstGroupsMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"add_see_first_groups",storageKey:null,args:b,concreteType:"AddSeeFirstGroupsResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"account_user",storageKey:null,args:null,concreteType:"User",plural:!1,selections:[c]}]},{kind:"LinkedField",alias:null,name:"groups",storageKey:null,args:null,concreteType:"Group",plural:!0,selections:[{kind:"FragmentSpread",name:"WorkGalahadGroupFollowButton_group",args:null}]}]}]},operation:{kind:"Operation",name:"AddSeeFirstGroupsMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"add_see_first_groups",storageKey:null,args:b,concreteType:"AddSeeFirstGroupsResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"account_user",storageKey:null,args:null,concreteType:"User",plural:!1,selections:[c,d]}]},{kind:"LinkedField",alias:null,name:"groups",storageKey:null,args:null,concreteType:"Group",plural:!0,selections:[d,{kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"is_viewer_member",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"subscribe_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"secondary_subscribe_status",args:null,storageKey:null},{kind:"ScalarField",alias:null,name:"can_be_prioritized_in_feed",args:null,storageKey:null}]}]}]},params:{operationKind:"mutation",name:"AddSeeFirstGroupsMutation",id:"2800855330002684",text:null,metadata:{}}}}();e.exports=a},null);
__d("BookmarkAddToFavoritesMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"data",type:"BookmarkAddToFavoritesData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"data"}],c={kind:"InlineFragment",type:"Group",selections:[{kind:"ScalarField",alias:null,name:"has_viewer_favorited",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"BookmarkAddToFavoritesMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"bookmark_add_to_favorites",storageKey:null,args:b,concreteType:"BookmarkAddToFavoritesResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmark",storageKey:null,args:null,concreteType:"Bookmark",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmarked_node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c]}]}]}]},operation:{kind:"Operation",name:"BookmarkAddToFavoritesMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"bookmark_add_to_favorites",storageKey:null,args:b,concreteType:"BookmarkAddToFavoritesResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmark",storageKey:null,args:null,concreteType:"Bookmark",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmarked_node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,c]},d]}]}]},params:{operationKind:"mutation",name:"BookmarkAddToFavoritesMutation",id:"2027213304008924",text:null,metadata:{}}}}();e.exports=a},null);
__d("BookmarkRemoveFromFavoritesMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"data",type:"BookmarkRemoveFromFavoritesData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"data"}],c={kind:"InlineFragment",type:"Group",selections:[{kind:"ScalarField",alias:null,name:"has_viewer_favorited",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"BookmarkRemoveFromFavoritesMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"bookmark_remove_from_favorites",storageKey:null,args:b,concreteType:"BookmarkRemoveFromFavoritesResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmark",storageKey:null,args:null,concreteType:"Bookmark",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmarked_node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[c]}]}]}]},operation:{kind:"Operation",name:"BookmarkRemoveFromFavoritesMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"bookmark_remove_from_favorites",storageKey:null,args:b,concreteType:"BookmarkRemoveFromFavoritesResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmark",storageKey:null,args:null,concreteType:"Bookmark",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"bookmarked_node",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null},d,c]},d]}]}]},params:{operationKind:"mutation",name:"BookmarkRemoveFromFavoritesMutation",id:"2034250296596205",text:null,metadata:{}}}}();e.exports=a},null);
__d("RemoveSeeFirstGroupsMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"RemoveSeeFirstGroupsData!",defaultValue:null}],b=[{kind:"Variable",name:"data",variableName:"input"}],c={kind:"LinkedField",alias:null,name:"see_first_groups",storageKey:null,args:null,concreteType:"SeeFirstGroupsConnection",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"count",args:null,storageKey:null}]},d={kind:"ScalarField",alias:null,name:"has_viewer_marked_see_first",args:null,storageKey:null},e={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null};return{kind:"Request",fragment:{kind:"Fragment",name:"RemoveSeeFirstGroupsMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"remove_see_first_groups",storageKey:null,args:b,concreteType:"RemoveSeeFirstGroupsResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"account_user",storageKey:null,args:null,concreteType:"User",plural:!1,selections:[c]}]},{kind:"LinkedField",alias:null,name:"groups",storageKey:null,args:null,concreteType:"Group",plural:!0,selections:[d]}]}]},operation:{kind:"Operation",name:"RemoveSeeFirstGroupsMutation",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"remove_see_first_groups",storageKey:null,args:b,concreteType:"RemoveSeeFirstGroupsResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"account_user",storageKey:null,args:null,concreteType:"User",plural:!1,selections:[c,e]}]},{kind:"LinkedField",alias:null,name:"groups",storageKey:null,args:null,concreteType:"Group",plural:!0,selections:[d,e]}]}]},params:{operationKind:"mutation",name:"RemoveSeeFirstGroupsMutation",id:"3379867465418460",text:null,metadata:{}}}}();e.exports=a},null);
__d("UpdateSeeFirstGroupsMutation.graphql",[],function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"input",type:"UpdateSeeFirstGroupsData!",defaultValue:null}],b=[{kind:"LinkedField",alias:null,name:"update_see_first_groups",storageKey:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"UpdateSeeFirstGroupsResponsePayload",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"groups",storageKey:null,args:null,concreteType:"Group",plural:!0,selections:[{kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null}]}]}];return{kind:"Request",fragment:{kind:"Fragment",name:"UpdateSeeFirstGroupsMutation",type:"Mutation",metadata:null,argumentDefinitions:a,selections:b},operation:{kind:"Operation",name:"UpdateSeeFirstGroupsMutation",argumentDefinitions:a,selections:b},params:{operationKind:"mutation",name:"UpdateSeeFirstGroupsMutation",id:"2415092155225059",text:null,metadata:{}}}}();e.exports=a},null);
__d("Spotlight",["csx","cx","Arbiter","ArbiterMixin","DOM","JSXDOM","Layer","LayerAutoFocus","LayerButtons","LayerTabIsolation","ModalLayer","Vector","classWithMixins","joinClasses","mixin"],function(a,b,c,d,e,f,g,h){a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(c,d){c=a.call(this,c,d)||this;c.stageMinSize=new(b("Vector"))(0,0);c.stagePadding=new(b("Vector"))(0,0);return c}var d=c.prototype;d._buildWrapper=function(a,c){a=b("joinClasses")("_n8"+(a.wash==="dark"||!a.wash?" _3qx":"")+(a.wash==="xui"?" _4-hy":""),a.rootClassName);return b("JSXDOM").div({className:a},b("JSXDOM").div({className:"_n9"},c))};d._getDefaultBehaviors=function(){return a.prototype._getDefaultBehaviors.call(this).concat([i,b("LayerAutoFocus"),b("LayerButtons"),b("LayerTabIsolation"),b("ModalLayer")])};d.getContentRoot=function(){this._content||(this._content=b("DOM").find(this.getRoot(),"div._n3"));return this._content};d.configure=function(a){a.stageMinSize&&(this.stageMinSize=a.stageMinSize),a.stagePadding&&(this.stagePadding=a.stagePadding)};d.onContentLoaded=function(){this.inform("content-load")};d.updatePermalink=function(a){this.inform("permalinkchange",a)};return c}(b("classWithMixins")(b("Layer"),b("mixin")(b("ArbiterMixin"))));Object.assign(a.prototype,{stageMinSize:null,stagePadding:null});var i=function(){"use strict";function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe(["show","hide"],function(a,c){a==="show"?b("Arbiter").inform("layer_shown",{type:"Spotlight"}):b("Arbiter").inform("layer_hidden",{type:"Spotlight"})})};c.disable=function(){this._subscription.unsubscribe(),this._subscription=null};return a}();Object.assign(i.prototype,{_subscription:null});e.exports=a},null);
__d("Spotlight.react",["LayerAutoFocusReact","LayerHideOnBlur","LayerHideOnEscape","LayerRefocusOnHide","ReactLayer","Spotlight","prop-types"],function(a,b,c,d,e,f){c=b("ReactLayer").createClass({propTypes:{causalElement:(a=b("prop-types")).instanceOf(HTMLElement),onHide:a.func,rootClassName:a.string,shown:a.bool,wash:a.oneOf(["light","xui","dark"])},getDefaultEnabledBehaviors:function(){return{hideOnBlur:b("LayerHideOnBlur"),hideOnEscape:b("LayerHideOnEscape"),refocusOnHide:b("LayerRefocusOnHide"),autoFocus:b("LayerAutoFocusReact")}},createLayer:function(a){var c=this.enumerateBehaviors(this.props.behaviors);c={addedBehaviors:c,rootClassName:this.props.rootClassName,wash:this.props.wash};c=new(b("Spotlight"))(c,a);c.setCausalElement(this.props.causalElement);c.conditionShow(this.props.shown);this.props.onBeforeHide&&c.subscribe("beforehide",this.props.onBeforeHide);this.props.onHide&&c.subscribe("hide",this.props.onHide);return c},receiveProps:function(a){this.layer&&(this.layer.setCausalElement(a.causalElement),this.layer.conditionShow(a.shown))}});e.exports=c},null);
__d("AddSeeFirstGroupsMutation",["RelayModern","AddSeeFirstGroupsMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("AddSeeFirstGroupsMutation.graphql");function a(a,b,c){return h(a,babelHelpers["extends"]({mutation:i,variables:{input:{new_see_first_group_ids:{group_ids:b.groupIDs}}}},c))}e.exports={submit:a}},null);
__d("BookmarkAddToFavoritesMutation",["RelayModern","BookmarkAddToFavoritesMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("BookmarkAddToFavoritesMutation.graphql");function a(a,b,c){return h(a,{mutation:i,variables:b,onCompleted:c&&c.onSuccess,onError:c&&c.onError})}e.exports={submit:a}},null);
__d("BookmarkRemoveFromFavoritesMutation",["RelayModern","BookmarkRemoveFromFavoritesMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("BookmarkRemoveFromFavoritesMutation.graphql");function a(a,b,c){return h(a,{mutation:i,variables:b,onCompleted:c&&c.onSuccess,onError:c&&c.onError})}e.exports={submit:a}},null);
__d("RemoveSeeFirstGroupsMutation",["RelayModern","RemoveSeeFirstGroupsMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("RemoveSeeFirstGroupsMutation.graphql");function a(a,b,c){return h(a,babelHelpers["extends"]({mutation:i,variables:{input:{removed_see_first_group_ids:{group_ids:b.groupIDs}}}},c))}e.exports={submit:a}},null);
__d("UpdateSeeFirstGroupsMutation",["RelayModern","UpdateSeeFirstGroupsMutation.graphql"],function(a,b,c,d,e,f){"use strict";var g,h=b("RelayModern").commitMutation;b("RelayModern").graphql;var i=g!==void 0?g:g=b("UpdateSeeFirstGroupsMutation.graphql");function a(a,b,c){return h(a,{mutation:i,variables:b,onCompleted:c&&c.onSuccess,onError:c&&c.onError})}e.exports={submit:a}},null);
__d("WorkGalahadActions",["errorCode","fbt","AddSeeFirstGroupsMutation","Arbiter","BookmarkAddToFavoritesMutation","BookmarkRemoveFromFavoritesMutation","ClientIDs","CurrentUser","FBLogger","RelayFBEnvironment","RemoveSeeFirstGroupsMutation","UpdateSeeFirstGroupsMutation","cometPushToast"],function(a,b,c,d,e,f,g,h){"use strict";var i=b("ClientIDs").getNewClientID,j=b("cometPushToast").cometPushErrorToast,k=b("cometPushToast").cometPushToast;function l(){b("Arbiter").inform("workGalahad/shortcutsEdited")}e.exports={pinGroup:function(a){b("BookmarkAddToFavoritesMutation").submit(b("RelayFBEnvironment"),{data:{client_mutation_id:i(),actor_id:b("CurrentUser").getID(),favorited_bookmark_id:a,source:"other"}},{onSuccess:function(){k({message:h._("This group has been pinned to the top of your groups list.")}),l()},onError:function(a){var c,d;a!=null&&b("FBLogger")("gemini_groups").catching(a).warn("Failed to pin group");(a==null?void 0:(c=a.source)==null?void 0:c.code)===1385003?c=h._("You already have the maximum number of shortcuts."):(a==null?void 0:(d=a.source)==null?void 0:d.code)!=null?c=a.source.description:c=h._("There was an issue pinning this group.");c!=null&&j({message:c})}})},unpinGroup:function(a){b("BookmarkRemoveFromFavoritesMutation").submit(b("RelayFBEnvironment"),{data:{client_mutation_id:i(),actor_id:b("CurrentUser").getID(),removed_bookmark_id:a,source:"other"}},{onSuccess:function(){k({message:h._("This group was unpinned from the top of your groups list.")}),l()},onError:function(a){a!=null&&b("FBLogger")("gemini_groups").catching(a).warn("Failed to unpin group"),j({message:h._("There was an issue unpinning this group.")})}})},updateSeeFirstGroups:function(a){b("UpdateSeeFirstGroupsMutation").submit(b("RelayFBEnvironment"),{input:{updated_see_first_group_ids:{group_ids:a}}},{onSuccess:l})},addSeeFirstGroups:function(a){b("AddSeeFirstGroupsMutation").submit(b("RelayFBEnvironment"),{groupIDs:a},{onCompleted:l})},removeSeeFirstGroups:function(a){b("RemoveSeeFirstGroupsMutation").submit(b("RelayFBEnvironment"),{groupIDs:a},{onCompleted:l})}}},null);
__d("CrossWindowEventEmitter",["CacheStorage","EventEmitter","FBJSON"],function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(c,a);function c(c){var d;d=a.call(this)||this;d.$CrossWindowEventEmitter2=c;d.$CrossWindowEventEmitter1=new(b("CacheStorage"))("localstorage",c+":");d.$CrossWindowEventEmitter1.addValueChangeCallback(function(c,e,f){e=c.split(":")[1];try{c=b("FBJSON").parse(f)}catch(a){c=void 0}if(c&&c.__v){(f=a.prototype.emit).call.apply(f,[babelHelpers.assertThisInitialized(d),e].concat(c.__v))}});return d}var d=c.prototype;d.emit=function(b){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];this.emitRemote.apply(this,[b].concat(e));(c=a.prototype.emit).call.apply(c,[this,b].concat(e))};d.emitRemote=function(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];this.$CrossWindowEventEmitter1.set(a,c)};return c}(b("EventEmitter"));e.exports=a},null);
__d("incognito",["regeneratorRuntime","Promise","UserAgent","WebStorage","gkx"],function(a,b,c,d,e,f){"use strict";var g;function a(){var a;return b("regeneratorRuntime").async(function(c){while(1)switch(c.prev=c.next){case 0:a=window.RequestFileSystem||window.webkitRequestFileSystem;if(!a){c.next=3;break}return c.abrupt("return",new(b("Promise"))(function(b){return a(window.TEMPORARY,10,function(){return b(!1)},function(){return b(!0)})}));case 3:if(!(b("UserAgent").isBrowser("IE >= 10")||b("UserAgent").isBrowser("Edge"))){c.next=5;break}return c.abrupt("return",!window.indexedDB);case 5:if(!b("UserAgent").isBrowser("Firefox >= 16")){c.next=7;break}return c.abrupt("return",new(b("Promise"))(function(a){var b=window.indexedDB.open("__test__");b.onsuccess=function(){return a(!1)};b.onerror=function(b){b.preventDefault(),a(!0)}}));case 7:if(!(b("gkx")("676917")&&(b("UserAgent").isPlatform("iOS")&&b("UserAgent").isBrowser("Safari >= 10.3")||b("UserAgent").isPlatform("Mac OS X")&&b("UserAgent").isBrowser("Safari >= 11.1")))){c.next=18;break}c.prev=8;window.openDatabase("sid","1.0","",0);c.next=16;break;case 12:c.prev=12;c.t0=c["catch"](8);if(!(c.t0.name==="SecurityError")){c.next=16;break}return c.abrupt("return",!0);case 16:c.next=20;break;case 18:if(!b("UserAgent").isBrowser("Safari")){c.next=20;break}return c.abrupt("return",!(g||(g=b("WebStorage"))).getLocalStorage());case 20:return c.abrupt("return",!1);case 21:case"end":return c.stop()}},null,this,[[8,12]])}e.exports=a},null);