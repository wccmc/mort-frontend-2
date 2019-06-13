import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavButton, TextButton, SmallButton } from './../../Components/Buttons';
import { InptTtlTxt } from './../../Components/Text';
import { TextInput, DropDown } from './../../Components/Inputs';
import data from '../../Data/Data';
import { navigate } from '../../Ducks/Actions/navigation'
import { updateVeteran, userIsVeteran } from './../../Ducks/Actions/userInput';
import styles from './../../Utils/Styles'


const Veteran = (props) => {
    const { updateVeteran } = props

    const [vetType, updateVetType] = useState(props.vetType)
    const [disability, updateDisability] = useState(props.disability)
    const [childCare, updateChildCare] = useState(props.childCare)
    const [verUse, updateVetUse] = useState(props.vetUse)
    // const [veteran, updateVeteran] = useState(true)

    const childCareValidation = (num) => {
        console.log(num)
        let numOnly = num.match(/\d/gi)
        console.log(numOnly)
        console.log('fix child care validation so no 0 to start but 0 if nothing also, no more than 4 characters')

        updateChildCare(`${numOnly ? numOnly.join('') : ''}`)
        return
    }

    const saveData = () => {
        const vetUse = (vetType.indexOf('1') >= 0) ? 'first' : 'second+'
        const vetTypeShort = (vetType.indexOf('M') >= 0) ? 'Regular Military' : 'Reserves/Guard'
        const data = {
            vetType,
            disability,
            childCare,
            vetUse,
        }

        props.updateVeteran(data) // Redux action

    }

    const handleNavigation = (next) => {
        saveData()

        const location = next ? "Financial" : "General";
        props.navigate(location)
    }

    const handleSkip = () => {
        props.userIsVeteran(false)
        handleNavigation(true)
    }


    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <div style={styles.inputContainer}>
                    <DropDown
                        value={vetType}
                        onChange={updateVetType}
                        data={data.vetType}
                    />
                </div>
                <div style={styles.radioSectionContainer}>

                    <InptTtlTxt text='Service Related Disability' />
                    <div style={{ display: 'flex', }}>
                        <SmallButton title='Yes' onClick={() => updateDisability(true)} selected={disability} />
                        <SmallButton title='No' onClick={() => updateDisability(false)} selected={!disability} />
                    </div>
                </div>
                <div style={styles.inputContainer}>
                    <InptTtlTxt text='Child Care Expenses' />
                    <TextInput
                        value={childCare}
                        onChange={updateChildCare}
                    />
                </div>
            </div>
            <NavButton
                title="Back"
                onClick={() => handleNavigation()}
            />
            <NavButton
                title="Next"
                onClick={() => handleNavigation(true)}
            />
            <div style={styles.textBtnContainer}>
                <h4>Not a veteran?</h4>
                <TextButton
                    title='skip to next step'
                    onClick={handleSkip}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        location,
        veteran: {
            vetType,
            disability,
            childCare,
            vetUse,
        }
    } = state
    return {
        location,
        vetType,
        disability,
        childCare,
        vetUse,
    }
}

const mapDispatchToProps = {
    updateVeteran,
    userIsVeteran,
    navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Veteran)
