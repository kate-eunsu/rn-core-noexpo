import { Text, View } from "react-native";

type ZipupRowProps = {
  titleKey?: string; // title로 사용할 필드의 키 이름
  descriptionKey?: string; // description으로 사용할 필드의 키 이름
  data: any; // 각 항목의 데이터
  children?: React.ReactNode; // 추가적으로 전달될 children
};

const ZipupRow: React.FC<ZipupRowProps> = (
  { titleKey,
    descriptionKey,
    data,
    children }
) => {

  const title = data && titleKey ? data[titleKey] : 'No Title';
  const description = data && descriptionKey ? data[descriptionKey] : 'No Description';


  return (
    <View style={tw`w-full px-5 py-4 bg-white`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <View style={tw`flex flex-col gap-2`}>
          <Text style={tw`text-base font-bold text-black`}>{title}</Text>
          <Text style={tw`text-sm text-gray-400`}>{description}</Text>
        </View>
        {children}
      </View>
    </View>
  )
}

export default ZipupRow;