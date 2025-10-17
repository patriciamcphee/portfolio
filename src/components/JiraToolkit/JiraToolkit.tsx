import * as React from 'react';
import { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';
import '../UxDesignProjects/ProjectDetail.css';
interface CodeBlockProps {
  code: string;
  id: string;
}

interface TipBoxProps {
  children: React.ReactNode;
}

interface ReminderBoxProps {
  children: React.ReactNode;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface SubSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const JiraToolkit: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyToClipboard = (text: string, id: string): void => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const CodeBlock: React.FC<CodeBlockProps> = ({ code, id }) => (
    <div className="jt-code-block-container">
      <pre className="jt-code-block">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, id)}
        className="jt-copy-button"
        aria-label="Copy code"
      >
        {copiedId === id ? (
          <Check className="jt-icon jt-check-icon" />
        ) : (
          <Copy className="jt-icon jt-copy-icon" />
        )}
      </button>
    </div>
  );

  const TipBox: React.FC<TipBoxProps> = ({ children }) => (
    <div className="jt-tip-box">
      <div className="jt-box-title">Tip</div>
      <div className="jt-box-content">{children}</div>
    </div>
  );

  const ReminderBox: React.FC<ReminderBoxProps> = ({ children }) => (
    <div className="jt-reminder-box">
      <div className="jt-box-title">Reminder</div>
      <div className="jt-box-content">{children}</div>
    </div>
  );

  const Section: React.FC<SectionProps> = ({ id, title, children }) => (
    <section id={id} className="jt-section">
      <h2 className="jt-section-title">{title}</h2>
      {children}
    </section>
  );

  const SubSection: React.FC<SubSectionProps> = ({ id, title, children }) => (
    <div id={id} className="jt-subsection">
      <h3 className="jt-subsection-title">{title}</h3>
      {children}
    </div>
  );

  return (
<div className="project-detail-page">
      {/* Hero Section */}
      <section className="project-hero project-hero-padded">
        <div className="container">
          <div className="project-hero-content">
            <span className="jt-category-badge">Prompt Engineering</span>
            <h1 className="jt-page-title">JIRA Feature Generation Toolkit</h1>
            <p className="jt-page-subtitle">By Patricia McPhee • August 18, 2025</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="jt-main-content">
        <div className="container container-small">
          {/* Introduction */}
          <div id="intro" className="jt-intro">
            <p className="jt-intro-text">
              Your AI writing assistant for creating clear, user-focused JIRA features. Master the template first, 
              then leverage these tools to work faster while maintaining quality.
            </p>
            <p className="jt-description">
              This toolkit provides ready-made prompts to generate clear, user-focused JIRA features with any AI tool. 
              These prompts convert technical details into well-formatted tasks aligned with JIRA standards, saving time 
              and ensuring consistency.
            </p>
            
            <div className="jt-warning-box">
              <p className="jt-warning-title">
                <strong>Before using this toolkit, write 1-2 JIRA features manually using the template.</strong>
              </p>
              <p className="jt-warning-text">
                It's recommended that you understand what GOOD looks like before you can assess AI output. 
                Think of this as moving from walking to riding a bike - you still need to know where you're going 
                and how to steer.
              </p>
            </div>
          </div>

          <Section id="why-master" title="Why master the template first?">
            <ul className="jt-bullet-list">
              <li>
                <strong>You remain the subject matter expert</strong> - AI doesn't understand your specific context
              </li>
              <li>
                <strong>AI can produce convincing but wrong content</strong> - You need to spot when it goes off track
              </li>
              <li>
                <strong>Quality assessment requires knowledge</strong> - You must verify technical accuracy and user benefits
              </li>
              <li>
                <strong>Template understanding prevents the 3 deadly sins</strong> - Information starvation, jargon walls, and kitchen sink features
              </li>
            </ul>
          </Section>

          <Section id="when-ai" title="When AI helps vs. When it hurts">
            <div className="jt-two-column-grid">
              <div>
                <h4 className="jt-column-title jt-success">✅ It's useful when you:</h4>
                <ul className="jt-bullet-list">
                  <li>Understand the JIRA template structure and requirements</li>
                  <li>Use well-engineered prompts with specific instructions</li>
                  <li>Need to convert rough technical notes into user-friendly language</li>
                  <li>Want to ensure no critical sections are overlooked</li>
                  <li>Require consistency across multiple features</li>
                </ul>
              </div>
              <div>
                <h4 className="jt-column-title jt-error">❌ It creates problems when you:</h4>
                <ul className="jt-bullet-list">
                  <li>Don't understand what each template section requires</li>
                  <li>Copy output without reviewing for accuracy and completeness</li>
                  <li>Assume AI understands your specific context and constraints</li>
                  <li>Skip validation because "AI wrote it"</li>
                  <li>Use it as a replacement instead of an assistant</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="how-works" title="How this toolkit works">
            <p className="jt-description">These prompts were engineered to direct AI responses by providing:</p>
            <ul className="jt-bullet-list">
              <li><strong>Clear context and structure</strong> - The template format AI should follow</li>
              <li><strong>Specific instructions</strong> - What to focus on and what to avoid</li>
              <li><strong>Output formatting</strong> - Consistent sections that match our standards</li>
              <li><strong>Quality guardrails</strong> - Reminders about user focus and measurable benefits</li>
            </ul>
          </Section>

          <Section id="using" title="Using the toolkit">
            <ol className="jt-numbered-list">
              <li><strong>1.</strong> Choose the right prompt from the Ready-made prompts based on your situation</li>
              <li><strong>2.</strong> Use any GenAI tool you want</li>
              <li><strong>3.</strong> Fill in your specific details in the prompt template</li>
              <li><strong>4.</strong> Submit and review the output carefully - Remember, you're the expert</li>
              <li><strong>5.</strong> Refine using Quick refinement prompts to address gaps or issues</li>
              <li><strong>6.</strong> Validate completeness with the Validation checklist prompt</li>
              <li><strong>7.</strong> Copy the validated output to your JIRA feature Description and Acceptance Criteria fields</li>
            </ol>

            <TipBox>
              <p>You can also use one of the <strong>context-specific prompts</strong> for backend, UI, and integration features.</p>
            </TipBox>

            <ReminderBox>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>You are responsible for:</p>
              <ul className="jt-checklist">
                <li>✓ Verifying technical accuracy</li>
                <li>✓ Ensuring user benefits are real and measurable</li>
                <li>✓ Confirming acceptance criteria are testable</li>
                <li>✓ Validating that the problem statement reflects reality</li>
              </ul>
            </ReminderBox>
          </Section>

          <Section id="prompts" title="Ready-made prompts">
            <SubSection id="comprehensive" title="Comprehensive prompt">
              <p className="jt-description"><strong>When to use:</strong> Creating complete JIRA features with structured inputs.</p>
              <p className="jt-description"><strong>Best for:</strong> New features, major updates, or when you have detailed information.</p>
              <CodeBlock id="comp-prompt" code={`Use clear, non-technical language focused on user value to generate a JIRA feature description based on these inputs:

Contact person: [name]
Feature name: [what you're building]
Technical purpose: [what it does technically]
Target users: [who will use it]
Problem it solves: [current pain point]
Business goal/OKR: [what objective it supports]

=== STRUCTURED OUTPUT TEMPLATE ===
Format the output as:
**Primary point of contact:** [Name]

#### What is it
• [User-friendly explanation of what users can do]
• [Focus on user capabilities and goals]
• [Clear description of the experience]

#### Problem statement
• [Specific user frustration with example]
• [Scenario where users currently struggle]
• [Why existing solutions fall short]

#### Validation
• [Data point: "Users report..."]
• [User feedback: "Users have requested..."]
• [Business goal: "Supports our objective to..."]

### User intent
As a **[User Role]**,
I want **[to perform specific action]**,
So that **[I can achieve specific outcome]**.

### User benefits
[2-3 sentences describing how this makes the user's life better, saves time, or enables new capabilities]

### Risks
[1-2 key implementation or adoption risks with mitigation strategies]

### Acceptance Criteria
• Given a user is [context], when they [action], then [expected result]
• Given [setup condition], when [user action], then [system response]
• Given [error condition], when [user action], then [appropriate error handling]
• The system should [specific measurable behavior]
• Users should be able to [specific capability with success metric]`} />
            </SubSection>

            <SubSection id="simple" title="Simple input form">
              <p className="jt-description"><strong>When to use:</strong> Brainstorming, early ideas, or conversational approach.</p>
              <p className="jt-description"><strong>Best for:</strong> Converting rough concepts into structured features.</p>
              <CodeBlock id="simple-prompt" code={`Fill this out and I'll generate your JIRA feature using the structured output template:

=== QUICK INPUTS ===
Contact: 
What I'm building:
Who uses it:
Problem it fixes:
How we know it's needed:
Related business goal:
Main risk:

=== TEST SCENARIOS (describe what should happen) ===
Scenario 1:
Scenario 2:
Scenario 3:
Error case:

=== STRUCTURED OUTPUT TEMPLATE ===
[Same template structure as above]`} />
            </SubSection>

            <SubSection id="one-line" title="One-line feature generator">
              <p className="jt-description"><strong>When to use:</strong> Sprint planning, rapid documentation, or well-understood features.</p>
              <p className="jt-description"><strong>Best for:</strong> Quick turnaround when you have a clear, simple feature.</p>
              <CodeBlock id="one-line-prompt" code={`Generate a complete JIRA feature for: "[feature name] that helps [user type] to [do something] by [how it works] because [problem it solves]. Contact: [name]"

Include both description and acceptance criteria sections using the following structured template.

=== STRUCTURED OUTPUT TEMPLATE ===
[Same template structure as above]`} />
            </SubSection>

            <SubSection id="convert" title="Convert engineer notes">
              <p className="jt-description"><strong>When to use:</strong> You have rough technical notes that need organization.</p>
              <p className="jt-description"><strong>Best for:</strong> Transforming existing documentation into structured features.</p>
              <CodeBlock id="convert-prompt" code={`Convert these engineering notes into a proper JIRA feature:

[paste technical notes]

Structure it with all required sections and user-focused language. Translate technical concepts into user benefits and actionable acceptance criteria.

=== STRUCTURED OUTPUT TEMPLATE ===
[Same template structure as above]`} />
            </SubSection>
          </Section>

          <Section id="context-specific" title="Context-specific prompts">
            <p className="jt-description">Different feature types need tailored documentation approaches to avoid common pitfalls:</p>
            
            <SubSection id="backend" title="For backend features">
              <p className="jt-description"><strong>Purpose:</strong> Highlight user benefits from performance improvements without technical jargon.</p>
              <p className="jt-description"><strong>Avoids:</strong> Jargon walls and information starvation about user impact.</p>
              <CodeBlock id="backend-prompt" code={`I'm building a backend feature:
- Technical: [what it does]
- User impact: [what changes for users]
- Performance gain: [metrics]
- Developer: [name]

Generate a user-focused JIRA description that explains the value without mentioning the technical implementation. Focus on how users experience the improvement.`} />
            </SubSection>

            <SubSection id="ui" title="For UI features">
              <p className="jt-description"><strong>Purpose:</strong> Emphasize visual changes and user interactions.</p>
              <p className="jt-description"><strong>Avoids:</strong> Kitchen sink features by focusing on specific workflows.</p>
              <CodeBlock id="ui-prompt" code={`I'm adding a UI feature:
- New element: [what I'm adding]
- Location: [where it appears]
- User action: [what users can do]
- Solves: [what problem]
- Developer: [name]

Generate a JIRA feature focusing on the user workflow improvement and visual experience.`} />
            </SubSection>

            <SubSection id="integration" title="For integration features">
              <p className="jt-description"><strong>Purpose:</strong> Explain how external services benefit users without technical details.</p>
              <p className="jt-description"><strong>Avoids:</strong> Information starvation about why integration matters.</p>
              <CodeBlock id="integration-prompt" code={`I'm integrating with [service]:
- Enables users to: [capability]
- Replaces: [current manual process]
- Saves: [time/effort metric]
- Developer: [name]

Generate a JIRA feature that explains the user value without technical integration details.`} />
            </SubSection>
          </Section>

          <Section id="refinement" title="Quick refinement prompts">
            <p className="jt-description">Use these to improve existing JIRA features without starting from scratch.</p>
            
            <div className="jt-refinement-section">
              <div>
                <h4 className="jt-refinement-title">Make it less technical</h4>
                <CodeBlock id="less-tech" code={`Rewrite this JIRA description to be more user-friendly.

Remove all technical terms and focus on what users can do and why they care. Translate technical benefits into user value.

[paste existing content to refine]`} />
              </div>

              <div>
                <h4 className="jt-refinement-title">Add missing sections</h4>
                <CodeBlock id="add-sections" code={`This JIRA feature is missing [validation/risks/acceptance criteria]. 

Generate the missing sections based on the existing content and our template requirements.

[paste existing content]`} />
              </div>

              <div>
                <h4 className="jt-refinement-title">Strengthen user benefits</h4>
                <CodeBlock id="strengthen" code={`Rewrite the user benefits section to be more specific and measurable. Focus on concrete improvements to the user experience.

Current benefits: [paste current benefits]
Context: [brief description of the feature]`} />
              </div>
            </div>
          </Section>

          <Section id="validation" title="Validation checklist prompt">
            <p className="jt-description"><strong>When to use:</strong> Quality check before submitting your JIRA feature.</p>
            <p className="jt-description" style={{ fontWeight: 600 }}>This is your final safety net - use it every time.</p>
            <CodeBlock id="validation-prompt" code={`Check if this JIRA feature meets our quality standards:

[paste feature output]

Verify it has:
- [ ] Contact person named
- [ ] 2-3 "What is it" points (user-focused, no technical jargon)
- [ ] 2-3 "Problem statement" points (with specific examples/scenarios)
- [ ] 2-3 "Validation" points (with data/feedback/business goals)
- [ ] User story (As a... I want... So that...)
- [ ] User benefits paragraph (specific and measurable)
- [ ] At least 1 risk with mitigation strategy
- [ ] 3-5 acceptance criteria (Given/When/Then format)
- [ ] No jargon walls or information starvation
- [ ] Avoids kitchen sink approach (clear focus)

Flag what's missing or needs improvement. Rate the overall quality from 1-10 and explain your reasoning.`} />
          </Section>

          <Section id="remember" title="Remember: You're the Expert">
            <p className="jt-description">
              GenAI is your writing assistant, not your replacement. You remain the subject matter expert responsible for:
            </p>
            <ul className="jt-bullet-list">
              <li>✅ <strong>Technical accuracy</strong> - Does the solution actually work this way?</li>
              <li>✅ <strong>User benefit validation</strong> - Are these benefits real and achievable?</li>
              <li>✅ <strong>Testable criteria</strong> - Can QA actually test these acceptance criteria?</li>
              <li>✅ <strong>Problem authenticity</strong> - Does this problem statement reflect real user pain?</li>
              <li>✅ <strong>Risk assessment</strong> - Are these the right risks to worry about?</li>
            </ul>

            <div className="jt-info-box">
              <p>
                <strong>Great features start with great documentation.</strong> Your JIRA feature is a contract 
                with your team - make it clear, make it complete, and make it count.
              </p>
            </div>
          </Section>
        </div>
      </main>
    </div>
  );
};

export default JiraToolkit;