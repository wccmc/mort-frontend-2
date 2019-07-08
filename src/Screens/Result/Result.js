import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { calculate } from "./../../Utils/API";
import { NavButton } from './../../Components/Buttons';
import { TextInput } from './../../Components/Inputs';
import { InptTtlTxt } from './../../Components/Text';
import { navigate } from './../../Ducks/Actions/navigation';
import { updateHoa, updateResult } from './../../Ducks/Actions/userInput';
import PmtDisplay from './../../Components/PmtDisplay/PmtDisplay';

import styles from '../../Utils/Styles';


const text = {
    mainTitle: `Maximum Home Price`,
    breakdownTitle: `This is the breakdown of the monthly cost`,
}


const Result = (props) => {
    const [maxAmount, updateMaxAmount] = useState(0)
    const [showHoa, updateShowHoa] = useState(false)
    const toggleShowHoa = () => updateShowHoa(!showHoa)
    // const [hoa, updateHoa] = useState(0)

    const convertTypes = (type) => {
        switch (type) {
            case 'Conventional':
                return 'conv'
            case 'FHA':
                return 'fha'
            case 'VA':
                return 'va'
            case 'Jumbo':
                return 'jumbo'
            default:
                break;
        }
    }
    const showHoaBtnTitle = `${+props.hoa ? 'Update' : 'Add'} HOA Fee`

    const prepareData = (data) => {
        const vetUse = (data.vetUse.indexOf('1') >= 0) ? 'first' : 'second +';
        const type = convertTypes(data.type);
        const cleanData = { ...data, vetUse, type }
        console.log('this is clean data', cleanData)
        return cleanData
    }

    const submitData = async (rawData) => {
        const data = prepareData(rawData)
        console.log(data)
        try {
            const result = await calculate(data.type, data.rate, data) // api call
            console.log('this is a result', result.result)
            props.updateResult(result.result) // Redux action
            return (result.result.maxHomeValue) // return data obj from api
        }
        catch (e) {
            // handle error
        }
    }

    useEffect(() => {
        const submitAndSave = async () => {
            const max = await submitData(props)
            // updateMaxAmount(max)
        }
        submitAndSave()
    }, [])

    const formatDollars = (num) => {
        // const things = num.split('').map((n, i) =>{})
    }

    const reCalculate = () => {
        toggleShowHoa()
        submitData(props)
    }

    const handleNavigation = (next) => {

        // updateData()

        const location = "Financial"
        props.navigate(next || location)
    }

    const displayData = (resultData) => {
        const monthlyData = { ...resultData }
        delete monthlyData.maxHomeValue
        return monthlyData
    }
    const displayMaxValue = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(props.result.maxHomeValue)

    return (
        <div style={styles.container}>
            <div style={styles.contentContainer}>
                <div style={styles.maxContainer}>
                    <h2 style={styles.maxTitle}>{text.mainTitle}</h2>
                    <h1 style={styles.maxDisplay}>{displayMaxValue}</h1>
                </div>
                <div style={styles.breakdownContainer}>
                    <InptTtlTxt text={text.breakdownTitle} style={styles.breakdownTitle} />
                    <PmtDisplay data={displayData(props.result)} />
                </div>

            </div>
            <div style={styles.container}>
                {showHoa ? (
                    <>
                        <TextInput
                            value={props.hoa}
                            onChange={props.updateHoa}
                            type='number'
                        />
                        <NavButton
                            style={{ fontSize: 15, minHeight: 25 }}
                            title="Re-Calculate"
                            onClick={reCalculate}
                        />
                    </>
                ) : (

                        <NavButton
                            style={{ fontSize: 15, minHeight: 25 }}
                            title={showHoaBtnTitle}
                            onClick={toggleShowHoa}
                        />
                    )}
            </div>
            <div style={styles.navBtnContainer}>
                <NavButton
                    style={{ marginTop: 30 }}
                    title="Back"
                    onClick={() => handleNavigation()}
                />
                <NavButton
                    style={{ marginTop: 0 }}
                    title="Edit Values"
                    onClick={() => handleNavigation('General')}
                />
                {/* <NavButton
                    title="Back to City Creek Mortgage"
                    onClick={() => handleNavigation()}
                /> */}
            </div>
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
            debts,
            alimony,
            childSupport,
        },
        hoa,
        result,
    } = state;

    return {
        location,
        rate,
        credit,
        state: province,
        county,
        type,
        years: +years,
        downPmt: +downPmt,
        vetType,
        disability,
        childCare: +childCare,
        vetUse,
        veteran,
        income: +income,
        debts: +debts,
        alimony: +alimony,
        childSupport: +childSupport,
        hoa: +hoa,
        result
    }
}

const mapDispatchToProps = {
    navigate,
    updateHoa,
    updateResult,
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)
