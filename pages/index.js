import Head from 'next/head'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noob Dev Official</title>
      </Head>
      <div className={styles['nd-logo']}>
        <img src="/ndsq-blue.svg" alt="Logo" />
      </div>
      <div className={styles['nd-text']}>
        <h1>hey, i am <span>noob dev</span></h1>
        <p>official website coming soon</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.icons}>
          <img src="/fb-icon.svg" alt="fb-icon" />
          <img src="/insta-icon.svg" alt="insta-icon" />
          <img src="/linkedin-icon.svg" alt="linkedin-icon" />
          <img src="/github.svg" alt="github-icon" />
        </div>
        <p>Copyright ©2021 All rights reserved</p>
      </footer>
    </>
  )
}
