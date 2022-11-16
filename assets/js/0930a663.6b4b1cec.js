"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8897],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(a),c=o,d=h["".concat(s,".").concat(c)]||h[c]||u[c]||r;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},89753:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={title:"Mobile SDK - Photo and file sharing",last_update:{date:"09/26/2022",author:"Patricia McPhee"},description:"API guide for photo and file sharing in a mobile app."},i=void 0,l={unversionedId:"how-tos/mobile-sdk",id:"how-tos/mobile-sdk",title:"Mobile SDK - Photo and file sharing",description:"API guide for photo and file sharing in a mobile app.",source:"@site/docs/how-tos/mobile-sdk.md",sourceDirName:"how-tos",slug:"/how-tos/mobile-sdk",permalink:"/portfolio/docs/how-tos/mobile-sdk",draft:!1,tags:[],version:"current",lastUpdatedBy:"Patricia McPhee",lastUpdatedAt:1664175600,formattedLastUpdatedAt:"Sep 26, 2022",frontMatter:{title:"Mobile SDK - Photo and file sharing",last_update:{date:"09/26/2022",author:"Patricia McPhee"},description:"API guide for photo and file sharing in a mobile app."},sidebar:"tutorialSidebar",previous:{title:"Get Started sample",permalink:"/portfolio/docs/how-tos/get-started/"},next:{title:"KB article samples",permalink:"/portfolio/docs/kb-articles/kb-article-samples"}},s={},p=[{value:"Supported formats",id:"supported-formats",level:2},{value:"Photo and file sizes",id:"photo-and-file-sizes",level:2},{value:"Notes and limitations",id:"notes-and-limitations",level:2},{value:"How photo sharing works - Android",id:"how-photo-sharing-works---android",level:2},{value:"Step 1. Enable or disable photo sharing",id:"step-1-enable-or-disable-photo-sharing",level:3},{value:"Step 2. Change the settings",id:"step-2-change-the-settings",level:3},{value:"How photo sharing works - iOS",id:"how-photo-sharing-works---ios",level:2},{value:"Step 1. Set the requirements for Custom View Controller Mode",id:"step-1-set-the-requirements-for-custom-view-controller-mode",level:3},{value:"Step 2. Add app privacy settings",id:"step-2-add-app-privacy-settings",level:3},{value:"Step 3. Enable or disable photo and file sharing",id:"step-3-enable-or-disable-photo-and-file-sharing",level:3},{value:"Step 4. Change the settings",id:"step-4-change-the-settings",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Mobile SDK v3.9 introduces a feature for agents to share photos or files with the consumers within the app. Agents can share a reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments about a product. Agents can also share files to provide consumers with information such as mortgage documents, product catalogs, or transaction details as requested by consumers. Agents can even share photos or files in a resolved conversation to resume the conversation with the consumer."),(0,o.kt)("p",null,"When the agent shares any supported file type, if the consumer isn't within the conversation view, they get a notification from the customer app only if the push notification is enabled. Otherwise, a thumbnail for the photo or file appears in the conversation window when the consumer returns."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Files:")," the consumer can tap on it to view it full screen, share it through the default app on the device, or save it to a location."),(0,o.kt)("p",{parentName:"li"}," The Android SDK supports opening any file type other than images through the picker application. The consumer can long-click on the thumbnail or open the file through the picker application to share and save."),(0,o.kt)("p",{parentName:"li"}," The iOS SDK supports opening all the supported file types on the device as per the iOS operating system.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Photos:")," the consumer can tap on the photo to view it full screen or share it through the default app on their device. Consumers cannot download images; they can only preview or share images."))),(0,o.kt)("h2",{id:"supported-formats"},"Supported formats"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PNG"),(0,o.kt)("li",{parentName:"ul"},"JPG/JPEG"),(0,o.kt)("li",{parentName:"ul"},"GIF (non-animated) - previewed as a static image only"),(0,o.kt)("li",{parentName:"ul"},"PDF"),(0,o.kt)("li",{parentName:"ul"},"DOCX"),(0,o.kt)("li",{parentName:"ul"},"PPTX"),(0,o.kt)("li",{parentName:"ul"},"XLSX")),(0,o.kt)("h2",{id:"photo-and-file-sizes"},"Photo and file sizes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Thumbnail - 30 KB (base64-encoded)"),(0,o.kt)("li",{parentName:"ul"},"Max upload size allowed - 5 MB uncompressed")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For SDKs previous to 3.8.")," The max upload size allowed is 3 MB."),(0,o.kt)("h2",{id:"notes-and-limitations"},"Notes and limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Photo sharing is two-way (agent-to-consumer and consumer-to-agent). Still, file sharing is one way only (agent to consumer)."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For SDKs previous to 3.8:")," Photo-sharing is one-way only (from consumer to agent, but not vice versa) and available only for the Mobile Message SDK.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If an attempt to view a photo is unsuccessful, an error icon covers the thumbnail.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If an attempt to download a file is unsuccessful, an error icon covers the thumbnail. Upon retrying, the file attempts to download again. Retry can be tried as often as possible (in case of a poor network) until the file downloads successfully.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The consumer can return to a resolved conversation to view the photos as long as the images are part of the conversation history.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If an agent sends an unsupported file, a message indicates the file type is not supported, and the agent should retry sending a supported file format. On the consumer side, they see an empty message with no content.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For authenticated users, backgrounding the app while loading the photo does not get interrupted.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Consumers must tap the photo again with each visit for unauthenticated sessions because the history gets cleared when a session expires or logs the consumer out."))),(0,o.kt)("h2",{id:"how-photo-sharing-works---android"},"How photo sharing works - Android"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For Android SDK 3.0 on an Oreo Device (8.0 ","&"," 8.1).")," Add support for Notification Channel."),(0,o.kt)("h3",{id:"step-1-enable-or-disable-photo-sharing"},"Step 1. Enable or disable photo sharing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the boolean value:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<bool name="enable_photo_sharing">\n')),(0,o.kt)("p",{parentName:"li"},"By default, this value is ",(0,o.kt)("strong",{parentName:"p"},"false"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contact your Account Team to enable the feature on your account."))),(0,o.kt)("h3",{id:"step-2-change-the-settings"},"Step 2. Change the settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the max number of photos or files to save on disk:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="max_number_stored_images">\n<integer name="max_number_stored_documents">\n')),(0,o.kt)("p",{parentName:"li"},"The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the max image size:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="max_image_size_kb">\n')),(0,o.kt)("p",{parentName:"li"},"The default max image is 3000kb.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the color of the attachment menu:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<color name="attachment_menu_item_background_color">\n<color name="lp_attachment_menu_background_color">\n<color name="lp_attachment_menu_item_text_color">\n<color name="lp_attachment_menu_item_icon_color">\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the text of buttons:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<string name="lp_accessibility_gallery">\n<string name="lp_accessibility_camera">\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the max number of stored images allowed locally."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="max_number_stored_images">\n')),(0,o.kt)("p",{parentName:"li"},"The default max number is 20.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define the resize dimensions:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="thumbnail_longer_dimension_resize">\n')),(0,o.kt)("p",{parentName:"li"},"The default thumbnail dimension is 100."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="full_image_longer_dimension_resize">\n')),(0,o.kt)("p",{parentName:"li"},"The default full image dimension is 800.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the compression rate (percentage) for full images:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'<integer name="full_image_compression_rate">\n')),(0,o.kt)("p",{parentName:"li"},"The default compression rate is 50."),(0,o.kt)("p",{parentName:"li"},"More advanced configurations, like image size, and compression rate, can be found under Photo Sharing in the Configuring the SDK section."))),(0,o.kt)("h2",{id:"how-photo-sharing-works---ios"},"How photo sharing works - iOS"),(0,o.kt)("h3",{id:"step-1-set-the-requirements-for-custom-view-controller-mode"},"Step 1. Set the requirements for Custom View Controller Mode"),(0,o.kt)("p",null,"When using Custom View Controller Mode, you must remove the Conversation view when leaving the app. To avoid dismissing the View when presenting CSAT/SecureForms/PhotoSharing View, you should only ignore the Conversation view if Moving From ParentView:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"\nif (self.conversationQuery != nil && self.isMovingToParentViewController){\n\n  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)\n\n}\n")),(0,o.kt)("p",null,"When using ViewController Mode, on the Navigation Bar Back Button, you can call ",(0,o.kt)("strong",{parentName:"p"},"LPMessagingSDK.instance.removeConversation(self.conversationQuery!)"),"."),(0,o.kt)("h3",{id:"step-2-add-app-privacy-settings"},"Step 2. Add app privacy settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the photo library privacy settings:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Key:")," NSPhotoLibraryUsageDescription"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Value:"),' "Photo Library Privacy Setting for Mobile App Messaging SDK for iOS"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the camera privacy settings:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Key:")," NSCameraUsageDescription")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Value:"),' "Camera Privacy Setting for Mobile App Messaging SDK for iOS"'),(0,o.kt)("p",{parentName:"li"},"Values for these descriptions are up to the brand to define; these are only examples.")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the file-sharing privacy settings:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"UIFileSharingEnabled: The application supports iTunes file sharing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Privacy - Photo Library Usage Description")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Privacy - Photo Library Additions Usage Description"),(0,o.kt)("p",{parentName:"li"},'iOS supports the preview of file types per iOS operating system and requires some configurations to be enabled ("YES") within the Host App\'s plist file. Enabling supports file sharing and the export and saving of photos.')))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save documents or photos to a directory belonging to the host app, and enable the following flag with ",(0,o.kt)("strong",{parentName:"p"},"caution"),".  "),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," A current limitation within the SDK causes the SQL files to be public if enabling this setting. Therefore, we suggest you wait to enable this setting until a fix is available in a future release. However, if this functionality is essential to your user flow, enable it at the user's risk.")),(0,o.kt)("p",{parentName:"li"},"LSSupportsOpeningDocumentsInPlace: Supports opening documents in place"))),(0,o.kt)("h3",{id:"step-3-enable-or-disable-photo-and-file-sharing"},"Step 3. Enable or disable photo and file sharing"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the boolean value:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.enablePhotoSharing\n")),(0,o.kt)("p",{parentName:"li"},"By default, the value is set to ",(0,o.kt)("strong",{parentName:"p"},"false"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.enableFileSharing\n")),(0,o.kt)("p",{parentName:"li"},"By default, the value is ",(0,o.kt)("strong",{parentName:"p"},"true"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Contact your Account Team to enable the feature on your account."))),(0,o.kt)("h3",{id:"step-4-change-the-settings"},"Step 4. Change the settings"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the max number of photos or files to save on disk:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.maxNumberOfSavedFilesOnDisk\n")),(0,o.kt)("p",{parentName:"li"},"The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the background color of the attachment menu:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.photosharingMenuBackgroundColor\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the text of buttons:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the menu button","'","s background color:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the menu button","'","s tint color:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"LPConfig.defaultConfiguration.photosharingMenuButtonsTintColor\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Customize the navigation bar on UIDocumentationInteractionController:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Window Mode:")),(0,o.kt)("p",{parentName:"li"},"The UIDocumentationInteractionController adopts applicable branding customizations that have been set, for example:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conversationNavigationBackgroundColor")," sets the NavController tint color with translucence set to false."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conversationNavigationTintColor")," colors the L & R bar buttons and the title color.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"View Controller Mode:")),(0,o.kt)("p",{parentName:"li"},"   Your custom applicable navigation bar traits apply to the UIDocumentationInteractionController."),(0,o.kt)("p",{parentName:"li"},"   You can find all the related configurations in the resources ID table under Photo Sharing."))))}u.isMDXComponent=!0}}]);