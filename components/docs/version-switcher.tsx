'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useDocContext } from '@/lib/doc-context'
import { siteConfig } from '@/config/site'

export function VersionSwitcher() {
  const { version, versions, locale } = useDocContext()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  if (!siteConfig.versioning?.enabled || versions.length === 0) return null

  const currentLabel =
    version === 'current'
      ? siteConfig.versioning.currentLabel || 'Latest'
      : version

  const allVersions = [
    { value: 'current', label: siteConfig.versioning.currentLabel || 'Latest' },
    ...versions.map((v) => ({ value: v, label: v })),
  ]

  function buildVersionUrl(targetVersion: string): string {
    const defaultLocale = siteConfig.i18n?.defaultLocale || 'en'
    // Strip current locale and version prefixes from pathname to get the doc path
    let docPath = pathname

    // Remove locale prefix if present
    if (locale !== defaultLocale && docPath.startsWith(`/${locale}`)) {
      docPath = docPath.slice(locale.length + 1)
    }

    // Remove current version prefix if present
    if (version !== 'current' && docPath.startsWith(`/${version}`)) {
      docPath = docPath.slice(version.length + 1)
    }

    // Build new URL
    const parts: string[] = []
    if (locale !== defaultLocale) parts.push(locale)
    if (targetVersion !== 'current') parts.push(targetVersion)

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
        className="flex items-center gap-1 px-2 py-1 text-sm rounded-md border hover:bg-[var(--muted)] transition-colors"
        onClick={() => setOpen(!open)}
      >
        {currentLabel}
        <ChevronDown size={14} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 w-36 rounded-md border bg-[var(--popover)] shadow-lg py-1 z-50">
          {allVersions.map((v) => (
            <Link
              key={v.value}
              href={buildVersionUrl(v.value)}
              className={`block px-4 py-2 text-sm no-underline transition-colors ${
                v.value === version
                  ? 'text-[var(--primary)] font-medium'
                  : 'text-[var(--popover-foreground)] hover:bg-[var(--muted)]'
              }`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => setOpen(false)}
            >
              {v.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
