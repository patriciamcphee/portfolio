'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, X, Mail, Linkedin, FileText, ArrowUp } from 'lucide-react';

const actions = [
  {
    label: 'Back to top',
    icon: ArrowUp,
    onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
  },
  {
    label: 'Download Resume',
    icon: FileText,
    href: 'https://www.dropbox.com/scl/fi/ztqpgaverevbkb2xt1pvz/resume-patricia-mcphee.pdf?rlkey=ii9stpk47hfhvw1uteun2bno8&st=zccgf8x6&dl=0',
  },
  {
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/patriciamcphee/',
    external: true,
  },
  {
    label: 'Email',
    icon: Mail,
    href: 'mailto:contact@patriciamcphee.com',
  },
];

export function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showFab && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3"
        >
          {/* Action items */}
          <AnimatePresence>
            {isOpen && actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <span className="bg-neutral-slate-900 text-neutral-white text-sm px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
                  {action.label}
                </span>
                {action.href ? (
                  <a
                    href={action.href}
                    {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="w-12 h-12 bg-neutral-white text-neutral-slate-700 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-slate-50 transition-colors border border-neutral-slate-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <action.icon className="w-5 h-5" />
                  </a>
                ) : (
                  <button
                    onClick={() => { action.onClick?.(); setIsOpen(false); }}
                    className="w-12 h-12 bg-neutral-white text-neutral-slate-700 rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-slate-50 transition-colors border border-neutral-slate-200"
                  >
                    <action.icon className="w-5 h-5" />
                  </button>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Main FAB button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 bg-brand-primary text-neutral-white rounded-full shadow-lg flex items-center justify-center hover:bg-brand-primary-dark transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
