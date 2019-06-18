import React from 'react'
import styles from './../../../Utils/Styles'

const RadioInput = (props) => {
    const { value, onChange, data, display } = props

    const filter = (item, display) => {
        return (display && display(item)) || item
    }

    const mappedOptions = data.map((e, i) => <option key={i}>{filter(e, display)}</option>)

    return (
        <select
            style={styles.textInput}
            defaultValue={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {mappedOptions}
        </select>
    )
}


export default RadioInput