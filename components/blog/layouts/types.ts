import type { BlogEntry } from '@/lib/content'

export interface BlogIndexLayoutProps {
  posts: BlogEntry[]
}

export interface BlogArticleLayoutProps {
  post: BlogEntry
  allPosts: BlogEntry[]
}
