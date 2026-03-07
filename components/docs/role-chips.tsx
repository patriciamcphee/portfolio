import { User } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface RoleChipsProps {
  roles: string[]
}

function getContrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.5 ? '#000000' : '#ffffff'
}

export function RoleChips({ roles }: RoleChipsProps) {
  if (!roles || roles.length === 0) return null

  const roleColors = (siteConfig as any).roleColor as Record<string, string> | undefined

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {roles.map((role) => {
        const bg = roleColors?.[role]
        return (
          <span
            key={role}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-[var(--primary)] text-[var(--primary-foreground)]"
            style={bg ? { backgroundColor: bg, color: getContrastColor(bg) } : undefined}
          >
            <User size={12} />
            {role}
          </span>
        )
      })}
    </div>
  )
}
