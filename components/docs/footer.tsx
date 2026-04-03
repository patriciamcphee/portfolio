'use client'

import Link from 'next/link'
import { Linkedin, Mail, ExternalLink } from 'lucide-react'
import { footerConfig } from '@/config/navigation'

export function Footer() {
  return (
    <footer className="bg-neutral-slate-900 text-neutral-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Patricia McPhee</h3>
            <p className="text-neutral-slate-400 mb-4">
              Technical Content Manager &amp; Developer Experience professional with 15+ years documenting APIs, SDKs &amp; developer platforms.
            </p>
            <div className="flex gap-4">
              <a
                href={footerConfig.links.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-slate-800 hover:bg-brand-primary rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={footerConfig.links.social.email}
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
              {footerConfig.links.products.map((product) => (
                <li key={product.label}>
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-white transition-colors inline-flex items-center gap-2"
                  >
                    {product.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-neutral-slate-400">
              {footerConfig.links.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-neutral-white transition-colors no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-slate-800 pt-8 text-center text-neutral-slate-400">
          <p>{footerConfig.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
