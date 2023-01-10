"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?l.createElement(h,a(a({ref:t},s),{},{components:n})):l.createElement(h,a({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<r;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81645:(e,t,n)=>{n.d(t,{Z:()=>g});var l=n(87462),o=n(63366),r=n(67294),a=n(86010),i=n(94780),c=n(36622),u=n(78884),s=n(81719),m=n(1588),d=n(34867);function p(e){return(0,d.Z)("MuiSvgIcon",e)}(0,m.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(85893);const E=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],b=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,c.Z)(n.color)}`],t[`fontSize${(0,c.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,l,o,r,a,i,c,u,s,m,d,p,h,E,b,f,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(l=n.create)?void 0:l.call(n,"fill",{duration:null==(o=e.transitions)||null==(r=o.duration)?void 0:r.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(i=a.pxToRem)?void 0:i.call(a,20))||"1.25rem",medium:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,24))||"1.5rem",large:(null==(s=e.typography)||null==(m=s.pxToRem)?void 0:m.call(s,35))||"2.1875rem"}[t.fontSize],color:null!=(d=null==(p=(e.vars||e).palette)||null==(h=p[t.color])?void 0:h.main)?d:{action:null==(E=(e.vars||e).palette)||null==(b=E.action)?void 0:b.active,disabled:null==(f=(e.vars||e).palette)||null==(g=f.action)?void 0:g.disabled,inherit:void 0}[t.color]}})),f=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:r,className:s,color:m="inherit",component:d="svg",fontSize:f="medium",htmlColor:g,inheritViewBox:y=!1,titleAccess:w,viewBox:v="0 0 24 24"}=n,k=(0,o.Z)(n,E),S=(0,l.Z)({},n,{color:m,component:d,fontSize:f,instanceFontSize:e.fontSize,inheritViewBox:y,viewBox:v}),Z={};y||(Z.viewBox=v);const x=(e=>{const{color:t,fontSize:n,classes:l}=e,o={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(n)}`]};return(0,i.Z)(o,p,l)})(S);return(0,h.jsxs)(b,(0,l.Z)({as:d,className:(0,a.Z)(x.root,s),focusable:"false",color:g,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:t},Z,k,{ownerState:S,children:[r,w?(0,h.jsx)("title",{children:w}):null]}))}));f.muiName="SvgIcon";const g=f},54235:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(87462),o=n(67294),r=n(81645),a=n(85893);function i(e,t){function n(n,o){return(0,a.jsx)(r.Z,(0,l.Z)({"data-testid":`${t}Icon`,ref:o},n,{children:e}))}return n.muiName=r.Z.muiName,o.memo(o.forwardRef(n))}},42293:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n(8925).Z},8925:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(67294);function o({controlled:e,default:t,name:n,state:o="value"}){const{current:r}=l.useRef(void 0!==e),[a,i]=l.useState(t);return[r?e:a,l.useCallback((e=>{r||i(e)}),[])]}},28093:(e,t,n)=>{n.d(t,{Z:()=>b});var l=n(87462),o=n(67294),r=n(61953),a=n(98948),i=n(44044),c=n(94071),u=n(79411),s=n(75084),m=n(81401),d=n(29630),p=n(24711);const h={inputProps:{"aria-label":"Checkbox demo"}},E=[{label:"Install the tools",description:o.createElement(o.Fragment,null,o.createElement("p",null,"Before you can contribute to the SCOOBY documentation, you'll need to install and set up the tools."),o.createElement("ol",null,o.createElement("li",null,o.createElement("a",{href:"https://nodejs.org/en/download/"},"NodeJS"),o.createElement("p",null)),o.createElement("li",null,"Git client",o.createElement("p",null),o.createElement("h4",null,"Git Bash"),o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:"https://git-scm.com/download/win"},"Windows"),o.createElement("br",null)),o.createElement("li",null,o.createElement("a",{href:"https://git-scm.com/download/mac"},"macOS"),o.createElement("p",null,"For macOS users, you can also install Git using ",o.createElement("code",null,"xcode-select --install")," from the terminal."))),o.createElement("h4",null,"GitHub Desktop"),o.createElement("ul",null,o.createElement("li",null,o.createElement("a",{href:"https://desktop.github.com/"},"Windows"),o.createElement("br",null)),o.createElement("li",null,o.createElement("a",{href:"https://central.github.com/deployments/desktop/desktop/latest/darwin"},"macOS")))),o.createElement("p",null),o.createElement("li",null,o.createElement("a",{href:"ttps://code.visualstudio.com/"},"Visual Studio Code (VS Code)"),o.createElement("p",null,"You can use Atom, but these instructions are VS Code-specific."),o.createElement("p",null)),o.createElement("p",null),o.createElement("li",null,"Yarn package manager ",o.createElement("p",null,"You'll use the ",o.createElement("code",null,"yarn")," and ",o.createElement("code",null,"yarn start")," when you work locally. "),o.createElement("p",null,o.createElement("pre",null,o.createElement("code",null,"npm install --global yarn"))),o.createElement("p",null,"If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command:",o.createElement("pre",null,o.createElement("code",null,"sudo npm install --global yarn"))))),o.createElement("div",{class:"hangingindent check-point"},o.createElement(p.Z,(0,l.Z)({},h,{defaultChecked:!0})),"Up to this point in your onboarding journey, you should have NodeJS, a Git client, VS Code, and the yarn package manager installed."))},{label:"Establish your workspace",description:o.createElement(o.Fragment,null,o.createElement("p",null,"If this is your first time downloading a GitHub repository, it's crucial to establish a workspace folder to store the repo."),o.createElement("h4",null,"Windows"),o.createElement("p",null,"Create a new folder as your working directory, for example, ",o.createElement("b",null,"github"),". You can create the folder anywhere on your system, including in your ",o.createElement("b",null,"Documents")," folder."),o.createElement("h4",null,"macOS"),o.createElement("ol",null,o.createElement("li",null,"From your home directory, open your terminal.",o.createElement("p",null,o.createElement("b",null,"IMPORTANT:")," Ensure that you are in your ",o.createElement("b",null,"home")," directory.")),o.createElement("li",null,"Create a new folder called ",o.createElement("b",null,"workspace"),".",o.createElement("p",null,o.createElement("pre",null,o.createElement("code",null,"mkdir workspace")))),o.createElement("li",null,"Navigate to your new workspace folder.",o.createElement("p",null,o.createElement("pre",null,o.createElement("code",null,"cd workspace"))))),o.createElement("div",{class:"hangingindent check-point"},o.createElement(p.Z,(0,l.Z)({},h,{defaultChecked:!0}))," Up to this point, you now have your tools installed and your working directory established. Keep going. You're almost done!"))},{label:"Set up the GitHub repo locally",description:o.createElement(o.Fragment,null,o.createElement("br",null),o.createElement("details",null,o.createElement("summary",null,o.createElement("b",null,"GitHub Desktop")),o.createElement("br",null),o.createElement("ol",null,o.createElement("li",null,"Select ",o.createElement("b",null,"File > Clone repository"),".",o.createElement("p",null,o.createElement("img",{src:"https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image1.png?raw=true"}))),o.createElement("li",null,"Select the ",o.createElement("b",null,"URL")," tab and enter the following URL in the ",o.createElement("b",null,"Repository URL or GitHub username and repository")," field:",o.createElement("pre",null,o.createElement("code",null,"https://github.io/scooby/docs-next.git")),o.createElement("p",null,o.createElement("img",{src:"https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image2.png?raw=true"}))),o.createElement("li",null,"For the ",o.createElement("b",null,"Local path"),", browse to your established workspace or working directory. Select ",o.createElement("b",null,"Clone")," when you're ready."),o.createElement("p",null),o.createElement("li",null,"Select ",o.createElement("b",null,"Open in Visual Studio Code"),".",o.createElement("p",null,o.createElement("img",{src:"https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image3.png?raw=true"}))),o.createElement("li",null,"Select ",o.createElement("b",null,"View > Terminal"),".",o.createElement("p",null,"You'll use the terminal for configuring the remote connection between your local repo and the main repo. You'll also use the terminal to finalize the last bit of installation required."),o.createElement("p",null,o.createElement("img",{src:"https://github.com/patriciamcphee/portfolio/blob/main/static/img/readme/image4.png?raw=true"}))))),o.createElement("p",null),o.createElement("details",null,o.createElement("summary",null,o.createElement("b",null,"Git Bash")),o.createElement("ol",null,o.createElement("li",null,"Open Git Bash to the folder where you're cloning the doc site repo (this should be workspace if macOS)."),o.createElement("p",null),o.createElement("li",null,"Clone the docs-next repo.",o.createElement("pre",null,o.createElement("code",null,"https://github.io/scooby/docs-next.git"))),o.createElement("li",null,"Change directories to docs-next.",o.createElement("pre",null,o.createElement("code",null,"cd docs-next"))))),o.createElement("p",null),o.createElement("div",{class:"hangingindent check-point"},o.createElement(p.Z,(0,l.Z)({},h,{defaultChecked:!0})),"Up to this point, you have the tools installed, your workspace or working directory set up, and the docs-next repo cloned. You're done! "))}];function b(){const[e,t]=o.useState(0),n=()=>{t((e=>e+1))},l=()=>{t((e=>e-1))};return o.createElement(r.Z,{sx:{maxWidth:"100%"}},o.createElement(a.Z,{activeStep:e,orientation:"vertical"},E.map(((e,t)=>o.createElement(i.Z,{key:e.label},o.createElement(c.Z,{optional:2===t?o.createElement(d.Z,{variant:"caption"},"Last step"):null},e.label),o.createElement(u.Z,null,o.createElement(d.Z,null,e.description),o.createElement(r.Z,{sx:{mb:2}},o.createElement("div",null,o.createElement(s.Z,{variant:"contained",onClick:n,sx:{mt:1,mr:1}},t===E.length-1?"Finish":"Continue"),o.createElement(s.Z,{disabled:0===t,onClick:l,sx:{mt:1,mr:1}},"Back")))))))),e===E.length&&o.createElement(m.Z,{square:!0,elevation:0,sx:{p:3}},o.createElement(d.Z,{variant:"h5",align:"center",sx:{py:1}},"Yah! You're finished!",o.createElement("br",null),"You can now ",o.createElement("a",{href:"https://patriciamcphee.github.io/portfolio/docs/how-tos/contribution-guide/contribute"},"contribute")," until your heart's content."),o.createElement(s.Z,{onClick:()=>{t(0)},sx:{mt:1,mr:1}},"Reset")))}},78365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var l=n(87462),o=(n(67294),n(3905)),r=n(28093);const a={title:"Set up your environment",permalink:"docs/how-tos/contribution-guide/onboard",description:"Contributor's guide to a doc site.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"}},i=void 0,c={unversionedId:"how-tos/contribution-guide/onboard",id:"how-tos/contribution-guide/onboard",title:"Set up your environment",description:"Contributor's guide to a doc site.",source:"@site/docs/how-tos/contribution-guide/onboard.mdx",sourceDirName:"how-tos/contribution-guide",slug:"/how-tos/contribution-guide/onboard",permalink:"/portfolio/docs/how-tos/contribution-guide/onboard",draft:!1,tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1668326400,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Set up your environment",permalink:"docs/how-tos/contribution-guide/onboard",description:"Contributor's guide to a doc site.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"}},sidebar:"tutorialSidebar",previous:{title:"Doc site contributor's guide",permalink:"/portfolio/docs/how-tos/contribution-guide/contribute"},next:{title:"Markdown reference guide",permalink:"/portfolio/docs/how-tos/contribution-guide/markdown-reference"}},u={},s=[],m={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is a one-time setup.")),(0,o.kt)("p",null,"When you're authoring content, you're working locally. So it's important to have the right tools installed. For this framework, you'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," package manager to build and view your changes in a browser window before you submit your pull request (PR)."),(0,o.kt)(r.Z,{mdxType:"OnboardingProcessStepper"}))}d.isMDXComponent=!0}}]);