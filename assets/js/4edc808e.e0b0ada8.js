"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[4173],{60888:(e,t,n)=>{var r=n(64836);t.Z=void 0;var i=r(n(64938)),s=n(85893),o=(0,i.default)((0,s.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");t.Z=o},37193:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(67294),i=n(98924);let s;const o=()=>{if(!(0,i.Z)()||!window.document.documentElement)return!1;if(void 0!==s)return s;const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e),s=1===e.scrollHeight,document.body.removeChild(e),s},a=()=>{const[e,t]=r.useState(!1);return r.useEffect((()=>{t(o())}),[]),e}},6226:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(94184),i=n.n(r),s=n(67294),o=n(53124),a=n(99134),l=n(6999),c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const d=["xs","sm","md","lg","xl","xxl"];const p=s.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:r}=s.useContext(o.E_),{gutter:p,wrap:u,supportFlexGap:m}=s.useContext(a.Z),{prefixCls:f,span:h,order:g,offset:y,push:x,pull:$,className:b,children:v,flex:w,style:k}=e,C=c(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=n("col",f),[P,O]=(0,l.c)(j);let I={};d.forEach((t=>{let n={};const i=e[t];"number"==typeof i?n.span=i:"object"==typeof i&&(n=i||{}),delete C[t],I=Object.assign(Object.assign({},I),{[`${j}-${t}-${n.span}`]:void 0!==n.span,[`${j}-${t}-order-${n.order}`]:n.order||0===n.order,[`${j}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${j}-${t}-push-${n.push}`]:n.push||0===n.push,[`${j}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${j}-${t}-flex-${n.flex}`]:n.flex||"auto"===n.flex,[`${j}-rtl`]:"rtl"===r})}));const M=i()(j,{[`${j}-${h}`]:void 0!==h,[`${j}-order-${g}`]:g,[`${j}-offset-${y}`]:y,[`${j}-push-${x}`]:x,[`${j}-pull-${$}`]:$},b,I,O),Z={};if(p&&p[0]>0){const e=p[0]/2;Z.paddingLeft=e,Z.paddingRight=e}if(p&&p[1]>0&&!m){const e=p[1]/2;Z.paddingTop=e,Z.paddingBottom=e}return w&&(Z.flex=function(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}(w),!1!==u||Z.minWidth||(Z.minWidth=0)),P(s.createElement("div",Object.assign({},C,{style:Object.assign(Object.assign({},Z),k),className:M,ref:t}),v))}))},99134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=(0,n(67294).createContext)({})},6999:(e,t,n)=>{n.d(t,{V:()=>l,c:()=>c});var r=n(67968),i=n(45503);const s=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},o=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},a=(e,t)=>((e,t)=>{const{componentCls:n,gridColumns:r}=e,i={};for(let s=r;s>=0;s--)0===s?(i[`${n}${t}-${s}`]={display:"none"},i[`${n}-push-${s}`]={insetInlineStart:"auto"},i[`${n}-pull-${s}`]={insetInlineEnd:"auto"},i[`${n}${t}-push-${s}`]={insetInlineStart:"auto"},i[`${n}${t}-pull-${s}`]={insetInlineEnd:"auto"},i[`${n}${t}-offset-${s}`]={marginInlineStart:0},i[`${n}${t}-order-${s}`]={order:0}):(i[`${n}${t}-${s}`]={display:"block",flex:`0 0 ${s/r*100}%`,maxWidth:s/r*100+"%"},i[`${n}${t}-push-${s}`]={insetInlineStart:s/r*100+"%"},i[`${n}${t}-pull-${s}`]={insetInlineEnd:s/r*100+"%"},i[`${n}${t}-offset-${s}`]={marginInlineStart:s/r*100+"%"},i[`${n}${t}-order-${s}`]={order:s});return i})(e,t),l=(0,r.Z)("Grid",(e=>[s(e)])),c=(0,r.Z)("Grid",(e=>{const t=(0,i.TS)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[o(t),a(t,""),a(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${t}px)`]:Object.assign({},a(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}))},6277:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(94184),i=n.n(r),s=n(67294),o=n(53124),a=n(37193),l=n(48012);const c=["xxl","xl","lg","md","sm","xs"];function d(){const[,e]=(0,l.dQ)(),t=(e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}))((e=>{const t=e,n=[].concat(c).reverse();return n.forEach(((e,r)=>{const i=e.toUpperCase(),s=`screen${i}Min`,o=`screen${i}`;if(!(t[s]<=t[o]))throw new Error(`${s}<=${o} fails : !(${t[s]}<=${t[o]})`);if(r<n.length-1){const e=`screen${i}Max`;if(!(t[o]<=t[e]))throw new Error(`${o}<=${e} fails : !(${t[o]}<=${t[e]})`);const s=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[s]))throw new Error(`${e}<=${s} fails : !(${t[e]}<=${t[s]})`)}})),e})(e));return s.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach((e=>e(r))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],i=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},s=window.matchMedia(n);s.addListener(i),this.matchHandlers[n]={mql:s,listener:i},i(s)}))},responsiveMap:t}}),[e])}var p=n(99134),u=n(6999),m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function f(e,t){const[n,r]=s.useState("string"==typeof e?e:"");return s.useEffect((()=>{(()=>{if("string"==typeof e&&r(e),"object"==typeof e)for(let n=0;n<c.length;n++){const i=c[n];if(!t[i])continue;const s=e[i];if(void 0!==s)return void r(s)}})()}),[JSON.stringify(e),t]),n}const h=s.forwardRef(((e,t)=>{const{prefixCls:n,justify:r,align:l,className:h,style:g,children:y,gutter:x=0,wrap:$}=e,b=m(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:v,direction:w}=s.useContext(o.E_),[k,C]=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[j,P]=s.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),O=f(l,j),I=f(r,j),M=(0,a.Z)(),Z=s.useRef(x),S=d();s.useEffect((()=>{const e=S.subscribe((e=>{P(e);const t=Z.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&C(e)}));return()=>S.unsubscribe(e)}),[]);const T=v("row",n),[E,_]=(0,u.V)(T),G=(()=>{const e=[void 0,void 0];return(Array.isArray(x)?x:[x,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<c.length;r++){const i=c[r];if(k[i]&&void 0!==t[i]){e[n]=t[i];break}}else e[n]=t})),e})(),L=i()(T,{[`${T}-no-wrap`]:!1===$,[`${T}-${I}`]:I,[`${T}-${O}`]:O,[`${T}-rtl`]:"rtl"===w},h,_),A={},D=null!=G[0]&&G[0]>0?G[0]/-2:void 0,W=null!=G[1]&&G[1]>0?G[1]/-2:void 0;D&&(A.marginLeft=D,A.marginRight=D),M?[,A.rowGap]=G:W&&(A.marginTop=W,A.marginBottom=W);const[X,z]=G,N=s.useMemo((()=>({gutter:[X,z],wrap:$,supportFlexGap:M})),[X,z,$,M]);return E(s.createElement(p.Z.Provider,{value:N},s.createElement("div",Object.assign({},b,{className:L,style:Object.assign(Object.assign({},A),g),ref:t}),y)))}))},11788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>$,frontMatter:()=>p,metadata:()=>m,toc:()=>g});var r=n(87462),i=(n(67294),n(3905)),s=n(6277),o=n(6226),a=n(11271),l=n(96191),c=n(86886),d=n(60888);const p={title:"Patricia McPhee Writing Samples",description:"Learn about my career path, accomplishments, skills, and training.",id:"welcome",slug:"/",keywords:["faq","help"],pagination_next:null,pagination_prev:null,last_update:{date:"03/29/2023",author:"Patricia McPhee"},draft:!1,hide_title:!0,hide_table_of_contents:!0,doc_type:"overview",displayed_sidebar:"mySidebar"},u=void 0,m={unversionedId:"welcome",id:"welcome",title:"Patricia McPhee Writing Samples",description:"Learn about my career path, accomplishments, skills, and training.",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/portfolio/",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/index.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1680073200,formattedLastUpdatedAt:"Mar 29, 2023",frontMatter:{title:"Patricia McPhee Writing Samples",description:"Learn about my career path, accomplishments, skills, and training.",id:"welcome",slug:"/",keywords:["faq","help"],pagination_next:null,pagination_prev:null,last_update:{date:"03/29/2023",author:"Patricia McPhee"},draft:!1,hide_title:!0,hide_table_of_contents:!0,doc_type:"overview",displayed_sidebar:"mySidebar"},sidebar:"mySidebar"},f={},h={padding:"6px 20px",color:"#fff"},g=[],y={toc:g},x="wrapper";function $(e){let{components:t,...n}=e;return(0,i.kt)(x,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"intro-visual"},(0,i.kt)(s.Z,{wrap:!0,mdxType:"Row"},(0,i.kt)(o.Z,{flex:"1 1 350px",mdxType:"Col"},(0,i.kt)("div",{class:"intro-text"},(0,i.kt)("h5",{class:"intro-visual-header"},"Hi! I'm Patricia."),(0,i.kt)("p",{class:"intro-text"}," I'm a Content Designer / UX Writer based in Redmond, WA."),(0,i.kt)("h4",{class:"intro-text"},"I am passionate about crafting meaningful user experiences. ")),(0,i.kt)("div",{class:"intro-text-button"},(0,i.kt)(a.ZP,{theme:{token:{colorPrimary:"#86ae22",colorPrimaryHover:"#0476a8",colorTextBase:"#1890ff"}},mdxType:"ConfigProvider"},(0,i.kt)(l.ZP,{type:"primary",shape:"round",size:"large",style:h,href:"/portfolio/resume",mdxType:"Button"},"View My Resume!")))),(0,i.kt)(o.Z,{flex:"150px",mdxType:"Col"},(0,i.kt)("div",{className:"intro-image"})))),(0,i.kt)("h2",null,"About Me!"),(0,i.kt)("p",null,"My journey into user-centric writing started over 20 years ago on a human-centered design and engineering team at a large telecommunications company. There, I learned how to conduct usability tests (participant observation and user behavior) to uncover and solve user experience challenges with end-user documentation."),(0,i.kt)("p",null,"As a technical writer with 27 years of experience, I have honed my ability to distill complex information into straightforward, concise, and user-friendly content. Through my work, I have developed a keen eye for detail and a deep understanding of communicating effectively with diverse audiences. These skills are essential in content design, content development, Ux Writing, and creating conversational experiences that are engaging but also accurate and informative."),(0,i.kt)("p",null,"Throughout my career, I have been involved in various documentation projects, collaborating closely with cross-functional teams, including software developers, UX designers, and product managers. This experience has given me a holistic understanding of the software development lifecycle and the importance of seamless communication between users and technology. I am adept at conducting user research, understanding user needs, and applying user-centered design principles to create conversational interfaces that meet the end user's expectations and goals."),(0,i.kt)("p",null,"Key strengths that I bring to my roles include the following:"),(0,i.kt)(c.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{pl:2,pr:2},mdxType:"Grid"},(0,i.kt)(c.ZP,{item:!0,mdxType:"Grid"},(0,i.kt)("p",null,(0,i.kt)(d.Z,{style:{fontSize:"24px",color:"#9ecd28"},mdxType:"CheckCircleIcon"}))),(0,i.kt)(c.ZP,{item:!0,xs:!0,mdxType:"Grid"},(0,i.kt)("p",null,"I can give your product a competitive edge with powerful content targeted to any audience\u2014novice to expert."))),(0,i.kt)(c.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{pl:2,pr:2},mdxType:"Grid"},(0,i.kt)(c.ZP,{item:!0,mdxType:"Grid"},(0,i.kt)("p",null,(0,i.kt)(d.Z,{style:{fontSize:"24px",color:"#9ecd28"},mdxType:"CheckCircleIcon"}))),(0,i.kt)(c.ZP,{item:!0,xs:!0,mdxType:"Grid"},(0,i.kt)("p",null,"I develop clear and helpful text in product interfaces, content from online help systems, user onboarding, and in-app messages to push notifications and tooltips."))),(0,i.kt)(c.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{pl:2,pr:2},mdxType:"Grid"},(0,i.kt)(c.ZP,{item:!0,mdxType:"Grid"},(0,i.kt)("p",null,(0,i.kt)(d.Z,{style:{fontSize:"24px",color:"#9ecd28"},mdxType:"CheckCircleIcon"}))),(0,i.kt)(c.ZP,{item:!0,xs:!0,mdxType:"Grid"},(0,i.kt)("p",null,"I possess a strong technical background that allows me to quickly understand and translate complex technical concepts into accessible language for non-technical users."))),(0,i.kt)("h2",null,"About this site"),(0,i.kt)("p",null,"I used ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io"},"Docusaurus")," to build this writing portfolio. I started using Docusaurus at the beginning of 2020 and continue to play around with customization. Before that, I used other static-site generators like Jekyll, Hugo, Gatsby, and DocFx as my primary authoring environment. So far, my favorite is Docusaurus. Although I like DocFx, it's more complicated to set up."),(0,i.kt)("p",null,"The purpose of using the Docusaurus framework to host my writing samples was to make it easier to share and showcase my work!"))}$.isMDXComponent=!0}}]);