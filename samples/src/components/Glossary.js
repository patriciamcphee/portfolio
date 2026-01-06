import React, { useEffect, useState } from 'react';
import glossaryData from '../data/glossary.json';

const Glossary = () => {
  const [glossary, setGlossary] = useState([]);

  useEffect(() => {
    // Extract and sort glossary entries
    const sortedGlossary = Object.entries(glossaryData).map(([term, definition]) => {
      if (typeof definition === 'object') {
        return {
          term,
          definition: Object.entries(definition).map(([subTerm, subDefinition]) => ({
            term: subTerm,
            definition: subDefinition,
          })),
        };
      }
      return { term, definition };
    }).sort((a, b) => a.term.localeCompare(b.term));

    setGlossary(sortedGlossary);
  }, []);

  return (
    <div>
      <dl>
        {glossary.map(({ term, definition }) => (
          <div key={term}>
            <dt><strong>{term}</strong></dt>
            {Array.isArray(definition) ? (
              <dd>
                <ul>
                  {definition.map(subItem => (
                    <li key={subItem.term}>
                      <strong>{subItem.term}:</strong> {subItem.definition}
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
  );
};

export default Glossary;
