import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Resource/Colors';
import { images } from '../../../Resource/Images';
import { keyWords, serachPost } from '../../../Utility/Constant';
import Header from './Header';
import styles from './Styles';
const NUM_COLUMNS = 3;

const Serach = (props) => {
    const renderKeys = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.renderKeys}>
                {item.image != undefined &&
                    <Image style={styles.keyImg} source={item.image} />
                }
                <Text style={styles.txtTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const renderPost = ({ item, index }) => {
        return (

            <TouchableOpacity style={styles.item}>
                <Image source={item.mainImag} style={styles.image} />
            </TouchableOpacity>
        )
    }
    const renderPostHeader = () => {
        return (
            <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ marginRight: 1, marginBottom: 1 }}>
                    <TouchableOpacity>
                        <Image style={styles.postImg} source={images.dummyImg} resizeMode={"contain"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={[styles.postImg, { marginTop: 1 }]} source={images.dummyImg} resizeMode={"contain"} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity >
                    <Image style={styles.singlepostImg} source={images.dummyImg2} resizeMode={"contain"} />

                </TouchableOpacity>
            </View>

        )
    }
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <Header props={props} />
                <FlatList
                    data={keyWords}
                    horizontal
                    style={{ marginHorizontal: 5,  height: 46 }}
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderKeys}

                />

                <FlatList
                    data={serachPost}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderPost}
                    numColumns={NUM_COLUMNS}
                    ListHeaderComponent={renderPostHeader}
                    contentContainerStyle={{
                        flexGrow: 1,
                        justifyContent: 'center',
                    }}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Serach;