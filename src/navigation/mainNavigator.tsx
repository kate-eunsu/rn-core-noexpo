import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tabNavigator';
import SettingsStackScreen from '../__test__/setting';
import benefitScreen from '../pages/Benefits/benefits';

type MainNavigatorProps = {
  onLogout: () => void;
};

const RootStack = createStackNavigator();

const MainNavigator: React.FC<MainNavigatorProps> = ({onLogout}) => {
  return (
    <RootStack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <RootStack.Screen
        name="TabNavigator"
        component={TabNavigator}></RootStack.Screen>
      <RootStack.Screen name="Stack" component={SettingsStackScreen} />
    </RootStack.Navigator>
  );
};

export default MainNavigator;
