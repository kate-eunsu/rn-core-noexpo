import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  launchImageLibrary,
  launchCamera,
  ImagePickerResponse,
  Asset,
  MediaType,
} from 'react-native-image-picker';

import {PermissionsAndroid, Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import PermissionUtil, {APP_PERMISSION_CODE} from '../permission';

// 카메라 권한 요청 함수
const requestCameraPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera to take photos',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      const granted = await request(PERMISSIONS.IOS.CAMERA);
      return granted === 'granted';
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};

export default function ImagePickerExample() {
  const [response, setResponse] = useState<ImagePickerResponse | null>(null); // 이미지 선택에 대한 응답 저장

  // 카메라로 사진 찍기
  const onTakePhoto = async () => {
    const hasCameraPermission = await requestCameraPermission();
    if (!hasCameraPermission) {
      console.log('Camera permission denied');
      return;
    }

    launchCamera(
      {
        mediaType: 'photo' as MediaType,
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        if (response?.didCancel) {
          console.log('User cancelled camera');
          return;
        } else if (response?.errorCode) {
          console.log('Camera Error: ', response.errorCode);
          return;
        }
        if (!response?.assets || !response.assets[0]?.base64) {
          return;
        }

        setResponse(response);
      },
    );
  };

  useEffect(() => {
    PermissionUtil.cmmReqPermis([
      ...APP_PERMISSION_CODE.camera,
      ...APP_PERMISSION_CODE.mediaLibaray,
    ]);
  }, []);

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <Text>이미지 업로드 예시</Text>
        <View>
          {/* 선택된 이미지 또는 촬영된 이미지 미리보기 */}
          <Image
            source={
              response && response.assets
                ? {uri: response.assets[0].uri}
                : undefined
            }
            style={styles.img}
          />

          {/* 카메라로 사진 찍기 */}
          <TouchableOpacity style={styles.button} onPress={onTakePhoto}>
            <Text style={styles.buttonText}>카메라로 사진 찍기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 120,
    width: 120,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#4287f5',
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
