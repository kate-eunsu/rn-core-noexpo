import { HeaderBackButton } from '@react-navigation/elements';
import { useEffect, useRef, useState } from 'react';
import { BackHandler, SafeAreaView, StyleSheet, Dimensions } from 'react-native';
import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Webview = ({ navigation }) => {
  const ref = useRef(null);
  const [navState, setNavState] = useState<any>(null); // 초기값을 null로 설정

  useEffect(() => {
    const canGoBack = navState?.canGoBack ?? false; // navState가 undefined일 경우 false로 처리

    const onPress = () => {
      if (canGoBack && ref.current) {
        (ref.current as any)?.goBack();
        return true;
      } else {
        return false;
      }
    };

    navigation.setOptions({
      headerLeft: () =>
        canGoBack ? <HeaderBackButton onPress={onPress} /> : null,
    });

    // 안드로이드 백 버튼(물리적 버튼)을 누르면 웹뷰가 종료되지 않고 바로 전 화면으로 넘어가게 하기 위함.
    BackHandler.addEventListener('hardwareBackPress', onPress);

    // clean up
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onPress);
    };
  }, [navState?.canGoBack]); // navState가 undefined일 때도 안전하게 처리

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={ref}
        style={styles.webview}
        source={{ uri: 'https://app.devd.co.kr/app/home' }}
        onNavigationStateChange={e => setNavState(e)}
      />
    </SafeAreaView>
  );
};

export default Webview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});
