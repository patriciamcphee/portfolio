import type { Metadata } from 'next'
import { Inter, Literata } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const literata = Literata({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.tagline,
  keywords: [
    'technical content manager',
    'AI content strategy',
    'content operations',
    'developer experience',
    'API documentation',
    'documentation platform',
    'content design',
  ],
  authors: [{ name: 'Patricia McPhee', url: siteConfig.url }],
  creator: 'Patricia McPhee',
  alternates: {
    canonical: '/',
  },
  icons: { icon: { url: siteConfig.favicon, type: 'image/svg+xml' } },
  openGraph: {
    type: 'website',
    url: siteConfig.url,
    siteName: 'Patricia McPhee',
    title: 'Patricia McPhee — Technical Content Leader',
    description:
      'Patricia McPhee is a Technical Content Manager building AI-assisted content workflows and developer documentation for platforms at Microsoft, Amazon, Meta, and beyond.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patricia McPhee — Technical Content Leader',
    description:
      'Documentation systems, AI-assisted content operations, and developer experiences for complex technical products.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${literata.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={siteConfig.colorMode.defaultMode}
          enableSystem={siteConfig.colorMode.respectPrefersColorScheme}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
