(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[591],{51439:function(e,t,n){"use strict";n.d(t,{l:function(){return r}});var s="undefined"!=typeof window,r=new Promise(function(e){if(!s||!(!("USE_DAT_GUI"in window)||window.USE_DAT_GUI)){e(null);return}n.e(376).then(n.bind(n,84376)).then(function(t){var n=new t.GUI({closed:!0}),s=document.createElement("style");s.innerHTML=".dg.ac { z-index: 999 !important; }",document.body.appendChild(s),e(n)}).catch(function(){})})},41069:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var s=n(67294),r=function(e,t,n){if(n||2==arguments.length)for(var s,r=0,a=t.length;r<a;r++)!s&&r in t||(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))},a=function(e){var t=(0,s.useRef)(e);return(0,s.useEffect)(function(){t.current=e},[e]),(0,s.useCallback)(function(){for(var e,n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,r([t],n,!1))},[])},i=n(51439),l=function(){return(l=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n};function o(e){var t,n,r,o,d,_,u,h,p,f,y,m,b,v=e.source,g=e.controls,x=e.debounceDelay,j=e.onChange,w=(n=(t=c(e,["source","controls","debounceDelay","onChange"])).name,r=t.isOpen,o=t.onSuccess,d=t.onError,u=(_=(0,s.useState)(null))[0],h=_[1],p=a(o),f=a(d),(0,s.useEffect)(function(){var e=!1,t=null,s=null;return i.l.then(function(a){s=a,!e&&s&&(t=s.addFolder(n),r&&t.open(),null==p||p(t),h(t))}).catch(f),function(){e=!0,t&&(null==s||s.removeFolder(t))}},[r,n,f,p]),u),O=(0,s.useState)(v)[0],N=(0,s.useState)(g)[0],k=(0,s.useState)(O),P=k[0],C=k[1],E=a(j),S=(y=function(){C(l({},O)),null==E||E(l({},O))},m=void 0===x?16:x,b=(0,s.useRef)(null),a(function(){b.current&&clearTimeout(b.current),b.current=setTimeout(function(){return y()},m)}));return(0,s.useEffect)(function(){if(w){var e=N.map(function(e){return"number"===e.type?w.add(O,e.name,e.min,e.max,e.step).onChange(S):"boolean"===e.type?w.add(O,e.name).onChange(S):"color"===e.type?w.addColor(O,e.name).onChange(S):void 0});return function(){e.forEach(function(e){return null==e?void 0:e.remove()})}}},[N,w,S,O]),P}},62268:function(e,t,n){"use strict";n.d(t,{P:function(){return i}});var s=n(7701),r=n(74409),a=function(){return(a=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function i(e,t){(0,r.O)(a({ref:e,target:"scroll",listener:function(){var t=(0,s.I)(e);t&&(t.scrollLeft=0,t.scrollTop=0)}},t))}},15547:function(e,t,n){"use strict";n.d(t,{w:function(){return b}});var s=n(94184),r=n.n(s),a=n(67294),i=n(122),l=n(51758),c=n(90882);class o extends Error{get isCanceled(){return!0}constructor(e){super(e||"Promise was canceled"),this.name="CancelError"}}class d{static fn(e){return function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];return new d((t,s,r)=>{n.push(r),e(...n).then(t,s)})}}then(e,t){return this._promise.then(e,t)}catch(e){return this._promise.catch(e)}finally(e){return this._promise.finally(e)}cancel(e){if(this._isPending&&!this._isCanceled){if(this._isCanceled=!0,this._cancelHandlers.length>0)try{for(let e of this._cancelHandlers)e()}catch(e){this._reject(e);return}this._rejectOnCancel&&this._reject(new o(e))}}get isCanceled(){return this._isCanceled}constructor(e){this._cancelHandlers=[],this._isPending=!0,this._isCanceled=!1,this._rejectOnCancel=!0,this._promise=new Promise((t,n)=>{this._reject=n;let s=e=>{if(!this._isPending)throw Error("The `onCancel` handler was attached after the promise settled.");this._cancelHandlers.push(e)};Object.defineProperties(s,{shouldReject:{get:()=>this._rejectOnCancel,set:e=>{this._rejectOnCancel=e}}}),e(e=>{this._isCanceled&&s.shouldReject||(this._isPending=!1,t(e))},e=>{this._isPending=!1,n(e)},s)})}}Object.setPrototypeOf(d.prototype,Promise.prototype);var _=function(e){var t,n=function(){return new d(function(t){e.play().then(t).catch(function(){return s(t)})})},s=function(e){null==t||t.clear(),t=c.utils.common.timeoutCallback(function(){var t;null===(t=n())||void 0===t||t.then(e).catch(function(){})},30)};return n()},u=function(){return(u=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n},p=(0,a.forwardRef)(function(e,t){var n=e.src,s=e.children,r=e.autoPlay,i=e.onLoadedMetadata,c=h(e,["src","children","autoPlay","onLoadedMetadata"]),o=(0,l.t)(t),d=(0,a.useState)(!1),p=d[0],f=d[1],y=p&&r;return(0,a.useEffect)(function(){if(y&&o.current){var e=_(o.current);return null==e||e.then(function(){}).catch(function(){}),function(){return null==e?void 0:e.cancel()}}},[y,o]),a.createElement("video",u({ref:o,disablePictureInPicture:!0,playsInline:!0,preload:"auto"},c,{src:void 0,onLoadedMetadata:function(e){null==i||i(e),setTimeout(function(){return f(!0)},0)}}),s||a.createElement("source",{src:n,type:"video/mp4"}))});p.displayName="BaseVideo";var f=n(21681),y=function(){return(y=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n},b=(0,a.forwardRef)(function(e,t){var n=e.className,s=e.style,l=e.position,c=void 0===l?"cover":l,o=e.onLoadedMetadata,d=m(e,["className","style","position","onLoadedMetadata"]),_=(0,a.useState)(null),u=_[0],h=_[1];(0,a.useImperativeHandle)(t,function(){return u});var b=(0,a.useState)(!1),v=b[0],g=b[1],x=(0,a.useState)(!1),j=x[0],w=x[1];(0,i._)(function(){return g(!0)},[]);var O=(0,f.I)("lazy-video",c,j&&"is-loaded");return v?a.createElement(p,y({ref:h},d,{className:r()(n,O),style:s,onLoadedMetadata:function(e){null==o||o(e),w(!0)}})):null});b.displayName="LazyVideo"},99034:function(e,t,n){"use strict";n.d(t,{p:function(){return c}});var s=n(95023),r=n(67294),a=n(82131),i=function(){return(i=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},l=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&0>t.indexOf(s)&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)0>t.indexOf(s[r])&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n};function c(e){var t=e.onRender,n=l(e,["onRender"]),c=(0,r.useState)(null),o=c[0],d=c[1],_=(0,r.useRef)(n),u=(0,s.z)(t);return(0,r.useEffect)(function(){var e=new a.$(i({run:!1},_.current));return d(e),e.addCallback("frame",u),function(){return e.destroy()}},[u,_]),(0,r.useEffect)(function(){null==o||o.changeProp({fps:n.fps})},[o,null==n?void 0:n.fps]),{play:function(){return null==o?void 0:o.play()},pause:function(){return null==o?void 0:o.pause()}}}},122:function(e,t,n){"use strict";n.d(t,{_:function(){return a}});var s=n(59440),r=n(67294);function a(e,t){(0,r.useEffect)(function(){var t,n=s.vevet.onPageLoaded();return n.then(function(){t=e()}).catch(function(){}),function(){n.cancel(),null==t||t()}},t)}},19988:function(e,t,n){"use strict";n.d(t,{j:function(){return u}});var s=n(85893),r=n(94184),a=n.n(r),i=n(32719),l=n(25788),c=n(50430),o=n(73725),d=n(48932),_=n.n(d);let u=e=>{let{title:t,linkName:n,linkHref:r,description:d,hVariant:u,hVariantAs:h,className:p,style:f,hasLine:y}=e,m=n&&r,b=!!d,{template:{catalog:{activePage:v=1}={}}}=(0,i.mV)();return(0,s.jsxs)("section",{className:a()(p,_().banner,y?"":_().banner_no_line),style:f,children:[t&&(0,s.jsx)(c.X,{className:_().title,variant:u||1,as:h,dangerouslySetInnerHTML:{__html:"".concat(t).concat(v>1?" Page ".concat(v):"")}}),(m||b)&&(0,s.jsxs)("div",{className:_().additional,children:[(0,s.jsx)("div",{className:_().additional_left,children:m&&(0,s.jsx)(l.o,{className:_().btn,href:r,tag:"a",size:"m",kind:"dark",text:n,"aria-label":n})}),b&&(0,s.jsx)(o.H,{className:_().description,html:d})]})]})}},43036:function(e,t,n){"use strict";n.d(t,{N:function(){return f}});var s=n(85893),r=n(94184),a=n.n(r),i=n(67294),l=n(51758),c=n(10448),o=n(13555),d=n(59440),_=n(40304),u=n(50490),h=n(27534),p=n.n(h);let f=(0,i.forwardRef)((e,t)=>{let{className:n,style:r,text:h,...f}=e,y=(0,l.t)(t),m=(0,u.h)(),b=(0,c.j)(y),[v,g]=(0,i.useState)(!1);(0,i.useEffect)(()=>{d.vevet.isMobile||g(!0)},[]);let x=[b&&p().hovered],j=h||m.viewMore;return(0,s.jsxs)(o.z,{ref:y,className:a()(n,p().button,x),style:r,"aria-label":j,...f,children:[(0,s.jsx)("div",{className:a()(p().arrow_container,x),children:(0,s.jsx)("svg",{className:a()(p().arrow,x),width:"9",height:"14",viewBox:"0 0 9 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:(0,s.jsx)("path",{d:"M1 1L7 7L1 13",stroke:"black",strokeWidth:"2"})})}),j&&(0,s.jsx)("span",{className:p().text,children:v?(0,s.jsx)(_.G,{text:j,isActive:b,duration:500}):j})]})});f.displayName="ButtonArrow"},89267:function(e,t,n){"use strict";n.d(t,{k:function(){return b}});var s=n(85893),r=n(703),a=n(50490),i=n(87332),l=n(97195),c=n(34171),o=n.n(c),d=n(94184),_=n.n(d),u=n(18721),h=n(41664),p=n.n(h),f=n(54507),y=n.n(f);let m=e=>{let{className:t,style:n,href:r,image:a,title:i}=e;return(0,s.jsx)("div",{className:_()(t),style:n,children:r&&(0,s.jsx)(p(),{className:y().image,href:r,"aria-label":i,draggable:!1,children:(0,s.jsx)("div",{className:y().container,children:a&&(0,s.jsx)(u.w,{paths:a,draggable:!1})})})})},b=e=>{let{className:t,style:n,title:c,items:d}=e,_=(0,a.h)();return(0,s.jsxs)("div",{className:t,style:n,children:[c&&(0,s.jsx)(i.N,{className:o().title,dangerouslySetInnerHTML:{__html:c}}),d&&(0,s.jsx)(r.t,{name:"Cases slider",className:o().slider,tooltipText:_.swipeOrClick,settings:{hasFocus:!1},renderNavigation:e=>(0,s.jsx)(l.d,{handler:e,items:d.map(e=>{let{key:t,title:n}=e;return{key:t,name:n||""}})}),children:d.map(e=>{let{key:t,...n}=e;return(0,s.jsx)(m,{...n,className:o().item},t)})})]})}},97195:function(e,t,n){"use strict";n.d(t,{d:function(){return d}});var s=n(85893),r=n(67294),a=n(38290),i=n.n(a),l=n(94184),c=n.n(l);let o=e=>{let{className:t,style:n,name:r,index:a,total:l}=e,o=a+1;return(0,s.jsxs)("div",{className:c()(i().heading,t),style:n,children:[(0,s.jsx)("div",{className:i().name,children:r}),(0,s.jsxs)("div",{className:i().count,children:[o<10?"0".concat(o):o," — ",l<10?"0".concat(l):l]})]})},d=e=>{let{handler:t,items:n}=e,a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{var e;let n=null==t?void 0:null===(e=t.callbacks)||void 0===e?void 0:e.add("render",e=>{let{slideProgress:t}=e;a.current&&(a.current.style.transform="translate3d(0, ".concat(100*(1-t),"%, 0)"))});return()=>null==n?void 0:n.remove()},[t]),(0,s.jsx)("div",{className:i().headings,"aria-hidden":!0,children:(0,s.jsx)("div",{ref:a,className:i().wrapper,children:n.map((e,t)=>{let{key:r,name:a}=e;return(0,s.jsx)(o,{name:a,index:t,total:n.length,style:{top:"".concat(100*t,"%")}},r)})})})}},81792:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var s=n(85893),r=n(94359),a=n(80785),i=n(19988),l=n(89267),c=n(87399),o=n(94972),d=n.n(o),_=n(94184),u=n.n(_),h=n(15547),p=n(18721),f=n(41664),y=n.n(f),m=n(50430),b=n(43036),v=n(73725),g=n(21916),x=n.n(g);let j=e=>{let{list:t,className:n,style:r}=e;return(0,s.jsx)("ul",{className:u()(n,x().list),style:r,children:t&&t.map(e=>{let{key:t,text:n}=e;return n&&(0,s.jsx)("li",{className:x().item,dangerouslySetInnerHTML:{__html:n}},t)})})};var w=n(86149),O=n.n(w);let N=e=>{let{subtitle:t,description:n,list:r,className:a,style:i,href:l}=e;return(0,s.jsxs)("div",{className:u()(a,O().container),style:i,children:[t&&(0,s.jsx)(y(),{href:l||"",className:O().title_link,children:(0,s.jsx)(m.X,{className:O().title,variant:3,as:6,dangerouslySetInnerHTML:{__html:t}})}),(0,s.jsxs)(v.H,{hasSpacings:!1,className:O().text_containner,children:[n&&(0,s.jsx)("div",{className:u()(O().description),dangerouslySetInnerHTML:{__html:n}}),r&&(0,s.jsx)(j,{className:O().list,list:r})]}),l&&(0,s.jsx)(b.N,{className:O().button,tag:"a",href:l})]})};var k=n(72056),P=n.n(k);let C=e=>{let{title:t,media:n,list:r,subtitle:a,description:i,className:l,style:c,href:o}=e;return(0,s.jsxs)("section",{className:u()(l,P().item),style:c,children:[t&&(0,s.jsx)(m.X,{className:P().title,variant:2,as:1,dangerouslySetInnerHTML:{__html:t}}),(0,s.jsxs)("div",{className:P().main,children:[(0,s.jsx)(y(),{href:o||"",className:P().image,children:(0,s.jsx)("div",{className:P().image__container,children:(null==n?void 0:n.video)&&(0,s.jsx)(h.w,{src:n.video,autoPlay:!0,loop:!0,muted:!0})||(null==n?void 0:n.image)&&(0,s.jsx)(p.w,{paths:n.image})})}),(0,s.jsx)(N,{className:P().description,subtitle:a,description:i,list:r,href:o})]})]})};var E=n(61083),S=e=>{let{banner:t,items:n,cases:o}=e;return(0,E.y)(),(0,s.jsxs)(r.k,{children:[(0,s.jsxs)(a.W,{variant:1,children:[(0,s.jsx)(c.G,{}),t&&(0,s.jsx)(i.j,{hasLine:!0,hVariant:1,...t}),(0,s.jsx)("div",{className:d().items,children:n&&n.map(e=>{let{key:t,...n}=e;return(0,s.jsx)(C,{...n},t)})})]}),o&&(0,s.jsx)(l.k,{className:d().cases,...o})]})}},48932:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__okKHy","crisp-chatbox":"styles_crisp-chatbox__GVDas","desktop-hide":"styles_desktop-hide__JsK_i","tablet-hide":"styles_tablet-hide__5J_eJ","phone-hide":"styles_phone-hide__VEvio",banner_no_line:"styles_banner_no_line__KGFY3",additional:"styles_additional__ja5X_",title:"styles_title__RakC2",btn:"styles_btn__WQBh2",description:"styles_description__sfwXp"}},27534:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__TqBDz","crisp-chatbox":"styles_crisp-chatbox__n_3Ty","desktop-hide":"styles_desktop-hide__1oLNj","tablet-hide":"styles_tablet-hide__0V3I9","phone-hide":"styles_phone-hide__m21bO",button:"styles_button__4fkhz",arrow_container:"styles_arrow_container__4mbEx",hovered:"styles_hovered__TXALU",arrow:"styles_arrow__woC_2",text:"styles_text__SNoov"}},54507:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__p5Ibp","crisp-chatbox":"styles_crisp-chatbox__whbrJ","desktop-hide":"styles_desktop-hide__YHzUb","tablet-hide":"styles_tablet-hide__P6jy5","phone-hide":"styles_phone-hide__TWVAf",image:"styles_image__Q_POt",container:"styles_container__Kp9o_"}},34171:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__4mHop","crisp-chatbox":"styles_crisp-chatbox__YYwWE","desktop-hide":"styles_desktop-hide__W7GRs","tablet-hide":"styles_tablet-hide__JJQ_x","phone-hide":"styles_phone-hide__ozcrc",title:"styles_title__em4DC",slider:"styles_slider__951e1",item:"styles_item__FKCqY"}},38290:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__L3KdC","crisp-chatbox":"styles_crisp-chatbox__KQsAi","desktop-hide":"styles_desktop-hide__xLSVK","tablet-hide":"styles_tablet-hide__Ggxz_","phone-hide":"styles_phone-hide__l1Mq2",headings:"styles_headings__vVGrF",wrapper:"styles_wrapper__5hriv",heading:"styles_heading__qcOCo",name:"styles_name__6PpYy",count:"styles_count__l3DWD"}},21916:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__qEmRI","crisp-chatbox":"styles_crisp-chatbox__Y62RN","desktop-hide":"styles_desktop-hide__vtx59","tablet-hide":"styles_tablet-hide__2XkLq","phone-hide":"styles_phone-hide__b3Q_7",list:"styles_list__kux1p",item:"styles_item__xTG_a"}},86149:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__Gkgnp","crisp-chatbox":"styles_crisp-chatbox__5NmPy","desktop-hide":"styles_desktop-hide__KQDfJ","tablet-hide":"styles_tablet-hide__FMpAK","phone-hide":"styles_phone-hide__3ouGI",title_link:"styles_title_link__ghfS9",title:"styles_title__hNrib",text_containner:"styles_text_containner__GWCWG",list:"styles_list__XI8JQ",description:"styles_description__RBGWk",button:"styles_button__5oa__"}},72056:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__DKIN_","crisp-chatbox":"styles_crisp-chatbox___GbpW","desktop-hide":"styles_desktop-hide__McHsC","tablet-hide":"styles_tablet-hide__MfY8_","phone-hide":"styles_phone-hide__1cPpY",item:"styles_item__NqfdV",main:"styles_main__p_l9R",image:"styles_image__YGmB5",image__container:"styles_image__container__XyCIE",description:"styles_description__AQQ4t"}},94972:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__XtH2v","crisp-chatbox":"styles_crisp-chatbox__151dx","desktop-hide":"styles_desktop-hide__qTHj1","tablet-hide":"styles_tablet-hide__H0er7","phone-hide":"styles_phone-hide__mf2WN",items:"styles_items__7XWDT",cases:"styles_cases__nhood"}}}]);