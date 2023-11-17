import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from './components/navbar';
import { BodyContent } from './components/body-content';
// import { LogoImageSmall, LogoImageLarge, LogoName } from './components/Logo'
// import { ChevronDown } from './components/Icons'

// --------- BEGIN NAVBAR COMPONENTS --------- //
// --------- END NAVBAR COMPONENTS --------- //

// --------- BEGIN HEADER COMPONENTS --------- //

const LogoImageLarge = () => {
  return (
    <Image
      src="/logo-large.svg"
      alt="Australopitech Logo"
      width={502}
      height={442}
      // layout="responsive"
      className={styles.logoImageLarge}
      priority
    />
  )
}

const LogoNameLarge = () => {
  return (
    <Image
      src="/logo-name-large2.svg"
      alt="Australopitech Name"
      width={1094.154}
      height={97.152}
      // layout="responsive"
      // fill
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.logoNameLarge}
      priority
    />
  )
}

const LogoNameMobile = () => {
  return (
    <Image
      src="/logo-name-mobile.svg"
      alt="Australopitech Name"
      width={748}
      height={195}
      // layout="responsive"
      // fill
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.logoNameMobile}
      priority
    />
  )
}

const ChevronDown = () => {
  return (
    <Image
      src="/chevron-down.svg"
      alt="Chevron down"
      width={42}
      height={26}
      className={styles.chevronDownIcon} 
      priority
    />
  )
}

const ArrowDown = () => {
  return (
    <Image
      src="/arrow-down.svg"
      alt="Arrow down"
      width={42}
      height={26}
      className={styles.arrowDownIcon} 
      priority
    />
  )
}

// --------- END HEADER COMPONENTS --------- //

// --------- BEGIN DESCRIPTION COMPONENTS --------- //




export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.bodyContent}>
        <div className={styles.header}>
          <LogoImageLarge />
          <LogoNameLarge />
          <LogoNameMobile />
          <div className={styles.headerSubtitle}>
            Shaping the Digital Frontier
          </div>
          <ArrowDown />
        </div>
        <BodyContent />
      </div>
    </div>
  )
}
