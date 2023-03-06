import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, StatusBar, Text, useWindowDimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Resource/Colors';
import styles from './Styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Following from './Following';
import You from './You';

const Like = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'following', title: 'Following' },
        { key: 'you', title: 'You' },
    ]);
    const renderScene = ({ route, index1 }) => {
        switch (route.key) {
            case "following":
                return <Following navigation={props.navigation} index={index}/>;
            case "you":
                return <You navigation={props.navigation} index={index} />
            default:
                return null;
        }
    };
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.themeColor }}
            style={{ backgroundColor: Colors.backgroundColor, paddingVertical: -50 }}
            renderLabel={({ route, focused, color }) => (
                <Text style={{ color: Colors.themeColor, fontSize: 16, fontWeight: "600", lineHeight: 21 }}>
                    {route.title}
                </Text>
            )}
        />
    );
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>

                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}

                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Like;