import { StyleSheet } from 'react-native';
import { colors, fonts, isTablet, hp, wp } from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: wp(26),
    height: hp(20),
    borderWidth: 1,
    borderColor: colors.YELLOW.yellow,
    borderRadius: 24,
    // marginHorizontal: rwp(5),
    marginLeft: wp(5),
    paddingBottom: hp(1),
  },
  topContainer: {
    width: 'auto',
    height: hp(5),
    backgroundColor: colors.YELLOW.yellow,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: wp(3.5),
    letterSpacing: 1,
    color: colors.PURPLE.backgroundClr,
  },
  priceText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: wp(4),
    letterSpacing: 1,
    color: colors.BLACK.pureBlack,
    textAlign: 'center',
    // paddingTop: hp(8),
  },
  sub: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: wp(4),
    letterSpacing: 1,
    color: colors.GREY.grey,
    textAlign: 'center',
    // paddingTop: hp(5),
    // marginBottom: hp(10),
  },
});
