'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

// ─── Data ─────────────────────────────────────────────────────────────────────

const companies = [
  'Microsoft',
  'Amazon',
  'Meta / Oculus',
  'GE Healthcare',
  'Beyond Identity',
  'Cigna',
];

const products = [
  {
    label: 'TechWrit AI',
    value:
      'A code-aware SaaS documentation platform with 14 generation and audit modes, a VS Code extension with inline style diagnostics, and a REST API for CI/CD pipeline integration. Style guide enforcement happens at generation time, not after.',
  },
  {
    label: 'Trellis Docs',
    value:
      'An open-source documentation framework built on Next.js 15 with reusable content variables, build-time design token processing, client-side fuzzy search, and audience role tagging — capabilities absent from every major competing framework.',
  },
];

const attributes = [
  {
    label: 'End-to-end ownership',
    value:
      'From content strategy through front-end implementation — Patricia doesn\u2019t hand off to engineers; she builds alongside them.',
  },
  {
    label: 'Platform thinking',
    value:
      'Whether inside an enterprise or as an independent founder, she builds systems designed to outlast any single project or team member.',
  },
  {
    label: 'Practitioner credibility',
    value:
      'TechWrit AI and Trellis Docs exist because she encountered genuine gaps in the tooling — and had the range to close them herself.',
  },
  {
    label: 'Cross-discipline range',
    value:
      'UX research, product design, AI integration, open-source development, and enterprise documentation strategy — few practitioners hold this combination.',
  },
];

const skills = [
  'Docs-as-code',
  'Information architecture',
  'Content strategy',
  'API documentation',
  'Developer portals',
  'Style governance',
  'UI microcopy',
  'Diataxis framework',
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10.5px] tracking-[0.15em] uppercase font-medium text-neutral-slate-500 dark:text-brand-primary-lighter mt-10 mb-2">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-normal mb-3 text-neutral-slate-900 dark:text-neutral-slate-100 leading-tight">
      {children}
    </h2>
  );
}

function ColumnCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 pt-3">
      <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-neutral-slate-500 dark:text-brand-primary-lighter mb-1">
        {label}
      </p>
      <p className="text-[0.93rem] leading-relaxed font-light text-neutral-slate-700 dark:text-neutral-slate-300 m-0">
        {value}
      </p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export function ExcellenceInPractice() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <article
      ref={ref}
      className="font-sans text-neutral-slate-900 dark:text-neutral-slate-100 max-w-[720px] mx-auto px-6 py-12 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Eyebrow */}
        <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-slate-500 dark:text-brand-primary-lighter mb-5 flex items-center gap-2.5">
          <span className="inline-block w-7 h-px bg-neutral-slate-500 dark:bg-brand-primary-lighter shrink-0" />
          Excellence in Practice
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-normal mb-2 text-neutral-slate-900 dark:text-neutral-slate-100">
          Patricia McPhee:{' '}
          <em className="italic text-neutral-slate-500 dark:text-brand-primary-lighter">
            The Architect of Developer Understanding
          </em>
        </h1>

        {/* Subheadline */}
        <p className="font-display text-base font-normal italic text-neutral-slate-500 dark:text-neutral-slate-400 mb-10 leading-relaxed max-w-[560px]">
          How two decades at the intersection of technical writing, engineering, and product design
          shaped a rare practitioner — and a builder.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Lede */}
        <p className="text-lg leading-[1.8] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-8 border-l-2 border-neutral-slate-300 dark:border-neutral-slate-600 pl-5">
          In most organizations, documentation is an afterthought. Patricia has spent over 15 years proving it doesn&apos;t have to be — and building the tools, systems, and frameworks to ensure it never is again.
        </p>

        {/* Background section */}
        <SectionLabel>Background</SectionLabel>
        <SectionTitle>A career at the frontier of developer experience</SectionTitle>
        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          Patricia&apos;s career defies easy categorization. She is a technical content
          manager, a developer experience practitioner, a platform builder, and a founder — and she
          holds all of these identities simultaneously, each one informing the others. Her 20-year
          track record spans some of the most demanding technical environments in the industry, where
          the standard she&apos;s held herself to has never been &ldquo;good enough
          documentation&rdquo; but rather &ldquo;documentation that developers actually use.&rdquo;
        </p>

        {/* Company tags */}
        <div className="flex flex-wrap gap-1.5 my-3 mb-5">
          {companies.map((name) => (
            <span
              key={name}
              className="text-xs font-medium px-2.5 py-0.5 bg-neutral-slate-100 dark:bg-neutral-slate-800 rounded-md text-neutral-slate-500 dark:text-neutral-slate-400"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          Across API platforms, cloud infrastructure, SaaS products, identity systems, and internal
          developer portals, Patricia has consistently operated where the technical stakes are highest
          and the cost of ambiguity is steepest.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Technical depth section */}
        <SectionLabel>Technical Depth</SectionLabel>
        <SectionTitle>Fluency across the full documentation lifecycle</SectionTitle>
        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          What sets Patricia apart from content practitioners who specialize in writing alone is the
          depth of her technical reach. She works directly in the systems she documents: authoring in
          Markdown and MDX, building in React and TypeScript, designing in Figma, wiring up CI/CD
          pipelines, and validating real-world API behavior in Postman and against OpenAPI specs. At
          Microsoft&apos;s Azure Dedicated team, she co-authored deployment documentation for Azure
          VMware Solution by working directly alongside Azure engineers and UX researchers to
          validate workflows firsthand.
        </p>

        {/* Pull quote */}
        <blockquote className="font-display text-xl italic leading-relaxed text-neutral-slate-500 dark:text-neutral-slate-400 border-t border-b border-neutral-slate-200 dark:border-neutral-slate-700 py-5 my-8">
          &ldquo;Documentation built from the outside in — written after the product is finished —
          is always a liability. Patricia&apos;s instinct is to build it from the inside out.&rdquo;
        </blockquote>

        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          At Cigna, she embedded within the Enterprise DevOps organization, taking ownership of
          Alchemy Docs — the documentation platform supporting Alchemy, Cigna&apos;s internal
          developer portal built on Backstage. Her contributions there extended well beyond writing:
          she architected the ContentOps Playbook, authored the enterprise style guide, contributed
          to portal UI redesign, and built content systems that could scale across multiple
          engineering teams with different cadences and ownership models.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Builder identity section */}
        <SectionLabel>Builder Identity</SectionLabel>
        <SectionTitle>From practitioner to founder: Pixl&apos;n Grid Studios</SectionTitle>
        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          The clearest expression of Patricia&apos;s capabilities is what she does when no one has
          asked her to do anything. Through her independent studio, Pixl&apos;n Grid Studios, she
          has designed and shipped two production-grade platforms that address problems she
          encountered in her own practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
          {products.map((p) => (
            <ColumnCard key={p.label} label={p.label} value={p.value} />
          ))}
        </div>

        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5 mt-5">
          Both platforms emerged from real practitioner pain: the gap between what documentation
          tooling promises and what it actually delivers at scale. TechWrit AI was launched publicly
          in February 2026 and is live at{' '}
          <a
            href="https://techwrit.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary-lighter hover:text-brand-primary hover:underline"
          >
            techwrit.ai
          </a>
          . Trellis Docs is available as an open-source project with an active public repository.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Approach section */}
        <SectionLabel>Approach</SectionLabel>
        <SectionTitle>Strategy, structure, and the system behind the sentence</SectionTitle>
        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          Patricia&apos;s approach to documentation is fundamentally architectural. Whether she is
          establishing an information hierarchy for an internal developer portal, designing a
          Diataxis-aligned content structure for an API reference, or defining metadata naming
          conventions for Backstage software templates, she thinks in systems before she thinks in
          sentences. The result is documentation that remains coherent and maintainable across team
          changes, product iterations, and organizational growth.
        </p>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 my-6">
          {skills.map((name) => (
            <span
              key={name}
              className="text-xs font-normal px-3 py-1 border border-neutral-slate-200 dark:border-neutral-slate-700 rounded-full text-neutral-slate-500 dark:text-neutral-slate-400 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>

        <p className="text-[0.97rem] leading-[1.85] text-neutral-slate-700 dark:text-neutral-slate-300 font-light mb-5">
          Her content operations work at Cigna illustrates this systemic instinct clearly. Rather
          than producing documentation in isolation, she built the infrastructure — playbooks, style
          standards, publishing workflows — that allows documentation quality to be a property of the
          system, not just the individual contributor. That is a fundamentally different kind of
          contribution, and a far more durable one.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Recognition section */}
        <SectionLabel>Industry Recognition</SectionLabel>
        <SectionTitle>What the body of work demonstrates</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
          {attributes.map((a) => (
            <ColumnCard key={a.label} label={a.label} value={a.value} />
          ))}
        </div>


        {/* Closer */}
        <p className="font-display text-base italic text-neutral-slate-500 dark:text-neutral-slate-400 mt-10 pt-6 border-t border-neutral-slate-200 dark:border-neutral-slate-700 leading-[1.7]">
          The software industry has no shortage of people who can write about technology. Patricia represents something rarer: a practitioner who understands technology well enough to build it, and cares enough about developer experience to make the documentation itself part
          of the product.
        </p>
      </motion.div>
    </article>
  );
}
