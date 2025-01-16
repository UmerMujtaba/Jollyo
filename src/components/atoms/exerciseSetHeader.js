import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const ExerciseSetHeader = ({title, count, description}) => {
  return (
    <View style={{paddingHorizontal: rwp(20)}}>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <Text style={[styles.count, {marginBottom: rhp(20)}]}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: rhp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(24),
  },
  count: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(18),
  },
});
export default ExerciseSetHeader;
