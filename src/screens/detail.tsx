import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam?: string};
};

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<DetailsScreenProps> = ({route, navigation}) => {
  const {itemId, otherParam} = route.params;

  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>Item ID: {itemId}</Text>
      <Text>Other Param: {otherParam}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
