import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  hp,
  rfs,
  rhp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.ORANGE.darkOrange,
    borderRadius: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: hp(2),
    alignItems: 'center',
    shadowColor: colors.BLACK.pureBlack,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 10,
  },
  imageWrapper: {
    width: '72.5%',
    alignItems: 'flex-end',
  },
  imgStyle: {
    height: hp(18),
    width: '100%',
    borderRadius: 40,
  },
  textWrapper: {
    width: '27.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  txtStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    letterSpacing: 2,
    fontSize: wp(4.1),
    color: colors.WHITE.white,
    transform: [{rotate: '90deg'}],
  },
});
