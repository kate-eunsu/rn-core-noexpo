import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';

const FullScreenImageScreen = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container} style={{ width: windowWidth }}>
                <Image
                    source={require('../assets/images/zpp.webp')} // 이미지 경로 설정
                    style={[styles.image, { width: windowWidth }]} // 이미지 높이를 2배로 설정하여 길게
                    resizeMode="contain" // 이미지가 화면에 맞게 조정되도록 설정
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
        resizeMode: 'contain', // 화면에 맞추어 이미지 크기를 조정
    },
});


export default FullScreenImageScreen;
