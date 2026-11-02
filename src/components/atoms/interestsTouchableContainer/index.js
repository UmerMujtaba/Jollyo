import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { styles } from './styles';

export const InterestsTouchableComponent = ({
  imageSource,
  title,
  onPress,
  isSelected,
}) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.5}>
      <TouchableOpacity
        style={[styles.container, styles.insideContainer]}
        activeOpacity={0.5}
        onPress={onPress}>
        {isSelected && (
          <View style={styles.tickCircle}>
            <Text style={styles.tick}>✔</Text>
          </View>
        )}
        <FastImage
          source={imageSource ? {uri: imageSource} : images.alphabets.a}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.imgStyle}
          defaultSource={images.defaultImg}
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
