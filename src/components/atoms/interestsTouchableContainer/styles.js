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
    width: isTablet ? rwp(120) : rwp(140),
    height: isTablet ? rhp(130) : rhp(140),
    borderRadius: 16,
    backgroundColor: colors.GREY.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginHorizontal: rwp(15),
    marginVertical: rhp(10),
  },
  insideContainer: {
    // height: rhp(135),
    height: isTablet ? rhp(125) : rhp(135),
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  imgStyle: {
    height: rhp(80),
    width: rwp(80),
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.PURPLE.backgroundClr,
    fontSize: wp(5),
    marginTop:wp(2)
  },
  tickCircle: {
    position: 'absolute',
    top: rhp(5),
    right: rwp(5),
    width: rhp(24),
    height: rhp(24),
    borderRadius: rhp(12),
    backgroundColor: colors.PURPLE.backgroundClr,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tick: {
    fontSize: wp(3),
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.WHITE.white,
  },
});
