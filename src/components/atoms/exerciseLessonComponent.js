import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';
import FastImage from 'react-native-fast-image';
import ProgressBar from 'react-native-progress/Bar';
import {images} from '../../assets/images';
import {useNetworkImageHandler} from '../../hooks';

const ExerciseLessonComponent = ({
  heading,
  totalExercises,
  imageSource,
  onPress,
  progress,
}) => {
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <View style={[styles.container, styles.insideContainer]}>
        <View style={styles.leftContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.timeTxt}>Total Exercises: {totalExercises}</Text>
          <ProgressBar
            progress={progress / totalExercises}
            width={rwp(150)}
            height={rhp(10)}
            color={colors.backgroundClr}
            borderWidth={0}
            borderRadius={5}
            unfilledColor="#E2E2E2"
            style={styles.progressBar}
          />
        </View>

        <FastImage
          defaultSource={images.defaultImg}
          source={
            imageError || !isConnected ? images.defaultImg : {uri: imageSource}
          }
          style={styles.imgStyle}
          onError={() => setImageError(true)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rhp(150),
    width: '97%',
    backgroundColor: colors.whiteGrey,
    borderRadius: 25,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rhp(20),
  },
  progressBar: {
    marginVertical: rhp(10),
  },
  insideContainer: {
    height: rhp(140),
    width: '100%',
    backgroundColor: colors.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderWidth: 0.5,
  },
  leftContainer: {
    paddingHorizontal: rwp(20),
    paddingVertical: rhp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(24),
  },
  timeTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.grey,
    fontSize: rfs(18),
    marginBottom: rhp(10),
  },
  imgStyle: {
    resizeMode: 'cover',
    height: rhp(140),
    width: rwp(150),
    borderRadius: 25,
  },
});
export default ExerciseLessonComponent;
