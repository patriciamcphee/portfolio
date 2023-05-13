"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[7597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(87462),l=(n(67294),n(3905));const r={title:"Markdown reference guide",description:"Use markdown and extended markdown to build beautiful documentation.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},i=void 0,o={unversionedId:"how-tos/contribution-guide/markdown-reference",id:"how-tos/contribution-guide/markdown-reference",title:"Markdown reference guide",description:"Use markdown and extended markdown to build beautiful documentation.",source:"@site/docs/how-tos/contribution-guide/markdown-reference.mdx",sourceDirName:"how-tos/contribution-guide",slug:"/how-tos/contribution-guide/markdown-reference",permalink:"/portfolio/how-tos/contribution-guide/markdown-reference",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/how-tos/contribution-guide/markdown-reference.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1668326400,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Markdown reference guide",description:"Use markdown and extended markdown to build beautiful documentation.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null}},s={},d=[{value:"Headings",id:"headings",level:2},{value:"Blockquotes",id:"blockquotes",level:2},{value:"Bold and italic text",id:"bold-and-italic-text",level:2},{value:"Indentation",id:"indentation",level:2},{value:"Lists",id:"lists",level:2},{value:"Numbered list",id:"numbered-list",level:3},{value:"Bulleted list",id:"bulleted-list",level:3},{value:"Tables",id:"tables",level:2},{value:"Inconsistent column widths between tables",id:"inconsistent-column-widths-between-tables",level:3},{value:"Data matrix tables",id:"data-matrix-tables",level:3},{value:"Add code blocks",id:"add-code-blocks",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://markdowntohtml.com",title:"Awesome tooltip"},"have a title")),(0,l.kt)("p",null,"This is a ",(0,l.kt)("a",{parentName:"p",href:"##",title:"your hover text"},"hover text")," example."),(0,l.kt)("h2",{id:"headings"},"Headings"),(0,l.kt)("p",null,"Docs supports six levels of Markdown headings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"# This is a first level heading (H1)\n\n## This is a second level heading (H2)\n\n...\n\n###### This is a sixth level heading (H6)\n")),(0,l.kt)("p",null,"There must be a space between the last ",(0,l.kt)("inlineCode",{parentName:"p"},"#")," and heading text."),(0,l.kt)("h2",{id:"blockquotes"},"Blockquotes"),(0,l.kt)("p",null,"Blockquotes are created using the ",(0,l.kt)("inlineCode",{parentName:"p"},">")," character:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"> This is a blockquote. It is usually rendered indented and with a different background color.\n")),(0,l.kt)("p",null,"The preceding example renders as follows:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This is a blockquote. It is usually rendered indented and with a different background color.")),(0,l.kt)("h2",{id:"bold-and-italic-text"},"Bold and italic text"),(0,l.kt)("p",null,"To format text as ",(0,l.kt)("strong",{parentName:"p"},"bold"),", enclose it in two asterisks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"This text is **bold**.\n")),(0,l.kt)("p",null,"To format text as ",(0,l.kt)("em",{parentName:"p"},"italic"),", enclose it in a single asterisk:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"This text is *italic*.\n")),(0,l.kt)("p",null,"To format text as both ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"bold and italic")),", enclose it in three asterisks:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"This text is both ***bold and italic***.\n")),(0,l.kt)("h2",{id:"indentation"},"Indentation"),(0,l.kt)("p",null,"In Markdown, spaces before the first character of a line determine the line's alignment relative to the preceding lines. Indentation especially influences numbered and bulleted lists to render multiple levels of nesting in a hierarchical or outline format."),(0,l.kt)("p",null,"To indent text to align with a preceding paragraph or an item in a numbered or bulleted list, use spaces."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"1. This is a numbered list example (one space after the period before the letter T).\n  This sentence is indented three spaces.\n  This code block is indented three spaces.\n  \n- This is a bulleted list example (one space after the bullet before the letter T).\nThis sentence is indented two spaces.\n\n- This is a second-level bullet (indented two spaces, with one space after the bullet before the letter T).\n  This sentence is indented four spaces.\n  > This quote block is indented four spaces.\n\n")),(0,l.kt)("p",null,"The example above renders as:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"This is a numbered list example (one space after the period before the letter T)."),(0,l.kt)("p",{parentName:"li"},"This sentence is indented three spaces."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"This code block is indented three spaces.\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is a bulleted list example (one space after the bullet before the letter T).")),(0,l.kt)("p",null,"This sentence is indented two spaces."),(0,l.kt)("p",null,"This tip is indented two spaces."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is a second-level bullet (indented two spaces, with one space after the bullet before the letter T).\nThis sentence is indented four spaces.",(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"This quote block is indented four spaces.")))),(0,l.kt)("h2",{id:"lists"},"Lists"),(0,l.kt)("h3",{id:"numbered-list"},"Numbered list"),(0,l.kt)("p",null,"To create a numbered list, you can use all 1s. The numbers are rendered in ascending order as a sequential list when published. For increased source readability, you can increment your lists manually."),(0,l.kt)("p",null,"Don't use letters in lists, including nested lists. They don't render correctly when published to Docs. Nested lists using numbers will render as lowercase letters when published. For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"1. This is\n1. a parent numbered list\n  1. and this is\n  1. a nested numbered list\n1. (fin)\n")),(0,l.kt)("p",null,"This renders as follows:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"This is"),(0,l.kt)("li",{parentName:"ol"},"a parent numbered list"),(0,l.kt)("li",{parentName:"ol"},"and this is"),(0,l.kt)("li",{parentName:"ol"},"a nested numbered list"),(0,l.kt)("li",{parentName:"ol"},"(fin)")),(0,l.kt)("h3",{id:"bulleted-list"},"Bulleted list"),(0,l.kt)("p",null,"To create a bulleted list, use ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"*")," followed by a space at the beginning of each line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"- This is\n- a parent bulleted list\n- and this is\n- a nested bulleted list\n- All done!\n")),(0,l.kt)("p",null,"This renders as follows:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"This is"),(0,l.kt)("li",{parentName:"ul"},"a parent bulleted list"),(0,l.kt)("li",{parentName:"ul"},"and this is"),(0,l.kt)("li",{parentName:"ul"},"a nested bulleted list"),(0,l.kt)("li",{parentName:"ul"},"All done!")),(0,l.kt)("p",null,"Whichever syntax you use, ",(0,l.kt)("inlineCode",{parentName:"p"},"-")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"*"),", use it consistently within a topic."),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("p",null,"The simplest way to create a table in Markdown is to use pipes and lines. To create a standard table with a header, follow the first line with dashed line:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"|This is   |a simple   |table header|\n|----------|-----------|------------|\n|table     |data       |here        |\n|it doesn't|actually   |have to line up nicely!|\n")),(0,l.kt)("p",null,"This renders as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"This is"),(0,l.kt)("th",{parentName:"tr",align:null},"a simple"),(0,l.kt)("th",{parentName:"tr",align:null},"table header"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"here")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"it doesn't"),(0,l.kt)("td",{parentName:"tr",align:null},"actually"),(0,l.kt)("td",{parentName:"tr",align:null},"have to line up nicely!")))),(0,l.kt)("p",null,"You can align the columns by using colons:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"| Fun                  | With                 | Tables          |\n| :------------------- | -------------------: |:---------------:|\n| left-aligned column  | right-aligned column | centered column |\n| $100                 | $100                 | $100            |\n| $10                  | $10                  | $10             |\n| $1                   | $1                   | $1              |\n")),(0,l.kt)("p",null,"Renders as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Fun"),(0,l.kt)("th",{parentName:"tr",align:"right"},"With"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Tables"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"left-aligned column"),(0,l.kt)("td",{parentName:"tr",align:"right"},"right-aligned column"),(0,l.kt)("td",{parentName:"tr",align:"center"},"centered column")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$100"),(0,l.kt)("td",{parentName:"tr",align:"right"},"$100"),(0,l.kt)("td",{parentName:"tr",align:"center"},"$100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$10"),(0,l.kt)("td",{parentName:"tr",align:"right"},"$10"),(0,l.kt)("td",{parentName:"tr",align:"center"},"$10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"$1"),(0,l.kt)("td",{parentName:"tr",align:"right"},"$1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"$1")))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can also use an ",(0,l.kt)("a",{parentName:"p",href:"http://www.tablesgenerator.com/markdown_tables"},"online table generator"),".")),(0,l.kt)("h3",{id:"inconsistent-column-widths-between-tables"},"Inconsistent column widths between tables"),(0,l.kt)("p",null,"You may notice that the column widths of the tables look odd or inconsistent. This behavior occurs because the length of text within the cells determines the layout of the table. Unfortunately, there's no way to control how the tables render. This is a limitation of Markdown. Even though it would look nicer to have the width of table columns be consistent, this would have some disadvantages too:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Interlacing HTML code with Markdown makes topics more complicated and discourages community contributions."),(0,l.kt)("li",{parentName:"ul"},"A table that you make look good for a specific screen size may end up looking unreadable at different screen sizes as it preempts responsive rendering.")),(0,l.kt)("h3",{id:"data-matrix-tables"},"Data matrix tables"),(0,l.kt)("p",null,"A data matrix table has both a header and a weighted first column, creating a matrix with an empty cell in the top left. Docs has custom Markdown for data matrix tables:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-md"},"|                  |Header 1 |Header 2|\n|------------------|---------|--------|\n|**First column A**|Cell 1A  |Cell 2A |\n|**First column B**|Cell 1B  |Cell 2B |\n")),(0,l.kt)("p",null,"The example renders as:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Header 1"),(0,l.kt)("th",{parentName:"tr",align:null},"Header 2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"First column A")),(0,l.kt)("td",{parentName:"tr",align:null},"Cell 1A"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell 2A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"First column B")),(0,l.kt)("td",{parentName:"tr",align:null},"Cell 1B"),(0,l.kt)("td",{parentName:"tr",align:null},"Cell 2B")))),(0,l.kt)("p",null,"Every entry in the first column must be styled as bold (",(0,l.kt)("inlineCode",{parentName:"p"},"**bold**"),"); otherwise the tables won't be accessible for screen readers or valid for Docs."),(0,l.kt)("h2",{id:"add-code-blocks"},"Add code blocks"),(0,l.kt)("p",null,"There are several ways to include code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Individual elements (words) within a line.")),(0,l.kt)("p",null,"Here's an example of ",(0,l.kt)("inlineCode",{parentName:"p"},"code")," style."),(0,l.kt)("p",null,"Use code format when referring to named parameters and variables in a nearby code block in your text. Code format may also be used for properties, methods, classes, and language keywords. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Code blocks in the article Markdown file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"  ```javascript\n  module.exports = {\n    sidebar: [\n      {\n        type: 'category',\n        label: 'Overview',\n        items: ['release-notes', 'intro', 'how-it-works'],\n      };\n    ],\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"")))),(0,l.kt)("p",null,"The example renders as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  sidebar: [\n    {\n      type: 'category',\n      label: 'Overview',\n      items: ['release-notes', 'intro', 'how-it-works'],\n    };\n  ],\n")),(0,l.kt)("p",null,"Use inline code blocks when it's impractical to display code by reference to a code file."))}c.isMDXComponent=!0}}]);