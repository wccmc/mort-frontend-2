import React from 'react'
import Screens from './Screens'

const Routing = () => {
  const [rate, updateRate] = useState(4)
  const defaultVetData = {
    "childCareVA": 0,
    "vetType": "Regular Military",
    "vetUse": "first",
    "vetDisability": false,
  }

  const [vetData, updateVetData] = useState(defaultVetData)

  useEffect(() => {
    // getRate().then(rate => updateRate(rate))
    getRate().then(res => {
      console.log(res)
      updateRate(res)
    })
    // const newRate: Promise<number> = getRate()
    // updateRate(newRate)
  }, [])

  const display = () => {
    const { Financial, General, Result, Veteran, } = Screens
    const { location } = props // coming from Redux

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
      {display}
    </div>
  )
}

export default Routing
