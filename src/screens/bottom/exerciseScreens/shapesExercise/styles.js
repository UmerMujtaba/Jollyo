import {StyleSheet} from 'react-native';
import {
  height,
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp,
} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';
import {colors} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.WHITE.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(20),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: colors.WHITE.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bottomBody: {
    flex: 1,
    alignItems: 'center',
  },
  imgContainer: {
    width: wp(70),
    height: wp(70),
    borderRadius: hp(35),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    position: 'relative',
    width: isTablet ? wp(50) : wp(70),
    height: isTablet ? wp(50) : wp(70),
    borderRadius: isTablet ? wp(25) : hp(35),
    alignSelf: 'center',
  },
  imgContainerBorder: {
    width: isTablet ? wp(52) : wp(75),
    height: isTablet ? wp(52) : wp(75),
    borderRadius: isTablet ? wp(25) : wp(40),
    borderColor: colors.GREY.grey,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    width: '80%',
    color: colors.PURPLE.backgroundClr,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(32),
    marginTop: isTablet ? rhp(0) : rhp(20),
    textAlign: 'center',
  },
  boxRow: {
    marginTop: isTablet ? rhp(8) : rhp(10),
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optContainer: {
    alignItems: 'center',
    width: isTablet ? rwp(50) : rwp(60),
    height: isTablet ? rhp(50) : rhp(60),
    borderRadius: 12,
    backgroundColor: colors.GREY.greyColor,
  },
  optContainerInside: {
    height: isTablet ? rhp(44) : rhp(54),
    backgroundColor: colors.GREY.lightGrey,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: colors.WHITE.white,
    justifyContent: 'center',
  },
  optImage: {
    // resizeMode: 'contain',
    height: rhp(40),
    width: rwp(40),
  },
  fireworksAnimation: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '10%',
    left: isTablet ? '10%' : '25%',
    transform: [{translateX: -100}],
  },

  bottomBar: {
    alignSelf: 'center',
    marginBottom: rhp(10),
    width: '80%',
    height: rhp(4),
    backgroundColor: colors.WHITE.disabled,
    borderRadius: 20,
  },
  topBar: {
    width: '20%',
    height: rhp(4),
    backgroundColor: colors.GREEN.green,
    borderRadius: 20,
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    height: '60%',
    backgroundColor: colors.WHITE.white,
    borderRadius: 20,
    alignItems: 'center',
  },

  modalMessage: {
    fontSize: rfs(30),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    margin: 20,
    textAlign: 'center',
  },
  modalSubMsg: {
    fontSize: rfs(22),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.GREY.grey,
    marginBottom: rhp(20),
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: colors.GREENparrot,
    paddingVertical: rhp(10),
    paddingHorizontal: rwp(30),
    borderRadius: 5,
  },
  modalButtonText: {
    color: colors.WHITE.white,
    fontSize: rfs(16),
  },
  modalImg: {
    resizeMode: 'cover',
    height: rhp(250),
    width: rwp(250),
  },
});
