import styles from '../styles/Home.module.css'

// 

export default function Table({location_list,data,hours}) {

    const listHours = hours.map((hour) =>
        <th className={styles.th}>{hour}</th>
    );

    // [1, 2, 3, 4].reduce((a, b) => a + b, 0)

    const listContent = location_list.map((location,i) =>
        <tr className={styles.tr}>
            <td>{location}</td>
            <td>{data[0][i]}</td>
            <td>{data[1][i]}</td>
            <td>{data[2][i]}</td>
            <td>{data[3][i]}</td>
            <td>{data[4][i]}</td>
            <td>{data[5][i]}</td>
            <td>{data[6][i]}</td>
            <td>{data[7][i]}</td>
            <td>{data[8][i]}</td>
            <td>{data[9][i]}</td>
            <td>{data[10][i]}</td>
            <td>{data[11][i]}</td>
            <td>{data[12][i]}</td>
            <td>{data[13][i]}</td>
            <td>{data[14][i]}</td>
        </tr>
    );

   


    return (
        <section>
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th className={styles.th}>Location</th>               
                    {listHours}
                    <th>Total</th> 
                </tr>
                
                {listContent}
                <tr className={styles.tr}>
                    <td>Total</td>
                    <td>{data[0].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[1].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[2].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[3].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[4].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[5].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[6].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[7].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[8].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[9].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[10].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[11].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[12].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[13].reduce((a, b) => a + b, 0)}</td>
                    <td>{data[14].reduce((a, b) => a + b, 0)}</td>
                </tr>

            </table>


        </section>
    )
}