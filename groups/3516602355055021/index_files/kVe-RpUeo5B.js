if (self.CavalryLogger) { CavalryLogger.start_js(["2sjEi"]); }

__d("MessengerGalleryTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:MessengerGalleryLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:MessengerGalleryLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MessengerGalleryLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setDebugData=function(a){this.$1.debug_data=a;return this};c.setEvent=function(a){this.$1.event=a;return this};c.setLatency=function(a){this.$1.latency=a;return this};c.setLogLevel=function(a){this.$1.log_level=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setVC=function(a){this.$1.vc=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={debug_data:!0,event:!0,latency:!0,log_level:!0,time:!0,vc:!0,weight:!0};e.exports=a},null);
__d("ViewStyles",["LayoutStyles"],function(a,b,c,d,e,f){"use strict";a=babelHelpers["extends"]({},b("LayoutStyles"),{backgroundColor:!0,borderBottomColor:!0,borderBottomLeftRadius:!0,borderBottomRightRadius:!0,borderBottomWidth:!0,borderColor:!0,borderLeftColor:!0,borderLeftWidth:!0,borderRadius:!0,borderRightColor:!0,borderRightWidth:!0,borderStyle:!0,borderTopColor:!0,borderTopLeftRadius:!0,borderTopRightRadius:!0,borderTopWidth:!0,borderWidth:!0,flex:!0,opacity:!0,overflow:!0});e.exports=a},null);
__d("View",["cx","React","ViewStyles","getValidatedStyle","joinClasses","pluckClassNames"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");a=function(a){babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.checkLayout=function(){if(c.div&&c.props.onLayout){var a=c.div;a=a.getBoundingClientRect();var b=a.top,d=a.left,e=a.width;a=a.height;c.$1({nativeEvent:{layout:{x:d,y:b,width:e,height:a}}})}c.layoutTimeout=setTimeout(c.checkLayout,500)},c.$2=function(a){return c.div=a},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.checkLayout()};d.componentWillUnmount=function(){this.layoutTimeout&&clearTimeout(this.layoutTimeout)};d.$1=function(a){if(!this.lastLayout){this.props.onLayout&&this.props.onLayout(a);return}var b=this.lastLayout.nativeEvent.layout,c=a.nativeEvent.layout;(b.x!==c.x||b.y!==c.y||b.width!==c.width||b.height!==c.height)&&(this.props.onLayout&&this.props.onLayout(a))};d.render=function(){var a=this.props,c=a.children,d=a.style;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","style"]);d=b("pluckClassNames")(d);var e=d.classNames;d=d.styles;d=b("getValidatedStyle")(d,b("ViewStyles"));return h.jsx("div",babelHelpers["extends"]({ref:this.$2,className:b("joinClasses").apply(void 0,["_b5a"].concat(e)),style:d},a,{children:c}))};return c}(h.Component);e.exports=a},null);
__d("XMessagingGalleryController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/gallery/",{start_cursor_timestamp_ms:{type:"Int"}})},null);
__d("XMessagingGalleryMediaDetailsController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/gallery/media_details/",{attachment_id:{type:"FBID"}})},null);
__d("XMessagingGalleryMemoryController",["XController"],function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/gallery/memory/",{year:{type:"Int"}})},null);