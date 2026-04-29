import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: hp(30),
    width: wp(70),
    bottom: hp(-5),
      right:wp(10),
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 10,
  },
  emailInputField: {
    fontSize: rfs(6),
  },
  passwordInputField: {
    fontSize: rfs(6),
  },
  errorBorder: {
    borderColor: colors.RED.red,
    borderWidth: 1,
  },
  errorMessage: {
    color: colors.RED.red,
    width: '85%',
    paddingHorizontal: rhp(20),
    fontSize: rfs(4),
    marginTop: rhp(-10),
    marginBottom: rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  inputView: {
    paddingHorizontal: rwp(20),
  },
   passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: rwp(20),
    width: '100%',
    marginTop: rhp(10),
  },
   eyeIconContainer: {
    // backgroundColor:'red',
    position: 'absolute',
    right: 0,
    bottom: rhp(24),
    paddingHorizontal: wp(6),
    // paddingVertical: rhp(5),
    padding: rwp(5),

    zIndex: 1,
  },
  eyeIcon: {
    width: rwp(24),
    height: rhp(24),
    tintColor: colors.WHITE.white,
    resizeMode: 'contain',
  },
});
