'use client'

import { createContext, useContext } from 'react'
import type { LocaleConfig } from './i18n-types'

interface DocContextValue {
  locale: string
  version: string
  urlPrefix: string
  versions: string[]
  locales: LocaleConfig[]
}

const DocContext = createContext<DocContextValue>({
  locale: 'en',
  version: 'current',
  urlPrefix: '',
  versions: [],
  locales: [],
})

export const DocContextProvider = DocContext.Provider
export const useDocContext = () => useContext(DocContext)
