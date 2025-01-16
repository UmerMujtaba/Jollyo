import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {colors} from '../../constants/colors';
import {rfs, rhp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {images} from '../../assets/images';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SkeletonItem from '../../skeletons/homeItemsSkeleton';
const SelectionContainer = ({
  imageSource,
  heading,
  index,
  imageStyle,
  textStyle,
  onPress,
  // isLoading,
}) => {
  const isEven = index % 2 === 0;

  // if (isLoading) {
  //   return <SkeletonItem isEven={isEven} />;
  // }
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
              resizeMode={FastImage.resizeMode.cover}
              defaultSource={images.defaultImg}
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
              resizeMode={FastImage.resizeMode.cover}
              defaultSource={images.defaultImg}
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
    backgroundColor: colors.ORANGE.darkOrange,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: rhp(20),
    alignItems: 'center',
    shadowColor: colors.BLACK.pureBlack,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  imageWrapper: {
    width: '73.5%',
    alignItems: 'flex-end',
  },
  imgStyle: {
    height: rhp(180),
    width: '100%',
    borderRadius: 40,
  },
  textWrapper: {
    width: '27.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    letterSpacing: 2,
    fontSize: rfs(16),
    color: colors.WHITE.white,
    transform: [{rotate: '90deg'}],
  },
});

export default SelectionContainer;
