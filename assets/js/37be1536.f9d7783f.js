"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[8182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,g=u["".concat(l,".").concat(p)]||u[p]||f[p]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96074:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(94184),a=n.n(r),i=n(67294),o=n(53124),s=n(67968),l=n(45503),c=n(14747);const d=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:a}=e;return{[t]:Object.assign(Object.assign({},(0,c.Wf)(e)),{borderBlockStart:`${a}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${a}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${a}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${a}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:a,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},u=(0,s.Z)("Divider",(e=>{const t=(0,l.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]}),{sizePaddingEdgeHorizontal:0});var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};const p=e=>{const{getPrefixCls:t,direction:n}=i.useContext(o.E_),{prefixCls:r,type:s="horizontal",orientation:l="center",orientationMargin:c,className:d,rootClassName:p,children:g,dashed:h,plain:m}=e,v=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),b=t("divider",r),[y,k]=u(b),w=l.length>0?`-${l}`:l,x=!!g,O="left"===l&&null!=c,$="right"===l&&null!=c,j=a()(b,k,`${b}-${s}`,{[`${b}-with-text`]:x,[`${b}-with-text${w}`]:x,[`${b}-dashed`]:!!h,[`${b}-plain`]:!!m,[`${b}-rtl`]:"rtl"===n,[`${b}-no-default-orientation-margin-left`]:O,[`${b}-no-default-orientation-margin-right`]:$},d,p),P=Object.assign(Object.assign({},O&&{marginLeft:c}),$&&{marginRight:c});return y(i.createElement("div",Object.assign({className:j},v,{role:"separator"}),g&&"vertical"!==s&&i.createElement("span",{className:`${b}-inner-text`,style:P},g)))}},74539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var r=n(87462),a=(n(67294),n(3905)),i=n(96191),o=n(96074),s=n(67897),l=n(84336);const c={title:"Conversation Design Samples",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},d=void 0,u={unversionedId:"conversation-design/conversation-design",id:"conversation-design/conversation-design",title:"Conversation Design Samples",description:"Conversation design samples.",source:"@site/docs/conversation-design/index.mdx",sourceDirName:"conversation-design",slug:"/conversation-design",permalink:"/portfolio/conversation-design",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/conversation-design/index.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1688886e3,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"Conversation Design Samples",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},sidebar:"mySidebar"},f={},p=[{value:"Travel samples",id:"travel-samples",level:2},{value:"Healthcare samples",id:"healthcare-samples",level:2}],g={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"travel-samples"},"Travel samples"),(0,a.kt)("div",{class:"container next-steps-cards"},(0,a.kt)("div",{class:"row"},(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("div",{class:"col-demo"},(0,a.kt)("div",{class:"card-demo next-steps-card"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image"},(0,a.kt)("img",{src:l.Z,width:"40%",id:"diagrams",alt:"Example banner"}),(0,a.kt)("div",{class:"flex-container"},(0,a.kt)("div",null,(0,a.kt)("p",{class:"luxury-villas"},"Luxury Villas")))),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("h4",null,"Reserve a table through Henry, our voice assistant."),(0,a.kt)("p",null,"Pete is inside the villa with his wife and two kids. He's feeling excited to try out the voice assistant. It's about 7:00 pm, and the family is hungry after an active day. He wants to find a place with a vegan menu and is kid-friendly. They would like to eat ASAP, 1 hour max.")),(0,a.kt)("div",{class:"card__footer"},(0,a.kt)(i.ZP,{type:"ghost",shape:"round",block:!0,href:"/portfolio/luxury-villa-concierge",mdxType:"Button"},"Learn more")))))),(0,a.kt)("div",{class:"col col--6"},(0,a.kt)("div",{class:"col-demo"},(0,a.kt)("div",{class:"card-demo next-steps-card"},(0,a.kt)("div",{class:"card"},(0,a.kt)("div",{class:"card__image pogo-logo"},(0,a.kt)("img",{src:s.Z,width:"75%",id:"diagrams",alt:"Example banner"})),(0,a.kt)("div",{class:"card__body"},(0,a.kt)("h4",null,"Book a flight with PogoBot!"),(0,a.kt)("p",null,"Kevin, a millennial, just finished a sizeable freelance design project and is ready for an adventure in unlikely or lesser-known destinations. He's seeking a hassle-free experience. It's early summer, and he wants to leave tomorrow or the following day.")),(0,a.kt)("div",{class:"card__footer"},(0,a.kt)(i.ZP,{type:"ghost",shape:"round",block:!0,href:"/portfolio/pogo-airlines-book-flight",mdxType:"Button"},"Learn more")))))))),(0,a.kt)(o.Z,{mdxType:"Divider"}),(0,a.kt)("h2",{id:"healthcare-samples"},"Healthcare samples"),(0,a.kt)("p",null,"--Coming soon!--"))}m.isMDXComponent=!0},84336:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/icononly_transparent_nobuffer-54e9d0abf7969de8654d03074adc6d3e.png"},67897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pogo-airlines-logo-transparent-764865d8e938b5269e72e27516724d36.png"},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},27563:(e,t,n)=>{n.d(t,{Ab:()=>o,Fr:()=>s,G$:()=>i,JM:()=>u,K$:()=>c,MS:()=>r,h5:()=>l,lK:()=>d,uj:()=>a});var r="-ms-",a="-moz-",i="-webkit-",o="comm",s="rule",l="decl",c="@import",d="@keyframes",u="@layer"},92190:(e,t,n)=>{n.d(t,{MY:()=>o});var r=n(27563),a=n(26686),i=n(46411);function o(e){return(0,i.cE)(s("",null,null,null,[""],e=(0,i.un)(e),0,[0],e))}function s(e,t,n,r,o,u,f,p,g){for(var h=0,m=0,v=f,b=0,y=0,k=0,w=1,x=1,O=1,$=0,j="",P=o,S=u,E=r,C=j;x;)switch(k=$,$=(0,i.lp)()){case 40:if(108!=k&&58==(0,a.uO)(C,v-1)){-1!=(0,a.Cw)(C+=(0,a.gx)((0,i.iF)($),"&","&\f"),"&\f")&&(O=-1);break}case 34:case 39:case 91:C+=(0,i.iF)($);break;case 9:case 10:case 13:case 32:C+=(0,i.Qb)(k);break;case 92:C+=(0,i.kq)((0,i.Ud)()-1,7);continue;case 47:switch((0,i.fj)()){case 42:case 47:(0,a.R3)(c((0,i.q6)((0,i.lp)(),(0,i.Ud)()),t,n),g);break;default:C+="/"}break;case 123*w:p[h++]=(0,a.to)(C)*O;case 125*w:case 59:case 0:switch($){case 0:case 125:x=0;case 59+m:-1==O&&(C=(0,a.gx)(C,/\f/g,"")),y>0&&(0,a.to)(C)-v&&(0,a.R3)(y>32?d(C+";",r,n,v-1):d((0,a.gx)(C," ","")+";",r,n,v-2),g);break;case 59:C+=";";default:if((0,a.R3)(E=l(C,t,n,h,m,o,p,j,P=[],S=[],v),u),123===$)if(0===m)s(C,t,E,E,P,u,v,p,S);else switch(99===b&&110===(0,a.uO)(C,3)?100:b){case 100:case 108:case 109:case 115:s(e,E,E,r&&(0,a.R3)(l(e,E,E,0,0,o,p,j,o,P=[],v),S),o,S,v,p,r?P:S);break;default:s(C,E,E,E,[""],S,0,p,S)}}h=m=y=0,w=O=1,j=C="",v=f;break;case 58:v=1+(0,a.to)(C),y=k;default:if(w<1)if(123==$)--w;else if(125==$&&0==w++&&125==(0,i.mp)())continue;switch(C+=(0,a.Dp)($),$*w){case 38:O=m>0?1:(C+="\f",-1);break;case 44:p[h++]=((0,a.to)(C)-1)*O,O=1;break;case 64:45===(0,i.fj)()&&(C+=(0,i.iF)((0,i.lp)())),b=(0,i.fj)(),m=v=(0,a.to)(j=C+=(0,i.QU)((0,i.Ud)())),$++;break;case 45:45===k&&2==(0,a.to)(C)&&(w=0)}}return u}function l(e,t,n,o,s,l,c,d,u,f,p){for(var g=s-1,h=0===s?l:[""],m=(0,a.Ei)(h),v=0,b=0,y=0;v<o;++v)for(var k=0,w=(0,a.tb)(e,g+1,g=(0,a.Wn)(b=c[v])),x=e;k<m;++k)(x=(0,a.fy)(b>0?h[k]+" "+w:(0,a.gx)(w,/&\f/g,h[k])))&&(u[y++]=x);return(0,i.dH)(e,t,n,0===s?r.Fr:d,u,f,p)}function c(e,t,n){return(0,i.dH)(e,t,n,r.Ab,(0,a.Dp)((0,i.Tb)()),(0,a.tb)(e,2,-2),0)}function d(e,t,n,o){return(0,i.dH)(e,t,n,r.h5,(0,a.tb)(e,0,o),(0,a.tb)(e,o+1,-1),o)}},20211:(e,t,n)=>{n.d(t,{P:()=>o,q:()=>i});var r=n(27563),a=n(26686);function i(e,t){for(var n="",r=(0,a.Ei)(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function o(e,t,n,o){switch(e.type){case r.JM:if(e.children.length)break;case r.K$:case r.h5:return e.return=e.return||e.value;case r.Ab:return"";case r.lK:return e.return=e.value+"{"+i(e.children,o)+"}";case r.Fr:e.value=e.props.join(",")}return(0,a.to)(n=i(e.children,o))?e.return=e.value+"{"+n+"}":""}},46411:(e,t,n)=>{n.d(t,{FK:()=>s,JG:()=>u,QU:()=>P,Qb:()=>x,Tb:()=>f,Ud:()=>m,cE:()=>k,dH:()=>d,fj:()=>h,iF:()=>w,kq:()=>O,lp:()=>g,mp:()=>p,q6:()=>j,r:()=>b,tP:()=>v,un:()=>y});var r=n(26686),a=1,i=1,o=0,s=0,l=0,c="";function d(e,t,n,r,o,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:a,column:i,length:l,return:""}}function u(e,t){return(0,r.f0)(d("",null,null,"",null,null,0),e,{length:-e.length},t)}function f(){return l}function p(){return l=s>0?(0,r.uO)(c,--s):0,i--,10===l&&(i=1,a--),l}function g(){return l=s<o?(0,r.uO)(c,s++):0,i++,10===l&&(i=1,a++),l}function h(){return(0,r.uO)(c,s)}function m(){return s}function v(e,t){return(0,r.tb)(c,e,t)}function b(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y(e){return a=i=1,o=(0,r.to)(c=e),s=0,[]}function k(e){return c="",e}function w(e){return(0,r.fy)(v(s-1,$(91===e?e+2:40===e?e+1:e)))}function x(e){for(;(l=h())&&l<33;)g();return b(e)>2||b(l)>3?"":" "}function O(e,t){for(;--t&&g()&&!(l<48||l>102||l>57&&l<65||l>70&&l<97););return v(e,m()+(t<6&&32==h()&&32==g()))}function $(e){for(;g();)switch(l){case e:return s;case 34:case 39:34!==e&&39!==e&&$(l);break;case 40:41===e&&$(e);break;case 92:g()}return s}function j(e,t){for(;g()&&e+l!==57&&(e+l!==84||47!==h()););return"/*"+v(t,s-1)+"*"+(0,r.Dp)(47===e?e:g())}function P(e){for(;!b(h());)g();return v(e,s)}},26686:(e,t,n)=>{n.d(t,{$e:()=>m,Cw:()=>d,Dp:()=>a,EQ:()=>l,Ei:()=>g,R3:()=>h,Wn:()=>r,f0:()=>i,fy:()=>s,gx:()=>c,tb:()=>f,to:()=>p,uO:()=>u,vp:()=>o});var r=Math.abs,a=String.fromCharCode,i=Object.assign;function o(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}function s(e){return e.trim()}function l(e,t){return(e=t.exec(e))?e[0]:e}function c(e,t,n){return e.replace(t,n)}function d(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,n){return e.slice(t,n)}function p(e){return e.length}function g(e){return e.length}function h(e,t){return t.push(e),e}function m(e,t){return e.map(t).join("")}}}]);