"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[8182],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,g=u["".concat(c,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96074:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(94184),i=n.n(r),a=n(67294),o=n(53124),s=n(67968),c=n(45503),l=n(14747);const d=e=>{const{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:i}=e;return{[t]:Object.assign(Object.assign({},(0,l.Wf)(e)),{borderBlockStart:`${i}px solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",margin:`0 ${e.dividerVerticalGutterMargin}px`,verticalAlign:"middle",borderTop:0,borderInlineStart:`${i}px solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${e.dividerHorizontalGutterMargin}px 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${e.dividerHorizontalWithTextGutterMargin}px 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${i}px solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:"5%"},"&::after":{width:"95%"}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:"95%"},"&::after":{width:"5%"}},[`${t}-inner-text`]:{display:"inline-block",padding:"0 1em"},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${i}px 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStart:i,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}},u=(0,s.Z)("Divider",(e=>{const t=(0,c.TS)(e,{dividerVerticalGutterMargin:e.marginXS,dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG});return[d(t)]}),{sizePaddingEdgeHorizontal:0});var f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const p=e=>{const{getPrefixCls:t,direction:n}=a.useContext(o.E_),{prefixCls:r,type:s="horizontal",orientation:c="center",orientationMargin:l,className:d,rootClassName:p,children:g,dashed:h,plain:v}=e,b=f(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain"]),m=t("divider",r),[y,k]=u(m),w=c.length>0?`-${c}`:c,x=!!g,O="left"===c&&null!=l,$="right"===c&&null!=l,j=i()(m,k,`${m}-${s}`,{[`${m}-with-text`]:x,[`${m}-with-text${w}`]:x,[`${m}-dashed`]:!!h,[`${m}-plain`]:!!v,[`${m}-rtl`]:"rtl"===n,[`${m}-no-default-orientation-margin-left`]:O,[`${m}-no-default-orientation-margin-right`]:$},d,p),P=Object.assign(Object.assign({},O&&{marginLeft:l}),$&&{marginRight:l});return y(a.createElement("div",Object.assign({className:j},b,{role:"separator"}),g&&"vertical"!==s&&a.createElement("span",{className:`${m}-inner-text`,style:P},g)))}},74539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(96074),o=n(96191),s=n(67897),c=n(84336);const l={title:"Conversation Design",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},d=void 0,u={unversionedId:"conversation-design/conversation-design",id:"conversation-design/conversation-design",title:"Conversation Design",description:"Conversation design samples.",source:"@site/docs/conversation-design/index.mdx",sourceDirName:"conversation-design",slug:"/conversation-design",permalink:"/portfolio/conversation-design",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/conversation-design/index.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1688886e3,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"Conversation Design",id:"conversation-design",slug:"/conversation-design",description:"Conversation design samples.",keywords:["conversation design","conversational copywriting"],last_update:{date:"07/09/2023",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},sidebar:"mySidebar"},f={},p=[],g=(h="ConfigProvider",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var h;const v={toc:p},b="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{mdxType:"Divider"}),(0,i.kt)("div",{class:"container next-steps-cards"},(0,i.kt)("div",{class:"row"},(0,i.kt)("div",{class:"col col--6"},(0,i.kt)("div",{class:"col-demo"},(0,i.kt)("div",{class:"card-demo next-steps-card"},(0,i.kt)("div",{class:"card"},(0,i.kt)("div",{class:"card__image"},(0,i.kt)("img",{src:c.Z,width:"40%",id:"diagrams",alt:"Example banner"}),(0,i.kt)("div",{class:"flex-container"},(0,i.kt)("div",null,(0,i.kt)("p",{class:"luxury-villas"},"Luxury Villas")))),(0,i.kt)("div",{class:"card__body"},(0,i.kt)("h4",null,"Reserve a table through Henry, our voice assistant."),(0,i.kt)("p",null,"Our guest, Pete, is inside the villa with his wife and two kids. He's feeling excited to try out the voice assistant. It's about 7:00 pm, and the family is hungry after an active day. They would like to eat ASAP, 1 hour max.")),(0,i.kt)("div",{class:"card__footer"},(0,i.kt)(g,{theme:{token:{colorLinkHover:"#034b6b56",colorLink:"#034b6b",colorLinkActive:"#034b6b"}},mdxType:"ConfigProvider"},(0,i.kt)(o.ZP,{type:"link",shape:"round",block:!0,href:"/portfolio/luxury-villa-concierge",mdxType:"Button"},"Learn more"))))))),(0,i.kt)("div",{class:"col col--6"},(0,i.kt)("div",{class:"col-demo"},(0,i.kt)("div",{class:"card-demo next-steps-card"},(0,i.kt)("div",{class:"card"},(0,i.kt)("div",{class:"card__image"},(0,i.kt)("img",{src:s.Z,width:"80%",id:"diagrams",alt:"Example banner"})),(0,i.kt)("div",{class:"card__body"},(0,i.kt)("h4",null,"Book a flight with PogoBot!"),(0,i.kt)("p",null,"Kevin, a millennial, just finished a sizeable design project and is ready for an adventure in unlikely or lesser-known destinations. It's early summer, and he wants to leave tomorrow or the following day.")),(0,i.kt)("div",{class:"card__footer"},(0,i.kt)(o.ZP,{type:"link",shape:"round",block:!0,href:"/portfolio/pogo-airlines-book-flight",mdxType:"Button"},"Learn more")))))))),(0,i.kt)("hr",null))}m.isMDXComponent=!0},84336:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/icononly_transparent_nobuffer-54e9d0abf7969de8654d03074adc6d3e.png"},67897:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pogo-airlines-logo-transparent-764865d8e938b5269e72e27516724d36.png"},97326:(e,t,n)=>{function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:()=>r})},27563:(e,t,n)=>{n.d(t,{Ab:()=>o,Fr:()=>s,G$:()=>a,JM:()=>u,K$:()=>l,MS:()=>r,h5:()=>c,lK:()=>d,uj:()=>i});var r="-ms-",i="-moz-",a="-webkit-",o="comm",s="rule",c="decl",l="@import",d="@keyframes",u="@layer"},92190:(e,t,n)=>{n.d(t,{MY:()=>o});var r=n(27563),i=n(26686),a=n(46411);function o(e){return(0,a.cE)(s("",null,null,null,[""],e=(0,a.un)(e),0,[0],e))}function s(e,t,n,r,o,u,f,p,g){for(var h=0,v=0,b=f,m=0,y=0,k=0,w=1,x=1,O=1,$=0,j="",P=o,C=u,E=r,S=j;x;)switch(k=$,$=(0,a.lp)()){case 40:if(108!=k&&58==(0,i.uO)(S,b-1)){-1!=(0,i.Cw)(S+=(0,i.gx)((0,a.iF)($),"&","&\f"),"&\f")&&(O=-1);break}case 34:case 39:case 91:S+=(0,a.iF)($);break;case 9:case 10:case 13:case 32:S+=(0,a.Qb)(k);break;case 92:S+=(0,a.kq)((0,a.Ud)()-1,7);continue;case 47:switch((0,a.fj)()){case 42:case 47:(0,i.R3)(l((0,a.q6)((0,a.lp)(),(0,a.Ud)()),t,n),g);break;default:S+="/"}break;case 123*w:p[h++]=(0,i.to)(S)*O;case 125*w:case 59:case 0:switch($){case 0:case 125:x=0;case 59+v:-1==O&&(S=(0,i.gx)(S,/\f/g,"")),y>0&&(0,i.to)(S)-b&&(0,i.R3)(y>32?d(S+";",r,n,b-1):d((0,i.gx)(S," ","")+";",r,n,b-2),g);break;case 59:S+=";";default:if((0,i.R3)(E=c(S,t,n,h,v,o,p,j,P=[],C=[],b),u),123===$)if(0===v)s(S,t,E,E,P,u,b,p,C);else switch(99===m&&110===(0,i.uO)(S,3)?100:m){case 100:case 108:case 109:case 115:s(e,E,E,r&&(0,i.R3)(c(e,E,E,0,0,o,p,j,o,P=[],b),C),o,C,b,p,r?P:C);break;default:s(S,E,E,E,[""],C,0,p,C)}}h=v=y=0,w=O=1,j=S="",b=f;break;case 58:b=1+(0,i.to)(S),y=k;default:if(w<1)if(123==$)--w;else if(125==$&&0==w++&&125==(0,a.mp)())continue;switch(S+=(0,i.Dp)($),$*w){case 38:O=v>0?1:(S+="\f",-1);break;case 44:p[h++]=((0,i.to)(S)-1)*O,O=1;break;case 64:45===(0,a.fj)()&&(S+=(0,a.iF)((0,a.lp)())),m=(0,a.fj)(),v=b=(0,i.to)(j=S+=(0,a.QU)((0,a.Ud)())),$++;break;case 45:45===k&&2==(0,i.to)(S)&&(w=0)}}return u}function c(e,t,n,o,s,c,l,d,u,f,p){for(var g=s-1,h=0===s?c:[""],v=(0,i.Ei)(h),b=0,m=0,y=0;b<o;++b)for(var k=0,w=(0,i.tb)(e,g+1,g=(0,i.Wn)(m=l[b])),x=e;k<v;++k)(x=(0,i.fy)(m>0?h[k]+" "+w:(0,i.gx)(w,/&\f/g,h[k])))&&(u[y++]=x);return(0,a.dH)(e,t,n,0===s?r.Fr:d,u,f,p)}function l(e,t,n){return(0,a.dH)(e,t,n,r.Ab,(0,i.Dp)((0,a.Tb)()),(0,i.tb)(e,2,-2),0)}function d(e,t,n,o){return(0,a.dH)(e,t,n,r.h5,(0,i.tb)(e,0,o),(0,i.tb)(e,o+1,-1),o)}},20211:(e,t,n)=>{n.d(t,{P:()=>o,q:()=>a});var r=n(27563),i=n(26686);function a(e,t){for(var n="",r=(0,i.Ei)(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function o(e,t,n,o){switch(e.type){case r.JM:if(e.children.length)break;case r.K$:case r.h5:return e.return=e.return||e.value;case r.Ab:return"";case r.lK:return e.return=e.value+"{"+a(e.children,o)+"}";case r.Fr:e.value=e.props.join(",")}return(0,i.to)(n=a(e.children,o))?e.return=e.value+"{"+n+"}":""}},46411:(e,t,n)=>{n.d(t,{FK:()=>s,JG:()=>u,QU:()=>P,Qb:()=>x,Tb:()=>f,Ud:()=>v,cE:()=>k,dH:()=>d,fj:()=>h,iF:()=>w,kq:()=>O,lp:()=>g,mp:()=>p,q6:()=>j,r:()=>m,tP:()=>b,un:()=>y});var r=n(26686),i=1,a=1,o=0,s=0,c=0,l="";function d(e,t,n,r,o,s,c){return{value:e,root:t,parent:n,type:r,props:o,children:s,line:i,column:a,length:c,return:""}}function u(e,t){return(0,r.f0)(d("",null,null,"",null,null,0),e,{length:-e.length},t)}function f(){return c}function p(){return c=s>0?(0,r.uO)(l,--s):0,a--,10===c&&(a=1,i--),c}function g(){return c=s<o?(0,r.uO)(l,s++):0,a++,10===c&&(a=1,i++),c}function h(){return(0,r.uO)(l,s)}function v(){return s}function b(e,t){return(0,r.tb)(l,e,t)}function m(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function y(e){return i=a=1,o=(0,r.to)(l=e),s=0,[]}function k(e){return l="",e}function w(e){return(0,r.fy)(b(s-1,$(91===e?e+2:40===e?e+1:e)))}function x(e){for(;(c=h())&&c<33;)g();return m(e)>2||m(c)>3?"":" "}function O(e,t){for(;--t&&g()&&!(c<48||c>102||c>57&&c<65||c>70&&c<97););return b(e,v()+(t<6&&32==h()&&32==g()))}function $(e){for(;g();)switch(c){case e:return s;case 34:case 39:34!==e&&39!==e&&$(c);break;case 40:41===e&&$(e);break;case 92:g()}return s}function j(e,t){for(;g()&&e+c!==57&&(e+c!==84||47!==h()););return"/*"+b(t,s-1)+"*"+(0,r.Dp)(47===e?e:g())}function P(e){for(;!m(h());)g();return b(e,s)}},26686:(e,t,n)=>{n.d(t,{$e:()=>v,Cw:()=>d,Dp:()=>i,EQ:()=>c,Ei:()=>g,R3:()=>h,Wn:()=>r,f0:()=>a,fy:()=>s,gx:()=>l,tb:()=>f,to:()=>p,uO:()=>u,vp:()=>o});var r=Math.abs,i=String.fromCharCode,a=Object.assign;function o(e,t){return 45^u(e,0)?(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0}function s(e){return e.trim()}function c(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,n){return e.replace(t,n)}function d(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function f(e,t,n){return e.slice(t,n)}function p(e){return e.length}function g(e){return e.length}function h(e,t){return t.push(e),e}function v(e,t){return e.map(t).join("")}}}]);