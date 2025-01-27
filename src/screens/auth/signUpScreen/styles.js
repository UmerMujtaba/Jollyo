import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {rfs, rhp, rwp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: rhp(250),
    width: rwp(280),
    bottom: -40,
    left: 75,
    position: 'absolute',
    alignSelf: 'center',
  },
  emailInputField: {
    fontSize: rfs(24),
  },
  passwordInputField: {
    fontSize: rfs(24),
  },
  errorBorder: {
    borderColor: colors.RED.red,
    borderWidth: 1,
  },
  errorMessage: {
    color: colors.RED.red,
    width: '85%',
    paddingHorizontal: 20,
    fontSize: rfs(16),
    marginTop: rhp(-10),
    marginBottom: rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  inputView: {
    paddingHorizontal: rwp(20),
  },
});
