'use client'

import { cn } from '@/lib/utils'
import { OptionLabels } from './types'
import type { FeedbackByOption } from './types'

interface OptionBreakdownProps {
  byOption: FeedbackByOption[]
}

export function OptionBreakdown({ byOption }: OptionBreakdownProps) {
  const positive = byOption.filter((o) => o.type === 'like')
  const negative = byOption.filter((o) => o.type === 'dislike')
  const maxCount = Math.max(...byOption.map((o) => o.count), 1)

  return (
    <div className={cn('rounded-lg border', 'bg-(--card) text-(--card-foreground)')}>
      <div className="px-5 py-4 border-b border-(--border)">
        <h3 className="text-sm font-semibold">Feedback Reasons</h3>
      </div>
      <div className="p-5 space-y-6">
        {positive.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-(--muted-foreground) uppercase tracking-wide mb-3">
              Positive
            </h4>
            <div className="space-y-2">
              {positive
                .sort((a, b) => b.count - a.count)
                .map((item) => (
                  <BarRow key={item.option} item={item} maxCount={maxCount} color="bg-green-500" />
                ))}
            </div>
          </div>
        )}
        {negative.length > 0 && (
          <div>
            <h4 className="text-xs font-medium text-(--muted-foreground) uppercase tracking-wide mb-3">
              Negative
            </h4>
            <div className="space-y-2">
              {negative
                .sort((a, b) => b.count - a.count)
                .map((item) => (
                  <BarRow key={item.option} item={item} maxCount={maxCount} color="bg-red-500" />
                ))}
            </div>
          </div>
        )}
        {byOption.length === 0 && (
          <p className="text-sm text-(--muted-foreground) text-center py-4">No option data available</p>
        )}
      </div>
    </div>
  )
}

function BarRow({ item, maxCount, color }: { item: FeedbackByOption; maxCount: number; color: string }) {
  const pct = (item.count / maxCount) * 100
  const label = OptionLabels[item.option] || item.option

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-(--muted-foreground) w-40 truncate flex-shrink-0" title={label}>
        {label}
      </span>
      <div className="flex-1 h-2 rounded-full bg-(--muted) overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', color)}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-medium w-8 text-right">{item.count}</span>
    </div>
  )
}
