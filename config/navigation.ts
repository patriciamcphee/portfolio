import { siteConfig } from './site'

type NavLink = { label: string; href: string }
type NavDropdown = { label: string; items: NavLink[] }
export type NavItem = NavLink | NavDropdown

const resourceItems: NavLink[] = [
  ...((siteConfig as any).releaseNotes?.enabled ? [{ label: 'Release Notes', href: '/release-notes/' }] : []),
  ...((siteConfig as any).blog?.enabled ? [{ label: 'Blog', href: '/blog/' }] : []),
  { label: 'FAQs', href: '/faq/' },
  { label: 'Glossary', href: '/components/glossary/' },
]

export const navItems: NavItem[] = [
  { label: 'About', href: '/about/' },
  { label: 'Guides', href: '/guides/writing-docs/' },
  { label: 'Blog', href: '/blog/' },
]

export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} Trellis by Pixl'n Grid`,
  poweredBy: 'Powered by Next.js',
}
