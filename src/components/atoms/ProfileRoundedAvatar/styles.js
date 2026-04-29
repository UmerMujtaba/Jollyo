import { StyleSheet } from 'react-native';
import { colors, hp, isTablet, rhp, rwp, wp } from '../../../constants';
export const styles = StyleSheet.create({
  container: {
    width: hp(12),
    height: hp(12),
    backgroundColor: colors.PINK.darkPink,
    alignSelf: 'center',
    borderRadius: hp(50),
  },
  insideContainer: {
    height: hp(12),
    borderRadius: hp(50),
    backgroundColor: colors.PINK.lightPink,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderWidth: 1,
    borderBottomColor: 'orange',
    justifyContent: 'center',
    // backgroundColor:"green"
  },
  img: {
    height: wp(20),
    width: wp(21),
    borderRadius: hp(50),
    alignSelf: 'center',
  },
  tickContainer: {
    position: 'absolute',
    bottom: rhp(-24),
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
    fontSize: wp(4),
    textAlign: 'center',
    color: colors.WHITE.white,
  },
});
