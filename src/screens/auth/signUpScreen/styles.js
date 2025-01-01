import {StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr
  },
  imgStyle: {
    resizeMode: 'contain',
    height: rhp(280),
    width: rwp(280),
    alignSelf: 'center',
  },
  emailInputField: {fontSize: rfs(24)},
  passwordInputField: {fontSize: rfs(24)},
  errorBorder: {
    borderColor: colors.red,
    borderWidth: 1,
  },
  errorMessage: {
    color: colors.red,
    width: '85%',
    paddingHorizontal: 20,
    fontSize: rfs(16),
    marginTop: rhp(-10),
    marginBottom: rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});
