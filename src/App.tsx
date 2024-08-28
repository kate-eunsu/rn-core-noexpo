import React, { useCallback, useRef, useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import ScrollScreen from './screens/scroll';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import StackScreen from './screens/stack';
import SettingsStackScreen from './screens/setting';
import HomeIcon from './assets/icons/home.svg';
import PlannerIcon from './assets/icons/planner.svg';
import BottomTabs from './components/bottomTabNavigator';


export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  ButtonPage: undefined;
  SwitchPage: undefined;
  FlatListPage: undefined;
  Setting: undefined;
  KeyboardAvoidingPage: undefined;
};

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
        <BottomTabs />
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}



