import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { View, Text, ActivityIndicator } from 'react-native';
import { RootStackParamList } from '../App';
import { StackNavigationProp } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GetEventDocument } from '../generated/graphql';

type EventScreenProps = StackNavigationProp<
  RootStackParamList,
  'Event'
>;


const EventScreen: React.FC<{ id: string }> = ({ id }) => {
  const { loading, error, data } = useQuery(GetEventDocument, {
    variables: { id },
  });

  if (loading) return <ActivityIndicator />;

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>{data.event.title}</Text>
      <Text style={{ marginTop: 10, color: 'black' }}>{data.event.description}</Text>
    </SafeAreaView>
  );
};

export default EventScreen;
