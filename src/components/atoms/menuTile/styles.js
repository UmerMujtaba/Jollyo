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
    height: rhp(90),
    width: wp(95),
    backgroundColor: colors.WHITE.disabled,
    flexDirection: 'row',
    borderRadius: 20,
    marginBottom: rhp(20),
  },
  insideContainer: {
    height: rhp(83),
    alignItems: 'center',
    backgroundColor: colors.WHITE.white,
    paddingHorizontal: rwp(10),
  },
  avatarContainer: {
    width: rhp(60),
    height: rhp(60),
    borderRadius: rhp(30),
    backgroundColor: colors.PINK.pink,
    justifyContent: 'center',
  },
  iconStyle: {
    width: rwp(20),
    height: rhp(20),
    alignSelf: 'center',
  },
  iconNewStyle: {
    width: rwp(20),
    height: rhp(20),
    alignSelf: 'flex-end',
  },
  textContainer: {
    width: wp(60),
    paddingHorizontal: rwp(10),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(20),
  },
  subHeadingStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.GREY.darkGrey,
    fontSize: rfs(17),
  },
  iconContainer: {
    // backgroundColor: 'red',
    width: isTablet ? wp(18) : wp(14),
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
  },
});
