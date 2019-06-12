import React from 'react';
import styles from './../../../Utils/Styles';
import PropTypes from 'prop-types';

const TextInput = (props) => {
    const { value, onChange, type = 'text', style = {} } = props

    return (
        <input
            style={{ ...style, ...styles.textInput }}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default TextInput

TextInput.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    // value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    style: PropTypes.object,
}