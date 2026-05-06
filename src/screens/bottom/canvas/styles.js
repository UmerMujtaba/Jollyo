import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { hp, isTablet, rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp(4),
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: wp(6),
    marginVertical: rhp(18),
    textAlign: 'center',
  },
  canvas: {
    width: wp(95),
    height: hp(52),
    backgroundColor: colors.WHITE.white,
    alignSelf: 'center',
  },

  slider: {
    width: wp(90),
    marginTop: rhp(10),
  },
  strokeHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.ORANGE.darkOrange,
    fontSize: wp(6),
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
    marginHorizontal: wp(2),
    marginVertical: wp(3),
    width: wp(6),
    height: wp(6),
    alignSelf: 'center',
    borderRadius: wp(15),
  },
  btnStyle: {
    marginHorizontal: isTablet ? rwp(0) : rwp(10),
    width: wp(25),
    backgroundColor: colors.ORANGE.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: rhp(5),
    // justifyContent: 'center'
  },
  btnText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: wp(5),
    color: colors.WHITE.white,
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
