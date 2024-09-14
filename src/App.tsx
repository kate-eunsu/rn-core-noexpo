import React, {useEffect, useState} from 'react';
import {ApolloProvider} from '@apollo/client';
import createApolloClient from './utils/apollo';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BottomSheetProvider} from './components/bottomSheet';

import MainNavigator from './navigation/mainNavigator';
import AuthNavigator from './navigation/authNavigator';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import tw from 'twrnc';
import {getStorage, removeStorage, setStorage} from './storage/asyncStorage';
import TestNavigator from './navigation/testNavigator';

globalThis.tw = tw;

export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // token 로딩 상태 관리

  useEffect(() => {
    const checkToken = async () => {
      try {
        const savedToken = await getStorage('token'); // 'token' 키로 토큰을 확인
        setToken(savedToken); // 토큰이 있다면 상태에 저장
      } catch (e) {
        console.error('Failed to load token', e);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    checkToken();
  }, []);

  if (loading) {
    <View>
      <Text>Loading...</Text>
    </View>;
    return null;
  }

  const handleLogin = async (newToken: string) => {
    await setStorage('token', newToken);
    setToken(newToken);
  };

  const handleLogout = async () => {
    await removeStorage('token'); // 토큰을 AsyncStorage에서 삭제
    setToken(null); // 상태를 업데이트하여 로그인 화면으로 전환
  };

  const client = createApolloClient(token);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <ApolloProvider client={client}>
          <BottomSheetModalProvider>
            <BottomSheetProvider>
              <SafeAreaProvider>
                <NavigationContainer>
                  {token ? (
                    <MainNavigator onLogout={handleLogout} />
                  ) : (
                    <AuthNavigator onLogin={handleLogin} />
                  )}
                  {/* {token ? (
                    <TestNavigator />
                  ) : (
                    <AuthNavigator onLogin={handleLogin} />
                  )} */}
                </NavigationContainer>
              </SafeAreaProvider>
            </BottomSheetProvider>
          </BottomSheetModalProvider>
        </ApolloProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
