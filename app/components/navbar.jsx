'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './navbar.module.css'

const LogoImageSmall = () => {
  return (
    <Image
      src="/logo-small-4.svg"
      alt="Australopitech Logo"
      width={49}
      height={43}
      className={styles.logoImageSmall}
    />
  )
}

const LogoNameSmall = () => {
  return (
    <Image
      src="/logo-name-small-8.svg"
      // src="/logo-image-and-name.svg"
      alt="Australopitech Name"
      width={56}
      height={48.38}
      layout="responsive"
      // fill
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.logoNameSmall}
      priority
    />
  )
}

const LogoMobileSmall = () => {
  return (
    <Image
      // src="/logo-name-small.svg"
      src="/logo-image-and-name.svg"
      alt="Australopitech Name"
      width={56}
      height={48.38}
      // layout="responsive"
      className={styles.logoMobileSmall}
      priority
    />
  )
}

const MenuBar = () => {
  return (
    <Image
      src="/menu-bar-7.svg"
      alt="Chevron down"
      width={32}
      height={24}
      // width={48}
      // height={48}
      className={styles.menuBarIcon}
      priority
    />
  )
}

export const Navbar = () => {

  const [showLogo, setShowLogo] = useState(false);


  useEffect(() => {
    // This function will be called on scroll to handle the logo appearance
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const showOnHeight = 100; 

      if (currentScrollY > showOnHeight) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <div className={`${styles.navbar} ${showLogo ? styles.navbarScrolledDown  : ''}`}>
    <div className={styles.navbar}>
      {/* <div className={`${styles.navbarContainer} ${showLogo ? styles.navbarContainerScrolledDown  : ''}`}> */}
      <div className={styles.navbarContainer}>
        <div className={`${styles.logoNavbar} ${showLogo ? styles.logoNavbarVisible  : ''}`}>
          <LogoMobileSmall />
          <LogoImageSmall />
          <LogoNameSmall />
        </div>
        <div className="menu-icon-container">
        {/* <p className={styles.test}>Current window width: {windowWidth}px</p> */}
          <MenuBar />
        </div>
      </div>
    </div>
  )
}