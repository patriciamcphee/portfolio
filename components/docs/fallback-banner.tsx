'use client'

import { siteConfig } from '@/config/site'

interface FallbackBannerProps {
  locale: string
}

export function FallbackBanner({ locale }: FallbackBannerProps) {
  const localeName =
    siteConfig.i18n?.locales.find((l) => l.code === locale)?.name || locale

  return (
    <div className="mb-6 p-4 rounded-lg border border-amber-500/30 bg-amber-500/10 text-sm">
      This page has not been translated to {localeName} yet. You are viewing the
      English version.
    </div>
  )
}
