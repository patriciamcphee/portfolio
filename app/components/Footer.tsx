'use client';

import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-slate-900 text-neutral-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Patricia McPhee</h3>
            <p className="text-neutral-slate-400 mb-4">
              Technical Content Manager & Developer Experience professional with 15+ years documenting APIs, SDKs & developer platforms.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/patriciamcphee/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-slate-800 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@patriciamcphee.com"
                className="w-10 h-10 bg-neutral-slate-800 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-neutral-slate-400">
              <li>
                <a
                  href="https://techwrit.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-white transition-colors inline-flex items-center gap-2"
                >
                  TechWrit AI
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.trellisdocs.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-white transition-colors inline-flex items-center gap-2"
                >
                  Trellis Docs
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-slate-400">
              <li>
                <a href="/about" className="hover:text-neutral-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/portfolio-overview" className="hover:text-neutral-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-neutral-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-slate-800 pt-8 text-center text-neutral-slate-400">
          <p>&copy; {currentYear} Patricia McPhee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
