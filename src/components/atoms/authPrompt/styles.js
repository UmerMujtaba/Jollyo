import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(18),
    lineHeight: isTablet ? rhp(21.56) : rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    letterSpacing: 1,
  },
  btnText: {
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(18),
    lineHeight: isTablet ? rhp(21.56) : rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    letterSpacing: 1,
  },
});
