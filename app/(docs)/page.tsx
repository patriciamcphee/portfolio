import type { Metadata } from 'next'
import { Hero } from '../components/Hero'

export const metadata: Metadata = {
  title: 'Technical Content Leader & AI Content Strategist',
  description:
    'Patricia McPhee builds documentation systems, AI-assisted content operations, developer portals, and API content for complex technical products.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Patricia McPhee',
    url: 'https://www.patriciamcphee.com',
    jobTitle: 'Technical Content Manager',
    description:
      'Technical content leader specializing in AI-assisted content operations, developer experience, API documentation, and documentation platforms.',
    sameAs: ['https://www.linkedin.com/in/patriciamcphee/'],
    knowsAbout: [
      'Technical content strategy',
      'AI-assisted content operations',
      'Developer experience',
      'API documentation',
      'Documentation platforms',
      'Information architecture',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
    </>
  )
}
