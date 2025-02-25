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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.BLACK.blackWithFiftyPercentOpacity,
  },
  modalContent: {
    backgroundColor: colors.WHITE.white,
    height: hp(70),
    width: wp(100),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickerImage: {
    width: rwp(260),
    height: rhp(260),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  stickerText: {
    paddingHorizontal: rwp(15),
    marginTop: rhp(10),
    fontSize: rfs(28),
    textAlign: 'center',
    color: colors.PURPLE.backgroundClr,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  closeButton: {
    marginTop: rhp(20),
    paddingHorizontal: rwp(20),
    paddingVertical: rhp(10),
    backgroundColor: colors.ORANGE.darkOrange,
    borderRadius: 16,
  },
  closeButtonText: {
    color: colors.WHITE.white,
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
});
