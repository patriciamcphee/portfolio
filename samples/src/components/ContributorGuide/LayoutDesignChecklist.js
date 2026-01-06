import React, { useState } from 'react';
import { Checkbox } from './CheckboxComponent';
import styles from './styles.module.css';

export default function LayoutDesignChecklist() {
  const [checkedItems, setCheckedItems] = useState(new Array(6).fill(false));

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistItems = [
    'Ensure the content is structured logically and easily navigated. Use a clear and consistent layout throughout the document.',
    'Maintain high-quality visuals and adequate white space to prevent clutter and enhance readability.',
    'Use bullet points to simplify information. Keep lists concise and easy to scan.',
    'Ensure the content is accessible and understandable, even for users without advanced expertise. Clearly outline any instructions or actions.',
    'Maintain a clear and user-friendly navigation structure. Avoid overly complex lists or nested levels.',
    'Ensure all documentation components follow a consistent style and structure.'
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
