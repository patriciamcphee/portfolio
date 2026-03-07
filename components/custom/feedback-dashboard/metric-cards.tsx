'use client'

import { MessageSquare, ThumbsUp, ThumbsDown, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FeedbackTotals } from './types'

interface MetricCardsProps {
  totals: FeedbackTotals
}

const cards = [
  { key: 'total', label: 'Total Feedback', icon: MessageSquare, format: (t: FeedbackTotals) => t.total },
  { key: 'likes', label: 'Likes', icon: ThumbsUp, format: (t: FeedbackTotals) => t.likes },
  { key: 'dislikes', label: 'Dislikes', icon: ThumbsDown, format: (t: FeedbackTotals) => t.dislikes },
  { key: 'rate', label: 'Satisfaction Rate', icon: TrendingUp, format: (t: FeedbackTotals) => `${t.satisfactionRate.toFixed(1)}%` },
] as const

export function MetricCards({ totals }: MetricCardsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => {
        const Icon = card.icon
        return (
          <div
            key={card.key}
            className={cn(
              'p-5 rounded-lg border',
              'bg-(--card) text-(--card-foreground)'
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <Icon size={16} className="text-(--muted-foreground)" />
              <span className="text-xs font-medium text-(--muted-foreground) uppercase tracking-wide">
                {card.label}
              </span>
            </div>
            <div className="text-2xl font-bold">{card.format(totals)}</div>
          </div>
        )
      })}
    </div>
  )
}
