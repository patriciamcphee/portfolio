---
id: ordered-unordered-lists
title: Lists (Ordered and Unordered)
description: 'Learn how to effectively use ordered and unordered lists to improve readability, simplify complex information, and enhance technical documentation.'
keywords: [lists, ordered lists, unordered lists, numbered lists, bullet points, bullet lists, formatting, readability, technical documentation, writing guidelines, writing tips]
last_update: 
   date: 09/07/2024
   author: Patricia McPhee
draft: false
doc_type: reference
displayed_sidebar: mainSidebar
---


Lists play a crucial role in enhancing the readability and organization of information. 

They help in breaking down complex instructions, features, or concepts into manageable, easy-to-digest pieces. Incorporating ordered and unordered lists effectively can significantly improve the quality and effectiveness of the documentation.

## Basic guidelines

- Use parallel writing structures for similar things.
- Use lists to present complex text in a way that's easy to scan.
- A list should have at least two items but no more than seven items

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
          <p>Lists are greate for:</p>
            <p>
              <ul>
                  <li>Easy navigation.</li>
                  <li>Quick scanning.</li>
                  <li>Efficient comprehension.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect</h3>
          </div>
          <div class="card__body">
            <p>Lists are great because they help uses with navigation, make it easy for scanning the document quickly, and they're also good for understanding complex information efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Unordered lists (bullets)

Use bulleted lists for things that have something in common but don't need to appear in a particular order.

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
            <p>The benefits of DevOps are:</p>
              <ul>
                  <li>Faster deployment</li>
                  <li>Improved collaboration</li>
                  <li>Higher quality software</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect</h3>
          </div>
          <div class="card__body">          
            <p>How to merge a pull request:</p>
              <ul>
                  <li>Review the code changes.</li>
                  <li>Run automated tests.</li>
                  <li>Merge the pull request.</li>
              </ul>            
          </div>
        </div>
        <p><b>Why this is incorrect:</b> Using a bulleted list for the process that should be sequential.</p>
      </div>
    </div>
  </div>
</div>

## Ordered lists (numbered)


<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
            <ol>
              <li>Tun on the computer.</li>
              <li>Log into your computer.</li>
              <li>Open the browser.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect</h3>
          </div>
          <div class="card__body">
            <ol>
              <li>Importance of automation</li>
              <li>Cloud computing</li>
              <li>Monitoring and alerting</li>
            </ol>
          </div>
        </div>
        <p><b>Why this is incorrect:</b> Numbering items that do not require a specific order, for example, general concepts.</p>
      </div>
    </div>
  </div>
</div>

## Introductory text

<ul>
  <li>Ensure the purpose of the list is clear. Introduce the text with a heading or complete sentence.</li>
  <li>If you introduce a list with a heading, skip the explanatory text after the heading.</li>
  <li>Avoid using a colon or period in the heading.</li>
</ul>


<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
            <p><strong>With heading</strong>:</p>
            <h6>Steps to Install XYZ</h6>
            <ol>
              <li>Step One.</li>
              <li>Step Two.</li>
            </ol>
            <p><strong>With sentence</strong>:</p>
            <p>Follow the steps below carefully to install XYZ.</p>
            <ol>
              <li>Step One.</li>
              <li>Step Two.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect </h3>
          </div>
          <div class="card__body">
            <p><strong>With heading + sentence:</strong></p>
              <h4 id="installation-steps">Installation Steps</h4>
              <p>The following steps will guide you...</p>
              <p><strong>With sentence but no clear purpose:</strong></p>
              <p>The software installation involves several steps.</p>
          </div>
        </div>
        <p><b>Why this is incorrect:</b> Starting a list without a heading or an introduction leaves readers unsure of the list's purpose.</p>
      </div>
    </div>
  </div>
</div>

## Capitalization

- Begin each item in a list with a capital letter unless there's a reason not to, such as a command, which is always lowercase. 
- If necessary, rewrite the list item so that all items begin with capital letters or all items begin with lowercase words. 

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
            <p><strong>Consistent capitalization</strong></p>
            <ul>
              <li>Download the application.</li>
              <li>Install the application.</li>
              <li>Launch the application.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect</h3>
          </div>
          <div class="card__body">
            <p><strong>Inconsistent capitalization</strong></p>
            <ul>
              <li>download the application.</li>
              <li>Install the application.</li>
              <li>Launch the Application.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

## Punctuation

- Use consistently in the list and other lists within the same section.
- Avoid using semicolons, commas, or conjunctions (like *and* or *or*) at the end of list items.
- Only use a period at the end of the list items when they're complete sentences, even if the complete sentence is very short. If all items have three or fewer words, skip the period.
- If the list is introduced by a sentence that ends with a colon, end all the items in the list with a period. The items should form a complete sentence when combined with the introduction sentence. 

<div class="container-fluid">
  <div class="row">
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header correct">
            <h3>Correct</h3>
          </div>
          <div class="card__body">
            <p><strong>Complete sentences:</strong></p>
            <p>To secure your account correctly:</p>
            <ul>
              <li>Enable two-factor authentication.</li>
              <li>Regularly update software.</li>
            </ul>
            <p><strong>Short items without complete sentences:</strong></p>
            <p>Our priorities are:</p>
            <ul>
              <li>Quality</li>
              <li>Efficiency</li>
              <li>Innovation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col col--6">
      <div class="col-demo">
        <div class="card margin-top--sm margin-bottom--sm no-pointer">
          <div class="card__header incorrect">
            <h3>Incorrect</h3>
          </div>
          <div class="card__body">
            <p><strong>Incomplete sentences:</strong></p>
            <p>Improvements include:</p>
            <ul>
              <li>Faster loading time.</li>
              <li>Improved security.</li>
            </ul>
            <p><strong>Mixed punctuation:</strong></p>
            <p>Our priorities are:</p>
            <ul>
              <li>Quality,</li>
              <li>Efficiency;</li>
              <li>Innovation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
