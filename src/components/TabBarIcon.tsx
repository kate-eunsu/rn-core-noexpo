import React from 'react';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg';

type TabBarIconProps = {
  icon: React.FC<SvgProps>;
  label: string;
  color: string;
  strokeWidth?: number;
};

const TabBarIcon: React.FC<TabBarIconProps> = ({ icon: IconComponent, label, color, strokeWidth }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <IconComponent width={24} height={24} fill={color} stroke={color} strokeWidth={strokeWidth ?? 0} />
      <Text style={{ color, fontSize: 10, marginTop: 6 }}>{label}</Text>
    </View>
  );
};

export default TabBarIcon;