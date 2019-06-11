import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from "./../../Utils/Styles";
import { NavButton } from './../../Components/Buttons';
import { navigate } from "./../../Ducks/Actions/navigation";
import { updateFinancial } from "./../../Ducks/Actions/userInput";



const Financial = (props) => {
    const { updateFinancial, location, veteran } = props

    const [income, updateIncome] = useState('0')
    const [debt, updateDebt] = useState('0')
    const [alimony, updateAlimony] = useState('0')
    const [childSupport, updateChildSupport] = useState('0')

    const inputFields = [
        {
            title: 'Gross Monthly Income',
            value: income,
            onChange: updateIncome,
        },
        {
            title: 'Consumer Debt that reflects on Credit',
            value: debt,
            onChange: updateDebt,
        },
        {
            title: 'Alimony',
            value: alimony,
            onChange: updateAlimony,
        },
        {
            title: 'Child Support',
            value: childSupport,
            onChange: updateChildSupport,
        },
    ]

    const validation = (input, type) => {
        // should set to 0 if nothing in input
        // should remove 0 at start of number
        // should allow for no more than 10 characters
    }

    const updateData = () => {
        const generalData = {
            income,
            debt,
            alimony,
            childSupport,
        };
        updateFinancial(generalData) // Redux action
    }

    const handleNavigation = (next) => {

        updateData()

        const back = veteran ? "Veteran" : "General";
        const location = next ? "Result" : back;
        props.navigate(location)
    }

    const mappedInputFields = inputFields.map((data, i) => {
        return (
            <div
                style={styles.inputContainer}
                key={i}
            >
                <h3
                    style={styles.inputTitle}
                >
                    {data.title}
                </h3>
                <input style={styles.textInput}
                    type='text'
                    value={data.value}
                    onChange={
                        (e) => data.onChange(e.target.value)}
                />
            </div>
        )
    })

    return (
        <div
            style={styles.container}
        >
            {mappedInputFields}
            <NavButton
                title="Back"
                onClick={() => handleNavigation()}
            />
            <NavButton
                title="Calculate Mortgage"
                onClick={() => handleNavigation(true)}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        location,
        veteran: {
            veteran,
        },
    } = state
    return ({
        location,
        veteran,
    })

}

const mapDispatchToProps = {
    updateFinancial,
    navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Financial)