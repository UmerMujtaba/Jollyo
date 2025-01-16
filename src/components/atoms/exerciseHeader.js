import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import {colors} from '../../constants/colors';
import {rfs, rhp, rwp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {Strings} from '../../constants/strings';

const ExerciseHeader = ({
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

const styles = StyleSheet.create({
  container: {
    paddingVertical: rhp(20),
    paddingHorizontal: rwp(20),
    height: rhp(150),
    width: '100%',
    // backgroundColor: 'red',
    marginBottom: rhp(40),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(24),
  },
  bottomBar: {
    marginTop: rhp(20),
    width: '100%',
    height: 4,
    backgroundColor: colors.WHITE.disabled,
    borderRadius: 20,
  },
  topBar: {
    width: '20%',
    height: 4,
    backgroundColor: colors.GREEN.green,
    borderRadius: 20,
  },
  description: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(22),
    marginTop: rhp(20),
  },
  progressBar: {
    marginVertical: rhp(10),
  },
});
export default ExerciseHeader;
