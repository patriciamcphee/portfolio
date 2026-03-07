import Link from 'next/link'

interface DocCardProps {
  title: string
  description?: string
  href: string
}

export function DocCard({ title, description, href }: DocCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 no-underline transition-colors hover:border-[var(--primary)] hover:bg-[var(--accent)]"
    >
      <h3 className="m-0 text-base font-semibold text-[var(--foreground)] group-hover:text-(--accent-foreground)">
        {title}
      </h3>
      {description && (
        <p className="m-0 mt-1.5 text-sm text-[var(--muted-foreground)] group-hover:text-(--accent-foreground) line-clamp-2">
          {description}
        </p>
      )}
    </Link>
  )
}
