import Head from 'next/head';
import Link from 'next/link'

import utilStyles from '../styles/utils.module.css';

import Layout, { siteTitle } from '../components/layout';
import PostGrid from '../components/postGrid';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps(){
    const allPostsData = getSortedPostsData();
    return { props: { allPostsData } };
}



export default function Home( { allPostsData } ) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
            </section>

            <section>
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, title, date, ...rest}) => (
                    <PostGrid id={id} title={title} date={date} {...rest}/>
                ))}
            </ul>
            </section>
        </Layout>
    );
}