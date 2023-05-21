"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[7550],{88033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>y,default:()=>b,frontMatter:()=>k,metadata:()=>g,toc:()=>x});var n=a(87462),r=(a(67294),a(3905)),l=a(78462),s=a(88994),o=a(79953),i=a(18987),d=a(69661),u=a(28333),p=a(53147),m=a(91379),c=a(21519),h=a(53156);const k={title:"GetAsyncResults",description:"Written for cloud storage or data center admins to retrieve the result of asynchronous method calls.",last_update:{date:"11/18/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},y=void 0,g={unversionedId:"api/get-async-results",id:"api/get-async-results",title:"GetAsyncResults",description:"Written for cloud storage or data center admins to retrieve the result of asynchronous method calls.",source:"@site/docs/api/get-async-results.mdx",sourceDirName:"api",slug:"/api/get-async-results",permalink:"/portfolio/api/get-async-results",draft:!1,editUrl:"https://github.com/patriciamcphee/portfolio/edit/main/docs/api/get-async-results.mdx",tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1668758400,formattedLastUpdatedAt:"Nov 18, 2022",frontMatter:{title:"GetAsyncResults",description:"Written for cloud storage or data center admins to retrieve the result of asynchronous method calls.",last_update:{date:"11/18/2022",author:"Patricia McPhee"},pagination_next:null,pagination_prev:null},sidebar:"mySidebar"},N={},x=[{value:"Parameters",id:"parameters",level:2},{value:"Return value",id:"return-value",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2}],f={toc:x},v="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(v,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(h.Z,{mdxType:"Container"},(0,r.kt)(l.Z,{sx:{width:"100%",bgcolor:"background.paper",color:"#000000",borderRadius:4},mdxType:"List"},(0,r.kt)(s.ZP,{sx:{py:0},mdxType:"ListItem"},(0,r.kt)(i.Z,{mdxType:"ListItemAvatar"},(0,r.kt)(d.Z,{mdxType:"Avatar"},(0,r.kt)(u.Z,{mdxType:"WorkIcon"}))),(0,r.kt)(o.Z,{primary:"Project",secondary:"Work-related",mdxType:"ListItemText"})),(0,r.kt)(s.ZP,{sx:{py:0},mdxType:"ListItem"},(0,r.kt)(i.Z,{mdxType:"ListItemAvatar"},(0,r.kt)(d.Z,{mdxType:"Avatar"},(0,r.kt)(m.Z,{mdxType:"DescriptionIcon"}))),(0,r.kt)(o.Z,{primary:"Description",secondary:" Written for cloud storage or data center admins to retrieve the result of asynchronous method calls.",mdxType:"ListItemText"})),(0,r.kt)(s.ZP,{sx:{py:0},mdxType:"ListItem"},(0,r.kt)(i.Z,{mdxType:"ListItemAvatar"},(0,r.kt)(d.Z,{mdxType:"Avatar"},(0,r.kt)(p.Z,{mdxType:"CalendarMonthIcon"}))),(0,r.kt)(o.Z,{primary:"Date",secondary:"June 18, 2014",mdxType:"ListItemText"})))),(0,r.kt)("br",null),(0,r.kt)(c.Z,{mdxType:"Divider"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Polling with GetAsyncResult retrieves the result of asynchronous method calls. Some method calls are long-running and can only be retrieved once. Any attempts after the final results return an error."),(0,r.kt)("p",null,"GetAsyncResult returns the overall status of the operation in a standard fashion: in progress, completed, or error. The data returned depends on the original method call and is documented with each method."),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"asyncHandle")),(0,r.kt)("td",{parentName:"tr",align:null},"A value returned from the original asynchronous method call."),(0,r.kt)("td",{parentName:"tr",align:null},"AsyncResultID"),(0,r.kt)("td",{parentName:"tr",align:null},"Required")))),(0,r.kt)("h2",{id:"return-value"},"Return value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"status")),(0,r.kt)("td",{parentName:"tr",align:null},"Status of the asynchronous method call. ",(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,(0,r.kt)("code",null,"running")),": The method is still running."),(0,r.kt)("li",null,(0,r.kt)("b",null,(0,r.kt)("code",null,"complete")),": The method is complete, and the result or error is available."))),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"result")),(0,r.kt)("td",{parentName:"tr",align:null},"If the status is complete and the asynchronous method is successful, this member includes the result of the asynchronous operation. If the asynchronous operation fails, this member is not present."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"error")),(0,r.kt)("td",{parentName:"tr",align:null},"If the status is complete and the asynchronous method failed, this member includes the error details. If the asynchronous operation succeeds, this member is not present."),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("admonition",{title:"Note",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The return value of GetAsyncResult is essentially a nested version of the standard JSON response with an additional status field.")),(0,r.kt)("h2",{id:"example-1"},"Example 1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n   "error": {\n      "code": 500,\n      "message": "xVolumeIDDoesNotExist",\n      "name": "xVolumeIDDoesNotExist"\n   },\n   "id": 1\n}\n')),(0,r.kt)("p",null,'If "response" were the JSON response object from the GetAsyncResult call, then "response.error" would correspond to an error with the GetAsyncResult method.'),(0,r.kt)("h2",{id:"example-2"},"Example 2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n"result"\n   "error": {\n      "code": 500,\n      "message": "DBClient operation requested on a non-existent path at [/asyncresults/1]",\n      "name": "xDBNoSuchPath"\n   },\n   "id": 1\n}\n')),(0,r.kt)("p",null,'The "response.result.error" would correspond to an error result from the original method call.'),(0,r.kt)("h2",{id:"example-3"},"Example 3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JSON"},'{\n   "id": 1,\n   "result": {\n      "result": {\n         "message": "Snapshot complete."\n      },\n      "status": "complete"\n   }\n}\n')),(0,r.kt)("p",null,'If completed successfully, the "response.result.result" is the return value for the original method call.'))}b.isMDXComponent=!0}}]);