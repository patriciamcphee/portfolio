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
  { label: 'Portfolio', href: '/portfolio-overview/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Contact', href: '/contact/' },
]

export const footerConfig = {
  copyright: `© ${new Date().getFullYear()} Patricia McPhee. All rights reserved.`,
  links: {
    products: [
      { label: 'TechWrit AI', href: 'https://techwrit.ai', external: true },
      { label: 'Trellis Docs', href: 'https://www.trellisdocs.dev', external: true },
    ],
    quickLinks: [
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio-overview' },
      { label: 'Contact', href: '/contact' },
    ],
    social: {
      linkedin: 'https://www.linkedin.com/in/patriciamcphee/',
      email: 'mailto:contact@patriciamcphee.com',
    },
  },
}
