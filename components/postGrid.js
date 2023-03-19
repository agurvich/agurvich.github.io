{/* import built-in components */}
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

{/* import our components */}
import Date from '../components/date';

{/* import necessary styles */}
import styles from './postGrid.module.css';

function TagItem({ tag }){
     return(
          <Link href={"/tags/"+tag}>
               <li className={styles.tagItem}>
                    {"#"+tag}
               </li>
          </Link>
     );
}

export function TagList(tags){
     return (
     <ul className={styles.tagList}>
          {
          Object.values(tags).sort().map((tag) => (
               <TagItem tag={tag} /> 
          ))}
     </ul>
     );
}

function PostDescription({title, id, date, tags, ...rest}){
     return (<div className={styles.description}>
          <h1> <Link href={id}>{title}</Link></h1>
          <h2> <Date dateString={date} /> </h2>
          <p>
               {rest.description}
          </p>

          {/* if it's got tags, let's put them in */}
          { Object.keys(tags).length > 0 ? (
               <TagList {...tags} />
          ) : (
               <></>
          )
          }
     </div>)
}

export default function PostGrid({ children, home, id, img, ...rest }) {
     
     return (
          <li className={styles.listItem} key={id}>
               <Image
                priority
                src={"/images/"+img}
                className={styles.thumbnail}
                height={200}
                width={1000} /* TODO figure out how to measure screen size... to take advantage of mipmap rather than resizing */
                resizeMode={'cover'}
                alt=""
              /> 
              <PostDescription id={id} {...rest} />
          </li>
     );
}