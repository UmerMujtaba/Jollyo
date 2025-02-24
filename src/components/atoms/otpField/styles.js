import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  otpContainer: {
    marginTop: rhp(24),
    paddingHorizontal: 10,
  },
  codeFieldRoot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cell: {
    width: rwp(65),
    height: rhp(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginRight: rwp(8),
  },
  focusedCell: {
    borderBottomColor: colors.mildYellow,
  },
  cellText: {
    color: colors.BLACK.pureBlack,
    fontFamily: fonts.SF_PRO_TEXT.BasisGrotesque.Regular,
    fontSize: rfs(28),
  },
});
