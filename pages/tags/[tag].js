{/* import built-in components */}
import Head from 'next/head';

{/* import our components */}
import Layout, { siteTitle } from '../../components/layout';
import PostGrid from '../../components/postGrid';

{/* import necessary styles */}
import utilStyles from '../../styles/utils.module.css';

{/* import functions */}
import { useRouter } from 'next/router'
import { getSortedPostsData,getAllPostTags } from '../../lib/posts';

export async function getStaticProps(){
    const allPostsData = getSortedPostsData();
    return { props: { allPostsData } };
}
export async function getStaticPaths(){
    const paths = getAllPostTags();
    return { paths, fallback: false};
}

export default function TagPage( { allPostsData } ) {
    const router = useRouter();
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1> {"#"+router.query.tag} </h1>
            <ul className={utilStyles.list}>
                {allPostsData.map(({tags, ...rest}) => (
                    Object.values(tags).includes(router.query.tag) ? 
                    <PostGrid tags={tags} {...rest}/> :
                    null
                ))}
            </ul>
        </Layout>
    );
}