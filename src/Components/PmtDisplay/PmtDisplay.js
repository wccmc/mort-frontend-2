import React from 'react'
import styles from '../../Utils/Styles';

export default ({ data }) => {

    const number = (num, i) => {
        return (
            <h3 style={styles.pmtDisplay} key={i}>${num}</h3>
        )
    }

    const loopDataObj = (dataObj) => {
        const display = []
        for (let key in dataObj) {
            const line = (
                <div key={key} style={styles.pmtDisplayLineContainer}>
                    <h3 style={styles.pmtDisplayTitle} >{key}</h3>
                    <h3 style={styles.pmtDisplayNum} >$ {dataObj[key]}</h3>
                </div>
            )

            display.push(line)
        }
        return display
    }

    return (
        <div style={styles.pmtDisplayContainer}>
            {/* {Object.values(data).map((num, i) => number(num, i))} */}
            {loopDataObj(data)}
        </div>
    )
}
