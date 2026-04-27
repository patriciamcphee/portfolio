'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, ExternalLink, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function ContactPage() {
  return (
    <article
      className="font-sans text-neutral-slate-900 dark:text-neutral-slate-100 max-w-[720px] mx-auto px-6 py-12 pb-16"
    >
      <div>
        {/* Eyebrow */}
        <div className="text-[11px] font-medium tracking-[0.18em] uppercase text-neutral-slate-500 mb-5 flex items-center gap-2.5">
          <span className="inline-block w-7 h-px bg-neutral-slate-500 shrink-0" />
          Get in Touch
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] font-normal mb-2 text-neutral-slate-900 dark:text-neutral-slate-100">
          Let&apos;s Talk
        </h1>

        {/* Subheadline */}
        <p className="font-display text-base font-normal italic text-neutral-slate-500 mb-10 leading-relaxed max-w-[560px]">
          My contract with Cigna ends at the end of June 2026, and I&apos;m actively seeking my next role.
          Whether you have an opportunity, a question, or just want to connect — I&apos;d love to hear from you.
        </p>

        <hr className="border-t border-neutral-slate-200 dark:border-neutral-slate-700 my-10" />

        {/* Contact methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                  <Mail className="w-6 h-6 text-brand-primary-lighter" />
                </div>
                <h2 className="text-xl font-semibold text-neutral-slate-900 dark:text-neutral-slate-100 mb-2">Email</h2>
                <p className="text-neutral-slate-600 dark:text-neutral-slate-400 mb-4">
                  The best way to reach me for opportunities or project inquiries.
                </p>
                <Button variant="outline" className="gap-2 w-full" asChild>
                  <a href="mailto:contact@patriciamcphee.com">
                    Send Email
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                  <Linkedin className="w-6 h-6 text-brand-primary-lighter" />
                </div>
                <h2 className="text-xl font-semibold text-neutral-slate-900 dark:text-neutral-slate-100 mb-2">LinkedIn</h2>
                <p className="text-neutral-slate-600 dark:text-neutral-slate-400 mb-4">
                  Connect with me to discuss opportunities or follow my work.
                </p>
                <Button variant="outline" className="gap-2 w-full" asChild>
                  <a href="https://www.linkedin.com/in/patriciamcphee/" target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Slack / Discord placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="hover:shadow-lg transition-shadow border-dashed">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-slate-100 dark:bg-neutral-slate-800 rounded-lg shrink-0">
                  <MessageCircle className="w-6 h-6 text-neutral-slate-400" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-neutral-slate-900 dark:text-neutral-slate-100 mb-2">Community Chat</h2>
                  <p className="text-neutral-slate-500 text-sm">
                    A Slack or Discord community is coming soon. Stay tuned for a space to connect,
                    ask questions, and share ideas.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </article>
  );
}
