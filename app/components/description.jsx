// import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './description.module.css'
// import { headers } from 'next/headers'

const isMobileDevice = (userAgent) => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

export const Description = () => {
  // const headersList = headers()
  // const useragent = headersList.get('user-agent')
  // const isMobile = isMobileDevice(useragent)

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.introductionContainer}>
        <div className={styles.introductionBoxBorder}>
          <div className={styles.introductionText}>
            We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
          </div>
        </div>
      </div>

      <div className={styles.solutionsContainer}>
        <h1 className={styles.solutionsTitle}>
          Our solutions involve
        </h1>
        <div className={styles.solutionsCardGrid}>
          <div className={styles.solutionsCard}></div>
          <div className={styles.solutionsCard}></div>
          <div className={styles.solutionsCard}></div>
          <div className={styles.solutionsCard}></div>
        </div>
      </div>

      <div className={styles.catchyPhrase}>
        <div className={styles.decorationLine}>
        </div>
        <p className={styles.catchyPhraseText}>
        </p>
      </div>

    </div>
  )
}
