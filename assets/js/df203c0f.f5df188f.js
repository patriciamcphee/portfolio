"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9924],{491:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var r=a(7294),l=a(4334),n=a(9960),c=a(8824),o=a(1944),s=a(5281),u=a(5999),i=a(2164),g=a(197);function m(e){var t=e.doc;return r.createElement("article",{className:"margin-vert--lg"},r.createElement(n.Z,{to:t.permalink},r.createElement("h2",null,t.title)),t.description&&r.createElement("p",null,t.description))}function d(e){var t,a=e.tag,d=(t=(0,c.c)().selectMessage,function(e){return t(e,(0,u.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:e}))}),f=(0,u.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:d(a.count),tagName:a.label});return r.createElement(o.FG,{className:(0,l.Z)(s.k.wrapper.docsPages,s.k.page.docsTagDocListPage)},r.createElement(o.d,{title:f}),r.createElement(g.Z,{tag:"doc_tag_doc_list"}),r.createElement(i.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,f),r.createElement(n.Z,{href:a.allTagsPath},r.createElement(u.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),r.createElement("section",{className:"margin-vert--lg"},a.items.map((function(e){return r.createElement(m,{key:e.id,doc:e})}))))))))}},8824:function(e,t,a){a.d(t,{c:function(){return u}});var r=a(7294),l=a(2263),n=["zero","one","two","few","many","other"];function c(e){return n.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:c(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:c(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function u(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}}}]);