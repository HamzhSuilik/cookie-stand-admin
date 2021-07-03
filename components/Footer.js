import styles from '../styles/Home.module.css'


export default function Footer({num}) {
    return (
        <footer>
            <p className={styles.footer_class}>{num} Locations World Wide</p>
        </footer>
    )
}