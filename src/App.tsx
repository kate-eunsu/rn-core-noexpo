import React, { useCallback, useRef, useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import DetailsScreen from './screens/detail';
import ScrollScreen from './screens/scroll';
import SvgExample from './components/svg';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


function SettingsScreen({ navigation }) {
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

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // React.useEffect(() => {
  //   setIsLoggedIn(false);
  // }, []);


  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  // }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator

        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Stact" component={SettingsStackScreen} />
          <Tab.Screen name="Scroll" component={ScrollScreen} />
          <Tab.Screen name="svg" component={SvgExample} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});


