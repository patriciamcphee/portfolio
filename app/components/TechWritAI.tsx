'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import {
  FileCode,
  CheckCircle2,
  BookOpen,
  Layers,
  Zap,
  Terminal,
  FileText
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function TechWritAI() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: FileCode,
      title: '14 Documentation Modes',
      description: 'API references, how-to guides, tutorials, runbooks, troubleshooting guides, and more'
    },
    {
      icon: CheckCircle2,
      title: 'Style Guide Enforcement',
      description: '25 default rules enforcing terminology, structure, and readability during generation'
    },
    {
      icon: Terminal,
      title: 'VS Code Extension',
      description: 'Generate documentation directly in your editor without context switching'
    },
    {
      icon: Zap,
      title: 'CI/CD Integration',
      description: 'REST API for automated documentation generation in your build pipeline'
    },
    {
      icon: Layers,
      title: 'Structured Output',
      description: 'Parameter tables, error code references, and consistent formatting—not just text about code'
    },
    {
      icon: BookOpen,
      title: 'Built for Scale',
      description: 'Documentation standards from 30 years of real documentation shipped at enterprise scale'
    }
  ];

  return (
    <section ref={ref} id="techwrit-ai" className="py-24 bg-gradient-to-br from-neutral-slate-900 via-brand-primary-dark to-neutral-slate-900 text-neutral-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary-lighter/20 border border-brand-primary-lighter/30 rounded-full mb-6"
            >
              <Zap className="w-4 h-4 text-brand-primary-lightest" />
              <span className="text-sm font-medium text-brand-primary-lightest">Launched February 2026</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              TechWrit AI
            </h2>
            <p className="text-xl text-brand-primary-lightest max-w-3xl mx-auto mb-8">
              Generate technical docs from your code
            </p>
            <p className="text-lg text-neutral-slate-300 max-w-3xl mx-auto">
              Feed TechWrit AI your code, configs, or specs and get structured technical documentation — API references, how-to guides, tutorials, runbooks, and more — all following your style guide, terminology, and glossary.
            </p>
          </div>

          {/* Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 rounded-xl overflow-hidden shadow-2xl border border-neutral-white/10"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzcyMzc0OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Code editor with documentation"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Features grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 bg-neutral-white/5 backdrop-blur-sm border border-neutral-white/10 rounded-xl hover:bg-neutral-white/10 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary-lighter/20 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-brand-primary-lightest" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-slate-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Origin story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-neutral-white/5 backdrop-blur-sm border border-neutral-white/10 rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Built by a technical writer who&apos;s documented everything from Azure APIs to VR SDKs
            </h3>
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p className="text-neutral-slate-200">
                I&apos;m Patricia McPhee — a technical writer with 30 years in tech. I&apos;ve documented APIs, SDKs, and developer platforms at Microsoft, Amazon, Facebook/Oculus, GE Healthcare, and more. Over that time, I&apos;ve built style guides, glossaries, and documentation standards for every team I&apos;ve worked with.
              </p>
              <p className="text-neutral-slate-200">
                Then, a few years ago, engineers started using AI tools — Copilot, ChatGPT, Cursor — to generate documentation. The output was fast, but it was <strong>text about the code, not structured documentation for the code</strong>. No parameter tables. No error code references. Wrong terminology. The style guide ignored entirely. I became the human linter, giving the same feedback on every PR.
              </p>
              <p className="text-neutral-slate-200">
                TechWrit AI is the tool I needed when that shift happened. It takes the documentation standards I spent 30 years building and enforces them during generation — not after. The 25 default rules, the document structures, the prompt templates — they come from real documentation shipped at scale. Now they&apos;re built into the engine.
              </p>
            </div>

            <div className="mt-8">
              <Button
                size="lg"
                className="gap-2 bg-brand-primary hover:bg-brand-primary-dark text-neutral-white"
                asChild
              >
                <a href="https://techwrit.ai" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  Visit TechWrit AI
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
