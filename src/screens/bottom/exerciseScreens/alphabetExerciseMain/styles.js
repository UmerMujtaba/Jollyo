import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp,
} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: colors.WHITE.whiteGrey,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: rhp(10),
  },
  bodyInside: {
    flex: 1,
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderWidth: 0.5,
  },
  imgContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    position: 'relative',
    resizeMode: 'cover',
    width: isTablet ? wp(55) : wp(70),
    height: isTablet ? wp(55) : wp(70),
    borderRadius: isTablet ? wp(27) : wp(35),
    alignSelf: 'center',
  },
  letterText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.CondensedBold,
    fontSize: rfs(80),
    color: colors.PURPLE.backgroundClr,
    marginTop: isTablet ? rhp(-12) : rhp(10),
    textAlign: 'center',
  },
  itemName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(40),
    // marginTop: isTablet ? rhp(0) : rhp(5),
    textAlign: 'center',
  },

  lottieStyle: {
    width: rwp(200), // Width of the Lottie animation
    height: rhp(200), // Height of the Lottie animation
    marginTop: rhp(20),
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.WHITE.white,
    height: hp(60),
    width: wp(100),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fireworksAnimation: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    bottom: 20,
    // zIndex: 1,
  },

  stickerText: {
    paddingHorizontal: rwp(15),
    // marginTop: rhp(10),
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
  speechedText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(20),
    textAlign: 'center',
    paddingVertical: rhp(8),
  },
});
