import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {hp, rfs, rhp, wp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: 'red',
  },
  body: {
    flex: 1,
    backgroundColor: colors.whiteGrey,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
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
    position: 'relative', // To allow positioning the timer on top of the image
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp(70),
    // height: wp(70),
    // borderRadius: hp(35),
    // backgroundColor: 'purple',
    // alignSelf: 'center',
    // justifyContent: 'center',
  },
  imgStyle: {
    position: 'relative',
    resizeMode: 'cover',
    width: wp(70),
    height: wp(70),
    borderRadius: hp(30),
    alignSelf: 'center',
  },
  letterText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.CondensedBold,
    fontSize: rfs(80),
    color: colors.backgroundClr,
    marginTop: rhp(20),
    textAlign: 'center',
  },
  itemName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    fontSize: rfs(40),
    marginTop: rhp(10),
    textAlign: 'center',
  },
  timerContainer: {
    position: 'absolute',
    // top: '10%',
    // left: '10%',
    width: wp(75),
    height: wp(75),
    borderRadius: hp(40),
    borderWidth: 2,
    borderColor: 'purple', // Outer border color
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'transparent', // Semi-transparent background if needed
  },
  timerText: {
    fontSize: rfs(28),
    fontWeight: 'bold',
    color: 'pink', // Timer text color
    backgroundColor: 'red',
    width: 40,
    height: 40,
    textAlignVertical: 'center',
    borderRadius: 20,
  },
  lottieStyle: {
    width: 200, // Width of the Lottie animation
    height: 200, // Height of the Lottie animation
    marginTop: 20,
  },
});
