if (self.CavalryLogger) { CavalryLogger.start_js(["7pRQT"]); }

__d("HostnameRewriter",["URI","isFacebookURI","lowerFacebookDomain"],function(a,b,c,d,e,f){var g,h=function(a){return String(a).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},i=null,j=null,k=new RegExp("^(.*(?:channel-proxy|edge-chat).*)\\.(facebook\\.com)$","i"),l=new RegExp("facebook\\.com$"),m=new RegExp("^www\\.(|.*\\.)facebook\\.com$"),n=null,o="facebook.com",p=!1,q=!1,r=new RegExp("facebookcorewwwi\\.onion$"),s=new RegExp("facebookcorewwwi\\.testonion$"),t=new RegExp("fbcdn\\.net$"),u="fbcdn23dssr3jqnq.onion",v="fbcdn23dssr3jqnq.testonion",w=new RegExp("^www\\."),x=new RegExp("(^|\\.)(facebook\\.com|workplace\\.com)$","i");function y(a){i=null;a?a="(^|\\.)":a="^";n=a+h(o)+"$";j=null}function z(){if(n==null)return null;if(i)return i;i=new RegExp(n,"i");return i}function A(){if(j)return j;j=new RegExp("(^|\\.)("+h(o)+"|facebook\\.com)$","i");return j}function B(){return function(a){a=new(g||(g=b("URI")))(a);var c=k.exec(a.getDomain());if(!c||c.length<3)return a;a.setDomain("edge-chat."+c[2]);return a}}function C(){return function(a){a=new(g||(g=b("URI")))(a);A().test(a.getDomain())&&a.setProtocol("https");return a}}function D(){return function(a){a=new(g||(g=b("URI")))(a);var c=a.getDomain();A().test(c)&&o!=null?a.setDomain(c.replace(l,o)):p&&c!==null?a.setDomain(c.replace(t,u)):q&&c!==null&&a.setDomain(c.replace(t,v));return a}}function E(){return function(a){a=new(g||(g=b("URI")))(a);var c=a.getDomain();m.test(c)&&a.setDomain(c.replace(w,"web."));return a}}a={registerFacebookFilters:function(a,c){o=a,p=o!=null&&r.test(o),q=o!=null&&s.test(o),y(c),b("isFacebookURI").setRegex(z()),(g||(g=b("URI"))).registerFilter(B()),g.registerFilter(C()),g.registerFilter(D()),b("lowerFacebookDomain").setDomain(o)},registerInternetDotOrgFilters:function(a,c){o=a,(g||(g=b("URI"))).registerFilter(E())},treatWorkplaceAsFacebookURI:function(){b("isFacebookURI").setRegex(x)}};e.exports=a},null);
__d("CometRouterRouteContext",["React"],function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c},null);
__d("useCurrentRoute",["CometRouterRouteContext","React"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useContext;function a(){return g(b("CometRouterRouteContext"))}e.exports=a},null);
__d("CometVisibilityUserActivityMonitor",["Visibility"],function(a,b,c,d,e,f){"use strict";a={isUserActive:function(){return b("Visibility").isHidden()===!1},subscribe:function(a){var c,d=(c=b("Visibility")).addListener(c.HIDDEN,function(){return a&&a(!1)}),e=c.addListener(c.VISIBLE,function(){return a&&a(!0)});return function(){d&&d.remove(),e&&e.remove()}}};e.exports=a},null);
__d("getIntersectionMarginFromViewportMargin",[],function(a,b,c,d,e,f){"use strict";var g=new Map();function a(a){var b=g.get(a);b==null&&(b={bottom:a.bottom*-1,left:a.left*-1,right:a.right*-1,top:a.top*-1},g.set(a,b));return b}e.exports=a},null);
__d("intersectionObserverEntryIsIntersecting",[],function(a,b,c,d,e,f){"use strict";function a(a){return a.isIntersecting!=null?a.isIntersecting:a.intersectionRatio>0||a.intersectionRect&&(a.intersectionRect.height>0||a.intersectionRect.width>0)}e.exports=a},null);
__d("DOMRectReadOnly",[],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.bottom=0,this.height=0,this.left=0,this.right=0,this.top=0,this.width=0,this.x=0,this.y=0}a.fromRect=function(b){b=b||{height:0,width:0,x:0,y:0};var c=b.height,d=b.width,e=b.x;b=b.y;var f=new a();f.x=e;f.y=b;f.width=d;f.height=c;f.top=b;f.bottom=b+c;f.right=e+d;f.left=e;return f};return a}();b="DOMRectReadOnly"in window;c=b?window.DOMRectReadOnly.fromRect:void 0;d=!!c&&"function"===typeof c;e.exports=d?window.DOMRectReadOnly:a},null);
/**
 * License: https://www.facebook.com/legal/license/2v2plzJQoTQ/
 */
