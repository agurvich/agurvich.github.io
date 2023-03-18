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