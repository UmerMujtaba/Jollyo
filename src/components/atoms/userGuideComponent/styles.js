import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  isTablet,
  rfs,
  rhp,
  rwp,
  hp,
  wp,
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: hp(4),
    width: wp(80),
  },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    height: rhp(1),
    width: wp(30),
    backgroundColor: colors.ORANGE.darkOrange,
  },
  dottedBorderContainer: {
    height: wp(13),
    width: wp(13),
    borderRadius: wp(15),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ORANGE.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(15),
    borderWidth: 1,
    borderColor: colors.ORANGE.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledContainer: {
    height: wp(6),
    width: wp(6),
    borderRadius: wp(15),
    backgroundColor: colors.ORANGE.darkOrange,
    justifyContent: 'center',
  },
  countText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.WHITE.white,
    fontSize: wp(4),
    textAlign: 'center',
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    textAlign: 'center',
    fontSize: wp(8),
    letterSpacing: 2,
  },
  subHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    color: colors.WHITE.white,
    fontSize: wp(6),
    marginTop: hp(2),
    lineHeight: 30,
    textAlign: 'center',
  },
});
