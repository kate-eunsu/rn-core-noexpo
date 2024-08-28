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
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import CustomModal from '../components/modal';
import { useState } from 'react';

import BannerSwiper from '../components/banner';
import Carousel from '../components/bannercarousel';
import HomeSvg from '../assets/icons/home.svg'
import BottomSheetComponent from '../components/bottomSheet';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

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

  // const handleButtonPress = () => {
  //   setIsOpen(true);
  //   bottomSheetRef.current?.snapToIndex(0);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  //   bottomSheetRef.current?.close();
  // };

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


  const onPressButton = (key: string) => {
    if (key === 'Modal') {
      return setModalVisible(!modalVisible);
    }
    if (key === 'BottomSheet') {
      return setIsOpen(!isOpen);
    }
    return
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeSvg width={120} height={40} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressButton(item.key)} >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
      />
      <BannerSwiper></BannerSwiper>
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

      <BottomSheetComponent bottomSheetVisible={isOpen} setBottomSheetVisible={setIsOpen} />


    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  buttonContainer: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  toggleButton: {
    backgroundColor: '#b58df1',
    padding: 12,
    borderRadius: 48,
  },
  toggleButtonText: {
    color: 'white',
    padding: 8,
  },
  safeArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bottomSheetButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 2,
  },
  bottomSheetButtonText: {
    fontWeight: 600,
    textDecorationLine: 'underline',
  },
});

export default HomeScreen;


