import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View, Appearance, TextInput } from 'react-native';
import { Colors } from '../../../Resource/Colors';
import { images } from '../../../Resource/Images';
import { strings } from '../../../Resource/Strings';
import InstagramStory from '../../../Utility/svg/InstagramStory';
import SerachIcon from '../../../Utility/svg/SerachIcon';
const colorScheme = Appearance.getColorScheme();

const Header = (props) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", margin: 10,height:40 }}>
            <View style={styles.headerView}>
                <Image style={styles.imgSerach} source={images.serachIcon} />
                <TextInput
                    style={styles.textInput}
                    placeholder={strings.searchPlaceholder}
                    placeholderTextColor={colorScheme=="dark"?"#3C3C4399":"#8E8E93"}
                />
            </View>
            <TouchableOpacity style={{ flex: 0.1,marginLeft:10 }}>
                <InstagramStory />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    headerView: {
        backgroundColor: colorScheme == "dark" ? "#262626" : "#7676801F",
        flex: 0.9, borderRadius: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        color: Colors.themeColor,
    },
    imgSerach: { height: 14, width: 14,tintColor:"#979797",marginHorizontal:7 }
})
export default Header;