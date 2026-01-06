import React, { useState } from 'react';
import { Checkbox } from './CheckboxComponent';
import styles from './styles.module.css';

export default function PlanningChecklist() {
  const [checkedItems, setCheckedItems] = useState(new Array(7).fill(false));

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistItems = [
    'Ensure the title accurately reflects the content and the purpose is clearly stated and understandable.',
    'Tailor the content to address the target audience\'s specific needs, questions, and use cases.',
    'Define the document\'s objectives and ensure that it effectively communicates its intended message.',
    'Determine whether the content is for internal or external use.',
    'Check for existing content to avoid duplication. Consolidate similar content when necessary.',
    'Coordinate with team members to avoid overlapping content and ensure consistency.',
    'Decide if videos, GIFs, or other media will enhance the content\'s clarity and engagement.'
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
