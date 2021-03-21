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
        <p className={styles["p-1"]}>Since childhood, Muntasir wanted to be a Mechanical Engineer until one of his friend introduced him to programming back in 2018 and he has been learning programming ever since. He is interested mainly in Web Technologies and also in machine learning/AI.</p>

        <p className={styles["p-2"]}> When he is not busy breaking applications, he hangs around on Discord either gaming or helping his friends or other people in coding community servers. He is one of the moderators of The Coding Train discord server. He is known as "Noob Dev" in the progamming world.</p>

        <p className={styles.statement}>official website coming soon</p>
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
