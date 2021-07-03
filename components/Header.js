import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Header(props) {
    return (
        <header>
            <section className={styles.container_3}>
                <h1 className={styles.head_class}>Cookie Stand Admin</h1>
                <Link href="/overview">
                    <a className={styles.container_4}>Overview</a>
                </Link>
            </section> 
        </header>
    )
}