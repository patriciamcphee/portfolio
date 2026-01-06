import React, { useState } from 'react';
import { Checkbox } from './CheckboxComponent';
import styles from './styles.module.css';

export default function ContentCreationChecklist() {
  const [checkedItems, setCheckedItems] = useState(new Array(7).fill(false));

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistItems = [
    'Verify that all technical details, including code snippets, formulas, and commands, are correct.',
    'Organize the document logically, ensuring a clear flow that guides the reader through the content.',
    'Use simple language and concise paragraphs. Avoid complex terminology or explain it clearly when necessary.',
    'Establish a clear visual hierarchy with appropriate headings and subheadings, limited to four levels.',
    'Use screenshots, diagrams, or videos to break up text and help explain complex concepts.',
    'Use technical terms consistently across the document. Ensure that they match those used within the software or device.',
    'Keep the document structure simple and prioritize the most important information first.'
  ];

  return (
    <div className={styles.checklist}>
      {checklistItems.map((label, index) => (
        <Checkbox
          key={index}
          label={label}
          checked={checkedItems[index]}
          onChange={() => handleCheck(index)}
        />
      ))}
    </div>
  );
}
