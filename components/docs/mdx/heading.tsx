'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

function LinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  id?: string
  children?: React.ReactNode
}

export function Heading({ level, id, children }: HeadingProps) {
  const [showMessage, setShowMessage] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [canCopy, setCanCopy] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const Tag = `h${level}` as const

  useEffect(() => {
    setCanCopy(
      !!window.navigator.clipboard &&
      typeof window.navigator.clipboard.writeText === 'function'
    )
  }, [])

  const copyToClipboard = async () => {
    if (canCopy && id) {
      try {
        const url = new URL(window.location.href)
        url.hash = `#${id}`
        await window.navigator.clipboard.writeText(url.toString())
        setShowMessage(true)
        buttonRef.current?.blur()
      } catch (error) {
        console.error('Failed to copy link:', error)
      }
    }
  }

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [showMessage])

  const showButton = isHovered && !showMessage

  return (
    <Tag
      id={id}
      className="group scroll-mt-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="inline-flex items-center gap-2">
        <span>{children}</span>
        {id && canCopy && (
          <span
            className={cn(
              'inline-flex items-center gap-1 transition-opacity',
              showButton || showMessage ? 'opacity-100' : 'opacity-0'
            )}
          >
            {showButton && (
              <button
                ref={buttonRef}
                onClick={copyToClipboard}
                className="p-0.5 rounded text-(--muted-foreground) hover:text-(--primary)"
                title="Copy link to this section"
                type="button"
                aria-label="Copy link to this section"
              >
                <LinkIcon />
              </button>
            )}
            {showMessage && (
              <span
                className="text-xs text-[var(--primary)] font-medium"
                role="status"
                aria-live="polite"
              >
                Link copied!
              </span>
            )}
          </span>
        )}
      </span>
    </Tag>
  )
}

// Pre-created heading components for each level
export function H1(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={1} {...props} />
}
export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={2} {...props} />
}
export function H3(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={3} {...props} />
}
export function H4(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={4} {...props} />
}
export function H5(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={5} {...props} />
}
export function H6(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return <Heading level={6} {...props} />
}
