
import HomeScreen from "../__test__/home";
import StackScreen from "../__test__/buttonTest";
import ScrollScreen from '../__test__/scroll';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EventScreen from "../__test__/event";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsStackScreen from "../__test__/setting";

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
