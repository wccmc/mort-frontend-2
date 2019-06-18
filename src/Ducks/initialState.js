const initialState = {
    rate: 4.25,
    general: {
        credit: '720-739',
        state: 'Utah',
        county: 'Salt Lake',
        type: 'Conventional',
        years: '30',
        downPmt: '0',
        downPmt: '0',
    },
    veteran: {
        vetType: 'Regular Military',
        disability: false,
        childCare: '0',
        vetUse: '1st time',
        veteran: false,
    },
    financial: {
        income: '0',
        debts: '0',
        alimony: '0',
        childSupport: '0'
    },
    hoa: '0',
    location: 'General',
    routes: [
        'General',
        'Veteran',
        'Financial',
        'Result'
    ],
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