"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[7918],{53430:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(67294),r=n(1944),l=n(65130);function c(){const{metadata:e,frontMatter:t,assets:n}=(0,l.k)();return a.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image,doc_type:e.docType,product:e.product})}var i=n(86010),o=n(87524),s=n(80049);function d(){const{metadata:e}=(0,l.k)();return a.createElement(s.Z,{previous:e.previous,next:e.next})}var m=n(23120),u=n(44364),p=n(35281),h=n(95999);function E(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:a.createElement("b",null,a.createElement("time",{dateTime:new Date(1e3*t).toISOString()},n))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return a.createElement(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:a.createElement("b",null,t)}}," by {user}")}function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:r}=e;return a.createElement("span",{className:p.k.common.lastUpdated},a.createElement(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?a.createElement(E,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:r?a.createElement(f,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}n(84881);const v={lastUpdated:"lastUpdated_VsjB",editThisPage:"editThisPage_p52D"};function g(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,editUrl:r,...l}=e;return a.createElement("div",{className:(0,i.Z)(p.k.docs.docFooterEditMetaRow,"row")},a.createElement("div",{className:(0,i.Z)("col",v.lastUpdated)},(t||r)&&a.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:n,editUrl:r})))}function Z(){const{metadata:e}=(0,l.k)(),{lastUpdatedAt:t,formattedLastUpdatedAt:n,editUrl:r}=e,c=!(!t&&!r);return c?a.createElement("div",{className:(0,i.Z)(p.k.docs.docFooter,"docusaurus-mt-md")},c&&a.createElement(g,{lastUpdatedAt:t,formattedLastUpdatedAt:n,editUrl:r})):null}var k=n(69286);const y={tocMobile:"tocMobile_bxCs"};function N(){const{toc:e,frontMatter:t}=(0,l.k)();return a.createElement(k.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,i.Z)(p.k.docs.docTocMobile,y.tocMobile)})}var _=n(39407);function T(){const{toc:e,frontMatter:t}=(0,l.k)();return a.createElement(_.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.k.docs.docTocDesktop})}var C=n(16550),w=n(43151),U=n(98105),A=n(44996),L=n(52263),M=n(6277),x=n(6226);const H={padding:"6px 0"};function z(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,l.k)();return t.hide_title||void 0!==n?null:e.title}(),{siteConfig:r}=(0,L.Z)();(0,C.TH)().pathname,(0,A.Z)("img/bug-icon.svg");return a.createElement("div",{className:(0,i.Z)(p.k.docs.docMarkdown,"markdown")},n&&a.createElement("header",null,a.createElement(w.Z,{as:"h1"},n),a.createElement(Z,null)),a.createElement(U.Z,null,t),a.createElement(M.Z,{gutter:{xs:8,sm:16,md:24,lg:32}},a.createElement(x.Z,{flex:"1 1"},a.createElement("div",{style:H},a.createElement("h3",null,"Want to learn more about me? Let's Chat!"),a.createElement("ul",null,a.createElement("li",null,"Find me on ",a.createElement("a",{href:"https://www.linkedin.com/in/patriciamcphee/",target:"_blank"},"LinkedIn")),a.createElement("li",null,a.createElement("a",{href:"mailto:hi@patriciamcphee.com?subject=Mail from portfolio website"},"Send an Email")),a.createElement("li",null,a.createElement("a",{href:"https://docs.google.com/forms/d/1RzV2SOVuTysVw2HMzprRnDQ-rAiAwP2t-6vsmjVG-Xs/prefill",target:"_blank"},"Submit an inquiry")),a.createElement("li",null,"Chat with me on ",a.createElement("a",{href:"https://patriciamcphee.slack.com/archives/D03K6BRHTHN"},"Slack"),"!"))))))}var I=n(87462),S=n(53438),B=n(48596),V=n(39960);n(99464);function R(){const e=(0,A.Z)("/");return a.createElement("li",{className:"breadcrumbs__item"},a.createElement(V.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},"Home"))}const D={breadcrumbsContainer:"breadcrumbsContainer_Alpn"};function P(e){let{children:t,href:n,isLast:r}=e;const l="breadcrumbs__link";return r?a.createElement("span",{className:l,itemProp:"name"},t):n?a.createElement(V.Z,{className:l,href:n,itemProp:"item"},a.createElement("span",{itemProp:"name"},t)):a.createElement("span",{className:l},t)}function W(e){let{children:t,active:n,index:r,addMicrodata:l}=e;return a.createElement("li",(0,I.Z)({},l&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n})}),t,a.createElement("meta",{itemProp:"position",content:String(r+1)}))}function F(){const e=(0,S.s1)(),t=(0,B.Ns)();return e?a.createElement("nav",{className:(0,i.Z)(p.k.docs.docBreadcrumbs,D.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},a.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&a.createElement(R,null),e.map(((t,n)=>{const r=n===e.length-1;return a.createElement(W,{key:n,active:r,index:n,addMicrodata:!!t.href},a.createElement(P,{href:t.href,isLast:r},t.label))})))):null}const O={docItemContainer:"docItemContainer_c0TR",docItemCol:"docItemCol_z5aJ"};function j(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=(0,l.k)(),n=(0,o.i)(),r=e.hide_table_of_contents,c=!r&&t.length>0;return{hidden:r,mobile:c?a.createElement(N,null):void 0,desktop:!c||"desktop"!==n&&"ssr"!==n?void 0:a.createElement(T,null)}}();return a.createElement("div",{className:"row"},a.createElement("div",{className:(0,i.Z)("col",!n.hidden&&O.docItemCol)},a.createElement(m.Z,null),a.createElement("div",{className:O.docItemContainer},a.createElement("article",null,a.createElement(F,null),a.createElement(u.Z,null),n.mobile,a.createElement(z,null,t)),a.createElement(d,null))),n.desktop&&a.createElement("div",{className:"col col--3"},n.desktop))}function $(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return a.createElement(l.b,{content:e.content},a.createElement(r.FG,{className:t},a.createElement(c,null),a.createElement(j,null,a.createElement(n,null))))}},43151:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),r=n(67294),l=n(86010),c=n(95999),i=n(86668),o=n(39960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_loeA",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_emO8"};function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},d,{id:void 0}));const u=(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return r.createElement(t,(0,a.Z)({},d,{className:(0,l.Z)("anchor",m?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,d.className),id:n}),d.children,r.createElement(o.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},98105:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(67294);var r=n(96074),l=n(3905),c=n(87462),i=n(35742);var o=n(9498);var s=n(39960);var d=n(34673);var m=n(43151);function u(e){return a.createElement(m.Z,e)}var p=n(86010);const h={containsTaskList:"containsTaskList_kggB"};const E={img:"img_CujE"};var f=n(35281),b=n(95999);const v="admonition_WoCw",g="admonitionHeading_TMsN",Z="admonitionIcon_Ibzs",k="admonitionContent_vXIg";const y={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(b.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(b.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(b.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(b.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},N={secondary:"note",important:"info",success:"tip",warning:"danger"};function _(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const T={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(i.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(d.Z,(0,c.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,c.Z)({},e,{className:(t=e.className,(0,p.Z)(t,t?.includes("contains-task-list")&&h.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,c.Z)({loading:"lazy"},e,{className:(t=e.className,(0,p.Z)(t,E.img))}));var t},h1:e=>a.createElement(u,(0,c.Z)({as:"h1"},e)),h2:e=>a.createElement(u,(0,c.Z)({as:"h2"},e)),h3:e=>a.createElement(u,(0,c.Z)({as:"h3"},e)),h4:e=>a.createElement(u,(0,c.Z)({as:"h4"},e)),h5:e=>a.createElement(u,(0,c.Z)({as:"h5"},e)),h6:e=>a.createElement(u,(0,c.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:l}=_(e),c=function(e){const t=N[e]??e,n=y[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),y.info)}(n),i=r??c.label,{iconComponent:o}=c,s=l??a.createElement(o,null);return a.createElement("div",{className:(0,p.Z)(f.k.common.admonition,f.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,v)},a.createElement("div",{className:g},a.createElement("span",{className:Z},s),i),a.createElement("div",{className:k},t))},mermaid:n(20502).Z};function C(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Zo,{components:T},t),a.createElement(r.Z,null))}}}]);