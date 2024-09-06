import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import HomeIcon from '../assets/icons/home.svg';
import PlannerIcon from '../assets/icons/planner.svg';
import SearchIcon from '../assets/icons/search.svg';
import BenefitIcon from '../assets/icons/benefit.svg';
import ProfileIcon from '../assets/icons/profile.svg';

import ScrollScreen from '../__test__/scroll';
import SettingsStackScreen from '../__test__/setting';
import HomeScreen from '../__test__/home';
import DetailsScreen from '../__test__/detail';

import { StyleSheet, View } from "react-native";
import TabBarIcon from "../components/TabBarIcon";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../global";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import EventScreen from "../__test__/event";
import { StackNavigationProp } from "@react-navigation/stack";

type TabNavigatorProp = StackNavigationProp<
  RootStackParamList,
  'TabNavigator'
>;

interface Props {
  navigation: TabNavigatorProp;
}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<Props> = () => {
  const insets = useSafeAreaInsets();
  const tabIcons = [
    { key: 'Home', name: "홈", icon: HomeIcon },
    { key: 'Stack', name: "이사플래너", icon: PlannerIcon },
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
        {(props) => <HomeScreen {...props} route={props.route as RouteProp<RootStackParamList, "Home">} />}
      </Tab.Screen>
      <Tab.Screen name="Stack" component={SettingsStackScreen} />
      <Tab.Screen name="Scroll" component={ScrollScreen} />
      <Tab.Screen name="Event" component={EventScreen} initialParams={{ id: 2 }} />
      <Tab.Screen name="Detail" component={DetailsScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
});

export default TabNavigator