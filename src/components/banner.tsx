import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width} = Dimensions.get('window');

const banners = [
  {
    id: '1',
    image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2023/09/27/121408559.1.jpg',
    title: 'Banner 1',
    url: 'https://www.naver.com/',
  },
  {
    id: '2',
    image: 'https://cdn.goodnews1.com/news/photo/201907/89251_22763_3813.JPG',
    title: 'Banner 2',
    url: 'Page1',
  },
  {
    id: '3',
    image: 'https://cdn.newspenguin.com/news/photo/202104/4475_14264_4458.jpg',
    title: 'Banner 3',
    url: 'Page1',
  },
];

const BannerSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePress = (url: string) => {
    console.log('Banner pressed:', url);
  };

  return (
    <View style={styles.container}>
      <Swiper
        style={styles.swiper}
        showsPagination={true}
        autoplay={true}
        autoplayTimeout={3}
        removeClippedSubviews={false}
        onIndexChanged={index => setCurrentIndex(index)}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}>
        {banners.map(banner => (
          <TouchableOpacity
            key={banner.id}
            style={styles.slide}
            onPress={() => handlePress(banner.url)}>
            <Image source={{uri: banner.image}} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{banner.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  swiper: {
    height: 250,
  },
  slide: {
    width: '100%', // 화면 너비를 슬라이드의 너비로 설정
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  image: {
    width: '100%', // 이미지의 너비를 부모 슬라이드에 맞춤
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 15,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 3,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 3,
  },
});

export default BannerSwiper;
