'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './navbar.module.css'

const LogoImageSmall = () => {
  return (
    <Image
      src="/logo-small.svg"
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
      src="/logo-name-small.svg"
      alt="Australopitech Name"
      width={175}
      height={16}
      layout="responsive"
      // fill
      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={styles.logoNameSmall}
      priority
    />
  )
}

const MenuBar = () => {
  return (
    <Image
      src="/menu-bar.svg"
      alt="Chevron down"
      width={48}
      height={48}
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
      const showOnHeight = 20; 

      console.log("********* currentScrollY: ", currentScrollY)

      if (currentScrollY > showOnHeight) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    console.log("********* window.scrollY: ", window.scrollY)

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // <div className={`${styles.navbar} ${showLogo ? styles.navbarScrolledDown  : ''}`}>
    <div className={styles.navbar}>
      {/* <div className={`${styles.navbarContainer} ${showLogo ? styles.navbarContainerScrolledDown  : ''}`}> */}
      <div className={styles.navbarContainer}>
        <div className={`${styles.logoNavbar} ${showLogo ? styles.logoNavbarVisible  : ''}`}>
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