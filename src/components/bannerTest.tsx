import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  paginationContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색을 반투명하게 설정
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 10,
  },
  paginationText: {
    color: 'white',
    fontSize: 12,
  },
});

export default function BannerTest({banners}: {banners: any[]}) {
  const [slideTime, setSlideTime] = useState(1); // 초기 슬라이딩 시간 1초
  useEffect(() => {
    const autoTimer = setTimeout(() => setSlideTime(3), 1000); // 1초 후에 slideTime을 8초로 바꾸고
    return () => clearTimeout(autoTimer);
  }, []);

  const handlePress = (index: number, url: string) => {
    console.log(index, 'Banner pressed:', url);
  };
  return (
    <>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={slideTime}
        showsPagination={true}
        paginationStyle={{bottom: -30, display: 'none'}} // 기본 페이지네이션을 화면 밖으로 이동
        renderPagination={(index, total) => {
          return (
            <View style={styles.paginationContainer}>
              <Text style={styles.paginationText}>
                {index + 1}/{total}
              </Text>
            </View>
          );
        }}>
        {banners.map((banner, index) => (
          <TouchableOpacity
            key={banner.id}
            onPress={() => handlePress(index, banner.url)}
            style={tw`rounded-xl overflow-hidden`}>
            <Image
              source={{uri: banner.image}}
              style={tw`w-full h-28 rounded-xl`}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </Swiper>
    </>
  );
}