__d("IntersectionObserverFallback",["FBLogger","TimeSlice","containsNode","getElementRect","performanceNow","setInterval","throttle"],function(a,b,c,d,e,f){"use strict";var g,h=document.documentElement,i=[];function j(a,b){var c=Math.max(a.top,b.top),d=Math.min(a.bottom,b.bottom),e=Math.max(a.left,b.left);a=Math.min(a.right,b.right);b=a-e;var f=d-c;return b>=0&&f>=0?{top:c,bottom:d,left:e,right:a,width:b,height:f}:void 0}function k(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}var l=function(a){this.time=a.time;this.target=a.target;this.rootBounds=a.rootBounds;this.boundingClientRect=a.boundingClientRect;this.intersectionRect=a.intersectionRect||k();this.isIntersecting=!!a.intersectionRect;a=this.boundingClientRect;a=a.width*a.height;var b=this.intersectionRect.width*this.intersectionRect.height;a?this.intersectionRatio=Number((b/a).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0};a=function(){function a(a,c){var d=this;this.THROTTLE_TIMEOUT=100;this.POLL_INTERVAL=null;this.$12=b("TimeSlice").guard(b("throttle")(function(){var a=d.$14(),c=a?d.$15():k();d.$6.forEach(function(e){var f=e.element,h=b("getElementRect")(f),i=d.$16(f),j=e.entry,k=a&&i&&!d.$2&&d.$17(f,c);e.entry=new l({intersectionRect:k,target:f,time:(g||(g=b("performanceNow")))(),boundingClientRect:h,rootBounds:c});k=e.entry;!j?d.$7.push(k):a&&i?d.$18(j,k)&&d.$7.push(k):j&&j.isIntersecting&&d.$7.push(k)});d.$7.length&&d.$1(d.takeRecords(),d)},this.THROTTLE_TIMEOUT),"IntersectionObserverFallback: checkForIntersections");this.$2=!1;try{}catch(a){this.$2=!0}c=(c=c)!=null?c:{};this.$1=a;this.$4=!1;this.$6=[];this.$7=[];this.$8=this.$9(c.rootMargin);this.thresholds=this.$10(c.threshold);this.root=(a=c.root)!=null?a:null;this.rootMargin=this.$8.map(function(a){return a.value+a.unit}).join(" ")}var c=a.prototype;c.$10=function(a){a=(a=a)!=null?a:[0];Array.isArray(a)||(a=[a]);return a.sort().filter(function(a,b,c){return a!==c[b-1]})};c.$9=function(a){a=a||"0px";a=a.split(/\s+/).map(function(a){a=/^(-?\d*\.?\d+)(px|%)$/.exec(a);return{value:parseFloat(a[1]),unit:a[2]}});a[1]=a[1]||a[0];a[2]=a[2]||a[0];a[3]=a[3]||a[1];return a};c.$11=function(){this.$4||(this.$4=!0,this.$12(),this.POLL_INTERVAL?this.$5=b("setInterval")(this.$12,this.POLL_INTERVAL):(window.addEventListener("resize",this.$12,!0),document.addEventListener("scroll",this.$12,!0),"MutationObserver"in window&&(this.$3=new MutationObserver(this.$12),this.$3.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))};c.$13=function(){this.$4&&(this.$4=!1,this.$5&&(clearInterval(this.$5),this.$5=void 0),window.removeEventListener("resize",this.$12,!0),document.removeEventListener("scroll",this.$12,!0),this.$3&&(this.$3.disconnect(),this.$3=void 0))};c.$17=function(a,c){var d=window.getComputedStyle(a);if(!d||d.display=="none")return void 0;d=b("getElementRect")(a);d=d;a=a.parentElement;var e=!1;while(!e){var f,g=null;f=((f=a)==null?void 0:f.nodeType)==1?window.getComputedStyle(a):{};if(f.display=="none")return void 0;a==this.root||a==document?(e=!0,g=c):a!=document.body&&a!=document.documentElement&&f.overflow!="visible"&&(g=b("getElementRect")(a));if(g){d=j(g,d);if(!d)break}a=a&&a.parentElement}return d};c.$15=function(){var a;if(this.root)a=b("getElementRect")(this.root);else{var c=document.documentElement,d=document.body,e=(c==null?void 0:c.clientWidth)||(d==null?void 0:d.clientWidth);c=(c==null?void 0:c.clientHeight)||(d==null?void 0:d.clientHeight);a={top:0,left:0,right:e,width:e,bottom:c,height:c}}return this.$19(a)};c.$19=function(a){var b=this.$8.map(function(b,c){return b.unit=="px"?b.value:b.value*(c%2?a.width:a.height)/100});b={top:a.top-b[0],right:a.right+b[1],bottom:a.bottom+b[2],left:a.left-b[3],width:0,height:0};b.width=b.right-b.left;b.height=b.bottom-b.top;return b};c.$18=function(a,b){a=a&&a.isIntersecting?a.intersectionRatio||0:-1;b=b.isIntersecting?b.intersectionRatio||0:-1;if(a===b)return!1;for(var c=0;c<this.thresholds.length;c++){var d=this.thresholds[c];if(d==a||d==b||d<a!==d<b)return!0}return!1};c.$14=function(){return!this.root||b("containsNode")(h,this.root)};c.$16=function(a){var c=this.root||h;return b("containsNode")(c,a)};c.$20=function(){i.indexOf(this)<0&&i.push(this)};c.$21=function(){var a=i.indexOf(this);a!=-1&&i.splice(a,1)};c.observe=function(a){if(!a){b("FBLogger")("io").warn("IntersectionObserverFallback target does not exist");return}if(this.$6.some(function(b){return b.element==a}))return;this.$20();this.$6.push({element:a,entry:null});this.$11();this.$12()};c.unobserve=function(a){this.$6=this.$6.filter(function(b){return b.element!=a}),this.$6.length||(this.$13(),this.$21())};c.disconnect=function(){this.$6=[],this.$13(),this.$21()};c.takeRecords=function(){var a=this.$7.slice();this.$7=[];return a};return a}();e.exports=a},null);
__d("IntersectionObserver",["IntersectionObserverFallback"],function(a,b,c,d,e,f){"use strict";a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype;e.exports=a?window.IntersectionObserver:b("IntersectionObserverFallback")},null);
__d("observeIntersection",["invariant","ErrorGuard","IntersectionObserver"],function(a,b,c,d,e,f,g){"use strict";var h,i=typeof WeakMap==="function",j={__noRoot:!0},k=i?new WeakMap():new Map();function l(a){var b=a.threshold;if(Array.isArray(b)){var c={};b.forEach(function(a){c[String(a)]=!0});b=Object.keys(c).sort()}var d=babelHelpers["extends"]({},a,{threshold:b}),e={};Object.keys(d).sort().forEach(function(a){e[a]=d[a]});return JSON.stringify(e)}function a(a,c,d){d===void 0&&(d={});var e=l({rootMargin:d.rootMargin,threshold:d.threshold}),f=d.root||j,m=k.get(f);m==null&&(m={},k.set(f,m));var n=m[e];if(n==null){d=new(b("IntersectionObserver"))(function(a){a.forEach(function(a){n!=null||g(0,2439);var c=n.targetToCallbacksMap.get(a.target);c&&c.length>0&&c.forEach(function(c){(h||(h=b("ErrorGuard"))).applyWithGuard(c,null,[a],{name:"observeIntersection"})})})},d);n={intersectionObserver:d,referenceCount:0,targetToCallbacksMap:i?new WeakMap():new Map()};m[e]=n}d=n.targetToCallbacksMap.get(a);d==null&&(n.intersectionObserver.observe(a),n.referenceCount+=1,d=[],n.targetToCallbacksMap.set(a,d));d.push(c);var o=!1;return{remove:function(){if(o)return;var b=n.targetToCallbacksMap.get(a);b!=null||g(0,2440);if(b.length===1)n.intersectionObserver.unobserve(a),n.targetToCallbacksMap["delete"](a),n.referenceCount-=1;else{var d=b.indexOf(c);d!==-1||g(0,2441);b.splice(d,1)}n.referenceCount===0&&(m!=null||g(0,2442),delete m[e],Object.keys(m).length===0&&k["delete"](f));o=!0}}}e.exports=a},null);
__d("useIntersectionObserver",["DOMRectReadOnly","ExecutionEnvironment","JSScheduler","React","observeIntersection","useDynamicCallbackDANGEROUS"],function(a,b,c,d,e,f){"use strict";d=b("React");var g=d.useCallback,h=d.useLayoutEffect,i=d.useRef,j={bottom:0,left:0,right:0,top:0},k=b("DOMRectReadOnly").fromRect(),l={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0};function m(a){var b;if(a==null)b=j;else if(typeof a==="string")return a;else typeof a==="number"?b={bottom:a,left:a,right:a,top:a}:b=babelHelpers["extends"]({},j,a);a=b;b=a.bottom;var c=a.left,d=a.right;a=a.top;return a+"px "+d+"px "+b+"px "+c+"px"}function n(a,c,d,e){var f=c.root,g=c.rootMargin,h=c.threshold;f=f===null?null:f();var i=a==null||a.element!==d||a.onIntersect!==e||a.observedRoot!==f||a.rootMargin!==g||a.threshold!==h;if(i){a&&a.subscription.remove();i=b("observeIntersection")(d,e,{root:f,rootMargin:m(g),threshold:h});return babelHelpers["extends"]({},c,{element:d,observedRoot:f,onIntersect:e,subscription:i})}return a}function a(a,c){var d=c.root,e=c.rootMargin,f=c.threshold,j=i(null),m=i(null),o=i(null),p=i(null),q=i(!1),r=b("useDynamicCallbackDANGEROUS")(a);c=g(function(a){if(j.current===a)return;if(j.current!=null&&a==null){p.current!=null&&b("JSScheduler").cancelCallback(p.current);var c=j.current;b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate,function(){p.current=b("JSScheduler").defer(function(){j.current===null&&q.current===!1&&r({boundingClientRect:l,intersectionRatio:0,intersectionRect:l,isIntersecting:!1,isVisible:!1,rootBounds:k,target:c,time:Date.now()}),p.current=null})})}j.current=a;m.current!=null&&(m.current.subscription.remove(),m.current=null);b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate,function(){o.current!=null&&b("JSScheduler").cancelCallback(o.current),o.current=b("JSScheduler").defer(function(){j.current!=null&&(m.current=n(m.current,{root:d,rootMargin:e,threshold:f},j.current,r)),o.current=null})})},[r,d,e,f]);h(function(){b("JSScheduler").runWithPriority(b("JSScheduler").priorities.unstable_Immediate,function(){o.current!=null&&b("JSScheduler").cancelCallback(o.current),o.current=b("JSScheduler").defer(function(){j.current!=null&&(m.current=n(m.current,{root:d,rootMargin:e,threshold:f},j.current,r)),o.current=null})});return function(){m.current!=null&&(m.current.subscription.remove(),m.current=null),o.current!=null&&(b("JSScheduler").cancelCallback(o.current),o.current=null)}},[r,d,e,f]);h(function(){q.current=!1;return function(){q.current=!0}},[]);return c}function c(a,b,c){return function(a){}}f=b("ExecutionEnvironment").canUseDOM?a:c;e.exports=f},null);
__d("useViewportDuration",["CometViewportMarginsContext","CometVisibilityUserActivityMonitor","HiddenSubtreePassiveContext","React","Run","getIntersectionMarginFromViewportMargin","getStyleProperty","gkx","intersectionObserverEntryIsIntersecting","useIntersectionObserver","useLayoutEffect_SAFE_FOR_SSR"],function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useCallback,h=a.useContext,i=a.useEffect,j=a.useMemo,k=a.useRef,l=b("CometVisibilityUserActivityMonitor"),m=function(a){if(a.target==null)return null;if(b("getStyleProperty")(a.target,"opacity")==="0")return"TARGET_TRANSPARENT";return b("getStyleProperty")(a.target,"visibility")==="hidden"?"TARGET_HIDDEN":null},n=function(a){return a.boundingClientRect&&(a.boundingClientRect.height===0||a.boundingClientRect.width===0)};c=function(a){var c,d=a.onHidden,e=a.onIntersection,f=a.onVisibilityDurationUpdated,o=a.onVisible,p=a.options;p=p===void 0?{}:p;a=a.threshold;var q=(c=p.hiddenWhenZeroArea)!=null?c:!1,r=(c=p.hiddenWhenCSSStyleHidden)!=null?c:!1,s=(c=p.isEntryInViewport)!=null?c:b("intersectionObserverEntryIsIntersecting"),t=k(null),u=k(!1),v=k(null),w=k(null),x=k(null),y=h(b("HiddenSubtreePassiveContext")),z=p.activityMonitorOverride||l,A=g(function(a){if(!z.isUserActive())return"USER_INACTIVE";if(y.getCurrentState().hidden)return"PUSH_VIEW_HIDDEN";if(y.getCurrentState().backgrounded)return"BACKGROUNDED";if(u.current===!1)return"NOT_IN_VIEWPORT";if(q===!0&&n(a))return"TARGET_SIZE_0";if(r===!0){a=m(a);if(a!==null)return a}return null},[z,y,r,q]),B=g(function(a){return A(a)===null},[A]),C=g(function(a,b,c){var e=t.current!=null;if(!e&&c){var f=Date.now();t.current=f;o!=null&&b!=null&&o({entry:b,visibleTime:f})}else if(e&&!c){e=(f=t.current)!=null?f:0;c=Date.now();if(d!=null){f=a||b&&A(b)||"UNKNOWN";d({entry:b,hiddenReason:f,hiddenTime:c,visibleDuration:c-e,visibleTime:e})}t.current=null}},[A,d,f,o]),D=k(C);b("useLayoutEffect_SAFE_FOR_SSR")(function(){D.current=C},[C]);i(function(){return function(){D.current("COMPONENT_UNMOUNTED",null,!1),v.current!=null&&(v.current(),v.current=null),x.current!=null&&(x.current.remove(),x.current=null),w.current!=null&&(w.current.remove(),w.current=null)}},[]);c=g(function(a){var c=u.current=s(a);e&&e({entry:a,isElementVisible:B(a)});v.current==null?c&&(v.current=z.subscribe(function(b){return D.current("USER_INACTIVE",a,B(a))}),x.current=y.subscribeToChanges(function(b){return D.current(b.hidden?"PUSH_VIEW_HIDDEN":"BACKGROUNDED",a,B(a))}),w.current=b("Run").onBeforeUnload(function(a){D.current("PAGE_UNLOAD",null,!1)},!1)):c||(v.current(),v.current=null,x.current&&(x.current.remove(),x.current=null),w.current!=null&&(w.current.remove(),w.current=null));D.current(null,a,B(a))},[B,z,y,s,e]);var E=h(b("CometViewportMarginsContext"));f=j(function(){return{bottom:E.bottom+1,left:E.left+1,right:E.right+1,top:E.top+1}},[E.bottom,E.left,E.right,E.top]);var F=null;p=(p=p.rootMargin)!=null?p:b("getIntersectionMarginFromViewportMargin")(f);return b("useIntersectionObserver")(c,{root:F,rootMargin:p,threshold:a})};e.exports=c},null);
__d("useVisibilityObserver",["useViewportDuration"],function(a,b,c,d,e,f){"use strict";a=0;c=[0,.25,.5,.75,1];d=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1];var g={EXPENSIVE:d,LITE:a,MODERATE:c};f=function(a){var c=a.onHidden,d=a.onIntersection,e=a.onVisibilityDurationUpdated,f=a.onVisible;a=a.options;return b("useViewportDuration")({onHidden:c,onIntersection:d,onVisibilityDurationUpdated:e,onVisible:f,options:a,threshold:g[(c=a==null?void 0:a.thresholdOverride)!=null?c:"LITE"]})};e.exports=f},null);
__d("BaseModal.react",["requireCond","cr:994756","cr:1088443"],function(a,b,c,d,e,f){"use strict";a=b("cr:1088443")!=null?b("cr:1088443"):b("cr:994756");e.exports=a},null);
__d("useCometPrerenderer",["requireCond","cr:956931"],function(a,b,c,d,e,f){"use strict";e.exports=b("cr:956931")},null);
__d("once",[],function(a,b,c,d,e,f){"use strict";function a(a){var b=g(a);for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b}function g(a){var b=a,c;a=function(){if(b){for(var a=arguments.length,d=new Array(a),e=0;e<a;e++)d[e]=arguments[e];c=b.apply(this,d);b=null}return c};return a}e.exports=a},null);
__d("CometToasterStateManager",["requireCond","CometMaxEnqueuedToastsSitevarConfig","JSScheduler","cr:724654","emptyObject","once","removeFromArray","cr:724655","unrecoverableViolation"],function(a,b,c,d,e,f){"use strict";var g=b("CometMaxEnqueuedToastsSitevarConfig").max;a=function(){function a(){this.$1=0,this.$2=new Map(),this.$3=[],this.$4=[],this.$5=null}var c=a.prototype;c.push=function(a,b){var c="toast-"+this.$1++;b={duration:b,expired:!1,id:c,shown:!1,timer:null,value:a};this.$6({node:b,type:"PUSH"});return c};c.shown=function(a){this.$6({id:a,type:"SHOWN"})};c["delete"]=function(a){this.$6({id:a,type:"DELETE"})};c.expire=function(a){this.$6({id:a,type:"EXPIRE"})};c.hidden=function(a){this.$6({id:a,type:"HIDDEN"})};c.stopTimer=function(a){this.$6({id:a,type:"STOP_TIMER"})};c.resetTimer=function(a){this.$6({id:a,type:"RESET_TIMER"})};c.getState=function(){return Object.fromEntries(this.$2)};c.getEmptyState=function(){return b("emptyObject")};c.addListener=function(a){var c=this;this.$3.push(a);return{remove:b("once")(function(){b("removeFromArray")(c.$3,a)})}};c.$7=function(a){(this.$5==null||a.priority>this.$5.priority)&&(this.$5=a)};c.registerView=function(a,c){var d=this;c===void 0&&(c=1);var e={handler:a,priority:c};this.$4.push(e);this.$7(e);this.$8();return{remove:b("once")(function(){b("removeFromArray")(d.$4,e),d.$5===e&&(d.$5=null,d.$4.forEach(function(a){return d.$7(a)}))})}};c.$6=function(a){var b=this.$2;switch(a.type){case"PUSH":var c=a.node;this.$2=new Map([].concat(Array.from(this.$2),[[c.id,c]]));if(g!==0){c=Array.from(this.$2.values()).filter(function(a){return!a.shown&&!a.expired});if(c.length>g){c=c[0];this["delete"](c.id)}}break;case"SHOWN":if(this.$2.has(a.id)&&!this.$9(a.id).shown){c=babelHelpers["extends"]({},this.$9(a.id),{shown:!0});this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$10(c)]]))}break;case"EXPIRE":if(this.$2.has(a.id)){c=babelHelpers["extends"]({},this.$9(a.id),{expired:!0});this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$11(c)]]));this.$12(c)}break;case"HIDDEN":if(this.$2.has(a.id)){c=this.$9(a.id);(c.shown||c.expired)&&(this.$2=new Map(this.$2),this.$2["delete"](a.id),this.$11(c))}break;case"DELETE":if(this.$2.has(a.id)){c=this.$9(a.id);this.$2=new Map(this.$2);this.$2["delete"](a.id);this.$11(c)}break;case"STOP_TIMER":if(this.$2.has(a.id)&&this.$13(this.$9(a.id))){c=babelHelpers["extends"]({},this.$9(a.id));this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$11(c)]]))}break;case"RESET_TIMER":if(this.$2.has(a.id)&&!this.$13(this.$9(a.id))){c=babelHelpers["extends"]({},this.$9(a.id));this.$2=new Map([].concat(Array.from(this.$2),[[a.id,this.$10(c)]]))}break;default:a.type}b!==this.$2&&this.$8()};c.$8=function(){var a=this;this.$3.forEach(function(a){return b("JSScheduler").scheduleNormalPriCallback(function(){a()})});this.$4.forEach(function(c){return b("JSScheduler").scheduleNormalPriCallback(function(){c.handler(c===a.$5?a.getState():a.getEmptyState())})})};c.$10=function(a){var c=this;a.duration!==null&&a.timer==null&&(a.timer=b("cr:724655")(function(){c.expire(a.id)},a.duration));return a};c.$11=function(a){a.timer!=null&&(b("cr:724654")(a.timer),a.timer=null);return a};c.$12=function(a){var c=this;this.$11(a);var d=a.id;b("cr:724655")(function(){c["delete"](d)},1e3)};c.$13=function(a){return a.timer!=null};c.$9=function(a){a=this.$2.get(a);if(a==null)throw b("unrecoverableViolation")("Toast with given identifier was not found","comet_ui");return a};a.getInstance=function(){a.$14==null&&(a.$14=new a());return a.$14};a.resetInstance_DO_NOT_USE=function(){a.$14=null};return a}();e.exports=a},null);
__d("setElementCanTab",[],function(a,b,c,d,e,f){b=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"tabIndex");var g=b?b.set:function(a){};function a(a,b){var c=a._tabIndexState;if(!c){var d={value:a.tabIndex,canTab:b};a._tabIndexState=d;b||(a.tabIndex=-1);Object.defineProperty(a,"tabIndex",{enumerable:!1,configurable:!0,get:function(){return d.canTab?d.value:-1},set:function(b){d.canTab&&typeof g==="function"&&g.call(a,b),d.value=b}})}else c.canTab!==b&&typeof g==="function"&&(g.call(a,b?c.value:-1),c.canTab=b)}e.exports=a},null);
__d("deferredLoadComponent",["Promise","PromiseAnnotate","react"],function(a,b,c,d,e,f){var g,h=g||b("react"),i={},j={},k=new Map();function l(a,b){k.set(a,b)}function m(a){return k.get(a)}function a(a){var c=m(a);if(c)return c;var d,f=a.getModuleId();function g(){var c=j[f];c||(c=j[f]=new(b("Promise"))(function(b){a.loadImmediately(function(a){delete j[f],d=a,b()})}));return c}function k(){var c=i[f];c||(c=i[f]=new(b("Promise"))(function(b){a.onReady(function(a){d=a,delete i[f],b()})}));return c}function n(c,e){var f=c.loadImmediately;c=babelHelpers.objectWithoutPropertiesLoose(c,["loadImmediately"]);if(!d){d=a.getModuleIfRequired();if(!d){f=f===!0?g():k();b("PromiseAnnotate").setDisplayName(f,n.displayName);throw f}}return h.jsx(d,babelHelpers["extends"]({},c,{ref:e}))}n.displayName="deferredLoadComponent("+a.getModuleId()+")";c=h.forwardRef(n);l(a,c);return c}e.exports=a},null);