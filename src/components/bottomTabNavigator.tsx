import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgProps } from 'react-native-svg';

import HomeScreen from '../screens/home';
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



const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  icon: React.FC<SvgProps>;
  label: string;
  color: string;
  strokkeWidth?: number;
};

function TabBarIcon({ icon: IconComponent, label, color, strokkeWidth }: TabBarIconProps) {
  return (
    <View style={{ alignItems: 'center' }}>
      <IconComponent width={24} height={24} fill={color} stroke={color} strokeWidth={strokkeWidth ?? 0} />
      <Text style={{ color, fontSize: 10, marginTop: 6 }}>{label}</Text>
    </View>
  );
}

export default function BottomTabs() {
  const tabIcons = [
    { key: 'Home', name: "홈", icon: HomeIcon },
    { key: 'Stact', name: "이사플래너", icon: PlannerIcon },
    { key: 'Scroll', name: "집탐색", icon: SearchIcon, strokeWidth: 3 },
    { key: 'Stack', name: "혜택", icon: BenefitIcon },
    { key: 'Detail', name: "나의 집업", icon: ProfileIcon },
  ];

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const tabIcon = tabIcons.find((icon) => icon.key === route.name) ?? tabIcons[0];
          const IconComponent = tabIcon?.icon;

          return <View style={{ alignItems: 'center', width: 56 }}>
            <TabBarIcon icon={IconComponent} label={tabIcon.name} color={color} strokkeWidth={tabIcon.strokeWidth ?? 0} />
          </View>;

        },

        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'tomato',
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        headerShown: false, // 헤더 제거
        tabBarStyle: styles.tabBar,

      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stact" component={SettingsStackScreen} />
      <Tab.Screen name="Scroll" component={ScrollScreen} />
      <Tab.Screen name="Stack" component={StackScreen} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingHorizontal: 12,
    paddingBottom: 10,
    paddingTop: 8,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
