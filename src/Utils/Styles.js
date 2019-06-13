import Colors from './Colors';

const Sizing = {
    TITLE_TEXT: 22,
    INPUT_TEXT: 18,

}

const styles = {
    appContainer: {
        // height: "100vh",
        width: "100vw",
        height: "100%",
        // width: "100%",
        backgroundColor: Colors.CONTENT_BACKGROUND,
        color: Colors.FONT,
        padding: 45,
    },
    container: {
        // height: '50%',
        // width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',

    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // height: 100,
        width: '40%',
        margin: 15,
        padding: 10,
        // backgroundColor: 'lightblue',
    },
    inputTitle: {
        margin: '25px 0 10 0',
        fontSize: Sizing.TITLE_TEXT,
        color: Colors.INPUT_TITLE,

    },
    textInput: {
        width: '100%',
        height: 25,
        minWidth: 300,
        color: Colors.INPUT_TEXT,
        backgroundColor: Colors.INPUT_BACKGROUND,
        fontSize: Sizing.INPUT_TEXT,
        marginTop: 10,

    },
    radioSectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        margin: 15,
        padding: 10,
        // height: 50,
    },
    radioInputGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
    },
    sliderSectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 100,
        width: '40%',
        margin: 15,
        padding: 10,
    },
    sliderGroup: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        height: 70,
        backgroundColor: 'red',
        margin: 10,

    },
    buttonToggleContainer: {

    },
    navBtn: {
        backgroundColor: Colors.BTN_BACKGROUND,
        width: 200,
        height: 40,
        borderRadius: 5,
        border: 'none',
        margin: "10px 2px",
        cursor: "pointer",
    },
    textBtn: {
        background: 'none',
        border: 'none',
        cursor: "pointer",
        color: Colors.FONT,
        fontSize: 15,
    },
}

export default styles