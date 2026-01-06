import React, { useState } from 'react';
import { Checkbox } from './CheckboxComponent';
import styles from './styles.module.css';

export default function ContentQualityChecklist() {
  const [checkedItems, setCheckedItems] = useState(new Array(4).fill(false));

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistItems = [
    'Ensure the content follows established guidelines, standards, and best practices.',
    'Use tools like Microsoft Word\'s Editor (F7) panel to perform thorough checks for typos, spelling, or punctuation errors.',
    'Check that all hyperlinks work correctly and lead to the appropriate destinations.',
    'Identify any related content that should reference this document and update accordingly.'
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
