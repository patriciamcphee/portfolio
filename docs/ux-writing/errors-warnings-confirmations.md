---
title: Error messages
tags: [ux writing, tech writing, before/after ]
description: Writing error messages is an art. Your goal is to provide guidance to the user.  Does the message leave the user in a deaden?  For example, if they get "Invalid or unsupported" error, do the users know what to do next?
---

Writing error messages can be challenging because you want them to be short but with enough information to help the user. Your overall goal is to provide guidance to the user to prevent dead ends. What does "dead end" mean in this context? Does the message give the user the next steps to fix it themselves? For example, if they get an "Invalid or unsupported" error, do they know what to do next? This message is a dead-end message. It doesn't tell the user what supported files to try to get past the error.

> "Effective error message UX design explains why it occurred and then provides the next steps for users to fix the problem. These steps can be contextually-relevant."

The examples on this page are the original, as it appears in the application and the rewrite.


| Original | Rewrite | Description | Resolution |
|---|---|---|---|
| Error Logging in. System cannot connect at this time  | We're unable to sign you in because your account is deactivated. Contact your system user administrator to have your account activated.  | Displays when the user account is deactivated.  | The user administrator needs to activate them in the portal.  |
| Access denied to this resource. Please try again with an appropriate account.  | Access denied. Use an authorized account to access this resource.  |   |   |
| Invalid/Unsupported file type. Please try again.  | File type not supported. Try \*.\* for all file types or \*.{*file extension*} for a specific file type, for example, \*.docx or \*.pdf.  | Displays when the user enters the incorrect file format to the directory service.    |   |
