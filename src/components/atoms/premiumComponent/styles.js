import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: isTablet ? rwp(120) : rwp(140),
    height: rhp(170),
    borderWidth: 1,
    borderColor: colors.YELLOW.yellow,
    borderRadius: 24,
    // marginHorizontal: rwp(5),
    marginLeft: rwp(10),
  },
  topContainer: {
    width: 'auto',
    height: rhp(50),
    backgroundColor: colors.YELLOW.yellow,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    letterSpacing: 1,
    color: colors.PURPLE.backgroundClr,
  },
  priceText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(18),
    letterSpacing: 1,
    color: colors.BLACK.pureBlack,
    textAlign: 'center',
    paddingTop: rhp(10),
  },
  sub: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    letterSpacing: 1,
    color: colors.GREY.grey,
    textAlign: 'center',
    paddingTop: rhp(5),
    marginBottom: rhp(10),
  },
});
