{/* import built-in components */}
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

{/* import our components */}
import Contact from "./contact"

{/* import necessary styles */}
import styles from './layout.module.css';

{/* user data defined here, there's probably a better way to do this :\ */}
const name = 'Alex Gurvich';
export const siteTitle = 'Alex Gurvich - data scientist';
const socials = {
    "twitter":{
        'url':'https://www.twitter.com/',
        'username':"alexbgurvich",
        'icon':"fa-twitter",
    },
    "linkedin":{
        'url':'https://www.linkedin.com/in/',
        'username':"alex-b-gurvich",
        'icon':"fa-linkedin",
    },
    "github":{
        'url':'https://www.github.com/',
        'username':"agurvich",
        'icon':"fa-github",
    },
    "email":{
        'url':'mailto:',
        'username':"alex.b.gurvich@gmail.com",
        'icon':"fa-envelope-o",
    }
}

function Copyright({ name }){
    return(
    <section>
        {new Date().getFullYear()} &copy; {name}
    </section>
    );
}

function Sidebar(){
    return (
    <aside className={styles.sidebar}>
        <header className={styles.header}>
            <Link href="/">
                <Image
                    priority
                    src="/images/alex-gurvich.png"
                    className={styles.profilePicture}
                    height={100}
                    width={100}
                    alt=""
                />
            </Link>
            <div className={styles.titleName}>
                {name}
            </div>
        </header>

        <footer className={styles.footer}>
            {/* lets put our social information into a contact me */}
            <Contact {...socials} />
            {/* lets do the copyright info */}
            <Copyright name={name} />
        </footer>
    </aside>
    );
}

export default function Layout({ children, home, ...rest}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/favicon/favicon.ico" />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css"/>
            </Head>
            
            {/* put the sidebar onto the, well, side. */}
            <Sidebar />

            {/* main content goes here */}
            <main className={styles.content}>
                {children}
                {/* add a navigation back to home if not on the home page */}
                {!home && (
                    <div className={styles.backToHome}>
                        <Link href="/">← Back to home</Link>
                    </div>
                )}
            </main>
        </div>
    );
} 