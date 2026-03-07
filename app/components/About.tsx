'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Building2, Code, Wrench } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const companies = [
    'Microsoft',
    'Amazon',
    'Meta',
    'GE Healthcare',
    'LivePerson',
    'Cigna',
    'Beyond Identity',
    'Expedia Group'
  ];

  return (
    <section ref={ref} id="about" className="py-24 bg-neutral-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-slate-900 mb-6 text-center">
            About
          </h2>

          <div className="prose prose-lg max-w-none text-neutral-slate-600 space-y-6">
            <p>
              I started my career in networking and cloud engineering, writing documentation for system administrators, network engineers, and datacenter personnel. That foundation shaped how I approach technical content — over the past 15+ years, I&apos;ve focused on developer platforms, writing API references, SDK guides, and developer documentation at Microsoft, Amazon, Meta, GE Healthcare, and LivePerson.
            </p>

            <p>
              Along the way, I&apos;ve learned that the hardest documentation problems aren&apos;t writing problems — <strong>they&apos;re architecture, tooling, and process problems.</strong> So I built <a href="https://techwrit.ai" target="_blank" rel="noopener noreferrer" className="text-brand-primary-lighter hover:text-brand-primary font-semibold">TechWrit AI</a>, a code-aware documentation platform that enforces style guides during generation, and <a href="https://www.trellisdocs.dev" target="_blank" rel="noopener noreferrer" className="text-brand-primary-lighter hover:text-brand-primary font-semibold">Trellis Docs</a>, a production-ready docs framework built on Next.js. Both are live. Both were built while working full-time.
            </p>

            <p>
              Currently at Cigna, I lead documentation for Alchemy, an internal developer portal built on Backstage, and own the ContentOps Playbook and enterprise style guide that governs documentation quality across engineering teams.
            </p>
          </div>

          {/* Companies worked with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16"
          >
            <h3 className="text-xl font-semibold text-neutral-slate-700 mb-6 text-center">
              Companies I&apos;ve Worked With
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {companies.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="px-6 py-3 bg-neutral-slate-100 rounded-lg text-neutral-slate-700 font-medium"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <div className="text-center p-6 bg-neutral-slate-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                <Building2 className="w-6 h-6 text-brand-primary-lighter" />
              </div>
              <h4 className="font-semibold text-neutral-slate-900 mb-2">Enterprise Scale</h4>
              <p className="text-neutral-slate-600">Built documentation systems for Fortune 500 companies and developer platforms at scale</p>
            </div>

            <div className="text-center p-6 bg-neutral-slate-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                <Code className="w-6 h-6 text-brand-primary-lighter" />
              </div>
              <h4 className="font-semibold text-neutral-slate-900 mb-2">Technical Depth</h4>
              <p className="text-neutral-slate-600">From API references to SDK guides, runbooks to tutorials—documented it all</p>
            </div>

            <div className="text-center p-6 bg-neutral-slate-50 rounded-xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                <Wrench className="w-6 h-6 text-brand-primary-lighter" />
              </div>
              <h4 className="font-semibold text-neutral-slate-900 mb-2">Tool Builder</h4>
              <p className="text-neutral-slate-600">When the right tool doesn&apos;t exist, I build it—and ship it</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
