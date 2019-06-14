import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styles from "./../../Utils/Styles";
import { NavButton } from './../../Components/Buttons';
import { navigate } from "./../../Ducks/Actions/navigation";
import { updateFinancial } from "./../../Ducks/Actions/userInput";
import { InptTtlTxt } from './../../Components/Text';
import { TextInput } from './../../Components/Inputs';



const Financial = (props) => {
    const { updateFinancial, location, veteran } = props

    const [income, updateIncome] = useState(props.income)
    const [debts, updateDebts] = useState(props.debts)
    const [alimony, updateAlimony] = useState(props.alimony)
    const [childSupport, updateChildSupport] = useState(props.childSupport)

    const inputFields = [
        {
            title: 'Gross Monthly Income',
            value: income,
            onChange: updateIncome,
        },
        {
            title: 'Consumer Debt that reflects on Credit',
            value: debts,
            onChange: updateDebts,
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
            debts,
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
                <InptTtlTxt text={data.title} />
                <TextInput
                    value={data.value}
                    onChange={data.onChange}
                />
            </div>
        )
    })

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                {mappedInputFields}
            </div>
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
        financial: {
            income,
            debts,
            alimony,
            childSupport,
        },
    } = state
    return ({
        location,
        veteran,
        income,
        debts,
        alimony,
        childSupport,
    })

}

const mapDispatchToProps = {
    updateFinancial,
    navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Financial)