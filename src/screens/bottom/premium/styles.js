import {Dimensions, StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {
  height,
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  width,
  wp,
} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(20),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  insideBody: {
    // alignSelf: 'center',
    // paddingHorizontal: rwp(20),
  },
  img: {
    width: rwp(300),
    height: isTablet ? hp(40) : hp(46),
    alignSelf: 'center',
  },
  unlockAllText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(24),
    letterSpacing: 2,
    marginBottom: rhp(10),
    paddingHorizontal: rwp(10),
  },
  subHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.grey,
    fontSize: rfs(16),
    letterSpacing: isTablet ? 7 : 3,
    marginBottom: isTablet ? rhp(10) : rhp(20),
    paddingHorizontal: rwp(10),
  },
  //   paymentAnimation: {
  //     height: Dimensions.get('screen').height,
  //     width: Dimensions.get('screen').width,
  //   },
  paymentAnimation: {
    alignSelf: 'center',
    height: isTablet ? rhp(350) : rhp(350),
    width: isTablet ? rhp(500) : rhp(400),
    marginBottom: rhp(20),
  },
});
