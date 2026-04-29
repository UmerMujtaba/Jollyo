import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import {
  colors
} from '../../../constants';
import { styles } from './styles';

export const ProfileRoundedAvatar = ({
  imageSource,
  isSelected,
  mainContainer,
  innerContainer,
}) => {
  return (
    <View style={[styles.container, mainContainer]}>
      <View
        style={[
          styles.container,
          styles.insideContainer,
          innerContainer,
          {
            borderColor: isSelected ? colors.WHITE.white : 'transparent',
            borderWidth: isSelected ? 1 : 0,
          },
        ]}>
        <FastImage
          source={imageSource}
          style={styles.img}
          resizeMode={FastImage.resizeMode.contain}
          defaultSource={images.defaultImg}
        />
        {isSelected && (
          <View style={styles.tickContainer}>
            <View style={styles.tick}>
              <Text style={styles.tickText}>✔</Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

