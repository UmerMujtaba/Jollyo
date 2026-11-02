import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  hp,
  isTablet,
  rfs,
  rhp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:hp(3)

  },
  mainText: {
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(3.8),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    letterSpacing: 1,
  },
  btnText: {
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(4),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
});
