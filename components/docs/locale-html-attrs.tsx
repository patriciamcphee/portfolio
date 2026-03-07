'use client'

import { useEffect } from 'react'
import { useDocContext } from '@/lib/doc-context'
import { siteConfig } from '@/config/site'

export function LocaleHtmlAttrs() {
  const { locale } = useDocContext()

  useEffect(() => {
    if (!siteConfig.i18n?.enabled) return

    const localeConfig = siteConfig.i18n.locales.find((l) => l.code === locale)
    if (localeConfig) {
      document.documentElement.lang = locale
      document.documentElement.dir = localeConfig.dir
    }
  }, [locale])

  return null
}
