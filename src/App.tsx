import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './components/bottomTabNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BottomSheetProvider } from './components/bottomSheet';
import { View } from 'react-native';
import { Text } from 'react-native-svg';


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
  const [isOpen, setIsOpen] = useState(false);

  // React.useEffect(() => {
  //   setIsLoggedIn(false);
  // }, []);


  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  // }
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <BottomSheetProvider >
          <NavigationContainer>
            <BottomTabs />
          </NavigationContainer>
        </BottomSheetProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>

  );
}


