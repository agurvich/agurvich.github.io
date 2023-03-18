import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Your Name';
export const siteTitle = 'Next.js Sample Website';

export default function PostGrid({ children, home, id, date, title, ...rest }) {
     return (
          <li className={utilStyles.listItem} key={id}>
               title: {title}
               <br />
               id: {id}
               <br />
               date: {date}
               <br />
               remaining keys: {Object.keys(rest).join(" ")}
               <br />
               link: <Link href={id}>{title}</Link>
          </li>
     );
}