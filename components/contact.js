{/* import necessary styles */}
import styles from "./contact.module.css"

function Icon({url,username,icon,...rest}){
    return (
    <li className={styles.listItem}>
        <a href={url + username} target={"_blank"}>
            <i className={"fa " + icon}/>
        </a>
    </li>
    )
}

export default function Contact({ ...rest}){
    return (
    <section className={styles.section}>
        {/* lets do a contact me section */}
        <div className={styles.myh3}> Contact me </div>
        {/* anchor'd icons to go to my sosh mead */}
        <ul className={styles.list}> 
            {Object.keys(rest).map( (key,index) => 
                <Icon  key={index} {...rest[key]}/>
            )}
        </ul>
    </section>
    );
}