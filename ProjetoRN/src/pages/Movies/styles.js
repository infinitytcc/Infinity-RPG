import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 320,
        height: 450,
        padding: 25,
        backgroundColor: '#403594',
        borderRadius: 6,
    },
    header: {
        backgroundColor: '#7568E0',
        padding: 2,
        borderRadius: 6,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#403594',
        fontWeight: 'bold',
    },
});

export default styles;
