import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTapNavigator from './mainNavigator';
import PaymentStackScreen from '../screens/payment';


type AppNavigatorProps = {
  onLogout: () => void;
};

const Stack = createNativeStackNavigator();

const AppNavigator: React.FC<AppNavigatorProps> = ({ onLogout }) => {


  return (
    <Stack.Navigator>r
      {/* Bottom Tab이 포함된 화면 */}
      <Stack.Screen name="MainTabs" component={MainTapNavigator} options={{ headerShown: false }} />

      {/* Bottom Tab이 없는 화면 */}
      <Stack.Screen name="Payment" component={PaymentStackScreen} />
      <Stack.Screen name="Setting" component={CompleteScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}


export default AppNavigator;