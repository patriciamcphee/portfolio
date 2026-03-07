const colorMap: Record<string, { bg: string; text: string; darkBg: string; darkText: string }> = {
  green: {
    bg: 'bg-utility-green-20',
    text: 'text-utility-green-100',
    darkBg: 'dark:bg-utility-green-100/15',
    darkText: 'dark:text-[#4ade80]',
  },
  red: {
    bg: 'bg-utility-red-20',
    text: 'text-utility-red-100',
    darkBg: 'dark:bg-utility-red-100/15',
    darkText: 'dark:text-[#f87171]',
  },
  yellow: {
    bg: 'bg-utility-yellow-20',
    text: 'text-utility-yellow-100',
    darkBg: 'dark:bg-utility-yellow-100/15',
    darkText: 'dark:text-[#facc15]',
  },
  blue: {
    bg: 'bg-brand-primary-50',
    text: 'text-brand-primary-600',
    darkBg: 'dark:bg-brand-primary-600/15',
    darkText: 'dark:text-brand-primary-200',
  },
  neutral: {
    bg: 'bg-[var(--color-neutral-slate-100)]',
    text: 'text-[var(--color-neutral-slate-700)]',
    darkBg: 'dark:bg-[var(--color-neutral-slate-800)]',
    darkText: 'dark:text-[var(--color-neutral-slate-200)]',
  },
}

interface ChipProps {
  color?: keyof typeof colorMap
  children: React.ReactNode
}

export function Chip({ color = 'neutral', children }: ChipProps) {
  const c = colorMap[color] || colorMap.neutral
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.bg} ${c.text} ${c.darkBg} ${c.darkText}`}>
      {children}
    </span>
  )
}
