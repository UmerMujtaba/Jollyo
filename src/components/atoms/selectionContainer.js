import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';

const SelectionContainer = ({
  imageSource,
  heading,
  index,
  imageStyle,
  textStyle,
  onPress,
}) => {
  const isEven = index % 2 === 0;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}>
      {isEven ? (
        <>
          <View style={styles.imageWrapper}>
            <FastImage
              source={{uri: imageSource}}
              style={[styles.imgStyle, imageStyle]}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={[styles.txtStyle, textStyle]}>{heading}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.textWrapper}>
            <Text style={[styles.txtStyle, textStyle]}>{heading}</Text>
          </View>
          <View style={styles.imageWrapper}>
            <FastImage
              source={{uri: imageSource}}
              style={[styles.imgStyle, imageStyle]}
            />
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.darkOrange,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: rhp(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
    // height: 180,
  },
  imageWrapper: {
    width: '75%',
    alignItems: 'flex-end',
    // backgroundColor: 'pink',
  },
  imgStyle: {
    // resizeMode: 'cover',
    height: rhp(180),
    width: '100%',
    borderRadius: 40,
    // shadowOffset: {
    //   width: 3,
    //   height: 6,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 6,
  },
  textWrapper: {
    // backgroundColor: 'purple',

    width: '25%',
    // height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(18),
    color: colors.white,
    transform: [{rotate: '90deg'}],
    // textShadowColor: 'rgba(0, 0, 0, 0.75)',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 4,
  },
});

export default SelectionContainer;
