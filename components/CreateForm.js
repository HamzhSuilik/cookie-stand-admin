import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
// import styles from '../tailwindcss/tailwind.css'
import ReportTable from './ReportTable'

export default function Form({HandleClick,Handle_location,Handle_min,Handle_max,Handle_avg}) {
    
    
    return (
        <main>
            <section className={styles.form_class}>
                <h2>Create Cookie Stand</h2>
                <section className={styles.container_2}>
                    <p>Location</p>
                    <input onChange={Handle_location}/>
                </section>
                <section className={styles.container_1}>
                    <section className={styles.input_class}>
                        <p>Minimum Customers per Hour</p>
                        <input onChange={Handle_min}/>
                    </section>
                    <section className={styles.input_class}>
                        <p>Maximum Customers per Hour</p>
                        <input onChange={Handle_max}/>
                    </section>
                    <section className={styles.input_class}>
                        <p>Average Customers per Hour</p>
                        <input onChange={Handle_avg}/>
                    </section>
                    <button onClick ={HandleClick}>Create</button>
                </section>
            </section>
        </main>
    )
}

{/* <h2>{counter}</h2>
<input onChange={HandleClick}/>
<button onClick ={HandleClick_}>+++</button> */}