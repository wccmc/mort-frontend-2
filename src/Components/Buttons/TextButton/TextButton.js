import React from "react";
import styles from './../../../Utils/Styles';
import PropTypes from "prop-types";

const TextButton = ({ title, onClick }) => (
    <button
        style={styles.textBtn}
        onClick={onClick}
    >
        {title}
    </button>
)

export default TextButton

TextButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}