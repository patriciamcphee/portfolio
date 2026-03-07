import type { ReleaseNoteEntry } from '@/lib/content'

export interface ReleaseIndexLayoutProps {
  notes: ReleaseNoteEntry[]
}

export interface ReleaseArticleLayoutProps {
  note: ReleaseNoteEntry
  allNotes: ReleaseNoteEntry[]
}
