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
        margin: 10,
    },
    rowEdged: {
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowButtons: {
        flex: 0.3,
        flexDirection: 'row',
        marginHorizontal: 'auto',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    rowButtonItem: {
        flex: 1,
        minWidth: 80,
        maxWidth: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },
    centered: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
});