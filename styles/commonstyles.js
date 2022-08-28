//'use-strict';
import { StyleSheet } from "react-native";

const bgColor = '#FFFFFF';

module.exports = StyleSheet.create({
    
    overall: {
        flex: 1,
        backgroundColor: bgColor,
    },

    overall_center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    overall_center_inner: {
        alignItems: 'center',
    },

    mapBGColor: {
        backgroundColor: bgColor,
    },

});