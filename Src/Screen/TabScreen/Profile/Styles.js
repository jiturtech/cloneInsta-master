import React from 'react';
import { StyleSheet, Appearance, Dimensions } from 'react-native';
import { Colors } from '../../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();
const NUM_COLUMNS = 3;
const { width, height } = Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerDrawer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgLock: {
        height: 12,
        width: 8.75,
        tintColor: Colors.themeColor,
        alignSelf: "center",
        marginRight: 9
    },
    txtName: {
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 21,
        color: Colors.themeColor,
        marginRight: 5

    },
    imgDown: {
        height: 6,
        width: 10,
        tintColor: Colors.themeColor,
        alignSelf: "center"
    },
    imgMenu: {
        width: 21,
        height: 18,
        tintColor: Colors.themeColor,
        marginRight: 21,
        alignSelf: "center"
    },
    //profie 
    imgProfile: {
        width: 96,
        height: 96,
        borderRadius: 96,
        borderWidth: 1.5,
        borderColor: colorScheme == "dark" ? "#48484A" : "#C7C7CC"
    },
    viewProfile: {
        margin: 11,
        flexDirection: "row",
        alignItems: "center",
    },
    txtPostNum: {
        fontWeight: "600",
        fontSize: 16,
        lineHeight: 21,
        color: Colors.themeColor,
        textAlign: "center"
    },
    txtPostlbl: {
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 15.51,
        color: Colors.themeColor,
        textAlign: "center"

    },
    txtDesc: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 17,
        color: Colors.themeColor
    },
    btnEdit: {
        height: 35,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: colorScheme == "dark" ? "#FFFFFF26" : "#3C3C432E",
        backgroundColor: colorScheme == "dark" && "#000000",
        alignItems: "center",
        justifyContent: "center",
        margin: 16
    },
    txtEdit: {
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 18,
        color: Colors.themeColor,

    },
    //category view
    renderView: {
        borderWidth: 1,
        height: 64,
        width: 64,
        borderRadius: 64,
        borderColor: colorScheme == "light" ? "#C7C7CC" : "#FFFFFF14",
        alignItems: "center",
        justifyContent: "center"
    },
    imgOval: {
        height: 56,
        width: 56,
        borderWidth: 0.5,
        borderColor: "#0000001A",
        borderRadius: 56
    },
    txtTitle: {
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 16,
        color: Colors.themeColor,
        textAlign: "center",
        marginTop: 3
    },
    //
    item: {
        flex: 1,
        margin: 1,
        height: width / NUM_COLUMNS - 3,
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    //drawer 

    animatedBox: {
        flex: 1,
        backgroundColor: colorScheme == "dark" ? "#000000" : "#FFFFFF",
        padding: 10,
    },
    txtDrawerName: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 17.9,
        color: Colors.themeColor,
        marginBottom: 25
    },
    drawerImage: {
        height: 23.5,
        width: 23.5,
        tintColor: Colors.themeColor
    },
    drawerTitle: {
        fontWeight: "400",
        fontSize: 15,
        lineHeight: 20,
        color: Colors.themeColor,
        marginLeft: 12.75,
        textAlign: "center"
    },
    drawerBottom: {
        position: "absolute", bottom: 70,
        flexDirection: "row", marginBottom: 24, alignItems: "center",
        left: 10
    }


})
export default styles