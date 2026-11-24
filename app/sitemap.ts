import type { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site'

export const dynamic = 'force-static'

const routes = [
  '',
  '/about',
  '/portfolio-overview',
  '/blog',
  '/contact',
  '/portfolio/devops-comms-utility',
  '/portfolio/techwrit-ai-platform',
  '/portfolio/create-page-redesign',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? 'weekly' : 'monthly',
    priority: index === 0 ? 1 : route === '/portfolio-overview' ? 0.9 : 0.7,
  }))
}
