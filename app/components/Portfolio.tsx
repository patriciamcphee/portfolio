'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { FileText, Palette, Globe, Package, ExternalLink, Code2, Info, GitBranch, PenTool, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

// --- Types ---

interface AboutContent {
  problem: string;
  solution: string;
  role: string;
  outcome: string;
  constraints?: string;
}

interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
  linkLabel?: string;
  repo?: string;
  figma?: string;
  about: AboutContent;
}

interface PortfolioSection {
  category: string;
  icon: React.ElementType;
  color: string;
  items: PortfolioItem[];
}

// --- About modal content ---

const portfolioItems: PortfolioSection[] = [
  {
    category: 'Technical Writing',
    icon: FileText,
    color: 'teal',
    items: [
      {
        title: 'API Reference Documentation',
        description:
          'Documentation that provides a data access layer for Azure CosmosDB in the UserLens Insights platform. Includes API reference for organizations, teams, projects, participants, documents, synthesis, billing, and feedback management.',
        tags: ['API', 'REST', 'CosmosDB', 'OpenAPI'],
        link: '/api/',
        about: {
          problem:
            'Backend developers integrating with a multi-tenant SaaS platform need accurate, navigable API reference — but source code alone doesn\'t communicate intent, constraints, error behavior, or the relationships between service domains. Without structured documentation, integration work stalls and support burden shifts to the engineering team.',
          solution:
            'Comprehensive API reference documentation for two distinct layers of the UserLens Insights platform: the Scout AI REST API — covering 11 endpoints across chat, synthesis, persona generation, and research analysis — and the CosmosDB Service Module, documenting 60+ methods across 11 service domains including organizations, teams, projects, participants, billing, and authentication.',
          role:
            'Sole technical writer and product owner. Derived documentation structure and content through source code analysis, hands-on testing, and direct platform work — with no prior documentation baseline to build from.',
          outcome:
            'Two reference documents that give backend developers and internal contributors a reliable, domain-organized starting point for integration work — reducing the need for direct engineering team access to answer implementation questions.',
          constraints:
            'No documentation existed before this work began. Both APIs were actively evolving, requiring content to be revised frequently as the platform changed. No user research was conducted, so documentation scope and structure were derived from source code analysis and anticipated developer workflows rather than validated needs. Engineering team access was limited throughout.',
        },
      },
      {
        title: 'SDK Integration Guides',
        description:
          'Scout AI is an Azure Function–based REST API that provides AI-powered UX research assistance using Anthropic Claude.',
        tags: ['SDK', 'TypeScript', 'Azure', 'Anthropic'],
        link: '/sdk/scout-ai-client-sdk',
        linkLabel: 'View sample',
        repo: 'https://github.com/patriciamcphee/scout-ai-sdk',
        about: {
          problem:
            'Developers building UX research tooling have no straightforward way to integrate AI-powered research assistance without standing up their own model infrastructure. Scout AI exposes that capability as a REST API, but without an SDK integration guide, developers had no clear path from authentication to a working implementation.',
          solution:
            'A structured SDK integration guide covering authentication, core endpoints, request and response patterns, error handling, and practical code examples — written to get developers from zero to a working Scout AI integration as efficiently as possible.',
          role:
            'Sole technical writer and product owner. Designed the documentation architecture and authored all content from scratch, working directly from the API source and hands-on testing.',
          outcome:
            'A complete integration reference that gives developers the context and code samples needed to evaluate, integrate, and troubleshoot Scout AI without requiring direct support from the engineering team.',
          constraints:
            'No documentation existed when work began — structure, scope, and content decisions were made without a prior baseline. The API surface was actively evolving, meaning content required frequent revision to stay accurate. User research was not conducted, so documentation priorities were driven by the API\'s own structure and anticipated developer workflows rather than validated user needs. Engineering team access was limited, requiring accuracy to be established through direct API testing and source-level reading.',
        },
      },
      {
        title: 'Developer Portal Content',
        description: 'These samples represent a slice of the templating documentation built from the ground up — covering the tools template builders use most. Each topic was written for a technical audience that needed precision, not hand-holding.',
        tags: ['Developer Portal', 'Backstage', 'Enterprise'],
        link: '/developer-portal/',
        about: {
          problem:
            'Alchemy, Cigna\'s internal developer portal built on Backstage, had sparse and inconsistent documentation when platform adoption was actively growing. Template builders and platform engineers had no reliable reference for building, testing, or validating templates — slowing onboarding and increasing support burden on the platform team.',
          solution:
            'End-to-end documentation for Alchemy\'s templating ecosystem, covering TechDocs and MkDocs plugin configuration, the Template Editor workflow, the Form Playground for isolated parameter testing, and a structured starting point for new template development.',
          role:
            'Sole technical writer embedded with the platform team. Owned documentation strategy, content architecture, and authoring across the Alchemy developer portal for over two years.',
          outcome:
            'A reliable, searchable reference that reduced friction for template builders and gave platform engineers a consistent foundation to point teams to — supporting Alchemy adoption at enterprise scale.',
          constraints:
            'Alchemy was built without prior user research, which meant documentation had no validated understanding of how engineers actually thought about or approached the platform. Content decisions relied on proxy signals — support patterns, direct team feedback, and hands-on platform testing. Documentation also had to keep pace with a rapidly evolving Backstage platform inside a Docusaurus-based portal, where content was frequently outdated before it was finished. Access to the platform team was limited, so accuracy depended heavily on self-directed research and close reading of upstream Backstage source and community docs.',
        },
      },
    ],
  },
  {
    category: 'UI/UX Design',
    icon: Palette,
    color: 'eggplant',
    items: [
      {
        title: 'Backstage Sidebar Redesign',
        description:
          'Navigation redesign that reduced cognitive load and improved access to frequent actions—supporting faster task completion and smoother platform adoption.',
        tags: ['Information Architecture', 'UI Design', 'UX', 'Backstage'],
        link: '/portfolio/sidebar-redesign/',
        about: {
          problem:
            'The Backstage sidebar presented every available navigation item at once, with no hierarchy or grouping. Engineers scanning for specific tools had to read through unrelated entries, slowing down daily workflows.',
          solution:
            'Redesigned the sidebar information architecture with grouped, collapsible sections and role-aware ordering. Frequent actions surfaced at the top; advanced or infrequent items collapsed by default.',
          role: 'Led UX research, information architecture, and design. Facilitated stakeholder reviews and produced annotated design specs for the engineering team.',
          outcome:
            'Reduced navigation friction for the most common developer tasks. Adoption of previously buried platform features increased after launch.',
          constraints:
            'Internal enterprise project — changes required sign-off from multiple platform teams and had to remain backward-compatible with existing Backstage plugin structure.',
        },
      },
      {
        title: 'Backstage Create Page Redesign',
        description:
          'Platform adoption UX redesign: improved template discoverability with dynamic filters and interactive elements to reduce friction and increase self-service.',
        tags: ['Developer Experience', 'UI Design', 'UX', 'Backstage'],
        link: '/portfolio/create-page-redesign/',
        about: {
          problem:
            'The Backstage scaffolder Create page listed all templates in a flat, unfiltered list. Engineers couldn\'t quickly identify templates relevant to their team or stack, leading to low self-service adoption and high support overhead.',
          solution:
            'Redesigned the Create page with dynamic tag-based filters, category grouping, and richer template cards that surface ownership, stack, and usage guidance at a glance.',
          role: 'Led UX research, interaction design, and component spec. Collaborated with the platform engineering team on feasibility and handoff.',
          outcome:
            'Improved template discoverability and reduced support requests related to "which template do I use." Increased self-service scaffolding activity after rollout.',
          constraints:
            'Internal enterprise project constrained by Backstage\'s plugin architecture and an existing design system that required extension rather than replacement.',
        },
      },
    ],
  },
  {
    category: 'AI Tools',
    icon: Sparkles,
    color: 'ai',
    items: [
      {
        title: 'TechWrit AI',
        description:
          'A code-aware documentation platform that generates structured technical docs from source code, configs, and specs — enforcing style rules, glossary terms, and readability standards during generation, not after.',
        tags: ['SaaS', 'Documentation', 'AI', 'VS Code Extension', 'REST API'],
        link: 'https://techwrit.ai',
        about: {
          problem:
            'Engineers started using AI tools to generate documentation, but the output ignored style guides, skipped parameter tables, and used wrong terminology. Technical writers became human linters, giving the same feedback on every PR.',
          solution:
            'A documentation platform that takes 30 years of documentation standards and enforces them during generation. 14 documentation modes, 25 default style rules, a VS Code extension, and a REST API for CI/CD integration.',
          role: 'Sole founder, designer, and developer. Designed the product, built the platform, and launched independently in February 2026.',
          outcome:
            'Teams generate structured, style-compliant documentation directly from code — API references, how-to guides, tutorials, runbooks, and more — without post-generation cleanup.',
        },
      },
      {
        title: 'GenAI Toolkit for Feature Requirements',
        description:
          'A reusable prompt + validation pattern for turning messy technical inputs into structured, developer-ready JIRA feature specs — without sacrificing correctness.',
        tags: ['GenAI', 'Prompt Engineering', 'JIRA', 'Structured Output', 'Human-in-the-Loop'],
        link: '/portfolio/jira-toolkit/',
        linkLabel: 'View sample',
        about: {
          problem:
            'Engineers and product managers use AI tools to draft feature requirements, but the output is often vague, untestable, and missing critical sections. Without guardrails, teams ship specs that sound polished but lack accuracy and completeness.',
          solution:
            'A toolkit of engineered prompt templates with schema-driven output, explicit constraints, anti-patterns, and a validation checklist. Includes context-specific prompts for backend, UI, and integration features, plus refinement prompts for iterative improvement.',
          role: 'Designed and built the full toolkit — prompt templates, validation framework, and documentation. Applied prompt engineering principles: structured outputs, constraint injection, and human-in-the-loop verification.',
          outcome:
            'Teams produce consistent, testable feature specs in minutes instead of hours. The same pattern transfers to API docs, SDK guides, integration tutorials, and workshop materials.',
        },
      },
    ],
  },
  {
    category: 'Web Design',
    icon: Globe,
    color: 'sage',
    items: [
      {
        title: 'Landscaping Website',
        description: 'Full website design and development for landscaping company.',
        tags: ['Web Design', 'React', 'TypeScript', 'Tailwind CSS'],
        link: 'https://www.leaflinegarden.design/',
        about: {
          problem:
            'Small landscaping businesses often rely on generic templates or social media alone to attract clients — neither communicates the craft, intentionality, or sustainability focus that differentiates a custom design service from a standard lawn care company.',
          solution:
            'A custom business website for a Seattle-area landscape design company that leads with portfolio-driven storytelling, highlights eco-friendly and sustainable design options, and gives prospective clients a clear path to booking a consultation.',
          role:
            'Sole designer and developer. Built as a freelance project for a small business owner, from initial design through production launch.',
          outcome:
            'A professional web presence that reflects the quality of the work — positioning the business around custom garden design and sustainability rather than competing on price.',
        },
      },
      {
        title: 'Trellis Docs',
        description:
          'An opinionated docs framework built on Next.js with smart search, design tokens, and reusable components.',
        tags: ['Next.js', 'Documentation', 'Open Source'],
        link: 'https://www.trellisdocs.dev',
        repo: 'https://github.com/pixlngrid/trellis-docs',
        about: {
          problem:
            'Documentation frameworks treat content as static. Teams dealing with multiple audiences, evolving design systems, or large content libraries have no good way to manage reuse, consistency, or audits at scale.',
          solution:
            'An open-source Next.js 15 documentation framework built around reusable content variables, a design token pipeline, audience role tagging, and build-time fuzzy search. Includes a content audit export so teams can measure what they have.',
          role: 'Sole designer and developer. Built and shipped as a standalone open-source project under Pixl\'n Grid Studios.',
          outcome:
            'A framework that scales with content complexity — usable by teams who have outgrown basic docs tooling but don\'t need a full CMS.',
        },
      },
    ],
  },
  {
    category: 'NPM Packages',
    icon: Package,
    color: 'rust',
    items: [
      {
        title: 'Docs-as-Code Framework',
        description:
          'CLI tool for scaffolding a complete docs-as-code framework with opinionated defaults for technical writing teams.',
        tags: ['NPM', 'CLI', 'Node.js', 'Docs-as-Code', 'Open Source'],
        link: 'https://www.npmjs.com/package/create-trellis-docs',
        repo: 'https://github.com/pixlngrid/trellis-docs',
        about: {
          problem:
            'Most documentation frameworks treat content as static files. Teams managing multiple audiences, evolving design systems, or large content libraries have no built-in way to handle reuse, consistency, or audits at scale.',
          solution:
            'An open-source npm package built on Next.js 15 that brings reusable content variables, a design token pipeline, audience role tagging, and build-time fuzzy search to documentation projects. Includes a content audit export so teams can inventory and measure what they have.',
          role: 'Sole designer and developer. Built, published to npm, and shipped as a standalone open-source project under Pixl\'n Grid Studios.',
          outcome:
            'A drop-in framework that scales with content complexity — installable in minutes and designed for teams who have outgrown basic docs tooling but don\'t need a full CMS.',
        },
      },
      {
        title: 'Smart Search Plugin',
        description:
          'A powerful fuzzy search plugin for Docusaurus 3.x that provides real-time local search with section-level results.',
        tags: ['NPM', 'Fuse.js', 'Docusaurus', 'Open Source', 'JavaScript'],
        link: 'https://www.npmjs.com/package/smart-search-plugin',
        repo: 'https://github.com/patriciamcphee/smart-search-plugin',
        about: {
          problem:
            'Modern documentation search indexes entire documents, burying users in loosely related results. Developers working in firewall-restricted or offline environments can\'t rely on search-as-a-service tools like Algolia or Typesense at all.',
          solution:
            'A Docusaurus 3.x search plugin that revives metadata-driven search — the same principle that made XML-based help systems effective two decades ago. Keywords defined in front matter drive results, keeping them focused and intentional. No external APIs, no network dependency, no noise.',
          role: 'Sole designer and developer. Built, published to npm, and documented as an open-source project.',
          outcome:
            'A lightweight, offline-capable search plugin that gives documentation teams precise control over what surfaces in results — without sacrificing developer workflow.',
        },
      },
      {
        title: 'Lightbox Image Plugin',
        description:
          'A lightweight, zero-dependency image zoom plugin for Docusaurus 3.x that adds smooth click-to-zoom functionality to documentation images.',
        tags: ['NPM', 'Docusaurus', 'Open Source', 'JavaScript'],
        link: 'https://www.npmjs.com/package/lightbox-image-plugin',
        repo: 'https://github.com/patriciamcphee/lightbox-image-plugin',
        about: {
          problem:
            'Every image zoom plugin for Docusaurus applies zoom behavior to all images indiscriminately — including icons, inline graphics, and small UI elements that should never be zoomed.',
          solution:
            'A zero-dependency Docusaurus 3.x image zoom plugin that scopes zoom behavior to images you explicitly opt into via a CSS class. At ~3KB minified, it adds click-to-zoom, keyboard support, dark mode compatibility, and touch responsiveness — only where it\'s needed.',
          role: 'Sole designer and developer. Built, published to npm, and documented as an open-source project.',
          outcome:
            'A lightweight alternative that gives documentation authors precise control over zoom behavior without bloating every page with unnecessary interactions.',
        },
      },
    ],
  },
];

