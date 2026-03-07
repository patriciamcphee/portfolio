'use client'

import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FeedbackByPage } from './types'

interface PageBreakdownTableProps {
  byPage: FeedbackByPage[]
}

type SortKey = 'page' | 'likes' | 'dislikes' | 'total' | 'satisfactionRate'
type SortDir = 'asc' | 'desc'

export function PageBreakdownTable({ byPage }: PageBreakdownTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('total')
  const [sortDir, setSortDir] = useState<SortDir>('desc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const sorted = [...byPage].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }
    return sortDir === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number)
  })

  const SortIcon = ({ column }: { column: SortKey }) => {
    if (sortKey !== column) return null
    return sortDir === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
  }

  const rateColor = (rate: number) => {
    if (rate >= 70) return 'bg-green-500'
    if (rate >= 50) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const columns: { key: SortKey; label: string; align: string }[] = [
    { key: 'page', label: 'Page', align: 'text-left' },
    { key: 'likes', label: 'Likes', align: 'text-center' },
    { key: 'dislikes', label: 'Dislikes', align: 'text-center' },
    { key: 'total', label: 'Total', align: 'text-center' },
    { key: 'satisfactionRate', label: 'Satisfaction', align: 'text-left' },
  ]

  return (
    <div className={cn('rounded-lg border', 'bg-(--card) text-(--card-foreground)')}>
      <div className="px-5 py-4 border-b border-(--border)">
        <h3 className="text-sm font-semibold">Feedback by Page</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-(--border)">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'py-3 px-4 font-semibold cursor-pointer select-none',
                    'hover:text-(--primary) transition-colors',
                    col.align
                  )}
                  onClick={() => handleSort(col.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    <SortIcon column={col.key} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.page} className="border-b border-(--border) last:border-b-0">
                <td className="py-2.5 px-4 max-w-[300px] truncate" title={row.page}>
                  {row.page}
                </td>
                <td className="py-2.5 px-4 text-center">{row.likes}</td>
                <td className="py-2.5 px-4 text-center">{row.dislikes}</td>
                <td className="py-2.5 px-4 text-center">{row.total}</td>
                <td className="py-2.5 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 rounded-full bg-(--muted) overflow-hidden">
                      <div
                        className={cn('h-full rounded-full transition-all', rateColor(row.satisfactionRate))}
                        style={{ width: `${row.satisfactionRate}%` }}
                      />
                    </div>
                    <span className="text-xs text-(--muted-foreground) w-10 text-right">
                      {row.satisfactionRate.toFixed(0)}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {sorted.length === 0 && (
              <tr>
                <td colSpan={5} className="py-6 text-center text-(--muted-foreground)">
                  No page data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
