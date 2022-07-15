"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1458],{3905:function(e,o,t){t.d(o,{Zo:function(){return m},kt:function(){return f}});var r=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var o=r.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},m=function(e){var o=s(e.components);return r.createElement(c.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(p,a(a({ref:o},m),{},{components:t})):r.createElement(p,a({ref:o},m))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6558:function(e,o,t){t.r(o),t.d(o,{assets:function(){return b},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return f},metadata:function(){return h},toc:function(){return g}});var r=t(7462),n=t(3366),i=t(7294),a=t(3905),l=t(5697),c=t.n(l),s=["primary","backgroundColor","size","label"],m=function(e){var o=e.primary,t=e.backgroundColor,a=e.size,l=e.label,c=(0,n.Z)(e,s),m=o?"storybook-button--primary":"storybook-button--secondary";return i.createElement("button",(0,r.Z)({type:"button",className:["storybook-button","storybook-button--"+a,m].join(" "),style:t&&{backgroundColor:t}},c),l)};m.propTypes={primary:c().bool,backgroundColor:c().string,size:c().oneOf(["small","medium","large"]),label:c().string.isRequired,onClick:c().func},m.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0};var u=function(e){var o=e.user,t=e.onLogin,r=e.onLogout,n=e.onCreateAccount;return i.createElement("header",null,i.createElement("div",{className:"wrapper"},i.createElement("div",null,i.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},i.createElement("g",{fill:"none",fillRule:"evenodd"},i.createElement("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),i.createElement("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),i.createElement("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"}))),i.createElement("h1",null,"Acme")),i.createElement("div",null,o?i.createElement(i.Fragment,null,i.createElement("span",{className:"welcome"},"Welcome, ",i.createElement("b",null,o.name),"!"),i.createElement(m,{size:"small",onClick:r,label:"Log out"})):i.createElement(i.Fragment,null,i.createElement(m,{size:"small",onClick:t,label:"Log in"}),i.createElement(m,{primary:!0,size:"small",onClick:n,label:"Sign up"})))))};u.propTypes={user:c().shape({}),onLogin:c().func.isRequired,onLogout:c().func.isRequired,onCreateAccount:c().func.isRequired},u.defaultProps={user:null};var d=["components"],f={title:"Embed Figma, Storybook, and Codesandbox",docid:"learn",date:"03/12/2022",tags:["ux writing","tech writing","learn"],description:"Docs-as-Code: Using markdown and GitHub to publish technical documentation - In this module, you'll use your writing samples from the main course to learn markdown using VS Code and GitHub to create your online writing portfolio in a format common today. You'll even learn how to implement your own blog in this framework so you can be creative too. Write a short story. Have fun with it. Companies are looking for technical writers who know markdown and GitHub. This module will give you the experience these companies are looking for in their technical writing candidates."},p=void 0,h={unversionedId:"learn/intro",id:"learn/intro",title:"Embed Figma, Storybook, and Codesandbox",description:"Docs-as-Code: Using markdown and GitHub to publish technical documentation - In this module, you'll use your writing samples from the main course to learn markdown using VS Code and GitHub to create your online writing portfolio in a format common today. You'll even learn how to implement your own blog in this framework so you can be creative too. Write a short story. Have fun with it. Companies are looking for technical writers who know markdown and GitHub. This module will give you the experience these companies are looking for in their technical writing candidates.",source:"@site/docs/learn/intro.mdx",sourceDirName:"learn",slug:"/learn/intro",permalink:"/portfolio/docs/learn/intro",draft:!1,tags:[{label:"ux writing",permalink:"/portfolio/docs/tags/ux-writing"},{label:"tech writing",permalink:"/portfolio/docs/tags/tech-writing"},{label:"learn",permalink:"/portfolio/docs/tags/learn"}],version:"current",frontMatter:{title:"Embed Figma, Storybook, and Codesandbox",docid:"learn",date:"03/12/2022",tags:["ux writing","tech writing","learn"],description:"Docs-as-Code: Using markdown and GitHub to publish technical documentation - In this module, you'll use your writing samples from the main course to learn markdown using VS Code and GitHub to create your online writing portfolio in a format common today. You'll even learn how to implement your own blog in this framework so you can be creative too. Write a short story. Have fun with it. Companies are looking for technical writers who know markdown and GitHub. This module will give you the experience these companies are looking for in their technical writing candidates."}},b={},g=[{value:"Import JSX from Storybook integration",id:"import-jsx-from-storybook-integration",level:3},{value:"Iframe from Storybook",id:"iframe-from-storybook",level:3},{value:"Another iframe from Storybook",id:"another-iframe-from-storybook",level:3},{value:"Iframe from Codesandbox",id:"iframe-from-codesandbox",level:3},{value:"Iframes from Figma",id:"iframes-from-figma",level:3}],w={toc:g};function y(e){var o=e.components,t=(0,n.Z)(e,d);return(0,a.kt)("wrapper",(0,r.Z)({},w,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"import-jsx-from-storybook-integration"},"Import JSX from Storybook integration"),(0,a.kt)(u,{mdxType:"Header"}),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"iframe-from-storybook"},"Iframe from Storybook"),(0,a.kt)("iframe",{height:"450",width:"800",src:"https://5ccbc373887ca40020446347-geedzbiswp.chromatic.com/iframe.html?args=&id=button--sizes"}),(0,a.kt)("h3",{id:"another-iframe-from-storybook"},"Another iframe from Storybook"),(0,a.kt)("iframe",{height:"450",width:"800",src:"https://5ccbc373887ca40020446347-geedzbiswp.chromatic.com/?path=/story/button--sizes",allowfullscreen:!0}),(0,a.kt)("h3",{id:"iframe-from-codesandbox"},"Iframe from Codesandbox"),(0,a.kt)("iframe",{height:"450",width:"800",src:"https://codesandbox.io/embed/lucid-gould-d3jq1c?fontsize=14&hidenavigation=1&theme=dark&view=preview",allowfullscreen:!0}),(0,a.kt)("h3",{id:"iframes-from-figma"},"Iframes from Figma"),(0,a.kt)("p",null,"The link inside this Figma iframe should take you ",(0,a.kt)("a",{parentName:"p",href:"https://m3.material.io/components/cards/overview"},"here"),", which is their official documentation, but it does not. It also doesn't work in Gitbook."),(0,a.kt)("iframe",{width:"800",height:"450",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Ff2XHV5nDykIHIB6J7UPmSb%2FMaterial-3-Design-Kit-(customized)%3Fnode-id%3D50729%253A11297",allowfullscreen:!0}))}y.isMDXComponent=!0}}]);