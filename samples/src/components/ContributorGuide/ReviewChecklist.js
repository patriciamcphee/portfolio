import React, { useState } from 'react';
import { Checkbox } from './CheckboxComponent';
import styles from './styles.module.css';

export default function ReviewChecklist() {
  const [checkedItems, setCheckedItems] = useState(new Array(4).fill(false));

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const checklistItems = [
    'Conduct an initial review focused on technical accuracy, clarity, and alignment with the document\'s goals.',
    'Identify reviewers with expertise in accuracy and readability. Ensure feedback is collected within clear deadlines.',
    'Revise the content based on reviewer feedback. If significant changes are made, consider another round of reviews.',
    'Before publishing, perform a final proofread to catch any remaining spelling, grammar, or punctuation errors.'
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
