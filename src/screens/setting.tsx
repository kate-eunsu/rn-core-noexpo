import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, View } from "react-native";
import DetailsScreen from "./detail";
import { RootStackParamList } from "../App";
import { StackNavigationProp } from "@react-navigation/stack";

const SettingsStack = createNativeStackNavigator();

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Setting'
>;

interface Props {
  navigation: HomeScreenNavigationProp;
}


const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

export default SettingsStackScreen