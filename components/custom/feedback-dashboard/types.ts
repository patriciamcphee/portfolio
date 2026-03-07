export interface FeedbackTotals {
  total: number
  likes: number
  dislikes: number
  satisfactionRate: number
}

export interface FeedbackByPage {
  page: string
  likes: number
  dislikes: number
  total: number
  satisfactionRate: number
}

export interface FeedbackByOption {
  option: string
  count: number
  type: 'like' | 'dislike'
}

export interface FeedbackEntry {
  id: string
  page: string
  type: 'like' | 'dislike'
  options: string[]
  comment: string
  createdAt: string
}

export interface FeedbackSummaryResponse {
  totals: FeedbackTotals
  byPage: FeedbackByPage[]
  byOption: FeedbackByOption[]
  recentEntries: FeedbackEntry[]
}

export type Period = 'all' | '30d' | '7d'

/** Maps option keys to human-readable labels */
export const OptionLabels: Record<string, string> = {
  ACCURATE: 'Accurately describes the platform',
  RESOLVE_ISSUE: 'Helped me resolve an issue',
  EASY_TO_FOLLOW: 'Easy to follow and comprehend',
  CLEAR_CODE_SAMPLES: 'Code samples were clear',
  ADOPT_PLATFORM: 'Convinced me to adopt the platform',
  POSITIVE_ANOTHER_REASON: 'Provide details',
  INACCURATE: "Doesn't accurately describe the platform",
  NOT_FOUND: "Couldn't find what I was looking for",
  MISSING_INFO: 'Missing important information',
  HARD_TO_UNDERSTAND: 'Hard to understand',
  COMPLICATED: 'Too complicated or unclear',
  CODE_ERRORS: 'Code sample errors',
  NEGATIVE_ANOTHER_REASON: 'Provide details',
}
