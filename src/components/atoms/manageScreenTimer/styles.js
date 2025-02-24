import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { hp, rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    height: rhp(300),
    width: wp(95),
    backgroundColor: colors.WHITE.disabled,
    borderRadius: 20,
    marginBottom: rhp(100),
  },
  innerContainer: {
    height: rhp(293),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE.white,
    paddingHorizontal: rwp(10),
  },
  header: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(24),
    textAlign: 'center',
    marginBottom: rhp(30),
    color: colors.PURPLE.backgroundClr,
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(18),
    color: colors.GREY.darkGrey,
    textAlign: 'center',
    paddingHorizontal: rwp(10),
  },
  slider: {
    width: wp(80),
    height: hp(5),
    // backgroundColor: 'red',
  },
  timeText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    color: colors.PURPLE.backgroundClr,
    textAlign: 'center',
    paddingHorizontal: rwp(10),
    paddingVertical: rhp(15),
  },
});
