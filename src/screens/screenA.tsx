import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../global';
import {Button, SafeAreaView, Text} from 'react-native';

type ScreenANavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ScreenA'
>;

const ScreenA = ({navigation}: {navigation: ScreenANavigationProp}) => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen A</Text>
      <Button
        title="Go to Screen C"
        onPress={() => {
          navigation.navigate('ScreenC');
        }}
      />
      <Button
        title="Go to Screen B"
        onPress={() => {
          navigation.navigate('ScreenB');
        }}
      />
    </SafeAreaView>
  );
};

export default ScreenA;
