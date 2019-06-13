import React from 'react'
import styles from '../../../Utils/Styles';

export default ({ title, onClick, selected }) => {

    const style = {
        ...styles.smallButton,
        ...styles.smallButtonSelected,
    }

    return (
        <button
            style={selected ? style : styles.smallButton}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
