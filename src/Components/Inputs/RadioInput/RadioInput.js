import React from 'react'
import styles from './../../../Utils/Styles'

const RadioInput = (props) => {
    const { onChange, checked, firstLabel, secondLabel } = props

    return (
        <div
            style={styles.radioInputGroup}
        >
            <div>
                <input
                    type="radio"
                    id={firstLabel}
                    onChange={() => onChange(true)}
                    checked={checked}
                />
                <label
                    style={styles.inputTitle}
                    htmlFor={firstLabel}
                >
                    {firstLabel}
                </label>
            </div>

            <div>
                <input
                    type="radio"
                    id={secondLabel}
                    onChange={() => onChange(false)}
                    checked={!checked}
                />
                <label
                    style={styles.inputTitle}
                    htmlFor={secondLabel}
                >
                    {secondLabel}
                </label>
            </div>
        </div>
    )
}


export default RadioInput