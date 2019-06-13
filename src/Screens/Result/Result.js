import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { navigate } from './../../Ducks/Actions/navigation';
import { calculate } from "./../../Utils/API";
import { NavButton } from './../../Components/Buttons';
import styles from '../../Utils/Styles';



const Result = (props) => {
    const [maxAmount, updateMaxAmount] = useState(0)
    const submitData = async () => {
        // api call to send data
        // return // return data obj from api
    }

    useEffect(() => {
        const max = submitData()
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
        }, } = state
    return {
        location,
        rate,
        credit,
        state: province,
        county,
        type,
        years,
        vetType,
        disability,
        childCare,
        vetUse,
        veteran,
        income,
        debt,
        alimony,
        childSupport,
    }
}

const mapDispatchToProps = {
    navigate,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)