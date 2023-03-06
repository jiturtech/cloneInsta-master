import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, Dimensions, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../Resource/Colors';
import { images } from '../../../Resource/Images';
import { dummyImageData, dummypostData, dummyStories } from '../../../Utility/Constant';
import Header from './Header';
import styles from './Styles';
import Carousel, { Pagination } from "react-native-snap-carousel"
import LikeIcon from '../../../Utility/svg/LikeIcon';
import ChatIcon from '../../../Utility/svg/ChatIcon';
import Messanger from '../../../Utility/svg/Messanger';
import SaveIcon from '../../../Utility/svg/SaveIcon';
import FillLike from '../../../Utility/svg/FillLike';
const windowWidth = Dimensions.get("window").width

const myObj = {
    id: 1,
    image: images.oval,
    title: "Your Story"
}
const Home = (props) => {
    const [CoursalRef, setCoursalRef] = useState(null)
    const [CarouselIndex, setCarouselIndex] = useState(0)
    const [activeSlide, setactiveSlide] = useState(0)

    const onSnapToItem = async (index) => {
        await setactiveSlide(index)
        setCarouselIndex(index)

    }
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 5 }}>

                <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    colors={Colors.borderStoryColor} style={styles.borderView}>
                    <Image style={styles.imgProfile} source={{ uri: item.image }} />
                </LinearGradient>
                <Text style={styles.txtTitle}>{item.title}</Text>
            </TouchableOpacity>
        )
    }
    const renderHeader = () => {
        return (
            <TouchableOpacity style={{ marginHorizontal: 5 }}>
                <LinearGradient start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                    colors={Colors.borderStoryColor} style={styles.borderView}>
                    <Image style={styles.imgProfile} source={myObj.image} />
                </LinearGradient>
                <Text style={styles.txtTitle}>{myObj.title}</Text>
            </TouchableOpacity>
        )
    }
    const renderCarousel = (item, index, carouselIndex, itemSize) => {
        return (
            <View style={{ height: 375 }}>
                {item.type == "image" ?
                    <View>
                        <Image
                            source={item.image}
                            style={{ height: 400, width: windowWidth }}
                        />
                    </View> : <></>}
                {itemSize > 1 && <View style={styles.paginationView}>
                    <Text style={styles.txtPagination}>{(carouselIndex + 1) + "/" + itemSize}</Text>
                </View>

                }

            </View>
        )
    }
    const renderPost = ({ item, mainIndex }) => {
        return (
            <View style={{ marginHorizontal: 5, }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <Image style={styles.imgUser} source={{ uri: item.image }} />
                        <View style={{ alignSelf: "center", marginLeft: 10 }}>
                            <View style={styles.viewOffical}>
                                <Text style={styles.txtUsername}>{item.username}</Text>
                                <Image style={styles.imgOfficial} source={images.OfficialIcon} resizeMode={"contain"} />
                            </View>
                            <Text style={styles.txtAddress}>{item.address}</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={{ alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
                        <Image style={styles.threeDot} resizeMode={"contain"} source={images.optionIcon} />
                    </TouchableOpacity>
                </View>

                <Carousel
                    ref={(o) => setCoursalRef(o)}
                    data={dummyImageData}
                    renderItem={({ item, index }) =>
                        renderCarousel(item, mainIndex, index, dummyImageData.length)
                    }
                    sliderWidth={windowWidth}
                    itemWidth={windowWidth}
                    layout="default"
                    onSnapToItem={(index) => {
                        onSnapToItem(index)
                    }}
                    layoutCardOffset={9}
                    useScrollView={true}
                    inactiveDotStyle={{ backgroundColor: Colors.dotColor }}

                />

                <View style={styles.footerView}>
                    <View style={{ flexDirection: "row", flex: 0.4, }}>
                        <TouchableOpacity>
                            <LikeIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 21 }}>
                            <ChatIcon />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 21 }}>
                            <Messanger />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.paginationStyle}>
                        {pagination(dummyImageData)}
                        <TouchableOpacity  >
                            <SaveIcon />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.likeView}>
                    <Image style={styles.imgLikeUser} source={images.oval} resizeMode={"contain"} />
                    <Text style={styles.txtLikeBy}>{"Liked by"}
                        <Text style={styles.txtLikeNameBy}>{" craig_love "}
                            <Text style={styles.txtLikeBy}>{" and "}
                                <Text style={styles.txtLikeNameBy}>{"44,686 others"}</Text>
                            </Text>
                        </Text>
                    </Text>
                </View>
                <Text style={[styles.txtLikeNameBy,{ bottom: 15, marginHorizontal: 15 }]}>joshua_l
                    <Text style={styles.txtLikeBy}> The game in Japan was amazing and I want to share some photos</Text>
                </Text>
            </View>
        )
    }
    const pagination = (data, activeDotIndex) => {
        return (
            <Pagination
                dotsLength={data?.length}
                activeDotIndex={activeSlide}
                carouselRef={CoursalRef}
                containerStyle={{
                    width: 6,
                    height: 6,
                    top: -20,
                    marginLeft: 20
                }}
                dotStyle={{
                    width: 6,
                    height: 6,
                    backgroundColor: "#3897F0",
                    // marginHorizontal:10


                }}
                dotContainerStyle={{
                    marginHorizontal: 6,
                    // top: -20,
                    // alignSelf: "flex-start"
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
            />
        )
    }
    return (
        <LinearGradient colors={Colors.themeGradientColor} style={styles.container}>
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor={Colors.backgroundColor}
                    barStyle={Colors.barStyle}

                />
                <Header props={props} />
                <View style={styles.viewRow} />
                <View>
                    <FlatList
                        data={dummyStories}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={renderItem}
                        ListHeaderComponent={renderHeader}
                    />
                </View>
                <View style={styles.viewRow} />
                <FlatList
                    data={dummypostData}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderPost}
                />
            </SafeAreaView>
        </LinearGradient>
    )
}
export default Home;