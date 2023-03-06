import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../Resource/Colors';
import { images } from '../../../Resource/Images';
import CameraIcon from '../../../Utility/svg/CameraIcon';
import IGTV from '../../../Utility/svg/IGTV';
import Messanger from '../../../Utility/svg/Messanger';

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <TouchableOpacity style={styles.cameraStyle}>
                <CameraIcon />
            </TouchableOpacity>
            <View style={styles.instaViewLogo}>
                <Image style={styles.imgLogo} source={images.instaLogo} />
            </View>
            <View style={styles.igtvView}>
                <TouchableOpacity>
                    <IGTV />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate("dmpage")}>
                    <Messanger />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerView: {
        flexDirection: "row",
        margin: 20,
        
    },
    cameraStyle: {
        flex: 0.1,
        alignSelf: "flex-start",
        height: 28
    },
    imgLogo: {
        height: 28,
        tintColor: Colors.themeColor,
        width: 105,
        alignSelf: "center"
    },
    igtvView: {
        flex: 0.2,
        flexDirection: "row",
        alignSelf: "flex-end",
        alignItems: "center",
        justifyContent: "space-between",
        height: 28
    },
    instaViewLogo: {
        flex: 0.7, alignSelf: "center",
        alignItems: "center", justifyContent: "center",
    }
})
export default Header;