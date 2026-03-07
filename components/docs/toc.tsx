'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TocItem } from '@/lib/toc'

export function MobileTableOfContents({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [open])

  return (
    <div ref={containerRef} className="lg:hidden mb-6 border rounded-lg">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-[var(--foreground)]"
      >
        On this page
        <ChevronDown
          size={16}
          className={cn('transition-transform text-[var(--muted-foreground)]', open && 'rotate-180')}
        />
      </button>
      {open && (
        <ul className="px-4 pb-3 space-y-1 border-t">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  'block text-sm no-underline py-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors',
                  item.level === 2 ? 'pl-0' : item.level === 3 ? 'pl-3' : 'pl-6'
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    )

    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }

    return () => observer.disconnect()
  }, [items])

  return (
    <div className="sticky py-8 pr-4" style={{ top: 'var(--navbar-height)' }}>
      <p className="text-sm font-bold mb-3 pl-4">On this page</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                'block text-[13px] no-underline py-0.5 relative transition-colors',
                item.level === 2 ? 'pl-4' : item.level === 3 ? 'pl-7' : 'pl-10',
                activeId === item.id
                  ? 'text-[var(--primary)] font-medium'
                  : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              )}
            >
              {activeId === item.id && (
                <span className="absolute left-0 top-0 w-[3px] h-full rounded-sm bg-[var(--primary)]" />
              )}
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
