import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {rfs, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import FastImage from 'react-native-fast-image';
import fonts from '../../constants/fonts';
import {images} from '../../assets/images';

const MenuItemTile = ({imageSource, title, subHeading, onPress}) => {
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
            style={styles.iconStyle}
            resizeMode={FastImage.resizeMode.contain}
            source={images.icons.rightArrowIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rhp(90),
    width: wp(90),
    backgroundColor: colors.disabled,
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: rhp(20),
  },
  insideContainer: {
    height: rhp(83),
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: rwp(10),
  },
  avatarContainer: {
    width: rhp(60),
    height: rhp(60),
    borderRadius: rhp(30),
    backgroundColor: colors.pink,
    justifyContent: 'center',
  },
  iconStyle: {
    width: rwp(20),
    height: rhp(20),
    alignSelf: 'center',
  },
  textContainer: {
    width: wp(60),
    paddingHorizontal: rwp(20),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(20),
  },
  subHeadingStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.darkGrey,
    fontSize: rfs(17),
  },
  iconContainer: {
    width: wp(10),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
export default MenuItemTile;
