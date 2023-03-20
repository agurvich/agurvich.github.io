{/* import built-in components */}
import Head from "next/head"
import Image from "next/image"

{/* import our components */}
import Layout from '../components/layout';
import Date from '../components/date';

{/* import necessary styles */}
import styles from '../styles/post.module.css';

{/* import functions */}
import { getAllPostIds,getPostData } from '../lib/posts';
import { TagList } from "../components/postGrid";

export default function Post({ postData }) {
    return (
    <Layout >
        <div className={styles.post}>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <div>
            {/* place the header image */}
            <Image
                priority
                src={"/images/"+postData.img}
                className={styles.header}
                height={500}
                width={1000} 
                resizeMode={'cover'}
                alt=""
              />

            {/* place the title and date */}
            <div className={styles.title}>{postData.title}</div>
            <div className={styles.date}>
                <Date dateString={postData.date} />
                {/* place a description if we have one for this post */}
                { postData.description ? <div className={styles.description}> {postData.description} </div> : ''}
            </div>


            {/* finally place the main content */}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>

            <aside> <TagList {...postData.tags} /> </aside>

        </div>
    </Layout>
  );
}

export async function getStaticPaths(){
    const paths = getAllPostIds();
    return { paths, fallback: false};
}

export async function getStaticProps({ params }){
    const postData = await getPostData(params.id);

    return { props: { postData } };

}