import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from "react";

// Button 컴포넌트는 동일
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

// Count 컴포넌트는 부모 컴포넌트에서 전달된 count와 setCount를 사용
function Count({ count, setCount }: { count: number; setCount: (count: number) => void }) {
  const onIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    saveCountToStorage(newCount); // AsyncStorage에 값 저장
  };

  const onDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
    saveCountToStorage(newCount); // AsyncStorage에 값 저장
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

// 입력 값을 받아 AsyncStorage에 저장하고 부모 컴포넌트에서 상태를 업데이트
function CountInput({ setCount }: { setCount: (count: number) => void }) {
  const [inputValue, setInputValue] = useState('');

  const onPress = async () => {
    const numCount = parseInt(inputValue, 10);
    if (!isNaN(numCount)) {
      setCount(numCount);
      await saveCountToStorage(numCount); // AsyncStorage에 저장
      setInputValue(''); // 입력값 초기화
    }
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="숫자 입력"
        value={inputValue}
        onChangeText={setInputValue}
        keyboardType="number-pad"
      />
      <Button onPress={onPress} title="설정하기" />
    </View>
  );
}

// AsyncStorage에 count 저장 함수
const saveCountToStorage = async (count: number) => {
  try {
    await AsyncStorage.setItem('count', count.toString());
  } catch (e) {
    console.error('Failed to save count to storage', e);
  }
};

function CountApp() {
  const [count, setCount] = useState<number>(0);

  // AsyncStorage에서 저장된 값을 불러옴
  useEffect(() => {
    const loadCount = async () => {
      try {
        const savedCount = await AsyncStorage.getItem('count');
        if (savedCount !== null) {
          setCount(parseInt(savedCount, 10)); // 저장된 카운트가 있으면 설정
        }
      } catch (e) {
        console.error('Failed to load count from storage', e);
      }
    };
    loadCount();
  }, []);

  return (
    <SafeAreaView style={styles.block}>
      <Count count={count} setCount={setCount} />
      <CountInput setCount={setCount} />
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
});
