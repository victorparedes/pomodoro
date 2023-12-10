import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    item: {
        padding: 5,
        width: '33%',
        marginVertical: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },    
    selectedItem: {
        borderColor: 'transparent',
    },
});