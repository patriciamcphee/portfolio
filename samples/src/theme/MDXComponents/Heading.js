// src/theme/MDXComponents/Heading.js
import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function LinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MDXHeading(props) {
  const [showMessage, setShowMessage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);
  
  const canCopy = typeof window !== 'undefined' &&
    window.navigator.clipboard &&
    typeof window.navigator.clipboard.writeText === 'function';

  const copyToClipboard = async () => {
    if (canCopy && props.id) {
      try {
        const url = new URL(window.location.href);
        url.hash = `#${props.id}`;
        await window.navigator.clipboard.writeText(url.toString());
        setShowMessage(true);
        
        // Force blur using ref
        if (buttonRef.current) {
          buttonRef.current.blur();
        }
        
        // Additional force blur attempts
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      } catch (error) {
        console.error('Failed to copy link:', error);
      }
    }
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  // Determine if button should be visible
  const showButton = isHovered && !showMessage;

  // Wrap the heading content with copy functionality
  const headingContent = (
    <span 
      className={styles.headingContent}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={styles.headingText}>{props.children}</span>
      {props.id && canCopy && (
        <span 
          className={clsx(
            styles.copyButtonWrapper,
            (showButton || showMessage) && styles.visible
          )}
        >
          <button
            ref={buttonRef}
            onClick={copyToClipboard}
            className={styles.copyButton}
            title="Copy link to this section"
            type="button"
            aria-label="Copy link to this section"
            style={{ visibility: showButton ? 'visible' : 'hidden' }}
          >
            <LinkIcon />
          </button>
          {showMessage && (
            <span className={styles.copyMessage} role="status" aria-live="polite">
              Link copied!
            </span>
          )}
        </span>
      )}
    </span>
  );

  // Use the default Docusaurus Heading component with our custom content
  return (
    <Heading {...props} className={clsx(styles.headingWithCopy, props.className)}>
      {headingContent}
    </Heading>
  );
}