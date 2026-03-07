'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { OptionLabels } from './types'
import type { FeedbackEntry } from './types'

interface RecentFeedbackListProps {
  entries: FeedbackEntry[]
}

const PAGE_SIZE = 20

function relativeTime(dateStr: string): string {
  const now = Date.now()
  const then = new Date(dateStr).getTime()
  const diff = now - then

  const minutes = Math.floor(diff / 60000)
  if (minutes < 1) return 'just now'
  if (minutes < 60) return `${minutes}m ago`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`

  const days = Math.floor(hours / 24)
  if (days < 30) return `${days}d ago`

  const months = Math.floor(days / 30)
  return `${months}mo ago`
}

export function RecentFeedbackList({ entries }: RecentFeedbackListProps) {
  const [showCount, setShowCount] = useState(PAGE_SIZE)

  const visible = entries.slice(0, showCount)
  const hasMore = showCount < entries.length

  return (
    <div className={cn('rounded-lg border', 'bg-(--card) text-(--card-foreground)')}>
      <div className="px-5 py-4 border-b border-(--border)">
        <h3 className="text-sm font-semibold">Recent Feedback</h3>
      </div>
      <div className="divide-y divide-(--border)">
        {visible.map((entry) => (
          <div key={entry.id} className="px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 min-w-0">
                {entry.type === 'like' ? (
                  <ThumbsUp size={16} className="text-green-500 flex-shrink-0" />
                ) : (
                  <ThumbsDown size={16} className="text-red-500 flex-shrink-0" />
                )}
                <span className="text-sm font-medium truncate" title={entry.page}>
                  {entry.page}
                </span>
              </div>
              <span className="text-xs text-(--muted-foreground) flex-shrink-0">
                {relativeTime(entry.createdAt)}
              </span>
            </div>
            {entry.options.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2 ml-6">
                {entry.options.map((opt) => (
                  <span
                    key={opt}
                    className={cn(
                      'inline-block px-2 py-0.5 text-xs rounded-full',
                      'bg-(--muted) text-(--muted-foreground)'
                    )}
                  >
                    {OptionLabels[opt] || opt}
                  </span>
                ))}
              </div>
            )}
            {entry.comment && (
              <p className="mt-2 ml-6 text-sm text-(--muted-foreground) italic">
                &ldquo;{entry.comment}&rdquo;
              </p>
            )}
          </div>
        ))}
        {entries.length === 0 && (
          <div className="px-5 py-8 text-center text-sm text-(--muted-foreground)">
            No feedback entries yet
          </div>
        )}
      </div>
      {hasMore && (
        <div className="px-5 py-3 border-t border-(--border)">
          <button
            className={cn(
              'text-sm font-medium transition-colors',
              'text-(--primary) hover:text-(--primary)/80'
            )}
            onClick={() => setShowCount((c) => c + PAGE_SIZE)}
          >
            Show more ({entries.length - showCount} remaining)
          </button>
        </div>
      )}
    </div>
  )
}
