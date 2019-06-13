const initialState = {
    rate: 4.25,
    general: {
        credit: '720-739',
        state: 'Utah',
        county: 'Salt Lake',
        type: 'Conventional',
        years: '30',
        downPmt: '0',
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
        debt: '0',
        alimony: '0',
        childSupport: '0'
    },
    hoa: '0',
    location: 'General',
}

export default initialState