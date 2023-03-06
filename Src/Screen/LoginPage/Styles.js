import React from 'react';
import { StyleSheet,Appearance } from 'react-native';
import { Colors } from '../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewStyle: {
        marginHorizontal: 20,
        flex: 1,
        marginBottom: 10
    },
    txtStyle: {
        color: "#202150",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: "30%"
    },
    txtForgetStyle: {
        color: Colors.blue,
        fontSize: 12,
        fontWeight: "500",
        marginVertical: 5,
        alignSelf: "flex-end"
    },
    signInBtn: {
        backgroundColor: '#3797EF',
        height: 50,
        flex: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10
    },
    btnTextSignStyle: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    imgLogo: { alignSelf: "center", marginTop: 70, marginBottom: 40 },
   
  
    backImg:{
        height:20,
        width:20,
        tintColor:Colors.themeColor,
        top:20
    },
    txtfacebook:{
        fontWeight:"600",
        fontSize:14,
        lineHeight:16.71,
        color:'#3797EF',
        textAlign:"center",
        marginLeft:10
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
    txtfooter:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:14.32,
        textAlign:"center",
        color:colorScheme=="dark"? '#FFFFFF99':"#00000066"
    }
})
export default styles