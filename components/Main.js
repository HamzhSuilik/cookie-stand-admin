import styles from '../styles/Home.module.css'
import React, { useEffect } from 'react'
// import styles from '../tailwindcss/tailwind.css'

export default function Main(props) {
    const [data,SetData]=React.useState('');
    const [location,SetLocation]=React.useState('');
    const [min,SetMin]=React.useState('');
    const [max,SetMax]=React.useState('');
    const [avg,SetAvg]=React.useState('');

    useEffect(()=>{
        console.log('data updated')
    },[data])

    const Handle_location = (event) =>{
        SetLocation(event.target.value)
    }
    const Handle_min = (event) =>{
        SetMin(event.target.value)
    }
    const Handle_max = (event) =>{
        SetMax(event.target.value)
    }
    const Handle_avg = (event) =>{
        SetAvg(event.target.value)
    }

    const HandleClick = () =>{
        SetData('{location:'+ location + ' ,MinimumCustomers :'+ min + ' ,Maximum Customers : ' + max + ' ,avgCookies : ' + avg + '}')
    }
    
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
            <p className={styles.p_class}>Report Table Coming Soon ..</p>
            <p className={styles.p_class}>{data}</p>
        </main>
    )
}

{/* <h2>{counter}</h2>
<input onChange={HandleClick}/>
<button onClick ={HandleClick_}>+++</button> */}