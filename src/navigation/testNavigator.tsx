import {createStackNavigator} from '@react-navigation/stack';
import TabNavi from '../screens/tabNavi';
import ScreenC from '../screens/screenC';

const Stack = createStackNavigator();

const TestNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabNavi" component={TabNavi} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
    </Stack.Navigator>
  );
};

export default TestNavigator;
