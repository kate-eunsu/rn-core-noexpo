import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GetEventDocument} from '../generated/graphql';
import {RootStackParamList} from '../../global';
import BannerSwiper from '../components/banner';
import Carousel from '../components/bannercarousel';
import BannerTest from '../components/bannerTest';
import ImageTest from './imageTest';
import ImagePickerExample from './imageTest';

type EventScreenProps = StackNavigationProp<RootStackParamList, 'Event'> & {
  id: string;
};

const EventScreen: React.FC<EventScreenProps> = ({id}) => {
  // const {loading, error, data} = useQuery(GetEventDocument, {
  //   variables: {id},
  // });

  // if (loading) return <ActivityIndicator />;
  const banners = [
    {
      id: '1',
      image: 'https://dimg.donga.com/wps/NEWS/IMAGE/2023/09/27/121408559.1.jpg',
      title: 'Banner 1',
      url: 'https://www.naver.com/',
    },
    {
      id: '2',
      image: 'https://cdn.goodnews1.com/news/photo/201907/89251_22763_3813.JPG',
      title: 'Banner 2',
      url: 'Page1',
    },
    {
      id: '3',
      image:
        'https://cdn.newspenguin.com/news/photo/202104/4475_14264_4458.jpg',
      title: 'Banner 3',
      url: 'Page1',
    },
  ];

  return (
    <SafeAreaView style={{padding: 20}}>
      {/* <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
        {data.event.title}
      </Text>
      <Text style={{marginTop: 10, color: 'black'}}>
        {data.event.description}
      </Text> */}

      {/* <BannerSwiper></BannerSwiper> */}
      {/* <View style={tw`w-full h-full mt-6`}>
        <BannerTest banners={banners} />
      </View>
      <View style={tw`bg-blue-200 py-8`}>
        <ImageTest />
      </View> */}

      <ImagePickerExample />
    </SafeAreaView>
  );
};

export default EventScreen;
