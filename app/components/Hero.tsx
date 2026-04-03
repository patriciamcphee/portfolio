'use client';

import { motion } from 'motion/react';
import { ArrowRight, FileText, Sparkles, Briefcase } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-tl from-brand-primary-dark/80 via-neutral-white to-neutral-white dark:from-brand-primary-dark/40 dark:via-neutral-slate-900 dark:to-neutral-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,white,transparent_75%)]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/15 text-brand-primary dark:bg-brand-primary/25 dark:text-brand-primary-lighter rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-neutral-slate-900 dark:text-neutral-slate-100 mb-6 leading-tight"
          >
            Technical Content Manager
            <span className="block text-brand-primary-lighter mt-2">& Developer Experience</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-slate-600 dark:text-neutral-slate-400 mb-8 max-w-3xl mx-auto"
          >
            15+ years documenting APIs, SDKs & developer platforms for Microsoft, Amazon, Meta, and beyond
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="gap-2 text-lg px-8 py-6" asChild>
              <a href="/portfolio-overview">
                View Portfolio
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6" asChild>
              <a href="https://www.dropbox.com/scl/fi/ztqpgaverevbkb2xt1pvz/resume-patricia-mcphee.pdf?rlkey=ii9stpk47hfhvw1uteun2bno8&st=zccgf8x6&dl=0" target="_blank" rel="noopener noreferrer">
                <FileText className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Focused on */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-2xl mx-auto"
          >
            <div className="bg-neutral-white/80 dark:bg-neutral-slate-800/80 backdrop-blur-sm border border-brand-primary/20 rounded-xl p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-5 h-5 text-brand-primary dark:text-brand-primary-lighter" />
                <h3 className="text-lg font-bold text-neutral-slate-900 dark:text-neutral-slate-100">What I&apos;m Focused On</h3>
              </div>
              <div className="space-y-2 text-sm text-neutral-slate-700 dark:text-neutral-slate-300">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary dark:bg-brand-primary-lighter rounded-full mt-1.5 shrink-0"></div>
                  <p><strong>Role:</strong> Technical Content Manager and Developer Experience</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary dark:bg-brand-primary-lighter rounded-full mt-1.5 shrink-0"></div>
                  <p><strong>Location:</strong> Remote positions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary dark:bg-brand-primary-lighter rounded-full mt-1.5 shrink-0"></div>
                  <p><strong>Available:</strong> End of June 2026</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary dark:bg-brand-primary-lighter rounded-full mt-1.5 shrink-0"></div>
                  <p><strong>Ideal for:</strong> Teams building a developer experience function, scaling docs, or needing someone who owns strategy end to end — including the tooling</p>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}