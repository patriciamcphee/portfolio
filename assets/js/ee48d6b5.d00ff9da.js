"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[285],{34507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>N,default:()=>y,frontMatter:()=>g,metadata:()=>c,toc:()=>b});var n=a(87462),l=(a(67294),a(3905)),r=a(78462),i=a(97212),o=a(79953),s=a(18987),d=a(69661),p=a(28333),m=a(53147),u=a(91379),k=a(21519),h=a(53156);const g={title:"BFlix API",description:"Written for the b-movie app that I've been developing.",last_update:{date:"10/08/2022",author:"Patricia McPhee"}},N=void 0,c={unversionedId:"api/api-example-bflix",id:"api/api-example-bflix",title:"BFlix API",description:"Written for the b-movie app that I've been developing.",source:"@site/docs/api/api-example-bflix.mdx",sourceDirName:"api",slug:"/api/api-example-bflix",permalink:"/portfolio/docs/docs/api/api-example-bflix",draft:!1,tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1665212400,formattedLastUpdatedAt:"Oct 8, 2022",frontMatter:{title:"BFlix API",description:"Written for the b-movie app that I've been developing.",last_update:{date:"10/08/2022",author:"Patricia McPhee"}},sidebar:"tutorialSidebar",previous:{title:"API examples",permalink:"/portfolio/docs/docs/api/api-overview"},next:{title:"Mobile SDK",permalink:"/portfolio/docs/docs/how-tos/mobile-sdk"}},v={},b=[{value:"Get a list of all movies",id:"get-a-list-of-all-movies",level:2},{value:"Request",id:"request",level:4},{value:"Response",id:"response",level:4},{value:"Get data about a single movie by title",id:"get-data-about-a-single-movie-by-title",level:2},{value:"Request",id:"request-1",level:4},{value:"Response",id:"response-1",level:4},{value:"Get data about a genre by name",id:"get-data-about-a-genre-by-name",level:2},{value:"Request",id:"request-2",level:4},{value:"Response",id:"response-2",level:4},{value:"Get data about a director by name",id:"get-data-about-a-director-by-name",level:2},{value:"Request",id:"request-3",level:4},{value:"Response",id:"response-3",level:4},{value:"User registration",id:"user-registration",level:2},{value:"Request",id:"request-4",level:4},{value:"Response",id:"response-4",level:4},{value:"Update user info",id:"update-user-info",level:2},{value:"Request",id:"request-5",level:4},{value:"Response",id:"response-5",level:4},{value:"Unregister user (delete user)",id:"unregister-user-delete-user",level:2},{value:"Request",id:"request-6",level:4},{value:"Response",id:"response-6",level:4},{value:"Add a movie to a user&#39;s &quot;favorites&quot; list",id:"add-a-movie-to-a-users-favorites-list",level:2},{value:"Request",id:"request-7",level:4},{value:"Response",id:"response-7",level:4},{value:"Remove a movie from the user&#39;s &quot;favorites&quot; list",id:"remove-a-movie-from-the-users-favorites-list",level:2},{value:"Request",id:"request-8",level:4},{value:"Response",id:"response-8",level:4}],f={toc:b};function y(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(h.Z,{mdxType:"Container"},(0,l.kt)(r.Z,{sx:{width:"100%",bgcolor:"background.paper",color:"#000000",borderRadius:4},mdxType:"List"},(0,l.kt)(i.ZP,{sx:{py:0},mdxType:"ListItem"},(0,l.kt)(s.Z,{mdxType:"ListItemAvatar"},(0,l.kt)(d.Z,{mdxType:"Avatar"},(0,l.kt)(p.Z,{mdxType:"WorkIcon"}))),(0,l.kt)(o.Z,{primary:"Project",secondary:"CareerFoundry assignment; write an API for a movie app",mdxType:"ListItemText"})),(0,l.kt)(i.ZP,{sx:{py:0},mdxType:"ListItem"},(0,l.kt)(s.Z,{mdxType:"ListItemAvatar"},(0,l.kt)(d.Z,{mdxType:"Avatar"},(0,l.kt)(u.Z,{mdxType:"DescriptionIcon"}))),(0,l.kt)(o.Z,{primary:"Description",secondary:"Written for the b-movie app I've been developing.",mdxType:"ListItemText"})),(0,l.kt)(i.ZP,{sx:{py:0},mdxType:"ListItem"},(0,l.kt)(s.Z,{mdxType:"ListItemAvatar"},(0,l.kt)(d.Z,{mdxType:"Avatar"},(0,l.kt)(m.Z,{mdxType:"CalendarMonthIcon"}))),(0,l.kt)(o.Z,{primary:"Date",secondary:"July 8, 2022",mdxType:"ListItemText"})))),(0,l.kt)("br",null),(0,l.kt)(k.Z,{mdxType:"Divider"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"This API lets users access information about different b-movies, such as directors, actors, genre, and year of release. It also allows them to sign up to create a list of their favorite b-movies. They can also remove movies from their favorites and even unregister from the movie app if they'd like."),(0,l.kt)("h2",{id:"get-a-list-of-all-movies"},"Get a list of all movies"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/movies")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response"},"Response"),(0,l.kt)("p",null,"A JSON object holding data about all the movies."),(0,l.kt)("h2",{id:"get-data-about-a-single-movie-by-title"},"Get data about a single movie by title"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/movies/:Title")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request-1"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-1"},"Response"),(0,l.kt)("p",null,"A JSON object holding data about a single movie containing the description, genre, directory, image URL, and featured (true or false)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Genre": {\n        "Name": "Horror",\n        "Description": "The final girl, the \\"not dead yet\\" scare, and the dystopian endings. Horror is famous for having story beats that we come to expect, like jump scares. Lean into them and find ways to subvert. You have subsets like haunted houses, slashers, zombies, evil creatures, and other subgenres."\n    },\n    "Director": {\n        "Name": "Dan O\'Bannon",\n        "Bio": "Was inspired at an early age by EC Comics like Tales from the Crypt and old horror films that he saw in St. Louis. He even wrote a few stories for Heavy Metal magazine (which also appeared in the film). O\'Bannon started when he and John Carpenter collaborated on the cult sci-fi film Dark Star (1974). ",\n        "Birth": "1946-09-30",\n        "Death": "2009-12-17"\n    },\n    "_id": "62c355b6f3a3dc1a7e6952d2",\n    "Title": "Return of the Living Dead",\n    "Description": "When two bumbling employees at a medical supply warehouse accidentally release a deadly gas into the air, the vapors cause the dead to rise again as zombies.",\n    "Released": "1985",\n    "Actors": [\n        "Clu Gulager",\n        "James Karen",\n        "Don Calfa",\n        "Thom Mathews"\n    ],\n    "ImagePath": "https://m.media-amazon.com/images/M/MV5BNmNlM2RmZTEtNGVhNS00MjU3LWI1OWUtMWI5MThlYTVjM2M5XkEyXkFqcGdeQXVyMTUzMDUzNTI3._V1_UX140_CR0,0,140,209_AL_.jpg",\n    "Featured": true\n}\n')),(0,l.kt)("h2",{id:"get-data-about-a-genre-by-name"},"Get data about a genre by name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/movies/genre/:Name")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request-2"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-2"},"Response"),(0,l.kt)("p",null,"A JSON object that holds data about the genre of the movies in the database."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "Action",\n    "Description": "A clear division between good and evil. Lots of fighting and set pieces. Their pacing and structure are built around scenes like car chases, and their climaxes often have the biggest set-pieces."\n}\n')),(0,l.kt)("h2",{id:"get-data-about-a-director-by-name"},"Get data about a director by name"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/movies/directors/:Name")),(0,l.kt)("td",{parentName:"tr",align:null},"GET"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request-3"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-3"},"Response"),(0,l.kt)("p",null,"A JSON object holding data about a director."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Name": "Chang Cheh",\n    "Bio": "He was the leading Martial Arts director in Hong Kong in the 1970s, with close to 100 films to his name. He has influenced other directors such as John Woo and Liu Chiau Liang and made famous such Hong Kong stars as Phillip Chung-Fung Kwok, Fu Sheng, and Lung Ti.",\n    "Birth": "1923-02-10",\n    "Death": "2002-06-22"\n}\n')),(0,l.kt)("h2",{id:"user-registration"},"User registration"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/user")),(0,l.kt)("td",{parentName:"tr",align:null},"POST"),(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request-4"},"Request"),(0,l.kt)("p",null,"A JSON object holding the data about the new user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "bambammcgee",\n    "Password": "NUng``GQE@c]",\n    "Email": "bbmcgee@email.com"\n}\n')),(0,l.kt)("h4",{id:"response-4"},"Response"),(0,l.kt)("p",null,"A JSON object holding the new user's data with a system-generated ID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "bambammcgee",\n    "Password": "NUng``GQE@c]",\n    "Email": "bbmcgee@email.com",\n    "FavoriteMovies": [],\n    "_id": "62c0764a5efee8cbbeadeee3",\n    "__v": 0\n}\n')),(0,l.kt)("h2",{id:"update-user-info"},"Update user info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/users/:Username")),(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"Body"),(0,l.kt)("td",{parentName:"tr",align:null},"Body")))),(0,l.kt)("h4",{id:"request-5"},"Request"),(0,l.kt)("p",null,"A JSON object that holds the updated information about the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Username": "patriciamcphee",\n    "Password": "jFB6DGX7nhXfpxon"\n}\n')),(0,l.kt)("h4",{id:"response-5"},"Response"),(0,l.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62af73cd90779f9b519bda60",\n    "Username": "patriciamcphee",\n    "Password": "jFB6DGX7nhXfpxon",\n     "Email": "somethingrandom@email.com",\n      "FavoriteMovies": [\n          "62c319b0b16106ca5a07b823"\n      ],\n      "__v": 0\n}\n')),(0,l.kt)("h2",{id:"unregister-user-delete-user"},"Unregister user (delete user)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/users/:Username")),(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Text")))),(0,l.kt)("h4",{id:"request-6"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-6"},"Response"),(0,l.kt)("p",null,"A text confirmation message indicating the user has been removed from the movie app. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"bambammcgee has been removed from the movie app.\n")),(0,l.kt)("h2",{id:"add-a-movie-to-a-users-favorites-list"},'Add a movie to a user\'s "favorites" list'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/users/:Username/movies/:MovieID")),(0,l.kt)("td",{parentName:"tr",align:null},"PUT"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Text")))),(0,l.kt)("h4",{id:"request-7"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-7"},"Response"),(0,l.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62c346d4b258c5e174f0c93a",\n    "Username": "patriciamcphee",\n    "Password": "3)MFK+HZh%K-",\n    "Email": "somethingrandom@email.com",\n    "FavoriteMovies": [\n        "62c31dfbb16106ca5a07b826"\n    ],\n    "__v": 0\n}\n')),(0,l.kt)("h2",{id:"remove-a-movie-from-the-users-favorites-list"},'Remove a movie from the user\'s "favorites" list'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Endpoint"),(0,l.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Request"),(0,l.kt)("th",{parentName:"tr",align:null},"Response"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/users/:Username/movies/:MovieID")),(0,l.kt)("td",{parentName:"tr",align:null},"DELETE"),(0,l.kt)("td",{parentName:"tr",align:null},"None"),(0,l.kt)("td",{parentName:"tr",align:null},"Text")))),(0,l.kt)("h4",{id:"request-8"},"Request"),(0,l.kt)("p",null,"None"),(0,l.kt)("h4",{id:"response-8"},"Response"),(0,l.kt)("p",null,"A JSON object that holds the updated data for the user."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "_id": "62c346d4b258c5e174f0c93a",\n    "Username": "patriciamcphee",\n    "Password": "3)MFK+HZh%K-",\n    "Email": "somethingrandom@email.com",\n    "FavoriteMovies": [],\n    "__v": 0\n}\n')))}y.isMDXComponent=!0}}]);