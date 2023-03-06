import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, View, Platform, Appearance } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../Screen/TabScreen/Home';
import Serach from '../Screen/TabScreen/Serach';
import AddNew from '../Screen/TabScreen/AddNew';
import Like from '../Screen/TabScreen/Like';
import Profile from '../Screen/TabScreen/Profile';
import { Colors } from '../Resource/Colors';
import HomeIcon from '../Utility/svg/HomeIcon';
import SerachIcon from '../Utility/svg/SerachIcon';
import PlusIcon from '../Utility/svg/PlusIcon';
import LikeIcon from '../Utility/svg/LikeIcon';
import { images } from '../Resource/Images';
import FillHome from '../Utility/svg/FillHome';
import FillLike from '../Utility/svg/FillLike';
import FillSerach from '../Utility/svg/FillSerach';
const Tab = createMaterialBottomTabNavigator();
const TabNavigation = (props) => {

    return (
        <Tab.Navigator
            shifting={false}
            barStyle={styles.barStyle}
            labeled={false}
            activeColor="#000000"
            sceneAnimationEnabled={{ shifting: false, adaptive: false }}

            initialRouteName={"Home"}
            tabBarOptions={{
                style: {
                    backgroundColor: Colors.backgroundColor,
                    borderTopWidth: 1,
                    paddingBottom: Platform.OS == "ios" ? 1 : 0,
                }
            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                // listeners={{ tabPress: e => imageChange() }}
                options={{

                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.viewTabIcon}>
                            {!focused ?
                                <HomeIcon fillColor={Colors.themeColor} width={24} height={24} /> :
                                <FillHome fillColor={Colors.themeColor} width={24} height={24} />}
                        </View>
                    ),
                }} />
            <Tab.Screen
                name="Serach"
                component={Serach}
                // listeners={{ tabPress: e => imageChange() }}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.viewTabIcon}>
                            {!focused ? <SerachIcon fillColor={Colors.themeColor} width={24} height={24} /> :
                                <FillSerach fillColor={Colors.themeColor} width={24} height={24} />}
                        </View>
                    ),
                }} />
            <Tab.Screen
                name="AddNew"
                component={AddNew}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // imageChange()
                        //navigation.navigate("Event")
                    },
                })}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.viewTabIcon}>
                            <PlusIcon fillColor={Colors.themeColor} width={24} height={24} />
                        </View>
                    ),

                }} />
            <Tab.Screen
                name="Like"
                component={Like}
                // listeners={{ tabPress: e => imageChange() }}
                options={{

                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.viewTabIcon}>

                            {
                                !focused ?
                                    <LikeIcon fillColor={Colors.themeColor} width={24} height={24} /> :
                                    <FillLike fillColor={Colors.themeColor} width={24} height={24} />
                            }
                        </View>
                    ),

                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                // listeners={{ tabPress: e => imageChange() }}
                options={{

                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.viewTabIcon}>
                            <Image source={images.oval} style={{ height: 24, width: 24, borderRadius: 12 }} />
                        </View>
                    ),
                }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({

    viewTabIcon: {
        //    paddingTop: Platform.OS == "ios" ? 0 : 8,

    },
    barStyle: { backgroundColor: Colors.backgroundColor, height: 80, borderWidth: 1, borderColor: '#0000001A', }
})

export default TabNavigation;