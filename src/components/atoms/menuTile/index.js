import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { styles } from './styles';

export const MenuItemTile = ({imageSource, title, subHeading, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.container, styles.insideContainer]}>
        <View style={styles.avatarContainer}>
          <FastImage
            source={imageSource}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.iconStyle}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subHeadingStyle}>{subHeading}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FastImage
            style={styles.iconNewStyle}
            resizeMode={FastImage.resizeMode.contain}
            source={images.icons.rightArrowIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

