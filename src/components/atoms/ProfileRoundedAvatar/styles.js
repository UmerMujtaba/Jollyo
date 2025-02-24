import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {hp, isTablet, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: isTablet ? rhp(130) : rhp(120),
    backgroundColor: colors.PINK.darkPink,
    height: isTablet ? rhp(130) : rhp(120),
    alignSelf: 'center',
    borderRadius: isTablet ? rhp(65) : rhp(60),
  },
  insideContainer: {
    height: isTablet ? rhp(124) : rhp(114),
    backgroundColor: colors.PINK.lightPink,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  img: {
    height: hp(10),
    width: wp(18),
    alignSelf: 'center',
  },
  tickContainer: {
    position: 'absolute',
    bottom: isTablet ? rhp(-30) : rhp(-24),
    alignSelf: 'center',
  },
  tick: {
    backgroundColor: colors.YELLOW.mildYellow,
    height: rwp(30),
    width: rwp(30),
    borderRadius: rwp(15),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tickText: {
    fontSize: rwp(16),
    textAlign: 'center',
    color: colors.WHITE.white,
  },
});
