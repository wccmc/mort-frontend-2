import Colors from './Colors';

const Sizing = {
    TITLE_TEXT: 22,
    INPUT_TEXT: 18,

}

const styles = {
    appContainer: {
        height: "100vh",
        width: "100vw",
        // height: "100%",
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

    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 100,
        width: '50%',
    },
    inputTitle: {
        margin: '25px 0 10 0',
        fontSize: Sizing.TITLE_TEXT,

    },
    textInput: {
        width: '20%',
        height: 25,
        minWidth: 200,
        backgroundColor: '#d1d1d1',
        fontSize: Sizing.INPUT_TEXT,
        margin: 10,

    },
    radioSectionContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        width: 300,
    },
    radioInputGroup: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBtn: {
        backgroundColor: 'orange',
        width: 200,
        height: 40,
        borderRadius: 5,
        border: 'none',
        margin: "4px 2px",
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