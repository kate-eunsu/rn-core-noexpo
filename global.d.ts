// global.d.ts
import {TwStyle} from 'twrnc';

// 전역적으로 tw를 사용할 수 있도록 선언
declare global {
  var tw: TwStyle;
}

export type RootStackParamList = {
  Home: undefined;
  Stack: undefined;
  Scroll: undefined;
  Detail: undefined;
  ButtonPage: undefined;
  SwitchPage: undefined;
  FlatListPage: undefined;
  Setting: undefined;
  Login: undefined;
  Event: {id: string};
  KeyboardAvoidingPage: undefined;
  MainNavigator: undefined;
  AuthNavigator: undefined;
  i;
  MainTabs: undefined;
  Payment: undefined;
  PaymentDetail: undefined;
  Complete: undefined;
  Web: undefined;
  TabNavigator: undefined;
  ScreenC: undefined;
  ScreenA: undefined;
  ScreenB: undefined;
};
