"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[3089],{93269:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(67294),l=n(86010),r=n(52263),i=n(1944),o=n(35281),s=n(40245),c=n(95999),m=n(32244);function d(e){const{metadata:t}=e,{previousPage:n,nextPage:l}=t;return a.createElement("nav",{className:"pagination-nav","aria-label":(0,c.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n&&a.createElement(m.Z,{permalink:n,title:a.createElement(c.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&a.createElement(m.Z,{permalink:l,title:a.createElement(c.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var u=n(90197),g=n(9460),p=n(77759);function h(e){let{items:t,component:n=p.Z}=e;return a.createElement(a.Fragment,null,t.map((e=>{let{content:t}=e;return a.createElement(g.n,{key:t.metadata.permalink,content:t},a.createElement(n,null,a.createElement(t,null)))})))}function E(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,r.Z)(),{blogDescription:l,blogTitle:o,permalink:s}=t,c="/"===s?n:o;return a.createElement(a.Fragment,null,a.createElement(i.d,{title:c,description:l}),a.createElement(u.Z,{tag:"blog_posts_list"}))}function f(e){const{metadata:t,items:n,sidebar:l}=e;return a.createElement(s.Z,{sidebar:l},a.createElement(h,{items:n}),a.createElement(d,{metadata:t}))}function b(e){return a.createElement(i.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},a.createElement(E,e),a.createElement(f,e))}},36624:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(67294),l=n(87524),r=n(86010),i=n(39960),o=n(95999);const s={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,r.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,r.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,r.Z)(s.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:s.sidebarItem},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))}var m=n(13102);function d(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function u(e){return a.createElement(m.Zo,{component:d,props:e})}function g(e){let{sidebar:t}=e;const n=(0,l.i)();return t?.items.length?"mobile"===n?a.createElement(u,{sidebar:t}):a.createElement(c,{sidebar:t}):null}},84881:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),l=n(95999),r=n(35281),i=n(87462),o=n(86010);const s={iconEdit:"iconEdit_Z9Sw"};function c(e){let{className:t,...n}=e;return a.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(s.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},a.createElement(c,null),a.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},32244:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(86010),r=n(39960);function i(e){const{permalink:t,title:n,subLabel:i,isNext:o}=e;return a.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&a.createElement("div",{className:"pagination-nav__sublabel"},i),a.createElement("div",{className:"pagination-nav__label"},n))}},9460:(e,t,n)=>{n.d(t,{C:()=>o,n:()=>i});var a=n(67294),l=n(902);const r=a.createContext(null);function i(e){let{children:t,content:n,isBlogPostPage:l=!1}=e;const i=function(e){let{content:t,isBlogPostPage:n}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:n})),[t,n])}({content:n,isBlogPostPage:l});return a.createElement(r.Provider,{value:i},t)}function o(){const e=(0,a.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},88824:(e,t,n)=>{n.d(t,{c:()=>c});var a=n(67294),l=n(52263);const r=["zero","one","two","few","many","other"];function i(e){return r.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=s();return{selectMessage:(t,n)=>function(e,t,n){const a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const l=n.select(t),r=n.pluralForms.indexOf(l);return a[Math.min(r,a.length-1)]}(n,t,e)}}},40245:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010),r=n(61420),i=n(36624);function o(e){const{sidebar:t,toc:n,children:o,...s}=e,c=t&&t.items.length>0;return a.createElement(r.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(i.Z,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&a.createElement("div",{className:"col col--2"},n))))}},77759:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(67294),l=n(86010),r=n(9460),i=n(44996);function o(e){let{children:t,className:n}=e;const{frontMatter:l,assets:o,metadata:{description:s}}=(0,r.C)(),{withBaseUrl:c}=(0,i.C)(),m=o.image??l.image,d=l.keywords??[];return window.erxesSettings={messenger:{brand_id:"_-LCq3"}},(()=>{const e=document.createElement("script");e.src="https://pscmdesigns.app.erxes.io/widgets/build/messengerWidget.bundle.js",e.async=!0;const t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})(),a.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},s&&a.createElement("meta",{itemProp:"description",content:s}),m&&a.createElement("link",{itemProp:"image",href:c(m,{absolute:!0})}),d.length>0&&a.createElement("meta",{itemProp:"keywords",content:d.join(",")}),t)}var s=n(39960);const c={title:"title_xvU1"};function m(e){let{className:t}=e;const{metadata:n,isBlogPostPage:i}=(0,r.C)(),{permalink:o,title:m}=n,d=i?"h1":"h2";return a.createElement(d,{className:(0,l.Z)(c.title,t),itemProp:"headline"},i?m:a.createElement(s.Z,{itemProp:"url",to:o},m))}var d=n(95999),u=n(88824);const g={container:"container_iJTo"};function p(e){let{readingTime:t}=e;const n=function(){const{selectMessage:e}=(0,u.c)();return t=>{const n=Math.ceil(t);return e(n,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:n}))}}();return a.createElement(a.Fragment,null,n(t))}function h(e){let{date:t,formattedDate:n}=e;return a.createElement("time",{dateTime:t,itemProp:"datePublished"},n)}function E(){return a.createElement(a.Fragment,null," \xb7 ")}function f(e){let{className:t}=e;const{metadata:n}=(0,r.C)(),{date:i,formattedDate:o,readingTime:s}=n;return a.createElement("div",{className:(0,l.Z)(g.container,"margin-vert--md",t)},a.createElement(h,{date:i,formattedDate:o}),void 0!==s&&a.createElement(a.Fragment,null,a.createElement(E,null),a.createElement(p,{readingTime:s})))}function b(e){return e.href?a.createElement(s.Z,e):a.createElement(a.Fragment,null,e.children)}function v(e){let{author:t,className:n}=e;const{name:r,title:i,url:o,imageURL:s,email:c}=t,m=o||c&&`mailto:${c}`||void 0;return a.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",n)},s&&a.createElement(b,{href:m,className:"avatar__photo-link"},a.createElement("img",{className:"avatar__photo",src:s,alt:r,itemProp:"image"})),r&&a.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},a.createElement("div",{className:"avatar__name"},a.createElement(b,{href:m,itemProp:"url"},a.createElement("span",{itemProp:"name"},r))),i&&a.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}const N={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function Z(e){let{className:t}=e;const{metadata:{authors:n},assets:i}=(0,r.C)();if(0===n.length)return null;const o=n.every((e=>{let{name:t}=e;return!t}));return a.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",o?N.imageOnlyAuthorRow:"row",t)},n.map(((e,t)=>a.createElement("div",{className:(0,l.Z)(!o&&"col col--6",o?N.imageOnlyAuthorCol:N.authorCol),key:t},a.createElement(v,{author:{...e,imageURL:i.authorsImageUrls[t]??e.imageURL}})))))}function _(){return a.createElement("header",null,a.createElement(m,null),a.createElement(f,null),a.createElement(Z,null))}var k=n(18780),y=n(81207);function C(e){let{children:t,className:n}=e;const{isBlogPostPage:i}=(0,r.C)();return a.createElement("div",{id:i?k.blogPostContainerID:void 0,className:(0,l.Z)("markdown",n),itemProp:"articleBody"},a.createElement(y.Z,null,t))}var T=n(84881);const P={tag:"tag_d0Lz",tagRegular:"tagRegular_bmnp",tagWithCount:"tagWithCount_vddX"};function w(e){let{permalink:t,label:n,count:r}=e;return a.createElement(s.Z,{href:t,className:(0,l.Z)(P.tag,r?P.tagWithCount:P.tagRegular)},n,r&&a.createElement("span",null,r))}const I={tags:"tags_ysAR",tag:"tag_DyE2"};function x(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(d.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,l.Z)(I.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:I.tag},a.createElement(w,{label:t,permalink:n}))}))))}var L=n(87462);function A(){return a.createElement("b",null,a.createElement(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){const{blogPostTitle:t,...n}=e;return a.createElement(s.Z,(0,L.Z)({"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},n),a.createElement(A,null))}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y"};function M(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:n,title:i,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=n.length>0;return m||c||o?a.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull)},m&&a.createElement("div",{className:(0,l.Z)("col",{"col--9":c})},a.createElement(x,{tags:n})),t&&o&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(T.Z,{editUrl:o})),c&&a.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":m})},a.createElement(B,{blogPostTitle:i,to:e.permalink}))):null}var z=n(91262);function R(e){let{children:t,className:n}=e;const i=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return a.createElement(z.Z,null,(()=>a.createElement(o,{className:(0,l.Z)(i,n)},a.createElement(_,null),a.createElement(C,null,t),a.createElement(M,null))))}},43151:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),r=n(86010),i=n(95999),o=n(86668),s=n(39960);const c={anchorWithStickyNavbar:"anchorWithStickyNavbar_loeA",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_emO8"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===t||!n)return l.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return l.createElement(t,(0,a.Z)({},m,{className:(0,r.Z)("anchor",d?c.anchorWithHideOnScrollNavbar:c.anchorWithStickyNavbar,m.className),id:n}),m.children,l.createElement(s.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},81207:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294);var l=n(3905),r=n(87462),i=n(35742);var o=n(30522);var s=n(39960);var c=n(86010),m=n(31173);const d={details:"details_r1OI",detailsContainer:"detailsContainer_fa7I",summaryHeading:"summaryHeading_PUXg"},u="alert alert--info";function g(e){let{...t}=e;return a.createElement(m.P,(0,r.Z)({},t,{className:(0,c.Z)(u,d.details,d.detailsContainer,d.summaryHeading,t.className)}))}var p=n(43151);function h(e){return a.createElement(p.Z,e)}const E={containsTaskList:"containsTaskList_kggB"};const f={img:"img_CujE"};var b=n(35281),v=n(95999);const N="admonition_WoCw",Z="admonitionHeading_TMsN",_="admonitionIcon_Ibzs",k="admonitionContent_vXIg";const y={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(v.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(v.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(v.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(v.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(v.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},C={secondary:"note",important:"info",success:"tip",warning:"danger"};function T(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:l}}(e.children);return{...e,title:e.title??t,children:n}}const P={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...l}=e.props;return a.createElement(e.props.originalType,l)}return e}(e):e));return a.createElement(i.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(s.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),l=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(g,(0,r.Z)({},e,{summary:n}),l)},ul:function(e){return a.createElement("ul",(0,r.Z)({},e,{className:(t=e.className,(0,c.Z)(t,t?.includes("contains-task-list")&&E.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,r.Z)({loading:"lazy"},e,{className:(t=e.className,(0,c.Z)(t,f.img))}));var t},h1:e=>a.createElement(h,(0,r.Z)({as:"h1"},e)),h2:e=>a.createElement(h,(0,r.Z)({as:"h2"},e)),h3:e=>a.createElement(h,(0,r.Z)({as:"h3"},e)),h4:e=>a.createElement(h,(0,r.Z)({as:"h4"},e)),h5:e=>a.createElement(h,(0,r.Z)({as:"h5"},e)),h6:e=>a.createElement(h,(0,r.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:l,icon:r}=T(e),i=function(e){const t=C[e]??e,n=y[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),y.info)}(n),o=l??i.label,{iconComponent:s}=i,m=r??a.createElement(s,null);return a.createElement("div",{className:(0,c.Z)(b.k.common.admonition,b.k.common.admonitionType(e.type),"alert",`alert--${i.infimaClassName}`,N)},a.createElement("div",{className:Z},a.createElement("span",{className:_},m),o),a.createElement("div",{className:k},t))},mermaid:n(20502).Z};function w(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(l.Zo,{components:P},t),a.createElement("hr",null))}}}]);