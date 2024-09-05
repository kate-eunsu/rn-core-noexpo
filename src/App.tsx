import React, { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BottomSheetProvider } from './components/bottomSheet';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/mainNavigator';
import AuthNavigator from './navigation/authNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { API_URL } from "@env"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import tw from 'twrnc'
import { getStorage } from './storage/asyncStorage';


const createApolloClient = (token: string | null) => {
  const httpLink = new HttpLink({
    uri: `${API_URL}/graphql`,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

globalThis.tw = tw


export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // token 로딩 상태 관리

  useEffect(() => {
    const checkToken = async () => {
      try {
        const savedToken = await AsyncStorage.getItem('token'); // 'token' 키로 토큰을 확인
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
    </View>
    return null;
  }

  const handleLogin = async (newToken: string) => {
    await AsyncStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token'); // 토큰을 AsyncStorage에서 삭제
    setToken(null); // 상태를 업데이트하여 로그인 화면으로 전환
  };


  const client = createApolloClient(token);

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ApolloProvider client={client}>
          <BottomSheetModalProvider>
            <BottomSheetProvider >
              <SafeAreaProvider>
                <NavigationContainer>
                  {token ? <MainNavigator onLogout={handleLogout} /> : <AuthNavigator onLogin={handleLogin} />}
                </NavigationContainer>
              </SafeAreaProvider>
            </BottomSheetProvider>
          </BottomSheetModalProvider>

        </ApolloProvider>
      </GestureHandlerRootView>

    </Provider>


  );
}

