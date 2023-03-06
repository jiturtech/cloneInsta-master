import React from 'react';
import { StyleSheet, Appearance, Dimensions } from 'react-native';
import { Colors } from '../../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();
const { height, width } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //serach keyword styles
    renderKeys: {
        flexDirection: "row",
        backgroundColor: Colors.backgroundColor,
        borderWidth: 1,
        borderColor: colorScheme == "light" ? "#3C3C432E" : "#FFFFFF26",
        height: 32,
        alignItems: "center",
        justifyContent: "center",
        width: 75,
        borderRadius: 6,
        marginLeft: 6
    },
    txtTitle: {
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16.71,
        color: Colors.themeColor,
    },
    keyImg: { height: 15, width: 13, marginRight: 5, tintColor: Colors.themeColor },

    //post render view
    postImg: {
        height:  width / 3,
        width: width / 3,
        flex:1
    },
    singlepostImg: {
        flex: 1,
        width: (width * 66.5) / 100,
        height:124,
        marginRight: 1, marginBottom:0,

    },
    
    item: {
        flex: 1,
        margin: 1,
        height: width / 3 - 3,
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
      },
    
})
export default styles