import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';

const name = 'JOKEREVEN';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn how to build a personal website using Next.js'
				/>
				<meta name='og:title' content={siteTitle} />
				<meta name='twitter:card' content='@cnzjing125' />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<Image
							priority
							src='/source/profile.jpg'
							className={utilStyles.borderCircle}
							height={144}
							width={144}
							alt={name}
						/>
						<h1 className={utilStyles.heading2Xl}>{name}</h1>
					</>
				) : (
					<>
						<Link href='/'>
							<a>
								<Image
									priority
									src='/source/profile.jpg'
									className={utilStyles.borderCircle}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href='/'>
								<a className={utilStyles.colorInherit}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href='/blog'>
						<a>← Back to Blog</a>
					</Link>
				</div>
			)}
		</div>
	);
}
