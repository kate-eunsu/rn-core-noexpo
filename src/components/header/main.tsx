import {Pressable, Text, View} from 'react-native';

import IconBack from '../../assets/icons/IconBack.svg';

interface MainHeaderProps {
  title: string;
  onBackPress?: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({title, onBackPress}) => {
  return (
    <View
      style={tw` bg-blue-200 h-14 flex w-full flex-row items-center justify-between`}>
      {/* 버튼위치 */}
      <Pressable
        style={tw` h-14 w-14 pl-3 flex flex-row items-center`}
        onPress={() => {
          onBackPress;
        }}>
        <IconBack
          width={24}
          height={24}
          stroke="#A1A1A5"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Pressable>
      <Text
        style={[tw`text-center text-black font-medium`, {fontSize: 16}]}
        numberOfLines={1}>
        {title}
      </Text>
      <View style={tw`bg-black h-14 w-14 opacity-0`}></View>
    </View>
  );
};

export default MainHeader;
