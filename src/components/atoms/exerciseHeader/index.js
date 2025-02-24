import React from 'react';
import { Text, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import { colors } from '../../../constants/colors';
import { rhp, wp } from '../../../constants/dimensions';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';

export const ExerciseHeader = ({
  letter,
  currentExerciseIndex,
  totalExercises,
  progress,
}) => {
  const normalizedProgress = progress > 1 ? progress / 100 : progress;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{letter}</Text>
        <Text style={styles.title}>
          {currentExerciseIndex}/{totalExercises}
        </Text>
      </View>

      <ProgressBar
        progress={normalizedProgress}
        width={wp(90)}
        height={rhp(10)}
        color={colors.PURPLE.backgroundClr}
        borderWidth={0}
        borderRadius={5}
        unfilledColor="#E2E2E2"
        style={styles.progressBar}
      />

      <Text style={styles.description}>
        {totalExercises} {Strings.exercises}
      </Text>
    </View>
  );
};
