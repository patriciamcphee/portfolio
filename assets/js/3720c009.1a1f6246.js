"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[3751],{727:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(7294),a=n(6010),l=n(5155),c=n(1944),u=n(5281),o=n(5257),s=n(6090),i=n(197);function m(e){var t=e.tags,n=(0,l.M)();return r.createElement(c.FG,{className:(0,a.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},r.createElement(c.d,{title:n}),r.createElement(i.Z,{tag:"doc_tags_list"}),r.createElement(o.Z,null,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("main",{className:"col col--8 col--offset-2"},r.createElement("h1",null,n),r.createElement(s.Z,{tags:t}))))))}},3008:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7294),a=n(6010),l=n(9960),c="tag_zVej",u="tagRegular_sFm0",o="tagWithCount_h2kH";function s(e){var t=e.permalink,n=e.label,s=e.count;return r.createElement(l.Z,{href:t,className:(0,a.Z)(c,s?o:u)},n,s&&r.createElement("span",null,s))}},6090:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(5155),l=n(3008),c="tag_Nnez";function u(e){var t=e.letterEntry;return r.createElement("article",null,r.createElement("h2",null,t.letter),r.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return r.createElement("li",{key:e.permalink,className:c},r.createElement(l.Z,e))}))),r.createElement("hr",null))}function o(e){var t=e.tags,n=(0,a.P)(t);return r.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return r.createElement(u,{key:e.letter,letterEntry:e})})))}},5155:function(e,t,n){n.d(t,{M:function(){return a},P:function(){return l}});var r=n(5999),a=function(){return(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],r=t[0];return n.localeCompare(r)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);