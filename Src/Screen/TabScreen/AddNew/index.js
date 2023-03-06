import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Resource/Colors';
import styles from './Styles';

const AddNew = (props) => {
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <Text style={{ color: Colors.themeColor }}>AddNew</Text>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default AddNew;