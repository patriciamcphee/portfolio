'use client'

import { DocContextProvider } from '@/lib/doc-context'
import type { LocaleConfig } from '@/lib/i18n-types'

interface DocContextWrapperProps {
  locale: string
  version: string
  urlPrefix: string
  versions: string[]
  locales: LocaleConfig[]
  children: React.ReactNode
}

export function DocContextWrapper({
  locale,
  version,
  urlPrefix,
  versions,
  locales,
  children,
}: DocContextWrapperProps) {
  return (
    <DocContextProvider value={{ locale, version, urlPrefix, versions, locales }}>
      {children}
    </DocContextProvider>
  )
}
