export interface AuthorProfile {
  name: string
  role?: string
  bio?: string
  img?: string
  url?: string
}

/**
 * Central author profiles. Blog posts can reference authors by key
 * (e.g. `authors: [patriciamcphee]`) instead of repeating inline objects.
 *
 * Inline objects in frontmatter override fields from the config.
 */
export const authors: Record<string, AuthorProfile> = {
  patriciamcphee: {
    name: 'Patricia McPhee',
    role: 'Framework Founder & Lead Technical Writer',
    bio: 'Patricia is a Technical Content Manager and Developer Experience practitioner with 30 years of Technical Writing experience. She started her career in networking and cloud engineering, writing documentation for system administrators, network engineers, and datacenter personnel. That foundation shaped how she approaches technical content — over the past 15+ years, she\'s focused on developer platforms, writing API references, SDK guides, and developer documentation at Microsoft, Amazon, Meta, GE Healthcare, and LivePerson.',
    img: '/img/authors/avatar-patriciamcphee.png',
  },
}
