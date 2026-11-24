'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowUpRight,
  Check,
  FileText,
  Layers3,
  PenTool,
  Workflow,
} from 'lucide-react'
import { docVariables } from '@/config/variables'

const proofPoints = [
  { value: '20+', label: 'years in developer content' },
  { value: '6', label: 'enterprise brands' },
  { value: '2', label: 'products built and shipped' },
  { value: '14', label: 'AI content workflows' },
]

const companies = ['Microsoft', 'Amazon', 'Meta', 'Cigna', 'GE Healthcare', 'Beyond Identity']

const selectedWork = [
  {
    eyebrow: 'AI content operations',
    title: 'A communications system built for enterprise DevOps',
    description:
      'Prompt architecture and reusable content workflows that help technical teams communicate with greater speed and consistency.',
    image: '/img/devops_comms_utility_infographic.png',
    href: '/portfolio/devops-comms-utility',
    accent: 'bg-accent-coral',
  },
  {
    eyebrow: 'Platform strategy',
    title: 'TechWrit AI: governance built into generation',
    description:
      'A code-aware documentation platform with generation, audit, style, and CI/CD workflows designed around real content operations.',
    image: '/img/content-audit-output.png',
    href: '/portfolio/techwrit-ai-platform',
    accent: 'bg-accent-moss-green',
  },
  {
    eyebrow: 'Product design',
    title: 'Reframing a complex Backstage creation flow',
    description:
      'A UX redesign that turns an intimidating developer workflow into a clearer, more guided product experience.',
    image: '/img/CreatePageRedesign2.png',
    href: '/portfolio/create-page-redesign',
    accent: 'bg-brand-primary-lightest',
  },
]

const capabilities = [
  {
    icon: Layers3,
    number: '01',
    title: 'Content systems',
    description:
      'Information architecture, governance, and publishing models that stay coherent as products and teams grow.',
  },
  {
    icon: Workflow,
    number: '02',
    title: 'AI-assisted operations',
    description:
      'Practical workflows that bring automation into content production without sacrificing quality or editorial control.',
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Developer experience',
    description:
      'API documentation, developer portals, and product UX built from direct technical understanding—not secondhand notes.',
  },
]

