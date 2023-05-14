---
title: How Beyond Identity works
id: how-it-works
description: 'Beyond Identity authenticates users and their devices by cryptographically binding users to devices, providing complete control over who and what devices can access your SaaS apps and cloud infrastructure.'
slug: /how-it-works 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: overview
displayed_sidebar: secureWorkforceSidebar
---

Beyond Identity authenticates users and their devices by cryptographically binding users to devices, providing complete control over who and what devices can access your SaaS apps and cloud infrastructure. 

This is possible today because devices have native biometrics and a built-in chipset that securely stores private keys and performs high-trust cryptographic functions. The Beyond Identity Authenticator generates an immovable private key on each user's device and stores the public key in the Beyond Identity cloud providing the most secure and easy-to-use multi-factor authentication available.

Users are added to Beyond Identity's cloud-based directory via SCIM or API. A lightweight authenticator that enables users to add new devices is available in the following ways: 

*   Downloaded from the app store
*   Deployed via MDM
*   Integrated into a native application for a streamlined consumer-facing deployment

Policies control which and how many devices are permitted. The Beyond Identity Authenticator shows the user all the data that is collected from the device to avoid privacy concerns.

During enrollment, Beyond Identity creates a credential that is bound to the device. The enrollment step is initiated by clicking a link in an email, or a link provided once the user successfully completes an already established login flow. For example, a workforce user can log into the SSO while a consumer can log into an app or web-service to access the enrollment link. After enrollment, Beyond Identity cryptographically validates that both the user and device are permitted to access the requested service.

Our authenticator works with the device's TPM during enrollment to create a private key that cannot be copied, shared, or moved from the device. The public key is then sent and stored in Beyond Identity's cloud. During each login, the authenticator engages the TPM to mint a fresh X.509 certificate, which is sent to our cloud for verification. The public key is used to validate that the certificate was signed with the private key. This is the same proven cryptography that powers TLS, secures the Internet, and protects trillions of dollars worth of transactions daily. You get the security of widely-deployed crypto without any of the hassles of implementing PKI or managing certificates.

The Beyond Identity Platform Authenticator runs across a wide array of mobile devices, tablets, and computers. Each device requesting access must have the Beyond Identity Platform Authenticator app and a valid credential to access the target application or resource.

Beyond Iderntity also provides a web-hosted version of our native platform authenticator running entirely in the context of a browser. It enables you to authenticate your users using cryptographically backed secure passwordless authentication without having to download the platform authenticator. 

Beyond Identity's policy engine ensures that only authorized users are able to enroll credentials on approved devices. Control whether your workforce can enroll credentials on work-issued devices or if BYOD is permitted. Policies can also limit the number of devices customers and consumers are allowed to enroll.

During every login or step-up authentication, the policy engine inspects up-to-date risk signals collected by the authenticator at the time of the request. The policy engine evaluates these fresh signals and determines if a user and a device meet your security requirements before permitting access to the requested applications or resources. Policies can be configured to alert and/or block access.