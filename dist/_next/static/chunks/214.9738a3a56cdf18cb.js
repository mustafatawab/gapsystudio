(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{703:function(e,t,r){"use strict";r.d(t,{t:function(){return A}});var n=r(85893),s=r(67294),a=r(94184),l=r.n(a),i=r(62268),d=r(3851),c=r(29865),o=r.n(c),h=r(22509),u=r(41069);let _={lerp:.1,lerpReduction:.5,snapFriction:.1,endFriction:.5,hasWheel:!1,wheelSpeed:1,hasDrag:!0,dragSpeed:1.5,hasKeyboad:!0,hasFocus:!0,scrollType:"default"},p=[{breakpoint:"mobile",settings:{lerpReduction:0,dragSpeed:3}}];var g=r(51758),y=r(95023),b=r(72229),f=r(92411),m=r.n(f);let x=(0,s.forwardRef)((e,t)=>{let{children:r,index:s,onResize:a}=e,l=(0,g.t)(t),i=(0,y.z)(a);return(0,b.b)(l,()=>{var e;return i((null===(e=l.current)||void 0===e?void 0:e.clientWidth)||0)}),(0,n.jsx)("div",{ref:l,className:m().slide,role:"group","aria-roledescription":"slide","aria-label":"Slide ".concat(s+1),children:r})});x.displayName="Slide";var v=r(90882),w=r(43895),j=r(7371),k=r(94846),N=r(97579),S=r(99034),R=r(7364);let{lerp:C}=v.utils.math;var E=r(59440),F=r(11354);let{lerp:z,clamp:D}=v.utils.math;var M=r(74409),T=r(52796),P=r.n(T),X=r(18712),O=r(55240),I=r.n(O);let W=e=>{let{className:t,style:r,handler:a}=e,i=(0,s.useRef)(null);return(0,s.useEffect)(()=>{var e;if(!a)return;let t=null===(e=a.callbacks)||void 0===e?void 0:e.add("render",e=>{let{scrollProgress:t}=e;i.current&&(i.current.style.transform="scale(".concat(.25+.75*t,", 1)"))});return()=>null==t?void 0:t.remove()},[a]),(0,n.jsx)("div",{className:l()(I().line,t),style:r,children:(0,n.jsx)("div",{ref:i,className:I().indicator})})};var Y=r(69813),L=r.n(Y);let U=e=>{let{handler:t,isPrevDisabled:r,isNextDisabled:s}=e;return(0,n.jsxs)("div",{className:L().arrows,children:[(0,n.jsx)("button",{type:"button",className:L().arrow,"aria-label":"Go to previous slide",onClick:()=>!r&&(null==t?void 0:t.prev()),disabled:r,children:(0,n.jsx)("span",{children:"<"})}),(0,n.jsx)("button",{type:"button",className:L().arrow,"aria-label":"Go to next slide",onClick:()=>!s&&(null==t?void 0:t.next()),disabled:s,children:(0,n.jsx)("span",{children:">"})})]})},A=e=>{let{className:t,style:r,children:a,name:c,settings:g,adaptiveSettings:b,renderNavigation:f,tooltipText:m}=e,T=(0,s.useRef)(null),O=(0,s.useRef)(null),[I,Y]=(0,s.useState)(!0),[L,A]=(0,s.useState)(!1);(0,i.P)(T);let G=function(e){let{ref:t,name:r,settings:a,adaptiveSettings:l,children:i}=e,d=function(e){let{name:t,settings:r,adaptiveSettings:n=p}=e,[a,l]=(0,s.useState)({..._,...r});return(0,s.useEffect)(()=>{let e={..._,...r},t=new h.h(e,()=>{l({...t.prop})},()=>{l({...t.prop})});return null==n||n.forEach(e=>{t.addResponsiveProp({breakpoint:e.breakpoint,settings:e.settings})}),l({...t.prop}),()=>t.destroy()},[n,r]),(0,u.I)({name:t,source:a,controls:[{name:"lerp",type:"number",min:.001,max:1,step:1e-4},{name:"lerpReduction",type:"number",min:.001,max:1,step:1e-4},{name:"snapFriction",type:"number",min:.001,max:1,step:1e-4},{name:"endFriction",type:"number",min:.001,max:1,step:1e-4},{name:"hasWheel",type:"boolean"},{name:"wheelSpeed",type:"number",min:.1,max:3,step:.1},{name:"hasDrag",type:"boolean"},{name:"dragSpeed",type:"number",min:.1,max:3,step:.1},{name:"hasDrag",type:"boolean"},{name:"hasFocus",type:"boolean"}],onChange:e=>l(e)}),a}({name:r,settings:a,adaptiveSettings:l}),{children:c,slides:o}=function(e){let{children:t}=e,[r,a]=(0,s.useState)(t.map(()=>({element:null,width:0}))),l=(0,s.useMemo)(()=>t.map((e,t)=>(0,n.jsx)(x,{ref:e=>{a(r=>{let n=[...r];return n[t].element=e,n})},index:t,onResize:e=>{a(r=>{let n=[...r];return n[t].width=e,n})},children:e},e.key)),[t]);return{slides:r,children:l}}({children:i}),{getTarget:g,setTarget:b,setDirection:f,prev:m,next:T,goToSlide:O,callbacks:I}=function(e){let{ref:t,settings:r,slides:n}=e,a=(0,s.useRef)(0),l=(0,s.useRef)(1),i=function(){let e=(0,s.useMemo)(()=>j.j?new w.Y:null,[]);return e}(),{min:d,max:c,snapBreakpoints:o,normalizedSnapBreakpoints:h}=function(e){let{ref:t,slides:r,settings:n}=e,a=r.slice(-1)[0].width,l=r.reduce((e,t)=>{let{width:r}=t;return e+r},0)-a,{clientWidth:i}=(0,k.C)(t),d=Math.max(0,"bound"===n.scrollType?l-i+a:l),c=(0,s.useMemo)(()=>r.reduce((e,t)=>[...e,e.slice(-1)[0]+t.width],[0]),[r]),o="bound"!==n.scrollType?c:c.map(e=>Math.min(e,d));return{min:0,max:d,scrollLength:l,snapBreakpoints:c,normalizedSnapBreakpoints:o}}({ref:t,slides:n,settings:r}),u=e=>{let t=a.current;return a.current=function(e,t){let r=t.reduce((t,r)=>Math.abs(r-e)<Math.abs(t-e)?r:t);return t.findIndex(e=>e===r)}(e,h),t!==a.current&&(null==i||i.tbt("change",{prevIndex:t,activeIndex:a.current})),a.current},_=e=>{let t=0;for(let r=0;r<n.length;r+=1){let n=0===r?-1:o[r-1],s=o[r];t+=v.utils.math.clampScope(e,[n,s])}return v.utils.math.clamp(t,[1,n.length])},{getMoment:p,getTarget:g,setTarget:b,play:f}=function(e){let{settings:t,min:r,max:n,onBeforeTargetRender:a,onRender:l}=e,i=(0,s.useRef)(0),d=(0,s.useRef)(0),c=(0,s.useRef)(null);(0,s.useEffect)(()=>()=>{var e;return null===(e=c.current)||void 0===e?void 0:e.destroy()});let o=(0,y.z)(()=>{c.current||a(),d.current<r?d.current=C(d.current,r,t.endFriction):d.current>n&&(d.current=C(d.current,n,t.endFriction)),i.current=C(i.current,d.current,t.lerp),i.current===d.current&&u(),l()}),{play:h,pause:u}=(0,S.p)({onRender:o});return(0,R.T)(()=>{o()},[o]),{getMoment:()=>i.current,getTarget:()=>d.current,setTarget:function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t){d.current=e,h();return}if(t){if(c.current)return;let t=new N.T({duration:350,destroyOnEnd:!0});c.current=t;let r=i.current;t.addCallback("progress",t=>{let{easing:n}=t;d.current=r+(e-r)*n,i.current=d.current,h()}),t.addCallback("destroy",()=>{c.current=null}),t.play()}},play:h}}({settings:r,min:d,max:c,onBeforeTargetRender(){let e=u(p()),t=h[e];b(z(g(),t,r.snapFriction))},onRender(){let e=p(),t=g();null==i||i.tbt("render",{scrollProgress:0===c?1:e/c,slideProgress:_(e),index:a.current});let s=0,d=n.map(e=>(function(e){let{slide:t,left:r,settings:n,targetX:s,direction:a}=e,l=t.element;if(!l)return{isInterpolated:!0};let i=r+t.width/2-s,d=v.utils.math.clamp(i/E.vevet.viewport.width,[0,1]);-1===a&&(d=1-d);let c=d*n.lerpReduction*n.lerp,o=n.lerp-c;l.slideX=(0,F.h)(l.slideX)?l.slideX:0,l.slideX=v.utils.math.lerp(l.slideX,s,o);let h=l.slideX===s;return l.style.transform="translate3d(".concat(-l.slideX,"px, 0, 0)"),{isInterpolated:h}})({slide:e,left:(s+=e.width)-e.width,targetX:t,settings:r,direction:l.current})),o=!d.some(e=>!e.isInterpolated);o||f()}}),m=e=>D(a.current+("prev"===e?-1:1),[0,n.length-1]),x=e=>{l.current=e},M=(0,y.z)(e=>{e<0||e>n.length-1||(x(e>a.current?1:-1),b(h[e],!0))});return{getTarget:g,setTarget:b,setDirection:x,prev:()=>{x(-1),b(h[m("prev")],!0)},next:()=>{x(1),b(h[m("next")],!0)},goToSlide:M,callbacks:i}}({ref:t,settings:d,slides:o});return!function(e){let{ref:t,onWheel:r,settings:n}=e,s=(0,y.z)(r),a=(0,y.z)(e=>{e.preventDefault(),e.stopPropagation();let t=P()(e).pixelY*n.wheelSpeed,r=t>0?1:-1;s(t,r)});(0,M.O)({ref:t,target:"wheel",listener:a,isDisabled:!n.hasWheel})}({ref:t,onWheel(e,t){f(t),b(g()+e)},settings:d}),!function(e){let{ref:t,onMove:r,settings:n}=e,a=(0,y.z)(r),l=(0,y.z)(e=>{let t=e.step.x*n.dragSpeed,r=t<0?1:-1;a(t,r)});(0,s.useEffect)(()=>{let e=t.current;if(!e||!n.hasDrag)return;let r=0,s=new X.J({container:e});return s.addCallback("start",()=>{r=0}),s.addCallback("move",t=>{(r+=Math.abs(t.step.x))>5&&(t.evt.preventDefault(),t.evt.stopPropagation(),e.setAttribute("no-pointer-events","true")),l(t)}),s.addCallback("end",()=>{e.removeAttribute("no-pointer-events")}),()=>s.destroy()},[t,n.hasDrag,l])}({ref:t,onMove(e,t){f(t),b(g()-e)},settings:d}),!function(e){let{ref:t,slides:r,settings:n,onFocus:s}=e,a=(0,y.z)(s),l=(0,y.z)(e=>{let t=r.findIndex(t=>{var r;return null===(r=t.element)||void 0===r?void 0:r.contains(e.target)});-1!==t&&a(t)});(0,M.O)({ref:t,target:"focusin",listener:l,isDisabled:!n.hasFocus})}({ref:t,onFocus(e){O(e)},slides:o,settings:d}),!function(e){let{ref:t,onPrev:r,onNext:n,settings:s}=e,a=(0,y.z)(r),l=(0,y.z)(n),i=(0,y.z)(e=>{if(!t.current||![39,37].includes(e.keyCode))return;let r=t.current.getBoundingClientRect(),n=r.left<E.vevet.viewport.width&&r.right>0&&r.top<E.vevet.viewport.height&&r.bottom>0;n&&(37===e.keyCode&&a(),39===e.keyCode&&l())});(0,M.O)({ref:window,target:"keydown",listener:i,isDisabled:!s.hasKeyboad})}({ref:t,settings:d,onPrev(){m()},onNext(){T()}}),{children:c,prev:m,next:T,goToSlide:O,callbacks:I}}({ref:O,settings:g,adaptiveSettings:b,name:c,children:a}),{children:H}=G;return(0,s.useEffect)(()=>{var e;null===(e=G.callbacks)||void 0===e||e.add("change",e=>{let{activeIndex:t}=e;Y(0===t),A(t===G.children.length-1)})},[G]),(0,n.jsxs)("div",{ref:T,className:l()(o().container,t),style:r,"aria-roledescription":"carousel","aria-label":c,children:[(0,n.jsx)("div",{ref:O,className:o().slider,children:m?(0,n.jsx)(d.U,{text:m,children:(0,n.jsx)("div",{className:o().wrapper,children:H})}):(0,n.jsx)("div",{className:o().wrapper,children:H})}),(0,n.jsx)(U,{handler:G,isPrevDisabled:I,isNextDisabled:L}),(0,n.jsx)(W,{handler:G}),null==f?void 0:f(G)]})}},50430:function(e,t,r){"use strict";r.d(t,{X:function(){return c}});var n=r(85893),s=r(94184),a=r.n(s),l=r(67294),i=r(36858),d=r.n(i);let c=(0,l.forwardRef)((e,t)=>{let{variant:r,as:s,type:l="global",children:i,className:c,...o}=e,h=s||r,u=a()(c,!1!==s&&d()["".concat("global"===l?"":"typography_","heading_").concat(h)]);return 6===r?(0,n.jsx)("h6",{ref:t,...o,className:u,children:i}):5===r?(0,n.jsx)("h5",{ref:t,...o,className:u,children:i}):4===r?(0,n.jsx)("h4",{ref:t,...o,className:u,children:i}):3===r?(0,n.jsx)("h3",{ref:t,...o,className:u,children:i}):2===r?(0,n.jsx)("h2",{ref:t,...o,className:u,children:i}):(0,n.jsx)("h1",{ref:t,...o,className:u,children:i})});c.displayName="Heading"},87332:function(e,t,r){"use strict";r.d(t,{N:function(){return c}});var n=r(85893),s=r(94184),a=r.n(s),l=r(67294),i=r(28033),d=r.n(i);let c=(0,l.forwardRef)((e,t)=>{let{children:r,className:s,...l}=e;return(0,n.jsx)("span",{ref:t,...l,className:a()(d().outstanding_text,s),children:r})});c.displayName="OutstandingText"},3851:function(e,t,r){"use strict";r.d(t,{U:function(){return _}});var n=r(85893),s=r(67294),a=r(50779),l=r(59440),i=r(90882),d=r(82131),c=r(82789),o=r(98278),h=r(59317),u=r.n(h);let _=e=>{let{text:t,isForceVisible:r,children:h}=e,[_,p]=(0,s.useState)(!1);(0,s.useEffect)(()=>{p(!l.vevet.isMobile)},[]);let[g,y]=(0,s.useState)(null),[b,f]=(0,s.useState)(!1),[m,x]=(0,s.useState)(null),v=(0,s.useRef)({x:{current:0,target:0},y:{current:0,target:0}}),w=(0,s.useCallback)(e=>{if(!g)return;let{x:t,y:r}=v.current,n=e?1:.15;t.current=i.utils.math.lerp(t.current,t.target,n),r.current=i.utils.math.lerp(r.current,r.target,n),g.style.transform="translate(".concat(t.current,"px, ").concat(r.current,"px)")},[g]);return(0,s.useEffect)(()=>{if(!_)return;let e=new d.$;return x(e),e.addCallback("frame",()=>w()),()=>e.destroy()},[w,_]),(0,s.useEffect)(()=>{let e=(0,c.O)(window,"mousemove",e=>{v.current.x.target=e.clientX,v.current.y.target=e.clientY});return()=>e()},[]),(0,s.useEffect)(()=>{if(!g||!m)return;let e=b||r;g.style.visibility=e?"visible":"hidden",g.style.opacity=e?"1":"0",e?(w(!0),m.play()):m.pause()},[m,r,b,g,w]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{onMouseEnter:()=>(0,o.o)(r)&&f(!0),onMouseLeave:()=>(0,o.o)(r)&&f(!1),children:h}),_&&(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{ref:y,className:u().tooltip,"aria-hidden":!0,children:t})})]})}},87399:function(e,t,r){"use strict";r.d(t,{G:function(){return y}});var n=r(85893),s=r(94184),a=r.n(s),l=r(41664),i=r.n(l),d=r(50490),c=r(32719),o=r(87332),h=r(25675),u=r.n(h),_=r(28559),p=r.n(_),g={src:"/_next/static/media/label-breadcrumbs.d89d82f6.svg",height:24,width:24,blurWidth:0,blurHeight:0};let y=()=>{let e=(0,d.h)(),t=(0,c.j0)(),{breadcrumbs:r,breadcrumbsHeading:s}=t;return r&&r.length?(0,n.jsxs)("nav",{className:a()(p().breadcrumbs,!!s&&p().has_heading),"aria-label":e.breadcrumbs,children:[(0,n.jsx)(u(),{src:g.src,width:g.width,height:g.height,alt:e.breadcrumbs,className:p().label,"aria-hidden":!0}),(0,n.jsx)("ul",{className:p().list,"aria-label":e.breadcrumbs,children:r.map((e,t)=>(0,n.jsx)("li",{className:t===r.length-1?p().active:"",children:t===r.length-1?(0,n.jsx)("span",{className:p().globalize,children:e.name}):(0,n.jsx)(i(),{href:e.href,children:(0,n.jsx)("span",{children:e.name})})},e.id))}),s&&(0,n.jsx)(o.N,{className:p().outstanding,dangerouslySetInnerHTML:{__html:s}})]}):null}},69813:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__ZIxEj","crisp-chatbox":"styles_crisp-chatbox__C4sEw","desktop-hide":"styles_desktop-hide__1mxhi","tablet-hide":"styles_tablet-hide__4_hpD","phone-hide":"styles_phone-hide__AV9GO",arrows:"styles_arrows__vfbLi",arrow:"styles_arrow__Qp_f8"}},55240:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__QmJfV","crisp-chatbox":"styles_crisp-chatbox__Aabsw","desktop-hide":"styles_desktop-hide__B8mOF","tablet-hide":"styles_tablet-hide__fcSBK","phone-hide":"styles_phone-hide__2MnC_",line:"styles_line__O6eqT",indicator:"styles_indicator__DEnkL"}},92411:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__7AUOt","crisp-chatbox":"styles_crisp-chatbox__2baho","desktop-hide":"styles_desktop-hide__Lbbzp","tablet-hide":"styles_tablet-hide__vC46P","phone-hide":"styles_phone-hide__UTytF",slide:"styles_slide__PUarl"}},29865:function(e){e.exports={container:"styles_container__PfkFY",slider:"styles_slider__Pp1Su",wrapper:"styles_wrapper__stFG_"}},36858:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__6o6Y_","crisp-chatbox":"styles_crisp-chatbox__VLshJ","desktop-hide":"styles_desktop-hide__P_Vqg","tablet-hide":"styles_tablet-hide__iuQdy","phone-hide":"styles_phone-hide__V1515",heading_1:"styles_heading_1__S2S8F",heading_2:"styles_heading_2__1hnXA",heading_3:"styles_heading_3__tYxrH",heading_4:"styles_heading_4__SdcG6",heading_5:"styles_heading_5__H_9Ze",heading_6:"styles_heading_6__9aU5C",typography_heading_1:"styles_typography_heading_1__04qjl",typography_heading_2:"styles_typography_heading_2__kRwpQ",typography_heading_3:"styles_typography_heading_3__mabvx",typography_heading_4:"styles_typography_heading_4__jSbct",typography_heading_5:"styles_typography_heading_5__fjpNJ",typography_heading_6:"styles_typography_heading_6__ZsZT1"}},28033:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__CH3fS","crisp-chatbox":"styles_crisp-chatbox__QxNtj","desktop-hide":"styles_desktop-hide__ow9On","tablet-hide":"styles_tablet-hide__3WmnE","phone-hide":"styles_phone-hide__ksDha",outstanding_text:"styles_outstanding_text__xs4yx"}},59317:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__kL_xc","crisp-chatbox":"styles_crisp-chatbox__Ndgc4","desktop-hide":"styles_desktop-hide__TfFnp","tablet-hide":"styles_tablet-hide__jYFgQ","phone-hide":"styles_phone-hide__WIUd0",tooltip:"styles_tooltip__fOR7T"}},28559:function(e){e.exports={"grecaptcha-badge":"styles_grecaptcha-badge__h__OP","crisp-chatbox":"styles_crisp-chatbox__1f7XV","desktop-hide":"styles_desktop-hide__0q8Jt","tablet-hide":"styles_tablet-hide__rmxED","phone-hide":"styles_phone-hide__X710T",breadcrumbs:"styles_breadcrumbs__a79Ym",has_heading:"styles_has_heading__mg5YB",list:"styles_list__2XEX3",globalize:"styles_globalize__z7vwK",outstanding:"styles_outstanding__fL5od",label:"styles_label__fRSpJ"}}}]);