'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import Fuse from 'fuse.js'
import { useDocContext } from '@/lib/doc-context'

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  keywords: string[]
  last_update?: { date: string; author?: string }
}

const fuseOptions = {
  includeScore: true,
  threshold: 0.4,
  minMatchCharLength: 2,
  keys: [
    { name: 'title', weight: 1.0 },
    { name: 'keywords', weight: 0.8 },
    { name: 'description', weight: 0.6 },
    { name: 'content', weight: 0.4 },
  ],
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [fuse, setFuse] = useState<Fuse<SearchResult> | null>(null)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const { locale, version } = useDocContext()

  // Load search index — supports both legacy array and keyed object format
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/searchIndex.json`)
      .then((r) => r.json())
      .then((data) => {
        let items: SearchResult[]
        if (Array.isArray(data)) {
          // Legacy flat array format (i18n/versioning disabled)
          items = data
        } else {
          // Keyed format: { "en:current": [...], "es:v1": [...] }
          const key = `${locale}:${version}`
          items = data[key] || data[`${locale}:current`] || Object.values(data)[0] || []
        }
        setFuse(new Fuse(items, fuseOptions))
      })
      .catch(console.error)
  }, [locale, version])

  // Keyboard shortcut: Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onOpenChange(!open)
      }
      if (e.key === 'Escape' && open) {
        onOpenChange(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onOpenChange])

  const search = useCallback(
    (value: string) => {
      if (!value.trim() || !fuse) {
        setResults([])
        return
      }
      const matches = fuse.search(value.trim())
      const unique = Array.from(
        new Map(matches.map((r) => [r.item.id, r.item])).values()
      )
      setResults(unique)
      setSelectedIndex(0)
    },
    [fuse]
  )

  useEffect(() => {
    search(query)
  }, [query, search])

  const navigate = (url: string) => {
    onOpenChange(false)
    setQuery('')
    router.push(url.startsWith('/') ? url : `/${url}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      navigate(results[selectedIndex].url)
    }
  }

  // Reset when closing
  useEffect(() => {
    if (!open) {
      setQuery('')
      setResults([])
      setSelectedIndex(0)
    }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange(false)} />
      <div className="relative w-full max-w-lg bg-[var(--popover)] text-[var(--popover-foreground)] rounded-lg shadow-xl border overflow-hidden">
        {/* Search input */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <Search size={18} className="text-[var(--muted-foreground)]" />
          <input
            type="text"
            className="flex-1 text-sm bg-transparent outline-none placeholder:text-[var(--muted-foreground)]"
            placeholder="Search documentation..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <kbd className="text-xs text-[var(--muted-foreground)] border rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {query && results.length === 0 && (
            <div className="px-4 py-6 text-center text-sm text-[var(--muted-foreground)]">
              No results found
            </div>
          )}
          {results.map((item, i) => (
            <button
              key={item.id}
              className={`w-full px-4 py-3 text-left hover:bg-[var(--muted)] transition-colors ${
                i === selectedIndex ? 'bg-[var(--muted)]' : ''
              }`}
              onClick={() => navigate(item.url)}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <div className="text-sm font-medium">{item.title}</div>
              {item.description && (
                <div className="text-xs text-[var(--muted-foreground)] mt-0.5 line-clamp-1">
                  {item.description}
                </div>
              )}
            </button>
          ))}
        </div>

        {results.length > 0 && (
          <div className="px-4 py-2 border-t text-xs text-[var(--muted-foreground)]">
            {results.length} result{results.length === 1 ? '' : 's'}
          </div>
        )}

        {/* Footer */}
        <div className="px-4 py-2 border-t text-xs text-[var(--muted-foreground)] text-right">
          Powered by Trellis Docs
        </div>
      </div>
    </div>
  )
}
