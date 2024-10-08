import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../__test__/login';
import { RootStackParamList } from '../../global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type AuthNavigatorProps = {
  onLogin: (token: string) => void;
};

const AuthStack = createNativeStackNavigator();

const AuthNavigator: React.FC<AuthNavigatorProps> = ({ onLogin }) => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login">
      {(props) => <LoginScreen {...props} onLogin={onLogin} />}
    </AuthStack.Screen>
  </AuthStack.Navigator>
);

export default AuthNavigator;