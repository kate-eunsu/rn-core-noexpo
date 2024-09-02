import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import DetailsScreen from "./detail";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { useBottomSheet } from "../components/bottomSheet";
import PaymentScreen from "./payment";
import PaymentStackScreen from "./payment";

const SettingsStack = createNativeStackNavigator();

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Setting'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { openBottomSheet, setContent } = useBottomSheet();

  const handleOpenBottomSheet = () => {
    setContent(<Text>여기는 세팅이지</Text>);
    openBottomSheet();
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: '24' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to Payment"
        onPress={() => navigation.navigate('Payment')}
      />
      <Button title="Open Bottom Sheet" onPress={handleOpenBottomSheet} />
    </View>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
      <SettingsStack.Screen name="Payment" component={PaymentStackScreen} options={{ headerShown: false }} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen