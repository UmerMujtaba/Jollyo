import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { styles } from './styles';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import SkeletonItem from '../../skeletons/homeItemsSkeleton';
export const SelectionContainer = ({
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

