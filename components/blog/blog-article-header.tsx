'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Share2, Check } from 'lucide-react'

interface BlogArticleHeaderProps {
  title: string
  slug: string
}

export function BlogArticleHeader({ title, slug }: BlogArticleHeaderProps) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    const url = `${window.location.origin}/blog/${slug}/`
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, url })
        return
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="sticky top-[var(--navbar-height)] z-40 bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/blog/"
          className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors no-underline"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md transition-colors"
          title="Share this post"
        >
          {copied ? <Check size={16} /> : <Share2 size={16} />}
          {copied ? 'Copied!' : 'Share'}
        </button>
      </div>
    </div>
  )
}
