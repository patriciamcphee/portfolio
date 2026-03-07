'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { getBaseUrl } from '@/lib/feedback-api'
import { MetricCards } from './metric-cards'
import { PageBreakdownTable } from './page-breakdown-table'
import { OptionBreakdown } from './option-breakdown'
import { RecentFeedbackList } from './recent-feedback-list'
import type { FeedbackSummaryResponse, Period } from './types'

const periods: { value: Period; label: string }[] = [
  { value: 'all', label: 'All time' },
  { value: '30d', label: '30 days' },
  { value: '7d', label: '7 days' },
]

export function FeedbackDashboard() {
  const [period, setPeriod] = useState<Period>('all')
  const [data, setData] = useState<FeedbackSummaryResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`${getBaseUrl()}/summary?period=${period}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Server responded with ${r.status}`)
        return r.json()
      })
      .then((json: FeedbackSummaryResponse) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message || 'Failed to load feedback data')
        setLoading(false)
      })
  }, [period])

  return (
    <div>
      {/* Header with period filter */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Feedback Dashboard</h1>
        <div className="flex gap-1 p-1 rounded-lg bg-(--muted)">
          {periods.map((p) => (
            <button
              key={p.value}
              className={cn(
                'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
                period === p.value
                  ? 'bg-(--card) text-(--card-foreground) shadow-sm'
                  : 'text-(--muted-foreground) hover:text-(--foreground)'
              )}
              onClick={() => setPeriod(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="py-16 text-center text-(--muted-foreground)">
          <p className="text-sm">Loading feedback data...</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className={cn('rounded-lg border p-6', 'bg-(--card) text-(--card-foreground)')}>
          <h2 className="text-lg font-semibold mb-2">Unable to load feedback data</h2>
          <p className="text-sm text-(--muted-foreground) mb-4">{error}</p>
          <div className="text-sm text-(--muted-foreground) space-y-1">
            <p>To use the Feedback Dashboard, your backend must provide a <code className="px-1 py-0.5 rounded bg-(--muted) text-xs">GET /api/feedback/summary</code> endpoint.</p>
            <p>See the <a href="/docs/components/feedback/" className="text-(--primary) underline underline-offset-4">Feedback documentation</a> for setup instructions.</p>
          </div>
        </div>
      )}

      {/* Dashboard content */}
      {data && !loading && (
        <div className="space-y-6">
          <MetricCards totals={data.totals} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PageBreakdownTable byPage={data.byPage} />
            </div>
            <div>
              <OptionBreakdown byOption={data.byOption} />
            </div>
          </div>

          <RecentFeedbackList entries={data.recentEntries} />
        </div>
      )}
    </div>
  )
}
