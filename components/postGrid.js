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
          <div>
               <h1> <Link href={id}>{title}</Link></h1>
               <h2> <Date dateString={date} /> </h2>
               <p> {rest.description} </p>
          </div>

          {/* if it's got tags, let's put them in */}
          <aside>
          { Object.keys(tags).length > 0 ? (
               <TagList {...tags} />
          ) : (
               <></>
          )
          }
          </aside>
     </div>)
}

export default function PostGrid({ children, home, id, img, ...rest }) {
     
     return (
          <li className={styles.listItem} key={id}>
           <Link href={id} className={styles.thumbnail} >    
               <Image
                priority
                src={"/images/"+img}
                className={styles.thumbnail}
               /* override the 40% in styles.thumbnail so it doesn't get double counted, 
                 since the <Link/> is sharing a class above... */
                style={{"width":"100%"}} 
                height={200}
                width={400} 
                resizeMode={'cover'}
                alt=""
              />
          </Link> 

              <PostDescription id={id} {...rest} />
          </li>
     );
}