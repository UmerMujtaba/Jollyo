import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr,
    paddingHorizontal: 20,
  },
  imgStyle: {
    resizeMode: 'contain',
    height: rhp(350),
    width: rwp(350),
    alignSelf: 'center',
  },
  nameHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: wp(6),
    textAlign: 'center',
    marginVertical: hp(2),
    // padding: wp(5),
  },
 
});
