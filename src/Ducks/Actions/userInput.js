// // // Types // // //
const UPDATE_RATE = 'UPDATE_RATE';
const USER_IS_VETERAN = 'USER_IS_VETERAN';
const UPDATE_GENERAL = 'UPDATE_GENERAL';
const UPDATE_VETERAN = 'UPDATE_VETERAN';
const UPDATE_FINANCIAL = 'UPDATE_FINANCIAL';
const UPDATE_HOA = 'UPDATE_HOA';
const UPDATE_RESULT = 'UPDATE_RESULT';

const types = {
    UPDATE_RATE,
    USER_IS_VETERAN,
    UPDATE_GENERAL,
    UPDATE_VETERAN,
    UPDATE_FINANCIAL,
    UPDATE_HOA,
    UPDATE_RESULT,
}

export default types


// // // Action Builders // // //

export const updateRate = (rate) => ({
    type: UPDATE_RATE,
    payload: rate
})

export const userIsVeteran = (isVeteran) => ({
    type: USER_IS_VETERAN,
    payload: isVeteran
})

export const updateGeneral = (general) => ({
    type: UPDATE_GENERAL,
    payload: general
})

export const updateVeteran = (veteran) => ({
    type: UPDATE_VETERAN,
    payload: veteran
})

export const updateFinancial = (financial) => ({
    type: UPDATE_FINANCIAL,
    payload: financial
})

export const updateHoa = (fee) => ({
    type: UPDATE_HOA,
    payload: fee
})

export const updateResult = (result) => ({
    type: UPDATE_RESULT,
    payload: result
})