"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3085],{78586:(e,n,t)=>{t.d(n,{S:()=>c});var a=t(67294),i=t(96793);function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>l(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),c=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),s=r(c,{anchorTopOffset:t.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===m)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}},94462:(e,n,t)=>{t.d(n,{b:()=>r});var a=t(67294);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}},70551:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(87462),i=t(67294),l=t(86010),r=t(11614),o=t(96793),c=t(88746);const s="anchorWithStickyNavbar_loeA",m="anchorWithHideOnScrollNavbar_emO8";function d(e){let{as:n,id:t,...d}=e;const{navbar:{hideOnScroll:u}}=(0,o.L)();if("h1"===n||!t)return i.createElement(n,(0,a.Z)({},d,{id:void 0}));const f=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:t});return i.createElement(n,(0,a.Z)({},d,{className:(0,l.Z)("anchor",u?m:s,d.className),id:t}),d.children,i.createElement(c.Z,{className:"hash-link",to:`#${t}`,"aria-label":f,title:f},"\u200b"))}},80903:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(67294),i=t(3905),l=t(87462),r=t(32411);var o=t(89270);var c=t(88746);var s=t(9555);var m=t(70551);function d(e){return a.createElement(m.Z,e)}var u=t(86010);const f="containsTaskList_kggB";const h="img_CujE";var v=t(18015),p=t(11614);const g="admonition_WoCw",E="admonitionHeading_TMsN",N="admonitionIcon_Ibzs",b="admonitionContent_vXIg";const C={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(p.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(p.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(p.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(p.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Z={secondary:"note",important:"info",success:"tip",warning:"danger"};function L(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=a.Children.toArray(e),t=n.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return{mdxAdmonitionTitle:t,rest:i}}(e.children);return{...e,title:e.title??n,children:t}}const H={head:function(e){const n=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:n,originalType:t,...i}=e.props;return a.createElement(e.props.originalType,i)}return e}(e):e));return a.createElement(r.Z,e,n)},code:function(e){const n=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&n.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const n=a.Children.toArray(e.children),t=n.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,n.filter((e=>e!==t)));return a.createElement(s.Z,(0,l.Z)({},e,{summary:t}),i)},ul:function(e){return a.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,u.Z)(n,n?.includes("contains-task-list")&&f))}));var n},img:function(e){return a.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,u.Z)(n,h))}));var n},h1:e=>a.createElement(d,(0,l.Z)({as:"h1"},e)),h2:e=>a.createElement(d,(0,l.Z)({as:"h2"},e)),h3:e=>a.createElement(d,(0,l.Z)({as:"h3"},e)),h4:e=>a.createElement(d,(0,l.Z)({as:"h4"},e)),h5:e=>a.createElement(d,(0,l.Z)({as:"h5"},e)),h6:e=>a.createElement(d,(0,l.Z)({as:"h6"},e)),admonition:function(e){const{children:n,type:t,title:i,icon:l}=L(e),r=function(e){const n=Z[e]??e;return C[n]||(console.warn(`No admonition config found for admonition type "${n}". Using Info as fallback.`),C.info)}(t),o=i??r.label,{iconComponent:c}=r,s=l??a.createElement(c,null);return a.createElement("div",{className:(0,u.Z)(v.k.common.admonition,v.k.common.admonitionType(e.type),"alert",`alert--${r.infimaClassName}`,g)},a.createElement("div",{className:E},a.createElement("span",{className:N},s),o),a.createElement("div",{className:b},n))},mermaid:t(67859).Z};function x(e){let{children:n}=e;return a.createElement(i.Zo,{components:H},n)}},97882:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var a=t(67294),i=t(86010),l=t(66742),r=t(18015),o=t(59748),c=t(80903),s=t(39383);const m="mdxPageWrapper_yV3F";function d(e){const{content:n}=e,{metadata:{title:t,description:d,frontMatter:u}}=n,{wrapperClassName:f,hide_table_of_contents:h}=u;return a.createElement(l.FG,{className:(0,i.Z)(f??r.k.wrapper.mdxPages,r.k.page.mdxPage)},a.createElement(l.d,{title:t,description:d}),a.createElement(o.Z,null,a.createElement("main",{className:"container container--fluid margin-vert--lg"},a.createElement("div",{className:(0,i.Z)("row",m)},a.createElement("div",{className:(0,i.Z)("col",!h&&"col--8")},a.createElement("article",null,a.createElement(c.Z,null,a.createElement(n,null)))),!h&&n.toc.length>0&&a.createElement("div",{className:"col col--2"},a.createElement(s.Z,{toc:n.toc,minHeadingLevel:u.toc_min_heading_level,maxHeadingLevel:u.toc_max_heading_level}))))))}},59070:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),i=t(67294),l=t(96793),r=t(94462),o=t(78586);function c(e){let{toc:n,className:t,linkClassName:a,isChild:l}=e;return n.length?i.createElement("ul",{className:l?void 0:t},n.map((e=>i.createElement("li",{key:e.id},i.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const s=i.memo(c);function m(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:m,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,l.L)(),v=d??h.tableOfContents.minHeadingLevel,p=u??h.tableOfContents.maxHeadingLevel,g=(0,r.b)({toc:n,minHeadingLevel:v,maxHeadingLevel:p}),E=(0,i.useMemo)((()=>{if(c&&m)return{linkClassName:c,linkActiveClassName:m,minHeadingLevel:v,maxHeadingLevel:p}}),[c,m,v,p]);return(0,o.S)(E),i.createElement(s,(0,a.Z)({toc:g,className:t,linkClassName:c},f))}},39383:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(87462),i=t(67294),l=t(86010),r=t(59070);const o="tableOfContents_jeP5";function c(e){let{className:n,...t}=e;return i.createElement("div",{className:(0,l.Z)(o,"thin-scrollbar",n)},i.createElement(r.Z,(0,a.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}}}]);