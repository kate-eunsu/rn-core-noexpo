import * as React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
  Button,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomModal from '../components/modal';
import { useState } from 'react';

import BannerSwiper from '../components/banner';
import Carousel from '../components/bannercarousel';
import HomeSvg from '../assets/icons/home.svg'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { useBottomSheet } from '../components/bottomSheet';

type HomeScreenProps = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface Props {
  navigation: HomeScreenProps;
}


const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const data = [
    { key: 'ButtonPage', title: 'Go to ButtonTest' },
    { key: 'Modal', title: 'Show Modal' },
    { key: 'BottomSheet', title: 'Show BottomSheet' },
  ];

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState(false);

  const screenWidth = Math.round(Dimensions.get('window').width);
  const PAGES = [
    {
      num: 1,
      color: '#86E3CE',
    },
    {
      num: 2,
      color: '#D0E6A5',
    },
    {
      num: 3,
      color: '#FFDD94',
    },
    {
      num: 4,
      color: '#FA897B',
    },
    {
      num: 5,
      color: '#CCABD8',
    },
  ];

  const { openBottomSheet, setContent } = useBottomSheet();


  const onPressButton = (key: string) => {
    if (key === 'Modal') {
      return setModalVisible(!modalVisible);
    }
    if (key === 'BottomSheet') {
      setContent(<Text>여기가 홈이지</Text>);
      return openBottomSheet()
    }
    return
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ backgroundColor: 'gray', width: '100%', paddingVertical: 10 }}
        data={data}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressButton(item.key)} >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <Carousel
        gap={16}
        offset={36}
        pages={PAGES}
        pageWidth={screenWidth - (16 + 36) * 2}
      />
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Hello testtest!"
        buttonOpenText="Show Modal"
        buttonCloseText="Hide Modal"
      />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    backgroundColor: 'white',
  },
  button: {
    margin: 10,
    backgroundColor: 'blue', // 버튼의 배경색
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // 텍스트 색상
    textAlign: 'center',
    fontWeight: 'bold',
  },

});

export default HomeScreen;


