import * as React from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/appNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import CustomModal from '../components/modal';
import { useState } from 'react';
import BottomSheet from '../components/bottomSheet';
import BannerSwiper from '../components/banner';
import Animated, {
  useSharedValue,
} from 'react-native-reanimated';


type HomeScreenProps = BottomTabNavigationOptions;

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const data = [
    { key: 'ButtonPage', title: 'Go to ButtonTest' },
    { key: 'Modal', title: 'Show Modal' },
    { key: 'BottomSheet', title: 'Show BottomSheet' },
  ];

  const [modalVisible, setModalVisible] = useState<boolean>(false);


  const onPressButton = (key: string) => {
    if (key === 'Modal') {
      return setModalVisible(!modalVisible);
    }
    return
  }

  const isOpen = useSharedValue(false);

  const toggleSheet = () => {
    isOpen.value = !isOpen.value;
  };

  const contentStyle = {
    color: '#001a72',
    textDecorationColor: '#001a72',
  };

  return (

    <SafeAreaView style={styles.container}>
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
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalText="Hello World!"
        buttonOpenText="Show Modal"
        buttonCloseText="Hide Modal"
      />
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


