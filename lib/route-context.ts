import { siteConfig } from '@/config/site'
import { getVersions, isKnownVersion } from './versions'
import type { DocContext } from './i18n-types'

export async function parseSlug(rawSlug: string[]): Promise<DocContext> {
  const { i18n, versioning } = siteConfig
  const defaultLocale = i18n?.defaultLocale || 'en'
  const localeCodes = i18n?.enabled
    ? i18n.locales.map((l) => l.code).filter((c) => c !== defaultLocale)
    : []
  const versions = versioning?.enabled ? await getVersions() : []

  let locale = defaultLocale
  let version = 'current'
  const remaining = [...rawSlug]

  // Check first segment for a non-default locale
  if (remaining.length > 0 && localeCodes.includes(remaining[0])) {
    locale = remaining.shift()!
  }

  // Check next segment for a known version
  if (remaining.length > 0 && isKnownVersion(remaining[0], versions)) {
    version = remaining.shift()!
  }

  return {
    locale,
    version,
    slug: remaining,
    isFallback: false,
  }
}

export function buildUrlPrefix(locale: string, version: string): string {
  const defaultLocale = siteConfig.i18n?.defaultLocale || 'en'
  const parts: string[] = []
  if (locale !== defaultLocale) parts.push(locale)
  if (version !== 'current') parts.push(version)
  return parts.length > 0 ? '/' + parts.join('/') : ''
}
