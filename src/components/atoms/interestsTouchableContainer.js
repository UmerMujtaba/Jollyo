import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const InterestsTouchableComponent = ({
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
        />
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: isTablet ? rwp(120) : rwp(140),
    height: isTablet ? rhp(130) : rhp(140),
    borderRadius: 16,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginHorizontal: rwp(15),
    marginVertical: rhp(15),
  },
  insideContainer: {
    // height: rhp(135),
    height: isTablet ? rhp(125) : rhp(135),
    backgroundColor: colors.white,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  imgStyle: {
    height: rhp(80),
    width: rwp(80),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.backgroundClr,
    fontSize: rfs(16),
  },
  tickCircle: {
    position: 'absolute',
    top: rhp(5),
    right: rwp(5),
    width: rhp(24),
    height: rhp(24),
    borderRadius: rhp(12),
    backgroundColor: colors.backgroundClr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    fontSize: rfs(12),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.white,
  },
});
export default InterestsTouchableComponent;
