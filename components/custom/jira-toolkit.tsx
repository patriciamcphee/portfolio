'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import './portfolio.css'

interface CodeBlockProps {
  code: string
  id: string
}

interface TipBoxProps {
  children: React.ReactNode
}

interface ReminderBoxProps {
  children: React.ReactNode
}

interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

interface SubSectionProps {
  id: string
  title: string
  children: React.ReactNode
}

export function JiraToolkit() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (text: string, id: string): void => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const CodeBlock = ({ code, id }: CodeBlockProps) => (
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
  )

  const TipBox = ({ children }: TipBoxProps) => (
    <div className="jt-tip-box">
      <div className="jt-box-title">Tip</div>
      <div className="jt-box-content">{children}</div>
    </div>
  )

  const ReminderBox = ({ children }: ReminderBoxProps) => (
    <div className="jt-reminder-box">
      <div className="jt-box-title">Reminder</div>
      <div className="jt-box-content">{children}</div>
    </div>
  )

  const Section = ({ id, title, children }: SectionProps) => (
    <section id={id} className="jt-section">
      <h2 className="jt-section-title">{title}</h2>
      {children}
    </section>
  )

  const SubSection = ({ id, title, children }: SubSectionProps) => (
    <div id={id} className="jt-subsection">
      <h3 className="jt-subsection-title">{title}</h3>
      {children}
    </div>
  )

  return (
    <div className="not-prose">
      <div className="jira-toolkit-page">
        {/* Main Content */}
        <main className="jt-main-content">
          <div className="container container-large">
            {/* Introduction */}
            <div id="intro" className="jt-intro">
              <p className="jt-intro-text">
                A reusable prompt + validation pattern for turning messy technical inputs into
                structured, developer-ready outputs&mdash;without sacrificing correctness.
              </p>
              <p className="jt-description">
                This toolkit demonstrates applied prompt engineering practices: structured outputs,
                explicit constraints, and validation checklists that reduce confident-sounding
                mistakes. While the examples use a &ldquo;feature spec&rdquo; format, the same
                pattern transfers cleanly to AI API docs, SDK guides, integration tutorials, and
                workshop/lab materials.
              </p>

              <div className="jt-warning-box">
                <p className="jt-warning-title">
                  <strong>Guardrail principle:</strong> AI drafts; humans verify.
                </p>
                <p className="jt-warning-text">
                  LLMs can produce fluent output that&apos;s subtly wrong. This page emphasizes
                  human-in-the-loop review, testable acceptance criteria, and explicit validation to
                  protect accuracy and developer trust.
                </p>
              </div>
            </div>

            <Section id="why-master" title="Why start with a structured template?">
              <ul className="jt-bullet-list">
                <li>
                  <strong>Structure reduces ambiguity</strong> &mdash; templates prevent missing
                  critical sections
                </li>
                <li>
                  <strong>LLMs can be confidently wrong</strong> &mdash; guardrails help you catch
                  subtle errors
                </li>
                <li>
                  <strong>Validation is non-negotiable</strong> &mdash; accuracy builds developer
                  trust
                </li>
                <li>
                  <strong>Clear inputs produce better outputs</strong> &mdash; you&apos;re defining
                  the problem, constraints, and success criteria
                </li>
              </ul>
            </Section>

            <Section id="when-ai" title="Where LLMs help vs. where they create risk">
              <div className="jt-two-column-grid">
                <div>
                  <h4 className="jt-column-title jt-success">
                    &#10003; It&apos;s useful when you:
                  </h4>
                  <ul className="jt-bullet-list">
                    <li>Understand the JIRA template structure and requirements</li>
                    <li>Use well-engineered prompts with specific instructions</li>
                    <li>Need to convert rough technical notes into user-friendly language</li>
                    <li>Want to ensure no critical sections are overlooked</li>
                    <li>Require consistency across multiple features</li>
                  </ul>
                </div>
                <div>
                  <h4 className="jt-column-title jt-error">
                    &#10007; It creates problems when you:
                  </h4>
                  <ul className="jt-bullet-list">
                    <li>Don&apos;t understand what each template section requires</li>
                    <li>Copy output without reviewing for accuracy and completeness</li>
                    <li>Assume AI understands your specific context and constraints</li>
                    <li>Skip validation because &ldquo;AI wrote it&rdquo;</li>
                    <li>Use it as a replacement instead of an assistant</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section id="how-works" title="How this toolkit works">
              <p className="jt-description">
                These prompts were engineered to direct AI responses by providing:
              </p>
              <ul className="jt-bullet-list">
                <li>
                  <strong>Schema-driven output</strong> &mdash; structured sections that keep drafts
                  consistent
                </li>
                <li>
                  <strong>Constraints &amp; anti-patterns</strong> &mdash; explicit instructions for
                  what to avoid
                </li>
                <li>
                  <strong>Human-in-the-loop checks</strong> &mdash; accuracy, testability, and
                  completeness
                </li>
                <li>
                  <strong>Refinement prompts</strong> &mdash; targeted improvements without restarting
                </li>
              </ul>
              <div className="jt-info-box">
                <p>
                  <strong>Why this matters for AI developer documentation:</strong> The same prompt +
                  validation pattern used here can generate first drafts for API reference pages, SDK
                  quickstarts, integration guides, and workshop labs&mdash;while keeping correctness
                  and developer trust as the primary guardrails.
                </p>
              </div>
            </Section>

            <Section id="using" title="Workflow: draft, refine, validate">
              <ol className="jt-numbered-list">
                <li>
                  <strong>1.</strong> Choose the right prompt from the Ready-made prompts based on
                  your situation
                </li>
                <li>
                  <strong>2.</strong> Use any GenAI tool you want
                </li>
                <li>
                  <strong>3.</strong> Fill in your specific details in the prompt template
                </li>
                <li>
                  <strong>4.</strong> Submit and review the output carefully - Remember, you&apos;re
                  the expert
                </li>
                <li>
                  <strong>5.</strong> Refine using Quick refinement prompts to address gaps or issues
                </li>
                <li>
                  <strong>6.</strong> Validate completeness with the Validation checklist prompt
                </li>
                <li>
                  <strong>7.</strong> Publish the validated output in the appropriate format (spec,
                  doc page, PRD, tutorial, or API guide)
                </li>
              </ol>

              <TipBox>
                <p>
                  You can also use one of the <strong>context-specific prompts</strong> for backend,
                  UI, and integration features.
                </p>
              </TipBox>

              <SubSection id="llm-integration" title="For LLM + vector database integrations">
                <p className="jt-description">
                  <strong>Purpose:</strong> Produce developer-ready integration documentation with
                  clear steps, assumptions, and validation.
                </p>
                <p className="jt-description">
                  <strong>Best for:</strong> RAG workflows, embeddings pipelines, retrieval
                  configuration, and safety constraints.
                </p>
                <CodeBlock
                  id="llm-integration-prompt"
                  code={`You are writing a developer guide for integrating an LLM with a vector database.

Inputs:
- Use case: [semantic search / RAG / classification / moderation]
- Model: [model name + constraints]
- Vector DB: [system + index type]
- Embeddings: [model + dimension]
- Data flow: [ingest -> embed -> store -> retrieve -> generate]
- Security/safety constraints: [PII handling, rate limits, abuse considerations]
- Success criteria: [latency, relevance, accuracy]

Output format:
1) Overview (what this enables, who it's for)
2) Architecture diagram description (components + responsibilities)
3) Step-by-step implementation (with code placeholders)
4) Configuration options (what to tune and why)
5) Validation & troubleshooting (how to verify it works)
6) Safety & misuse considerations (what to watch for)
7) Acceptance criteria / success metrics (measurable)

Rules:
- Do not invent APIs. If an endpoint or method isn't provided, insert a TODO marker.
- Use clear language and define terms briefly.
- Include explicit assumptions and prerequisites.`}
                />
              </SubSection>

              <ReminderBox>
                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  You are responsible for:
                </p>
                <ul className="jt-checklist">
                  <li>&#10003; Verifying technical correctness and constraints</li>
                  <li>&#10003; Ensuring examples and criteria are testable</li>
                  <li>&#10003; Removing speculation and unsupported claims</li>
                  <li>
                    &#10003; Confirming the output matches the intended audience (devs vs. partners)
                  </li>
                </ul>
              </ReminderBox>
            </Section>

            <Section id="prompts" title="Prompt templates">
              <SubSection id="comprehensive" title="Comprehensive prompt">
                <p className="jt-description">
                  <strong>When to use:</strong> Creating complete JIRA features with structured
                  inputs.
                </p>
                <p className="jt-description">
                  <strong>Best for:</strong> New features, major updates, or when you have detailed
                  information.
                </p>
                <CodeBlock
                  id="comp-prompt"
                  code={`Use clear, non-technical language focused on user value to generate a JIRA feature description based on these inputs:

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
• Users should be able to [specific capability with success metric]`}
                />
              </SubSection>

              <SubSection id="simple" title="Simple input form">
                <p className="jt-description">
                  <strong>When to use:</strong> Brainstorming, early ideas, or conversational
                  approach.
                </p>
                <p className="jt-description">
                  <strong>Best for:</strong> Converting rough concepts into structured features.
                </p>
                <CodeBlock
                  id="simple-prompt"
                  code={`Fill this out and I'll generate your JIRA feature using the structured output template:

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
[Same template structure as above]`}
                />
              </SubSection>

              <SubSection id="one-line" title="One-line feature generator">
                <p className="jt-description">
                  <strong>When to use:</strong> Sprint planning, rapid documentation, or
                  well-understood features.
                </p>
                <p className="jt-description">
                  <strong>Best for:</strong> Quick turnaround when you have a clear, simple feature.
                </p>
                <CodeBlock
                  id="one-line-prompt"
                  code={`Generate a complete JIRA feature for: "[feature name] that helps [user type] to [do something] by [how it works] because [problem it solves]. Contact: [name]"

Include both description and acceptance criteria sections using the following structured template.

=== STRUCTURED OUTPUT TEMPLATE ===
[Same template structure as above]`}
                />
              </SubSection>

              <SubSection id="convert" title="Convert engineer notes">
                <p className="jt-description">
                  <strong>When to use:</strong> You have rough technical notes that need organization.
                </p>
                <p className="jt-description">
                  <strong>Best for:</strong> Transforming existing documentation into structured
                  features.
                </p>
                <CodeBlock
                  id="convert-prompt"
                  code={`Convert these engineering notes into a proper JIRA feature:

[paste technical notes]

Structure it with all required sections and user-focused language. Translate technical concepts into user benefits and actionable acceptance criteria.

=== STRUCTURED OUTPUT TEMPLATE ===
[Same template structure as above]`}
                />
              </SubSection>
            </Section>

            <Section id="context-specific" title="Context-specific prompts">
              <p className="jt-description">
                Different feature types need tailored documentation approaches to avoid common
                pitfalls:
              </p>

              <SubSection id="backend" title="For backend features">
                <p className="jt-description">
                  <strong>Purpose:</strong> Highlight user benefits from performance improvements
                  without technical jargon.
                </p>
                <p className="jt-description">
                  <strong>Avoids:</strong> Jargon walls and information starvation about user impact.
                </p>
                <CodeBlock
                  id="backend-prompt"
                  code={`I'm building a backend feature:
- Technical: [what it does]
- User impact: [what changes for users]
- Performance gain: [metrics]
- Developer: [name]

Generate a user-focused JIRA description that explains the value without mentioning the technical implementation. Focus on how users experience the improvement.`}
                />
              </SubSection>

              <SubSection id="ui" title="For UI features">
                <p className="jt-description">
                  <strong>Purpose:</strong> Emphasize visual changes and user interactions.
                </p>
                <p className="jt-description">
                  <strong>Avoids:</strong> Kitchen sink features by focusing on specific workflows.
                </p>
                <CodeBlock
                  id="ui-prompt"
                  code={`I'm adding a UI feature:
- New element: [what I'm adding]
- Location: [where it appears]
- User action: [what users can do]
- Solves: [what problem]
- Developer: [name]

Generate a JIRA feature focusing on the user workflow improvement and visual experience.`}
                />
              </SubSection>

              <SubSection id="integration" title="For integration features">
                <p className="jt-description">
                  <strong>Purpose:</strong> Explain how external services benefit users without
                  technical details.
                </p>
                <p className="jt-description">
                  <strong>Avoids:</strong> Information starvation about why integration matters.
                </p>
                <CodeBlock
                  id="integration-prompt"
                  code={`I'm integrating with [service]:
- Enables users to: [capability]
- Replaces: [current manual process]
- Saves: [time/effort metric]
- Developer: [name]

Generate a JIRA feature that explains the user value without technical integration details.`}
                />
              </SubSection>
            </Section>

            <Section id="refinement" title="Quick refinement prompts">
              <p className="jt-description">
                Use these to improve existing JIRA features without starting from scratch.
              </p>

              <div className="jt-refinement-section">
                <div>
                  <h4 className="jt-refinement-title">Make it less technical</h4>
                  <CodeBlock
                    id="less-tech"
                    code={`Rewrite this JIRA description to be more user-friendly.

Remove all technical terms and focus on what users can do and why they care. Translate technical benefits into user value.

[paste existing content to refine]`}
                  />
                </div>

                <div>
                  <h4 className="jt-refinement-title">Add missing sections</h4>
                  <CodeBlock
                    id="add-sections"
                    code={`This JIRA feature is missing [validation/risks/acceptance criteria].

Generate the missing sections based on the existing content and our template requirements.

[paste existing content]`}
                  />
                </div>

                <div>
                  <h4 className="jt-refinement-title">Strengthen user benefits</h4>
                  <CodeBlock
                    id="strengthen"
                    code={`Rewrite the user benefits section to be more specific and measurable. Focus on concrete improvements to the user experience.

Current benefits: [paste current benefits]
Context: [brief description of the feature]`}
                  />
                </div>
              </div>
            </Section>

            <Section id="validation" title="Validation checklist prompt">
              <p className="jt-description">
                <strong>When to use:</strong> Quality check before submitting your JIRA feature.
              </p>
              <p className="jt-description" style={{ fontWeight: 600 }}>
                This is your final safety net - use it every time.
              </p>
              <CodeBlock
                id="validation-prompt"
                code={`Check if this JIRA feature meets our quality standards:

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

Flag what's missing or needs improvement. Rate the overall quality from 1-10 and explain your reasoning.`}
              />
            </Section>

            <Section id="remember" title="Human-in-the-loop: you own correctness">
              <p className="jt-description">
                GenAI is your writing assistant, not your replacement. You remain the subject matter
                expert responsible for:
              </p>
              <ul className="jt-bullet-list">
                <li>
                  &#10003; <strong>Technical accuracy</strong> - Does the solution actually work this
                  way?
                </li>
                <li>
                  &#10003; <strong>User benefit validation</strong> - Are these benefits real and
                  achievable?
                </li>
                <li>
                  &#10003; <strong>Testable criteria</strong> - Can QA actually test these acceptance
                  criteria?
                </li>
                <li>
                  &#10003; <strong>Problem authenticity</strong> - Does this problem statement reflect
                  real user pain?
                </li>
                <li>
                  &#10003; <strong>Risk assessment</strong> - Are these the right risks to worry
                  about?
                </li>
              </ul>

              <div className="jt-info-box">
                <p>
                  <strong>Great features start with great documentation.</strong> Your JIRA feature is
                  a contract with your team - make it clear, make it complete, and make it count.
                </p>
              </div>
            </Section>
          </div>
        </main>
      </div>
    </div>
  )
}
