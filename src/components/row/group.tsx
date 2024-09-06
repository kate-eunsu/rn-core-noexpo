import { FlatList, Text } from "react-native"
import ZipupRow from "./main"

type RowGroupProps = {
  data: any[]; // 리스트로 렌더링할 데이터 배열
  titleKey: string; // title로 사용할 필드의 키
  descriptionKey: string; // description으로 사용할 필드의 키
}



const RowGroup: React.FC<RowGroupProps> = ({
  data,
  titleKey,
  descriptionKey
}) => {

  const renderItem = ({ item }: { item: any }) => (
    <ZipupRow
      titleKey={titleKey}
      descriptionKey={descriptionKey}
      data={item}
    >
      <Text style={tw`text-sm text-blue-500`}>More info</Text>
    </ZipupRow>
  );


  return (
    <FlatList
      data={data} // 외부에서 전달된 데이터를 리스트에 사용
      renderItem={renderItem} // 항목 렌더링 함수
      keyExtractor={(item) => item.id.toString()} // 고유 키
    />
  );

}

export default RowGroup