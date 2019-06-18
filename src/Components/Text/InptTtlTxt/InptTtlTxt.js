import React from 'react';
import styles from './../../../Utils/Styles'

const InptTtlTxt = ({ text, style }) => (
    <h3
        style={style ? { ...styles.inputTitle, ...style } : styles.inputTitle}
    >
        {text}
    </h3>
)

export default InptTtlTxt