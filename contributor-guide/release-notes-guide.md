---
title: Release Notes Guide
id: release-notes-guide
description: ''
slug: /release-notes-guide
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: false
doc_type: reference
displayed_sidebar: contributorGuideSidebar
---

# Release notes guide

Learn how Secure Workforce release notes are constructed, how to generate and submit them. 

## Release notes template

The release notes follow a similar pattern for each release. The following template takes v2.77.0 as an example. 

```
## Cloud


### What's new

The following attributes are available in the Beyond Identity Policy Engine:

- **Location-based** - includes Continents and Countries and is based on the source IP Address of the authenticating device. Use these attributes to permit, restrict, or monitor location-based transactions.

- **Egress IP Address Match Within Subnet** - use this attribute to enforce or monitor that source IP addresses of both devices in an add device transaction are within a specific range of IP addresses of each other.

- **Impossible Travel** - use this attribute if two authentications have been performed by single user from locations not reasonable to travel between.

### Updated

- Add device transaction events now include egress IP address information.

- Upon saving policies with a Crowdstrike integration attribute configured, the policy engine now validates the configuration of the Crowdstrike integration and connectivity to the Crowdstrike cloud.


## Desktop Login

import SupportedOsAuthenticatorWindowsOnly from '../../static/includes/_supported-os-authenticator-windows-only.mdx';

<SupportedOsAuthenticatorWindowsOnly />

### Updated

New Windows Desktop Login installations using the MSI method no longer require a reboot. For previously installed versions, v2.76.0 or earlier, you can safely bypass the Windows reboot by executing the following msiexec command when upgrading to v2.77.0:

```
msiexec.exe [install_options] <path_to_package> /norestart
```

Future Windows Desktop Login software versions will not require the `msiexec /norestart` option.

### Resolved

When a host \[source\] is accessing a Windows system \[destination\] through Microsoft Remote Desktop Protocol (RDP), the Windows Desktop Login will not allow enrollment on the destination machine. Disallowing enrollment from the RDP session ensures the security and integrity of the destination machine.


```

## Release notes process

- Before the release is published, run a tool or script to pull updates from different CHANGELOGs into a Markdown file. 
- Copy and move the content into the release notes document. 
- Review the content, check grammar and style, check formatting. 
- Send it to the community (squad leads) to review. 
- Publish the release notes. 

## How to create the release notes

...steps for creating release notes...

### Recommendations

Project repos can set up CHANGELOGs to record user-facing changes to the repo. Changelog automation aims to improve the accuracy and consistency of Beyond Identity Release Notes and reduces the overhead for dev/doc engineers.

If a CHANGELOG is set up, ensure that it's properly formatted. For the doc squad to pick up the updates, the following rules MUST be met. 

1. Include an issue or PR number for each entry. This helps users learn more about the change when needed. 

    Example: 
    ```
    Added the validate only mode of Beyond Identity. This allows you to check whether all the component validation checks of the Beyond Identity installation pass without starting any of the components. #1335 
    ```

2. Indicate whether the change is a new feature/enhancement or a bug fix.  This helps users understand quickly what new enhancements are introduced and decide whether to upgrade. 

    We propose one of the following methods to organize content:
    1) For each release, create separate sections for "New features and enhancements" and "Bug fixes" in the CHANGELOG and add updates into the correct section. 

    Example: 
    ```
    1.14.0 
    New features and enhancements
    - Added SSO token name and label to convert-env.sh for use with ZSS. #118 
    
    Bug fixes
    - Fixed app server configuration bug where min worker count was ignored when max worker count was not defined #187
    ```

   2) Use tags to label entries. 

   Example:
   ``` 
   1.14.0 
   - Feature: Added SSO token name and label to convert-env.sh for use with ZSS. #118 
   - Bugfix: Fixed app server configuration bug where min worker count was ignored when max worker count was not defined #187
   ```

We recommend the following writing style for release notes entries:

1. Start the sentence with a verb in past tense. 
   - If a new feature or enhancement, can use "Added...", "Improved...", "Enhanced...";
   - If a bug fix, can use "Fixed..."
2. Write from the user's perspective. 
    - If a new feature or enhancement, document why this change matters to users (what this feature or enhancement allows the users to do now) . 

    Example: 
    ```
    Added the validate only mode of Beyond Identity. This allows you to check whether all the component validation checks of the Beyond Identity installation pass without starting any of the components. #1335
    ```
   - If a bug fix, state clearly what issue was resolved. 

   Example: 
   ```
   Fixed a bug where the cascading position of new windows were wrong when that application was maximized. #102
   ```

3. Use second person "you" instead of "users".
