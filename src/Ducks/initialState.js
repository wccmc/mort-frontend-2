const initialState = {
    rate: 4.25,
    general: {
        credit: '720-739',
        state: 'Utah',
        county: 'Salt Lake',
        type: 'Conventional',
        // years: '30', // REMOVE
        downPmt: '0',
        downPmt: '150000',
    },
    veteran: {
        vetType: 'Regular Military - 1st time',
        disability: false,
        childCare: '0',
        vetUse: 'first',
        veteran: false,
    },
    financial: {
        income: '0',
        // income: '5700', // REMOVE
        debts: '0',
        // debts: '65', // REMOVE
        alimony: '0',
        childSupport: '0'
    },
    hoa: '0',
    location: 'General',
    // location: 'Result', // REMOVE
    result: {
        maxHomeValue: 0,
        pAndI: 0,
        tax: 0,
        mortgageInsurance: 0,
        homeInsurance: 0,
        hoa: 0,
        monthly: 0,
    },
}

export default initialState