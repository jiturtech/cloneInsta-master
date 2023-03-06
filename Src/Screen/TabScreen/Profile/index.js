import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, useWindowDimensions, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Resource/Colors';
import { images } from '../../../Resource/Images';
import { strings } from '../../../Resource/Strings';
import { categoryData, drawerData } from '../../../Utility/Constant';
import AddStory from '../../../Utility/svg/AddStory';
import styles from './Styles';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { dummypostData } from '../../../Utility/Constant';
import MenuDrawer from 'react-native-side-drawer'

const Profile = (props) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [open, setOpen] = useState(false)
    const [routes] = React.useState([
        { key: 'following', title: 'Following', image: images.gridView },
        { key: 'you', title: 'You', image: images.gridProfile },
    ]);
    const renderItemCategory = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginRight: 18, height: 83 }}>
                <View style={styles.renderView}>
                    {index == 0 ?
                        <AddStory /> :
                        <Image style={styles.imgOval} source={item.image} />
                    }
                </View>
                <Text style={styles.txtTitle}>{item.title}</Text>

            </TouchableOpacity>
        )
    }
    const renderScene = ({ route, index1 }) => {
        switch (route.key) {
            case "following":
                return gridView()
            case "you":
                return gridView()
            default:
                return null;
        }
    };
    function gridView() {
        return (
            <FlatList
                data={dummypostData}
                showsVerticalScrollIndicator={false}
                numColumns={3}

                style={{ marginTop: 3 }}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                    </TouchableOpacity>
                }
            />
        )
    }
    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: Colors.themeColor }}
            style={{ backgroundColor: Colors.backgroundColor, paddingVertical: -50 }}
            renderLabel={({ route, focused }) => (
                <Image style={{ height: 22.5, width: 22.5, tintColor: Colors.themeColor }} source={route.image} />
            )}

        />
    );
    const drawerContent = () => {
        return (
            <View onPress={toggleOpen} style={styles.animatedBox}>
                {open && <TouchableOpacity onPress={() => toggleOpen()} style={{ top: 10, position: "absolute", left: -30 }}>
                    <Image source={images.menu} style={styles.imgMenu} />
                </TouchableOpacity>}
                <Text style={styles.txtDrawerName}>{"s.khasanov_"}</Text>
                {drawerData.map((item) => {
                    return (
                        <TouchableOpacity onPress={() => setOpen(false)} style={{ flexDirection: "row", marginBottom: 24, alignItems: "center" }}>
                            <Image style={styles.drawerImage} source={item.images} resizeMode={"contain"} />
                            <Text style={styles.drawerTitle}>{item.title}</Text>
                        </TouchableOpacity>
                    );
                })}
                <TouchableOpacity style={styles.drawerBottom}>
                    <Image style={styles.drawerImage} source={images.settings} resizeMode={"contain"} />
                    <Text style={styles.drawerTitle}>{"Settings"}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const toggleOpen = () => {
        setOpen(!open)
    };
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                />
                <View style={styles.headerDrawer}>
                    <View />
                    {!open && <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
                        <Image style={styles.imgLock} resizeMode={"contain"} source={images.privateIcon} />
                        <Text style={styles.txtName}>{"jacob_w"}</Text>
                        <Image source={images.down} resizeMode={"contain"} style={styles.imgDown} />
                    </TouchableOpacity>}
                    <TouchableOpacity onPress={() => toggleOpen()} style={{ top: 5 }}>
                        <Image source={images.menu} style={styles.imgMenu} />
                    </TouchableOpacity>


                </View>
                <View style={styles.viewProfile}>
                    <Image style={styles.imgProfile} source={images.oval} />
                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.txtPostNum}>{54}</Text>
                        <Text style={styles.txtPostlbl}>{strings.posts}</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.txtPostNum}>{543}</Text>
                        <Text style={styles.txtPostlbl}>{strings.followers}</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={styles.txtPostNum}>{524}</Text>
                        <Text style={styles.txtPostlbl}>{strings.following}</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 16 }}>
                    <Text style={[styles.txtName, { fontSize: 12 }]}>{"Jacob West"}</Text>
                    <Text style={styles.txtDesc}>{"Digital goodies designer "}
                        <Text style={[styles.txtDesc, { color: Colors.blue }]}>{"@pixsellz\n"}</Text>
                        {"Everything is designed."}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => props.navigation.navigate(strings.editscreen)}
                    style={styles.btnEdit}>
                    <Text style={styles.txtEdit}>{strings.txtEdit}</Text>
                </TouchableOpacity>
                <View>
                    <FlatList
                        data={categoryData}
                        renderItem={renderItemCategory}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal
                        style={{ marginHorizontal: 16 }}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={renderTabBar}

                />

                <View style={{ position: "absolute", right: 0 }}>
                    <MenuDrawer
                        open={open}
                        position={'right'}
                        drawerContent={drawerContent()}
                        drawerPercentage={60}
                        animationTime={250}
                        overlay={true}
                        opacity={0.4}
                    >

                    </MenuDrawer>
                </View>
            </SafeAreaView>

        </LinearGradient>
    )
}
export default Profile;