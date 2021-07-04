import styles from '../styles/Home.module.css'
// import Link from 'next/link'


export default function LoginForm({Handle_username,Handle_password,HandleClick}) {
    return (
        <section className={styles.container_6}>
            <section>
                <h3>USER NAME</h3>
            </section>
            
            <input onChange={Handle_username} />
            <section>
                <h3>PASSWORD</h3>
            </section>
            
            <input onChange={Handle_password} />
            <button onClick ={HandleClick} type='button'>SIGN IN</button>
        </section>
    )
}