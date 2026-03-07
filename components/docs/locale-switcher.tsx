'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useDocContext } from '@/lib/doc-context'
import { siteConfig } from '@/config/site'

export function LocaleSwitcher() {
  const { locale, version, locales } = useDocContext()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  if (!siteConfig.i18n?.enabled || locales.length <= 1) return null

  const defaultLocale = siteConfig.i18n.defaultLocale || 'en'
  const currentLocale = locales.find((l) => l.code === locale)

  function buildLocaleUrl(targetLocale: string): string {
    // Strip current locale and version prefixes from pathname to get the doc path
    let docPath = pathname

    if (locale !== defaultLocale && docPath.startsWith(`/${locale}`)) {
      docPath = docPath.slice(locale.length + 1)
    }

    if (version !== 'current' && docPath.startsWith(`/${version}`)) {
      docPath = docPath.slice(version.length + 1)
    }

    const parts: string[] = []
    if (targetLocale !== defaultLocale) parts.push(targetLocale)
    if (version !== 'current') parts.push(version)

    const prefix = parts.length > 0 ? '/' + parts.join('/') : ''
    return prefix + docPath
  }

  // Close on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1 px-2 py-1 text-sm rounded-md hover:bg-[var(--muted)] transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Change language"
      >
        <Globe size={16} />
        <span className="hidden sm:inline">{currentLocale?.name || locale}</span>
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-40 rounded-md border bg-[var(--popover)] shadow-lg py-1 z-50">
          {locales.map((l) => (
            <Link
              key={l.code}
              href={buildLocaleUrl(l.code)}
              className={`block px-4 py-2 text-sm no-underline transition-colors ${
                l.code === locale
                  ? 'text-[var(--primary)] font-medium'
                  : 'text-[var(--popover-foreground)] hover:bg-[var(--muted)]'
              }`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setOpen(false)}
            >
              {l.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
