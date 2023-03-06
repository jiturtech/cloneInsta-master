import React from 'react';
import { StyleSheet,Appearance } from 'react-native';
import { Colors } from '../../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewRow:{
        height:1,
        backgroundColor:Colors.borderColor,
        marginVertical:5
    },
    //story view style
    imgProfile:{
        height:60,
        width:60,
        borderRadius: 62
    },
    txtTitle:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:14.32,
        textAlign:"center",
        color:Colors.themeColor,
        marginVertical:5
    },
    borderView:{
        borderRadius: 62, height: 64,
        width: 64, alignItems: "center", justifyContent: "center"
    },
    //post view
    imgUser:{
        height:38,
        width:38,
        borderWidth:0.5,
        borderColor:'#0000001A',
        borderRadius:32,
        alignSelf:"center"
    },
    imgOfficial:{
        height:10,
        width:10,
        marginLeft:7

    },
    txtUsername:{
        fontWeight:"600",
        fontSize:13,
        lineHeight:18,
        color:Colors.themeColor,
    },
    txtAddress:{
        fontWeight:"400",
        fontSize:11,
        lineHeight:13.13,
        color:Colors.themeColor,
        
    },
    viewOffical:{ flexDirection: "row", alignItems: "center", justifyContent: "center" },
    threeDot:{
        width:20,
        height:50,
        tintColor:Colors.themeColor
    },
    //cauorel view
    paginationView:{
        position:"absolute",
        right:14,
        top:14,
        backgroundColor:Colors.paginationColor,
        width:34,
        height:26,
        borderRadius:13,
        alignItems:"center",
        justifyContent:"center"
    },
    txtPagination:{
        fontWeight:"400",
        fontSize:12,
        lineHeight:14.32,
        color:'#F9F9F9'
    },
    footerView:{
        flexDirection:"row",
        marginHorizontal:15,
        marginTop:10
    
      //  height:30,
    },
    paginationStyle:{ flexDirection: "row", flex: 0.6, justifyContent: "space-between" },
    txtLikeBy:{
        fontSize:13,
        color:Colors.themeColor,
        fontWeight:"400",
        lineHeight:18
    },
    txtLikeNameBy:{
        fontSize:13,
        color:Colors.themeColor,
        fontWeight:"600",
        lineHeight:18
    },
    likeView:{ flexDirection: "row", bottom: 20, marginHorizontal: 15, alignItems: "center" },
    imgLikeUser:{ height: 17, width: 17, marginRight: 8 }
})
export default styles