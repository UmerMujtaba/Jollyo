import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {images} from '../../assets/images';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import FastImage from 'react-native-fast-image';

const SectionItem = ({title, leftTitle, onPress}) => {
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

const styles = StyleSheet.create({
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: rhp(5),
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#F8F1ED',
  },
  leftContainer: {
    // height: rhp(40),
    paddingVertical: 10,
    width: rwp(40),
    backgroundColor: '#AF704C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: rwp(10),
  },

  sectionTitle: {
    flex: 1,
    fontSize: rfs(14),
    color: '#000',
  },
  downloadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadText: {
    marginRight: rwp(5),
    fontSize: rfs(14),
    color: '#401903',
  },
  downloadIcon: {
    width: rwp(16),
    height: rhp(16),
  },
});

export default SectionItem;
