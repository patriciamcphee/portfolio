"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[8182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,f=p["".concat(s,".").concat(u)]||p[u]||g[u]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96074:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(94184),i=n.n(r),a=n(67294),o=n(53124),l=n(67968),s=n(45503),d=n(14747);const c=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:i}=e;return{[t]:Object.assign(Object.assign({},(0,d.Wf)(e)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},p=(0,l.Z)("Divider",(e=>{const t=(0,s.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[c(t)]}),{sizePaddingEdgeHorizontal:0});var g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const u=e=>{const{getPrefixCls:t,direction:n}=a.useContext(o.E_),{prefixCls:r,type:l="horizontal",orientation:s="center",orientationMargin:d,className:c,rootClassName:u,children:f,dashed:h,plain:m}=e,v=g(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),y=t("divider",r),[b,k]=p(y),x=s.length>0?`-${s}`:s,w=!!f,O="left"===s&&null!=d,$="right"===s&&null!=d,P=i()(y,k,`${y}-${l}`,{[`${y}-with-text`]:w,[`${y}-with-text${x}`]:w,[`${y}-dashed`]:!!h,[`${y}-plain`]:!!m,[`${y}-rtl`]:"rtl"===n,[`${y}-no-default-orientation-margin-left`]:O,[`${y}-no-default-orientation-margin-right`]:$},c,u),S=Object.assign(Object.assign({},O&&{marginLeft:d}),$&&{marginRight:d});return b(a.createElement("div",Object.assign({className:P},v,{role:"separator"}),f&&"vertical"!==l&&a.createElement("span",{className:`${y}-inner-text`,style:S},f)))}},74539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var r=n(87462),i=(n(67294),n(3905)),a=n(96191),o=n(96074),l=n(67897),s=n(84336);const d={title:"Conversation Design Samples",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},c=void 0,p={unversionedId:"conversation-design/conversation-design",id:"conversation-design/conversation-design",title:"Conversation Design Samples",description:"Conversation design samples.",source:"@site/docs/conversation-design/index.mdx",sourceDirName:"conversation-design",slug:"/conversation-design",permalink:"/portfolio/conversation-design",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/conversation-design/index.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1688886e3,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"Conversation Design Samples",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},sidebar:"mySidebar"},g={},u=[{value:"Travel samples",id:"travel-samples",level:2},{value:"Healthcare samples",id:"healthcare-samples",level:2}],f={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(h,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"travel-samples"},"Travel samples"),(0,i.kt)("div",{class:"container"},(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--6"},(0,i.kt)("div",{class:"col-demo"},(0,i.kt)("div",{class:"card-demo"},(0,i.kt)("div",{class:"card shadow--md"},(0,i.kt)("div",{class:"card__image luxury-villas-logo"},(0,i.kt)("img",{src:s.Z,width:"40%",id:"diagrams",alt:"Example banner"}),(0,i.kt)("div",{class:"flex-container"},(0,i.kt)("div",null,(0,i.kt)("p",{class:"luxury-villas"},"Luxury Villas")))),(0,i.kt)("div",{class:"card__body"},(0,i.kt)("h4",null,"Reserve a table at a nearby restaurant."),(0,i.kt)("p",null,"Pete is inside the villa with his wife and two kids. He's feeling excited to try out the voice assistant. It's about 7:00 pm, and the family is hungry after an active day. He wants to find a place with a vegan menu and is kid-friendly. They would like to eat ASAP, 1 hour max.")),(0,i.kt)("div",{class:"card__footer"},(0,i.kt)(a.ZP,{type:"ghost",shape:"round",size:"large",block:!0,href:"/portfolio/luxury-villa-concierge",mdxType:"Button"},(0,i.kt)("b",null,"Learn more"))))))),(0,i.kt)("div",{class:"col col--6"},(0,i.kt)("div",{class:"col-demo"},(0,i.kt)("div",{class:"card-demo"},(0,i.kt)("div",{class:"card shadow--md"},(0,i.kt)("div",{class:"card__image pogo-logo"},(0,i.kt)("img",{src:l.Z,width:"75%",id:"diagrams",alt:"Example banner"})),(0,i.kt)("div",{class:"card__body"},(0,i.kt)("h4",null,"Book a flight with Zac's help!"),(0,i.kt)("p",null,"Kevin, a millennial, just finished a sizeable freelance design project and is ready for an adventure in unlikely or lesser-known destinations. He's seeking a hassle-free digital experience. It's early summer, and he wants to leave tomorrow or the following day.")),(0,i.kt)("div",{class:"card__footer"},(0,i.kt)(a.ZP,{type:"ghost",shape:"round",size:"large",block:!0,href:"/portfolio/pogo-airlines-book-flight",mdxType:"Button"},(0,i.kt)("b",null,"Learn more"))))))))),(0,i.kt)(o.Z,{mdxType:"Divider"}),(0,i.kt)("h2",{id:"healthcare-samples"},"Healthcare samples"),(0,i.kt)("p",null,"--Coming soon!--"))}m.isMDXComponent=!0},84336:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/icononly_transparent_nobuffer-54e9d0abf7969de8654d03074adc6d3e.png"},67897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pogo-airlines-logo-transparent-764865d8e938b5269e72e27516724d36.png"}}]);