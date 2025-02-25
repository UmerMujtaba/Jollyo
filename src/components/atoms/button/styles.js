import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  btnStyle: {
    width: wp(90),
    backgroundColor: colors.ORANGE.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    // justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
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
