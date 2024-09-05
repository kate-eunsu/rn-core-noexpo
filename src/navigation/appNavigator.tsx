
import HomeScreen from "../screens/home";
import StackScreen from "../screens/buttonTest";
import ScrollScreen from '../screens/scroll';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventScreen from "../screens/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsStackScreen from "../screens/setting";

const HomeStack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Stack" component={StackScreen} />
      <Tab.Screen name="Scroll" component={ScrollScreen} />
    </Tab.Navigator>
  );
}


export default function NavigatorSCreen() {
  return (

    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Settings" component={SettingsStackScreen} />
    </Stack.Navigator>

  );
}
