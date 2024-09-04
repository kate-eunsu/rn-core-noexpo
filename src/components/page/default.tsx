import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

interface DefaultPageProps {
  children: React.ReactNode,
  backgroundColor?: string
}

const Page: React.FC<DefaultPageProps> = ({ children, backgroundColor }) => {

  return (
    <SafeAreaView style={[tw`flex-1`, backgroundColor ? { backgroundColor } : { backgroundColor: 'white' }]} edges={['top']}>
      {children}
    </SafeAreaView>)
}

export default Page;

