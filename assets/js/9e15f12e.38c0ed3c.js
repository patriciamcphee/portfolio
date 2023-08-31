"use strict";(self.webpackChunkclean_deploy=self.webpackChunkclean_deploy||[]).push([[496],{33198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>h,metadata:()=>N,toc:()=>y});var o=a(87462),n=(a(67294),a(3905)),i=a(78462),r=a(70891),s=a(79953),l=a(18987),p=a(69661),m=a(28333),k=a(53147),u=a(91379),c=a(46483),d=a(53156);const h={title:"XenApp - Slow logon issues",last_update:{date:"09/26/2022",author:"Patricia McPhee"},description:"Slow logon issues with XenDesktop 7.8, XenDesktop 7.7, XenDesk 7.6 FP3, and XenApp.",pagination_next:null,pagination_prev:null},g=void 0,N={unversionedId:"kb-articles/slow-logon-issue",id:"kb-articles/slow-logon-issue",title:"XenApp - Slow logon issues",description:"Slow logon issues with XenDesktop 7.8, XenDesktop 7.7, XenDesk 7.6 FP3, and XenApp.",source:"@site/docs/kb-articles/slow-logon-issue.mdx",sourceDirName:"kb-articles",slug:"/kb-articles/slow-logon-issue",permalink:"/kb-articles/slow-logon-issue",draft:!1,tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1664175600,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"XenApp - Slow logon issues",last_update:{date:"09/26/2022",author:"Patricia McPhee"},description:"Slow logon issues with XenDesktop 7.8, XenDesktop 7.7, XenDesk 7.6 FP3, and XenApp.",pagination_next:null,pagination_prev:null},sidebar:"mySidebar"},f={},y=[{value:"Profile issues",id:"profile-issues",level:2},{value:"Logon script issues",id:"logon-script-issues",level:2},{value:"Network issues",id:"network-issues",level:2},{value:"Permissions issues",id:"permissions-issues",level:2},{value:"General troubleshooting steps",id:"general-troubleshooting-steps",level:2}],b={toc:y},v="wrapper";function w(e){let{components:t,...a}=e;return(0,n.kt)(v,(0,o.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d.Z,{mdxType:"Container"},(0,n.kt)(i.Z,{sx:{width:"100%",bgcolor:"background.paper",color:"#000000",borderRadius:4},mdxType:"List"},(0,n.kt)(r.ZP,{sx:{py:0},mdxType:"ListItem"},(0,n.kt)(l.Z,{mdxType:"ListItemAvatar"},(0,n.kt)(p.Z,{mdxType:"Avatar"},(0,n.kt)(m.Z,{mdxType:"WorkIcon"}))),(0,n.kt)(s.Z,{primary:"Project",secondary:"UX and KB writing challenge",mdxType:"ListItemText"})),(0,n.kt)(r.ZP,{sx:{py:0},mdxType:"ListItem"},(0,n.kt)(l.Z,{mdxType:"ListItemAvatar"},(0,n.kt)(p.Z,{mdxType:"Avatar"},(0,n.kt)(u.Z,{mdxType:"DescriptionIcon"}))),(0,n.kt)(s.Z,{primary:"Description",secondary:"I like to keep up with the writing trends. I also like to challenge myself by rewriting and reformatting KB articles. To see the difference, see the original KB article. ",mdxType:"ListItemText"})),(0,n.kt)(r.ZP,{sx:{py:0},mdxType:"ListItem"},(0,n.kt)(l.Z,{mdxType:"ListItemAvatar"},(0,n.kt)(p.Z,{mdxType:"Avatar"},(0,n.kt)(k.Z,{mdxType:"CalendarMonthIcon"}))),(0,n.kt)(s.Z,{primary:"Date",secondary:"January 10, 2020",mdxType:"ListItemText"})))),(0,n.kt)("br",null),(0,n.kt)("hr",null),(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"Typography"},(0,n.kt)("a",{href:"https://support.citrix.com/article/CTX101705"},"Original KB article")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Article #"),(0,n.kt)("th",{parentName:"tr",align:null},"Product(s)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CTX101705"),(0,n.kt)("td",{parentName:"tr",align:null},"- XenDesktop 7.8",(0,n.kt)("br",null),"- XenDesktop 7.7",(0,n.kt)("br",null),"- XenDesktop 7.6 FP3",(0,n.kt)("br",null),"-XenApp")))),(0,n.kt)("admonition",{type:"important"},(0,n.kt)("p",{parentName:"admonition"},"Make sure to log into the same server using Microsoft's RDP client instead of the Citrix Receiver. Doing this lets you determine whether the issue is a profile, logon script, network, or other user environment issue.")),(0,n.kt)("h2",{id:"profile-issues"},"Profile issues"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For existing users"),", remove any references to a profile path from the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Remote Desktop User ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Profile path within Active Directory (AD) users and computers, if applicable")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Computer Management"))),(0,n.kt)("admonition",{parentName:"li",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Create a local account directly on the Remote Desktop Server to ensure that the profile loads directly from the server. Retest the logon."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"For new user accounts"),", accounts without a local profile and anonymous accounts need to generate a local profile upon login. The creation of the original profile might take time. Check if a Microsoft Policy is in place that deletes the local copy of the user profile upon logout. If there is one, this means that the next time the user logs in, the local profile gets generated again, slowing down the logon of this user.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Is Citrix User Profile Management (UPM) used to manage user profiles?")," If so, disable the service on one server and then retest. If the issue improves, look over your Citrix UPM policies because there might be a configuration causing the problem. To enable UPM logging, see CTX126723 - How to Enable and Retrieve Profile Management Log Files. "))),(0,n.kt)("h2",{id:"logon-script-issues"},"Logon script issues"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove any references to a logon script within:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Active Directory users and computers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Computer Management")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Any computer or group policy")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a local account directly on the Remote Desktop Server to ensure that the profile loads directly from the server. Retest the logon."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To help troubleshoot the resources in the script, comment out (REM) or input pause statements throughout each section of the logon script.")),(0,n.kt)("h2",{id:"network-issues"},"Network issues"),(0,n.kt)("p",null,"The root cause that indicates a network issue:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The Remote Desktop Server searches for fonts by name and does not find them.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A user encounters a black screen for 1 to 20 minutes before the logon completes. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"An application searches for fonts (usually created by older apps). Occasional occurrence."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps for troubleshooting"),(0,n.kt)("br",null)),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the system ",(0,n.kt)("em",{parentName:"p"},"Control Panel"),", click the ",(0,n.kt)("strong",{parentName:"p"},"Environment")," tab.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("em",{parentName:"p"},"System Variables")," section, click ",(0,n.kt)("strong",{parentName:"p"},"Path"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"At the bottom, in the ",(0,n.kt)("em",{parentName:"p"},"Value")," field, add the following to the end of the string:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},";%SystemRoot%\\Fonts\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Set"),"."))),(0,n.kt)("h2",{id:"permissions-issues"},"Permissions issues"),(0,n.kt)("p",null,"For the Citrix Receiver to function correctly, the user requires ",(0,n.kt)("strong",{parentName:"p"},"Full")," permission on the following registry key:"),(0,n.kt)("p",null,"   HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\MSLicensing"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Local workstation admins and power users are not affected by this issue.")),(0,n.kt)("h2",{id:"general-troubleshooting-steps"},"General troubleshooting steps"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Is an antivirus product running on the client device? If so, disable it and retest the connection to the XenApp server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Is there a hung process? If so, terminate the process to see if this speeds up the logon process. "),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If it's a third-party process, contact the vendor for assistance."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Is Session Reliability enabled? If so, disable it and see CTX104147 - Explaining ICA Session Reliability, Common Gateway Protocol, on TCP Port 2598 for more details. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Is this for published applications? If so, then do the following:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Investigate with the Delivery Services Console or Citrix AppCenter. "),(0,n.kt)("li",{parentName:"ol"},"Navigate to ",(0,n.kt)("em",{parentName:"li"},"Properties")," on the ",(0,n.kt)("strong",{parentName:"li"},"Application",">","Printing")," section."),(0,n.kt)("li",{parentName:"ol"},"Ensure that ",(0,n.kt)("strong",{parentName:"li"},"Start this application without waiting for printers to be created")," has been set as the default.")))))}w.isMDXComponent=!0}}]);