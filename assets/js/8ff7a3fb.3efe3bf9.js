"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[4726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},66684:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r=a.p+"assets/images/smartbear-2020-report-cfc04865bcab63d553104ba283910d37.png",i={title:"Example content audit",description:"Content Strategy equals continuous discovery.",pagination_next:null,pagination_prev:null,last_update:{date:"05/21/2023",author:"Patricia McPhee"}},s=void 0,l={unversionedId:"example-content-audit",id:"example-content-audit",title:"Example content audit",description:"Content Strategy equals continuous discovery.",source:"@site/docs/example-content-audit.mdx",sourceDirName:".",slug:"/example-content-audit",permalink:"/portfolio/example-content-audit",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/example-content-audit.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1684652400,formattedLastUpdatedAt:"May 21, 2023",frontMatter:{title:"Example content audit",description:"Content Strategy equals continuous discovery.",pagination_next:null,pagination_prev:null,last_update:{date:"05/21/2023",author:"Patricia McPhee"}},sidebar:"mySidebar"},p={},c=[{value:"Problems found",id:"problems-found",level:2},{value:"On the surface",id:"on-the-surface",level:3},{value:"Under the hood",id:"under-the-hood",level:3},{value:"Opportunities and goals",id:"opportunities-and-goals",level:2},{value:"Opportunities",id:"opportunities",level:3},{value:"On the surface",id:"on-the-surface-1",level:4},{value:"Under the hood",id:"under-the-hood-1",level:4},{value:"Proposed content structure",id:"proposed-content-structure",level:2},{value:"Proposed next steps",id:"proposed-next-steps",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"problems-found"},"Problems found"),(0,o.kt)("h3",{id:"on-the-surface"},"On the surface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There needs to be a clear flow. For example, when I finished the Getting Started guide, I didn't know what to do next. Also, I found how-tos are in one topic instead of stand-alone topics.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We are not explicit about this being ProductA or ProductB. This can confuse developers who may need to learn or understand the difference."),(0,o.kt)("p",{parentName:"li"},'  "Welcome to the ProductA developer documentation for Beyond Identity. Here you\'ll find guides for building authentication across your applications."'),(0,o.kt)("p",{parentName:"li"},"  This way, we are being explicit about the platform and audience base.\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'We use "enterprise" in the "What is Beyond Identity" section. This needs to be clarified for the ProductA audience.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Information is not easily discoverable.  For example, in the ___ article, we mention SCIM and link to a topic that isn\u2019t in the left nav (TOC). Therefore, it does not appear in the search results."))),(0,o.kt)("h3",{id:"under-the-hood"},"Under the hood"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There are\xa0",(0,o.kt)("strong",{parentName:"p"},"multiple folders for images"),". There should only be two core image folders:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"src/img = should store images that construct the doc site, like logos, favicon, landing page images, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"docs/images = should store images for the documentation (when we version the content, we keep the correct images with the correct version; currently, that's not how it's set up)")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The\xa0",(0,o.kt)("strong",{parentName:"p"},"sidebar.js file is being used half-heartedly"),". In the markdown, we indicate where in the sidebar it resides, yet we have it in the sidebar.js file. We also have a\xa0",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("em",{parentName:"em"},"category")),".json file under each category. You can add ALL the topics in the sidebar.js, so you don't have to worry about it in the topic metadata. Specifying the topic's location in multiple places can become a maintenance nightmare as more content gets added and shuffled around. Using the sidebar.js file, we can control the TOC structure in one place. We can also use the sidebar.js file for multiple sidebars rather than separate sidebar files.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The\xa0",(0,o.kt)("strong",{parentName:"p"},"/guides")," folder and an ",(0,o.kt)("strong",{parentName:"p"},"/images")," or ",(0,o.kt)("strong",{parentName:"p"},"/media")," folder should be under the ",(0,o.kt)("strong",{parentName:"p"},"/docs")," folder. When you version the content, this content also gets versioned. For example, v0 images are currently the same as v1 because the images are outside the /docs folder.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We're\xa0",(0,o.kt)("strong",{parentName:"p"},"not using Google Fonts"),". Instead, we have a /fonts folder, which can cause a lag in loading the page because the user must temporarily download the fonts. Using an @import url for Google Fonts will prevent or reduce the lag in loading the pages.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We DO have reusable content, but\xa0",(0,o.kt)("strong",{parentName:"p"},'we\'re not using these "include" files effectively'),". For example, we have single \"include\" files but only use some once. These don't qualify as content reuse. We also have topics that can be reused, but we're not reusing them. For example, Create a Realm is in five different topics, which are not the same."))),(0,o.kt)("h2",{id:"opportunities-and-goals"},"Opportunities and goals"),(0,o.kt)("p",null,"Because documentation for external developers is a high priority, it should differ from content on internal wikis. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In Postman's 2022 State of the API Report, they found the ",(0,o.kt)("strong",{parentName:"p"},'"lack of documentation" ranked the highest at 55%'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When asked what would improve the documentation, 57% said, ",(0,o.kt)("strong",{parentName:"p"},'"update-to-date documentation,"')," followed by ",(0,o.kt)("strong",{parentName:"p"},'"code samples" (55%)')," and ",(0,o.kt)("strong",{parentName:"p"},'"better examples" (53%)'),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Also, when asked how API knowledge is gained in Postman's 2022 State of the API Report, the most popular answer was ",(0,o.kt)("strong",{parentName:"p"},"on the job or from a co-worker (63%)"),", followed by ",(0,o.kt)("strong",{parentName:"p"},"documentation (59%)"),"."))),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"https://static1.smartbear.co/smartbearbrand/media/pdf/smartbear_state_of_api_2020.pdf"},"State of API 2020 Report"),', Smartbear found that documentation is increasingly necessary. They found "accurate and detailed documentation" ranked second highest on the factors ranked.'),(0,o.kt)("img",{src:r,id:"diagrams",alt:"Example banner"}),(0,o.kt)("h3",{id:"opportunities"},"Opportunities"),(0,o.kt)("p",null,"In today's digital age, content is king. Quality content is crucial for establishing a brand's authority and remaining competitive. Fresh, relevant, and engaging content builds long-term relationships and customer loyalty. At the same time, good documentation can lead to satisfaction, clarity, and trust in your product and brand."),(0,o.kt)("p",null,"We must plan, create, deliver, and manage our content like any other product deliverable. A content strategy aims to create a meaningful and consistent experience for the customer. Once you have the content strategy, you can create a content model. At its core, content strategy will be the essential structure that focuses entirely on the reader."),(0,o.kt)("p",null,"Therefore, we must understand our audience and what they want or need to know. The following four W's can help guide this thought process:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What information do readers want, and what format should we use?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When will readers need this content?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Where should content be placed to be most effective?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Why do readers need this content, and how does it solve their problems?"))),(0,o.kt)("p",null,"Answering these questions can help determine what information to include and what format to use. Information should be updated and adapted as users' needs change."),(0,o.kt)("p",null,"Also, understanding\xa0",(0,o.kt)("strong",{parentName:"p"},"user behavior and how users interact"),"\xa0with your end-user product documentation is critical. Specifically, how much time do they spend utilizing it? What do they click on the most? At what point in their journey do they decide to bounce? Analyzing your users' behavior will answer such questions and help you continuously refine the product documentation."),(0,o.kt)("h4",{id:"on-the-surface-1"},"On the surface"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"More visuals."),'\xa0Use visuals such as workflow and architecture diagrams to help break up the large blocks of text in the conceptual/overview topics. For example, instead of only using text in the "What is Beyond Identity" topic, simplify the text and "show" users how it works with visuals. Include images of what the sign-in, login, and recovery workflows look like without shared secrets, and demonstrate the standard flow compared to the unique one to help users understand why Beyond Identity differs from other solutions.'),(0,o.kt)("p",{parentName:"li"},"  Examples:"),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("a",{parentName:"p",href:"https://www.onelogin.com/learn/iam"},"https://www.onelogin.com/learn/iam"),"\n")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://mowe.studio/are-explainer-videos-effective/"},"Explainer videos")," and Arcades focus more on complex features"),"\xa0or configurations (policies are screaming for attention). Leave the simple stuff to screenshots."),(0,o.kt)("p",{parentName:"li"},"  Examples:",(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.ubisecure.com/explainer-videos/"},"https://www.ubisecure.com/explainer-videos/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://auth0.com/resources/videos"},"https://auth0.com/resources/videos")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.accessplanit.com/en-gb/explainer-videos/accessplanit-workflows"},"https://www.accessplanit.com/en-gb/explainer-videos/accessplanit-workflows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.paloaltonetworks.com/resources/videos/palo-alto-networks-and-okta-explainer-video"},"https://www.paloaltonetworks.com/resources/videos/palo-alto-networks-and-okta-explainer-video")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.onelogin.com/resource-center/videos/onelogin-cloudlock-integration"},"https://www.onelogin.com/resource-center/videos/onelogin-cloudlock-integration")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Consider A11y (Accessibility) more."),"\xa0We are only considering accessibility in terms of font family, font size, and colors for visual disorders like color blindness or impaired vision. However, we should also consider those with\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.a11yproject.com/posts/understanding-vestibular-disorders/"},"vestibular"),'\xa0disorders. These individuals cannot handle moving objects on a page and need control over movement triggered by interactions. Non-essential movement can trigger vestibular disorder reactions, such as disorientation, dizziness, headaches, and nausea. To address this, I recommend limiting the use of Arcades to "demos" of new or complex features or tutorial topics.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use\xa0",(0,o.kt)("strong",{parentName:"p"},"tooltips"),'\xa0for uncommon, new, or specific terms. While links to definitions may be necessary in some cases, using tooltips could be more scalable when the term is used multiple times throughout a topic. For example, the Account Setup and Applications Workflow topics repeat "realm" several times, but the links go to various topics. In this case, we could use tooltips instead.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chatbot"),", or in this case, a Bot\xa0to enhance searching and self-support.\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.chatwoot.com/docs/product/channels/live-chat/integrations/docusaurus/"},"Chatwoot integrates with Docusaurus"),"\xa0and works with the Algolia Search feature. Other chatbot platforms that would work with Docusaurus include\xa0",(0,o.kt)("a",{parentName:"p",href:"https://zaroc.netlify.app/tutorials/get-your-first-parameter/"},"Zaroc"),",\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.botstar.com/docs/en/getting-started"},"BotStar"),", and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://fredrikoseberg.github.io/react-chatbot-kit-docs/"},"React Chatbot Kit"),"\xa0(simple and bare-bones). Users can use the bot to search, and if they get stuck, they can send a Slack message or chat with a live person (if that is an option we want). In other words, the bot gives the users a call to action and will continue to learn what questions users are asking. The difference between the default Algolia Search in Docusaurus and a chatbot is as follows:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Algolia Search:\xa0",(0,o.kt)("em",{parentName:"li"},"Basic"),"\xa0search with results that show a categorized list of any document. It also shows a list of recently viewed docs from your search efforts."),(0,o.kt)("li",{parentName:"ul"},"Chatbot:\xa0",(0,o.kt)("em",{parentName:"li"},"Intelligent"),"\xa0search with results that show a list of documents based on previous searches and a call-to-action. Based on the user's response, the chat session could end or continue to ask the user what they want. If they cannot find what they are looking for, they have options, such as going to Slack, chatting with support, or suggesting a topic to be added. The basic Algolia search does not have this functionality."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To enhance the effectiveness of our doc site analysis, we should ",(0,o.kt)("strong",{parentName:"p"},"include a ratings and feedback section in the footer of every page"),", in addition to using tools like Google Analytics or Vercel Web Analytics. While analytics can provide valuable data, gathering real-time feedback helps us take prompt action, mainly if the content needs to be corrected or completed."))),(0,o.kt)("h4",{id:"under-the-hood-1"},"Under the hood"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Global variables."),"\xa0As the company and product grow, variables come in handy when there's a product name change, feature name change, or even the company name\u2014not having variables in place results in pandemonium for updating all the documentation."),(0,o.kt)("p",{parentName:"li"},"  Examples:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GitHub repo link"),(0,o.kt)("li",{parentName:"ul"},"Main website link"),(0,o.kt)("li",{parentName:"ul"},"Support link"),(0,o.kt)("li",{parentName:"ul"},"Company name"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://beyondidentity.atlassian.net/wiki/spaces/~6393f7be2acfad92d7b66c5e/pages/2480832582/Technical+content+style+guide+WIP#Consider-reusability"},"Content reuse for scalability"),"."),'\xa0Are there chunks of content that we can reuse? Content reuse allows you to update one file and have the other files that include it ("include" or content block) update automatically. Examples of content reuse include notes, warnings, error messages, product descriptions, and getting help. Another example is common tasks or steps/procedures. For instance, I found the steps for "Create a Realm" used in five topics, but not all were the same. While they delivered the same or similar information, they were just a copy and paste, making this a case for content reuse.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Robust metadata"),'\xa0information instead of topic header titles for metadata is more efficient for SEO. For example, the titles for integration guides are often longer than necessary, like "Integrate Beyond Identity Authentication into bubble.io applications." These long titles require more effort to scan and add cognitive load for the user. It\'s better to keep the title descriptive yet straightforward enough that it\'s easy to scan. In this example, the title could be "Integrate with bubble.io applications."')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Continue using Vercel to deploy the doc site"),"\xa0because they offer web analytics so we can obtain detailed insights into the site's visitors, including metrics like top pages, top referrers, and demographics such as countries, operating systems, and browser information. This information will allow us to determine how well a topic performs and keep the content relevant and interactive."),(0,o.kt)("p",{parentName:"li"},"Furthermore, Vercel allows non-GitHub users to comment on a page. However, in this case, we can only publish updates if a comment is marked as resolved. This is beneficial because it ensures all comments are addressed before publishing.\n"))),(0,o.kt)("h2",{id:"proposed-content-structure"},"Proposed content structure"),(0,o.kt)("p",null,"Bloom\u2019s Taxonomy was applied to cover several levels of cognitive domain for the content structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Knowledge ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Comprehension")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Analyze")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Synthesis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluation"))),(0,o.kt)("p",null,"There are numerous challenges that come with modeling the navigation that works for our readers with different levels of knowledge. Content modeling isn\u2019t easy, but when done right, it becomes a powerful tool for both consumer and contributor.\nGreat doc sites don\u2019t just happen overnight. Companies like Okta, Strype, and Clerk have Content Strategists, Information/Content Architects, or Content Engineers that plan and build their content into something useful for their customers. "),(0,o.kt)("h2",{id:"proposed-next-steps"},"Proposed next steps"),(0,o.kt)("ul",{className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Migrate and clean up existing content (5/31/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Identity new content and create (Ongoing) ")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Finalize new design, including landing page and content structure (5/31/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Plan for and map out redirects (5/31/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Doc site maintainer handbook (6/23/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Contributor\u2019s and style guides (6/23/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","SME review for technical accuracy and address customer experience gaps (6/29/2023)")),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Publish new design and reworked content (6/30/2023)"))))}h.isMDXComponent=!0}}]);