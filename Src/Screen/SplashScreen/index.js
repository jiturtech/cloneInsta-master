import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../Resource/Colors';
import { images } from '../../Resource/Images';
import { strings } from '../../Resource/Strings';
import InstaLogo from '../../Utility/svg/InstaLogo';

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(strings.authorizeNav)
        }, 2000);
    }, [])
    return (
        <View style={styles.mainView} >
            <StatusBar
                animated={true}
                backgroundColor={Colors.backgroundColor}
                barStyle={Colors.barStyle}

            />
            <Image style={styles.imgLogo} source={images.logo} resizeMode={"contain"} />
            <View style={styles.footerView}>
                <Text style={[styles.txtFont]}>from</Text>
                    <InstaLogo/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1, backgroundColor: Colors.backgroundColor,
        alignItems: "center", justifyContent: "center"
    },
    imgLogo: { height: 80, width: 80 },
    footerView: {
        position: "absolute", bottom: 50,
    },
    txtFont: {
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
        color: Colors.themeColor
    }

})
export default SplashScreen;