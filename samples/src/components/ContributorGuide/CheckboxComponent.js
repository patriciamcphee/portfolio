import React from 'react';
import styles from './styles.module.css';

export const Checkbox = ({ label, onChange, checked }) => {
  return (
    <label className={styles.checkboxContainer}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkmark}></span>
      <span className={styles.label}>{label}</span>
    </label>
  );
};
