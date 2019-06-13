import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import data from '../../Data/Data';
import { navigate } from '../../Ducks/Actions/navigation'
import { getRate } from './../../Utils/API';
import { updateRate, updateGeneral, userIsVeteran } from './../../Ducks/Actions/userInput'
import { NavButton } from './../../Components/Buttons';
import { InptTtlTxt } from './../../Components/Text';
import { TextInput, RadioInput, DropDown } from './../../Components/Inputs';
import Slider from './../../Components/Slider/Slider'
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
    const [downPmt, updateDownPmt] = useState(props.downPmt)
    const [veteran, updateVeteran] = useState(props.veteran)

    // // *** Get and Set Rate from api *** // //
    useEffect(() => {
        getNewRate()
    }, [])

    const filteredCounty = (compareState) => {
        const filtered = data.county.filter((e) => e.slice(0, e.indexOf(' ')) === compareState)
        const justCounty = filtered.map((e) => e.slice(e.indexOf('- ') + 1))
        return justCounty
    }

    const pascalCase = (word) => {
        let pascal = word.split(' ')
        pascal = pascal.map(e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase())
        return pascal.join(' ')
    }

    const getNewRate = async () => {
        try {
            const newRate = await getRate() // API call
            console.log(newRate)
            updateRate(newRate) // Redux action
        } catch (e) {
            // handle error
        }
    }

    const handleStateChange = (text) => {
        updateState(text)
        const [newCounty] = filteredCounty(text)
        updateCounty(newCounty)
    }

    // // // DropDown Data // // //
    const DropDownData = [
        {
            title: 'Select State',
            value: state,
            onChange: handleStateChange,
            data: data.state,
        },
        {
            title: 'Select County',
            value: county,
            onChange: updateCounty,
            data: filteredCounty(state),
            display: pascalCase,
        },
        {
            title: 'Select Loan Type',
            value: type,
            onChange: updateType,
            data: data.type,
        },
        {
            title: 'Select Credit Range',
            value: credit,
            onChange: updateCredit,
            data: data.credit,
        },
        {
            title: 'Loan Length (years)',
            value: years,
            onChange: updateYears,
            data: data.years,
        },
        {
            title: 'Select Credit Range',
            value: credit,
            onChange: updateCredit,
            data: data.credit,
        },
    ]

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

    const mappedDropDowns = (data) => {
        return data.map((e, i) => {
            const { title, value, onChange, data, display } = e
            return (
                <div key={i} style={styles.inputContainer}>
                    <InptTtlTxt text={title} />
                    <DropDown
                        value={value}
                        onChange={onChange}
                        data={data}
                        display={display}
                    />
                </div>
            )
        })
    }

    return (
        <div style={styles.container}>
            {mappedDropDowns(DropDownData)}
            <div style={styles.inputContainer}>
                <InptTtlTxt text='Down Payment' />
                <TextInput
                    value={downPmt}
                    onChange={updateDownPmt}
                />
            </div>
            <div style={styles.sliderSectionContainer}>
                <InptTtlTxt text='Loan Rate (default to current rate)' />
                <Slider
                    rate={rate}
                    updateRate={props.updateRate}
                />
            </div>
            <div style={styles.radioSectionContainer}>
                <InptTtlTxt text='Are you a Veteran:' />
                <RadioInput
                    checked={veteran}
                    onChange={updateVeteran}
                    firstLabel='Yes'
                    secondLabel='No'
                />
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
            downPmt,
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
        downPmt,
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
