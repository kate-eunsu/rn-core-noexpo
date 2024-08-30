import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './components/bottomTabNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { BottomSheetProvider } from './components/bottomSheet';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  ButtonPage: undefined;
  SwitchPage: undefined;
  FlatListPage: undefined;
  Setting: undefined;
  Event: { id: string, code: string };
  KeyboardAvoidingPage: undefined;
};

const httpLink = new HttpLink({
  uri: 'https://apiv2.dev.devd.co.kr/graphql',
});

const authLink = setContext((_, { headers }) => {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE4MiIsImlhdCI6MTcyNTAwMTUzMSwiZXhwIjoxNzMyNzc3NTMxLCJhdWQiOiJhcHB2MiJ9.x72h6IvrGDlcBX3vlzlDwJOse3DxdJDPQpplRjOmSpg"
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`, // 여기서 토큰을 설정합니다.
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // React.useEffect(() => {
  //   setIsLoggedIn(false);
  // }, []);


  // if (!isLoggedIn) {
  //   return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  // }
  return (

    <GestureHandlerRootView style={{ flex: 1 }}>
      <ApolloProvider client={client}>
        <BottomSheetModalProvider>
          <BottomSheetProvider >
            <NavigationContainer>
              <BottomTabs />
            </NavigationContainer>
          </BottomSheetProvider>
        </BottomSheetModalProvider>
      </ApolloProvider>
    </GestureHandlerRootView>

  );
}


