import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 220,
        height: 250,
        padding: 25,
        backgroundColor: '#C656E0',
        borderRadius: 6,
    },
    header: {
        backgroundColor: '#F6B5EE',
        padding: 2,
        borderRadius: 6,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#C656E0',
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
    }
});

export default styles;
