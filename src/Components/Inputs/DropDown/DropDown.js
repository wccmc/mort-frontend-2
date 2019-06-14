import React from 'react'
import styles from './../../../Utils/Styles'

const RadioInput = (props) => {
    const { value, onChange, data, display } = props

    const filter = (item, display) => {
        return (display && display(item)) || item
    }

    return (
        <select
            style={styles.textInput}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {data.map((e, i) => <option key={i}>{filter(e, display)}</option>)}
        </select>
    )
}


export default RadioInput