export function Hero() {
  return (
    <div className="overflow-hidden bg-[#f4f0e8] text-[#172126] dark:bg-[#121a1d] dark:text-[#f4f0e8]">
      <section className="relative border-b border-[#172126]/15 dark:border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(#172126 1px, transparent 1px), linear-gradient(90deg, #172126 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative mx-auto grid max-w-[1440px] lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center px-6 py-20 sm:px-10 lg:min-h-[760px] lg:px-16 lg:py-24 xl:px-24"
          >
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#526269] dark:text-[#aebcbf]">
              <span className="h-2.5 w-2.5 rounded-full bg-accent-coral" />
              Technical content leadership · AI systems
            </div>

            <h1 className="max-w-4xl text-[clamp(3.25rem,7vw,6.75rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              Complex platforms,
              <span className="mt-2 block font-normal italic text-accent-rust dark:text-accent-coral">
                made clear.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-8 text-[#4c5a60] dark:text-[#bdc7c9] sm:text-xl">
              I build the documentation systems, AI-assisted workflows, and developer experiences
              that turn technical complexity into confident action.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio-overview"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-[#172126] px-7 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-accent-coral dark:text-[#172126]"
              >
                Explore selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={docVariables.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-13 items-center justify-center gap-3 rounded-full border border-[#172126]/25 px-7 text-sm font-semibold transition-colors hover:bg-white/70 dark:border-white/20 dark:hover:bg-white/5"
              >
                <FileText className="h-4 w-4" />
                View résumé
              </a>
            </div>

            <div className="mt-14 flex items-center gap-3 text-sm text-[#526269] dark:text-[#aebcbf]">
              <Check className="h-4 w-4 text-accent-rust dark:text-accent-coral" />
              Available for remote content leadership opportunities
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative min-h-[650px] overflow-hidden bg-[#172126] lg:min-h-[760px]"
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="absolute left-6 right-6 top-7 flex items-center justify-between text-white sm:left-8 sm:right-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-accent-coral">
                  Product proof
                </p>
                <p className="mt-1 font-display text-2xl font-semibold">TechWrit AI</p>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Built &amp; shipped
              </span>
            </div>

            <div className="absolute left-6 right-6 top-[104px] overflow-hidden rounded-2xl border border-white/15 bg-[#f8fafc] shadow-2xl sm:left-8 sm:right-8">
              <div className="flex h-9 items-center gap-1.5 border-b border-slate-200 bg-white px-4">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ef8e7a]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d6a66c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#8ba37e]" />
                <span className="ml-3 text-[9px] font-medium uppercase tracking-[0.16em] text-slate-400">
                  Rewrite workspace
                </span>
              </div>
              <Image
                src="/img/techwrit-rewrite-interface.png"
                alt="TechWrit AI rewrite workspace showing terminology validation, readability analysis, and a text diff"
                width={972}
                height={944}
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="h-auto w-full"
              />
            </div>

            <div className="absolute -right-10 bottom-7 w-[76%] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:-right-8 sm:bottom-9">
              <div className="flex h-7 items-center justify-between border-b border-slate-200 px-3">
                <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Style governance
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent-coral" />
              </div>
              <Image
                src="/img/techwrit-style-rules.png"
                alt="TechWrit AI style rules settings with tone, clarity, formatting, and structure categories"
                width={868}
                height={569}
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="h-auto w-full"
              />
            </div>

            <div className="absolute -left-5 bottom-14 w-[42%] rotate-[-3deg] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:-left-3 sm:bottom-20">
              <Image
                src="/img/techwrit-api-keys.png"
                alt="TechWrit AI API key management interface"
                width={512}
                height={400}
                sizes="(max-width: 1024px) 38vw, 18vw"
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#172126]/15 bg-[#172126] text-white dark:border-white/10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 divide-x divide-white/10 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div key={point.label} className="px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
              <p className="font-display text-4xl font-semibold text-accent-coral sm:text-5xl">
                {point.value}
              </p>
              <p className="mt-2 max-w-40 text-xs font-medium uppercase leading-5 tracking-[0.14em] text-white/60">
                {point.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <div className="mx-auto max-w-[1248px]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-rust dark:text-accent-coral">
                Selected work
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl">
                Systems that make complicated work feel simple.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#5e6a6f] dark:text-[#aebcbf]">
              Strategy is only useful when it ships. These projects connect research, content,
              product design, and implementation.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {selectedWork.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group overflow-hidden rounded-[1.75rem] border border-[#172126]/15 bg-white/70 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <Link href={project.href} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#d9ddd8]">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <span className={`absolute left-5 top-5 h-3 w-3 rounded-full ${project.accent}`} />
                  </div>
                  <div className="p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent-rust dark:text-accent-coral">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.02em]">
                      {project.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#5e6a6f] dark:text-[#aebcbf]">
                      {project.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                      Read case study
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e7dfd1] px-6 py-20 dark:bg-[#1b272b] sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <div className="mx-auto max-w-[1248px]">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-rust dark:text-accent-coral">
                What I bring
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Not just the words. The system behind them.
              </h2>
            </div>
            <div className="divide-y divide-[#172126]/15 border-y border-[#172126]/15 dark:divide-white/10 dark:border-white/10">
              {capabilities.map((capability) => {
                const Icon = capability.icon
                return (
                  <div key={capability.title} className="grid gap-5 py-7 sm:grid-cols-[48px_1fr_auto] sm:items-start">
                    <Icon className="h-6 w-6 text-accent-rust dark:text-accent-coral" />
                    <div>
                      <h3 className="text-xl font-semibold">{capability.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5e6a6f] dark:text-[#aebcbf]">
                        {capability.description}
                      </p>
                    </div>
                    <span className="font-display text-sm text-[#7b8589]">{capability.number}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#172126]/15 py-7 dark:border-white/10">
        <div className="mx-auto flex max-w-[1248px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-sm font-semibold tracking-[-0.01em] text-[#6f797d] dark:text-[#8f9da1] sm:justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-rust dark:text-accent-coral">
            Experience includes
          </span>
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28 xl:px-24">
        <div className="mx-auto flex max-w-[1248px] flex-col items-start justify-between gap-10 rounded-[2rem] bg-accent-coral p-8 text-[#172126] sm:p-12 lg:flex-row lg:items-end lg:p-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em]">Have a complex story to tell?</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-[-0.04em] sm:text-6xl">
              Let&apos;s make it useful, scalable, and impossible to ignore.
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-[#172126] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Start a conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
