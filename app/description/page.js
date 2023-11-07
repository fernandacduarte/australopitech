// import { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import { headers } from 'next/headers'

const DescriptionBoxDesktop = ({ children }) => {
  return (
    <div className={styles.descriptionBox}>
      <Image
        src="/description-box.svg"
        alt="Company role description"
        width={1106}
        height={390}
        // layout="responsive"
        className={styles.descriptionBoxBorderDesktop}
        priority
      />
      {children}
    </div>
  )
}

const DescriptionBoxMobile = ({ children }) => {
  return (
    <div className={styles.descriptionBox}>
      <Image
        src="/description-box-mobile.svg"
        alt="Company role description"
        width={312}
        height={240}
        // layout="responsive"
        className={styles.descriptionBoxBorderMobile}
        priority
      />
      {children}
    </div>
  )
}

const isMobileDevice = (userAgent) => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

export const Description = () => {

  const headersList = headers()
  const useragent = headersList.get('user-agent')
  const isMobile = isMobileDevice(useragent)

  // for (const key of headersList.keys()) {
  //   console.log('********* key: ', key);
  // }
  // console.log('********* user-agent: ', useragent);
  // console.log('********* isMobileDevice is ', isMobileDevice(useragent));


  // const [windowWidth, setWindowWidth] = useState(null);

  // useEffect(() => {
  //   // Handler to call on window resize
  //   const handleResize = () => {
  //     // Set window width to state
  //     setWindowWidth(window.innerWidth);
  //   };
    
  //   // Add event listener
  //   window.addEventListener('resize', handleResize);
    
  //   // Call handler right away so state gets updated with initial window size
  //   handleResize();
    
  //   // Remove event listener on cleanup
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []); // Empty array ensures that effect is only run on mount and unmount


  return (
    <div className={styles.descriptionContainer}>
      {/* <DescriptionBoxDesktop>
        <div className={styles.descriptionTextContainer}>
          <div className={styles.descriptionText}>
            We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
          </div>
        </div>
      </DescriptionBoxDesktop> */}

      { isMobile ? (
          <DescriptionBoxMobile>
            <div className={styles.descriptionTextContainerMobile}>
              <div>
                We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
              </div>
            </div>
          </DescriptionBoxMobile>
        ) : (
          <DescriptionBoxDesktop>
            <div className={styles.descriptionTextContainer}>
              <div>
                We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
              </div>
            </div>
          </DescriptionBoxDesktop>
        )
      }

      {/* { windowWidth > 430 ? (
          <DescriptionBoxDesktop>
            <div className={styles.descriptionTextContainer}>
              <div className={styles.descriptionText}>
                We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
              </div>
            </div>
          </DescriptionBoxDesktop>
        ) : (
          <DescriptionBoxMobile>
            <div className={styles.descriptionTextContainer}>
              <div className={styles.descriptionText}>
                We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
              </div>
            </div>
          </DescriptionBoxMobile>
        )
      } */}
      
      {/* { windowWidth 
        ? (windowWidth > 430 ? (
            <DescriptionBoxDesktop>
              <div className={styles.descriptionTextContainer}>
                <div className={styles.descriptionText}>
                  We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
                </div>
              </div>
            </DescriptionBoxDesktop>
          ) : (
            <DescriptionBoxMobile>
              <div className={styles.descriptionTextContainer}>
                <div className={styles.descriptionText}>
                  We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
                </div>
              </div>
            </DescriptionBoxMobile>
          ))
        : (
          // <Loading />
          <div className={styles.text}>
            windowWidth is <br />{windowWidth}
          </div>
        )
      } */}
      {/* <div className={styles.descriptionBox1}>
        <div className={styles.descriptionText}>
          We are a tech company that creates amazing web3 products and promotes consulting for web3 aspirants.
        </div>
        <div className={styles.descriptionBox2}>
          blabla
        </div>
      </div> */}
    </div>
  )
}