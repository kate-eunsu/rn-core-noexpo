import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, View, ActivityIndicator } from 'react-native';

interface AutoResizingImageProps {
  address: string;
}

const AutoResizingImage: React.FC<AutoResizingImageProps> = ({ address }) => {
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    Image.getSize(
      require(address),
      (width, height) => {
        const scaleFactor = windowWidth / width;
        const heightScaled = height * scaleFactor;
        setImageHeight(heightScaled);
      },
      (error) => {
        console.error(`Failed to load image: ${error}`);
      }
    );
  }, [address, windowWidth]);

  if (imageHeight === null) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Image
      source={require(address)}
      style={{ width: windowWidth, height: imageHeight }}
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AutoResizingImage;
