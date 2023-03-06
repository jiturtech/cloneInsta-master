import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../Resource/Colors';
import { followinData } from '../../../../Utility/Constant';
import styles from './Styles';
const NUM_COLUMNS = 6;

const Following = () => {
    const renderItem = ({ item, index }) => {
        return (
            item.status == 1 ?
                singleUserMultiPostView(item) :
                item.status == 2 ?
                    multiUserSinglePost(item) :
                    item.status == 3 ?
                        followingUser(item) :
                        <></>
        )
    }
    function followingUser(item) {
        return (
            <View style={{ flexDirection: "row", marginTop: 16 }}>
                <Image style={styles.userImg} source={item.user_image} />
                <View style={{ flex: 1, marginLeft: 12,alignSelf:"center" }}>
                    <Text style={styles.txtbold}>{item.name}
                        <Text style={styles.txtLight}>{" started following "}
                            <Text style={styles.txtbold}>{item.followingPersonName+". "}
                                <Text style={styles.txtTime}>{item.time}</Text>
                            </Text>
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
    function multiUserSinglePost(item) {
        let name = item.userList.map(a => a.name)
        return (
            <View style={{ flexDirection: "row", marginVertical: 16 }}>
                <View style={{ flex: 0.2 }}>
                    <Image style={styles.image1} source={item.userList[0].image} />
                    <Image style={[styles.image2]} source={item.userList[1].image} />
                </View>
                <View style={{ flex: 0.8 }}>

                    <Text style={[styles.txtbold]}>{name.toString()}
                        <Text style={styles.txtLight}>{" Liked "}
                            <Text style={styles.txtbold}>{item.name + " " + item.type_post + "."}
                                <Text style={styles.txtTime}>{" " + item.time}</Text>
                            </Text>
                        </Text>
                    </Text>
                </View>
                <View style={{ flex: 0.2, alignItems: "flex-end", justifyContent: "flex-end" }}>
                    <Image style={styles.postImage} source={item.post_image} />
                </View>
            </View>
        )
    }
    const singleUserMultiPostView = (item) => {
        return (
            <View style={{ flexDirection: "row", marginTop: 16 }}>
                <Image style={styles.userImg} source={item.user_image} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                    <Text style={styles.txtbold}>{item.name}
                        <Text style={styles.txtLight}>{" Liked " + item.postList.length + " Posts. "}
                            <Text style={styles.txtTime}>{item.time}</Text>
                        </Text>
                    </Text>
                    <FlatList
                        data={item.postList}
                        showsVerticalScrollIndicator={false}
                        numColumns={6}
                        style={{ marginTop: 10 }}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.item}>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>}
                    />
                </View>
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
                <FlatList
                    data={followinData}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ margin: 16 }}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Following