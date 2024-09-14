import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Button, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../../../global';

type ScreenANavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({navigation}: {navigation: ScreenANavigationProp}) => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen A</Text>
      <TouchableOpacity
        style={tw`bg-blue-500 px-4 py-2 rounded`}
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <Text>Post</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
