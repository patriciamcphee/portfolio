// WritingGuidelines.js
import * as React from 'react';

// images for the first column
import Circle1 from '../../../docs/images/1-circle.svg';
import Circle2 from '../../../docs/images/2-circle.svg';
import Circle3 from '../../../docs/images/3-circle.svg';
import Circle4 from '../../../docs/images/4-circle.svg';
import Circle5 from '../../../docs/images/5-circle.svg';
import Circle6 from '../../../docs/images/6-circle.svg';
import Circle7 from '../../../docs/images/7-circle.svg';
import Circle8 from '../../../docs/images/8-circle.svg';
import Circle9 from '../../../docs/images/9-circle.svg';

// Include any necessary custom styles
import './styles.module.css'; 

export default function WritingGuidelines() {
  return (
    <div className="container">
      {/* Guideline 1 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle1 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3>Focus on the user intent</h3>
            <h4>
              As a <i>user</i>, I <i>want</i> <u>&#060; what? &#062;</u> <i>because/so that</i> <u>&#060; why? &#062;</u>.
            </h4>
            <p>
              When users consult technical documentation, they have a specific purpose in mind. Determine the specific task (goal or scenario) the user is trying to accomplish and adjust the tone accordingly.
            </p>
            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 2 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle2 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3 id="write-brief-meaningful-and-focused-text">Write brief, meaningful, and focused text</h3>
            <h4>Be clear and concise, especially in instructions.</h4>
            <p>Lead with what matters most so readers can immediately focus their attention. Be direct and avoid unnecessary words. Keep sentences short and to the point. Focus your content on <em><strong>user scenarios or goals</strong></em> rather than on product features.</p>
            <ul>
              <li><strong>User-focused:</strong> On the Replicator page, you can synchronize your local database with replica databases.</li>
              <li><strong>Product-focused:</strong> The Replicator page lets you synchronize your local database with replica databases.</li>
            </ul>
            <p>Aim for conciseness by presenting all necessary information clearly and briefly. Avoid irrelevant details that might distract or confuse readers.</p>

            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 3 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle3 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3 id="plain-language-benefits-everyone-including-experts">Plain language benefits everyone, including experts!</h3>
            <h4>Clear communication is a responsibility you have to your readers.</h4>
            <p>Remember, the main purpose of communication is to convey information. Use words in your content that match what people search for.</p>
            <p>Strive for a 10th to 12th-grade reading level. The content above this level demands excessive mental effort. For more insights, see <a href="https://www.nngroup.com/articles/legibility-readability-comprehension/">Legibility, Readability, and Comprehension: Making Users Read Your Words</a>.</p>
            <p>Using direct, simple language isn&#39;t condescending—effective communication makes content quicker and easier to understand.</p>
            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 4 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle4 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3 id="write-concisely">Write Concisely</h3>
            <h4>Long text can overwhelm users, prompting them to skip content or seek answers elsewhere.</h4>
            <p>While content contributors are advised to be <em>concise</em>, achieving this can be challenging.</p>
            <p>Aim to create just enough documentation to be helpful, prioritizing clarity and usefulness over exhaustive detail. This lean approach remains manageable. Our goal is to assist users, not overwhelm them with essay-like content.</p>
            <p>When striving for brevity, ask yourself: <strong>Is this essential for the reader&#39;s understanding?</strong> This question guides you in cases where clarity <em>must take precedence over brevity</em>. Sometimes, concepts require more explanation.</p>
            <p>Here are additional strategies to reduce word count and enhance content scanability:</p>
            <ul>
              <li><strong>Bullet points and lists:</strong> Break down complex ideas into digestible pieces, making it easier for readers to locate specific details.</li>
              <li><strong>Tables:</strong> Present data in a clear, logical layout for quick comprehension. Keep tables simple, focusing on essential information. Avoid over-complexity, as it can be counterproductive.</li>
              <li><strong>Concise sentences and paragraphs:</strong> Aim for sentences of 20 words or fewer. Focus each paragraph on a single idea or concept to make the document less daunting.</li>
              <li><strong>Clear headings and subheadings:</strong> Use these as signposts to indicate section content.</li>
              <li><strong>Edit ruthlessly:</strong> Eliminate redundancy and unnecessary words. Ensure each sentence adds new information.</li>
              <li><strong>Key information first:</strong> Use the &#39;inverted pyramid&#39; style to present crucial points upfront. Learn more about <a href="https://www.nngroup.com/articles/inverted-pyramid/">inverted pyramid writing</a>.</li>
              <li><strong>Use white space:</strong> Incorporate adequate spacing around text and between sections to reduce clutter and improve readability.</li>
            </ul>

    
            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 5 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle5 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3>Enhance readability and user engagement</h3>
            <p>Use active voice, present tense, and second person ("you"). Active voice makes your writing livelier and more concise than passive constructions. The second-person point of view directly addresses the reader, creating a more engaging and personal tone.</p>
            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 6 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle6 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3>Provide common real-life scenarios or examples</h3>
            <p>Illustrate how to apply the information using relatable scenarios. Focus on addressing users' specific tasks, problems, or questions to meet their needs effectively.</p>
            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 7 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle7 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3>Use visual elements</h3>
            <p>Incorporate diagrams, charts, infographics, or images to convey complex information concisely. Visual elements can often communicate ideas more effectively than text alone, saving space and enhancing understanding.</p>
            <hr />
          </div>
        </div>
      </div>
 
      {/* Guideline 8 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle8 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3 id="make-your-content-easy-to-scan">Make your content easy to scan</h3>
            <h4>Readers typically scan content rather than reading every word. </h4>
            <p>They aim to be efficient, doing the least work necessary to achieve their goal. A report by <a href="https://www.nngroup.com/articles/how-people-read-online/">Nielsen Norman Group</a> identified four main text scanning patterns:</p>
            <ul>
              <li><a href="https://www.nngroup.com/articles/how-people-read-online/"><strong>F-pattern</strong></a> — Without subheadings and bullets, users focus on words at the beginning of lines and top of the page.</li>
              <li><strong>Spotted pattern</strong> — Users fixate on specific words or phrases throughout the page.</li>
              <li><a href="https://www.nngroup.com/articles/how-people-read-online/"><strong>Layer-cake pattern</strong></a> — Readers focus on the page&#39;s headings and subheadings.</li>
              <li><strong>Commitment pattern</strong> — Traditional reading of most or all words, leading to best comprehension but taking the most time.</li>
            </ul>
            <p>To accommodate these patterns, prioritize important information, use tables and bullet lists, create descriptive headings and subheadings, and include visuals like diagrams and infographics. This approach quickly conveys key points and caters to various reading styles.</p>
            <p>For more strategies on enhancing content scannability, refer to the <a href="https://www.notion.so/headings-titles-paraphraphs.md#content-structure">Content structure and organization</a> section.</p>

            <hr />
          </div>
        </div>
      </div>

      {/* Guideline 9 */}
      <div className="row guideline-row row--no-gutters">
        <div className="col col--1 align-top">
          <div className="col-demo avatar">
            <Circle9 class="avatar__photo" />
          </div>
        </div>
        <div className="col">
          <div className="col-demo">
            <h3>Use notes, cautions, and tips sparingly</h3>
            <h4>Keep these elements concise and relevant to avoid overwhelming the reader. </h4>
            <p>Each note, caution, or tip should directly support the surrounding content.</p>
            <p>Place these elements strategically, much like in a cooking recipe. For instance, include a note about a specific step right where it's needed, not at the end or in a separate section. This ensures users have crucial information at the right moment—similar to how a baker needs ingredient substitution details while measuring, not after finishing the recipe.</p>
          </div>
        </div>
      </div>
    </div>
    
    
  );
}
