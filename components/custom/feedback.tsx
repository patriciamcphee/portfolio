'use client'

import { useState, useMemo, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { ThumbsUp, ThumbsDown, X } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { getBaseUrl } from '@/lib/feedback-api'

const FeedbackType = { LIKE: 'like', DISLIKE: 'dislike' } as const

const LikeOptions: Record<string, string> = {
  ACCURATE: 'Accurately describes the platform',
  RESOLVE_ISSUE: 'Helped me resolve an issue',
  EASY_TO_FOLLOW: 'Easy to follow and comprehend',
  CLEAR_CODE_SAMPLES: 'Code samples were clear',
  ADOPT_PLATFORM: 'Convinced me to adopt the platform',
  POSITIVE_ANOTHER_REASON: 'Provide details',
}

const DislikeOptions: Record<string, string> = {
  INACCURATE: "Doesn't accurately describe the platform",
  NOT_FOUND: "Couldn't find what I was looking for",
  MISSING_INFO: 'Missing important information',
  HARD_TO_UNDERSTAND: 'Hard to understand',
  COMPLICATED: 'Too complicated or unclear',
  CODE_ERRORS: 'Code sample errors',
  NEGATIVE_ANOTHER_REASON: 'Provide details',
}

async function submitFeedback(payload: {
  page: string
  type: string
  options: string[]
  comment: string
}) {
  const url = `${getBaseUrl()}/submit`
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  })
  if (!response.ok) throw new Error(`Server responded with ${response.status}`)
  return response.json()
}

export function Feedback() {
  const pathname = usePathname()
  const [feedbackType, setFeedbackType] = useState<string | null>(null)
  const [feedbackOptions, setFeedbackOptions] = useState<string[]>([])
  const [textData, setTextData] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [thankYou, setThankYou] = useState(false)
  const [error, setError] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const options = useMemo(() => {
    if (feedbackType === FeedbackType.LIKE) return LikeOptions
    if (feedbackType === FeedbackType.DISLIKE) return DislikeOptions
    return {}
  }, [feedbackType])

  // Keyboard: Escape to close any open modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (feedbackType) closeModal()
        if (thankYou) setThankYou(false)
        if (error) setError(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [feedbackType, thankYou, error])

  // Focus the modal when it opens
  useEffect(() => {
    if (feedbackType && modalRef.current) {
      modalRef.current.focus()
    }
  }, [feedbackType])

  const handleChange = (key: string, checked: boolean) => {
    setFeedbackOptions((prev) =>
      checked ? [...prev, key] : prev.filter((e) => e !== key)
    )
  }

  const handleSubmit = async () => {
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      await submitFeedback({
        page: pathname,
        type: feedbackType!,
        options: feedbackOptions,
        comment: textData.trim(),
      })
      setFeedbackType(null)
      setFeedbackOptions([])
      setTextData('')
      setThankYou(true)
    } catch {
      setFeedbackType(null)
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeModal = () => {
    if (isSubmitting) return
    setFeedbackType(null)
    setFeedbackOptions([])
    setTextData('')
  }

  return (
    <div className="mt-8">
      <h4 className="text-base font-semibold mb-2">Was this page helpful?</h4>
      <div className="flex gap-2">
        <button
          className={cn(
            'p-2 rounded-md transition-colors',
            'hover:bg-(--muted)',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
          )}
          onClick={() => setFeedbackType(FeedbackType.LIKE)}
          aria-label="Yes, this page was helpful"
        >
          <ThumbsUp size={20} className="text-(--muted-foreground)" />
        </button>
        <button
          className={cn(
            'p-2 rounded-md transition-colors',
            'hover:bg-(--muted)',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
          )}
          onClick={() => setFeedbackType(FeedbackType.DISLIKE)}
          aria-label="No, this page was not helpful"
        >
          <ThumbsDown size={20} className="text-(--muted-foreground)" />
        </button>
      </div>

      {/* Feedback modal */}
      {feedbackType && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="feedback-modal-title"
            tabIndex={-1}
            className={cn(
              'relative w-full max-w-md max-h-[90vh] overflow-y-auto',
              'bg-(--card) text-(--card-foreground)',
              'rounded-lg shadow-xl border p-6',
              'focus:outline-none'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={cn(
                'absolute top-3 right-3 p-1 rounded-md transition-colors',
                'hover:bg-(--muted)',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
              )}
              onClick={closeModal}
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h3
              id="feedback-modal-title"
              className="text-lg font-bold text-center mb-4"
            >
              {feedbackType === FeedbackType.LIKE ? 'What did you like?' : 'What went wrong?'}
            </h3>

            <div className="space-y-2">
              {Object.entries(options).map(([key, label]) => (
                <label
                  key={key}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 text-sm rounded-md cursor-pointer transition-colors',
                    'hover:bg-(--muted)',
                    feedbackOptions.includes(key) && 'bg-(--muted)'
                  )}
                >
                  <input
                    type="checkbox"
                    checked={feedbackOptions.includes(key)}
                    onChange={(e) => handleChange(key, e.target.checked)}
                    disabled={isSubmitting}
                    className={cn(
                      'h-4 w-4 rounded border border-(--border)',
                      'accent-(--primary)',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
                    )}
                  />
                  {label}
                </label>
              ))}
            </div>

            {feedbackOptions.some((o) => o.endsWith('ANOTHER_REASON')) && (
              <textarea
                className={cn(
                  'mt-3 w-full p-2 text-sm rounded-md resize-y',
                  'bg-(--background) text-(--foreground)',
                  'border border-(--border)',
                  'placeholder:text-(--muted-foreground)',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
                )}
                rows={4}
                value={textData}
                onChange={(e) => setTextData(e.target.value)}
                placeholder="Please provide details"
                disabled={isSubmitting}
              />
            )}

            <div className="flex justify-center mt-4">
              <button
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-colors',
                  'bg-(--primary) text-(--primary-foreground)',
                  'hover:opacity-90',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Thank you modal */}
      {thankYou && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setThankYou(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="thankyou-modal-title"
            className={cn(
              'relative w-72 text-center',
              'bg-(--card) text-(--card-foreground)',
              'rounded-lg shadow-xl border p-6'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={cn(
                'absolute top-3 right-3 p-1 rounded-md transition-colors',
                'hover:bg-(--muted)',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
              )}
              onClick={() => setThankYou(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 id="thankyou-modal-title" className="text-xl font-bold mb-2">
              Thank you for your feedback!
            </h3>
            <p className="text-sm text-(--muted-foreground)">
              It helps us improve our technical content and user experience.
            </p>
          </div>
        </div>
      )}

      {/* Error modal */}
      {error && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setError(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="error-modal-title"
            className={cn(
              'relative w-72 text-center',
              'bg-(--card) text-(--card-foreground)',
              'rounded-lg shadow-xl border p-6'
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={cn(
                'absolute top-3 right-3 p-1 rounded-md transition-colors',
                'hover:bg-(--muted)',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)'
              )}
              onClick={() => setError(false)}
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 id="error-modal-title" className="text-xl font-bold mb-2">Oops!</h3>
            <p className="text-sm mb-2 text-(--muted-foreground)">
              There was an issue submitting your feedback.
            </p>
            <p className="text-sm text-(--muted-foreground)">
              Try again or{' '}
              <a
                href={`${siteConfig.repoUrl}/issues/new?title=Issue submitting feedback`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  'font-medium text-(--primary) underline underline-offset-4',
                  'hover:text-(--primary)/80'
                )}
              >
                report the issue
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
