import {StyleSheet} from 'react-native';
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
    backgroundColor: colors.whiteGrey,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    marginTop: rhp(10),
  },
  bodyInside: {
    flex: 1,
    backgroundColor: colors.white,
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
    color: colors.backgroundClr,
    marginTop: isTablet ? rhp(-12) : rhp(20),
    textAlign: 'center',
  },
  itemName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(40),
    marginTop: isTablet ? rhp(0) : rhp(10),
    textAlign: 'center',
  },

  lottieStyle: {
    width: rwp(200), // Width of the Lottie animation
    height: rhp(200), // Height of the Lottie animation
    marginTop: rhp(20),
  },
});
