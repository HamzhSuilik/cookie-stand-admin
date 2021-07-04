import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Header(SetIsLogin) {
    return (
        <header>
            <section className={styles.container_3}>
                <h1 className={styles.head_class}>Cookie Stand Admin</h1>
                <section>
                    <Link href="/overview">
                        <a className={styles.container_4}>Overview</a>
                    </Link>
                    <button type='button' className={styles.container_5}>Sign Out</button>
                    <button type='button' className={styles.container_4}>rudy</button>
                </section>

            </section> 
        </header>
    )
}