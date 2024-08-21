import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Details: {itemId: number; otherParam?: string};
  Buttons: undefined;
};

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.ComponentType<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 86})}
      />
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

export default HomeScreen;
