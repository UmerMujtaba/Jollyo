import {StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // padding: 20,
    // justifyContent: 'center',
  },
  nameStyle: {
    fontSize: rfs(40),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    marginBottom: rhp(10),
    letterSpacing: 5,
  },
  timeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
  },

  timeText: {
    fontSize: 18,
    marginTop: 10,
  },
  btn: {
    backgroundColor: colors.darkOrange,
    padding: 15,
    borderRadius: 16,
    width: '40%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: rhp(20),
  },
  logoutText: {color: 'white', fontSize: rfs(18), marginBottom: rhp(20)},
});
