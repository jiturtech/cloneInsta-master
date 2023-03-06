import React, { useState, useMemo } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import CustomButton from '../../Component/CustomButton';
import { images } from '../../Resource/Images';
import { strings } from '../../Resource/Strings';
import styles from './Styles';
import Toast from 'react-native-simple-toast';
import { Colors } from '../../Resource/Colors';
import { FloatingTextInput } from '../../Component/FloatingTextInput';
import LinearGradient from 'react-native-linear-gradient';
import { BackArrow } from '../../Utility/svg/BackArrow';
import InstaLogo from '../../Utility/svg/InstaLogo';
import MetaLogo from '../../Utility/svg/MetaLogo';
import OrView from '../../Component/OrView';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onPress = (flag) => {
        if (flag == "Log In") {
            signInProcess()
        }
    }
    function signInProcess() {
        props.navigation.navigate(strings.TabNavigation)
    }
    const _updateMasterState = (attrName, value) => {
        if (attrName === strings.attrName)
            setEmail(value)
        else if (attrName === strings.attrNamePass)
            setPassword(value)
    }
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>
            
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                    barStyle={Colors.barStyle}
                />
                <ScrollView
                    keyboardShouldPersistTaps='handled'
                    style={styles.scrollViewStyle}
                    showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={{ marginHorizontal: 10, marginVertical: 30 }} onPress={() => props.navigation.goBack()}>
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={styles.imgLogo} resizeMode={"contain"} >
                        <InstaLogo />
                    </View>
                    <FloatingTextInput
                        attrName={strings.attrName}
                        title={strings.emailHintText}
                        value={email}
                        updateMasterState={_updateMasterState}
                        textInputStyles={{ // here you can add additional TextInput styles
                            color: Colors.themeColor,
                            fontSize: 15,
                            marginLeft: 8
                        }}

                        titleActiveColor={Colors.borderActive}
                        titleInactiveColor={Colors.borderInActive}
                    />
                    <FloatingTextInput
                        attrName={strings.attrNamePass}
                        title={strings.passwordHintText}
                        value={password}
                        updateMasterState={_updateMasterState}
                        textInputStyles={{ // here you can add additional TextInput styles
                            color: Colors.white,
                            fontSize: 15,
                            marginLeft: 8

                        }}
                        titleActiveColor={Colors.borderActive}
                        titleInactiveColor={Colors.borderInActive}

                    />
                    <Text
                        onPress={() => props.navigation.navigate(strings.forgetPassNav)}
                        style={styles.txtForgetStyle}>{strings.txtForgetPassword}
                    </Text>
                    <CustomButton
                        btnStyle={styles.signInBtn}
                        btnText={strings.signIn}
                        btnTextStyle={styles.btnTextSignStyle}
                        onPress={onPress}
                        btnFlag={"Log In"}
                    />
                    <TouchableOpacity style={{ flexDirection: "row", alignSelf: "center", marginVertical: 20 }}>
                        <MetaLogo />
                        <Text style={styles.txtfacebook}>{strings.txtFacebook}</Text>
                    </TouchableOpacity>
                    <OrView />
                    <Text style={styles.txtdonthave}>{strings.donthave}
                        <Text style={styles.txtsignup}>{"Sign up."}</Text>
                    </Text>
                </ScrollView>
                <View style={styles.footerView}>
                    <Text style={styles.txtfooter}>{strings.footerLAbel}</Text>
                </View>
            </SafeAreaView>

        </LinearGradient>
    )
}
export default Login