import {StyleSheet} from 'react-native';
import {
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp,
} from '../../../../constants/dimensions';
import {colors} from '../../../../constants/colors';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
    paddingHorizontal: rwp(10),
  },
  body: {
    alignItems: 'center',
  },
  imgMain: {
    height: isTablet ? rhp(359) : rhp(319),
    width: isTablet ? rwp(300) : rwp(300),
    borderRadius: 36,
    marginBottom: rhp(20),
  },
  headingName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    letterSpacing: 2,
    fontSize: isTablet ? rfs(28) : rfs(25),
    color: colors.WHITE.white,
    marginVertical: rhp(30),
  },
  slider: {
    width: wp(80),
    // height: hp(3),
  },
  timeText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
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
    top: 0,
    height: isTablet ? '95%' : '94.5%',
    borderRadius: 36,
  },
});
