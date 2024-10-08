import { Text, View } from "react-native"

import IconBack from '../../assets/icons/IconBack.svg'

interface ZipupHeaderProps {
  title: string
}

const ZipupHeader: React.FC<ZipupHeaderProps> = ({ title }) => {
  return (
    <View style={tw`bg-white h-14 flex w-full flex-row items-center justify-between`}>
      <View style={tw` h-14 w-14 pl-3 flex flex-row items-center`}>
        <IconBack width={24} height={24} stroke="#A1A1A5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </View>
      <Text style={[tw`text-center text-black font-medium`, { fontSize: 16 }]} numberOfLines={1}>{title}</Text>
      <View style={tw`bg-black h-14 w-14 opacity-0`}>
      </View>
    </View>
  )
}

export default ZipupHeader