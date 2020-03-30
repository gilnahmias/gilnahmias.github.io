if (self.CavalryLogger) { CavalryLogger.start_js(["d4ioK"]); }

__d("FacepileRoundedProfile.react",["cx","fbt","CurrentUser","HovercardLink","Image.react","Link.react","React","Tooltip.react","URI","joinClasses"],function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a,c=this.props,d=c.borderColor,e=c.borderWidth,f=c.getCustomActivationLink,g=c.getCustomHovercardLink,i=c.hoverBehavior,k=c.imageSize,l=c.isClickable;c=c.profile;var m=this.props.style,n=c.glyph_size,o=c.image_src,p=c.entity_id;m=babelHelpers["extends"]({},m,{borderColor:d,borderWidth:e,height:k+"px",width:k+"px"});d={};n&&n<k&&(d.margin=(k-n)/2+"px");e="_4mnq";c.className&&(e=b("joinClasses")(e,c.className));a=b("CurrentUser").isWorkUser()&&((a=c.work_foreign_entity_info)==null?void 0:a.type)==="FOREIGN"?j.jsx("div",{className:"_7cf0"}):null;e=j.jsxs(j.Fragment,{children:[j.jsx("div",{className:e,style:m,children:j.jsx(b("Image.react"),{className:"_1h_6",height:n||k,src:o,style:d,width:n||k})}),a]});i==="name"&&c.name&&(e=j.jsx(b("Tooltip.react"),{className:"_4mns",tooltip:c.name,children:e}));m=i==="hovercard";if(p&&(l||m)){o={};m&&(o["data-hovercard"]=g(p));l&&(o.href=f(p));e=j.jsx(b("Link.react"),babelHelpers["extends"]({"aria-label":h._("Profile of {name}",[h._param("name",c.name)])},o,{children:e}))}return e};return c}(j.Component);a.defaultProps={getCustomActivationLink:function(a){return new(i||(i=b("URI")))("/"+a)},getCustomHovercardLink:function(a){return b("HovercardLink").constructEndpoint({id:a})},hoverBehavior:"none",imageSize:32,isClickable:!1};e.exports=a},null);
__d("FacepileRoundedCount.react",["cx","fbt","ix","FacepileRoundedProfile.react","Image.react","Link.react","React","Tooltip.react","prop-types"],function(a,b,c,d,e,f,g,h,i){"use strict";var j=b("React"),k=.3438;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.backgroundColor,d=a.borderColor,e=a.borderWidth,f=a.color,g=a.count,l=a.fontSize,m=a.profiles,n=a.size,o=a.style,p=a.use,q=a.shouldHideCountToolTip,r=a.image;a=a.href;var s=m.length;g=g||s;e={backgroundColor:c,borderColor:d,borderWidth:e,color:f,borderRadius:n,fontSize:(c=l)!=null?c:n*k+"px",height:n,minWidth:n};f=j.jsx("span",{className:"_4mnq _34n6",style:e,children:j.jsx("span",{className:"_40vg",children:"+"+g})});if(p==="image"){l=null;switch(n){case 16:l=i("409177");break;case 20:l=i("409178");break;case 28:l=i("409179");break;case 32:l=i("409180");break;case 48:l=i("409181");break}l&&(f=j.jsx("div",{className:"_4mnq",style:e,children:j.jsx(b("Image.react"),{className:"_1h_6",src:r?r:l})}))}else if(p==="face"&&s>0){c={left:"50%",marginLeft:"-"+n/2+"px"};f=j.jsxs("div",{className:"_ric",style:{borderColor:d},children:[j.jsx(b("FacepileRoundedProfile.react"),{borderColor:d,imageSize:n,profile:m[0],style:c}),f]})}e=g-s;r=m.map(function(a){return a.name}).filter(Boolean);l=s>0?r.join("\n")+"\n":"";if(e>0){p=h._({"*":"and {count} others.","_1":"and {count} other."},[h._param("count",e),h._plural(e)]);l+=p.toString()}d=j.jsx("div",{style:{whiteSpace:"pre-wrap"},children:l});a!=null&&(f=j.jsxs(b("Link.react"),{href:a,children:[j.jsx("span",{className:"accessible_elem",children:l}),f]}));return j.jsx(b("Tooltip.react"),{className:"_4mns",style:o,tooltip:q?null:d,children:f})};return c}(j.Component);a.defaultProps={size:32,use:"count",image:null};a.propTypes={backgroundColor:(c=b("prop-types")).string,borderColor:c.string,borderWidth:c.number,color:c.string,className:c.string,count:c.number,fontSize:c.number,use:c.oneOf(["count","face","image"]),image:c.any,profiles:c.arrayOf(c.shape({className:c.string,entity_id:c.string,glyph_size:c.number,image_src:c.any.isRequired,name:c.string})).isRequired,size:c.number,style:c.object,shouldHideCountToolTip:c.bool};e.exports=a},null);
__d("FacepileRounded.react",["cx","FacepileRoundedCount.react","FacepileRoundedProfile.react","React","joinClasses"],function(a,b,c,d,e,f,g){"use strict";var h=b("React"),i=.3125;a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.borderColor,d=a.borderWidth,e=a.direction,f=a.getCustomActivationLink,g=a.getCustomHovercardLink,j=a.hoverBehavior,k=a.imageSize,l=a.isClickable,m=a.message,n=a.numProfilesToDisplay,o=a.overflowBackgroundColor,p=a.overflowFontSize,q=a.overflowTextColor,r=a.profiles,s=a.remainingProfilesCount,t=a.remainingProfilesCountStyle,u=a.remainingProfilesCountImage,v=a.remainingProfilesCountHref,w=a.spacing;a=a.shouldHideCountToolTip;var x=e==="descending";e=r.length;var y=null,z=this.props.className;z=b("joinClasses")("_4mnv"+(x?" _4wh8":""),z);m&&(y=h.jsx("div",{className:"_4mnt",children:m}));m=r;var A=null;n&&n<e&&(m=r.slice(0,n),A=r.slice(n,e));var B={getCustomActivationLink:f,getCustomHovercardLink:g,hoverBehavior:j,imageSize:k,isClickable:l},C=(w!=null?w:-(k*i))+"px";n=m.map(function(a,e){var f={zIndex:x?r.length-e:e};e>0&&(f.marginLeft=C);return h.jsx(b("FacepileRoundedProfile.react"),babelHelpers["extends"]({borderColor:c,profile:a,style:f,borderWidth:d},B),e)});f=null;A&&(f=h.jsx(b("FacepileRoundedCount.react"),{backgroundColor:o,borderColor:c,color:q,fontSize:p,count:s,profiles:A,size:k,shouldHideCountToolTip:a,style:{marginLeft:C,zIndex:x?0:e},use:t,image:u,href:v,borderWidth:d}));return h.jsxs("div",{className:z,children:[h.jsxs("div",{className:"_4mnw",children:[n,f]}),y]})};return c}(h.Component);a.defaultProps={direction:"ascending",hoverBehavior:"none",imageSize:32,isClickable:!1,isOverlapDisabled:!1,remainingProfilesCountStyle:"count"};e.exports=a},null);
__d("FBRTCAvailability",["ChannelConstants","PresenceStatus"],function(a,b,c,d,e,f){"use strict";a={isCallable:function(a){a=b("PresenceStatus").getCapabilities(a);var c=b("ChannelConstants").CAPABILITY_VOIP_INTEROP;return!!(a&c)}};e.exports=a},null);
__d("FBRTCCallUIWrapper",["regeneratorRuntime","Bootloader","UserAgent","gkx"],function(a,b,c,d,e,f){"use strict";var g=null,h=0;function i(){return"Video Call "+h}var j={openGroupCallUI:function(a,c,d,e,f,h,i){return b("regeneratorRuntime").async(function(j){while(1)switch(j.prev=j.next){case 0:g=this._openWindow("Group Call"),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openGroupCallUI(a,c,d,e,f,h,g,i)},"FBRTCCallUIWrapper");case 2:case"end":return j.stop()}},null,this)},openGroupCallURI:function(a,c,d,e,f,h,i,j,k){return b("regeneratorRuntime").async(function(l){while(1)switch(l.prev=l.next){case 0:g=this._openWindow("Group Call"),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openGroupCallURI({conferenceName:a,callID:c,hasVideo:d,initializeVideo:e,serverInfoData:i,trigger:j,callSummary:k,callWindow:g,multiwayWwwTier:h,multiwayCoreTier:f})},"FBRTCCallUIWrapper");case 2:case"end":return l.stop()}},null,this)},openAsCaller:function(a,c,d,e,f){!g&&window.rtcCallChildWindow&&(g=window.rtcCallChildWindow,window.rtcCallChildWindow=null);try{if(this._shouldFocusCallWindow(a)){g&&g.focus();return}this._shouldCloseCallWindow()&&(g&&g.close())}catch(a){if(a.name==="SecurityError")b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:"call_window_navigated_away"})},"FBRTCCallUIWrapper"),g=null,h++;else throw a}g=this._openWindow(i(),{isP2P:!0});b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openAsCaller(a,c,d,e,g,f)},"FBRTCCallUIWrapper")},openAsCallee:function(a,c,d,e,f){g=this._openWindow(i(),{isP2P:!0}),b("Bootloader").loadModules(["FBRTCCallUI"],function(b){b.openAsCallee(a,c,d,e,g,f)},"FBRTCCallUIWrapper")},_shouldFocusCallWindow:function(a){return!!g&&!g.closed&&g.rtcCallInProgessWith===a},_shouldCloseCallWindow:function(){return!!g&&!g.closed&&!g.rtcCallInProgessWith},_openWindow:function(a,c){c=c===void 0?{isP2P:!1}:c;c=c.isP2P;c=c===void 0?!1:c;c=this._windowPosition({isP2P:c});c=["menubar=no","location=no","scrollbars=no","status=no","personalbar=no",c.height,c.width,c.top,c.left].join(",");this._isSparkBrowser()&&(c="");b("gkx")("859726")&&b("Bootloader").loadModules(["RTWebUserActionLogger"],function(a){a.logCheckpoint({checkpoint:"rtc_www_new_tab"})},"FBRTCCallUIWrapper");a=b("gkx")("859726")?window.open("","_blank"):window.open("",a,c);window.callWindow=a;return a},_windowDimension:function(a){a=a.isP2P;var b=960,c=540;screen&&screen.width>1280&&(!a?(b=1100,c=772):(b=1280,c=720));return{height:c,width:b}},_windowPosition:function(a){a=a.isP2P;a=a===void 0?!1:a;var b,c,d,e;a=j._windowDimension({isP2P:a});var f=a.height;a=a.width;window.innerWidth!==void 0?(c=window.innerWidth,b=window.innerHeight):(c=screen.width,b=screen.height);window.screenLeft!==void 0?(d=window.screenLeft,e=window.screenTop):(d=window.screenX,e=window.screenY);c=Math.floor(c/2-a/2+d);d=Math.floor(b/2-f/2+e);return{height:"height="+f.toString(),width:"width="+a.toString(),top:"top="+d.toString(),left:"left="+c.toString()}},_isSparkBrowser:function(){return b("UserAgent").isBrowser("Chrome < 34")&&b("UserAgent").isBrowser("Chrome > 33")}};e.exports=j},null);
__d("RTWebCallTriggerMapping",["deepFreezeValue"],function(a,b,c,d,e,f){"use strict";a={chat_sidebar:{surface:"chat_sidebar",component:"recent_calls"},chat_sidebar_audio_button:{surface:"chat_sidebar",component:"audio_button"},chat_sidebar_video_button:{surface:"chat_sidebar",component:"video_button"},chattab_audio_button:{surface:"chat_tab",component:"audio_button"},chattab_video_button:{surface:"chat_tab",component:"video_button"},messenger_bubble_free_call:{surface:"messenger_bubble",component:"free_call"},messenger_group_bubble_free_call:{surface:"messenger_bubble",component:"free_call"},messenger_dot_com_missed_call_dialog:{surface:"missed_call_dialog",component:"start_call_button"},messenger_dot_com_video_call:{surface:"messenger_header",component:"video_button"},messenger_dot_com_audio_call:{surface:"messenger_header",component:"audio_button"},timeline:{surface:"dropdown_call_menu",component:"start_call_button"},messenger_dot_com_work_hovercard:{surface:"work_hovercard",component:"start_call_button"},admin_message:{surface:"admin_message",component:"start_call_button"},return_call:{surface:"missed_call_dialog",component:"start_call_button"},popup_start_call_button:{surface:"call_container",component:"start_call_button"},redial_button:{surface:"call_container",component:"redial"},web_messenger:{surface:"work_profile",component:"start_call_button"},quickdial:{surface:"work_profile",component:"start_call_button"},intern_search_meeting_room_unit:{surface:"meeting_room_intern_search_card",component:"start_call_button"},meeting_room_map_dialog:{surface:"meeting_room_map_dialog",component:"start_call_button"},meeting_room_page_profile:{surface:"meeting_room_profile",component:"start_call_button"}};b("deepFreezeValue")(a);e.exports=a},null);
__d("FBRTCCore",["invariant","Bootloader","FBLogger","FBRTCAvailability","FBRTCCallUIWrapper","FBRTCSupport","RTWebCallTriggerMapping","RTWebUserActionLogger","generateRTCCallID","setTimeout"],function(a,b,c,d,e,f,g){"use strict";var h=!1;a={startOutgoingCall:function(a,c,d,e,f){e===void 0&&(e=!1);f===void 0&&(f=null);/\D/.test(a)&&g(0,2478);var i=b("generateRTCCallID")(),j=b("RTWebCallTriggerMapping")[c];(j===null||j===void 0)&&b("FBLogger")("rtweb").mustfix("Unexpected or unknown call trigger: %s",c);b("RTWebUserActionLogger").logPreCallClick(babelHelpers["extends"]({},j,{callID:i.toString(),mediaType:b("RTWebUserActionLogger").getMediaType(d),callType:"p2p"}));if(h)return;h=!0;b("setTimeout")(function(){h=!1},1e3);e&&!b("FBRTCSupport").isCollabSupported()?b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage","CollabMessengerLogger"],function(b,c){b.showForUnsupportedCollabCall(),c.logBrowserNotSupported({peerID:a})},"FBRTCCore"):!b("FBRTCSupport").isWebrtcSupported()?b("Bootloader").loadModules(["FBRTCUnsupportedBrowserMessage"],function(a){a.showForOutgoingCall(),b("RTWebUserActionLogger").logError({callID:i.toString(),callType:"p2p",mediaType:b("RTWebUserActionLogger").getMediaType(d),errorDomain:"unsupported browser"})},"FBRTCCore"):b("FBRTCCallUIWrapper").openAsCaller(a,i,c,d,f)},startGroupCall:function(a){var c=a.conferenceName,d=a.hasVideo,e=a.serverInfoData,f=a.trigger;a=a.usersToRing;a=a===void 0?[]:a;if(h)return;h=!0;b("setTimeout")(function(){h=!1},1e3);if(!b("FBRTCSupport").isGroupCallWebtrcSupported()){b("Bootloader").loadModules(["MessengerRTCUnsupportedBrowserDialogController"],function(a){b("RTWebUserActionLogger").logError({callType:"mw",conferenceName:c,mediaType:b("RTWebUserActionLogger").getMediaType(!d),errorDomain:"unsupported browser"}),a.render({hasVideo:d,isGroupCall:!0})},"FBRTCCore");return}b("FBRTCCallUIWrapper").openGroupCallUI(c,b("generateRTCCallID")(),a,d,d,f,e)},isAvailableForWebrtcCalling:function(a){return b("FBRTCAvailability").isCallable(a)}};e.exports=a},null);
__d("WorkChatActivityTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:WorkChatActivityLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAppID=function(a){this.$1.app_id=a;return this};c.setAppVersion=function(a){this.$1.app_version=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setGroupID=function(a){this.$1.group_id=a;return this};c.setHscrollPosition=function(a){this.$1.hscroll_position=a;return this};c.setMessageID=function(a){this.$1.message_id=a;return this};c.setThreadIds=function(a){this.$1.thread_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={app_id:!0,app_version:!0,event:!0,group_id:!0,hscroll_position:!0,message_id:!0,thread_ids:!0,time:!0,vc:!0,weight:!0};e.exports=a},null);
__d("PhotoZoomCropImageConstants",[],function(a,b,c,d,e,f){"use strict";a={TOP:"top",MIDDLE:"middle"};e.exports.DRAG_INSTRUCTION_POSITION=a},null);
__d("SpotlightProfilePicCropOptions",[],function(a,b,c,d,e,f){var g=2.5,h=.8,i=320,j={getOptions:function(a,b,c){c===void 0&&(c=i);var d={},e=Math.min(b.x,b.y),f,j,k=a.facebox;k?(j=Math.max(k.size.x*b.x,k.size.y*b.y)*g,f=k.center):(j=h*e,a.focus&&(f=a.focus));k=b.x/a.original.width;d.height=d.width=Math.min(Math.max(j,c*k),e);f&&(d.center_x=Math.min(Math.max(f.x*b.x,d.width/2),b.x-d.width/2),d.center_y=Math.min(Math.max(f.y*b.y,d.height/2),b.y-d.height/2));return d},getOptionsAsRatio:function(a,b,c){c===void 0&&(c=i);a=j.getOptions(a,b,c);c=Math.min(b.x,b.y);return{center:{x:a.center_x?a.center_x/b.x:.5,y:a.center_y?a.center_y/b.y:.5},size:{x:a.width/c,y:a.height/c}}}};e.exports=j},null);
__d("PhotoZoomCropDimensions",["BasicVector","SpotlightProfilePicCropOptions","clamp"],function(a,b,c,d,e,f){var g=320,h=.5,i=.5,j=180,k=.05,l=3;function m(a,b){return Number(a.toFixed(b||l))}a=function(){"use strict";var a=c.prototype;a.clone=function(){return new c(this.$2).setSize(this.$3.x,this.$3.y).setSmallestSize(this.$4.x,this.$4.y).setCenter(this.$1.x,this.$1.y).setZoom(this.$5)};function c(a){this.$2=a,this.setSmallestSize(j,j).setCenter(h,h),this.setSize(g,g).setZoom(i)}a.getArea=function(){var a=this.getPosition(),b=this.$3.div(this.$5);return{height:Math.round(b.y),width:Math.round(b.x),x:Math.round(Math.abs(a.left)/this.$5),y:Math.round(Math.abs(a.top)/this.$5)}};a.getPosition=function(){var a=this.$6();return{height:m(a.imageSize.y),left:m(this.$3.x/2-a.center.x),top:m(this.$3.y/2-a.center.y),width:m(a.imageSize.x)}};a.getRect=function(){var a=this.$6(),b=this.$3.div(this.$5);return{center:{x:a.center.x/a.imageSize.x,y:a.center.y/a.imageSize.y},size:{x:b.x,y:b.y}}};a.getSize=function(){return this.$3};a.getCenter=function(){return this.$1};a.getZoom=function(){return this.$5};a.getZoomRange=function(){var a=Math.min(this.$2.x,this.$2.y);return{max:this.$3.x/Math.min(this.$4.x,a),min:Math.max(this.$3.x/this.$2.x,this.$3.y/this.$2.y)}};a.hasSpaceToDrag=function(){var a=this.getZoomRange();return!(c.isSquare(this.$2)&&a.min===a.max)};a.isCurrentlyDragable=function(){var a=this.$6().imageSize;return a.x!==this.$3.x||a.y!==this.$3.y};a.moveByPixels=function(a,b){var c=this.$6();return this.moveBy(a/c.imageSize.x,b/c.imageSize.y)};a.moveBy=function(a,b){this.setCenter(this.$1.x+a,this.$1.y+b);a=this.$6();this.$1=a.center.div(a.imageSize.x,a.imageSize.y);return this};a.setCenter=function(a,c){this.$1=new(b("BasicVector"))(b("clamp")(a,0,1),b("clamp")(c,0,1));return this};a.setSize=function(a,c){this.$3=new(b("BasicVector"))(a,c);return this};a.setRatio=function(a,b){var c=this.$3.x*this.$3.y;a=Math.sqrt(c*a/b);return this.setSize(a,c/a)};a.setSmallestSize=function(a,c){this.$4=new(b("BasicVector"))(a,c);return this};a.setZoom=function(a){var c=this.getZoomRange();this.$5=b("clamp")(a,c.min,c.max);return this};a.cloneAndZoom=function(a){var b=this.clone();b.setZoom(a);return b};a.cloneAndMove=function(a,b){var c=this.clone();c.moveByPixels(a,b);return c};a.$7=function(a,c){var d=this.$3.x/2,e=this.$3.y/2;return new(b("BasicVector"))(b("clamp")(c.x,d,a.x-d),b("clamp")(c.y,e,a.y-e))};a.$6=function(){var a=this.$2.mul(this.$5);return{imageSize:a,center:this.$7(a,this.$1.mul(a.x,a.y))}};c.isSquare=function(a){return Math.abs(a.x/a.y-1)<k};c.fromProfilePhotoData=function(a,d){var e=new(b("BasicVector"))(a.original.width,a.original.height),f=new c(e);d?d=d:a.previousprofilepic?d=a.facebox||{center:{x:.5,y:.5},size:{x:1,y:1}}:d=b("SpotlightProfilePicCropOptions").getOptionsAsRatio(a,e);d.center&&f.setCenter(d.center.x,d.center.y);if(d.size&&d.size.x){a=d.size.x*e.x;f.setZoom(f.getSize().x/a)}return f};return c}();e.exports=a},null);
__d("PhotoZoomCropImagePreview.react",["cx","Image.react","PhotoZoomCropDimensions","React","joinClasses","prop-types"],function(a,b,c,d,e,f,g){var h=b("React");a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props.dimensions,c=this.props.size,d=a.getSize().x/c.x;d!==1&&(a=a.clone().setSize(c.x,c.y).setZoom(a.getZoom()/d));d=null;this.props.overlay&&(d=h.jsx("div",{className:"_1_fc"+(this.props.circular?" _3np9":""),children:this.props.overlay}));return h.jsxs("div",babelHelpers["extends"]({},this.props,{circular:this.props.circular?this.props.circular.toString():void 0,className:b("joinClasses")(this.props.className,"_1k3v"+(this.props.circular?" _3np9":"")),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x}),children:[h.jsx(b("Image.react"),{className:"_1k3w",src:this.props.src,style:a.getPosition()}),d]}))};return c}(h.Component);a.propTypes={dimensions:(c=b("prop-types")).instanceOf(b("PhotoZoomCropDimensions")).isRequired,overlay:c.element,size:c.shape({x:c.number.isRequired,y:c.number.isRequired}).isRequired,src:c.oneOfType([c.string,c.object]),style:c.object,className:c.string};e.exports=a},null);
__d("PhotoZoomCropImage.react",["cx","fbt","ix","Event","Image.react","Keys","PhotoZoomCropImageConstants","PhotoZoomCropImagePreview.react","React","UserAgent","Vector","joinClasses","prop-types"],function(a,b,c,d,e,f,g,h,i){var j=b("React"),k=5;a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={moved:!1},d.$6=function(a){d.$2=null;var c=0,e=0;switch(b("Event").getKeyCode(a)){case b("Keys").DOWN:e=k;break;case b("Keys").LEFT:c=-k;break;case b("Keys").RIGHT:c=k;break;case b("Keys").UP:e=-k;break}(c||e)&&(d.props.onMove(c,e),d.setState({moved:!0}))},d.$7=function(a){d.$9(a,b("Vector").getEventPosition(a))},d.$8=function(a){d.$9(a,b("Vector").getTouchEventPosition(a))},d.$3=function(a){d.$10(b("Vector").getEventPosition(a))},d.$4=function(a){d.$10(b("Vector").getTouchEventPosition(a))},d.$5=function(){d.$2=null},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){var a=b("UserAgent").isBrowser("IE < 9")?document.documentElement:window;this.$1=b("Event").listen(a,{mousemove:this.$3,touchmove:this.$4,mouseup:this.$5,touchend:this.$5})};d.componentWillUnmount=function(){if(this.$1)for(var a in this.$1)this.$1[a]&&this.$1[a].remove(),this.$1[a]=null};d.render=function(){var a=this.props.dimensions,c=a.getSize(),d=null;this.props.overlay&&(d=j.jsx("div",{className:"_290- _8f5u",children:this.props.overlay}));var e=null;if(this.props.customControls)e=j.jsx("div",{className:this.props.enableDrag?"":"_3dfz",children:this.props.customControls});else{var f=this.props.moveStatus!==void 0?this.props.moveStatus:this.state.moved;e=j.jsx("div",{className:(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.MIDDLE?"_6aza":"")+(this.props.dragPosition===b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP?" _3dfy":"")+(f||!this.props.enableDrag?" _3dfz":""),children:j.jsxs("span",{className:"_3df-",children:[j.jsx(b("Image.react"),{className:"_3-8_ _3df_",src:i("22701")}),h._("Drag to Reposition")]})})}return j.jsxs("div",{circular:this.props.circular?this.props.circular.toString():void 0,className:b("joinClasses")(this.props.className,"_4on5"),style:babelHelpers["extends"]({},this.props.style||{},{height:c.y,width:c.x}),children:[j.jsx(b("PhotoZoomCropImagePreview.react"),{circular:this.props.circular,dimensions:a,onKeyDown:this.$6,overlay:this.props.overlay,size:c,src:this.props.src,tabIndex:this.props.isTabbable?0:null}),e,j.jsxs("div",{className:"_4on8",children:[j.jsx(b("Image.react"),{className:"_4on7"+(this.props.enableDrag?"":" _3mk2")+" _8f5u",onDragStart:b("Event").prevent,onMouseDown:this.$7,onTouchStart:this.$8,src:this.props.src,alt:this.props.altText,style:a.getPosition()}),d]})]})};d.$9=function(a,b){if(this.$2)return;this.props.stopPropagation?a.stopPropagation():a.preventDefault();this.$2=b};d.$10=function(a){var b=this.$2;if(!b||!this.props.enableDrag)return;b=b.sub(a);this.props.onMove(b.x,b.y);this.setState({moved:!0});this.$2=a};return c}(j.Component);a.propTypes={circular:(c=b("prop-types")).bool,customControls:c.element,dimensions:c.object,enableDrag:c.bool,onMove:c.func,overlay:c.element,src:c.oneOfType([c.string,c.object]),altText:c.string,moveStatus:c.bool,dragPosition:c.string,isTabbable:c.bool};a.defaultProps={circular:!1,enableDrag:!0,dragPosition:b("PhotoZoomCropImageConstants").DRAG_INSTRUCTION_POSITION.TOP,isTabbable:!0};e.exports=a},null);
__d("useInterval",["React","clearInterval","setIntervalAcrossTransitions"],function(a,b,c,d,e,f){"use strict";a=b("React");var g=a.useEffect,h=a.useRef;e.exports=function(a,c,d){d===void 0&&(d=[]);var e=h(a);g(function(){e.current=a},[a]);var f=a!=null;g(function(){if(!f)return;var a=b("setIntervalAcrossTransitions")(function(){var a=e.current;if(a==null)return;a()},c);return function(){return b("clearInterval")(a)}},[f,c].concat(d))}},null);
/**
 * License: https://www.facebook.com/legal/license/MDzNl_j9yvg/
 */
__d("object-assign-4.1.1",[],function(a,b,c,d,e,f){"use strict";a={};var g={exports:a};function h(){var a=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function d(a){if(a===null||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function e(){try{if(!Object.assign)return!1;var a=new String("abc");a[5]="de";if(Object.getOwnPropertyNames(a)[0]==="5")return!1;var b={};for(var a=0;a<10;a++)b["_"+String.fromCharCode(a)]=a;a=Object.getOwnPropertyNames(b).map(function(a){return b[a]});if(a.join("")!=="0123456789")return!1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a});return Object.keys(Object.assign({},c)).join("")!=="abcdefghijklmnopqrst"?!1:!0}catch(a){return!1}}g.exports=e()?Object.assign:function(e,f){var g,h=d(e),i;for(var j=1;j<arguments.length;j++){g=Object(arguments[j]);for(var k in g)b.call(g,k)&&(h[k]=g[k]);if(a){i=a(g);for(var l=0;l<i.length;l++)c.call(g,i[l])&&(h[i[l]]=g[i[l]])}}return h}}var i=!1,j=function(){i||(i=!0,h());return g.exports};b=function(a){switch(a){case void 0:return j()}};e.exports=b},null);