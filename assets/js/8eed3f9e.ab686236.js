"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7720],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),g=a,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4900:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Error messages",tags:["ux writing","tech writing","before/after"],description:'Writing error messages is an art. Your goal is to provide guidance to the user.  Does the message leave the user in a deaden?  For example, if they get "Invalid or unsupported" error, do the users know what to do next?',date:"02/12/2022"},l=void 0,u={unversionedId:"ux-writing/errors-warnings-confirmations",id:"ux-writing/errors-warnings-confirmations",title:"Error messages",description:'Writing error messages is an art. Your goal is to provide guidance to the user.  Does the message leave the user in a deaden?  For example, if they get "Invalid or unsupported" error, do the users know what to do next?',source:"@site/docs/ux-writing/errors-warnings-confirmations.md",sourceDirName:"ux-writing",slug:"/ux-writing/errors-warnings-confirmations",permalink:"/portfolio/docs/ux-writing/errors-warnings-confirmations",tags:[{label:"ux writing",permalink:"/portfolio/docs/tags/ux-writing"},{label:"tech writing",permalink:"/portfolio/docs/tags/tech-writing"},{label:"before/after",permalink:"/portfolio/docs/tags/before-after"}],version:"current",frontMatter:{title:"Error messages",tags:["ux writing","tech writing","before/after"],description:'Writing error messages is an art. Your goal is to provide guidance to the user.  Does the message leave the user in a deaden?  For example, if they get "Invalid or unsupported" error, do the users know what to do next?',date:"02/12/2022"},sidebar:"tutorialSidebar",previous:{title:"UI strings",permalink:"/portfolio/docs/ux-writing/ui-strings"},next:{title:"Group policies",permalink:"/portfolio/docs/ux-writing/group-policies"}},p=[],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Writing error messages can be challenging because you want them to be short but have enough information to help the user. Your overall goal is to provide guidance to the user to prevent dead ends. What does "dead end" mean in this context? Does the message give the user the next steps to fix it themselves? For example, if they get an "Invalid or unsupported file type. Please try again." error, do they know what to do next? This message is a dead-end message. It doesn\'t tell the user what supported file types to try to get past the error.'),(0,o.kt)("div",{class:"quote"},'"Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem. These steps can be contextually-relevant."'),(0,o.kt)("p",null,"The examples on this page are the original, as it appears in the application and then the rewrite."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Original"),(0,o.kt)("th",{parentName:"tr",align:null},"Rewrite"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Resolution"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Error Logging in. System cannot connect at this time"),(0,o.kt)("td",{parentName:"tr",align:null},"We're unable to sign you in because your account is deactivated. Contact your system user administrator to have your account activated."),(0,o.kt)("td",{parentName:"tr",align:null},"Displays when the user account is deactivated."),(0,o.kt)("td",{parentName:"tr",align:null},"The user administrator needs to activate them in the portal.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Access denied to this resource. Please try again with an appropriate account."),(0,o.kt)("td",{parentName:"tr",align:null},"Access denied. Use an authorized account to access this resource."),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Invalid/Unsupported file type. Please try again."),(0,o.kt)("td",{parentName:"tr",align:null},"File type not supported. Try ","*",".","*"," for all file types or ","*",".{",(0,o.kt)("em",{parentName:"td"},"file extension"),"} for a specific file type, for example, ","*",".docx or ","*",".pdf."),(0,o.kt)("td",{parentName:"tr",align:null},"Displays when the user enters the incorrect file format to the directory service."),(0,o.kt)("td",{parentName:"tr",align:null})))))}d.isMDXComponent=!0}}]);