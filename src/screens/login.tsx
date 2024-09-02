import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, Button } from 'react-native';

type LoginScreenProps = {
  navigation: any;
  onLogin: (token: string) => void;
};
const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, onLogin }) => {

  const handleLogin = async () => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4MiIsImlhdCI6MTcyNTAwMTUzMSwiZXhwIjoxNzMyNzc3NTMxLCJhdWQiOiJhcHB2MiJ9.x72h6IvrGDlcBX3vlzlDwJOse3DxdJDPQpplRjOmSpg"

    try {
      onLogin(accessToken);
    } catch (error) {
      console.log('Error storing user data', error);
    }

  };

  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Sign In" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;