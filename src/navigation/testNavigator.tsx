import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


type RootStackParamList = {
  TabNavi: undefined;
  ScreenC: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
};

type ScreenANavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenA'>;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const ScreenA = ({ navigation }: { navigation: ScreenANavigationProp }) => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen A</Text>
      <Button title="Go to Screen C" onPress={() => {
        navigation.navigate('ScreenC')
      }} />
      <Button title="Go to Screen B" onPress={() => {
        navigation.navigate('ScreenB')
      }} />
    </SafeAreaView>
  )
}

const ScreenB = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen B</Text>
    </SafeAreaView>
  )
}
const ScreenC = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen C</Text>
    </SafeAreaView>
  )
}

const TabNavi = () => {
  return (
    <Tab.Navigator screenOptions={() => {
      return {
        headerShown: false
      }
    }}>
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  )
}




const TestNavigator = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="TabNavi" component={TabNavi} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>

  )
}

export default TestNavigator