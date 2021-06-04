import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>Noob Dev Official</title>
			</Head>
			<div className={styles.container}>
				<div className={styles['nd-logo']}>
					<img src='/transparent.svg' alt='Logo' />
				</div>
				<div className={styles['nd-text']}>
					<h1>
						hey, i am <span>noob dev</span>
					</h1>
					<p className={styles['p-1']}>
						Since childhood, Muntasir wanted to be a Mechanical Engineer
						until one of his friend introduced him to programming back in
						2018 and he has been learning programming ever since. He is
						interested mainly in Web Technologies and also in machine
						learning/AI.
					</p>

					<p className={styles['p-2']}>
						{' '}
						When he is not busy breaking applications, he hangs around on
						Discord either gaming or helping his friends or other people
						in coding community servers. He is one of the moderators of
						The Coding Train discord server. He is known as "Noob Dev" in
						the progamming world.
					</p>
				</div>
				<div className={styles['website-button']}>
					<a href='https://noobdevofficial.netlify.app/'>
						Official Website
					</a>
				</div>
				<footer className={styles.footer}>
					<div className={styles.icons}>
						<a href='/' target='_blank'>
							{' '}
							<img
								src='/fb-icon.svg'
								alt='fb-icon'
								onClick={(e) => e.preventDefault()}
							/>
						</a>
						<a href='/' target='_blank'>
							<img
								src='/insta-icon.svg'
								alt='insta-icon'
								onClick={(e) => e.preventDefault()}
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/muntasir-enam-al-huda/'
							target='_blank'
						>
							<img src='/linkedin-icon.svg' alt='linkedin-icon' />
						</a>
						<a href='https://github.com/Muntasir2001' target='_blank'>
							<img src='/github.svg' alt='github-icon' />
						</a>
					</div>
					<p>Copyright ©2021 All rights reserved</p>
				</footer>
			</div>
		</>
	);
}
