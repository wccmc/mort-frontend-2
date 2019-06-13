import React, { useState } from 'react';
import styles from './../../Utils/Styles';
import { TextInput } from '../Inputs';
import PropTypes from 'prop-types';

const Slider = (props) => {
    const { rate, updateRate } = props

    return (
        <div
        // style={styles.sliderGroup}
        >
            <datalist id="tickmarks"
            >
                <option value="2.5" label='2.5%' />
                <option value="3" />
                <option value="3.5" />
                <option value="4" label='4%' />
                <option value="4.5" />
                <option value="5" />
                <option value="5.5" />
                <option value="6" label='6%' />
            </datalist>
            <input
                style={{ margin: 15, height: 50, }}
                type="range"
                id="start"
                name="rate"
                list="tickmarks"
                min="2.5"
                max="6"
                step="0.25"
                value={rate}
                onChange={(e) => updateRate(e.target.value)}
            />
            <label
            // style={styles.inputTitle}
            >
                Rate of
                    <TextInput
                    type='number'
                    value={rate}
                    onChange={updateRate}
                    style={{ width: 100 }}
                />
                %
            </label>
        </div>
    )
}

export default Slider

Slider.propTypes = {
    rate: PropTypes.number.isRequired,
    updateRate: PropTypes.func.isRequired,
}