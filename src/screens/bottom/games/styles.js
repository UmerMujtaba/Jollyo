import {StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr,
    paddingHorizontal: 10,
  },
  appBarContainer: {
    paddingVertical: rhp(20),
    marginTop: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rhp(20),
  },
  avatarImg: {
    width: rwp(70),
    height: rhp(70),
  },
  nameHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(24),
    color: colors.white,
  },
});
