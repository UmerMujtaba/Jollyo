import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { hp, isTablet, rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(8),
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.WHITE.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(20),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  img: {
    width: wp(50),
    height: hp(26),
    alignSelf: 'center',
  },
  unlockAllText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: wp(6),
    letterSpacing: 2,
    marginBottom: rhp(10),
    paddingHorizontal: rwp(10),
  },
  subHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.GREY.grey,
    fontSize: wp(5),

    letterSpacing: isTablet ? 7 : 3,
    marginBottom: isTablet ? rhp(10) : rhp(20),
    paddingHorizontal: rwp(10),
  },
  paymentAnimation: {
    alignSelf: 'center',
    height: hp(35),
    width: hp(35),
    // marginBottom: rhp(20),
  },
});
