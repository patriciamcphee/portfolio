"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[6651],{8114:(e,t,o)=>{var n=o(64836);t.Z=void 0;var l=n(o(64938)),a=o(85893),r=(0,l.default)((0,a.jsx)("path",{d:"M10 16v-1H3.01v6H21v-6h-7v1h-4zm12-9h-6V5l-2-2h-4L8 5v2H2v7h8v-2h4v2h8V7zm-8 0h-4V5h4v2z"}),"BusinessCenterSharp");t.Z=r},3515:(e,t,o)=>{var n=o(64836);t.Z=void 0;var l=n(o(64938)),a=o(85893),r=(0,l.default)((0,a.jsx)("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.53 9.92-1-1-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V22h18v-5.61c-.75.51-1.71.75-2.74.52-.66-.14-1.25-.51-1.73-.99zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z"}),"CakeSharp");t.Z=r},5120:(e,t,o)=>{var n=o(64836);t.Z=void 0;var l=n(o(64938)),a=o(85893),r=(0,l.default)((0,a.jsx)("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"FavoriteSharp");t.Z=r},1332:(e,t,o)=>{var n=o(64836);t.Z=void 0;var l=n(o(64938)),a=o(85893),r=(0,l.default)((0,a.jsx)("path",{d:"M12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8C20 5.22 16.2 2 12 2zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}),"FmdGoodSharp");t.Z=r},32022:(e,t,o)=>{var n=o(64836);t.Z=void 0;var l=n(o(64938)),a=o(85893),r=(0,l.default)((0,a.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"}),"SchoolSharp");t.Z=r},26713:(e,t,o)=>{o.d(t,{u:()=>h,Z:()=>f});var n=o(94184),l=o.n(n),a=o(50344),r=o(67294),i=o(53124),s=o(37193),c=o(4173);function d(e){let{className:t,direction:o,index:n,marginDirection:l,children:a,split:i,wrap:s}=e;const{horizontalSize:c,verticalSize:d,latestIndex:u,supportFlexGap:p}=r.useContext(h);let k={};return p||("vertical"===o?n<u&&(k={marginBottom:c/(i?2:1)}):k=Object.assign(Object.assign({},n<u&&{[l]:c/(i?2:1)}),s&&{paddingBottom:d})),null==a?null:r.createElement(r.Fragment,null,r.createElement("div",{className:t,style:k},a),n<u&&i&&r.createElement("span",{className:`${t}-split`,style:k},i))}var u=o(51916),p=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o};const h=r.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),k={small:8,middle:16,large:24};const m=e=>{const{getPrefixCls:t,space:o,direction:n}=r.useContext(i.E_),{size:c=(null==o?void 0:o.size)||"small",align:m,className:f,rootClassName:g,children:v,direction:b="horizontal",prefixCls:y,split:w,style:x,wrap:C=!1}=e,S=p(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap"]),z=(0,s.Z)(),[P,T]=r.useMemo((()=>(Array.isArray(c)?c:[c,c]).map((e=>function(e){return"string"==typeof e?k[e]:e||0}(e)))),[c]),E=(0,a.Z)(v,{keepEmpty:!0}),N=void 0===m&&"horizontal"===b?"center":m,Z=t("space",y),[I,$]=(0,u.Z)(Z),O=l()(Z,$,`${Z}-${b}`,{[`${Z}-rtl`]:"rtl"===n,[`${Z}-align-${N}`]:N},f,g),j=`${Z}-item`,F="rtl"===n?"marginLeft":"marginRight";let M=0;const B=E.map(((e,t)=>{null!=e&&(M=t);const o=e&&e.key||`${j}-${t}`;return r.createElement(d,{className:j,key:o,direction:b,index:t,marginDirection:F,split:w,wrap:C},e)})),A=r.useMemo((()=>({horizontalSize:P,verticalSize:T,latestIndex:M,supportFlexGap:z})),[P,T,M,z]);if(0===E.length)return null;const D={};return C&&(D.flexWrap="wrap",z||(D.marginBottom=-T)),z&&(D.columnGap=P,D.rowGap=T),I(r.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},D),x)},S),r.createElement(h.Provider,{value:A},B)))};m.Compact=c.ZP;const f=m},51904:(e,t,o)=>{o.d(t,{Z:()=>C});var n=o(97937),l=o(94184),a=o.n(l),r=o(67294),i=o(98787),s=o(11015),c=o(53124);var d=o(14747),u=o(98719),p=o(67968),h=o(45503);const k=(e,t,o)=>{const n="string"!=typeof(l=o)?l:l.charAt(0).toUpperCase()+l.slice(1);var l;return{[`${e.componentCls}-${t}`]:{color:e[`color${o}`],background:e[`color${n}Bg`],borderColor:e[`color${n}Border`]}}},m=e=>(0,u.Z)(e,((t,o)=>{let{textColor:n,lightBorderColor:l,lightColor:a,darkColor:r}=o;return{[`${e.componentCls}-${t}`]:{color:n,background:a,borderColor:l,"&-inverse":{color:e.colorTextLightSolid,background:r,borderColor:r},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}})),f=e=>{const{paddingXXS:t,lineWidth:o,tagPaddingHorizontal:n,componentCls:l}=e,a=n-o,r=t-o;return{[l]:Object.assign(Object.assign({},(0,d.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:a,fontSize:e.tagFontSize,lineHeight:`${e.tagLineHeight}px`,whiteSpace:"nowrap",background:e.tagDefaultBg,border:`${e.lineWidth}px ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",[`&${l}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.tagDefaultColor},[`${l}-close-icon`]:{marginInlineStart:r,color:e.colorTextDescription,fontSize:e.tagIconSize,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${l}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${l}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:a}}),[`${l}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},g=(0,p.Z)("Tag",(e=>{const{fontSize:t,lineHeight:o,lineWidth:n,fontSizeIcon:l}=e,a=Math.round(t*o),r=e.fontSizeSM,i=a-2*n,s=e.colorFillQuaternary,c=e.colorText,d=(0,h.TS)(e,{tagFontSize:r,tagLineHeight:i,tagDefaultBg:s,tagDefaultColor:c,tagIconSize:l-2*n,tagPaddingHorizontal:8,tagBorderlessBg:e.colorFillTertiary});return[f(d),m(d),k(d,"success","Success"),k(d,"processing","Info"),k(d,"error","Error"),k(d,"warning","Warning")]}));var v=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o};const b=e=>{const{prefixCls:t,className:o,checked:n,onChange:l,onClick:i}=e,s=v(e,["prefixCls","className","checked","onChange","onClick"]),{getPrefixCls:d}=r.useContext(c.E_),u=d("tag",t),[p,h]=g(u),k=a()(u,{[`${u}-checkable`]:!0,[`${u}-checkable-checked`]:n},o,h);return p(r.createElement("span",Object.assign({},s,{className:k,onClick:e=>{null==l||l(!n),null==i||i(e)}})))};var y=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]])}return o};const w=(e,t)=>{const{prefixCls:o,className:l,rootClassName:d,style:u,children:p,icon:h,color:k,onClose:m,closeIcon:f,closable:v=!1,bordered:b=!0}=e,w=y(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:x,direction:C}=r.useContext(c.E_),[S,z]=r.useState(!0);r.useEffect((()=>{"visible"in w&&z(w.visible)}),[w.visible]);const P=(0,i.o2)(k)||(0,i.yT)(k),T=Object.assign({backgroundColor:k&&!P?k:void 0},u),E=x("tag",o),[N,Z]=g(E),I=a()(E,{[`${E}-${k}`]:P,[`${E}-has-color`]:k&&!P,[`${E}-hidden`]:!S,[`${E}-rtl`]:"rtl"===C,[`${E}-borderless`]:!b},l,d,Z),$=e=>{e.stopPropagation(),null==m||m(e),e.defaultPrevented||z(!1)},O=r.useMemo((()=>v?f?r.createElement("span",{className:`${E}-close-icon`,onClick:$},f):r.createElement(n.Z,{className:`${E}-close-icon`,onClick:$}):null),[v,f,E,$]),j="function"==typeof w.onClick||p&&"a"===p.type,F=h||null,M=F?r.createElement(r.Fragment,null,F,r.createElement("span",null,p)):p,B=r.createElement("span",Object.assign({},w,{ref:t,className:I,style:T}),M,O);return N(j?r.createElement(s.Z,null,B):B)},x=r.forwardRef(w);x.CheckableTag=b;const C=x},7852:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>z,frontMatter:()=>v,metadata:()=>y,toc:()=>x});var n=o(87462),l=(o(67294),o(3905));const a=o.p+"assets/images/fitfuel_transparent_nobuffer-ddd38eb19d02c3d487a531ed9ff0b545.png",r=o.p+"assets/images/Senior-Sarah-65-d821274ace0c3fd29e357f228cff6d7a.png";var i=o(1332),s=o(3515),c=o(8114),d=o(5120),u=o(32022),p=o(11271),h=o(26713),k=o(51904),m=o(39926);const f=o.p+"assets/images/fitness-bot-avatar-634100de2b5cf7ac2131ff8ec72dca87.png",g=o.p+"assets/images/create-custom-workout.drawio-c73935635de9d7c733092df28faafa61.png",v={title:"Personalized Workout (Chatbot)",id:"fitfuel-personalized-workout-plan",slug:"/fitfuel-personalized-workout-plan",description:"Conversation design sample for airline chatbot.",keywords:["contribute","documentation"],last_update:{date:"08/23/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},b=void 0,y={unversionedId:"conversation-design/fitfuel-personalized-workout-plan",id:"conversation-design/fitfuel-personalized-workout-plan",title:"Personalized Workout (Chatbot)",description:"Conversation design sample for airline chatbot.",source:"@site/docs/conversation-design/fit-fuel-plus.mdx",sourceDirName:"conversation-design",slug:"/fitfuel-personalized-workout-plan",permalink:"/fitfuel-personalized-workout-plan",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/conversation-design/fit-fuel-plus.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1692774e3,formattedLastUpdatedAt:"Aug 23, 2023",frontMatter:{title:"Personalized Workout (Chatbot)",id:"fitfuel-personalized-workout-plan",slug:"/fitfuel-personalized-workout-plan",description:"Conversation design sample for airline chatbot.",keywords:["contribute","documentation"],last_update:{date:"08/23/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null}},w={},x=[{value:"Personas",id:"personas",level:2},{value:"Senior Sarah",id:"senior-sarah",level:3},{value:"Ryan, Your Fitness Ally!",id:"ryan-your-fitness-ally",level:3},{value:"Use case - Personalized workout routine",id:"use-case---personalized-workout-routine",level:2},{value:"User needs",id:"user-needs",level:3},{value:"Bot needs",id:"bot-needs",level:3},{value:"Main flow",id:"main-flow",level:2},{value:"Prototype (Voiceflow)",id:"prototype-voiceflow",level:2}],C={toc:x},S="wrapper";function z(e){let{components:t,...o}=e;return(0,l.kt)(S,(0,n.Z)({},C,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",null,"Sample details"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Project:")," Certificate project"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"My Role:")," Conversation Designer/Conversational Copywriter"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tools:")," Voiceflow, Google Docs, Google Sheets, Notion")),(0,l.kt)("hr",null),(0,l.kt)("div",{class:"pogo-logo"},(0,l.kt)("img",{src:a,width:"20%",id:"diagrams",alt:"Example banner"})),(0,l.kt)("p",null,"FitFuel+ is a lifestyle brand that aims to be a comprehensive fitness partner providing personalized support, guidance, nutrition advice, and plant-based protein powder to elevate users' performance. "),(0,l.kt)("p",null,"FitFuel+ aims to address the challenge of individuals seeking effective fitness support and guidance to achieve their fitness goals:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Many individuals struggle to create personalized workout routines that align with their fitness goals, abilities, and preferences."),(0,l.kt)("li",{parentName:"ul"},"Finding high-quality protein powder products that complement their workout routines can be challenging, leading to confusion and potentially choosing products that don't meet their needs.")),(0,l.kt)("p",null,"To address these challenges, FitFuel+ can empower individuals to take charge of their fitness aspirations with a chatbot. The bot's purpose is to provide personalized workout routines to each user's fitness level, preferences, and goals. It can create dynamic and adaptive workout plans that can evolve with the user's progress. Additionally, it aims to promote the sale of protein powder as a supplement to support their fitness journey."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"personas"},"Personas"),(0,l.kt)("h3",{id:"senior-sarah"},"Senior Sarah"),(0,l.kt)("div",{class:"container"},(0,l.kt)("div",{class:"row"},(0,l.kt)("div",{class:"col col--5"},(0,l.kt)("div",{class:"col-demo"},(0,l.kt)("img",{src:r,width:"90%",id:"personas",alt:"Example banner"}),(0,l.kt)("ul",{className:"text-sm no-style persona-demographic-container"},(0,l.kt)("li",{class:"no-style persona-demographic"},(0,l.kt)("span",{class:"icon-position"},(0,l.kt)(s.Z,{fontSize:"small",mdxType:"CakeSharpIcon"})),"\xa0\xa065"),(0,l.kt)("li",{class:"no-style persona-demographic"},(0,l.kt)(c.Z,{fontSize:"small",mdxType:"BusinessCenterSharpIcon"}),"\xa0\xa0Retired Accountant"),(0,l.kt)("li",{class:"no-style persona-demographic"},(0,l.kt)(u.Z,{fontSize:"small",mdxType:"SchoolSharpIcon"}),"\xa0\xa0Bachelor of Business Administration"),(0,l.kt)("li",{class:"no-style persona-demographic"},(0,l.kt)(d.Z,{fontSize:"small",mdxType:"FavoriteSharpIcon"}),"\xa0\xa0Widow"),(0,l.kt)("li",{class:"no-style persona-demographic"},(0,l.kt)(i.Z,{fontSize:"small",mdxType:"FmdGoodSharpIcon"}),"\xa0\xa0Clearwater, FL")),(0,l.kt)("div",{class:"persona-tags"},(0,l.kt)(p.ZP,{theme:{token:{colorSuccess:"#25517E",colorSuccessBg:"#25517E26",colorSuccessBorder:"#25517E26"}},mdxType:"ConfigProvider"},(0,l.kt)(h.Z,{size:[0,"small"],wrap:!0,mdxType:"Space"},(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Spontaneous"),(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Curious"),(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Witty"),(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Passionate"),(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Adventurous"),(0,l.kt)(k.Z,{bordered:!1,color:"#25517E",mdxType:"Tag"},"Energetic")))))),(0,l.kt)("div",{class:"col"},(0,l.kt)("div",{class:"col-demo"},(0,l.kt)("div",{class:"persona-bio-container"},(0,l.kt)("p",{class:"persona-bio"},(0,l.kt)("b",null,"Fitness Level:")," Beginner",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Goals:")," Sarah wants to improve her mobility, maintain bone health, and increase energy levels to lead an active and independent life as a senior.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Exercise Preference:")," She prefers low-impact exercises like walking, gentle yoga, and chair exercises to cater to her age and physical abilities.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Protein Powder Preference:")," Sarah is unfamiliar with protein powder and seeks information on whether it suits seniors and its potential benefits.",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("b",null,"Needs:")," Sarah needs a gentle and progressive workout routine that considers her age-related limitations and focuses on functional movements. ")),(0,l.kt)("div",{class:"persona-quote"},(0,l.kt)("span",{class:"quotes-large"},'"You had the power all along my dear." ')," ")))),(0,l.kt)("div",{class:"row persona-row"},(0,l.kt)("div",{class:"col"},(0,l.kt)("div",{class:"col-demo"},(0,l.kt)("h4",null,"Personality"),(0,l.kt)("div",{class:"tech-3 clip-contents"},(0,l.kt)("div",{className:"frame-2143"},(0,l.kt)("p",{className:"introvert"},"Introvert"),(0,l.kt)("p",{className:"extrovert"},"Extrovert")),(0,l.kt)(p.ZP,{theme:{token:{colorInfo:"#25517E",colorFillSecondary:"#cecece66"}},mdxType:"ConfigProvider"},(0,l.kt)(m.Z,{percent:20,size:"small",showInfo:!1,mdxType:"Progress"}))),(0,l.kt)("div",{class:"tech-3 clip-contents"},(0,l.kt)("div",{className:"frame-2143"},(0,l.kt)("p",{className:"introvert"},"Independent"),(0,l.kt)("p",{className:"extrovert"},"Team player")),(0,l.kt)(p.ZP,{theme:{token:{colorInfo:"#25517E",colorFillSecondary:"#cecece66"}},mdxType:"ConfigProvider"},(0,l.kt)(m.Z,{percent:40,size:"small",showInfo:!1,mdxType:"Progress"}))),(0,l.kt)("div",{class:"tech-3 clip-contents"},(0,l.kt)("div",{className:"frame-2143"},(0,l.kt)("p",{className:"introvert"},"Analytical"),(0,l.kt)("p",{className:"extrovert"},"Creative")),(0,l.kt)(p.ZP,{theme:{token:{colorInfo:"#25517E",colorFillSecondary:"#cecece66"}},mdxType:"ConfigProvider"},(0,l.kt)(m.Z,{percent:30,size:"small",showInfo:!1,mdxType:"Progress"}))),(0,l.kt)("div",{class:"tech-3 clip-contents"},(0,l.kt)("div",{className:"frame-2143"},(0,l.kt)("p",{className:"introvert"},"Intuitive"),(0,l.kt)("p",{className:"extrovert"},"Observant")),(0,l.kt)(p.ZP,{theme:{token:{colorInfo:"#25517E",colorFillSecondary:"#cecece66"}},mdxType:"ConfigProvider"},(0,l.kt)(m.Z,{percent:50,size:"small",showInfo:!1,mdxType:"Progress"}))),(0,l.kt)("div",{class:"tech-3 clip-contents"},(0,l.kt)("div",{className:"frame-2143"},(0,l.kt)("p",{className:"introvert"},"Messy"),(0,l.kt)("p",{className:"extrovert"},"Organized")),(0,l.kt)(p.ZP,{theme:{token:{colorInfo:"#25517E",colorFillSecondary:"#cecece66"}},mdxType:"ConfigProvider"},(0,l.kt)(m.Z,{percent:80,size:"small",showInfo:!1,mdxType:"Progress"}))))))),(0,l.kt)("div",{class:"div-hr-container"},(0,l.kt)("hr",{class:"hr-50"})),(0,l.kt)("h3",{id:"ryan-your-fitness-ally"},"Ryan, Your Fitness Ally!"),(0,l.kt)("div",{class:"container persona-bio-container"},(0,l.kt)("div",{class:"row"},(0,l.kt)("div",{class:"col"},(0,l.kt)("div",{class:"col-demo"},(0,l.kt)("p",{class:"persona-bio"},"Ryan's purpose is to simplify and enhance the fitness and nutrition journey for users, making it more accessible, enjoyable, and effective. By providing expert guidance, motivation, and accountability for custom workout plans and protein powder recommendations, Ryan aims to be a reliable and indispensable fitness companion for anyone striving to achieve their health and fitness goals. \ud83c\udfcb\ufe0f\u200d\u2642\ufe0f\ud83d\udcaa"),(0,l.kt)("p",{class:"persona-bio"},"Additionally, Ryan's holistic approach prioritizes both physical and mental well-being, and is available 24/7 for convenience. Ryan fosters an inclusive and judgment-free environment to encourage a positive mindset. "))),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("div",{class:"col-demo"},(0,l.kt)("img",{src:f,width:"100%",id:"personas",alt:"Example banner"}))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"use-case---personalized-workout-routine"},"Use case - Personalized workout routine"),(0,l.kt)("p",null,"Sarah, a retired accountant, is at home, comfortably settled in her reading nook with a cup of herbal tea. Her computer is open before her, displaying a health blog focused on senior fitness. She's reading an article about the importance of exercise for seniors. The article highlights various concerns that she's been thinking about lately, such as maintaining bone health and improving overall mobility."),(0,l.kt)("p",null,"As she scrolls through the article, Sarah can't help but think about how she's feeling sluggish lately. Her energy levels have dipped, and she's keen to make lifestyle changes to allow her to live her retirement years to the fullest. She wonders, \"What if there was a way to incorporate simple, tailored exercises into my daily routine? What would be the most effective yet gentle approach?\""),(0,l.kt)("p",null,"As Sarah scrolls down the article, she notices an advertisement for FitFuel+ that catches her eye. It talks about personalized fitness guidance and plant-based protein powder. She clicks on it out of curiosity."),(0,l.kt)("h3",{id:"user-needs"},"User needs"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Goals and objectives")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Improve overall mobility to navigate day-to-day life more comfortably."),(0,l.kt)("li",null,"Maintain and improve bone health to prevent osteoporosis or fractures."),(0,l.kt)("li",null,"Boost energy levels to remain active and independent in her senior years."),(0,l.kt)("li",null,"Desire to maintain an active lifestyle as she ages."),(0,l.kt)("li",null,"Importance of independence; doesn't want to rely on others for basic activities.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Demands/preferences")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Preferably, a program with low-impact, easy-to-follow exercises like walking routines, chair exercises, and gentle yoga."),(0,l.kt)("li",null,"Would appreciate a protein powder mix that is plant-based, easy to digest, and specifically formulated for seniors."),(0,l.kt)("li",null,"Prefers communication methods that she is comfortable with, like email and phone support, instead of newer tech platforms.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Information needs")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Information on low-impact exercises that can help her achieve her fitness goals."),(0,l.kt)("li",null,"Guidance on the type and amount of protein powder suitable for seniors."),(0,l.kt)("li",null,"Diet tips that focus on her specific nutritional needs as a senior citizen."),(0,l.kt)("li",null,"Simple and straightforward instructions for any technical products or services.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Anxieties and concerns")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Wary of injury or strain; wants a fitness routine tailored to seniors."),(0,l.kt)("li",null,"Skeptical about the need for protein powder at her age and how it might affect her health."),(0,l.kt)("li",null,"Fear of adopting a routine that might exacerbate age-related health conditions."),(0,l.kt)("li",null,"Concerns about the complexity of using tech-based solutions and the risk of feeling overwhelmed."),(0,l.kt)("li",null,"Uncertainty about the safety and benefits of using protein powder at her age.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Expectations")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Personalized workout routines that are tailored to her fitness level and limitations."),(0,l.kt)("li",null,"Nutritional guidance backed by scientific research and specifically designed for seniors."),(0,l.kt)("li",null,"Easily accessible customer support that can guide her through the technical aspects if needed.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Technical proficiency")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Limited technical skills; can operate basic apps on her smartphone but is not overly comfortable with technology."),(0,l.kt)("li",null,"Would prefer simplified, straightforward user interfaces and step-by-step guidance for any tech-related fitness solutions."),(0,l.kt)("li",null,"Limited experience with chatbots or voice assistance. Finds them confusing and would prefer human interaction for more personalized and empathetic support.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Other assumptions")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Likely has more free time to commit to a fitness routine but less willingness to spend that time learning complex systems or exercises."),(0,l.kt)("li",null,"May has some basic nutrition understanding but needs guidance on newer concepts like protein supplementation."))))),(0,l.kt)("div",{class:"div-hr-container"},(0,l.kt)("hr",{class:"hr-50"})),(0,l.kt)("h3",{id:"bot-needs"},"Bot needs"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Fulfillment capability")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Provides knowledge on exercises and routines catered to individual fitness levels."),(0,l.kt)("li",null,"Offers protein shake recommendations for post-workout recovery."),(0,l.kt)("li",null,"Emphasizes mental and emotional well-being."),(0,l.kt)("li",null,"Delivers advice and suggestions on self-care and celebrates user milestones.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Can provide this info")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Benefits of protein shakes for different ages and fitness levels."),(0,l.kt)("li",null,"Suitable low-impact exercises for seniors."),(0,l.kt)("li",null,"Emotional support, self-care tips, and motivational encouragement."),(0,l.kt)("li",null,"Knowledge on health, human performance, and applied exercise physiology.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Limitations")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Might not have specific medical advice or recommendations for certain conditions (unless programmed)."),(0,l.kt)("li",null,"Doesn't replace human therapists or personal trainers in certain complex fitness scenarios.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Must ask this info")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Any existing health conditions or injuries."),(0,l.kt)("li",null,"Frequency of workouts preferred per week."),(0,l.kt)("li",null,"User's comfort level with different exercises."),(0,l.kt)("li",null,"Dietary restrictions if any, before recommending protein powders.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Has this info already")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Benefits of protein shakes for post-workout recovery."),(0,l.kt)("li",null,"A wide range of exercises suitable for different age groups, including seniors."),(0,l.kt)("li",null,"Information related to emotional well-being and mental health in the context of fitness.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"Must provide this info")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Personalized workout routine based on Sarah's preferences and needs."),(0,l.kt)("li",null,"Recommendations on how and when to use protein powders, especially for seniors."),(0,l.kt)("li",null,"Motivational quotes or encouragement after each workout session."),(0,l.kt)("li",null,"Celebratory messages upon achieving milestones.")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("b",null,"User behavior")),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"Sarah will likely approach Ryan with questions about low-impact exercises suitable for her age and fitness level."),(0,l.kt)("li",null,"She may inquire about the benefits of protein powder for seniors and how to incorporate it into her diet."),(0,l.kt)("li",null,"Sarah will value the emotional support and empathetic responses from Ryan, especially considering her beginner status."),(0,l.kt)("li",null,"She might need repetitive guidance, step-by-step instructions, and consistent motivation."))))),(0,l.kt)("br",null),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"main-flow"},"Main flow"),(0,l.kt)("img",{src:g,width:"80%",id:"personas",alt:"Example banner"}),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"prototype-voiceflow"},"Prototype (Voiceflow)"),(0,l.kt)("p",null,"--In progress--"),(0,l.kt)("br",null))}z.isMDXComponent=!0}}]);