import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    StatusBar,
    View,
    TouchableOpacity,
} from 'react-native';

const ScrollScreen = () => {

    const scrollViewRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo({ y: 0, animated: true });
        }
    };

    const handleScroll = (event) => {
        const yOffset = event.nativeEvent.contentOffset.y;
        if (yOffset > 100) { // 스크롤이 100 이상일 때 버튼 표시
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}
                ref={scrollViewRef}
                onScroll={handleScroll}
            >

                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <View className='flex flex-col gap-4'>

                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                    <View style={styles.box}></View>
                </View>
            </ScrollView>
            {isVisible && (
                <TouchableOpacity style={styles.floatingButton} onPress={scrollToTop}>
                    <Text style={styles.buttonText}>Top</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        padding: 20,
    },
    boxContainer: {
        flexDirection: 'column',
        gap: 10,
        padding: 20,
    },
    box: {
        height: 100,
        backgroundColor: 'lightblue',
        marginVertical: 10,
    },
    floatingButton: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: 'blue',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default ScrollScreen;