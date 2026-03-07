'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} id="contact" className="py-24 bg-neutral-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-slate-900 mb-6">
              Let&apos;s Talk
            </h2>
            <p className="text-xl text-neutral-slate-600 max-w-2xl mx-auto">
              My contract with Cigna ends at the end of June 2026, and I&apos;m actively seeking my next role
            </p>
          </div>

          {/* Contact methods */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                    <Linkedin className="w-6 h-6 text-brand-primary-lighter" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-slate-900 mb-2">LinkedIn</h3>
                  <p className="text-neutral-slate-600 mb-4">
                    Connect with me on LinkedIn to discuss opportunities
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-primary/15 rounded-lg mb-4">
                    <Mail className="w-6 h-6 text-brand-primary-lighter" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-slate-900 mb-2">Email</h3>
                  <p className="text-neutral-slate-600 mb-4">
                    Send me an email to start a conversation
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
          </div>

        </motion.div>
      </div>
    </section>
  );
}
