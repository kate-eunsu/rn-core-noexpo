import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import DetailsScreen from './detail';
import {StackNavigationProp} from '@react-navigation/stack';
import {useBottomSheet} from '../components/bottomSheet';
import PaymentScreen from './payment';
import PaymentStackScreen from './payment';
import {RootStackParamList} from '../../global';
import Webview from './web';

const SettingsStack = createNativeStackNavigator();

type SettingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Setting'
>;

interface Props {
  navigation: SettingScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = ({navigation}) => {
  const {openBottomSheet, setContent} = useBottomSheet();

  const handleOpenBottomSheet = () => {
    setContent(<Text>여기는 세팅이지</Text>);
    openBottomSheet();
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
      }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
      <Button title="Go to web" onPress={() => navigation.navigate('Web')} />

      <Button title="Open Bottom Sheet" onPress={handleOpenBottomSheet} />
    </View>
  );
};

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
      <SettingsStack.Screen
        name="Payment"
        component={PaymentStackScreen}
        options={{headerShown: false}}
      />
      <SettingsStack.Screen name="Web" component={Webview} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen;
