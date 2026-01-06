---
id: common-mistakes
title: Common Documentation Mistakes
sidebar_label: Common Mistakes
description: Learn about common pitfalls in writing technical documentation for end-users, including verbosity, jargon, poor structure, and more. 
keywords: [common mistakes, technical documentation, writing tips, documentation pitfalls, user-friendly content, end-user documentation]
last_update: 
   date: 09/06/2024
   author: Patricia McPhee
draft: false
doc_type: reference
displayed_sidebar: mainSidebar
---


Addressing these common mistakes in documentation is essential for creating more effective and user-friendly content. 

## Being wordy

Engineers may include too much detail, leading to overwhelming or inefficient documentation. The key is to communicate clearly without overloading the user with information. 

**Why it matters**: Concise content is easier to understand and follow, reducing cognitive load and minimizing user frustration. Users often skim documentation, so focusing on the most critical information helps them find what they need quickly.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>To get started with using the new feature, the first thing you need to do is open the application and navigate to the settings menu, which you can find by looking at the top right corner of the screen. Once you are in the settings menu, you should look for the section that says 'New Feature Setup'. Click on that section, and you will see a button that says 'Start Setup'. Click on the 'Start Setup' button to begin the process. Follow the on-screen instructions to complete the setup of the new feature.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p><ol>
            <li>Open the application.</li>
            <li>Navigate to <strong>Settings</strong> (top right corner).</li>
            <li>Select <strong>New Feature Setup</strong>.</li>
            <li>Click <strong>Start Setup</strong> and follow the on-screen instructions.</li>
            </ol></p>
          </div>
        </div>
        <p><strong>Why this is better</strong>: Breaking down the steps into a simple list makes it easier to follow and eliminates unnecessary phrasing that can confuse the user. Engineers often struggle with verbosity, so it is critical to show them how to distill instructions into actionable items.</p>
      </div>
    </div>
  </div>
</div>

---

## Using jargon and technical terms

Engineers may assume users have the same level of technical knowledge, which can lead to the use of complex terminology without explanation.

**Why it matters**: Not all users have the same technical background. Simplifying or explaining jargon ensures that documentation is accessible to all users, not just those with deep technical expertise. This prevents confusion and allows more users to engage with the product.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>The microservices architecture utilizes a service mesh to handle inter-service communication and observability.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p>Our application uses a network layer (service mesh) to manage communication and monitoring between different services (microservices).</p>
          </div>
        </div>
          <p><strong>Why this is better</strong>: Here, the term &quot;service mesh&quot; is simplified with an explanation (&quot;network layer&quot;), helping users unfamiliar with the jargon. Engineers often resist simplifying, fearing loss of precision, but this approach maintains accuracy while improving clarity.</p>
      </div>
    </div>
  </div>
</div>

---

## Focusing on too much detail

Engineers often include unnecessary technical specifics that aren't relevant to most users. This leads to information overload, detracting from the primary message.

**Why it matters**: Users don't need every technical detail. Focusing on key actions and critical information makes documentation easier to navigate and understand.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>The server is running on a distributed architecture with node clusters set up to scale horizontally, and you should also note that the system uses a multi-tier architecture for database operations.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p>The server can scale based on usage and efficiently manage multiple layers.</p>
          </div>
        </div>
          <p><strong>Why this is better</strong>: The revised version removes unnecessary technical details that users might not need to understand. Engineers should first focus on delivering essential information and, if necessary, link to more detailed references.</p>
      </div>
    </div>
  </div>
</div>

---

## Lack of structure and organization

Documentation that lacks clear structure is difficult to navigate. Engineers might write in a stream-of-consciousness style without considering how users will interact with the content.

**Why it matters**: Organized content lets users find information quickly. Headings, subheadings, and logical flow help users follow step-by-step processes more easily.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>First, you need to install the required dependencies. Next, configure the application settings. Finally, start the application. Before doing any of these steps, ensure your system meets the minimum requirements.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p><ol>
            <li>Ensure your system meets the minimum requirements.</li>
            <li>Install the required dependencies.</li>
            <li>Configure the application settings.</li>
            <li>Start the application.</li>
            </ol></p>
          </div>
        </div>
          <p><strong>Why this is better</strong>: Breaking up the steps into a clear list with proper order makes it easier for users to follow. This structure reduces cognitive load and prevents confusion.</p>
      </div>
    </div>
  </div>
</div>

---

## Inadequate explanation of concepts

Engineers often assume users already know certain technical concepts, leading to incomplete explanations.

**Why it matters**: Providing sufficient context ensures users at all levels can understand the instructions. Users might be confused without adequate explanation, leading to mistakes or incorrect implementations.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>Initialize the repository.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p>Initialize the repository by running <code>git init</code>, which sets up the necessary files to track changes in your project.</p>
          </div>
        </div>
          <p><strong>Why this is better</strong>: Adding context explains why this step is necessary and what it accomplishes, which is often missing in technical documentation.</p>
      </div>
    </div>
  </div>
</div>

---

## Using screenshots without text instructions

Screenshots can be helpful, but relying on them alone can create issues if the UI changes or if users require more detailed information.

**Why it matters**: Screenshots quickly become outdated, whereas written instructions provide more clarity and are easier to update.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p><code>Screenshot</code></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p>Navigate to <strong>Settings</strong> (top right) &gt; <strong>Account</strong> &gt; <strong>Manage Settings</strong>. For reference, see the image below.</p>
          </div>
        </div>
         <p><strong>Why this is better</strong>: The revised version includes text instructions in addition to the screenshot, ensuring users can follow along even if the UI has changed.</p>
      </div>
    </div>
  </div>
</div>

---

## Using non-descriptive hyperlink text

Engineers often use vague terms like "click here" for links, which doesn't provide users any context about where the link leads.

**Why it matters**: Descriptive link text gives users context about what they are clicking, improving usability and accessibility.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Original</h3>
          </div>
          <div class="card__body">
            <p>For more information, click <a href="#">here</a>.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header header-background">
            <h3>Revised</h3>
          </div>
          <div class="card__body">
            <p>For more information, see the <a href="#">API Setup Guide</a>.</p>
          </div>
        </div>
          <p><strong>Why this is better</strong>: By using descriptive link text, users can understand the purpose of the link before clicking. Engineers should recognize that vague links frustrate users and can reduce efficiency.</p>
      </div>
    </div>
  </div>
</div>
