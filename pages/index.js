{/* import built-in components */}
import Head from 'next/head';

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
            <h1> a portfolio & blog </h1>
            <ul className={utilStyles.list}>
                {allPostsData.map((data,index) => (
                    <PostGrid key={index} {...data}/>
                ))}
            </ul>
        </Layout>
    );
}