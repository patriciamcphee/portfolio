"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[1156],{28093:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(67294),o=n(87357),a=n(76624),r=n(44472),c=n(83578),i=n(92796),s=n(83321),u=n(90629),m=n(46483),d=n(15568),p=n(92401),h=n(86886),E=n(18037),g=n(68239),y=n(22430);let b=(0,g.Z)({palette:{primary:{main:"#9ecd28",dark:"#046b99",contrastText:"#fff"},secondary:{main:"#046b99",dark:"#024a6b",contrastText:"#000"}},typography:{fontFamily:["Nunito Sans","sans-serif"].join(",")},custom:{main:"#f57c00",dark:"#ef6c00",contrastText:"rgba(0, 0, 0, 0.87)"},contrastThreshold:3,tonalOffset:.2});l.Fragment,l.Fragment;const f=[{label:"Prerequisites",description:l.createElement(l.Fragment,null,l.createElement(d.Z,{severity:"info",sx:{ml:2}},l.createElement(p.Z,null,"IMPORTANT"),l.createElement("p",null,"If you're planning to make significant edits or add new content, you must set up your system with the proper tools.")," ",l.createElement("p",null,"If you're planning to only make minor edits in GitHub through the browser, you can skip to the ",l.createElement("a",{href:"#best-practices"},l.createElement("b",null,"Best practices"))," section below."),l.createElement("ol",null,l.createElement("li",null,"Code editor, VS Code is recommended"),l.createElement("li",null,"Git"),l.createElement("li",null,"Node.js"),l.createElement("li",null,"Yarn"))))},{label:"Install the tools",description:l.createElement(l.Fragment,null,l.createElement("p",null,"Before you can contribute to the SCOOBY documentation, you'll need to install and set up the tools."),l.createElement("ol",null,l.createElement("li",null,l.createElement("a",{href:"https://nodejs.org/en/download/"},"NodeJS"),l.createElement("p",null)),l.createElement("li",null,"Git client",l.createElement("p",null),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://git-scm.com/download/win"},"Windows"),l.createElement("br",null)),l.createElement("li",null,l.createElement("a",{href:"https://git-scm.com/download/mac"},"macOS"),l.createElement("p",null,"For macOS users, you can also install Git using ",l.createElement("code",null,"xcode-select --install")," from the terminal.")))),l.createElement("p",null),l.createElement("li",null,l.createElement("a",{href:"ttps://code.visualstudio.com/"},"Visual Studio Code (VS Code)"),l.createElement("p",null,"You can use Atom, but these instructions are VS Code-specific."),l.createElement("p",null)),l.createElement("p",null),l.createElement("li",null,"Yarn package manager.",l.createElement("p",null,l.createElement("pre",null,l.createElement("code",null,"npm install --global yarn"))),l.createElement("p",null,"If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command:",l.createElement("pre",null,l.createElement("code",null,"sudo npm install --global yarn"))))),l.createElement(h.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{px:2}},l.createElement(h.ZP,{item:!0},l.createElement("p",null,l.createElement(E.Z,{style:{fontSize:"24px",color:"#9ecd28"}}))),l.createElement(h.ZP,{item:!0,xs:!0},l.createElement("p",null,"At this point in your journey....If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command: If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command: If using macOS, you may have to authorize the global installation of packages. To do this you can use the sudo command:"))))},{label:"Set up the GitHub repo locally",description:l.createElement(l.Fragment,null,l.createElement("ol",null,l.createElement("li",null,"Open Git Bash to the folder where you're cloning the doc site repo (this should be workspace if macOS)."),l.createElement("p",null),l.createElement("li",null,"Clone the scooby-docs-next repo.",l.createElement("pre",null,l.createElement("code",null,"https://github.com/goscooby/scooby-docs-next.git"))),l.createElement("li",null,"Change directories to scooby-docs-next.",l.createElement("pre",null,l.createElement("code",null,"cd scooby-docs-next"))),l.createElement("li",null,"Create a new ",l.createElement("a",{href:"https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell"},"branch")," from ",l.createElement("code",null,"main")," (always give your branch a meaningful, descriptive name). ",l.createElement("p",null,l.createElement("pre",null,l.createElement("code",null,"git checkout -b <branch_name> main"))))),l.createElement(h.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{p:2}},l.createElement(h.ZP,{item:!0},l.createElement("p",null,l.createElement(E.Z,{style:{fontSize:"24px",color:"#9ecd28"}}))),l.createElement(h.ZP,{item:!0,xs:!0},l.createElement("p",null,"You now have the tools installed, your workspace or working directory set up, and the scooby-docs-next repo cloned. You're done!"))))},{label:"Start the development server",description:l.createElement(l.Fragment,null,l.createElement("p",null,"We're finally able to get to the fun stuff! Install the dependencies and start a local development server."),l.createElement("p",null,l.createElement("pre",null,l.createElement("code",null,"yarn",l.createElement("br",null),"yarn start"))),l.createElement("p",null,"The ",l.createElement("code",null,"http://localhost:3000")," opens in your browser so you can see your changes reflected live.As you make changes to the source files, the preview build will be triggered automatically, and then you can refresh your browser to see the changes."),l.createElement(h.ZP,{container:!0,wrap:"nowrap",spacing:2,sx:{p:2}},l.createElement(h.ZP,{item:!0},l.createElement("p",null,l.createElement(E.Z,{style:{fontSize:"24px",color:"#9ecd28"}}))),l.createElement(h.ZP,{item:!0,xs:!0},l.createElement("p",null,"Up to this point, you now have your tools installed and your working directory established. Keep going. You're almost done!"))))}];function w(){const[e,t]=l.useState(0),n=()=>{t((e=>e+1))},d=()=>{t((e=>e-1))};return l.createElement(y.Z,{theme:b},l.createElement(o.Z,{sx:{maxWidth:"100%",mb:2}},l.createElement(a.Z,{activeStep:e,orientation:"vertical"},f.map(((e,t)=>l.createElement(r.Z,{key:e.label},l.createElement(c.Z,{optional:3===t?l.createElement(m.Z,{variant:"caption"},"Last step"):null},l.createElement(m.Z,{variant:"h6"},e.label)),l.createElement(i.Z,null,l.createElement(m.Z,null,e.description),l.createElement(o.Z,{sx:{mb:2,ml:2,alignItems:"center"}},l.createElement("div",null,l.createElement(s.Z,{variant:"contained",onClick:n,sx:{mt:1,mr:1}},t===f.length-1?"Finish":"Continue"),l.createElement(s.Z,{disabled:0===t,onClick:d,sx:{mt:1,mr:1}},"Back")))))))),e===f.length&&l.createElement(u.Z,{square:!0,elevation:0,sx:{p:3}},l.createElement(m.Z,{variant:"h5",align:"center",sx:{py:1}},"You're finished!"),l.createElement(s.Z,{onClick:()=>{t(0)},sx:{mt:1,mr:1}},"Reset"))))}},78365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(87462),o=(n(67294),n(3905)),a=n(28093);const r={title:"Set up your environment",description:"Contributor's guide to a doc site.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},c=void 0,i={unversionedId:"how-tos/contribution-guide/onboard",id:"how-tos/contribution-guide/onboard",title:"Set up your environment",description:"Contributor's guide to a doc site.",source:"@site/docs/how-tos/contribution-guide/onboard.mdx",sourceDirName:"how-tos/contribution-guide",slug:"/how-tos/contribution-guide/onboard",permalink:"/portfolio/how-tos/contribution-guide/onboard",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/how-tos/contribution-guide/onboard.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1668326400,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"Set up your environment",description:"Contributor's guide to a doc site.",keywords:["contribute","documentation"],last_update:{date:"11/13/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null}},s={},u=[],m={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is a one-time setup.")),(0,o.kt)("p",null,"When you're authoring content, you're working locally. So it's important to have the right tools installed. For this framework, you'll use the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," package manager to build and view your changes in a browser window before you submit your pull request (PR)."),(0,o.kt)(a.Z,{mdxType:"OnboardingProcessStepper"}))}p.isMDXComponent=!0}}]);