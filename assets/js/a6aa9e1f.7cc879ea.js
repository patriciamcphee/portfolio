"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3089],{80046:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(67294),i=n(86010),r=n(52263),l=n(1944),o=n(35281),c=n(39058),m=n(99703),s=n(90197),d=n(79985);function u(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,r.Z)(),{blogDescription:i,blogTitle:o,permalink:c}=t,m="/"===c?n:o;return a.createElement(a.Fragment,null,a.createElement(l.d,{title:m,description:i}),a.createElement(s.Z,{tag:"blog_posts_list"}))}function p(e){const{metadata:t,items:n,sidebar:i}=e;return a.createElement(c.Z,{sidebar:i},a.createElement(d.Z,{items:n}),a.createElement(m.Z,{metadata:t}))}function h(e){return a.createElement(l.FG,{className:(0,i.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(u,e),a.createElement(p,e))}},99703:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(95999),r=n(54280);function l(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,i.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(r.Z,{permalink:n,title:a.createElement(i.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&a.createElement(r.Z,{permalink:l,title:a.createElement(i.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(9460),r=n(30390);function l(e){let{items:t,component:n=r.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(i.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}},95113:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),i=n(95999),r=n(35281),l=n(56262);function o(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(l.Z,null),a.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},43151:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(87462),i=n(67294),r=n(86010),l=n(95999),o=n(86668),c=n(39960);const m="anchorWithStickyNavbar_loeA",s="anchorWithHideOnScrollNavbar_emO8";function d(e){let{as:t,id:n,...d}=e;const{navbar:{hideOnScroll:u}}=(0,o.L)();if("h1"===t||!n)return i.createElement(t,(0,a.Z)({},d,{id:void 0}));const p=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof d.children?d.children:n});return i.createElement(t,(0,a.Z)({},d,{className:(0,r.Z)("anchor",u?s:m,d.className),id:n}),d.children,i.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},22966:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(87462),i=n(67294),r=n(35742);var l=n(86857);var o=n(39960);var c=n(34673);var m=n(43151);function s(e){return i.createElement(m.Z,e)}var d=n(86010);const u="containsTaskList_kggB";const p="img_CujE";var h=n(35281),g=n(95999);const f="admonition_WoCw",E="admonitionHeading_TMsN",v="admonitionIcon_Ibzs",b="admonitionContent_vXIg";const Z={note:{infimaClassName:"secondary",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:i.createElement(g.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:i.createElement(g.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 12 16"},i.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:i.createElement(g.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:i.createElement(g.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return i.createElement("svg",{viewBox:"0 0 16 16"},i.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:i.createElement(g.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},N={secondary:"note",important:"info",success:"tip",warning:"danger"};function k(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=i.Children.toArray(e),n=t.find((e=>i.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),a=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}const T={head:function(e){const t=i.Children.map(e.children,(e=>i.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...a}=e.props;return i.createElement(e.props.originalType,a)}return e}(e):e));return i.createElement(r.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return i.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,i.isValidElement)(e)&&t.includes(e.props?.mdxType)))?i.createElement("code",e):i.createElement(l.Z,e)},a:function(e){return i.createElement(o.Z,e)},pre:function(e){return i.createElement(l.Z,(0,i.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=i.Children.toArray(e.children),n=t.find((e=>i.isValidElement(e)&&"summary"===e.props?.mdxType)),r=i.createElement(i.Fragment,null,t.filter((e=>e!==n)));return i.createElement(c.Z,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return i.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,d.Z)(t,t?.includes("contains-task-list")&&u))}));var t},img:function(e){return i.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,d.Z)(t,p))}));var t},h1:e=>i.createElement(s,(0,a.Z)({as:"h1"},e)),h2:e=>i.createElement(s,(0,a.Z)({as:"h2"},e)),h3:e=>i.createElement(s,(0,a.Z)({as:"h3"},e)),h4:e=>i.createElement(s,(0,a.Z)({as:"h4"},e)),h5:e=>i.createElement(s,(0,a.Z)({as:"h5"},e)),h6:e=>i.createElement(s,(0,a.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:a,icon:r}=k(e),l=function(e){const t=N[e]??e;return Z[t]||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),Z.info)}(n),o=a??l.label,{iconComponent:c}=l,m=r??i.createElement(c,null);return i.createElement("div",{className:(0,d.Z)(h.k.common.admonition,h.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,f)},i.createElement("div",{className:E},i.createElement("span",{className:v},m),o),i.createElement("div",{className:b},t))},mermaid:n(11875).Z}},54280:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(86010),r=n(39960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(r.Z,{className:(0,i.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}}}]);