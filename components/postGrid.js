import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

function PostDescription({title, id, date, ...rest}){
     return (<div className={utilStyles.postDescription}>
          <h1> <Link href={id}>{title}</Link></h1>
          <h2> <Date dateString={date} /> </h2>
          <p>
               {rest.description}
               remaining keys: {Object.keys(rest).join(" ")}
          </p>
     </div>)
}

export default function PostGrid({ children, home, id, img, ...rest }) {
     
     return (
          <li className={utilStyles.listItem} key={id}>
               <Image
                priority
                src={"/images/"+img}
                className={utilStyles.postThumbnail}
                height={200}
                width={1000}
                resizeMode={'cover'}
                alt=""
              /> 
              <PostDescription id={id} {...rest} />
          </li>
     );
}