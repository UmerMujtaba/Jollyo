import {View, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import {hp, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import {Strings} from '../../constants/strings';
import fonts from '../../constants/fonts';
import Slider from '@react-native-community/slider';
import {images} from '../../assets/images';
import {debounce} from 'lodash';

const ManageScreenTimer = () => {
  const [strokeWidth, setStrokeWidth] = useState(2);

  const getFormattedTime = value => {
    const hours = Math.round(value);
    if (hours === 1) {
      return `${hours} hour`;
    } else {
      return `${hours} hours`;
    }
  };

  const handleSliderChange = useCallback(
    debounce(value => setStrokeWidth(value), 100),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.innerContainer]}>
        <Text style={styles.header}>{Strings.manageScreenTime}</Text>
        <Text style={styles.title}>{Strings.setALimitOnTheScreenTime}</Text>
        <Text style={styles.timeText}>{getFormattedTime(strokeWidth)}</Text>
        <View>
          <Slider
            minimumTrackTintColor={colors.backgroundClr}
            maximumTrackTintColor="#000000"
            value={strokeWidth}
            onValueChange={handleSliderChange}
            onSlidingComplete={() => console.log(strokeWidth)}
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            step={1}
            thumbTintColor={colors.backgroundClr}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: rhp(300),
    width: wp(90),
    backgroundColor: colors.disabled,
    borderRadius: 20,
    marginBottom: rhp(100),
  },
  innerContainer: {
    height: rhp(293),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: rwp(10),
  },
  header: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(24),
    textAlign: 'center',
    marginBottom: rhp(30),
    color: colors.backgroundClr,
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(18),
    color: colors.darkGrey,
    textAlign: 'center',
    paddingHorizontal: rwp(10),
  },
  slider: {
    width: wp(80),
    height: hp(5),
  },
  timeText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    color: colors.backgroundClr,
    textAlign: 'center',
    paddingHorizontal: rwp(10),
    paddingVertical: rhp(15),
  },
});
export default ManageScreenTimer;
