import { siteConfig } from '@/config/site'
import { getVersions } from './versions'
import { getAllDocSlugs } from './content'

export async function generateAllParams(): Promise<{ slug: string[] }[]> {
  const { i18n, versioning } = siteConfig
  const defaultLocale = i18n?.defaultLocale || 'en'

  const locales = i18n?.enabled
    ? i18n.locales.map((l) => l.code)
    : [defaultLocale]

  const versions = versioning?.enabled
    ? ['current', ...(await getVersions())]
    : ['current']

  const allParams: { slug: string[] }[] = []

  for (const locale of locales) {
    for (const version of versions) {
      // Always enumerate from the default locale's doc set per version.
      // Non-default locales fall back to default locale content when
      // a translation is missing, so routes always exist.
      const slugs = await getAllDocSlugs(defaultLocale, version)

      for (const docSlug of slugs) {
        const prefix: string[] = []
        if (locale !== defaultLocale) prefix.push(locale)
        if (version !== 'current') prefix.push(version)

        allParams.push({ slug: [...prefix, ...docSlug] })
      }
    }
  }

  return allParams
}
