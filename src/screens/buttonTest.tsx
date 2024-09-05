import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";


// const Stack = createNativeStackNavigator();

// return (
// <Stack.Navigator>
//   <Stack.Screen
//     name="Home"
//     component={HomeScreen}
//     options={{
//       title: 'My home',
//       headerStyle: {
//         backgroundColor: '#f4511e',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}
//   />
// </Stack.Navigator>


interface MyButtonProps {
  count: number;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ count, onClick }) => {
  return (
    <View>
      <Button onPress={onClick} title={`Clicked ${count} times`} />
    </View>
  );
};


function StackScreen({ navigation }: { navigation: any }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <SafeAreaView>
      <Text>Counters that update together</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Setting')}
      />
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </SafeAreaView>
  );
}

export default StackScreen