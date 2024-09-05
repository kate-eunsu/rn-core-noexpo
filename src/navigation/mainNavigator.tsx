import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';

import SettingsStackScreen from '../screens/setting';
import ScrollScreen from '../screens/scroll';
import StackScreen from '../screens/stack';
import { StyleSheet, Text, View } from 'react-native';

import HomeIcon from '../assets/icons/home.svg';
import PlannerIcon from '../assets/icons/planner.svg';
import SearchIcon from '../assets/icons/search.svg';
import BenefitIcon from '../assets/icons/benefit.svg';
import ProfileIcon from '../assets/icons/profile.svg';
import DetailsScreen from '../screens/detail';
import EventScreen from '../screens/stack';
import { RootStackParamList } from '../../global';
import HomeScreen from '../screens/home';
import { RouteProp } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import TabBarIcon from '../components/TabBarIcon';



type MainNavigatorProps = {
  onLogout: () => void;
};

const Tab = createBottomTabNavigator();


const MainNavigator: React.FC<MainNavigatorProps> = ({ onLogout }) => {
  const insets = useSafeAreaInsets();
  const tabIcons = [
    { key: 'Home', name: "홈", icon: HomeIcon },
    { key: 'Stact', name: "이사플래너", icon: PlannerIcon },
    { key: 'Scroll', name: "집탐색", icon: SearchIcon, strokeWidth: 3 },
    { key: 'Event', name: "혜택", icon: BenefitIcon },
    { key: 'Detail', name: "나의 집업", icon: ProfileIcon },
  ];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const tabIcon = tabIcons.find((icon) => icon.key === route.name) ?? tabIcons[0];
          const IconComponent = tabIcon?.icon;

          return <View style={{ alignItems: 'center', width: 56 }}>
            <TabBarIcon icon={IconComponent} label={tabIcon.name} color={color} strokeWidth={tabIcon.strokeWidth ?? 0} />
          </View>;
        },

        tabBarInactiveTintColor: '#A1A1A5',
        tabBarActiveTintColor: '#000',
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        headerShown: false, // 헤더 제거
        tabBarStyle: [styles.tabBar, { height: 60 + insets.bottom }],

      })}
    >
      <Tab.Screen name="Home">
        {(props) => <HomeScreen {...props} onLogout={onLogout} route={props.route as RouteProp<RootStackParamList, "Home">} />}
      </Tab.Screen>
      <Tab.Screen name="Stact" component={SettingsStackScreen} />
      <Tab.Screen name="Scroll" component={ScrollScreen} />
      <Tab.Screen name="Event" component={EventScreen} initialParams={{ id: 2 }} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>


  );
}

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
});


export default MainNavigator;