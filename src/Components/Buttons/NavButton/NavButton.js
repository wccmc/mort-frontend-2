import React from "react";
import styles from './../../../Utils/Styles';
import PropTypes from "prop-types";

const NavButton = ({ title, onClick }) => (
    <button
        style={styles.navBtn}
        onClick={onClick}
    >
        {title}
    </button>
)

export default NavButton

NavButton.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}