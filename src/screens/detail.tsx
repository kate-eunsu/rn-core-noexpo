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
    const [imageHeight, setImageHeight] = useState(0);

    console.log('windowWidth', windowWidth);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={require('../assets/images/zpp.webp')} // 이미지 경로 설정
                    style={[styles.image, { width: windowWidth }]} // 이미지 높이를 2배로 설정하여 길게
                    resizeMode="cover" // 이미지가 화면에 맞게 조정되도록 설정
                />

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    image: {
        width: '100%',
        resizeMode: 'contain', // 가로에 맞추어 이미지 크기를 조정
    },
});

export default DetailsScreen;