"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[2973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"Example README",description:"Example README file.",pagination_next:null,pagination_prev:null,last_update:{date:"05/20/2023",author:"Patricia McPhee"}},i=void 0,l={unversionedId:"example-readme",id:"example-readme",title:"Example README",description:"Example README file.",source:"@site/docs/example-readme.mdx",sourceDirName:".",slug:"/example-readme",permalink:"/portfolio/example-readme",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/example-readme.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1684566e3,formattedLastUpdatedAt:"May 20, 2023",frontMatter:{title:"Example README",description:"Example README file.",pagination_next:null,pagination_prev:null,last_update:{date:"05/20/2023",author:"Patricia McPhee"}},sidebar:"mySidebar"},s={},p=[{value:"Provide feedback",id:"provide-feedback",level:2},{value:"Request improvements",id:"request-improvements",level:2},{value:"Contribute to the docs",id:"contribute-to-the-docs",level:2},{value:"Doc branches",id:"doc-branches",level:2},{value:"Site organization and files",id:"site-organization-and-files",level:2},{value:"Run the doc site locally",id:"run-the-doc-site-locally",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Clone the repo",id:"clone-the-repo",level:3},{value:"Start the development server",id:"start-the-development-server",level:3},{value:"Thank you!",id:"thank-you",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Welcome to the SCOOBY customer documentation repository! "),(0,r.kt)("p",null,"This repo is the source for ",(0,r.kt)("a",{parentName:"p",href:"https://scooby-docs-next.vercel.app/"},"https://scooby-docs-next.vercel.apps/"),', also known as "The Docs"! The SCOOBY documentation is completely open-source and we appreciate contributions from the community.'),(0,r.kt)("h2",{id:"provide-feedback"},"Provide feedback"),(0,r.kt)("p",null,"Your feedback is essential in shaping the customer content experience. There are several ways to provide feedback:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/goscooby/scooby-docs-next/issues/new?assignees=&labels=%F0%9F%8C%9F+enhancement&projects=&template=enhancement.yml"},"Submit an enhancement idea")," to make the docs better"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/goscooby/scooby-docs-next/issues/new?assignees=&labels=triage&projects=&template=content-issue.yml&title=%5BContent+issue%5D%3A+"},"open a GitHub issue")," to report an issue with the content (something is incorrect or confusing)")),(0,r.kt)("p",null,"The Product team will track these ideas and issues to address your feedback. "),(0,r.kt)("h2",{id:"request-improvements"},"Request improvements"),(0,r.kt)("p",null,"You can request the documentation to be improved or clarified, report an error, or submit suggestions and ideas by opening an issue in GitHub. The Product team tracks the issues and works to address your feedback. "),(0,r.kt)("h2",{id:"contribute-to-the-docs"},"Contribute to the docs"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/contributor-guide"},"contributor's guide")," for details on how to submit edits or additions to the website/documentation."),(0,r.kt)("h2",{id:"doc-branches"},"Doc branches"),(0,r.kt)("p",null,"Before you get started with the authoring work, it's necessary that you understand the different branches to work on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"main"))," -  protected branch"),(0,r.kt)("p",{parentName:"li"},"Docs for ",(0,r.kt)("a",{parentName:"p",href:"https://scooby-docs-next.vercel.app"},"https://scooby-docs-next.vercel.app"),". This branch contains the most recent stable release content.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"docs-staging"))," - protected branch"),(0,r.kt)("p",{parentName:"li"},"Docs for the upcoming ",(0,r.kt)("inlineCode",{parentName:"p"},"vNext")," release. When SCOOBY has a release, its ",(0,r.kt)("inlineCode",{parentName:"p"},"docs-staging")," branch will be merged into ",(0,r.kt)("inlineCode",{parentName:"p"},"main"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"active-development"))," - protected branch"),(0,r.kt)("p",{parentName:"li"},"Docs for a forward-version that includes features not yet included in the SCOOBY stable version. Its content is published on ",(0,r.kt)("a",{parentName:"p",href:"https://scooby-docs-next.vercel.app/active-development"},"https://scooby-docs-next.vercel.app/active-development")," for early validation purpose.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"v<v.r>.x"))," - protected branches"),(0,r.kt)("p",{parentName:"li"},"Docs for an archived version, where ",(0,r.kt)("inlineCode",{parentName:"p"},"v")," indicates the version, ",(0,r.kt)("inlineCode",{parentName:"p"},"r")," indicates the release number. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.0.x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.1.x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"v1.6.x"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Branches that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"release-")," contain archived patch release documentation for historical tracking.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can have your own personal branch to work on content for a certain issue or feature. However, be sure to check and remove unused personal branches periodically for easy maintenance. Usually when your branch is merged, you can safely delete it."))),(0,r.kt)("h2",{id:"site-organization-and-files"},"Site organization and files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docs/")," - Contains the Markdown files for the docs. Customize the order of the docs sidebar in ",(0,r.kt)("inlineCode",{parentName:"li"},"sidebars.js"),". "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/docusaurus.config.js")," - A config file containing the site configuration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/sidebar.js")," - Specify the order of documents in the sidebar. If you have a new file to add to the site, modify this file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/src/")," - Non-documentation files like pages or custom React components.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/src/pages")," - Any files within this directory will be converted into a website page."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/static/")," - Static directory. Any contents inside here will be copied into the root of the final ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," directory."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/package.json")," - A Docusaurus website is a React app. You can install and use any npm packages you like in them.")),(0,r.kt)("h2",{id:"run-the-doc-site-locally"},"Run the doc site locally"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Code editor, ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"VS Code")," is recommended"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com"},"Git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},"Yarn")," ")),(0,r.kt)("h3",{id:"clone-the-repo"},"Clone the repo"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repo.  This creates a directory named ",(0,r.kt)("inlineCode",{parentName:"p"},"scooby-docs-next")," in your current working directory."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/goscooby/scooby-docs-next.git\ncd scooby-docs-next\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, create a new ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"},"branch")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," (always give your branch a meaningful, descriptive name). "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b <branch_name> main\n")))),(0,r.kt)("h3",{id:"start-the-development-server"},"Start the development server"),(0,r.kt)("p",null,"We're finally able to get to the fun stuff! Install the dependencies and start a local development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn\nyarn start\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," opens in your browser so you can see your changes reflected live.As you make changes to the source files, the preview build will be triggered automatically, and then you can refresh your browser to see the changes."),(0,r.kt)("h2",{id:"thank-you"},"Thank you!"),(0,r.kt)("p",null,"We appreciate your contributions to our documentation!"))}u.isMDXComponent=!0}}]);