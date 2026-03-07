'use client'

import { useState } from 'react'
import { Check, Copy, WrapText } from 'lucide-react'
import { cn } from '@/lib/utils'

export function CodeBlockClient({ html, code, title }: { html: string; code: string; title?: string }) {
  const [copied, setCopied] = useState(false)
  const [wrapped, setWrapped] = useState(true)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      {title && (
        <div className="flex items-center px-4 py-2 bg-[var(--muted)] border border-b-0 border-[var(--border)] rounded-t-lg">
          <span className="text-xs font-mono text-[var(--muted-foreground)]">{title}</span>
        </div>
      )}
      <div
        className={cn(
          'shiki-wrapper [&>pre]:p-4 [&>pre]:text-sm [&>pre]:border [&>pre]:border-[var(--border)]',
          title
            ? '[&>pre]:rounded-b-lg [&>pre]:rounded-t-none [&>pre]:border-t-0 [&>pre]:!mt-0'
            : '[&>pre]:rounded-lg',
          wrapped
            ? '[&>pre]:whitespace-pre-wrap [&>pre]:overflow-wrap-anywhere'
            : '[&>pre]:overflow-x-auto'
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className={cn(
        "absolute right-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
        title ? 'top-12' : 'top-2'
      )}>
        <button
          onClick={() => setWrapped(!wrapped)}
          className={cn(
            'p-1.5 rounded-md transition-colors',
            wrapped
              ? 'bg-[var(--primary)]/20 text-[var(--primary)]'
              : 'bg-[var(--muted)]/80 hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
          )}
          aria-label={wrapped ? 'Disable word wrap' : 'Enable word wrap'}
        >
          <WrapText size={14} />
        </button>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-[var(--muted)]/80 hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  )
}
