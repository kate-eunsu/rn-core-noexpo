import {SafeAreaView} from 'react-native-safe-area-context';

interface DefaultPageProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const Page: React.FC<DefaultPageProps> = ({children, backgroundColor}) => {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 bg-blue-100`,
        backgroundColor ? {backgroundColor} : {backgroundColor: 'white'},
      ]}
      edges={['top']}>
      {children}
    </SafeAreaView>
  );
};

export default Page;
