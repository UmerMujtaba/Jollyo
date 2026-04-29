import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { useNetworkImageHandler } from '../../../hooks';
import { styles } from './styles';

export const SoundItemComponent = ({title, onPress, imageSource}) => {
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <FastImage
          defaultSource={images.defaultImg}
          source={
            imageError || !isConnected ? images.defaultImg : {uri: imageSource}
          }
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.imgStyle}
          onError={() => setImageError(true)}
        />
      </View>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
