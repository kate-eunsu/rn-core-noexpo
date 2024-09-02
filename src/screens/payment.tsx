import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';
import { RootStackParamList } from '../App';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type PaymentNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Payment'
>;

interface Props {
  navigation: PaymentNavigationProp;
}


const PaymentScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('Complete')}>
        <Text style={styles.buttonText}>결제 하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const CompleteScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.rootContainer}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>결제 완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const PaymentStack = createNativeStackNavigator();



const PaymentStackScreen = () => {
  return (
    <PaymentStack.Navigator>
      <PaymentStack.Screen name="Payment" component={PaymentScreen} options={{ headerShown: true, headerTitle: '결제', headerBackTitleVisible: false }} />
      <PaymentStack.Screen name="Complete" component={CompleteScreen} options={{ headerShown: true, headerTitle: '결제완료', headerBackTitleVisible: false }} />
    </PaymentStack.Navigator>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
  ,
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


export default PaymentStackScreen;