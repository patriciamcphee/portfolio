"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8921],{99929:(e,t,a)=>{var r=a(64836);t.Z=void 0;var n=r(a(64938)),o=a(85893),l=(0,n.default)((0,o.jsx)("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"}),"FileDownload");t.Z=l},76403:(e,t,a)=>{var r=a(64836);t.Z=void 0;var n=r(a(64938)),o=a(85893),l=(0,n.default)((0,o.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Grade");t.Z=l},55831:(e,t,a)=>{a.d(t,{ZP:()=>oe});var r=a(63366),n=a(87462),o=a(67294),l=a(86010),i=a(1588),s=a(34867);function u(e){return(0,s.Z)("MuiSlider",e)}const c=(0,i.Z)("MuiSlider",["root","active","focusVisible","disabled","dragging","marked","vertical","trackInverted","trackFalse","rail","track","mark","markActive","markLabel","markLabelActive","thumb","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel"]);var d=a(85893);function m(e){const{children:t,className:a,value:r}=e,n=(e=>{const{open:t}=e;return{offset:(0,l.Z)(t&&c.valueLabelOpen),circle:c.valueLabelCircle,label:c.valueLabelLabel}})(e);return o.cloneElement(t,{className:(0,l.Z)(t.props.className)},(0,d.jsxs)(o.Fragment,{children:[t.props.children,(0,d.jsx)("span",{className:(0,l.Z)(n.offset,a),"aria-hidden":!0,children:(0,d.jsx)("span",{className:n.circle,children:(0,d.jsx)("span",{className:n.label,children:r})})})]}))}var v=a(28442),p=a(94780),b=a(57094),h=a(8925),f=a(99962),g=a(30067),x=a(16600),Z=a(73633);const k={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function S(e,t){return e-t}function w(e,t,a){return null==e?t:Math.min(Math.max(t,e),a)}function y(e,t){var a;const{index:r}=null!=(a=e.reduce(((e,a,r)=>{const n=Math.abs(t-a);return null===e||n<e.distance||n===e.distance?{distance:n,index:r}:e}),null))?a:{};return r}function L(e,t){if(void 0!==t.current&&e.changedTouches){const a=e;for(let e=0;e<a.changedTouches.length;e+=1){const r=a.changedTouches[e];if(r.identifier===t.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function P(e,t,a){return 100*(e-t)/(a-t)}function z(e,t,a){const r=Math.round((e-a)/t)*t+a;return Number(r.toFixed(function(e){if(Math.abs(e)<1){const t=e.toExponential().split("e-"),a=t[0].split(".")[1];return(a?a.length:0)+parseInt(t[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}(t)))}function R({values:e,newValue:t,index:a}){const r=e.slice();return r[a]=t,r.sort(S)}function C({sliderRef:e,activeIndex:t,setActive:a}){var r,n;const o=(0,b.Z)(e.current);var l;null!=(r=e.current)&&r.contains(o.activeElement)&&Number(null==o||null==(n=o.activeElement)?void 0:n.getAttribute("data-index"))===t||(null==(l=e.current)||l.querySelector(`[type="range"][data-index="${t}"]`).focus());a&&a(t)}const N={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},A=e=>e;let $;function T(){return void 0===$&&($="undefined"==typeof CSS||"function"!=typeof CSS.supports||CSS.supports("touch-action","none")),$}function M(e){const{"aria-labelledby":t,defaultValue:a,disabled:r=!1,disableSwap:l=!1,isRtl:i=!1,marks:s=!1,max:u=100,min:c=0,name:d,onChange:m,onChangeCommitted:v,orientation:p="horizontal",ref:$,scale:M=A,step:j=1,tabIndex:I,value:E}=e,F=o.useRef(),[O,V]=o.useState(-1),[D,Y]=o.useState(-1),[H,B]=o.useState(!1),X=o.useRef(0),[q,W]=(0,h.Z)({controlled:E,default:null!=a?a:c,name:"Slider"}),G=m&&((e,t,a)=>{const r=e.nativeEvent||e,n=new r.constructor(r.type,r);Object.defineProperty(n,"target",{writable:!0,value:{value:t,name:d}}),m(n,t,a)}),_=Array.isArray(q);let J=_?q.slice().sort(S):[q];J=J.map((e=>w(e,c,u)));const K=!0===s&&null!==j?[...Array(Math.floor((u-c)/j)+1)].map(((e,t)=>({value:c+j*t}))):s||[],Q=K.map((e=>e.value)),{isFocusVisibleRef:U,onBlur:ee,onFocus:te,ref:ae}=(0,f.Z)(),[re,ne]=o.useState(-1),oe=o.useRef(),le=(0,g.Z)(ae,oe),ie=(0,g.Z)($,le),se=e=>t=>{var a;const r=Number(t.currentTarget.getAttribute("data-index"));te(t),!0===U.current&&ne(r),Y(r),null==e||null==(a=e.onFocus)||a.call(e,t)},ue=e=>t=>{var a;ee(t),!1===U.current&&ne(-1),Y(-1),null==e||null==(a=e.onBlur)||a.call(e,t)};(0,x.Z)((()=>{var e;r&&oe.current.contains(document.activeElement)&&(null==(e=document.activeElement)||e.blur())}),[r]),r&&-1!==O&&V(-1),r&&-1!==re&&ne(-1);const ce=e=>t=>{var a;null==(a=e.onChange)||a.call(e,t);const r=Number(t.currentTarget.getAttribute("data-index")),n=J[r],o=Q.indexOf(n);let i=t.target.valueAsNumber;if(K&&null==j&&(i=i<n?Q[o-1]:Q[o+1]),i=w(i,c,u),K&&null==j){const e=Q.indexOf(J[r]);i=i<J[r]?Q[e-1]:Q[e+1]}if(_){l&&(i=w(i,J[r-1]||-1/0,J[r+1]||1/0));const e=i;i=R({values:J,newValue:i,index:r});let t=r;l||(t=i.indexOf(e)),C({sliderRef:oe,activeIndex:t})}W(i),ne(r),G&&G(t,i,r),v&&v(t,i)},de=o.useRef();let me=p;i&&"horizontal"===p&&(me+="-reverse");const ve=({finger:e,move:t=!1})=>{const{current:a}=oe,{width:r,height:n,bottom:o,left:i}=a.getBoundingClientRect();let s,d;if(s=0===me.indexOf("vertical")?(o-e.y)/n:(e.x-i)/r,-1!==me.indexOf("-reverse")&&(s=1-s),d=function(e,t,a){return(a-t)*e+t}(s,c,u),j)d=z(d,j,c);else{const e=y(Q,d);d=Q[e]}d=w(d,c,u);let m=0;if(_){m=t?de.current:y(J,d),l&&(d=w(d,J[m-1]||-1/0,J[m+1]||1/0));const e=d;d=R({values:J,newValue:d,index:m}),l&&t||(m=d.indexOf(e),de.current=m)}return{newValue:d,activeIndex:m}},pe=(0,Z.Z)((e=>{const t=L(e,F);if(!t)return;if(X.current+=1,"mousemove"===e.type&&0===e.buttons)return void be(e);const{newValue:a,activeIndex:r}=ve({finger:t,move:!0});C({sliderRef:oe,activeIndex:r,setActive:V}),W(a),!H&&X.current>2&&B(!0),G&&a!==q&&G(e,a,r)})),be=(0,Z.Z)((e=>{const t=L(e,F);if(B(!1),!t)return;const{newValue:a}=ve({finger:t,move:!0});V(-1),"touchend"===e.type&&Y(-1),v&&v(e,a),F.current=void 0,fe()})),he=(0,Z.Z)((e=>{if(r)return;T()||e.preventDefault();const t=e.changedTouches[0];null!=t&&(F.current=t.identifier);const a=L(e,F);if(!1!==a){const{newValue:t,activeIndex:r}=ve({finger:a});C({sliderRef:oe,activeIndex:r,setActive:V}),W(t),G&&G(e,t,r)}X.current=0;const n=(0,b.Z)(oe.current);n.addEventListener("touchmove",pe),n.addEventListener("touchend",be)})),fe=o.useCallback((()=>{const e=(0,b.Z)(oe.current);e.removeEventListener("mousemove",pe),e.removeEventListener("mouseup",be),e.removeEventListener("touchmove",pe),e.removeEventListener("touchend",be)}),[be,pe]);o.useEffect((()=>{const{current:e}=oe;return e.addEventListener("touchstart",he,{passive:T()}),()=>{e.removeEventListener("touchstart",he,{passive:T()}),fe()}}),[fe,he]),o.useEffect((()=>{r&&fe()}),[r,fe]);const ge=e=>t=>{var a;if(null==(a=e.onMouseDown)||a.call(e,t),r)return;if(t.defaultPrevented)return;if(0!==t.button)return;t.preventDefault();const n=L(t,F);if(!1!==n){const{newValue:e,activeIndex:a}=ve({finger:n});C({sliderRef:oe,activeIndex:a,setActive:V}),W(e),G&&G(t,e,a)}X.current=0;const o=(0,b.Z)(oe.current);o.addEventListener("mousemove",pe),o.addEventListener("mouseup",be)},xe=P(_?J[0]:c,c,u),Ze=P(J[J.length-1],c,u)-xe,ke=e=>t=>{var a;null==(a=e.onMouseOver)||a.call(e,t);const r=Number(t.currentTarget.getAttribute("data-index"));Y(r)},Se=e=>t=>{var a;null==(a=e.onMouseLeave)||a.call(e,t),Y(-1)};return{active:O,axis:me,axisProps:N,dragging:H,focusedThumbIndex:re,getHiddenInputProps:(a={})=>{var o;const l={onChange:ce(a||{}),onFocus:se(a||{}),onBlur:ue(a||{})},s=(0,n.Z)({},a,l);return(0,n.Z)({tabIndex:I,"aria-labelledby":t,"aria-orientation":p,"aria-valuemax":M(u),"aria-valuemin":M(c),name:d,type:"range",min:e.min,max:e.max,step:null!=(o=e.step)?o:void 0,disabled:r},s,{style:(0,n.Z)({},k,{direction:i?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:(e={})=>{const t={onMouseDown:ge(e||{})},a=(0,n.Z)({},e,t);return(0,n.Z)({ref:ie},a)},getThumbProps:(e={})=>{const t={onMouseOver:ke(e||{}),onMouseLeave:Se(e||{})};return(0,n.Z)({},e,t)},marks:K,open:D,range:_,trackLeap:Ze,trackOffset:xe,values:J}}function j(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((a=>{t[a]=e[a]})),t}function I(e){const{getSlotProps:t,additionalProps:a,externalSlotProps:r,externalForwardedProps:o,className:i}=e;if(!t){const e=(0,l.Z)(null==o?void 0:o.className,null==r?void 0:r.className,i,null==a?void 0:a.className),t=(0,n.Z)({},null==a?void 0:a.style,null==o?void 0:o.style,null==r?void 0:r.style),s=(0,n.Z)({},a,o,r);return e.length>0&&(s.className=e),Object.keys(t).length>0&&(s.style=t),{props:s,internalRef:void 0}}const s=function(e,t=[]){if(void 0===e)return{};const a={};return Object.keys(e).filter((a=>a.match(/^on[A-Z]/)&&"function"==typeof e[a]&&!t.includes(a))).forEach((t=>{a[t]=e[t]})),a}((0,n.Z)({},o,r)),u=j(r),c=j(o),d=t(s),m=(0,l.Z)(null==d?void 0:d.className,null==a?void 0:a.className,i,null==o?void 0:o.className,null==r?void 0:r.className),v=(0,n.Z)({},null==d?void 0:d.style,null==a?void 0:a.style,null==o?void 0:o.style,null==r?void 0:r.style),p=(0,n.Z)({},d,a,c,u);return m.length>0&&(p.className=m),Object.keys(v).length>0&&(p.style=v),{props:p,internalRef:d.ref}}const E=["elementType","externalSlotProps","ownerState"];function F(e){var t;const{elementType:a,externalSlotProps:o,ownerState:l}=e,i=(0,r.Z)(e,E),s=function(e,t){return"function"==typeof e?e(t):e}(o,l),{props:u,internalRef:c}=I((0,n.Z)({},i,{externalSlotProps:s})),d=(0,g.Z)(c,null==s?void 0:s.ref,null==(t=e.additionalProps)?void 0:t.ref),m=function(e,t,a){return(0,v.Z)(e)?t:(0,n.Z)({},t,{ownerState:(0,n.Z)({},t.ownerState,a)})}(a,(0,n.Z)({},u,{ref:d}),l);return m}const O=["aria-label","aria-valuetext","aria-labelledby","className","component","classes","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","scale","step","tabIndex","track","value","valueLabelDisplay","valueLabelFormat","isRtl","slotProps","slots"],V=e=>e,D=({children:e})=>e,Y=o.forwardRef((function(e,t){var a,i,s,c,b,h,f;const{"aria-label":g,"aria-valuetext":x,"aria-labelledby":Z,className:k,component:S,classes:w,disableSwap:y=!1,disabled:L=!1,getAriaLabel:z,getAriaValueText:R,marks:C=!1,max:N=100,min:A=0,orientation:$="horizontal",scale:T=V,step:j=1,track:I="normal",valueLabelDisplay:E="off",valueLabelFormat:Y=V,isRtl:H=!1,slotProps:B={},slots:X={}}=e,q=(0,r.Z)(e,O),W=(0,n.Z)({},e,{marks:C,classes:w,disabled:L,isRtl:H,max:N,min:A,orientation:$,scale:T,step:j,track:I,valueLabelDisplay:E,valueLabelFormat:Y}),{axisProps:G,getRootProps:_,getHiddenInputProps:J,getThumbProps:K,open:Q,active:U,axis:ee,range:te,focusedThumbIndex:ae,dragging:re,marks:ne,values:oe,trackOffset:le,trackLeap:ie}=M((0,n.Z)({},W,{ref:t}));W.marked=ne.length>0&&ne.some((e=>e.label)),W.dragging=re,W.focusedThumbIndex=ae;const se=(e=>{const{disabled:t,dragging:a,marked:r,orientation:n,track:o,classes:l}=e,i={root:["root",t&&"disabled",a&&"dragging",r&&"marked","vertical"===n&&"vertical","inverted"===o&&"trackInverted",!1===o&&"trackFalse"],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled"],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return(0,p.Z)(i,u,l)})(W),ue=null!=(a=null!=S?S:X.root)?a:"span",ce=F({elementType:ue,getSlotProps:_,externalSlotProps:B.root,externalForwardedProps:q,ownerState:W,className:[se.root,k]}),de=null!=(i=X.rail)?i:"span",me=F({elementType:de,externalSlotProps:B.rail,ownerState:W,className:se.rail}),ve=null!=(s=X.track)?s:"span",pe=F({elementType:ve,externalSlotProps:B.track,additionalProps:{style:(0,n.Z)({},G[ee].offset(le),G[ee].leap(ie))},ownerState:W,className:se.track}),be=null!=(c=X.thumb)?c:"span",he=F({elementType:be,getSlotProps:K,externalSlotProps:B.thumb,ownerState:W}),fe=null!=(b=X.valueLabel)?b:m,ge=F({elementType:fe,externalSlotProps:B.valueLabel,ownerState:W}),xe=null!=(h=X.mark)?h:"span",Ze=F({elementType:xe,externalSlotProps:B.mark,ownerState:W,className:se.mark}),ke=null!=(f=X.markLabel)?f:"span",Se=F({elementType:ke,externalSlotProps:B.markLabel,ownerState:W}),we=X.input||"input",ye=F({elementType:we,getSlotProps:J,externalSlotProps:B.input,ownerState:W});return(0,d.jsxs)(ue,(0,n.Z)({},ce,{children:[(0,d.jsx)(de,(0,n.Z)({},me)),(0,d.jsx)(ve,(0,n.Z)({},pe)),ne.filter((e=>e.value>=A&&e.value<=N)).map(((e,t)=>{const a=P(e.value,A,N),r=G[ee].offset(a);let i;return i=!1===I?-1!==oe.indexOf(e.value):"normal"===I&&(te?e.value>=oe[0]&&e.value<=oe[oe.length-1]:e.value<=oe[0])||"inverted"===I&&(te?e.value<=oe[0]||e.value>=oe[oe.length-1]:e.value>=oe[0]),(0,d.jsxs)(o.Fragment,{children:[(0,d.jsx)(xe,(0,n.Z)({"data-index":t},Ze,!(0,v.Z)(xe)&&{markActive:i},{style:(0,n.Z)({},r,Ze.style),className:(0,l.Z)(Ze.className,i&&se.markActive)})),null!=e.label?(0,d.jsx)(ke,(0,n.Z)({"aria-hidden":!0,"data-index":t},Se,!(0,v.Z)(ke)&&{markLabelActive:i},{style:(0,n.Z)({},r,Se.style),className:(0,l.Z)(se.markLabel,Se.className,i&&se.markLabelActive),children:e.label})):null]},t)})),oe.map(((e,t)=>{const a=P(e,A,N),r=G[ee].offset(a),i="off"===E?D:fe;return(0,d.jsx)(o.Fragment,{children:(0,d.jsx)(i,(0,n.Z)({},!(0,v.Z)(i)&&{valueLabelFormat:Y,valueLabelDisplay:E,value:"function"==typeof Y?Y(T(e),t):Y,index:t,open:Q===t||U===t||"on"===E,disabled:L},ge,{className:(0,l.Z)(se.valueLabel,ge.className),children:(0,d.jsx)(be,(0,n.Z)({"data-index":t,"data-focusvisible":ae===t},he,{className:(0,l.Z)(se.thumb,he.className,U===t&&se.active,ae===t&&se.focusVisible),style:(0,n.Z)({},r,{pointerEvents:y&&U!==t?"none":void 0},he.style),children:(0,d.jsx)(we,(0,n.Z)({"data-index":t,"aria-label":z?z(t):g,"aria-valuenow":T(e),"aria-labelledby":Z,"aria-valuetext":R?R(T(e),t):x,value:oe[t]},ye))}))}))},t)}))]}))})),H=Y;var B=a(41796),X=a(78884),q=a(81719),W=a(62097);const G=e=>!e||!(0,v.Z)(e);var _=a(36622);const J=["component","components","componentsProps","color","size","slotProps","slots"],K=(0,n.Z)({},c,(0,i.Z)("MuiSlider",["colorPrimary","colorSecondary","thumbColorPrimary","thumbColorSecondary","sizeSmall","thumbSizeSmall"])),Q=(0,q.ZP)("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[`color${(0,_.Z)(a.color)}`],"medium"!==a.size&&t[`size${(0,_.Z)(a.size)}`],a.marked&&t.marked,"vertical"===a.orientation&&t.vertical,"inverted"===a.track&&t.trackInverted,!1===a.track&&t.trackFalse]}})((({theme:e,ownerState:t})=>(0,n.Z)({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},"horizontal"===t.orientation&&(0,n.Z)({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},"small"===t.size&&{height:2},t.marked&&{marginBottom:20}),"vertical"===t.orientation&&(0,n.Z)({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},"small"===t.size&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${K.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${K.dragging}`]:{[`& .${K.thumb}, & .${K.track}`]:{transition:"none"}}}))),U=(0,q.ZP)("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})((({ownerState:e})=>(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},"horizontal"===e.orientation&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===e.orientation&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},"inverted"===e.track&&{opacity:1}))),ee=(0,q.ZP)("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})((({theme:e,ownerState:t})=>{const a="light"===e.palette.mode?(0,B.$n)(e.palette[t.color].main,.62):(0,B._j)(e.palette[t.color].main,.5);return(0,n.Z)({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{border:"none"},"horizontal"===t.orientation&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},"vertical"===t.orientation&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},!1===t.track&&{display:"none"},"inverted"===t.track&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:a,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:a})})),te=(0,q.ZP)("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.thumb,t[`thumbColor${(0,_.Z)(a.color)}`],"medium"!==a.size&&t[`thumbSize${(0,_.Z)(a.size)}`]]}})((({theme:e,ownerState:t})=>(0,n.Z)({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},"small"===t.size&&{width:12,height:12},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-50%, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 50%)"},{"&:before":(0,n.Z)({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"small"===t.size&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${K.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,B.Fq)(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${K.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:(0,B.Fq)(e.palette[t.color].main,.16)}`},[`&.${K.disabled}`]:{"&:hover":{boxShadow:"none"}}}))),ae=(0,q.ZP)(m,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})((({theme:e,ownerState:t})=>(0,n.Z)({[`&.${K.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:"translateY(-100%) scale(0)",position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},"horizontal"===t.orientation&&{top:"-10px",transformOrigin:"bottom center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},"vertical"===t.orientation&&{right:"30px",top:"24px",transformOrigin:"right center","&:before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",right:"-20%",top:"25%"}},"small"===t.size&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}))),re=(0,q.ZP)("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>(0,q.Dz)(e)&&"markActive"!==e,overridesResolver:(e,t)=>t.mark})((({theme:e,ownerState:t,markActive:a})=>(0,n.Z)({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},"horizontal"===t.orientation&&{top:"50%",transform:"translate(-1px, -50%)"},"vertical"===t.orientation&&{left:"50%",transform:"translate(-50%, 1px)"},a&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}))),ne=(0,q.ZP)("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>(0,q.Dz)(e)&&"markLabelActive"!==e,overridesResolver:(e,t)=>t.markLabel})((({theme:e,ownerState:t,markLabelActive:a})=>(0,n.Z)({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},"horizontal"===t.orientation&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},"vertical"===t.orientation&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},a&&{color:(e.vars||e).palette.text.primary}))),oe=o.forwardRef((function(e,t){var a,o,i,s,c,m,v,p,b,h,f,g,x,Z,k,S,w,y,L,P,z,R,C;const N=(0,X.Z)({props:e,name:"MuiSlider"}),A="rtl"===(0,W.Z)().direction,{component:$="span",components:T={},componentsProps:M={},color:j="primary",size:I="medium",slotProps:E,slots:F}=N,O=(0,r.Z)(N,J),V=(e=>{const{color:t,size:a,classes:r={}}=e;return(0,n.Z)({},r,{root:(0,l.Z)(r.root,u(`color${(0,_.Z)(t)}`),r[`color${(0,_.Z)(t)}`],a&&[u(`size${(0,_.Z)(a)}`),r[`size${(0,_.Z)(a)}`]]),thumb:(0,l.Z)(r.thumb,u(`thumbColor${(0,_.Z)(t)}`),r[`thumbColor${(0,_.Z)(t)}`],a&&[u(`thumbSize${(0,_.Z)(a)}`),r[`thumbSize${(0,_.Z)(a)}`]])})})((0,n.Z)({},N,{color:j,size:I})),D=null!=(a=null!=(o=null==F?void 0:F.root)?o:T.Root)?a:Q,Y=null!=(i=null!=(s=null==F?void 0:F.rail)?s:T.Rail)?i:U,B=null!=(c=null!=(m=null==F?void 0:F.track)?m:T.Track)?c:ee,q=null!=(v=null!=(p=null==F?void 0:F.thumb)?p:T.Thumb)?v:te,K=null!=(b=null!=(h=null==F?void 0:F.valueLabel)?h:T.ValueLabel)?b:ae,oe=null!=(f=null!=(g=null==F?void 0:F.mark)?g:T.Mark)?f:re,le=null!=(x=null!=(Z=null==F?void 0:F.markLabel)?Z:T.MarkLabel)?x:ne,ie=null!=(k=null==F?void 0:F.input)?k:T.Input,se=null!=(S=null==E?void 0:E.root)?S:M.root,ue=null!=(w=null==E?void 0:E.rail)?w:M.rail,ce=null!=(y=null==E?void 0:E.track)?y:M.track,de=null!=(L=null==E?void 0:E.thumb)?L:M.thumb,me=null!=(P=null==E?void 0:E.valueLabel)?P:M.valueLabel,ve=null!=(z=null==E?void 0:E.mark)?z:M.mark,pe=null!=(R=null==E?void 0:E.markLabel)?R:M.markLabel,be=null!=(C=null==E?void 0:E.input)?C:M.input;return(0,d.jsx)(H,(0,n.Z)({},O,{isRtl:A,slots:{root:D,rail:Y,track:B,thumb:q,valueLabel:K,mark:oe,markLabel:le,input:ie},slotProps:(0,n.Z)({},M,{root:(0,n.Z)({},se,G(D)&&{as:$,ownerState:(0,n.Z)({},null==se?void 0:se.ownerState,{color:j,size:I})}),rail:ue,thumb:(0,n.Z)({},de,G(q)&&{ownerState:(0,n.Z)({},null==de?void 0:de.ownerState,{color:j,size:I})}),track:(0,n.Z)({},ce,G(B)&&{ownerState:(0,n.Z)({},null==ce?void 0:ce.ownerState,{color:j,size:I})}),valueLabel:(0,n.Z)({},me,G(K)&&{ownerState:(0,n.Z)({},null==me?void 0:me.ownerState,{color:j,size:I})}),mark:ve,markLabel:pe,input:be}),classes:V,ref:t}))}))}}]);