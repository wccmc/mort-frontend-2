import React, { useState, useEffect } from 'react';
import Screens from './Screens';
import { getRate } from './Utils/API';
import { connect } from 'react-redux';

const Routing = (props) => {
  // const [rate, updateRate] = useState(4)
  // // const defaultVetData = {
  // //   "childCareVA": 0,
  // //   "vetType": "Regular Military",
  // //   "vetUse": "first",
  // //   "vetDisability": false,
  // // }

  // // const [vetData, updateVetData] = useState(defaultVetData)

  // useEffect(() => {
  //   // getRate().then(rate => updateRate(rate))
  //   getRate().then(res => {
  //     console.log(res)
  //     updateRate(res)
  //   })
  //   // const newRate: Promise<number> = getRate()
  //   // updateRate(newRate)
  // }, [])

  const display = () => {
    const { Financial, General, Result, Veteran, } = Screens
    const { location = 'General' } = props // coming from Redux

    switch (location) {
      case 'General':
        return <General />

      case 'Financial':
        return <Financial />

      case 'Veteran':
        return <Veteran />

      case 'Result':
        return <Result />

      default:
        // <PageNotFound /> // Future idea (low priority)
        break;
    }
  }

  return (
    <div>
      {display()}
    </div>
  )
}

const mapStateToProps = ({ location }) => ({ location })

export default connect(mapStateToProps)(Routing)
