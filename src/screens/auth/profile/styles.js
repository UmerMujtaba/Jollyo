import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {rfs, rhp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  nameHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(24),
    textAlign: 'center',
    marginTop: rhp(20),
  },
  ageHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(24),
    textAlign: 'center',
    marginTop: rhp(10),
  },
  inputFont: {
    textAlign: 'center',
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(22),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    letterSpacing: 5,
  },
  errorMessage: {
    color: colors.RED.red,
    width: '85%',
    fontSize: rfs(16),
    marginTop: rhp(-10),
    marginBottom: rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  inputFieldStyle: usernameErrorMessage => ({
    paddingVertical: 5,
    color: colors.WHITE.white,
    borderBottomColor: usernameErrorMessage
      ? colors.RED.red
      : colors.WHITE.disabled,
  }),
});
