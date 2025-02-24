import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    borderWidth: isTablet ? 1 : 0.5,
    borderColor: colors.GREY.grey,
    height: rhp(35),
    width: wp(44),
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  activeText: {
    color: colors.BLACK.pureBlack,
    textAlign: 'center',
    fontSize: isTablet ? rfs(18) : rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});
