import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import data from '../../Data/Data';
import { navigate } from '../../Ducks/Actions/navigation'
import { getRate } from './../../Utils/API';
import { updateRate, updateGeneral, userIsVeteran } from './../../Ducks/Actions/userInput'
import { NavButton } from './../../Components/Buttons';
import styles from '../../Utils/Styles';




const General = (props) => {
    const {
        rate,
        updateRate,
        updateGeneral,
        userIsVeteran,
    } = props;


    const [credit, updateCredit] = useState(props.credit)
    const [state, updateState] = useState(props.state)
    const [county, updateCounty] = useState(props.county)
    const [type, updateType] = useState(props.type)
    const [years, updateYears] = useState(props.years)
    // const [rate, updateRate] = useState(4.125)
    const [veteran, updateVeteran] = useState(props.veteran)

    // // *** Get and Set Rate from api *** // //
    useEffect(() => {
        getNewRate()
    }, [])

    const filteredCounty = data.county.filter((e) => e.slice(0, e.indexOf(' ')) === state)
    const justCounty = filteredCounty.map((e) => e.slice(e.indexOf('- ') + 1))
    const pascalCase = (word) => {
        let pascal = word.split(' ')
        pascal = pascal.map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase())
        return pascal.join(' ')
    }

    const getNewRate = async () => {
        // get rate from API
        try {
            const newRate = await getRate()
            console.log(newRate)
            updateRate(newRate)
        } catch (e) {
            // handle error
        }
    }

    const saveData = () => {
        const generalData = {
            credit,
            state,
            county,
            type,
            years,
        };
        updateGeneral(generalData) // Redux action
        userIsVeteran(veteran) // Redux action
    }


    const handleNavigation = (next) => {
        saveData()

        const location = veteran ? "Veteran" : "Financial";
        props.navigate(location)
    }

    return (
        <div>
            <h3
                style={styles.inputTitle}
            >
                Select State
                </h3>
            <select
                value={state}
                onChange={(e) => updateState(e.target.value)}
            >
                {data.state.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            <h3
                style={styles.inputTitle}
            >
                Select County
            </h3>
            <select
                value={county}
                onChange={(e) => updateCounty(e.target.value)}
            >
                {justCounty.map((e, i) => <option key={i}>{pascalCase(e)}</option>)}
            </select>
            <h3
                style={styles.inputTitle}
            >
                Select Loan Type
            </h3>
            <select
                value={type}
                onChange={(e) => updateType(e.target.value)}
            >
                {data.type.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            <h3
                style={styles.inputTitle}
            >
                Select Credit Range
            </h3>
            <select
                value={credit}
                onChange={(e) => updateCredit(e.target.value)}
            >
                {data.credit.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            <h3
                style={styles.inputTitle}
            >
                Loan Length (years)
            </h3>
            <select
                value={years}
                onChange={(e) => updateYears(e.target.value)}
            >
                {data.years.map((e, i) => <option key={i}>{e}</option>)}
            </select>
            <h3
                style={styles.inputTitle}
            >
                Loan Rate (default to current rate)
                </h3>
            <div>
                <datalist id="tickmarks">
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
                    type="range"
                    id="start"
                    name="rate"
                    list="tickmarks"
                    min="2.5"
                    max="6"
                    step="0.25"
                    value={rate}
                    onChange={(e) => updateRate(+e.target.value)}
                />
                <label
                    style={styles.inputTitle}
                >
                    Rate of
                    <input
                        type='number'
                        name='rate'
                        value={rate}
                        onChange={(e) => updateRate(+e.target.value)}
                    />
                    %</label>
            </div>
            <div
                style={styles.radioSectionContainer}
            >
                <h3
                    style={styles.inputTitle}
                >
                    Are you a Veteran:
                    </h3>
                <div
                    style={styles.radioInputGroup}
                >
                    <div>
                        <input
                            type="radio"
                            id="huey"
                            name="drone"
                            value="huey"
                            onChange={() => updateVeteran(false)}
                            checked={!veteran}
                        />
                        <label
                            style={styles.inputTitle}
                            htmlFor='huey'
                        >
                            No
                        </label>
                    </div>

                    <div>
                        <input
                            type="radio"
                            id="dewey"
                            name="drone"
                            value="dewey"
                            onChange={() => updateVeteran(true)}
                            checked={veteran}
                        />
                        <label
                            style={styles.inputTitle}
                            htmlFor='dewey'
                        >
                            Yes
                        </label>
                    </div>
                </div>
            </div>
            <NavButton
                title="Next"
                onClick={() => handleNavigation(true)}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const {
        location,
        rate,
        general: {
            credit,
            state: province,
            county,
            type,
            years,
        },
        veteran: {
            veteran,
        } } = state
    return {
        location,
        rate,
        credit,
        state: province,
        county,
        type,
        years,
        veteran,
    }
}

const mapDispatchToProps = {
    navigate,
    updateRate,
    updateGeneral,
    userIsVeteran,
}

export default connect(mapStateToProps, mapDispatchToProps)(General)
