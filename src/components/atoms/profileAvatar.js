import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {hp, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';

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
            borderColor: isSelected ? colors.darkOrange : 'transparent',
            borderWidth: isSelected ? 3 : 0,
          },
        ]}>
        <FastImage source={imageSource} style={styles.img} />
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
    height: rwp(100),
    width: rwp(100),
    borderRadius: rwp(50),
    backgroundColor: colors.blackishOrange,
  },
  insideContainer: {
    height: rhp(97),
    backgroundColor: colors.lightPink,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  img: {
    resizeMode: 'contain',
    height: hp(8),
    width: wp(15),
    alignSelf: 'center',
  },
  tickContainer: {
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
  tick: {
    backgroundColor: colors.headingColor,
    height: rwp(30),
    width: rwp(30),
    borderRadius: rwp(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 8,
  },
  insideContainer: {
    height: rhp(97),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  tickText: {
    fontSize: rwp(16),
    textAlign: 'center',
    color: colors.white,
  },
});
export default ProfileRoundedAvatar;
