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
      'An open-source documentation framework built on Next.js 15 with reusable content variables, build-time design token processing, client-side fuzzy search, and audience role tagging.',
  },
];

const attributes = [
  {
    label: 'End-to-end ownership',
    value:
      'I don’t hand off to engineers — I build alongside them, from content strategy through front-end implementation.',
  },
  {
    label: 'Platform thinking',
    value:
      'Whether inside an enterprise or as an independent founder, I build systems designed to outlast any single project or team member.',
  },
  {
    label: 'Why I build tools',
    value:
      'TechWrit AI and Trellis Docs exist because I ran into real gaps in the tooling — and had the skills to close them myself.',
  },
  {
    label: 'Cross-discipline range',
    value:
      'My work spans UX research, product design, AI integration, open-source development, and enterprise documentation strategy.',
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
    <p className="text-xs tracking-widest uppercase font-medium text-neutral-slate-500 dark:text-brand-primary-lighter mt-10 mb-2">
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-semibold mb-3 text-neutral-slate-900 dark:text-neutral-slate-100 leading-tight">
      {children}
    </h2>
  );
}

function ColumnCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 pt-3">
      <p className="text-xs font-medium tracking-wider uppercase text-neutral-slate-500 dark:text-brand-primary-lighter mb-1">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 m-0">
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
        <div className="text-xs font-medium tracking-widest uppercase text-neutral-slate-500 dark:text-brand-primary-lighter mb-5 flex items-center gap-2.5">
          <span className="inline-block w-7 h-px bg-neutral-slate-500 dark:bg-brand-primary-lighter shrink-0" />
          About
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl leading-tight font-semibold mb-2 text-neutral-slate-900 dark:text-neutral-slate-100">
          I build documentation systems,{' '}
          <em className="italic text-neutral-slate-500 dark:text-brand-primary-lighter">
            not just documentation.
          </em>
        </h1>

        {/* Subheadline */}
        <p className="font-display text-base font-normal italic text-neutral-slate-500 dark:text-neutral-slate-400 mb-10 leading-relaxed max-w-[560px]">
          Two decades at the intersection of technical writing, engineering, and product design —
          now focused on AI-assisted content operations.
        </p>

        {/* Lede */}
        <p className="text-lg leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-8 border-l-2 border-neutral-slate-300 dark:border-neutral-slate-600 pl-5">
          In most organizations, documentation is an afterthought. I&apos;ve spent over 20 years proving it doesn&apos;t have to be, building the tools, systems, and processes that make it part of how a team ships, not something bolted on at the end.
        </p>

        {/* Background section */}
        <SectionLabel>Background</SectionLabel>
        <SectionTitle>A career at the frontier of developer experience</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          My career doesn&apos;t fit one job title. I have a degree in computer science
          and over 20 years in the industry, and I work as a technical content
          manager, a developer experience practitioner, and a platform builder, often at the same time. That
          computer science background shapes how I approach every project: I read the code, understand the
          architecture, and document systems from the inside out rather than the outside in.
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

        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          Across API platforms, cloud infrastructure, SaaS products, identity systems, and internal
          developer portals, I&apos;ve consistently worked on problems where the technical stakes are highest
          and the cost of ambiguity is steepest.
        </p>

        {/* Technical depth section */}
        <SectionLabel>Technical depth</SectionLabel>
        <SectionTitle>Fluency across the full documentation lifecycle</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          What sets me apart from content practitioners who specialize in writing alone is the
          depth of my technical reach. I work directly in the systems I document: authoring in
          Markdown and MDX, building in React and TypeScript, designing in Figma, wiring up CI/CD
          pipelines, and validating real-world API behavior in Postman and against OpenAPI specs. At
          Microsoft&apos;s Azure Dedicated team, I co-authored deployment documentation for Azure
          VMware Solution by working directly alongside Azure engineers and UX researchers to
          validate workflows firsthand.
        </p>

        {/* Pull quote */}
        <blockquote className="font-display text-xl italic leading-relaxed text-neutral-slate-500 dark:text-neutral-slate-400 border-t border-b border-neutral-slate-200 dark:border-neutral-slate-700 py-5 my-8">
          &ldquo;Documentation built from the outside in — written after the product is finished —
          is always a liability. My instinct is to build it from the inside out.&rdquo;
        </blockquote>

        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          At Cigna (November 2023–May 2026), I worked within the Enterprise DevOps organization,
          owning Alchemy Docs, the documentation platform supporting Alchemy, Cigna&apos;s
          internal developer portal built on Backstage. My work there went well beyond
          writing: I built the ContentOps Playbook, wrote the enterprise style guide,
          contributed to portal UI redesign, designed the prompt and content architecture for the
          DevOps Communications Utility, and built content systems that scaled across multiple
          engineering teams with different cadences and ownership models.
        </p>

        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          I&apos;m now a Senior Technical Content PM (contract) at Microsoft, focused on
          AI-assisted content workflows and content operations for learn.microsoft.com.
        </p>

        {/* Builder identity section */}
        <SectionLabel>Building my own tools</SectionLabel>
        <SectionTitle>From practitioner to founder: Pixl&apos;n Grid Studios</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          The clearest sign of how I work is what I build when no one has asked me to. Through my
          independent studio, Pixl&apos;n Grid Studios, I&apos;ve designed and shipped two
          production-grade platforms that address problems I ran into in my own practice.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
          {products.map((p) => (
            <ColumnCard key={p.label} label={p.label} value={p.value} />
          ))}
        </div>

        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5 mt-5">
          Both platforms came out of the same problem: the gap between what documentation
          tooling promises and what it actually delivers at scale. I launched TechWrit AI publicly
          in February 2026, and it&apos;s live at{' '}
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

        {/* Approach section */}
        <SectionLabel>Approach</SectionLabel>
        <SectionTitle>Strategy, structure, and the system behind the sentence</SectionTitle>
        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          My approach to documentation is fundamentally architectural. Whether I&apos;m
          establishing an information hierarchy for an internal developer portal, designing a
          Diataxis-aligned content structure for an API reference, or defining metadata naming
          conventions for Backstage software templates, I think in systems before I think in
          sentences. The result is documentation that stays coherent and maintainable across team
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

        <p className="text-base leading-relaxed text-neutral-slate-700 dark:text-neutral-slate-300 mb-5">
          My content operations work at Cigna is a clear example of that instinct. Rather
          than producing documentation in isolation, I built the infrastructure, playbooks, style
          standards, and publishing workflows, that make documentation quality a property of the
          system, not just the person writing that day.
        </p>

        {/* Recognition section */}
        <SectionLabel>What this adds up to</SectionLabel>
        <SectionTitle>What I bring to a team</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-5">
          {attributes.map((a) => (
            <ColumnCard key={a.label} label={a.label} value={a.value} />
          ))}
        </div>

        {/* Closer */}
        <p className="font-display text-base italic text-neutral-slate-500 dark:text-neutral-slate-400 mt-10 pt-6 border-t border-neutral-slate-200 dark:border-neutral-slate-700 leading-relaxed">
          The software industry doesn&apos;t lack people who can write about technology. What I bring is
          the ability to build it too, and the conviction that documentation belongs inside the
          product, not bolted onto the end of it.
        </p>
      </motion.div>
    </article>
  );
}
