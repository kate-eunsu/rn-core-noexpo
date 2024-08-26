// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    const correctPassword = '1234'; // 정해진 비밀번호
    if (password === correctPassword) {
      onLogin();
    } else {
      alert('비밀번호가 잘못되었습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text>ID:</Text>
        <TextInput
          style={styles.input}
          value={id}
          onChangeText={setId}
          placeholder="ID를 입력하세요"
        />
      </View>
      <View style={styles.inputBox}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="비밀번호를 입력하세요"
          secureTextEntry
        />
      </View>
      <Button title="로그인" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: '100%',
    padding: 10,
    textAlign: 'center',
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {

    height: 40,
    borderColor: 'gray',
    opacity: 0.5,
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    borderRadius: 12
  },
});

export default LoginScreen;
