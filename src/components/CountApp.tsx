import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import useCountActions from "../hooks/useCountAction";
import useCount from "../hooks/useCount";
import { useState } from "react";

function Button({ onPress, title }: { onPress(): void; title: string }) {
  return (
    <Pressable
      style={styles.buttonBackground}
      onPress={onPress}
      android_ripple={{ color: 'white' }}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
function Count() {
  const count = useCount();
  const { increaseBy, decreaseBy } = useCountActions();

  const onIncrease = () => {
    increaseBy(1);
  };

  const onDecrease = () => {
    decreaseBy(-1);
  };

  return (
    <View style={styles.textComponent}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.buttonComponent}>
        <Button onPress={onIncrease} title={'+1'} />
        <Button onPress={onDecrease} title={'-1'} />
      </View>
    </View>
  );
}

function CountInput() {
  const [count, setCount] = useState('');
  const { increaseBy, decreaseBy } = useCountActions();

  const onPress = () => {
    if (+count < 0) {
      decreaseBy(+count);
    } else {
      increaseBy(+count);
    }
    setCount('');
  };

  return (
    <View >
      <TextInput
        style={styles.textInput}
        placeholder="숫자 입력"
        value={count}
        onChangeText={setCount}
        keyboardType="number-pad"
      />
      <Button onPress={onPress} title="설정하기" />
    </View>
  );
}

function CountApp() {
  return (
    <SafeAreaView style={styles.block} >
      <Count />
      <CountInput />
    </SafeAreaView>
  );
}

export default CountApp;

const styles = StyleSheet.create({
  buttonBackground: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  textComponent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 30,
  },
  buttonComponent: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 5,
  },
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})