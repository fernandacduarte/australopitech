import Image from 'next/image'
import styles from './page.module.css'
import { Navbar } from './components/navbar';
import { Description } from './components/description';
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
      src="/logo-name-large.svg"
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

const ChevronDown = () => {
  return (
    <Image
      src="/chevron-down.svg"
      alt="Chevron down"
      width={42}
      height={26}
      priority
    />
  )
}

// --------- END HEADER COMPONENTS --------- //

// --------- BEGIN DESCRIPTION COMPONENTS --------- //




export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      <div className={styles.body}>
        <div className={styles.header}>
          <LogoImageLarge />
          <LogoNameLarge />
          <div className={styles.headerSubtitle}>
            Shaping the Digital Frontier
          </div>
          <ChevronDown />
        </div>

        {/* <div class={styles.gradientBorderContainer}>
          blabla
        </div> */}

        <Description />

        

        <div className={styles.awards}>
          
        </div>

        <div className={styles.team}>
          
        </div>

        <div className={styles.contact}>
          
        </div>

        <div className={styles.footer}>
          
        </div>
      </div>
    </main>
  )
}
