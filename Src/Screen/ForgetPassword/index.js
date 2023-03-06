import React, { useState, useMemo } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Resource/Colors';
import styles from './Styles';


const ForgetPassword = (props) => {
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={Colors.themeColor}
            />
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </LinearGradient>
    )
}
export default ForgetPassword;