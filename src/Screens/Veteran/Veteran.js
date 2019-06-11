import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavButton, TextButton } from './../../Components/Buttons';
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
        <div>
            <select
                style={styles.textInput}
                value={vetType}
                onChange={(e) => updateVetType(e.target.value)}
            >
                {data.vetType.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            <h3>Service Related Disability</h3>
            <div>
                {!disability && <button onClick={() => updateDisability(true)}>Yes</button>}
                {disability && <button onClick={() => updateDisability(false)}>No</button>}
            </div>
            <div
                style={styles.inputContainer}
            >
                <h3
                    style={styles.inputTitle}
                >
                    Child Care Expenses
                </h3>
                <input style={styles.textInput}
                    type='text'
                    value={childCare}
                    onChange={
                        (e) => updateChildCare(e.target.value)}
                />
            </div>

            <NavButton
                title="Back"
                onClick={() => handleNavigation()}
            />
            <NavButton
                title="Next"
                onClick={() => handleNavigation(true)}
            />
            <div>
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
