import { StyleSheet } from 'react-native';
import {
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp,
} from '../../../../constants/dimensions';
import { colors } from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(8),

    paddingHorizontal: rwp(10),
  },
  body: {
    alignItems: 'center',
  },
  imgMain: {
    height: wp(80),
    width: wp(80),
    borderRadius: 36,
    marginBlock: wp(10),
  },
  headingName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    letterSpacing: 2,
    fontSize: wp(6),
    color: colors.WHITE.white,
    marginVertical: rhp(30),
  },
  slider: {
    width: wp(80),
    // height: hp(3),
  },
  timeText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: wp(4),

    color: colors.WHITE.white,
  },
  sliderContainer: {
    marginVertical: rhp(10),
    alignItems: 'center',
  },
  timeContainer: {
    width: isTablet ? wp(78) : wp(75),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnContainer: {
    flexDirection: 'row',
    width: wp(90),
    justifyContent: 'space-around',
    marginVertical: isTablet ? rhp(20) : rhp(40),
  },
  playPauseContainer: {
    height: rhp(50),
    width: rhp(50),
    borderRadius: rhp(25),
    backgroundColor: colors.ORANGE.darkOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 40,
    height: '80%',
    borderRadius: 36,
  },
});
