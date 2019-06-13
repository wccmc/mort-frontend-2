import initialState from './initialState';
import navigationTypes from './Actions/navigation'; // Navigation Action Types 
import userInputTypes from './Actions/userInput'; // Navigation Action Types 


// // // Main Reducer // // //
export default (state = initialState, action) => {
    const { type, payload } = action;
    const newState = JSON.parse(JSON.stringify(state))

    const {
        UPDATE_RATE,
        USER_IS_VETERAN,
        UPDATE_GENERAL,
        UPDATE_VETERAN,
        UPDATE_FINANCIAL,
    } = userInputTypes;

    switch (type) {
        case navigationTypes.NAVIGATE:
            newState.location = payload
            return newState
        case UPDATE_RATE:
            if (payload < 10 && payload >= 0) {
                newState.rate = payload
            }
            return newState
        case USER_IS_VETERAN:
            newState.veteran.veteran = payload
            return newState
        case UPDATE_GENERAL:
            newState.general = payload
            return newState
        case UPDATE_VETERAN:
            const veteran = newState.veteran.veteran;
            newState.veteran = payload;
            newState.veteran.veteran = veteran;
            return newState
        case UPDATE_FINANCIAL:
            newState.financial = payload
            return newState


        default:
            return state
    }

}

