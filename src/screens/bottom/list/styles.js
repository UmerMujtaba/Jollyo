import {StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingVertical: rhp(28),
    // padding: 30,
  },
  title: {
    fontSize: rfs(28),
    marginBottom: rhp(10),

    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  // svg: {
  //   position: 'absolute',
  //   top: 20,
  //   height: 300,
  //   width: 300,
  // },
  canvas: {
    width: wp(95),
    height: hp(70),
    backgroundColor: '#fff',
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
});