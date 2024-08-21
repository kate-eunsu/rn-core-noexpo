import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/detail';
import {Button} from 'react-native';
import ButtonPage from '../components/cores/button';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Button
              onPress={() => navigation.goBack()}
              title="Back"
              color="#000"
            />
          ),
        })}>
        <Stack.Screen name="button" component={ButtonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
