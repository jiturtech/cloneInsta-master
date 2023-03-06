import React from 'react';
import { StyleSheet, Appearance,Dimensions } from 'react-native';
import { Colors } from '../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();
const{height,width}=Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imgLogo: { alignSelf: "center", marginBottom: 40 },
    profileView: { alignItems: "center", justifyContent: "center" },
    imgProfile:{
        height:80,
        width:80,
        borderWidth:0.5,
        borderColor:'#0000001A',
        borderRadius:80
    },
    txtName:{
        fontWeight:"600",
        fontSize:14,
        lineHeight:16.71,
        textAlign:"center",
        color:Colors.themeColor,
        marginVertical:10
    },
    signInBtn: {
        backgroundColor: '#3797EF',
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,
        width:width-40,
    },
    btnTextSignStyle: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    txtSwitch:{
        fontWeight:"600",
        fontSize:14,
        lineHeight:16.71,
        textAlign:"center",
        color:'#3797EF',
        marginVertical:30
    },
    footerView:{
        height:80,
        position:"absolute",
        bottom:0,
        borderColor:colorScheme=="dark"? '#FFFFFF26':"#3C3C434A",
        borderTopWidth:1,
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    txtdonthave:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:14.32,
        textAlign:"center",
        color:colorScheme=="dark"? 'rgba(255,255,255,0.6)':'rgba(0,0,0,0.4)'
    },
    txtsignup:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:14.32,
        textAlign:"center",
        color:'#3797EF'
    },
})
export default styles;