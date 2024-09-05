import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"




const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


const screenA = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen A</Text>
    </SafeAreaView>
  )
}

const screenB = () => {
  return (
    <SafeAreaView style={tw`flex-1 items-center justify-center`}>
      <Text>Screen B</Text>
    </SafeAreaView>
  )
}

const TabNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen A" component={screenA} />
      <Tab.Screen name="Screen B" component={screenB} />
    </Tab.Navigator>
  )
}



const TestNavigator = () => {
  return (
    <TabNavi />
  )
}

export default TestNavigator