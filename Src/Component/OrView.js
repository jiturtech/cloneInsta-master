import React from 'react';
import {  StyleSheet, View,Appearance ,Text} from 'react-native';
const colorScheme = Appearance.getColorScheme();

const OrView=(props)=>{
    return(
        <View style={styles.mainView}>
            <View style={styles.firstLine}/>
            <Text style={styles.txtor}>{"OR"}</Text>
            <View style={styles.firstLine}/>

        </View>
    )
}
const styles=StyleSheet.create({
    mainView:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:30
    },
    firstLine:{
        flex:0.4,
        height:1,
        backgroundColor:colorScheme=="dark"?'#F2F2F2':'rgba(0,0,0,0.2)'
    },
    txtor:{
        fontWeight:"600",
        fontSize:12,
        lineHeight:14.32,
        textAlign:"center",
        color:colorScheme=="dark"?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.4)",
        flex:0.2
    }
})
export default OrView;