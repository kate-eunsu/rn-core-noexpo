import React from 'react';
import { ScrollView, Image, StyleSheet, Dimensions, View, SafeAreaView } from 'react-native';
import CountApp from '../components/CountApp';

const FullScreenImageScreen = () => {
    const windowWidth = Dimensions.get('window').width;

    return (
        <SafeAreaView style={styles.container}>
            <CountApp></CountApp>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain', // 화면에 맞추어 이미지 크기를 조정
    },
});


export default FullScreenImageScreen;
