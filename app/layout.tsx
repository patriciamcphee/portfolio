import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { siteConfig } from '@/config/site'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.tagline,
  icons: { icon: { url: siteConfig.favicon, type: 'image/svg+xml' } },
  openGraph: {
    description: `${siteConfig.title} — an opinionated docs framework by Pixl'n Grid.`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bricolage.variable}`}>
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
