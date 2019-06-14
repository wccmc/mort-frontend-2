import React from 'react'
import styles from '../../Utils/Styles';

export default ({ result }) => {

    const number = (num, i) => {
        return (
            <h3 style={styles.pmtDisplay} key={i}>${num}</h3>
        )
    }
    return (
        <div style={styles.pmtDisplayContainer}>
            {Object.values(result).map((num, i) => number(num, i))}
        </div>
    )
}
