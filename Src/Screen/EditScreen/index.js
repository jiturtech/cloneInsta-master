import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../Resource/Colors';
import { images } from '../../Resource/Images';
import { strings } from '../../Resource/Strings';
import styles from './Styles';

const EditScreen = (props) => {
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <View style={styles.headerView}>
                    <Text style={styles.txtCancel}>{strings.cancel}</Text>
                    <Text style={styles.txtEditProfie}>{strings.editProfile}</Text>
                    <Text style={[styles.txtEditProfie, { color: Colors.blue }]}>{strings.done}</Text>
                </View>
                <View style={styles.profileView}>
                    <Image style={styles.imageView} source={images.oval} />
                    <Text style={styles.txtChangeProfile}>{strings.txtchangeprofilelbl}</Text>
                </View>
            </SafeAreaView>

        </LinearGradient>
    )
}
export default EditScreen;