'use client'

import { useEffect, useState } from 'react'
import glossaryData from '@/data/glossary.json'

interface GlossaryEntry {
  term: string
  definition: string | { term: string; definition: string }[]
}

export function Glossary() {
  const [glossary, setGlossary] = useState<GlossaryEntry[]>([])

  useEffect(() => {
    const sorted = Object.entries(glossaryData)
      .map(([term, definition]) => {
        if (typeof definition === 'object' && !Array.isArray(definition)) {
          return {
            term,
            definition: Object.entries(definition).map(([subTerm, subDef]) => ({
              term: subTerm,
              definition: subDef as string,
            })),
          }
        }
        return { term, definition: definition as string }
      })
      .sort((a, b) => a.term.localeCompare(b.term))

    setGlossary(sorted)
  }, [])

  return (
    <div>
      <dl>
        {glossary.map(({ term, definition }) => (
          <div key={term} className="mt-6 first:mt-0">
            <dt><strong>{term}</strong></dt>
            {Array.isArray(definition) ? (
              <dd>
                <ul>
                  {definition.map((sub) => (
                    <li key={sub.term}>
                      <strong>{sub.term}:</strong> {sub.definition}
                    </li>
                  ))}
                </ul>
              </dd>
            ) : (
              <dd>{definition}</dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  )
}
