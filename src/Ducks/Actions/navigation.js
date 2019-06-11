// // // Types // // //
const NAVIGATE = 'NAVIGATE';
const GO_BACK = "GO_BACK";

const types = {
    NAVIGATE,
    GO_BACK,
}

export default types


// // // Action Builders // // //

export const navigate = (location) => ({
    type: NAVIGATE,
    payload: location
})

// export const goBack = () => ({
//     type: GO_BACK
// })