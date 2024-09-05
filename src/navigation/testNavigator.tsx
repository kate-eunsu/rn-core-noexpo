import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"




const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


const ScreenA = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen A</Text>
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

const TabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  )
}



const TestNavigator = () => {
  return (
    <TabNavi />
  )
}

export default TestNavigator