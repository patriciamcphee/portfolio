"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[2776],{87918:(e,t,a)=>{a.d(t,{Z:()=>x});var o=a(63366),l=a(87462),r=a(67294),n=a(86010),c=a(94780),i=a(41796),s=a(88169),d=a(85893);const p=(0,s.Z)((0,d.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var u=a(58031),m=a(98216),b=a(83062),v=a(71657),h=a(90948),g=a(1588),f=a(34867);function y(e){return(0,f.Z)("MuiChip",e)}const C=(0,g.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),$=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],k=(0,h.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e,{color:o,iconColor:l,clickable:r,onDelete:n,size:c,variant:i}=a;return[{[`& .${C.avatar}`]:t.avatar},{[`& .${C.avatar}`]:t[`avatar${(0,m.Z)(c)}`]},{[`& .${C.avatar}`]:t[`avatarColor${(0,m.Z)(o)}`]},{[`& .${C.icon}`]:t.icon},{[`& .${C.icon}`]:t[`icon${(0,m.Z)(c)}`]},{[`& .${C.icon}`]:t[`iconColor${(0,m.Z)(l)}`]},{[`& .${C.deleteIcon}`]:t.deleteIcon},{[`& .${C.deleteIcon}`]:t[`deleteIcon${(0,m.Z)(c)}`]},{[`& .${C.deleteIcon}`]:t[`deleteIconColor${(0,m.Z)(o)}`]},{[`& .${C.deleteIcon}`]:t[`deleteIcon${(0,m.Z)(i)}Color${(0,m.Z)(o)}`]},t.root,t[`size${(0,m.Z)(c)}`],t[`color${(0,m.Z)(o)}`],r&&t.clickable,r&&"default"!==o&&t[`clickableColor${(0,m.Z)(o)})`],n&&t.deletable,n&&"default"!==o&&t[`deletableColor${(0,m.Z)(o)}`],t[i],t[`${i}${(0,m.Z)(o)}`]]}})((({theme:e,ownerState:t})=>{const a="light"===e.palette.mode?e.palette.grey[700]:e.palette.grey[300];return(0,l.Z)({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${C.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${C.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:a,fontSize:e.typography.pxToRem(12)},[`& .${C.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${C.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${C.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${C.icon}`]:(0,l.Z)({marginLeft:5,marginRight:-6},"small"===t.size&&{fontSize:18,marginLeft:4,marginRight:-4},t.iconColor===t.color&&(0,l.Z)({color:e.vars?e.vars.palette.Chip.defaultIconColor:a},"default"!==t.color&&{color:"inherit"})),[`& .${C.deleteIcon}`]:(0,l.Z)({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:(0,i.Fq)(e.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:(0,i.Fq)(e.palette.text.primary,.4)}},"small"===t.size&&{fontSize:16,marginRight:4,marginLeft:-4},"default"!==t.color&&{color:e.vars?`rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)`:(0,i.Fq)(e.palette[t.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].contrastText}})},"small"===t.size&&{height:24},"default"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.onDelete&&{[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},t.onDelete&&"default"!==t.color&&{[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})}),(({theme:e,ownerState:t})=>(0,l.Z)({},t.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,i.Fq)(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},t.clickable&&"default"!==t.color&&{[`&:hover, &.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette[t.color].dark}})),(({theme:e,ownerState:t})=>(0,l.Z)({},"outlined"===t.variant&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${C.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${C.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${C.avatar}`]:{marginLeft:4},[`& .${C.avatarSmall}`]:{marginLeft:2},[`& .${C.icon}`]:{marginLeft:4},[`& .${C.iconSmall}`]:{marginLeft:2},[`& .${C.deleteIcon}`]:{marginRight:5},[`& .${C.deleteIconSmall}`]:{marginRight:3}},"outlined"===t.variant&&"default"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[t.color].main,.7)}`,[`&.${C.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,i.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity)},[`&.${C.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:(0,i.Fq)(e.palette[t.color].main,e.palette.action.focusOpacity)},[`& .${C.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.7)`:(0,i.Fq)(e.palette[t.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[t.color].main}}}))),Z=(0,h.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,t)=>{const{ownerState:a}=e,{size:o}=a;return[t.label,t[`label${(0,m.Z)(o)}`]]}})((({ownerState:e})=>(0,l.Z)({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},"small"===e.size&&{paddingLeft:8,paddingRight:8})));function S(e){return"Backspace"===e.key||"Delete"===e.key}const x=r.forwardRef((function(e,t){const a=(0,v.Z)({props:e,name:"MuiChip"}),{avatar:i,className:s,clickable:h,color:g="default",component:f,deleteIcon:C,disabled:x=!1,icon:I,label:w,onClick:z,onDelete:T,onKeyDown:E,onKeyUp:O,size:P="medium",variant:N="filled",tabIndex:R,skipFocusWhenDisabled:B=!1}=a,F=(0,o.Z)(a,$),D=r.useRef(null),L=(0,u.Z)(D,t),M=e=>{e.stopPropagation(),T&&T(e)},j=!(!1===h||!z)||h,V=j||T?b.Z:f||"div",q=(0,l.Z)({},a,{component:V,disabled:x,size:P,color:g,iconColor:r.isValidElement(I)&&I.props.color||g,onDelete:!!T,clickable:j,variant:N}),A=(e=>{const{classes:t,disabled:a,size:o,color:l,iconColor:r,onDelete:n,clickable:i,variant:s}=e,d={root:["root",s,a&&"disabled",`size${(0,m.Z)(o)}`,`color${(0,m.Z)(l)}`,i&&"clickable",i&&`clickableColor${(0,m.Z)(l)}`,n&&"deletable",n&&`deletableColor${(0,m.Z)(l)}`,`${s}${(0,m.Z)(l)}`],label:["label",`label${(0,m.Z)(o)}`],avatar:["avatar",`avatar${(0,m.Z)(o)}`,`avatarColor${(0,m.Z)(l)}`],icon:["icon",`icon${(0,m.Z)(o)}`,`iconColor${(0,m.Z)(r)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,m.Z)(o)}`,`deleteIconColor${(0,m.Z)(l)}`,`deleteIcon${(0,m.Z)(s)}Color${(0,m.Z)(l)}`]};return(0,c.Z)(d,y,t)})(q),W=V===b.Z?(0,l.Z)({component:f||"div",focusVisibleClassName:A.focusVisible},T&&{disableRipple:!0}):{};let _=null;T&&(_=C&&r.isValidElement(C)?r.cloneElement(C,{className:(0,n.Z)(C.props.className,A.deleteIcon),onClick:M}):(0,d.jsx)(p,{className:(0,n.Z)(A.deleteIcon),onClick:M}));let K=null;i&&r.isValidElement(i)&&(K=r.cloneElement(i,{className:(0,n.Z)(A.avatar,i.props.className)}));let G=null;return I&&r.isValidElement(I)&&(G=r.cloneElement(I,{className:(0,n.Z)(A.icon,I.props.className)})),(0,d.jsxs)(k,(0,l.Z)({as:V,className:(0,n.Z)(A.root,s),disabled:!(!j||!x)||void 0,onClick:z,onKeyDown:e=>{e.currentTarget===e.target&&S(e)&&e.preventDefault(),E&&E(e)},onKeyUp:e=>{e.currentTarget===e.target&&(T&&S(e)?T(e):"Escape"===e.key&&D.current&&D.current.blur()),O&&O(e)},ref:L,tabIndex:B&&x?-1:R,ownerState:q},W,F,{children:[K||G,(0,d.jsx)(Z,{className:(0,n.Z)(A.label),ownerState:q,children:w}),_]}))}))},26713:(e,t,a)=>{a.d(t,{u:()=>m,Z:()=>h});var o=a(94184),l=a.n(o),r=a(50344),n=a(67294),c=a(53124),i=a(37193),s=a(4173);function d(e){let{className:t,direction:a,index:o,marginDirection:l,children:r,split:c,wrap:i}=e;const{horizontalSize:s,verticalSize:d,latestIndex:p,supportFlexGap:u}=n.useContext(m);let b={};return u||("vertical"===a?o<p&&(b={marginBottom:s/(c?2:1)}):b=Object.assign(Object.assign({},o<p&&{[l]:s/(c?2:1)}),i&&{paddingBottom:d})),null==r?null:n.createElement(n.Fragment,null,n.createElement("div",{className:t,style:b},r),o<p&&c&&n.createElement("span",{className:`${t}-split`,style:b},c))}var p=a(51916),u=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(a[o[l]]=e[o[l]])}return a};const m=n.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),b={small:8,middle:16,large:24};const v=e=>{const{getPrefixCls:t,space:a,direction:o}=n.useContext(c.E_),{size:s=(null==a?void 0:a.size)||"small",align:v,className:h,rootClassName:g,children:f,direction:y="horizontal",prefixCls:C,split:$,style:k,wrap:Z=!1}=e,S=u(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),x=(0,i.Z)(),[I,w]=n.useMemo((()=>(Array.isArray(s)?s:[s,s]).map((e=>function(e){return"string"==typeof e?b[e]:e||0}(e)))),[s]),z=(0,r.Z)(f,{keepEmpty:!0}),T=void 0===v&&"horizontal"===y?"center":v,E=t("space",C),[O,P]=(0,p.Z)(E),N=l()(E,P,`${E}-${y}`,{[`${E}-rtl`]:"rtl"===o,[`${E}-align-${T}`]:T},h,g),R=`${E}-item`,B="rtl"===o?"marginLeft":"marginRight";let F=0;const D=z.map(((e,t)=>{null!=e&&(F=t);const a=e&&e.key||`${R}-${t}`;return n.createElement(d,{className:R,key:a,direction:y,index:t,marginDirection:B,split:$,wrap:Z},e)})),L=n.useMemo((()=>({horizontalSize:I,verticalSize:w,latestIndex:F,supportFlexGap:x})),[I,w,F,x]);if(0===z.length)return null;const M={};return Z&&(M.flexWrap="wrap",x||(M.marginBottom=-w)),x&&(M.columnGap=I,M.rowGap=w),O(n.createElement("div",Object.assign({className:N,style:Object.assign(Object.assign({},M),k)},S),n.createElement(m.Provider,{value:L},D)))};v.Compact=s.ZP;const h=v},67748:(e,t,a)=>{a.d(t,{Z:()=>d});var o=a(67294),l=a(86010),r=a(95999),n=a(35281),c=a(12466),i=a(85936);const s={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function d(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,o.useState)(!1),r=(0,o.useRef)(!1),{startScroll:n,cancelScroll:s}=(0,c.Ct)();return(0,c.RF)(((e,a)=>{let{scrollY:o}=e;const n=a?.scrollY;n&&(r.current?r.current=!1:o>=n?(s(),l(!1)):o<t?l(!1):o+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,i.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:a,scrollToTop:()=>n(0)}}({threshold:300});return o.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",n.k.common.backToTopButton,s.backToTopButton,e&&s.backToTopButtonShow),type:"button",onClick:t})}},97988:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(87462),l=a(67294),r=a(14353),n=a(87655);function c(e){let{items:t,...a}=e;return l.createElement(r.D,null,t.map(((e,t)=>l.createElement(n.Z,(0,o.Z)({key:t,item:e,index:t},a)))))}const i=(0,l.memo)(c)},6351:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(67294),l=a(86010),r=a(95999),n=a(6023);const c={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function i(e){let{onClick:t}=e;return o.createElement("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",c.collapseSidebarButton),onClick:t},o.createElement(n.Z,{className:c.collapseSidebarButtonIcon}))}},6023:(e,t,a)=>{a.d(t,{Z:()=>r});var o=a(87462),l=a(67294);function r(e){return l.createElement("svg",(0,o.Z)({width:"20",height:"20","aria-hidden":"true"},e),l.createElement("g",{fill:"#7a7a7a"},l.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),l.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}},14353:(e,t,a)=>{a.d(t,{D:()=>c,f:()=>i});var o=a(67294),l=a(902);const r=Symbol("EmptyContext"),n=o.createContext(r);function c(e){let{children:t}=e;const[a,l]=(0,o.useState)(null),r=(0,o.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return o.createElement(n.Provider,{value:r},t)}function i(){const e=(0,o.useContext)(n);if(e===r)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},74477:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>n});var o=a(67294),l=a(902);const r=o.createContext(null);function n(e){let{children:t,version:a}=e;return o.createElement(r.Provider,{value:a},t)}function c(){const e=(0,o.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);