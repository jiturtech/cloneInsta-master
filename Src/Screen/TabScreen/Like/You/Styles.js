import React from 'react';
import { StyleSheet, Appearance, Dimensions } from 'react-native';
import { Colors } from '../../../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();
const { height, width } = Dimensions.get("screen")
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    txtFollow: {
        fontSize: 15,
        lineHeight: 20,
        fontWeight: "400",
        color: Colors.themeColor,
        marginHorizontal: 16,
        marginVertical: 14
    },
    viewRow: {
        height: 1,
        backgroundColor: colorScheme === "dark" ? "#00000000" : "rgba(60,60,67,0.29)"
    },
    //render view styles
    txttitle: {
        fontWeight: "600",
        fontSize: 15,
        lineHeight: 20,
        color: Colors.themeColor
    },

    //like user styles
    image1: {
        height: 32,
        width: 32,
        borderRadius: 32
    },
    image2: {
        height: 32,
        width: 32,
        borderRadius: 32,
        borderWidth: 1.5,
        borderColor: colorScheme == "light" ? "#FFFFFF" : "#000000",
        position: "absolute",
        top: 10, left: 10
    },
    postImage: {
        height: 44,
        width: 44
    },
    userImg: {
        height: 44,
        width: 44,
        borderRadius: 44,
        borderWidth: 0.2,
        borderColor: '#00000033'
    },
    txtbold: {
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 15.51,
        color: Colors.themeColor
    },
    txtLight: {
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 15.51,
        color: Colors.themeColor
    },
    txtTime: {
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 15.51,
        color: colorScheme == "dark" ? "#FFFFFF99" : "#00000066"
    },
    //follower view
    msgBtn: {
        flex: 0.2, alignItems: "center",
        justifyContent: "center", width: 90, height:28,borderRadius:4,
        borderWidth:1,
        borderColor:colorScheme=="light"?"#3C3C432E":"#FFFFFF26"
     },
     txtMsgLbl:{
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16.71,
        color: Colors.themeColor,
        textAlign:"center"
     },
     followBtn:{
        flex: 0.2, alignItems: "center",
        justifyContent: "center", width: 90, height:28,borderRadius:4,
       backgroundColor:Colors.blue
     },
     txtFollowLbl:{
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 16.71,
        color: Colors.white,
        textAlign:"center"
     }

})
export default styles