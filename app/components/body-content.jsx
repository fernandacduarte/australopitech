// import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './body-content.module.css'
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

const Web3IntegrationIcon = () => {
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

const BlockchainConsultingIcon = () => {
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

const ArrowDiagonalIcon = () => {
  return (
    <Image
      src="/arrow-diagonal.svg"
      alt="Arrow with link"
      width={56.694}
      height={56.492}
      className={styles.prizesIcon}
      priority
    />
  )
}

const PictureTeam1 = () => {
  return (
    <Image
      src="/team1.png"
      alt="Team member: Bernardo Franceschin"
      width={289}
      height={289}
      className={styles.ourTeamPicture}
      priority
    />
  )
}

const PictureTeam2 = () => {
  return (
    <Image
      src="/team2.png"
      alt="Team member: Fernanda Duarte"
      width={289}
      height={289}
      className={styles.ourTeamPicture}
      priority
    />
  )
}

const PictureTeam3 = () => {
  return (
    <Image
      src="/team3.png"
      alt="Team member: Pedro Franceschin"
      width={289}
      height={289}
      className={styles.ourTeamPicture}
      priority
    />
  )
}

const GithubIcon = () => {
  return (
    <Image
      src="/github-icon.svg"
      alt="Link to Github profile"
      width={42}
      height={42}
      className={styles.githubIcon}
      priority
    />
  )
}

const XIcon = () => {
  return (
    <Image
      src="/x-icon.svg"
      alt="Link to X profile"
      width={37}
      height={34}
      className={styles.xIcon}
      priority
    />
  )
}

const LinkedinIcon = () => {
  return (
    <Image
      src="/linkedin-icon.svg"
      alt="Link to Linkedin profile"
      width={34}
      height={33}
      className={styles.linkedinIcon}
      priority
    />
  )
}

const GmailIcon = () => {
  return (
    <Image
      src="/gmail-icon.svg"
      alt="Click to copy the gmail address"
      width={32}
      height={32}
      className={styles.gmailIcon}
      priority
    />
  )
}

const CopyIcon = () => {
  return (
    <Image
      src="/copy-icon.svg"
      alt="Copy company email address"
      width={36.5}
      height={42.5}
      className={styles.contactCopyIcon}
      priority
    />
  )
}

const EmailIcon = () => {
  return (
    <Image
      src="/email-icon.svg"
      alt="Copy company email address"
      width={63}
      height={49.5}
      className={styles.contactEmailIcon}
      priority
    />
  )
}

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


export const BodyContent = () => {
  // const headersList = headers()
  // const useragent = headersList.get('user-agent')
  // const isMobile = isMobileDevice(useragent)

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.introductionContainer}>
        <div className={styles.introductionBoxBorder}>
          <div className={styles.introductionText}>
            {/* We are a tech company that creates amazing <span className={styles.introductionHighlightWords}>web3 products</span> and promotes consulting for <span className={styles.introductionHighlightWords}>web3 aspirants</span>. */}
            We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
          </div>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>
          Our solutions <span className={styles.sectionTitleMobile}>involve</span>
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
            <Web3IntegrationIcon />
            <span className={styles.solutionText}>
              Web3<br />Integrations
            </span>
          </div>
          <div className={styles.solutionsCard}>
            <BlockchainConsultingIcon />
            <span className={styles.solutionText}>
              Blockchain<br />Consulting
            </span>
          </div>
        </div>
      </div>

      <div className={styles.catchyPhraseContainer}>
        <div className={styles.catchyPhraseBorderBox}>
          <p className={styles.catchyPhraseText}>
          From smart contracts to decentralized applications, we transform brilliant ideas 
          into <span className={styles.catchyPhraseHighlightWords}>functional Web3 Applications</span>.
          </p>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>
          Prizes and Grants
        </h1>
        <div className={styles.prizesCardGrid}>
          <div className={styles.prizeCard}>
            <span className={styles.prizeText}>
              {/* Metaverse <br /> Hackathon <br /> Finalist */}
              Metaverse <br /> Hackathon <br /> Finalist
            </span>
            <div className={styles.prizesIconContainer}>
              <ArrowDiagonalIcon />
            </div>
          </div>
          <div className={styles.prizeCard}>
            <span className={styles.prizeText}>
              ETHSamba <br /> Hack <br /> Rio23
            </span>
            <div className={styles.prizesIconContainer}>
              <ArrowDiagonalIcon />
            </div>
          </div>
          <div className={styles.prizeCard}>
            <span className={styles.prizeText}>
              Coinbase <br />  Based Accounts <br /> Grant
            </span>
            <div className={styles.prizesIconContainer}>
              <ArrowDiagonalIcon />
            </div>
          </div>
          
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>
          Our team
        </h1>
        <div className={styles.ourTeamCardGrid}>
          <div className={styles.ourTeamCard}>
            <div className={styles.ourTeamPicture}>
              <PictureTeam1 />
            </div>
            <div className={styles.ourTeamDescriptionContainer}>
              <span className={styles.ourTeamDescriptionName}>
                Bernardo <br />Franceschin
              </span>
              <span className={styles.ourTeamDescriptionRole}>
                Full-stack Developer <br /> 
                {/* <span className={styles.newHiddenLine}>new line</span> */}
              </span >
              <span className={styles.ourTeamDescriptionIcons}>
                <GithubIcon />
                <XIcon />
                <LinkedinIcon />
                <GmailIcon />
              </span>
            </div>
          </div>

          <div className={styles.ourTeamCard}>
            <div className={styles.ourTeamPicture}>
              <PictureTeam2 />
            </div>
            <div className={styles.ourTeamDescriptionContainer}>
              <span className={styles.ourTeamDescriptionName}>
                Pedro <br />Franceschin
              </span>
              <span className={styles.ourTeamDescriptionRole}>
                Full-stack Developer <br />
                {/* <span className={styles.newHiddenLine}>new line</span> */}
              </span >
              <span className={styles.ourTeamDescriptionIcons}>
                <GithubIcon />
                <XIcon />
                <LinkedinIcon />
                <GmailIcon />
              </span>
            </div>
          </div>

          <div className={styles.ourTeamCard}>
            <div className={styles.ourTeamPicture}>
              <PictureTeam3 />
            </div>
            <div className={styles.ourTeamDescriptionContainer}>
            <span className={styles.ourTeamDescriptionName}>
                Fernanda <br />Duarte
              </span>
              <span className={styles.ourTeamDescriptionRole}>
                Front-end developer <br />and UI Designer
              </span >
              <span className={styles.ourTeamDescriptionIcons}>
                <GithubIcon />
                <XIcon />
                <LinkedinIcon />
                <GmailIcon />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactTitle}>
          Contact us!
        </div>
        {/* <EmailIcon /> */}
        {/* <div className={styles.contactEmailContainer}> */}
        <div className={styles.contactEmail}>
          australopitech@proton.me
        </div>
        {/* <div className={styles.contactCopyIconContainer}> */}
          {/* <div className={styles.contactCopyIconBox}> */}
            {/* <span className={styles.contactCopyText}>copy</span> */}
            {/* <CopyIcon /> */}
          {/* </div> */}
        <CopyIconMobile />
        {/* </div> */}
        {/* </div> */}
      </div>

      <div className={styles.footer}>
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </div>
  )
}
