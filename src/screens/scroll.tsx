import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View } from 'react-native';

const FullScreenImageScreen = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    console.log('windowWidth', windowWidth);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/images/zpp.webp')} // 이미지 경로 설정
                style={[styles.image, { width: windowWidth }]} // 이미지 높이를 2배로 설정하여 길게
                resizeMode="cover" // 이미지가 화면에 맞게 조정되도록 설정
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    image: {
        resizeMode: 'contain', // 화면에 맞추어 이미지 크기를 조정
    },
});


export default FullScreenImageScreen;
