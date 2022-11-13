"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7920],{88824:(e,t,a)=>{a.d(t,{c:()=>u});var n=a(67294),r=a(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=a.select(t),l=a.pluralForms.indexOf(r);return n[Math.min(l,n.length-1)]}(a,t,e)}}},51473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(67294),r=a(52263),l=a(63929),s=a(35742),c=a(39960),o=a(95999),u=a(88824),m=a(16550),h=a(10412);const i=function(){const e=(0,m.k6)(),t=(0,m.TH)(),{siteConfig:{baseUrl:a}}=(0,r.Z)();return{searchValue:h.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var p=a(90022),d=a(98202),g=a(82539),f=a(10726),E=a(91073),y=a(80311);const S="searchQueryInput_CFBF",w="searchResultItem_U687",b="searchResultItemPath_uIbk",I="searchResultItemSummary_oZHr";var P=a(73926);function R(e){let{searchResult:{document:t,type:a,page:r,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:r.b).slice(),h=u?t.s:t.t;return o||m.push(r.t),n.createElement("article",{className:w},n.createElement("h2",null,n.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,g.C)(h,l):(0,f.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&n.createElement("p",{className:b},(0,P.e)(m)),u&&n.createElement("p",{className:I,dangerouslySetInnerHTML:{__html:(0,f.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const v=function(){const{siteConfig:{baseUrl:e}}=(0,r.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,updateSearchPath:c}=i(),[m,h]=(0,n.useState)(a),[g,f]=(0,n.useState)(),[E,w]=(0,n.useState)(),b=(0,n.useMemo)((()=>m?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:m}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[m]);(0,n.useEffect)((()=>{c(m),g&&(m?g(m,(e=>{w(e)})):w(void 0))}),[m,g]);const I=(0,n.useCallback)((e=>{h(e.target.value)}),[]);return(0,n.useEffect)((()=>{a&&a!==m&&h(a)}),[a]),(0,n.useEffect)((()=>{!async function(){const{wrappedIndexes:t,zhDictionary:a}=await(0,p.w)(e);f((()=>(0,d.v)(t,a,100)))}()}),[e]),n.createElement(l.Z,null,n.createElement(s.Z,null,n.createElement("meta",{property:"robots",content:"noindex, follow"}),n.createElement("title",null,b)),n.createElement("div",{className:"container margin-vert--lg"},n.createElement("h1",null,b),n.createElement("input",{type:"search",name:"q",className:S,"aria-label":"Search",onChange:I,value:m,autoComplete:"off",autoFocus:!0}),!g&&m&&n.createElement("div",null,n.createElement(y.Z,null)),E&&(E.length>0?n.createElement("p",null,t(E.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:E.length}))):n.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),n.createElement("section",null,E&&E.map((e=>n.createElement(R,{key:e.document.i,searchResult:e}))))))}}}]);