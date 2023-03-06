import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../../Resource/Colors';
import { strings } from '../../../../Resource/Strings';
import { youfollowinData } from '../../../../Utility/Constant';
import styles from './Styles';

const You = () => {

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ margin: 16 }}>
                <Text style={styles.txttitle}>{item.title}</Text>
                <FlatList
                    data={item.data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}

                    renderItem={renderSubView}
                />
            </View>
        )
    }
    const renderSubView = ({ item, index }) => {
        return (
            item.status == 1 ?
                likePostuser(item) :
                item.status == 5 ?
                    followerView(item) :
                    <>  </>
        )
    }
    function followerView(item) {
        return (
            <View style={{ flexDirection: "row", marginVertical: 16 }}>
                <View style={{ flex: 0.2 }}>
                    <Image style={styles.userImg} source={item.user_image} />
                </View>
                <View style={{ flex: 0.6, alignSelf: "center" }}>
                    <Text style={[styles.txtbold]}>{item.name}
                        <Text style={styles.txtLight}>{" started following you. "}
                            <Text style={styles.txtTime}>{" " + item.time}</Text>
                        </Text>
                    </Text>
                </View>
                {item.youFollowing && item.othrFollowing ?
                    <TouchableOpacity style={styles.msgBtn}>
                        <Text style={styles.txtMsgLbl}>{strings.message}</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={styles.followBtn}>
                        <Text style={styles.txtFollowLbl}>{strings.follow}</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }
    function likePostuser(item) {
        let name = item.userList.map(a => a.name)
        return (
            <View style={{ flexDirection: "row", marginVertical: 16 }}>
                {item.userList.length > 1 ? <View style={{ flex: 0.2 }}>
                    <Image style={styles.image1} source={item.userList[0].image} />
                    <Image style={[styles.image2]} source={item.userList[1].image} />
                </View>
                    :
                    <View style={{ flex: 0.2 }}>
                        <Image style={styles.userImg} source={item.userList[0].image} />
                    </View>
                }
                <View style={{ flex: 0.8, alignSelf: "center" }}>
                    <Text style={[styles.txtbold]}>{name.toString()}
                        <Text style={styles.txtLight}>{" liked your photo. "}

                            <Text style={styles.txtTime}>{" " + item.time}</Text>
                        </Text>
                    </Text>
                </View>
                <View style={{ flex: 0.2, alignItems: "flex-end", justifyContent: "flex-end" }}>
                    <Image style={styles.postImage} source={item.post_image} />
                </View>
            </View>
        )
    }
    function itemSeparaorView() {
        return (
            <View style={styles.viewRow} />
        )
    }
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <Text style={styles.txtFollow}>{"Follow Requests"}</Text>
                {itemSeparaorView()}
                <FlatList
                    data={youfollowinData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}

                    renderItem={renderItem}
                    style={{ flex: 1 }}
                    ItemSeparatorComponent={itemSeparaorView()}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default You