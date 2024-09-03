import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';
import AutoResizingImage from '../components/img';
import { SafeAreaView } from 'react-native-safe-area-context';

const DetailsScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Image
                    source={require('../assets/images/zpp.webp')} // 이미지 경로 설정
                    style={[
                        styles.image,
                        { height: windowHeight * 2 }, // 가로 길이에 맞춰 높이를 비율대로 설정
                    ]}
                    resizeMode="contain"
                />
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flexGrow: 1, // 스크롤 뷰 컨텐츠를 화면 전체에 맞춤
        justifyContent: 'center', // 이미지를 수직 가운데 정렬
        backgroundColor: 'pink',
    },
    image: {
        width: '100%',
        alignSelf: 'center', // 이미지를 가로로 중앙 정렬
    },
});

export default DetailsScreen;