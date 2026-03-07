export interface LocaleConfig {
  code: string
  name: string
  dir: 'ltr' | 'rtl'
}

export interface VersioningConfig {
  enabled: boolean
  currentLabel: string
}

export interface I18nConfig {
  enabled: boolean
  defaultLocale: string
  locales: LocaleConfig[]
}

export interface DocContext {
  locale: string
  version: string
  slug: string[]
  isFallback: boolean
}
