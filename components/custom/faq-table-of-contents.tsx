'use client'

import { useState, useMemo, useCallback, useEffect } from 'react'
import Link from 'next/link'

interface FaqQuestion {
  text: string
  anchor: string
}

interface FaqTopic {
  slug: string
  title: string
  description: string
  permalink: string
  questions: FaqQuestion[]
}

export function FaqTableOfContents({
  searchPlaceholder = 'Search FAQs...',
  title,
}: {
  searchPlaceholder?: string
  title?: string
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [topics, setTopics] = useState<FaqTopic[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/faqIndex.json`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTopics(data)
        } else {
          // faqIndex.json is keyed by version (e.g. "en:current")
          const first = Object.values(data)[0]
          setTopics(Array.isArray(first) ? first : [])
        }
      })
      .catch(() => setTopics([]))
  }, [])

  const totalQuestions = useMemo(
    () => topics.reduce((sum, t) => sum + t.questions.length, 0),
    [topics]
  )

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return topics
    const query = searchQuery.toLowerCase()
    return topics
      .map((topic) => {
        const topicMatches = topic.title.toLowerCase().includes(query)
        const matchingQuestions = topic.questions.filter((q) =>
          q.text.toLowerCase().includes(query)
        )
        if (topicMatches) return topic
        if (matchingQuestions.length > 0) return { ...topic, questions: matchingQuestions }
        return null
      })
      .filter(Boolean) as FaqTopic[]
  }, [topics, searchQuery])

  const filteredCount = useMemo(
    () => filtered.reduce((sum, t) => sum + t.questions.length, 0),
    [filtered]
  )

  const handleClear = useCallback(() => setSearchQuery(''), [])

  if (topics.length === 0) {
    return (
      <div className="py-4">
        <p className="text-[var(--muted-foreground)]">
          No FAQ topics found. Ensure <code>content/docs/faq/</code> contains{' '}
          <code>.mdx</code> files with <code>###</code> question headings.
        </p>
      </div>
    )
  }

  return (
    <div className="not-prose">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

      <div className="relative mb-4">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]"
          width="18" height="18" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="w-full pl-10 pr-10 py-2 text-sm border rounded-md bg-[var(--background)] text-[var(--foreground)]"
          placeholder={searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search FAQ entries"
        />
        {searchQuery && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
            onClick={handleClear}
            type="button"
          >
            ✕
          </button>
        )}
      </div>

      {searchQuery && (
        <p className="text-sm text-[var(--muted-foreground)] mb-4">
          {filteredCount} of {totalQuestions} {totalQuestions === 1 ? 'question' : 'questions'} match
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="text-[var(--muted-foreground)]">
          No FAQs match &ldquo;<strong>{searchQuery}</strong>&rdquo;. Try a different search term.
        </p>
      ) : (
        filtered.map((topic) => (
          <div key={topic.slug} className="mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              {topic.title}
              <span className="text-xs bg-[var(--muted)] text-[var(--muted-foreground)] rounded-full px-2 py-0.5">
                {topic.questions.length}
              </span>
            </h2>
            {topic.description && (
              <p className="text-sm text-[var(--muted-foreground)] mt-1">{topic.description}</p>
            )}
            <ul className="mt-2 space-y-1">
              {topic.questions.map((q) => (
                <li key={q.anchor}>
                  <Link
                    href={`${topic.permalink}#${q.anchor}`}
                    className="text-sm text-[var(--primary)] hover:underline no-underline"
                  >
                    {q.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}
