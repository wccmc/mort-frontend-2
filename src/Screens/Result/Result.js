import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { calculate } from "./../../Utils/API";
import { NavButton } from './../../Components/Buttons';
import { TextInput } from './../../Components/Inputs';
import { navigate } from './../../Ducks/Actions/navigation';
import { updateHoa } from './../../Ducks/Actions/userInput';

import styles from '../../Utils/Styles';



const Result = (props) => {
    const [maxAmount, updateMaxAmount] = useState(0)
    const [showHoa, updateShowHoa] = useState(false)
    // const [hoa, updateHoa] = useState(0)

    const submitData = async () => {

        // calculate() // api call to send data
        // return // return data obj from api
    }

    useEffect(async () => {
        const max = await submitData()
        updateMaxAmount(max)
    }, [])

    const formatDollars = (num) => {
        // const things = num.split('').map((n, i) =>{})
    }

    const handleNavigation = (next) => {

        // updateData()

        const location = "Financial"
        props.navigate(location)
    }

    return (
        <div style={styles.container}>
            <div>
                <h2>Maximum Mortgage Amount</h2>
                {/* <h1>${maxAmount}</h1> */}
                <div>
                    This is the breakdown
                    And the monthly cost
                </div>

                <div>
                    <NavButton
                        title="Add HOA Fee"
                        onClick={updateShowHoa}
                    />
                    <TextInput
                        value={props.hoa}
                        onCheck={props.updateHoa}
                    />
                    <NavButton
                        title="Re-Calculate"
                        onClick={updateShowHoa}
                    />
                </div>
            </div>
            <NavButton
                title="Back"
                onClick={() => handleNavigation()}
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
            vetType,
            disability,
            childCare,
            vetUse,
            veteran,
        },
        financial: {
            income,
            debt,
            alimony,
            childSupport,
        },
        hoa,
    } = state;

    return {
        location,
        rate,
        credit,
        state: province,
        county,
        type,
        years,
        downPmt,
        vetType,
        disability,
        childCare,
        vetUse,
        veteran,
        income,
        debt,
        alimony,
        childSupport,
        hoa,
    }
}

const mapDispatchToProps = {
    navigate,
    updateHoa,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)