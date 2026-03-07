import type { ReactNode } from 'react'

export function Tooltip({ children, content }: { children: ReactNode; content: string }) {
  return (
    <span className="tooltip-trigger">
      {children}
      <span className="tooltip-content">{content}</span>
    </span>
  )
}
