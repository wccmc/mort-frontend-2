import Colors from './Colors';

const Sizing = {
    TITLE_TEXT: 22,
    INPUT_TEXT: 18,

}

const styles = {
    appContainer: {
        height: "100%",
        minHeight: '100vh',
        width: "100vw",
        // width: "100%",
        backgroundColor: Colors.CONTENT_BACKGROUND,
        color: Colors.FONT,
        padding: 45,
    },
    headerContainer: {
        minHeight: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 35,
    },
    headerText: {
        textAlign: 'center',
        fontSize: '3em',
        color: Colors.FONT,
    },
    container: {
        // height: '50%',
        // width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // minHeight: '80vh', // an idea for adding consistency
        // backgroundColor: 'pink',

    },
    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '40%',
        minWidth: 300,
        // backgroundColor: 'darkgreen',
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        // height: 100,
        width: '100%',
        minWidth: 300,
        marginTop: 15,
        padding: 15,
        // backgroundColor: 'lightblue',
    },
    inputTitle: {
        // margin: '25px 0 10px 0',
        fontSize: Sizing.TITLE_TEXT,
        color: Colors.INPUT_TITLE,
    },
    textInput: {
        width: '100%',
        height: 35,
        color: Colors.INPUT_TEXT,
        backgroundColor: Colors.INPUT_BACKGROUND,
        fontSize: Sizing.INPUT_TEXT,
        marginTop: 10,
        paddingLeft: 5,
        border: '1px solid black',
        borderRadius: 5,


    },
    rateTitle: {
        fontSize: Sizing.INPUT_TEXT,
        color: Colors.INPUT_TITLE,
    },
    rateTextInput: {
        borderRadius: 5,
        margin: 5,
        paddingLeft: 5,
        width: 50,
        height: 20
    },
    radioSectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        minWidth: 300,
        maxWidth: 400,
        marginTop: 15,
        padding: 10,
        margin: 'auto',
        // backgroundColor: 'purple',
        // height: 50,
    },
    radioInputGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '30%',
        minWidth: 110,
        // backgroundColor: 'lightgreen',
    },
    sliderSectionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 100,
        width: '100%',
        minWidth: 300,
        marginTop: 15,
        padding: 10,
        // backgroundColor: 'cyan',
    },
    sliderGroup: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 300,
        height: 70,
        // margin: 10,
        padding: 10,
        // backgroundColor: 'blue',

    },
    slider: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        // backgroundColor: 'red',
        // width: 100,
    },
    maxContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'space-around',
        justifyContent: 'center',
        marginTop: '5vh',
        width: '100%',
    },
    maxTitle: {
        textAlign: 'center',
        fontSize: '2em',
        color: Colors.FONT,
        alignSelf: 'center',
        // width: '100%',
    },
    maxDisplay: {
        fontSize: '4em',
        color: Colors.FONT,
        alignSelf: 'center',
        // width: '100%',

    },
    breakdownContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: 45,
        padding: 15,
        paddingBottom: 25,
        backgroundColor: Colors.DISPLAY_BG, // Use Global Color
    },
    breakdownTitle: {
        textAlign: 'center',
    },
    pmtDisplayContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '50%',
        minWidth: 300,
        marginTop: 10,
        borderBottomWidth: 2,

    },
    pmtDisplayLineContainer: {
        marginLeft: '5%',
        padding: 2,
        borderBottom: '1px dotted black',
        minWidth: '90%',

    },
    pmtDisplayTitle: {
        fontSize: 20,
        color: Colors.FONT,
        marginTop: 20,

    },
    pmtDisplayNum: {
        fontSize: 18,
        color: Colors.FONT,
        marginTop: 10,

    },
    smallButton: {
        height: 25,
        width: 50,
        color: Colors.FONT,
        backgroundColor: Colors.SMALL_BTN,
        margin: 10,
    },
    smallButtonSelected: {
        backgroundColor: Colors.BTN_FOCUS,
    },
    navBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        // minWidth: 300,

    },
    navBtn: {
        backgroundColor: Colors.BTN_BACKGROUND,
        color: Colors.BTN_FONT,
        fontSize: 24,
        minWidth: 200,
        minHeight: 50,
        borderRadius: 5,
        padding: '10px',
        border: 'none',
        margin: "20px 2px",
        cursor: "pointer",

    },
    textBtnContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '30%',
        minWidth: 300,
        height: 40,
        marginTop: 15,

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