import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import ButtonPage from '../components/cores/button';
import SwitchPage from '../components/cores/switch';
import FlatListPage from '../components/cores/flatList';
import KeyboardAvoidingPage from '../components/cores/keybordavoiding';

export type RootStackParamList = {
  Home: undefined;
  ButtonPage: undefined;
  SwitchPage: undefined;
  FlatListPage: undefined;
  KeyboardAvoidingPage: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="ButtonPage"
          component={ButtonPage}
          options={{title: 'ButtonPage"'}}
        />
        <Stack.Screen
          name="SwitchPage"
          component={SwitchPage}
          options={{title: 'SwitchPage'}}
        />
        <Stack.Screen
          name="FlatListPage"
          component={FlatListPage}
          options={{title: 'FlatListPage'}}
        />
        <Stack.Screen
          name="KeyboardAvoidingPage"
          component={KeyboardAvoidingPage}
          options={{title: 'KeyboardAvoidingPage'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
