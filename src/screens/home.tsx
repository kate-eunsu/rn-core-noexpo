import * as React from 'react';
import {
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/appNavigator';

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const data = [
    {key: 'ButtonPage', title: 'Go to ButtonTest'},
    {key: 'SwitchPage', title: 'Go to SwitchTest'},
    {key: 'FlatListPage', title: 'Go to FlatListTest'},
    {key: 'KeyboardAvoidingPage', title: 'Go to keyboardAvoidingTest'},
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate(item.key as keyof RootStackParamList)
            }>
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
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
  button: {
    margin: 10,
    backgroundColor: 'blue', // 버튼의 배경색
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // 텍스트 색상
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
