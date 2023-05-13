---
title: Terminology
id: terms
description: ''
slug: /terms 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: reference
displayed_sidebar: secureWorkforceSidebar
---


Refer to the following terms to gain a better understanding as you read through this documentation.

Beyond Identity Authenticator
-----------------------------

The Beyond Identity Authenticator enables users to authenticate without a password. Beyond Identity provides the following authenticators:

*   The **Platform Authenticator** is a native branded authenticator app that uses our core technology to authenticate users without a password. The Platform Authenticator is available on a per-platform basis. The Authenticator is available on iOS, Android, Windows, MacOS and Linux and can be downloaded from our [download page](https://app.byndid.com/downloads).
*   The **Web Authenticator** is a web-hosted version of our native platform authenticator running entirely in the context of a browser. It enables you to authenticate your users using cryptographically backed secure passwordless authentication without having to download the platform authenticator. Instead of a password or any shared secrets, a credential is created using asymmetrical algorithms provided by the Web Crypto API.

Tenant
------

A Beyond Identity tenant represents an organization in the Beyond Identity Cloud. It serves as the root container for all other cloud components in your configuration. The tenant account is created created by a Beyond Identity team member. Your tenant has a unique identifier and a modifiable name.

Identities
----------

An identity is a unique identifier that can be used by an end-user to gain access governed by Beyond Identity. An end-user may have multiple identities.

Groups
------

A group is a logical collection of identities. An identity can belong to many groups. Groups are commonly used as a predicate in a policy rule. (e.g. Allow group "Beyond Identity Administrators" to access the Beyond Identity Admin Console application.

Admin Console
-------------

The Beyond Identity [Admin Console]<!-- (Admin_Functions/Admin_Console) --> provides the mechanism for you to administer your tenant. The Admin Console utilizes your Beyond Identity tenant to authenticate and authorize admin logins. During the deployment of your tenant account, one or more users are added assigned the role of "Super administrator" allowing them to perform all administrative functions for the tenant.

one or more an initial policy is defined. The “Admin Console Access” User Group is created and the identity established at sign up is added to that group. Addition of user’s into the group will allow them to log into the Console as Administrators of your tenant utilizing any credentials established.

_Beware!_ This policy and group control access to the Console. It is possible to lock yourself out of the Console.

Credentials
-----------

A credential can be thought of as an X.509 certificate (in fact, it’s just a wrapper on top of one). Each credential contains a public/private key pair where the private key is stored securely in a [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment). On macOS/iOS, this would be the [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web). When a user sets up an account with Beyond Identity, the device in which they register creates a credential that becomes their identity. This private key associated with this credential can never be removed from the device in question. It is, however, possible to extend the credential’s chain of trust by creating a new credential on a different device and signing it with the private key of the first credential.

Policy
------

A [policy]<!-- (Admin_Functions/Policy/Defining_Policy) --> is a collection of rules that determine how to treat any given transaction managed by the Beyond Identity Cloud. A policy describes which transactions it governs and the action states how to handle the matching transactions.

Each registration (credential binding) and authentication operation looks at the specific policy for an Allow, Monitor, or Deny decision before completion. A Deny decision results in rejection of the operation.