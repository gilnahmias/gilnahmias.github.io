if (self.CavalryLogger) { CavalryLogger.start_js(["eCCCr"]); }

__d("EventHandlerUtils",["DataStore"],function(a,b,c,d,e,f){a={introspect:function(a){var c=[];a=a;do{var d=b("DataStore").get(a,"Event.listeners");d&&c.unshift({elementRef:a,handlers:d});a=a.parentNode}while(a!=null);return c}};e.exports=a},null);
__d("Chromedome",["fbt"],function(a,b,c,d,e,f,g){a={start:function(a){if(top!==window||document.domain==null||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;a=g._("Stop!");var b=g._("This is a browser feature intended for developers. If someone told you to copy-paste something here to enable a Facebook feature or \"hack\" someone's account, it is a scam and will give them access to your Facebook account."),c=g._("See {url} for more information.",[g._param("url","https://www.facebook.com/selfxss")]);if(window.chrome||window.safari){var d="font-family:helvetica; font-size:20px; ";[[a,d+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[b,d],[c,d],["",""]].map(function(a){window.setTimeout(console.log.bind(console,"\n%c"+a[0].toString(),a[1]))})}else{a=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];d=(""+b.toString()).match(/.{35}.+?\s+|.+$/g);if(d!=null){b=Math.floor(Math.max(0,(a.length-d.length)/2));for(var e=0;e<a.length||e<d.length;e++){var f=a[e];a[e]=f+new Array(45-f.length).join(" ")+(d[e-b]||"")}}console.log("\n\n\n"+a.join("\n")+"\n\n"+c.toString()+"\n");return}}};e.exports=a},null);
__d("NavigationMetricsEnumJS",[],function(a,b,c,d,e,f){e.exports=Object.freeze({NAVIGATION_START:"navigationStart",UNLOAD_EVENT_START:"unloadEventStart",UNLOAD_EVENT_END:"unloadEventEnd",REDIRECT_START:"redirectStart",REDIRECT_END:"redirectEnd",FETCH_START:"fetchStart",DOMAIN_LOOKUP_START:"domainLookupStart",DOMAIN_LOOKUP_END:"domainLookupEnd",CONNECT_START:"connectStart",CONNECT_END:"connectEnd",SECURE_CONNECTION_START:"secureConnectionStart",REQUEST_START:"requestStart",RESPONSE_START:"responseStart",RESPONSE_END:"responseEnd",DOM_LOADING:"domLoading",DOM_INTERACTIVE:"domInteractive",DOM_CONTENT_LOADED_EVENT_START:"domContentLoadedEventStart",DOM_CONTENT_LOADED_EVENT_END:"domContentLoadedEventEnd",DOM_COMPLETE:"domComplete",LOAD_EVENT_START:"loadEventStart",LOAD_EVENT_END:"loadEventEnd"})},null);
__d("ImageTimingHelper",["Arbiter","BigPipe","URI"],function(a,b,c,d,e,f){var g,h={},i={};function j(a){var c=a.lid,d=a.pagelet,e=a.images,f=a.timeslice,j=a.ts,k=h[c];k||(k=h[c]=[]);e.forEach(function(a){try{var c=new(g||(g=b("URI")))(a);a=c.setFragment("").toString()}catch(a){return}if(i[a])return;i[a]=!0;k.push({pagelet:d,timeslice:f,ts:j,uri:a})})}b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,b){b.lid&&b.lid!=="0"&&b.arbiter.subscribe("images_displayed",function(a,b){j(b)})});b("Arbiter").subscribe("MRenderingScheduler/images_displayed",function(a,b){j(b)});e.exports.getImageTimings=function(a){return h[a]||[]}},null);
__d("NavigationTimingHelper",["NavigationMetricsEnumJS","forEachObject","performance"],function(a,b,c,d,e,f){var g;function h(a,c){var d={};b("forEachObject")(b("NavigationMetricsEnumJS"),function(b){var e=c[b];e&&(d[b]=e+a)});return d}var i={getAsyncRequestTimings:function(a){if(!a||!(g||(g=b("performance"))).timing||!(g||(g=b("performance"))).getEntriesByName)return void 0;a=(g||(g=b("performance"))).getEntriesByName(a);return a.length===0?void 0:h(g.timing.navigationStart,a[0])},getPerformanceNavigationTiming:function(){if(!(g||(g=b("performance"))).timing||!(g||(g=b("performance"))).getEntriesByType)return{};var a=(g||(g=b("performance"))).getEntriesByType("navigation");return!a.length?{}:h(g.timing.navigationStart,a[0])},getNavTimings:function(){if(!(g||(g=b("performance"))).timing)return void 0;var a=babelHelpers["extends"]({},h(0,(g||(g=b("performance"))).timing),i.getPerformanceNavigationTiming());return h(0,a)}};e.exports=i},null);
__d("PageletEventsHelper",["Arbiter","PageletEventConstsJS"],function(a,b,c,d,e,f){var g="BigPipe/init",h="MRenderingScheduler/init",i="pagelet_event",j="phase_begin",k={},l=[],m=!1;function n(){return{pagelets:{},categories:{},phase_start:{},display_resources:{},all_resources:{}}}function o(a,b,c,d){k[d]==void 0&&(k[d]=n()),k[d].pagelets[b]==void 0&&(k[d].pagelets[b]={}),k[d].pagelets[b][a]=c}function p(a){a.subscribe(i,function(a,c){var d=c.event,e=c.ts;a=c.id;var f=c.lid,g=c.phase,h=c.categories,i=c.allResources;c=c.displayResources;o(d,a,e,f);var j=k[f],m=j.pagelets[a];d===b("PageletEventConstsJS").ARRIVE_END&&(m.phase=g,j.all_resources[a]=i,j.display_resources[a]=c);(d===b("PageletEventConstsJS").ONLOAD_END||d===b("PageletEventConstsJS").DISPLAY_END)&&h&&h.forEach(function(a){j.categories[a]==void 0&&(j.categories[a]={}),j.categories[a][d]=e});for(var m=0,g=l.length;m<g;m++)l[m](a,d,e,f)}),a.subscribe(j,function(a,b){k[b.lid].phase_start[b.phase]=b.ts})}a={init:function(){if(m)return;b("Arbiter").subscribe(g,function(a,b){a=b.lid;b=b.arbiter;k[a]=n();p(b)});b("Arbiter").subscribe(h,function(a,b){a=b.lid;b=b.arbiter;k[a]=n();p(b)});m=!0},getMetrics:function(a){return k[a]?JSON.parse(JSON.stringify(k[a])):null},subscribeToPageletEvents:function(a){l.push(a);return{remove:function(){l.splice(l.indexOf(a),1)}}}};e.exports=a},null);
__d("PerfXFlusher",["invariant","Banzai"],function(a,b,c,d,e,f,g){var h="perfx_custom_logger_endpoint",i=["perfx_page","perfx_page_type","lid"];function j(a){i.forEach(function(b){return g(b in a,'PerfXFlusher: Field "%s" missing in the PerfX payload',b)})}a={flush:function(a){j(a),b("Banzai").post(h,a,{signal:!0})},registerToSendWithBeacon:function(a){b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){var c=a();c.length&&b("Banzai").post(h,c,{delay:b("Banzai").VITAL_WAIT})})}};e.exports=a},null);
__d("pageLoadedViaSWCache",[],function(a,b,c,d,e,f){function a(){return self.__SW_CACHE__===1}e.exports=a},null);
__d("PerfXLogger",["ArtilleryOnUntilOffLogging","BanzaiODS","DataAttributeUtils","NavigationMetrics","NavigationTimingHelper","PerfXFlusher","PerfXSharedFields","QuicklingRefreshOverheadUtil","VisibilityListener","forEachObject","pageLoadedViaSWCache","performanceAbsoluteNow","setTimeoutAcrossTransitions"],function(a,b,c,d,e,f){var g,h={},i={},j=65*1e3,k=["e2e","tti","all_pagelets_displayed","all_pagelets_loaded","artillery_disable_time"],l={},m={_listenersSetUp:!1,_uploadEarly:!1,_alreadyUploadedEarly:!1,_setupListeners:function(){var a=this;if(this._listenersSetUp)return;this._subscribeToNavigationMetrics();b("PerfXFlusher").registerToSendWithBeacon(function(){var c=[];b("forEachObject")(h,function(b,d){if(!h[d].sent){b=a.getPayload(d,"unload fired");b!=null&&c.push(b)}});h={};return c});this._listenersSetUp=!0},_init:function(a){var b=a.lid;if(b==null)return;this._alreadyUploadedEarly=!1;this._uploadEarly=!!a.upload_perfx_early;delete a.upload_perfx_early;var c=i[b]||[];delete i[b];if(a.sw_controlled_tags){if(navigator.serviceWorker&&navigator.serviceWorker.controller)for(var d=0;d<a.sw_controlled_tags.length;d++)c.push(a.sw_controlled_tags[d]);delete a.sw_controlled_tags}h[b]=babelHelpers["extends"]({tags:new Set(c),sent:!1},a);this._registerTimeoutSendback(b);this._setupListeners()},initWithNavigationMetricsLID:function(a,c){var d=b("NavigationMetrics").getFullPageLoadLid();if(!d)return;this._init(babelHelpers["extends"]({},c,{lid:d}));if(a&&a.always)for(var c=0;c<a.always.length;c++)m.addTag(d,a.always[c]);if(a&&a.swCache&&b("pageLoadedViaSWCache")())for(var c=0;c<a.swCache.length;c++)m.addTag(d,a.swCache[c])},init:function(a,b){b!=null&&a.lid!=null&&(l[a.lid]=b),this._init(a)},addTag:function(a,c){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey(2966,"PerfXLateTag",c);var d=h[a];if(d){d.tags.add(c);return}i[a]||(i[a]=[]);i[a].push(c)},addTagWithNavigationMetricsLID:function(a){this._alreadyUploadedEarly&&b("BanzaiODS").bumpEntityKey(2966,"PerfXLateTag",a);var c=b("NavigationMetrics").getFullPageLoadLid();if(!c)return;m.addTag(c,a)},_registerTimeoutSendback:function(a){var c=this,d=this._getFetchStart(a),e=j;d!=null&&(e-=(g||(g=b("performanceAbsoluteNow")))()-d);b("setTimeoutAcrossTransitions")(function(){return c._uploadPayload(a,"sendback time out")},e)},_subscribeToNavigationMetrics:function(){var a=this,c;(c=b("NavigationMetrics")).addRetroactiveListener(c.Events.EVENT_OCCURRED,function(b,c){if(!(b in h))return;k.includes(c.event)&&Object.prototype.hasOwnProperty.call(c,"timestamp")&&c.timestamp!=null&&(h[b][c.event]=c.timestamp);c.event==="all_pagelets_displayed"&&a._uploadEarly&&(k.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(h[b][a]=c[a])}),a._uploadPayload(b),a._alreadyUploadedEarly=!0)});c.addRetroactiveListener(c.Events.NAVIGATION_DONE,function(b,c){var d=c.serverLID;if(!(d in h))return;k.forEach(function(a){Object.prototype.hasOwnProperty.call(c,a)&&c[a]!=null&&(h[d][a]=c[a])});a._uploadPayload(d)})},_getPayloadWithOffset:function(a,c,d){a=h[a];if(a==null)return null;var e=Object.assign({},a),f=document.querySelector('[id^="hyperfeed_story_id"]');if(f){f=JSON.parse(b("DataAttributeUtils").getDataFt(f));f&&(e.mf_query_id=f.qid)}e.tags=Array.from(a.tags);e.art_id||(e.artillery_disable_time=b("ArtilleryOnUntilOffLogging").lastDisableTime());this._adjustValues(e,c);e.fetch_start=c;if(e.perfx_page_type==="normal"){f=b("NavigationTimingHelper").getNavTimings();f!=null&&f.navigationStart!=null&&(e.nav_to_fetch=c-f.navigationStart);a=b("QuicklingRefreshOverheadUtil").getOverhead(c);a!==null&&(e.quickling_refresh_overhead=a)}d!=null&&(e.sendback_reason=d);b("PerfXSharedFields").addCommonValues(e);b("VisibilityListener").supported()&&e.fetch_start&&e.all_pagelets_displayed&&e.tti&&e.e2e&&(e.tab_hidden_time_dd=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.all_pagelets_displayed),e.tab_hidden_time_tti=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.tti),e.tab_hidden_time_e2e=b("VisibilityListener").getHiddenTime(e.fetch_start,e.fetch_start+e.e2e));window&&window.location&&window.location.pathname&&(e.request_uri=window.location.pathname);delete e.sent;return e},_uploadPayload:function(a,c){if(h[a]!=null&&!h[a].sent){c=this.getPayload(a,c);c!=null&&(b("PerfXFlusher").flush(c),h[a].sent=!0)}},getPayload:function(a,b){return this._getPayloadWithOffset(a,this._getFetchStart(a),b)},_getFetchStart:function(a){if(!(a in h))return null;var c=h[a].perfx_page_type;if(c=="quickling")if(!(a in l))return null;else c=b("NavigationTimingHelper").getAsyncRequestTimings(l[a]);else c=b("NavigationTimingHelper").getNavTimings();return!c||!c.fetchStart?null:c.fetchStart},_adjustValues:function(a,b){k.forEach(function(c){Object.prototype.hasOwnProperty.call(a,c)&&(a[c]-=b)})}};e.exports=m},null);
__d("SyncProtocolConstants",[],function(a,b,c,d,e,f){a={IRIS_CURSOR_LIMIT:"IRIS_CURSOR_LIMIT",SNAPSHOT_FAILURE:"SNAPSHOT_FAILURE"};e.exports=a},null);
__d("ClientServiceWorkerMessage",[],function(a,b,c,d,e,f){a=function(){"use strict";function a(a,b,c){this.$1=a,this.$2=b,this.$3=c}var b=a.prototype;b.sendViaController=function(){if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var a=new self.MessageChannel();this.$3&&(a.port1.onmessage=this.$3);navigator.serviceWorker.controller.postMessage({command:this.$1,data:this.$2},[a.port2])};return a}();e.exports=a},null);
__d("ServiceWorkerRegistration",["Promise","BrowserPaymentHandlerConfig","ClientServiceWorkerMessage","EventListener","Run","promiseDone"],function(a,b,c,d,e,f){var g=!!navigator.serviceWorker,h={},i={name:"Facebook Pay",method:self.location.origin+"/pay"};function j(a){if(!b("BrowserPaymentHandlerConfig").enabled)return;(a=a.paymentManager)==null?void 0:(a=a.instruments)==null?void 0:a.set("Facebook",i)}function k(){var a=navigator.serviceWorker;if(!g||!a)throw new Error("serviceWorker is not supported in this browser");return a}var l={isSupported:function(){return g},registerWorkerIfUnregisteredAfterDD:function(a){b("Run").onAfterLoad(function(){l.registerWorkerIfUnregistered(a)})},registerWorkerIfUnregistered:function(a){if(h[a])return h[a];var c=k(),d=h[a]=new(b("Promise"))(function(d,e){b("promiseDone")(l.getWorkerRegistration(a),function(f){if(!f){var g=b("EventListener").listen(window,"message",function(a){(a==null?void 0:(a=a.data)==null?void 0:a.command)==="ServiceWorkerInstallError"&&e()});b("promiseDone")(b("Promise").resolve(c.register(a,{updateViaCache:"all"})),function(){g.remove(),b("promiseDone")(b("Promise").resolve(c.ready),d)})}else d(f)})});b("promiseDone")(d,function(b){h[a]=null,j(b)});return d},unregisterControllingWorker:function(){return new(b("Promise"))(function(a,c){c=new(b("ClientServiceWorkerMessage"))("unregister",{},function(){a(!0)});c.sendViaController()})},getWorkerRegistration:function(a){var b=k();return b.getRegistration(a)},isAWorkerActivated:function(){return!navigator.serviceWorker||!navigator.serviceWorker.getRegistration?b("Promise").resolve(!1):navigator.serviceWorker.getRegistration().then(function(a){return!!(a&&a.active)})}};e.exports=l},null);