{/* import built-in components */}
import Head from 'next/head';
import Link from 'next/link'

{/* import our components */}
import Layout, { siteTitle } from '../components/layout';
import PostGrid from '../components/postGrid';

{/* import necessary styles */}
import utilStyles from '../styles/utils.module.css';

{/* import functions */}
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
            <ul className={utilStyles.list}>
                {allPostsData.map(({id, title, date, ...rest}) => (
                    <PostGrid id={id} title={title} date={date} {...rest}/>
                ))}
            </ul>
        </Layout>
    );
}