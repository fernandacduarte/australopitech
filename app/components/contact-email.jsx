'use client'

import { useState } from 'react';
import Image from 'next/image';
import styles from './contact-email.module.css'

const CopyIconMobile = () => {
  return (
    <Image
      src="/copy-icon-mobile.svg"
      alt="Copy company email address"
      width={36.5}
      height={42.5}
      className={styles.contactCopyIconMobile}
      priority
    />
  )
}

export const ContactEmail = () => {
  const [copyFeedback, setCopyFeedback] = useState('');

  const handleCopy = (event) => {
    // const textToCopy = event.target.textContent;
    
    // navigator.clipboard.writeText(textToCopy)
    // .then(() => {
    //   setCopyFeedback('Copied to clipboard!');
    //   setTimeout(() => setCopyFeedback(''), 2000);
    // }).catch(err => {
    //   setCopyFeedback('Failed to copy!');
    //   console.error('Failed to copy text: ', err);
    // });

    const textToCopy = 'australopitech@proton.me';
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      setCopyFeedback('Copied to clipboard!');
      setTimeout(() => setCopyFeedback(''), 2000);
    } catch (err) {
      setCopyFeedback('Failed to copy!');
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
  };

  return (
    <div className={styles.contactEmailContainer}>
      <div onClick={handleCopy} className={styles.contactEmail}>
        australopitech@proton.me
      </div>
      {copyFeedback && <div className={styles.feedbackMessage}>{copyFeedback}</div>}
      <div className={styles.contactCopyIconMobileContainer} onClick={handleCopy}>
        <CopyIconMobile />
      </div>
      {/* <Image
        onClick={handleCopy}
        src="/copy-icon-mobile.svg"
        alt="Copy company email address"
        width={36.5}
        height={42.5}
        className={styles.contactCopyIconMobile}
        priority
    /> */}
    </div>
  )
}