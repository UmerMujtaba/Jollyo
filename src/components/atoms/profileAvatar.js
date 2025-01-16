import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hp, isTablet, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import {images} from '../../assets/images';

const ProfileRoundedAvatar = ({
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
            borderColor: isSelected ? colors.PINK.darkPink : 'transparent',
            borderWidth: isSelected ? 2 : 0,
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

const styles = StyleSheet.create({
  container: {
    width: isTablet ? rhp(130) : rhp(120),
    backgroundColor: colors.PINK.darkPink,
    height: isTablet ? rhp(130) : rhp(120),
    alignSelf: 'center',
    borderRadius: isTablet ? rhp(65) : rhp(60),
  },
  insideContainer: {
    height: isTablet ? rhp(124) : rhp(114),
    backgroundColor: colors.PINK.lightPink,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  img: {
    height: hp(10),
    width: wp(18),
    alignSelf: 'center',
  },
  tickContainer: {
    position: 'absolute',
    bottom: isTablet ? rhp(-30) : rhp(-24),
    alignSelf: 'center',
  },
  tick: {
    backgroundColor: colors.YELLOW.mildYellow,
    height: rwp(30),
    width: rwp(30),
    borderRadius: rwp(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickText: {
    fontSize: rwp(16),
    textAlign: 'center',
    color: colors.WHITE.white,
  },
});
export default ProfileRoundedAvatar;
