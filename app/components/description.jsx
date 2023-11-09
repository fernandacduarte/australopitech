// import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './description.module.css'
// import { headers } from 'next/headers'

const isMobileDevice = (userAgent) => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

const SmartContractsIcon = () => {
  return (
    <Image
      src="/smart-contracts-icon.svg"
      alt="Smart contracts"
      width={57.5}
      height={53}
      // layout="responsive"
      className={styles.solutionsIcons}
      priority
    />
  )
}

const DappsDevelopmentIcon = () => {
  return (
    <Image
      src="/dapps-development-icon.svg"
      alt="Dapps Development"
      width={57.5}
      height={53}
      // layout="responsive"
      className={styles.solutionsIcons}
      priority
    />
  )
}

const Web3Integration = () => {
  return (
    <Image
      src="/web3-integration-icon.svg"
      alt="Web3 Integration"
      width={53.5}
      height={53}
      // layout="responsive"
      className={styles.solutionsIcons}
      priority
    />
  )
}

const BlockchainConsulting = () => {
  return (
    <Image
      src="/blockchain-consulting-icon.svg"
      alt="Blockchain Consulting"
      width={62}
      height={57.5}
      // layout="responsive"
      className={styles.solutionsIcons}
      priority
    />
  )
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
          Our solutions <span className={styles.solutionsTitleMobile}>involve</span>
        </h1>
        <div className={styles.solutionsCardGrid}>
          <div className={styles.solutionsCard}>
            {/* <div> */}
              <SmartContractsIcon />
            {/* </div> */}
            <span className={styles.solutionText}>
              Smart <br />Contracts
            </span>
          </div>
          <div className={styles.solutionsCard}>
            <DappsDevelopmentIcon />
            <span className={styles.solutionText}>
              DApps<br />Development
            </span>
          </div>
          <div className={styles.solutionsCard}>
            <Web3Integration />
            <span className={styles.solutionText}>
              Web3<br />Integrations
            </span>
          </div>
          <div className={styles.solutionsCard}>
            <BlockchainConsulting />
            <span className={styles.solutionText}>
              Blockchain<br />Consulting
            </span>
          </div>
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
