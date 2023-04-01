import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        margin: 10,
    },
    containerWithHeader: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
        paddingTop: 80,
        margin: 10,
    },
    stacked: {
        flex: 0.3,
        justifyContent: 'space-evenly',
    },
    middle: {
        flex: 0.3,
        justifyContent: 'space-around',
    },
    row: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});