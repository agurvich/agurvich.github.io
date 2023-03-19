{/* import necessary styles */}
import styles from "./contact.module.css"

function Icon({url,username,icon,...rest}){
    return (
    <li>
        <a href={url + username} target={"_blank"}>
            {icon}
        </a>
    </li>
    )
}

export default function Contact({ ...rest}){
    return (
    <section className={styles.section}>
        {/* lets do a contact me section */}
        <h3 className={styles.myh3}> Contact me </h3>
        {/* anchor'd icons to go to my sosh mead */}
        <ul className={styles.list}> 
            {Object.keys(rest).map( (key) => 
                <Icon {...rest[key]}/>
            )}
        </ul>
    </section>
    );
}