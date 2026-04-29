import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';

export const SectionItem = ({title, leftTitle, onPress}) => {
  return (
    <View style={styles.sectionItem}>
      <View style={styles.leftContainer}>
        <FastImage source={images.icons.flagIcon} style={styles.downloadIcon} />
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.downloadContainer}>
        <Text style={styles.downloadText}>{leftTitle}</Text>
        <TouchableOpacity onPress={onPress}>
          <FastImage
            source={images.alphabets.a}
            style={styles.downloadIcon}
            defaultSource={images.defaultImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

