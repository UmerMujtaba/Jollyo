import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: rhp(30),
    width: wp(80),
  },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  line: {
    height: rhp(1),
    width: rwp(110),
    backgroundColor: colors.ORANGE.darkOrange,
  },
  dottedBorderContainer: {
    height: isTablet ? rwp(30) : rwp(50),
    width: isTablet ? rwp(30) : rwp(50),
    borderRadius: isTablet ? rwp(15) : rwp(25),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.ORANGE.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    height: isTablet ? rwp(22) : rwp(35),
    width: isTablet ? rwp(22) : rwp(35),
    borderRadius: isTablet ? rwp(11) : rwp(17.5),
    borderWidth: isTablet ? 2 : 1,
    borderColor: colors.ORANGE.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledContainer: {
    height: isTablet ? rwp(16) : rwp(20),
    width: isTablet ? rwp(16) : rwp(20),
    borderRadius: isTablet ? rwp(8) : rwp(10),
    backgroundColor: colors.ORANGE.darkOrange,
    justifyContent: 'center',
  },
  countText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.WHITE.white,
    fontSize: rfs(12),
    textAlign: 'center',
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    textAlign: 'center',
    fontSize: rfs(24),
    letterSpacing: 2,
  },
  subHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    color: colors.WHITE.white,
    fontSize: rfs(16),
    marginTop: rhp(10),
    lineHeight: 22,
    textAlign: 'center',
  },
});
