import React, { useState, useMemo } from 'react';
import { SafeAreaView, StatusBar, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Resource/Colors';
import { images } from '../../Resource/Images';
import InstaLogo from '../../Utility/svg/InstaLogo';
import styles from './Styles';
import CustomButton from '../../Component/CustomButton';
import { strings } from '../../Resource/Strings';

const Authorize = (props) => {
    const onPress = (flag) => {
        if (flag == "Log In") {
            props.navigation.navigate(strings.LoginNav)
        }
    }
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                    barStyle={Colors.barStyle}

                />
                <View style={styles.imgLogo} resizeMode={"contain"} >
                    <InstaLogo />
                </View>
                <View style={styles.profileView}>
                    <Image style={styles.imgProfile} source={images.oval} />
                    <Text style={styles.txtName}>{"jacob_w"}</Text>
                </View>
                <CustomButton
                    btnStyle={styles.signInBtn}
                    btnText={strings.signIn}
                    btnTextStyle={styles.btnTextSignStyle}
                    onPress={onPress}
                    btnFlag={"Log In"}
                />
                <Text style={styles.txtSwitch}>{strings.txtSwitch}</Text>
            </SafeAreaView>
            <View style={styles.footerView}>
                <Text style={styles.txtdonthave}>{strings.donthave}
                    <Text style={styles.txtsignup}>{"Sign up."}</Text>
                </Text>
            </View>
        </LinearGradient>
    )
}
export default Authorize;