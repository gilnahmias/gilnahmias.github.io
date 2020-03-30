if (self.CavalryLogger) { CavalryLogger.start_js(["CzOb6"]); }

__d("BaseCheckbox.react",["BaseFocusRing.react","BaseInput.react","BaseView.react","React","mergeRefs","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useLayoutEffect,i=c.useMemo,j=c.useRef,k={checkbox:{cursor:"nhd2j8a9",height:"datstx6m",marginTop:"kvgmc6g5",marginEnd:"cxmmr5t8",marginBottom:"oygrvhab",marginStart:"hcukyx3x",opacity:"b5wmifdl",outline:"lzcic4wl",paddingTop:"jb3vyjys",paddingEnd:"rz4wbd8a",paddingBottom:"qt6c0cv9",paddingStart:"a8nywdso",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4",width:"k4urcfbm"},wrapper:{position:"l9j0dhe7"}};function a(a,c){var d=a.children,e=a.indeterminate,f=e===void 0?!1:e;e=a.suppressFocusRing;var l=a.testid,m=a.xstyle,n=babelHelpers.objectWithoutPropertiesLoose(a,["children","indeterminate","suppressFocusRing","testid","xstyle"]),o=j(null);h(function(){o.current!=null&&(o.current.indeterminate=f)},[f]);var p=i(function(){return b("mergeRefs")(c,o)},[c]);return g.jsx(b("BaseFocusRing.react"),{suppressFocusRing:e,children:function(a){return g.jsxs(b("BaseView.react"),{testid:void 0,xstyle:[k.wrapper,a,m],children:[d,g.jsx(b("BaseInput.react"),babelHelpers["extends"]({},n,{"aria-checked":f?"mixed":(a=n.checked)!=null?a:!1,ref:p,type:"checkbox",xstyle:k.checkbox}))]})}})}e.exports=g.memo(g.forwardRef(a))},null);
__d("CometMenuFocusGroup",["fbt","CometComponentWithKeyCommands.react","CometKeys","FocusGroup.react","React","TabbableScopeQuery.react"],function(a,b,c,d,e,f,g){"use strict";c=b("FocusGroup.react").createFocusGroup;var h=b("React");d=c(b("TabbableScopeQuery.react"));var i=d[0];f=d[1];function a(a){var c=[{command:{key:b("CometKeys").UP},description:g._("Previous item"),handler:function(){}},{command:{key:b("CometKeys").DOWN},description:g._("Next item"),handler:function(){}}];return h.jsx(b("CometComponentWithKeyCommands.react"),{commandConfigs:c,children:h.jsx(i,babelHelpers["extends"]({},a))})}e.exports={FocusGroup:a,FocusItem:f}},null);
__d("CometMenuItemBaseRoleContext",["React"],function(a,b,c,d,e,f){"use strict";a=b("React");c=a.createContext(null);e.exports=c},null);
__d("CometSeparatorMenuItem.react",["CometMenuItemBaseRoleContext","React","stylex"],function(a,b,c,d,e,f){"use strict";var g=b("React");c=b("React");var h=c.useContext;function a(a,c){a=h(b("CometMenuItemBaseRoleContext"));return g.jsx("div",{className:"dhix69tm tvmbv18p wkznzc2l aahdfvyu l6v480f0",ref:c,role:a==="menuitem"?"separator":"presentation"})}e.exports=g.forwardRef(a)},null);
__d("CometMenuBase.react",["BaseScrollableArea.react","CometErrorBoundary.react","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometPopover.react","CometSeparatorMenuItem.react","React","TabbableScopeQuery.react","TetraTextPairing.react","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React"),i={listItem:{borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",display:"j83agx80",flexDirection:"btwxx1t3",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr"},root:{alignItems:"gs1a9yip",display:"j83agx80",flexDirection:"cbu4d94t",paddingTop:"cxgpxx05",paddingEnd:"rz4wbd8a",paddingBottom:"sj5x9vvc",paddingStart:"a8nywdso",scrollPaddingTop:"orrla7ft",scrollSnapType:"h7lslg6b"},sizeFull:{width:"k4urcfbm"},sizeNormal:{width:"geg40m2u"},truncate:{maxHeight:"ktk59qbb"}},j="menu",k={listbox:"option",menu:"menuitem"};function a(a,c){var d=a.children,e=a.footer,f=a.header,l=a.id,m=a.role;m=m===void 0?j:m;var n=a.size;n=n===void 0?"normal":n;var o=a.truncate;o=o===void 0?!1:o;var p=a.withArrow;a=a.testid;a=a===void 0?"comet-menu":a;var q=0;a=h.Children.toArray(d).map(function(a){if(a==null)return null;var c=q++;return a.type===b("CometSeparatorMenuItem.react")?a:h.jsx(b("CometErrorBoundary.react"),{fallback:null,children:a},c)});var r=k[m];return h.Children.count(d)>0?h.jsx(b("CometMenuFocusGroup").FocusGroup,{portrait:!0,preventScrollOnFocus:!1,tabScopeQuery:b("TabbableScopeQuery.react"),wrap:!0,children:h.jsx(b("CometPopover.react"),{id:l,ref:c,role:m,testid:void 0,withArrow:p,children:h.jsx(b("BaseScrollableArea.react"),{horizontal:!1,vertical:!0,xstyle:[i.root,n==="full"&&i.sizeFull,n==="normal"&&i.sizeNormal,o&&i.truncate],children:h.jsx(b("CometMenuItemBaseRoleContext").Provider,{value:r,children:[f!=null?[h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:r,children:h.jsx(b("TetraTextPairing.react"),{headline:f.title,level:3,meta:f.meta,reduceEmphasis:!0})},"header"),h.jsx(b("CometSeparatorMenuItem.react"),{},"header-separator")]:null,h.jsx(h.Fragment,{children:a},"contents"),e!=null?[h.jsx(b("CometSeparatorMenuItem.react"),{},"footer-separator"),h.jsx("div",{className:(g||(g=b("stylex")))(i.listItem),role:r,children:h.jsx(b("TetraTextPairing.react"),{level:3,meta:e.text})},"footer")]:null]})})})}):null}e.exports=h.memo(h.forwardRef(a))},null);
__d("CometMenu.react",["CometMenuBase.react","React"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a,c){return g.jsx(b("CometMenuBase.react"),babelHelpers["extends"]({},a,{ref:c}))}e.exports=g.forwardRef(a)},null);
__d("CometMenuItemBase.react",["BaseFocusRing.react","CometMenuContext","CometMenuFocusGroup","CometMenuItemBaseRoleContext","CometMenuItemHighlightContext","CometPressable.react","CometPressableOverlay.react","React","TetraTextPairing.react","mergeRefs","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React");c=b("React");var i=c.useCallback,j=c.useContext,k=c.useEffect,l=c.useMemo,m=c.useRef,n={aux:{marginStart:"ozuftl9m"},content:{alignItems:"bp9cbjyn",display:"j83agx80",flexDirection:"btwxx1t3",flexGrow:"buofh1pr",justifyContent:"i1fnvgqd",minWidth:"hpfvmrgz"},disabled:{cursor:"rj84mg9z"},listItem:{alignItems:"bp9cbjyn",appearance:"dwo3fsh8",boxSizing:"rq0escxv",cursor:"nhd2j8a9",display:"j83agx80",flexDirection:"btwxx1t3",flexShrink:"pfnyh3mw",marginTop:"kvgmc6g5",marginEnd:"oi9244e8",marginBottom:"oygrvhab",marginStart:"h676nmdw",paddingTop:"pybr56ya",paddingEnd:"dflh9lhu",paddingBottom:"f10w8fjw",paddingStart:"scb9dxdr",position:"l9j0dhe7",scrollSnapAlign:"qdtcsgvi",textAlign:"i1ao9s8h",zIndex:"du4w35lb"},listItemAlignedCenter:{alignItems:"bp9cbjyn"},listItemWithIcon:{paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a,c){var d=a.alignCenter;d=d===void 0?!1:d;var e=a.aux,f=a.bodyColor,o=a.bodyText,p=a.disabled,q=p===void 0?!1:p;p=a.download;var r=a.href,s=a.iconNode,t=a.id,u=a.onClick,v=a.onHoverIn,w=a.onHoverOut,x=a.onPressIn,y=a.passthroughProps,z=a.preventClosingMenuOnSelect;z=z===void 0?!1:z;var A=a.preventLocalNavigation,B=a.primaryColor,C=a.primaryText,D=a.role,E=a.routeTarget,F=a.secondaryColor,G=a.secondaryText,H=a.target,I=a.testid;I=a.visuallyFocused;var J=I===void 0?!1:I;I=babelHelpers.objectWithoutPropertiesLoose(a,["alignCenter","aux","bodyColor","bodyText","disabled","download","href","iconNode","id","onClick","onHoverIn","onHoverOut","onPressIn","passthroughProps","preventClosingMenuOnSelect","preventLocalNavigation","primaryColor","primaryText","role","routeTarget","secondaryColor","secondaryText","target","testid","visuallyFocused"]);var K=m(null);a=j(b("CometMenuContext"));var L=z!==!0&&a?a.onClose:null;z=r!=null||E!=null||H!=null?{download:p,passthroughProps:y,preventLocalNavigation:A,routeTarget:E,target:H,url:r}:void 0;a=i(function(a){L!=null&&L(),u&&u(a)},[u,L]);p=j(b("CometMenuItemBaseRoleContext"));E=(A=(y=D)!=null?y:p)!=null?A:void 0;var M=m(J);k(function(){var a=K.current;!M.current&&J&&a!=null&&a.scrollIntoView({block:"nearest"})},[J]);H=l(function(){return b("mergeRefs")(c,K)},[c]);return h.jsx(b("CometMenuFocusGroup").FocusItem,{children:h.jsx(b("CometPressable.react"),babelHelpers["extends"]({},I,{disabled:q,display:"inline",id:t,linkProps:z,onHoverIn:v,onHoverOut:w,onPress:a,onPressIn:x,overlayDisabled:!0,ref:H,role:E,testid:void 0,xstyle:[n.listItem,d&&n.listItemAlignedCenter,s!=null&&n.listItemWithIcon,q&&n.disabled,J&&b("BaseFocusRing.react").focusRingXStyle],children:function(a){var c=a.focused,d=a.focusVisible,i=a.hovered;a=a.pressed;return h.jsxs(b("CometMenuItemHighlightContext").Provider,{value:c&&d||i,children:[s,h.jsxs("div",{className:(g||(g=b("stylex")))(n.content),children:[h.jsx(b("TetraTextPairing.react"),{body:o,bodyColor:f,headline:C,headlineColor:q?"disabled":B,level:4,meta:G,metaColor:F,reduceEmphasis:!0}),e!=null&&h.jsx("div",{className:(g||(g=b("stylex")))(n.aux),children:e})]}),h.jsx(b("CometPressableOverlay.react"),{focusVisible:d||J,hovered:i,pressed:a,radius:4})]})}}))})}e.exports=h.forwardRef(a)},null);
__d("CometImageIcon.react",["BaseImage.react","React","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){var c=a.auxiliary,d=a.size;d=d===void 0?24:d;var e=a.src,f=a.style;f=f===void 0?"circle":f;a=a.testid;return h.jsxs("div",{className:"l9j0dhe7",children:[h.jsx(b("BaseImage.react"),{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"display-1":"a8c37x1j"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),height:d,src:e,testid:void 0,width:d}),f!=="square"?h.jsx("div",{className:(g||(g=b("stylex"))).dedupe(f==="circle"?{"border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv"}:{},{"box-shadow-1":"oaz4zybt","position-1":"pmk7jnqg","start-1":"j9ispegn","top-1":"kr520xx4"},f==="roundedRect"?{"border-top-start-radius-1":"ue3kfks5","border-top-end-radius-1":"pw54ja7n","border-bottom-end-radius-1":"uo3d90p7","border-bottom-start-radius-1":"l82x9zwi"}:null),style:{height:d,width:d}}):null,c!=null?h.jsx("div",{className:"pmk7jnqg n7fi1qx3 i09qtzwb",children:c}):null]})}e.exports=a},null);
__d("CometMenuItemIcon.react",["CometImageIcon.react","IconSource","ImageIconSource","React","TetraIcon.react","stylex"],function(a,b,c,d,e,f){"use strict";var g,h=b("React");function a(a){var c=a.icon,d=a.iconColor;a=a.use;a=a===void 0?"normal":a;return h.jsx("div",{className:(g||(g=b("stylex"))).dedupe(a==="contained"||a==="contained_small_icon"?{"align-items-1":"bp9cbjyn","background-color-1":"tdjehn4e","border-top-start-radius-1":"s45kfl79","border-top-end-radius-1":"emlxlaya","border-bottom-end-radius-1":"bkmhp75w","border-bottom-start-radius-1":"spb7xbtv","display-1":"j83agx80","height-1":"tv7at329","justify-content-1":"taijpn5t","min-width-1":"odlk74j0"}:{},a==="normal"?{"align-self-1":"tiyi1ipj","height-1":"jnigpg78","width-1":"odw8uiq3"}:null,{"margin-end-1":"tvfksri0"}),children:c instanceof b("IconSource")?h.jsx(b("TetraIcon.react"),{color:(d=d)!=null?d:"secondary",icon:c}):c instanceof b("ImageIconSource")?h.jsx(b("TetraIcon.react"),{icon:c}):h.jsx(b("CometImageIcon.react"),babelHelpers["extends"]({},c,{size:a==="contained"?36:20}))})}e.exports=h.memo(a)},null);
__d("CometMenuItemSelectable.react",["ix","CometMenuItemBase.react","CometMenuItemIcon.react","CometToggle.react","React","TetraIcon.react","fbicon","stylex"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");function i(a,c){return!a?null:c?h.jsx(b("TetraIcon.react"),{color:"highlight",icon:b("fbicon")._(g("498146"),20)}):h.jsx(b("TetraIcon.react"),{color:"secondary",icon:b("fbicon")._(g("477820"),20)})}function a(a,c){a.aux;var d=a.icon,e=a.iconColor,f=a.iconStyle,g=a.isSelected,j=babelHelpers.objectWithoutPropertiesLoose(a,["aux","icon","iconColor","iconStyle","isSelected"]);if(d)return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:a.aux!=null?a.aux(g):i(g,!0),iconNode:h.jsx(b("CometMenuItemIcon.react"),{icon:d,iconColor:e,use:f}),ref:c}));else{d=a.aux!=null?a.aux(g):i(g,!1);return h.jsx(b("CometMenuItemBase.react"),babelHelpers["extends"]({},j,{"aria-checked":g,aux:d?h.jsx("div",{className:"irj2b8pg ew0dbk1b",children:d}):void 0,ref:c}))}}e.exports=h.forwardRef(a)},null);
__d("CometFormCheckbox.react",["ix","BaseCheckbox.react","CometPressableOverlay.react","React","TetraIcon.react","TetraText.react","fbicon","stylex","useCometPressableEventHandlers"],function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");c=b("React");var j=c.useCallback,k={checkbox:{display:"j83agx80"},root:{WebkitTapHighlightColor:"oajrlxb2",alignItems:"bp9cbjyn",display:"j83agx80",paddingBottom:"sj5x9vvc",paddingTop:"cxgpxx05",position:"l9j0dhe7",touchAction:"f1sip0of"},text:{flexBasis:"rj1gh0hx",flexGrow:"buofh1pr",marginStart:"h676nmdw",minWidth:"hpfvmrgz"}};function a(a){var c=a.checked,d=a.disabled;d=d===void 0?!1:d;var e=a.id,f=a.label,l=a.labelIsHidden;l=l===void 0?!1:l;var m=a.name,n=a.onChange,o=a.testid,p=a.value;o=b("useCometPressableEventHandlers")({disabled:d});a=o[0];o[1];var q=o[2],r=q.focusVisible,s=q.hovered;q=q.pressed;o=o[3];var t=j(function(){n(p)},[n,p]);return i.jsxs("label",babelHelpers["extends"]({className:(h||(h=b("stylex")))(k.root)},o,{ref:a,children:[i.jsxs(b("BaseCheckbox.react"),{"aria-label":l?f:void 0,checked:c,disabled:d,id:e,name:m,onValueChange:t,testid:void 0,xstyle:k.checkbox,children:[i.jsx(b("TetraIcon.react"),{color:d?"disabled":c?"highlight":"secondary",icon:c?b("fbicon")._(g("531032"),24):b("fbicon")._(g("659289"),24)}),i.jsx(b("CometPressableOverlay.react"),{focusVisible:r,hovered:s,offset:8,pressed:q,radius:"50%"})]}),l?null:i.jsx("div",{className:(h||(h=b("stylex")))(k.text),children:i.jsx(b("TetraText.react"),{color:d?"disabled":"primary",type:"button2",children:f})})]}))}e.exports=a},null);
__d("useCometUniqueIDs",["React","cometUniqueID"],function(a,b,c,d,e,f){"use strict";c=b("React");var g=c.useMemo,h=c.useRef;function a(a){var b=h([]);return g(function(){return i(a,b.current)},[a])}function i(a,c){for(var d=c.length;d<a;d++)c.push(b("cometUniqueID")());return c.length>a?c.slice(0,a):c}e.exports=a},null);
__d("CometSelectMenuTrigger.react",["fbt","BaseContextualLayer.react","CometComponentWithKeyCommands.react","CometKeys","CometMenu.react","CometMenuItemSelectable.react","FocusInertRegion.react","FocusWithinHandler.react","React","TabbableScopeQuery.react","stylex","useCometUniqueIDs"],function(a,b,c,d,e,f,g){"use strict";var h=b("React");c=b("React");var i=c.useCallback,j=c.useMemo,k=c.useRef,l=c.useState,m={hideOutline:{outline:"lzcic4wl"}};function a(a){var c=a.children,d=a.disabled;d=d===void 0?!1:d;var e=a.onChange,f=a.options,n=a.selectedValue,o=a.size;o=o===void 0?"normal":o;var p=a.truncate;p=p===void 0?!0:p;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","disabled","onChange","options","selectedValue","size","truncate"]);var q=l(!1),r=q[0],s=q[1],t=r&&f.length>0;q=b("useCometUniqueIDs")(3);var u=q[0];r=q[1];q=q[2];var v=l(null),w=v[0],x=v[1];v=k(null);var y=i(function(){return s(!0)},[]),z=i(function(){x(null),s(!1)},[]),A=i(function(a){a||z()},[z]),B=i(function(){t||y()},[t,y]),C=f.filter(function(a){return!a.disabled}),D=i(function(){for(var a=0;a<C.length;a++)if(C[a].value===w)return a;return null},[w,C]),E=j(function(){var a;return[{command:{key:(a=b("CometKeys")).ENTER},description:g._("Select item"),handler:function(){if(w!=null)e(w),z();else{var a;x((a=n)!=null?a:null);y()}},triggerOnKeyup:!0},{command:{key:a.ESCAPE},description:g._("Close suggestions"),handler:function(){t&&z()}},{command:{key:a.DOWN},description:g._("Next item"),handler:function(){if(C.length>0){var a=D();if(w==null||a==null){var b;x((b=n)!=null?b:C[0].value)}else a===C.length-1?x(C[0].value):x(C[a+1].value);y()}}},{command:{key:a.UP},description:g._("Previous item"),handler:function(){if(C.length>0){var a=D();if(w==null||a==null){var b;x((b=n)!=null?b:C[C.length-1].value)}else a===0?x(C[C.length-1].value):x(C[a-1].value);y()}}},{command:{alt:!0,key:a.DOWN},description:g._("Show suggestions"),handler:y},{command:{alt:!0,key:a.UP},description:g._("Close suggestions"),handler:z},{command:{key:a.HOME},description:g._("First item"),handler:function(){t&&x(C[0].value)}},{command:{key:a.END},description:g._("Last item"),handler:function(){t&&x(C[C.length-1].value)}}]},[y,w,e,z,n,t,C,D]);return h.jsx(b("FocusWithinHandler.react"),{onFocusChange:A,children:h.jsxs(b("CometComponentWithKeyCommands.react"),{commandConfigs:E,children:[c(v,{"aria-activedescendant":w!=null?u:void 0,"aria-controls":t?r:void 0,"aria-expanded":t,disabled:d,id:q,onPress:B,role:"combobox",xstyle:[w!=null&&m.hideOutline]}),t&&v.current!=null&&h.jsx(b("BaseContextualLayer.react"),babelHelpers["extends"]({},a,{context:v.current,children:h.jsx(b("FocusInertRegion.react"),{focusQuery:b("TabbableScopeQuery.react"),children:h.jsx(b("CometMenu.react"),{id:r,role:"listbox",size:o,truncate:p,children:f.map(function(a,c){return h.jsx(b("CometMenuItemSelectable.react"),{"aria-checked":a.value===n,"aria-disabled":a.disabled,"aria-posinset":c,"aria-selected":a.value===n,"aria-setsize":f.length,bodyColor:a.bodyColor,bodyText:a.bodyText,disabled:a.disabled,icon:a.icon,iconStyle:"contained_small_icon",id:a.value===w?u:void 0,isSelected:a.value===n,onClick:function(){e(a.value),z()},primaryText:a.label,role:"option",secondaryColor:a.secondaryColor,secondaryText:a.secondaryText,testid:void 0,visuallyFocused:a.value===w},a.value)})})})}))]})})}e.exports=a},null);
__d("CometSelect.react",["ix","CometMenuItemSelectable.react","CometPressable.react","CometSelectMenuTrigger.react","React","TetraIcon.react","TetraText.react","fbicon","stylex"],function(a,b,c,d,e,f,g){"use strict";var h,i=b("React");c=b("React");var j=c.useMemo,k={button:{appearance:"dwo3fsh8",borderStyle:"ow4ym5g4",borderWidth:"auili1gw",marginBottom:"oygrvhab",marginEnd:"cxmmr5t8",marginStart:"hcukyx3x",marginTop:"kvgmc6g5",position:"l9j0dhe7",zIndex:"du4w35lb",alignItems:"bp9cbjyn",backgroundColor:"tdjehn4e",borderTopStartRadius:"beltcj47",borderTopEndRadius:"p86d2i9g",borderBottomEndRadius:"aot14ch1",borderBottomStartRadius:"kzx2olss",boxSizing:"rq0escxv",cursor:"nhd2j8a9",justifyContent:"i1fnvgqd",paddingBottom:"osnr6wyh",paddingEnd:"d1544ag0",paddingStart:"tw6a2znq",paddingTop:"jktsbyx5",textAlign:"hzawbc8m"},buttonDisabled:{cursor:"rj84mg9z"},buttonExpanded:{minWidth:"oqhjfihn"},icon:{lineHeight:"soycq5t1",marginStart:"h676nmdw"}};function a(a){a.aux;var c=a.defaultLabel,d=a.disabled,e=d===void 0?!1:d;d=a.expanded;var f=d===void 0?!1:d,l=a.labelLineLimit;d=a.testid;var m=babelHelpers.objectWithoutPropertiesLoose(a,["aux","defaultLabel","disabled","expanded","labelLineLimit","testid"]),n=j(function(){var a=m.options.find(function(a){return a.value===m.selectedValue});return a!=null?a.label:(a=c)!=null?a:""},[c,m.options,m.selectedValue]);return i.jsx(b("CometSelectMenuTrigger.react"),babelHelpers["extends"]({},m,{disabled:e,children:function(a,c){var d=c.xstyle;c=babelHelpers.objectWithoutPropertiesLoose(c,["xstyle"]);return i.jsxs(b("CometPressable.react"),babelHelpers["extends"]({},c,{expanding:!0,ref:a,role:"combobox",testid:void 0,xstyle:[k.button,f&&k.buttonExpanded,e&&k.buttonDisabled,d],children:[i.jsx(b("TetraText.react"),{color:e?"disabled":null,numberOfLines:l,type:"bodyLink3",children:n}),i.jsx("div",{className:(h||(h=b("stylex")))(k.icon),children:i.jsx(b("TetraIcon.react"),{color:e?"disabled":"primary",icon:b("fbicon")._(g("481882"),16)})})]}))}}))}e.exports=a},null);
__d("TidyArbiterMixin",["Arbiter","ArbiterMixin","Run"],function(a,b,c,d,e,f){a={};Object.assign(a,b("ArbiterMixin"),{_getArbiterInstance:function(){this._arbiter||(this._arbiter=new(b("Arbiter"))(),b("Run").onLeave(function(){delete this._arbiter}.bind(this)));return this._arbiter}});e.exports=a},null);
__d("TidyArbiter",["TidyArbiterMixin"],function(a,b,c,d,e,f){a=babelHelpers["extends"]({},b("TidyArbiterMixin"));e.exports=a},null);
__d("WIGFormCheckbox.react",["CometFormCheckbox.react","React"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometFormCheckbox.react"),babelHelpers["extends"]({},a))}e.exports=a},null);
__d("WIGSelect.react",["CometSelect.react","React"],function(a,b,c,d,e,f){"use strict";var g=b("React");function a(a){return g.jsx(b("CometSelect.react"),babelHelpers["extends"]({},a))}e.exports=a},null);
__d("ProfileTabUtils",["ProfileTabConst"],function(a,b,c,d,e,f){function g(a){return a===null||a===void 0||a===b("ProfileTabConst").TIMELINE||a===b("ProfileTabConst").WALL}var h={isActivityLogTab:function(a){return a===b("ProfileTabConst").ALL_ACTIVITY||a===b("ProfileTabConst").APPROVAL},isTimelineOverviewTab:function(a){return a===b("ProfileTabConst").TIMELINE_OVERVIEW},isOverviewTab:function(a){return a===b("ProfileTabConst").INFO||a===b("ProfileTabConst").OVERVIEW},isTimelineTab:g,isMapTab:function(a){return a===b("ProfileTabConst").MAP},tabHasFixedAds:function(a){return!0},tabHasScrubber:function(a){return h.isActivityLogTab(a)},tabHasStickyHeader:function(a){return g(a)||h.isTimelineOverviewTab(a)},getIDForCollectionToken:function(a){return"pagelet_timeline_app_collection_"+a},getIDForSectionKey:function(a){return"pagelet_timeline_medley_"+a},isMedleyTab:function(a){return!h.isTimelineTab(a)&&!h.isTimelineOverviewTab(a)},normalizeTabKey:function(a){return h.isTimelineTab(a)?b("ProfileTabConst").TIMELINE:a},getIDForTabKey:function(a){if(h.isTimelineTab(a))return"timeline_tab_content";return h.isTimelineOverviewTab(a)?"timeline_overview":"timeline-medley"},getPageletForTabKey:function(a){if(h.isTimelineTab(a))return"TimelineJumperColumn";return h.isTimelineOverviewTab(a)?"TimelineOverviewColumn":"TimelineMedleyView"}};e.exports=h},null);
__d("TimelineComponentKeys",[],function(a,b,c,d,e,f){a={CONTENT:"content",ESCAPE_HATCH:"escape_hatch",OVERVIEW_CONTAINER:"overview_container",NAV:"nav",SCRUBBER:"scrubber",STICKY_HEADER:"sticky_header",STICKY_HEADER_NAV:"sticky_header_nav",STICKY_HEADER_VIEW_SWITCHER:"sticky_header_view_switcher"};e.exports=a},null);
__d("TimelineConstants",[],function(a,b,c,d,e,f){a=Object.freeze({DS_LOADED:"timeline-capsule-loaded",DS_COLUMN_HEIGHT_DIFFERENTIAL:"timeline-column-diff-height",SCROLL_TO_OFFSET:100,SCRUBBER_DEFAULT_OFFSET:38,SECTION_EXPAND:"TimelineConstants/sectionExpand",SECTION_LOADING:"TimelineConstants/sectionLoading",SECTION_LOADED:"TimelineConstants/sectionLoaded",SECTION_FULLY_LOADED:"TimelineConstants/sectionFullyLoaded",SECTION_REGISTERED:"TimelineConstants/sectionRegistered",UNIT_SEGMENT_LOADED:"TimelineConstants/unitSegmentLoaded"});e.exports=a},null);
__d("TimelineController",["Arbiter","BlueBar","CSS","DataStore","Event","ProfileTabConst","ProfileTabUtils","Run","TidyArbiter","TimelineComponentKeys","TimelineConstants","UITinyViewportAction","URI","Vector","findTag","forEachObject","ge","queryThenMutateDOM","tidyEvent"],function(a,b,c,d,e,f){var g,h=740,i="top",j="paddingTop",k="paddingTop",l=null,m=!1,n=null,o=null,p={},q={},r=null,s=[],t=null,u=null;b("Vector").getViewportDimensions();var v=!1,w=!1,x=!1;function y(a,b,c){c===void 0&&(c=[]);if(p[a])return p[a][b].apply(p[a],c);q[a]=q[a]||{};q[a][b]=c;return!1}function z(){v&&(v=D(b("ge")("rightCol"),k,J.getCurrentScrubber()));if(w){var a=b("ge")("pagelet_above_header_timeline");a&&(w=D(a,i))}x&&(x=D(b("BlueBar").getBar(),j))}function A(){u=b("Vector").getScrollPosition()}function B(){z(),u&&b("ProfileTabUtils").tabHasStickyHeader(l)&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y]),y(b("TimelineComponentKeys").CONTENT,"checkCurrentSectionChange")}function C(){b("queryThenMutateDOM")(A,B,"TimelineController/scrollListener")}function D(a,c,d){if(!a||!u)return!1;if(u.y<=0){E(a,c);return!1}if(d&&b("CSS").hasClass(d.getRoot(),"fixed_elem")){E(a,c);return!1}d=parseInt(a.style[c],10)||0;u.y<d?(b("CSS").addClass(a,"timeline_fixed"),a.style[c]=u.y+"px"):b("CSS").removeClass(a,"timeline_fixed");return!0}function E(a,c){a.style[c]="0px",b("CSS").removeClass(a,"timeline_fixed")}function F(){b("Vector").getViewportDimensions()}function G(){b("queryThenMutateDOM")(F,function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"adjustMenuHeights"),u&&y(b("TimelineComponentKeys").STICKY_HEADER,"check",[u.y])},"TimelineController/resize")}function H(a,c){a=b("Vector").getScrollPosition();c=Math.min(c,a.y);a=b("ge")("rightCol");a&&(a.style[k]=c+"px",v=!0);J.showAboveHeaderContent(c);x=b("UITinyViewportAction").isTinyHeight();if(x){a=b("BlueBar").getBar();a&&(a.style[j]=c+"px")}b("Arbiter").inform("reflow")}function I(){while(s.length)s.pop().remove();b("forEachObject")(p,function(a,b){a.reset&&a.reset()});l=null;n=null;p={};q={};t=null;m=!1;w=!1;if(v){var a=b("ge")("rightCol");a&&E(a,k)}v=!1;if(x){a=b("BlueBar").getBar();a&&E(a,j);x=!1}b("DataStore").purge(b("TimelineConstants").DS_LOADED)}var J={init:function(a,c,d){if(m)return;b("ProfileTabUtils").isTimelineTab(c)&&(c=b("ProfileTabConst").TIMELINE);m=!0;n=a;o=d.relationship_type;r=d.session_token;s.push(b("Event").listen(window,"scroll",C),b("Event").listen(window,"resize",G));b("tidyEvent")(b("TidyArbiter").subscribe("TimelineCover/coverCollapsed",H));b("Run").onLeave(I);a=new(g||(g=b("URI")))(window.location).getQueryData();J.registerCurrentKey(c,a.subkey)},showAboveHeaderContent:function(a){var c=b("Vector").getScrollPosition();a=Math.min(a,c.y);c=b("findTag")("pagelet_above_header_timeline");if(c.firstChild){var d=b("findTag")("above_header_timeline_placeholder");d.style.height=c.offsetHeight+"px";c.style.top=a+"px";w=!0}},registerCurrentKey:function(a,c){l=a;t=a!==b("ProfileTabConst").MAP&&b("Vector").getViewportDimensions().y<h&&b("ProfileTabUtils").tabHasScrubber(a);if(!t){var d=b("BlueBar").getBar();t=d&&d.offsetTop}b("Arbiter").inform("TimelineController/sectionKeyChange",[a,c],"state");y(b("TimelineComponentKeys").STICKY_HEADER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").OVERVIEW_CONTAINER,"handleTabChange",[a,c]);y(b("TimelineComponentKeys").STICKY_HEADER_VIEW_SWITCHER,"handleTabChange",[a,c]);C()},getProfileID:function(){return n},getRelationshipType:function(){return o},getSessionToken:function(){return r},getCurrentKey:function(){return l},getCurrentScrubber:function(){return p[b("TimelineComponentKeys").SCRUBBER]},getCurrentStickyHeaderNav:function(){return p[b("TimelineComponentKeys").STICKY_HEADER_NAV]},scrubberHasLoaded:function(a){b("CSS").conditionClass(a.getRoot(),"fixed_elem",!t)},sectionHasChanged:function(a,c){a=[a,c];y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"updateSection",a);y(b("TimelineComponentKeys").SCRUBBER,"updateSection",a)},navigateToSection:function(a){y(b("TimelineComponentKeys").CONTENT,"navigateToSection",[a])},adjustStickyHeaderWidth:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"adjustWidth")},dismissStickyHeaderConfirmationBar:function(){y(b("TimelineComponentKeys").STICKY_HEADER,"dismissConfirmationBar")},hideStickyHeaderNavSectionMenu:function(){y(b("TimelineComponentKeys").STICKY_HEADER_NAV,"hideSectionMenu")},register:function(a,c){p[a]=c,q[a]&&(b("forEachObject")(q[a],function(b,c){y(a,c,b)}),delete q[a])}};e.exports=J},null);
__d("TimelineJumperController",["csx","Arbiter","CSS","DateConsts","DOM","PageTransitions","ScrollingPager","TimelineController","UIPagelet","$","ge","queryThenMutateDOM"],function(a,b,c,d,e,f,g){"use strict";var h=b("DateConsts").MS_PER_SEC,i=null,j=null,k=null;function l(){j||(j=b("Arbiter").subscribeOnce("profile/onLeave",function(){var a=b("ge")("timeline_pager_container"+o(k));if(a!=null){a=n(a);a!=null&&a.cancelPagelet()}a=b("ge")("timeline_small_column");if(a!=null){a=n(a);a!=null&&a.cancelPagelet()}k=null;j=null}))}function m(a){if(a==="recent")return Date.now()/h;var b=a.split("_"),c=parseInt(b[1],10),d=12;a.startsWith("month")&&(d=parseInt(b[2],10));a=new Date(parseInt(c,10),parseInt(d,10));return a.getTime()/h-1}function n(a){a=b("DOM").scry(a,"._6z7p")[0];return a?b("ScrollingPager").getInstance(a.id):null}function o(a){var c="",d=b("TimelineController").getProfileID();d&&(c+="_"+d);a&&(c+="_"+a);return c}a=function(){function a(){l()}a.loadSection=function(a){i&&(i.cancel(),i=null);var c,d,e,f;b("queryThenMutateDOM")(function(){var a=o(k);c=b("$")("timeline_story_container"+a);d=b("$")("timeline_pager_container"+a);e=b("$")("timeline_pagelet_spinner");f=n(d)},function(){f&&f.cancelPagelet();var g=o(a);c.id="timeline_story_container"+g;d.id="timeline_pager_container"+g;k=a;b("DOM").empty(c);b("DOM").empty(d);b("CSS").show(e);i=b("UIPagelet").loadFromEndpoint("ProfileTimelineJumperStoriesPagelet",c,babelHelpers["extends"]({},b("PageTransitions").getCurrentURI().getQueryData(),{profile_id:b("TimelineController").getProfileID(),target_id:c.id,pager_target_id:d.id,end:m(a)}),{finallyHandler:function(){b("CSS").hide(e),i=null},constHeight:!0,usePipe:!0})})};return a}();e.exports=a},null);
__d("TimelineViewportTracking",["csx","Arbiter","Banzai","DataAttributeUtils","DOM","ViewportTracking","$","tidyEvent","viewportTrackingBuilder"],function(a,b,c,d,e,f,g){"use strict";function h(a,c){return{_stream:null,_streamDOMID:c,getDataFromConfig:function(a,c){c.isSeenStateLoggingEnabled=a.is_seen_state_logging_enabled,c.isTimetrackingEnabled=a.is_timetracking_enabled,c.vpvdDebug=!!a.vpvd_debug,b("tidyEvent")(b("Arbiter").subscribe(["TimelineConstants/unitSegmentLoaded"],function(){c.invalidateAllStoriesCache()}))},getAllStories:function(){var a=b("DOM").scry(this.getStream(),"._5pat"),c=[];for(var d=0;d<a.length;d++)this.getStoryID(a[d])&&c.push(a[d]);return c},getStream:function(){this._stream||(this._stream=b("$")(this._streamDOMID));return this._stream},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a)||null);if(a){var c="thid";return a[c]}return null},getDataToLog:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return{ft:a,log_type:"impression"}}}}var i=function(c){babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTimetrackingDataToLog=function(a){a=c.prototype.getTimetrackingDataToLog.call(this,a);a.log_type="duration";return a};d.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};d.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("timeline_feed_tracking",c,a)};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a,b){b=new i(h(a,b));b.init(a);return b});j.init=j.singleton.bind(j);e.exports=j},null);