import styles from '../styles/Home.module.css'
import CreateForm from './CreateForm'
import ReportTable from './ReportTable'
import Footer from './Footer'
import React, { useEffect } from 'react'

export default function Main() {

    const hours = require('../data/data').hours
    

    const [location,SetLocation]=React.useState('');
    const [min,SetMin]=React.useState('');
    const [max,SetMax]=React.useState('');
    const [avg,SetAvg]=React.useState('');

    // ----- Table array's
    const [location_list,SetLocation_list]=React.useState([]);
    const [min_list,SetMin_list]=React.useState([20]);
    const [max_list,SetMax_list]=React.useState([92]);
    const [avg_list,SetAvg_list]=React.useState([58]);
    
    const [data,SetData]=React.useState([[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]); 
    

    useEffect(()=>{
        console.log('new location')
    },[location_list])

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
        SetLocation_list(location_list.concat([location]))
        SetAvg_list(avg_list.concat([avg]))
        SetMax_list(max_list.concat([max]))
        SetMin_list(min_list.concat([min]))

        let temp = data
        let sum = 0
        for (let i =0;i<14;i++){
            let rand  = Math.ceil(Math.random() * (max - min + 1) + min)
            temp[i].push(rand)
            sum = sum + rand
        }
        temp[14].push(sum)

        
    }
    return (
        <div>
        <main>
            <CreateForm HandleClick={HandleClick} Handle_location={Handle_location} Handle_min={Handle_min} Handle_max={Handle_max} Handle_avg={Handle_avg}/>
            
            {location_list.length > 0 &&
                <ReportTable location_list = {location_list} data = {data} hours = {hours}/>
            }
            {location_list.length == 0 &&
                <h3 className={styles.p_class}>No Cookie Stands Available</h3>
            }
        </main>
        <Footer num = {location_list.length}/>
        </div>
    )
}