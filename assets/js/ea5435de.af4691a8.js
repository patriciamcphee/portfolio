"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8873],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,k=m["".concat(s,".").concat(h)]||m[h]||u[h]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76318:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"BFlix API",tags:["tech writing","api","information architecture"],description:"Written for the b-movie app that I've been developing.",date:"10/08/2022"},i=void 0,o={unversionedId:"api/api-example-bflix",id:"api/api-example-bflix",title:"BFlix API",description:"Written for the b-movie app that I've been developing.",source:"@site/docs/api/api-example-bflix.md",sourceDirName:"api",slug:"/api/api-example-bflix",permalink:"/portfolio/docs/api/api-example-bflix",draft:!1,tags:[{label:"tech writing",permalink:"/portfolio/docs/tags/tech-writing"},{label:"api",permalink:"/portfolio/docs/tags/api"},{label:"information architecture",permalink:"/portfolio/docs/tags/information-architecture"}],version:"current",frontMatter:{title:"BFlix API",tags:["tech writing","api","information architecture"],description:"Written for the b-movie app that I've been developing.",date:"10/08/2022"},sidebar:"tutorialSidebar",previous:{title:"API examples",permalink:"/portfolio/docs/api/api-overview"},next:{title:"UX Writing samples",permalink:"/portfolio/docs/ux-writing/ux-writing-samples"}},s={},p=[{value:"Get a list of all movies",id:"get-a-list-of-all-movies",level:2},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Get data about a single movie by title",id:"get-data-about-a-single-movie-by-title",level:2},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Get data about a genre by name",id:"get-data-about-a-genre-by-name",level:2},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Get data about a director by name",id:"get-data-about-a-director-by-name",level:2},{value:"Request",id:"request-3",level:4},{value:"Response",id:"response-3",level:4},{value:"User registration",id:"user-registration",level:2},{value:"Request",id:"request-4",level:4},{value:"Response",id:"response-4",level:4},{value:"Update user info",id:"update-user-info",level:2},{value:"Request",id:"request-5",level:4},{value:"Response",id:"response-5",level:4},{value:"Unregister user (delete user)",id:"unregister-user-delete-user",level:2},{value:"Request",id:"request-6",level:4},{value:"Response",id:"response-6",level:4},{value:"Add a movie to a user&#39;s &quot;favorites&quot; list",id:"add-a-movie-to-a-users-favorites-list",level:2},{value:"Request",id:"request-7",level:4},{value:"Response",id:"response-7",level:4},{value:"Remove a movie from the user&#39;s &quot;favorites&quot; list",id:"remove-a-movie-from-the-users-favorites-list",level:2},{value:"Request",id:"request-8",level:4},{value:"Response",id:"response-8",level:4}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Project:")," CareerFoundry assignment; write an API for a movie app",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Description:"),"  Written for the b-movie app I've been developing. ",(0,r.kt)("br",null),"\n",(0,r.kt)("strong",{parentName:"p"},"Doc written:")," July 8, 2022   ")),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Movie Camera",src:a(41823).Z,width:"64",height:"113"})),(0,r.kt)("p",null,"This API lets users access information about different b-movies, such as directors, actors, genre, and year of release. It also allows them to sign up to create a list of their favorite b-movies. They can also remove movies from their favorites and even unregister from the movie app if they'd like."),(0,r.kt)("h2",{id:"get-a-list-of-all-movies"},"Get a list of all movies"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/movies")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response"},"Response"),(0,r.kt)("p",null,"A JSON object holding data about all the movies."),(0,r.kt)("h2",{id:"get-data-about-a-single-movie-by-title"},"Get data about a single movie by title"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/movies/:Title")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request-1"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-1"},"Response"),(0,r.kt)("p",null,"A JSON object holding data about a single movie containing the description, genre, directory, image URL, and featured (true or false)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Genre": {\n        "Name": "Horror",\n        "Description": "The final girl, the \\"not dead yet\\" scare, and the dystopian endings. Horror is famous for having story beats that we come to expect, like jump scares. Lean into them and find ways to subvert. You have subsets like haunted houses, slashers, zombies, evil creatures, and other subgenres."\n    },\n    "Director": {\n        "Name": "Dan O\'Bannon",\n        "Bio": "Was inspired at an early age by EC Comics like Tales from the Crypt and old horror films that he saw in St. Louis. He even wrote a few stories for Heavy Metal magazine (which also appeared in the film). O\'Bannon started when he and John Carpenter collaborated on the cult sci-fi film Dark Star (1974). ",\n        "Birth": "1946-09-30",\n        "Death": "2009-12-17"\n    },\n    "_id": "62c355b6f3a3dc1a7e6952d2",\n    "Title": "Return of the Living Dead",\n    "Description": "When two bumbling employees at a medical supply warehouse accidentally release a deadly gas into the air, the vapors cause the dead to rise again as zombies.",\n    "Released": "1985",\n    "Actors": [\n        "Clu Gulager",\n        "James Karen",\n        "Don Calfa",\n        "Thom Mathews"\n    ],\n    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNmNlM2RmZTEtNGVhNS00MjU3LWI1OWUtMWI5MThlYTVjM2M5XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX140_CR0,0,140,209_AL_.jpg",\n    "Featured": true\n}\n')),(0,r.kt)("h2",{id:"get-data-about-a-genre-by-name"},"Get data about a genre by name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/movies/genre/:Name")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request-2"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-2"},"Response"),(0,r.kt)("p",null,"A JSON object that holds data about the genre of the movies in the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "Action",\n    "Description": "A clear division between good and evil. Lots of fighting and set pieces. Their pacing and structure are built around scenes like car chases, and their climaxes often have the biggest set-pieces."\n}\n')),(0,r.kt)("h2",{id:"get-data-about-a-director-by-name"},"Get data about a director by name"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/movies/directors/:Name")),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request-3"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-3"},"Response"),(0,r.kt)("p",null,"A JSON object holding data about a director."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "Chang Cheh",\n    "Bio": "He was the leading Martial Arts director in Hong Kong in the 1970s, with close to 100 films to his name. He has influenced other directors such as John Woo and Liu Chiau Liang and made famous such Hong Kong stars as Phillip Chung-Fung Kwok, Fu Sheng, and Lung Ti.",\n    "Birth": "1923-02-10",\n    "Death": "2002-06-22"\n}\n')),(0,r.kt)("h2",{id:"user-registration"},"User registration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/user")),(0,r.kt)("td",{parentName:"tr",align:null},"POST"),(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request-4"},"Request"),(0,r.kt)("p",null,"A JSON object holding the data about the new user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "bambammcgee",\n    "Password": "NUng``GQE@c]",\n    "Email": "bbmcgee@email.com"\n}\n')),(0,r.kt)("h4",{id:"response-4"},"Response"),(0,r.kt)("p",null,"A JSON object holding the new user's data with a system-generated ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "bambammcgee",\n    "Password": "NUng``GQE@c]",\n    "Email": "bbmcgee@email.com",\n    "FavoriteMovies": [],\n    "_id": "62c0764a5efee8cbbeadeee3",\n    "__v": 0\n}\n')),(0,r.kt)("h2",{id:"update-user-info"},"Update user info"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/users/:Username")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"Body"),(0,r.kt)("td",{parentName:"tr",align:null},"Body")))),(0,r.kt)("h4",{id:"request-5"},"Request"),(0,r.kt)("p",null,"A JSON object that holds the updated information about the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "patriciamcphee",\n    "Password": "jFB6DGX7nhXfpxon"\n}\n')),(0,r.kt)("h4",{id:"response-5"},"Response"),(0,r.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62af73cd90779f9b519bda60",\n    "Username": "patriciamcphee",\n    "Password": "jFB6DGX7nhXfpxon",\n     "Email": "somethingrandom@email.com",\n      "FavoriteMovies": [\n          "62c319b0b16106ca5a07b823"\n      ],\n      "__v": 0\n}\n')),(0,r.kt)("h2",{id:"unregister-user-delete-user"},"Unregister user (delete user)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/users/:Username")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")))),(0,r.kt)("h4",{id:"request-6"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-6"},"Response"),(0,r.kt)("p",null,"A text confirmation message indicating the user has been removed from the movie app. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bambammcgee has been removed from the movie app.\n")),(0,r.kt)("h2",{id:"add-a-movie-to-a-users-favorites-list"},'Add a movie to a user\'s "favorites" list'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/users/:Username/movies/:MovieID")),(0,r.kt)("td",{parentName:"tr",align:null},"PUT"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")))),(0,r.kt)("h4",{id:"request-7"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-7"},"Response"),(0,r.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62c346d4b258c5e174f0c93a",\n    "Username": "patriciamcphee",\n    "Password": "3)MFK+HZh%K-",\n    "Email": "somethingrandom@email.com",\n    "FavoriteMovies": [\n        "62c31dfbb16106ca5a07b826"\n    ],\n    "__v": 0\n}\n')),(0,r.kt)("h2",{id:"remove-a-movie-from-the-users-favorites-list"},'Remove a movie from the user\'s "favorites" list'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Request"),(0,r.kt)("th",{parentName:"tr",align:null},"Response"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/users/:Username/movies/:MovieID")),(0,r.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"Text")))),(0,r.kt)("h4",{id:"request-8"},"Request"),(0,r.kt)("p",null,"None"),(0,r.kt)("h4",{id:"response-8"},"Response"),(0,r.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62c346d4b258c5e174f0c93a",\n    "Username": "patriciamcphee",\n    "Password": "3)MFK+HZh%K-",\n    "Email": "somethingrandom@email.com",\n    "FavoriteMovies": [],\n    "__v": 0\n}\n')))}u.isMDXComponent=!0},41823:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);