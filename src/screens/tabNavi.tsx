import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './screenA';
import ScreenB from './screenB';

const Tab = createBottomTabNavigator();

const TabNavi = () => {
  return (
    <Tab.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}>
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  );
};

export default TabNavi;
