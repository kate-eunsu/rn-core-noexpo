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


export type RootStackParamList = {
  Home: undefined;
  Stact: undefined;
  Scroll: undefined;
  Detail: undefined;
  ButtonPage: undefined;
  SwitchPage: undefined;
  FlatListPage: undefined;
  Setting: undefined;
  Login: undefined;
  Event: { id: string, code: string };
  KeyboardAvoidingPage: undefined;
  MainNavigator: undefined;
  AuthNavigator: undefined;
  MainTabs: undefined;
  Payment: undefined;
  Complete: undefined;
};


const createApolloClient = (token: string | null) => {
  const httpLink = new HttpLink({
    uri: 'https://apiv2.dev.devd.co.kr/graphql',
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


export default function App() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // token 로딩 상태 관리

  const checkUserLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (token !== null) {
        setToken(token); // token이 있으면 상태에 저장
      } else {
        setToken(null); // token이 없으면 null로 설정
      }
    } catch (error) {
      console.log('Error checking login status', error);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  }, []);

  if (loading) {
    <View>
      <Text>Loading...</Text>
    </View>
    return null;
  }

  const handleLogin = (userToken: string) => {
    console.log('로그인토큰')
    setToken(userToken);
  };

  const handleLogout = () => {
    setToken(null); // 로그아웃 시 token을 null로 설정
  };


  const client = createApolloClient(token);

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <BottomSheetModalProvider>
          <BottomSheetProvider >
            <NavigationContainer>
              {token ? <MainNavigator onLogout={handleLogout} /> : <AuthNavigator onLogin={handleLogin} />}
            </NavigationContainer>
          </BottomSheetProvider>
        </BottomSheetModalProvider>
      </ApolloProvider>
    </GestureHandlerRootView>


  );
}


