import React from 'react';
import { StyleSheet,Appearance, Dimensions } from 'react-native';
import { Colors } from '../../../../Resource/Colors';
const colorScheme = Appearance.getColorScheme();
const NUM_COLUMNS = 6;
const { height, width } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    //reneder view single postview
    userImg:{
        height:44,
        width:44,
        borderRadius:44,
        borderWidth:0.2,
        borderColor:'#00000033'
    },
    txtbold:{
        fontWeight:"600",
        fontSize:13,
        lineHeight:15.51,
        color:Colors.themeColor
    },
    txtLight:{
        fontWeight:"400",
        fontSize:13,
        lineHeight:15.51,
        color:Colors.themeColor
    },
    txtTime:{
        fontWeight:"400",
        fontSize:13,
        lineHeight:15.51,
        color:colorScheme=="dark"?"#FFFFFF99":"#00000066"
    },
    item: {
        flex: 1,
        margin: 1,
        height: width / NUM_COLUMNS - 6,
      },
      image: {
        flex: 1,
        width: '100%',
        height: '100%',
      },

      //multiUserSinglePost view style
      image1:{
        height:32,
        width:32,
        borderRadius:32
      },
      image2:{
        height:32,
        width:32,
        borderRadius:32,
        borderWidth:1.5,
        borderColor:colorScheme=="light"?"#FFFFFF":"#000000",
        position:"absolute",
        top:10,left:10
      },
      postImage:{
        height:44,
        width:44
      }
})
export default styles