// --- Color helpers ---

const getColorClasses = (color: string) => {
  const colors: Record<string, { bg: string; text: string; icon: string }> = {
    teal: { bg: 'bg-brand-primary/10', text: 'text-brand-primary', icon: 'bg-brand-primary/15' },
    eggplant: { bg: 'bg-accent-eggplant/10', text: 'text-accent-eggplant', icon: 'bg-accent-eggplant/15' },
    sage: { bg: 'bg-accent-sage/10', text: 'text-accent-sage-dark', icon: 'bg-accent-sage/15' },
    rust: { bg: 'bg-accent-rust/10', text: 'text-accent-rust', icon: 'bg-accent-rust/15' },
    ai: { bg: 'bg-brand-primary-lighter/10', text: 'text-brand-primary-lighter', icon: 'bg-brand-primary-lighter/15' },
  };
  return colors[color];
};

// --- About modal ---

function AboutModal({
  item,
  open,
  onClose,
}: {
  item: PortfolioItem | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!item) return null;

  const fields: { label: string; key: keyof AboutContent }[] = [
    { label: 'Problem', key: 'problem' },
    { label: 'Solution', key: 'solution' },
    { label: 'My role', key: 'role' },
    { label: 'Outcome', key: 'outcome' },
    { label: 'Constraints', key: 'constraints' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg bg-neutral-white text-neutral-slate-900">
        <DialogHeader>
          <DialogTitle>{item.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {fields.map(({ label, key }) => {
            const value = item.about[key];
            if (!value) return null;
            return (
              <div key={key}>
                <p className="text-xs font-semibold uppercase tracking-wide text-neutral-slate-400 mb-1">
                  {label}
                </p>
                <p className="text-sm text-neutral-slate-700 leading-relaxed">{value}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-slate-100">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// --- Main component ---

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section ref={ref} id="portfolio" className="py-24 bg-neutral-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-slate-900 mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-neutral-slate-600 max-w-3xl mx-auto">
              Samples across technical writing, UI/UX design, AI tools, web development, and open-source tooling
            </p>
          </div>

          <div className="space-y-16">
            {portfolioItems.map((section, sectionIndex) => {
              const colorClasses = getColorClasses(section.color);
              const Icon = section.icon;

              return (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 ${colorClasses.icon} rounded-lg`}
                    >
                      <Icon className={`w-5 h-5 ${colorClasses.text}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-slate-900">{section.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: sectionIndex * 0.1 + itemIndex * 0.05,
                        }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                          <CardHeader>
                            <CardTitle className="text-lg">{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="flex flex-col flex-1 justify-between">
                            <div className="flex flex-wrap gap-2 mb-4">
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className="flex gap-2">
                                {item.link !== '#' && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 flex-1"
                                    asChild
                                  >
                                    <a
                                      href={item.link}
                                      target={item.link.startsWith('http') ? '_blank' : '_self'}
                                      rel="noopener noreferrer"
                                    >
                                      {item.linkLabel || (item.link.includes('npmjs.com') ? 'View on npm' : item.link.startsWith('http') ? 'View live' : item.link.startsWith('/portfolio/') ? 'Case study' : 'View sample')}
                                      <ExternalLink className="w-3 h-3" />
                                    </a>
                                  </Button>
                                )}
                                {item.repo && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 flex-1"
                                    asChild
                                  >
                                    <a
                                      href={item.repo}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View source
                                      <GitBranch className="w-3 h-3" />
                                    </a>
                                  </Button>
                                )}
                                {item.figma && (
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="gap-2 flex-1"
                                    asChild
                                  >
                                    <a
                                      href={item.figma}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      View in Figma
                                      <PenTool className="w-3 h-3" />
                                    </a>
                                  </Button>
                                )}
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="gap-2 w-full text-neutral-slate-500 hover:text-neutral-slate-800"
                                onClick={() => setActiveItem(item)}
                              >
                                <Info className="w-3 h-3" />
                                About this project
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* About modal */}
      <AboutModal
        item={activeItem}
        open={!!activeItem}
        onClose={() => setActiveItem(null)}
      />
    </section>
  );
}