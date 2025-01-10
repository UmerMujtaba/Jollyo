import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {hp, isTablet, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: rhp(28),
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.white,
    fontSize: rfs(28),
    marginVertical: rhp(10),
  },
  canvas: {
    width: wp(95),
    height: isTablet ? hp(63) : hp(65),
    backgroundColor: colors.white,
    alignSelf: 'center',
  },

  slider: {
    width: wp(90),
    marginTop: rhp(10),
  },
  strokeHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.darkOrange,
    fontSize: rfs(20),
    marginTop: rhp(10),
  },
  btnContainer: {
    marginTop: rhp(10),
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-around',
  },
  btnInside: {
    width: wp(20),
  },

  strokeWidthButton: {
    marginHorizontal: isTablet ? rwp(0) : rwp(10),
    marginVertical: rhp(8),
    width: rwp(25),
    height: rwp(25),
    borderRadius: rwp(13.5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#39579A',
  },
  strokeColorButton: {
    marginHorizontal: rwp(2),
    marginVertical: isTablet ? rhp(8) : rhp(7),
    width: isTablet ? rhp(20) : rhp(30),
    height: isTablet ? rhp(20) : rhp(30),
    alignSelf: 'center',
    borderRadius: isTablet ? rhp(10) : rhp(15),
  },
  btnStyle: {
    marginHorizontal: isTablet ? rwp(0) : rwp(10),
    width: wp(20),
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: rhp(5),
    // justifyContent: 'center'
  },
  btnText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: isTablet ? rfs(20) : rfs(16),
    color: colors.white,
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
