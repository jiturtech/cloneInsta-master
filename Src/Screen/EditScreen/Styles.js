import React from 'react';
import { StyleSheet,Appearance } from 'react-native';
import { Colors } from '../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    //header view style
    txtCancel:{
        fontSize:16,
        fontWeight:"400",
        lineHeight:21,
        color:Colors.themeColor
    },
    txtEditProfie:{
        fontSize:16,
        fontWeight:"600",
        lineHeight:21,
        color:Colors.themeColor,
        textAlign:"center"
    },
    headerView:{ flexDirection: "row", justifyContent: "space-between",margin:12 },

    //profile view
    profileView:{
        alignItems:"center",
        justifyContent:"center",
        marginVertical:20

    },
    imageView:{
        height:95,
        width:95,
        borderRadius:95,
        borderWidth:0.5,
        borderColor:'#0000001A',

    },
    txtChangeProfile:{
        fontSize:13,
        fontWeight:"600",
        lineHeight:21,
        color:Colors.blue,
        marginTop:12.75
    }
})
export default styles