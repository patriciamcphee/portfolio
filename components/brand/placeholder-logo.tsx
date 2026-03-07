/**
 * Placeholder logo components.
 * Replace these with your own brand SVGs or images.
 */

interface LogoProps {
  className?: string
  size?: number
}

/** Small icon for navbar (default 32px) */
export function PlaceholderIcon({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Document with folded corner */}
      <path
        d="M8 4h10l6 6v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M8 4h10l6 6v18a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M18 4v6h6" stroke="currentColor" strokeWidth="1.5" />
      {/* Text lines */}
      <path
        d="M12 16h8M12 20h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Text wordmark for navbar and hero */
export function PlaceholderWordmark({ className }: { className?: string }) {
  return (
    <span className={className} style={{ fontWeight: 700, fontSize: '1.25rem' }}>
      Docs
    </span>
  )
}
