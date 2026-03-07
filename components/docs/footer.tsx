import { footerConfig } from '@/config/navigation'

export function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-center text-xs text-[var(--primary-foreground)] py-2">
      {footerConfig.copyright}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{footerConfig.poweredBy}
    </footer>
  )
}
