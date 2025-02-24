import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import ProgressBar from 'react-native-progress/Bar';
import { images } from '../../../assets/images';
import { colors } from '../../../constants/colors';
import { rhp, rwp } from '../../../constants/dimensions';
import { Strings } from '../../../constants/strings';
import { useNetworkImageHandler } from '../../../hooks';
import { styles } from './styles';

export const ExerciseLessonComponent = ({
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
          <Text style={styles.timeTxt}>
            {`${Strings.totalExercises} ${totalExercises}`}
          </Text>
          <ProgressBar
            progress={progress / totalExercises}
            width={rwp(150)}
            height={rhp(10)}
            color={colors.PURPLE.backgroundClr}
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

