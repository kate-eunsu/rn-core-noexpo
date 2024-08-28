import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { RootStackParamList } from '../navigation/appNavigator';

const { width } = Dimensions.get('window');


const banners = [
    { id: '1', image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2023/09/27/121408559.1.jpg', title: 'Banner 1', url: 'https://www.naver.com/' },
    { id: '2', image: 'https://cdn.goodnews1.com/news/photo/201907/89251_22763_3813.JPG', title: 'Banner 1', url: 'Page1' },
    { id: '3', image: 'https://cdn.newspenguin.com/news/photo/202104/4475_14264_4458.jpg', title: 'Banner 1', url: 'Page1' },
];

const BannerSwiper = () => {
    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePress = (url: string) => {

    };
    return (
        <View style={styles.container}>
            <Swiper
                style={styles.swiper}
                showsPagination={false} // 페이지네이션 점 표시
                autoplay={true} // 자동 슬라이드
                autoplayTimeout={3} // 슬라이드 전환 시간 (초)
                removeClippedSubviews={false}
            >
                {banners.map((banner) => (
                    <TouchableOpacity
                        key={banner.id}
                        style={styles.slide}
                        onPress={() => ''}
                    >
                        <Image
                            source={{ uri: banner.image }}
                            style={styles.image}
                        />

                    </TouchableOpacity>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 24,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    swiper: {
        height: 100, // 슬라이더의 높이
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    image: {
        width,
        height: '100%',
        resizeMode: 'cover',
    },
    pagination: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5,
    },
    paginationText: {
        color: 'white',
        fontSize: 14,
    },
});

export default BannerSwiper;
