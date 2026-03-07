'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { cn } from '@/lib/utils'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

interface TabsProps {
  children: React.ReactNode
  queryString?: string | boolean
  defaultValue?: string
}

interface TabItemProps {
  value: string
  label?: string
  children: React.ReactNode
  hidden?: boolean
}

function TabsInner({ children, queryString, defaultValue }: TabsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const tabListRef = useRef<HTMLUListElement>(null)

  // Extract tab values from children
  const tabs = (Array.isArray(children) ? children : [children]).filter(Boolean) as React.ReactElement<TabItemProps>[]
  const tabValues = tabs.map((tab) => ({
    value: tab.props.value,
    label: tab.props.label || tab.props.value,
  }))

  const paramName = typeof queryString === 'string' ? queryString : 'tabs'

  // Get initial value from URL or default
  const urlValue = queryString ? searchParams.get(paramName) : null
  const initialValue = urlValue || defaultValue || tabValues[0]?.value || ''
  const [selected, setSelected] = useState(initialValue)

  // Sync from URL on load
  useEffect(() => {
    if (queryString && urlValue && urlValue !== selected) {
      setSelected(urlValue)
    }
  }, [urlValue]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (value: string) => {
    setSelected(value)

    if (queryString) {
      const params = new URLSearchParams(searchParams.toString())
      params.set(paramName, value)
      router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight') {
      const next = (index + 1) % tabValues.length
      handleSelect(tabValues[next].value)
      ;(tabListRef.current?.children[next] as HTMLElement)?.focus()
    } else if (e.key === 'ArrowLeft') {
      const prev = (index - 1 + tabValues.length) % tabValues.length
      handleSelect(tabValues[prev].value)
      ;(tabListRef.current?.children[prev] as HTMLElement)?.focus()
    }
  }

  return (
    <div className="my-4">
      <ul
        ref={tabListRef}
        role="tablist"
        className="flex gap-1 border-b border-[var(--border)] mb-4"
      >
        {tabValues.map((tab, i) => (
          <li
            key={tab.value}
            role="tab"
            tabIndex={selected === tab.value ? 0 : -1}
            aria-selected={selected === tab.value}
            onClick={() => handleSelect(tab.value)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className={cn(
              'px-4 py-2 text-sm font-medium rounded-t-lg cursor-pointer transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]',
              selected === tab.value
                ? 'bg-[var(--primary)] text-[var(--primary-foreground)]'
                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
            )}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      {tabs.map((tab) => (
        <div
          key={tab.props.value}
          role="tabpanel"
          hidden={tab.props.value !== selected}
        >
          {tab.props.children}
        </div>
      ))}
    </div>
  )
}

export function Tabs(props: TabsProps) {
  return (
    <Suspense fallback={<div className="my-4 animate-pulse h-20 bg-[var(--muted)] rounded" />}>
      <TabsInner {...props} />
    </Suspense>
  )
}

export function TabItem({ children, hidden }: TabItemProps) {
  if (hidden) return null
  return <div>{children}</div>
}
