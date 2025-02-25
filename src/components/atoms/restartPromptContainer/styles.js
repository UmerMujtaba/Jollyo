import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  hp,
  rfs,
  rhp,
  rwp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  restartPromptContainer: {
    position: 'absolute',
    top: '14%',
    backgroundColor: colors.backgroundClr,
    paddingHorizontal: rwp(40),
    paddingVertical: rhp(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  restartPromptText: {
    fontSize: rfs(24),
    color: colors.darkOrange,
    paddingVertical: rhp(10),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  btnRestart: {
    width: wp(30),
  },
  completeImg: {
    width: wp(60),
    height: hp(35),
  },
});
