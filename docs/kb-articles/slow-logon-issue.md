---
title: XenApp - Slow logon issues
tags: [ tech writing, kb, troubleshooting ]
description: Slow logon issues with XenDesktop 7.8, XenDesktop 7.7, XenDesk 7.6 FP3, and XenApp.  
---

>**Project:**  UX and KB writing challenge  <br />
>**Description:**  I like to keep up with the writing trends. I also like to challenge myself by rewriting and reformatting KB articles. <br />
>**Original:** [How to Troubleshoot Slow Logons on XenApp](https://support.citrix.com/article/CTX101705)<br />
>**Date of the rewrite:** January 10, 2020 

| Article # | Product(s) |
| --------- | ---------- |
| CTX101705 | - XenDesktop 7.8<br />- XenDesktop 7.7<br />- XenDesktop 7.6 FP3<br />-XenApp |

:::important
Make sure to log into the same server using Microsoft's RDP client instead of the Citrix Receiver. By doing this, you can determine whether the issue is a profile, logon script, network, or other user environment issue.
:::

## Profile issues

1. **For existing users**, remove any references to a profile path from the following:

   - Remote Desktop User 

   - Profile path within Active Directory (AD) users and computers, if applicable

   - Computer Management

   :::tip
   Create a local account directly on the Remote Desktop Server to ensure that the profile loads directly from the server. Retest the logon.
   :::

2. **For new user accounts**, accounts without a local profile and anonymous accounts need to generate a local profile upon login. The creation of the original profile might take time. Check if a Microsoft Policy is in place that deletes the local copy of the user profile upon logout. If there is one, this means that the next time the user logs in, the local profile gets generated again, slowing down the logon of this user.  

3. **Is Citrix User Profile Management (UPM) used to manage user profiles?** If so, disable the service on one server and then retest. If the issue improves, look over your Citrix UPM policies because there might be a configuration causing the problem. To enable UPM logging, see CTX126723 - How to Enable and Retrieve Profile Management Log Files. 



## Logon script issues

1. Remove any references to a logon script within:

   - Active Directory users and computers

   - Computer Management

   - Any sort of computer or group policy

2. Create a local account directly on the Remote Desktop Server to ensure that the profile loads directly from the server. Retest the logon.

:::tip
To help troubleshoot the resources in the script, comment out (REM) or input pause statements throughout each section of the logon script.
:::

## Network issues

The root cause that indicates a network issue:

- The Remote Desktop Server is searching for fonts by name and not finding them.

- A user encounters a black screen for 1 to 20 minutes before the logon completes. 

- An application is searching for fonts (usually created by older apps). Occasional occurrence.

**Steps for troubleshooting**<br />
1. In the system *Control Panel*, click the **Environment** tab.

2. In the *System Variables* section, click **Path**.

3. At the bottom, in the *Value* field, add the following to the end of the string:
    
   ```
   ;%SystemRoot%\Fonts
   ```
4. Click **Set**.

## Permissions issues
For the Citrix Receiver to function correctly, the user requires **Full** permission on the following registry key:

   HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\MSLicensing


:::tip
Local workstation admins and power users are not affected by this issue.
:::

## General troubleshooting steps

1. Is an antivirus product running on the client device? If so, disable it and retest the connection to the XenApp server.

2. Is there a hung process? If so, terminate the process to see if this speeds up the logon process. 

   :::note
   If it's a third-party process, contact the vendor for assistance.
   :::

3. Is Session Reliability enabled? If so, disable it and see CTX104147 - Explaining ICA Session Reliability, Common Gateway Protocol, on TCP Port 2598 for more details. 

4. Is this for published applications? If so, then do the following:

   1. Investigate with the Delivery Services Console or Citrix AppCenter. 

   2. Navigate to *Properties* on the **Application\>Printing** section.

   3. Ensure that **Start this application without waiting for printers to be created** has been set as the default.

