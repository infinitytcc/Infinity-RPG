import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
    },
    box: {
        width: 220,
        height: 250,
        padding: 25,
        backgroundColor: 'black',
        borderRadius: 6,
    },
    header: {
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 6,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
    },
    main: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
    },
    bold: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",
    },
    b: {
        width:500,
    }
});

export default styles;
