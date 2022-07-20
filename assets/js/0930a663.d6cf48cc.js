"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8897],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=s(n),c=o,d=h["".concat(p,".").concat(c)]||h[c]||u[c]||i;return n?a.createElement(d,r(r({ref:t},m),{},{components:n})):a.createElement(d,r({ref:t},m))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),o=n(102),i=(n(7294),n(3905)),r=["components"],l={title:"Mobile SDK - Photo and file sharing",tags:["ux writing","tech writing","how-tos"],description:"API guide for photo and file sharing in a mobile app."},p=void 0,s={unversionedId:"how-tos/mobile-sdk",id:"how-tos/mobile-sdk",title:"Mobile SDK - Photo and file sharing",description:"API guide for photo and file sharing in a mobile app.",source:"@site/docs/how-tos/mobile-sdk.md",sourceDirName:"how-tos",slug:"/how-tos/mobile-sdk",permalink:"/portfolio/docs/how-tos/mobile-sdk",draft:!1,tags:[{label:"ux writing",permalink:"/portfolio/docs/tags/ux-writing"},{label:"tech writing",permalink:"/portfolio/docs/tags/tech-writing"},{label:"how-tos",permalink:"/portfolio/docs/tags/how-tos"}],version:"current",frontMatter:{title:"Mobile SDK - Photo and file sharing",tags:["ux writing","tech writing","how-tos"],description:"API guide for photo and file sharing in a mobile app."},sidebar:"tutorialSidebar",previous:{title:"How-to samples",permalink:"/portfolio/docs/how-tos/how-to-samples"},next:{title:"KB article samples",permalink:"/portfolio/docs/kb-articles/kb-article-samples"}},m={},u=[{value:"Supported formats",id:"supported-formats",level:2},{value:"Photo and file sizes",id:"photo-and-file-sizes",level:2},{value:"Notes and limitations",id:"notes-and-limitations",level:2},{value:"How photo sharing works - Android",id:"how-photo-sharing-works---android",level:2},{value:"Step 1. Enable or disable photo sharing",id:"step-1-enable-or-disable-photo-sharing",level:3},{value:"Step 2. Change the settings",id:"step-2-change-the-settings",level:3},{value:"How photo sharing works - iOS",id:"how-photo-sharing-works---ios",level:2},{value:"Step 1. Set the requirements for Custom View Controller Mode",id:"step-1-set-the-requirements-for-custom-view-controller-mode",level:3},{value:"Step 2. Add app privacy settings",id:"step-2-add-app-privacy-settings",level:3},{value:"Step 3. Enable or disable photo and file sharing",id:"step-3-enable-or-disable-photo-and-file-sharing",level:3},{value:"Step 4. Change the settings",id:"step-4-change-the-settings",level:3}],h={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mobile SDK v3.9 introduces a feature for agents to share photos or files with the consumers within the app.  Agents can share a reference photo or photos of any product to visually guide consumers with product awareness, steps on how to use the product, or review comments of a product.  Agents can also share files to provide consumers with information such as mortgage documents, product catalogs, or transaction details as requested by consumers. Agents can even share photos or files in a resolved conversation to resume the conversation with the consumer."),(0,i.kt)("p",null,"When the agent shares any supported file type, if the consumer isn't within the conversation view, they get a notification from the customer app only if the push notification is enabled. Otherwise, a thumbnail for the photo or file appears in the conversation window when the consumer returns."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Files:")," the consumer can tap on it to view it full screen, share it through the default app on the device, or save it to a location."),(0,i.kt)("p",{parentName:"li"}," The Android SDK supports opening any file types other than images through the picker application. The consumer can long-click on the thumbnail or open the file through the picker application to share and save."),(0,i.kt)("p",{parentName:"li"}," The iOS SDK supports the opening of all the supported file types on the device as per the iOS operating system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Photos:")," the consumer can tap on the photo to view it full screen or share it through the default app on their device.  Consumers cannot download images; they can only preview or share images."))),(0,i.kt)("h2",{id:"supported-formats"},"Supported formats"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PNG"),(0,i.kt)("li",{parentName:"ul"},"JPG/JPEG"),(0,i.kt)("li",{parentName:"ul"},"GIF (non-animated) - previewed as a static image only"),(0,i.kt)("li",{parentName:"ul"},"PDF"),(0,i.kt)("li",{parentName:"ul"},"DOCX"),(0,i.kt)("li",{parentName:"ul"},"PPTX"),(0,i.kt)("li",{parentName:"ul"},"XLSX")),(0,i.kt)("h2",{id:"photo-and-file-sizes"},"Photo and file sizes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Thumbnail - 30 KB (base64-encoded)"),(0,i.kt)("li",{parentName:"ul"},"Max upload size allowed - 5 MB uncompressed")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For SDKs previous to 3.8.")," The max upload size allowed is 3 MB."),(0,i.kt)("h2",{id:"notes-and-limitations"},"Notes and limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Photo sharing is two-way (agent-to-consumer and consumer-to-agent). Still, file sharing is one way only (agent to consumer)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"For SDKs previous to 3.8:")," Photo-sharing is one-way only (from consumer-to-agent, but not vice versa) and available for the Mobile Message SDK only.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If an attempt to view a photo is unsuccessful, an error icon covers the thumbnail.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If an attempt to download a file is unsuccessful, an error icon covers the thumbnail.  Upon retry, the file attempts to download again. Retry can be tried as many times as possible (in case of a poor network) till the file download successfully.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The consumer can return to a resolved conversation to view the photos, as long as the images are part of the conversation history.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If an agent sends an unsupported file, a message indicates the file type is not supported, and the agent should retry sending a supported file format. On the consumer side, they see an empty message with no content.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For authenticated users, backgrounding the app while loading the photo does not get interrupted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For unauthenticated sessions, consumers must tap the photo again with each visit because the history gets cleared when a session expires or logs the consumer out."))),(0,i.kt)("h2",{id:"how-photo-sharing-works---android"},"How photo sharing works - Android"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For Android SDK 3.0 on an Oreo Device (8.0 ","&"," 8.1).")," Add support for Notification Channel."),(0,i.kt)("h3",{id:"step-1-enable-or-disable-photo-sharing"},"Step 1. Enable or disable photo sharing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the boolean value:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<bool name="enable_photo_sharing">')),(0,i.kt)("p",{parentName:"li"},"By default, this value is ",(0,i.kt)("strong",{parentName:"p"},"false"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Contact your Account Team to have the feature enabled on your account."))),(0,i.kt)("h3",{id:"step-2-change-the-settings"},"Step 2. Change the settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the max number of photos or files to save on disk:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="max_number_stored_images">')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="max_number_stored_documents">')),(0,i.kt)("p",{parentName:"li"},"The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the max image size:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="max_image_size_kb">')),(0,i.kt)("p",{parentName:"li"},"The default max image is 3000kb.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the color of the attachment menu:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<color name="attachment_menu_item_background_color">')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<color name="lp_attachment_menu_background_color">')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<color name="lp_attachment_menu_item_text_color">')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<color name="lp_attachment_menu_item_icon_color">'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the text of buttons:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<string name="lp_accessibility_gallery">')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<string name="lp_accessibility_camera">'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define the max number of stored images allowed locally."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="max_number_stored_images">')),(0,i.kt)("p",{parentName:"li"},"The default max number is 20.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define the resize dimensions:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="thumbnail_longer_dimension_resize">')),(0,i.kt)("p",{parentName:"li"},"The default thumbnail dimension is 100."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="full_image_longer_dimension_resize">')),(0,i.kt)("p",{parentName:"li"},"The default full image dimension is 800.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the compression rate (percentage) for full images:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'<integer name="full_image_compression_rate">')),(0,i.kt)("p",{parentName:"li"},"The default compression rate is 50."),(0,i.kt)("p",{parentName:"li"},"More advanced configurations, like image size, compression rate, can be found under Photo Sharing in the Configuring the SDK section."))),(0,i.kt)("h2",{id:"how-photo-sharing-works---ios"},"How photo sharing works - iOS"),(0,i.kt)("h3",{id:"step-1-set-the-requirements-for-custom-view-controller-mode"},"Step 1. Set the requirements for Custom View Controller Mode"),(0,i.kt)("p",null,"When using Custom View Controller Mode, you must remove the Conversation view when leaving the App. To avoid dismissing the View when presenting CSAT/SecureForms/PhotoSharing View, you should only ignore the Conversation view if Moving From ParentView:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"\nif (self.conversationQuery != nil && self.isMovingToParentViewController){\n\n  LPMessagingSDK.instance.removeConversation(self.conversationQuery!)\n\n}\n")),(0,i.kt)("p",null,"When using ViewController Mode, on the Navigation Bar Back Button, you can call ",(0,i.kt)("strong",{parentName:"p"},"LPMessagingSDK.instance.removeConversation(self.conversationQuery!)"),"."),(0,i.kt)("h3",{id:"step-2-add-app-privacy-settings"},"Step 2. Add app privacy settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the photo library privacy settings:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Key:")," NSPhotoLibraryUsageDescription"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Value:"),'"Photo Library Privacy Setting for Mobile App Messaging SDK for iOS"'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the camera privacy settings:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Key:")," NSCameraUsageDescription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Value:"),'"Camera Privacy Setting for Mobile App Messaging SDK for iOS"'),(0,i.kt)("p",{parentName:"li"},"Values for these descriptions are up to the brand to define; these are only examples.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the file-sharing privacy settings:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UIFileSharingEnabled: Application supports iTunes file sharing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Privacy - Photo Library Usage Description")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Privacy - Photo Library Additions Usage Description"),(0,i.kt)("p",{parentName:"li"},'iOS supports the preview of file types per iOS operating system and requires some configurations to be enabled ("YES") within the Host App\'s plist file. Enabling supports file sharing and the export and saving of photos.')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save documents or photos to a directory belonging to the host app, enable the following flag with ",(0,i.kt)("strong",{parentName:"p"},"caution"),".  "),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," A current limitation within the SDK causes the SQL files to be public if enabling this setting. Therefore, we suggest you not enable this setting until a fix is available in a future release. However, if this functionality is essential to your user flow, enable it at the user's risk.")),(0,i.kt)("p",{parentName:"li"},"LSSupportsOpeningDocumentsInPlace: Supports opening documents in place"))),(0,i.kt)("h3",{id:"step-3-enable-or-disable-photo-and-file-sharing"},"Step 3. Enable or disable photo and file sharing"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the boolean value:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.enablePhotoSharing")),(0,i.kt)("p",{parentName:"li"},"By default, the value is set to ",(0,i.kt)("strong",{parentName:"p"},"false"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.enableFileSharing")),(0,i.kt)("p",{parentName:"li"},"By default, the value is ",(0,i.kt)("strong",{parentName:"p"},"true"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Contact your Account Team to have the feature enabled on your account."))),(0,i.kt)("h3",{id:"step-4-change-the-settings"},"Step 4. Change the settings"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set the max number of photos or files to save on disk:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.maxNumberOfSavedFilesOnDisk")),(0,i.kt)("p",{parentName:"li"},"The default is 20. If exceeding the max value of photos or files, the SDK deletes the oldest file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the background color of the attachment menu:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.photosharingMenuBackgroundColor"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the text of buttons:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.photosharingMenuButtonsTextColor"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the menu button","'","s background color:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.photosharingMenuButtonsBackgroundColor"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the menu button","'","s tint color:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"LPConfig.defaultConfiguration.photosharingMenuButtonsTintColor"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Customize the navigation bar on UIDocumentationInteractionController:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Window Mode:")),(0,i.kt)("p",{parentName:"li"},"The UIDocumentationInteractionController adopts applicable branding customizations that have been set, for example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conversationNavigationBackgroundColor")," sets the NavController tint color with translucence set to false."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"conversationNavigationTintColor")," colors the L & R bar buttons as well as the title color.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"View Controller Mode:")),(0,i.kt)("p",{parentName:"li"},"   Your custom applicable navigation bar traits apply to the UIDocumentationInteractionController."),(0,i.kt)("p",{parentName:"li"},"   You can find all the related configurations in the resources ID table, under Photo Sharing."))))}c.isMDXComponent=!0}}]);