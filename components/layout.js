import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Alex Gurvich';
export const siteTitle = 'Alex Gurvich - data scientist';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <div className={styles.sidebar}>
                <header>
                    <Link href="/">
                        <Image
                            priority
                            src="/images/alex-gurvich.png"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt=""
                        />
                    </Link>
                    <h1 className={utilStyles.heading2Xl}>
                        <Link href="/" className={utilStyles.colorInherit}>
                            {name}
                        </Link>
                    </h1>
                </header>

                    <footer className={styles.footer}>
                        {/* lets do a contact me section */}
                        <h3> Contact me </h3>
                        <ul> 
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                            <li>0</li>
                        </ul>
                        {/* lets do the copyright info */}
                        <section>
                            {new Date().getFullYear()} &copy; {name}
                        </section>
                    </footer>
            </div>

            {/* main content goes here */}
            <main style={{'display':'flex','overflow':'auto'}}>{children}</main>

            {/* add a navigation back to home if not on the home page */}
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}