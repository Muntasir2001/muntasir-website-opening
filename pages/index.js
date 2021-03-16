import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noob Dev Official</title>
      </Head>
      <div className={styles['nd-logo']}>
        <img src="/transparent.svg" alt="Logo" />
      </div>
      <div className={styles['nd-text']}>
        <h1>hey, i am <span>noob dev</span></h1>
        <p>official website coming soon</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.icons}>
          <a href="#"> <img src="/fb-icon.svg" alt="fb-icon" target="_blank" /></a>
          <a href="#"><img src="/insta-icon.svg" alt="insta-icon" target="_blank" /></a>
          <a href="https://www.linkedin.com/in/muntasir-enam-al-huda/"><img src="/linkedin-icon.svg" alt="linkedin-icon" target="_blank" /></a>
          <a href="https://github.com/Muntasir2001"><img src="/github.svg" alt="github-icon" target="_blank" /></a>
        </div>
        <p>Copyright ©2021 All rights reserved</p>
      </footer>
    </>
  )
}
