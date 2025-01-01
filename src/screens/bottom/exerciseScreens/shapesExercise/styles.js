import {StyleSheet} from 'react-native';
import {height, hp, rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
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
    backgroundColor: colors.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(10),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
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
    resizeMode: 'contain',
    width: wp(70),
    height: wp(70),
    borderRadius: hp(30),
    alignSelf: 'center',
  },
  imgContainerBorder: {
    width: wp(75),
    height: wp(75),
    borderRadius: wp(40),
    borderColor: colors.grey,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    width: '80%',
    color: colors.backgroundClr,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(32),
    marginTop: rhp(20),
    textAlign: 'center',
  },
  boxRow: {
    marginTop: rhp(10),
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optContainer: {
    alignItems: 'center',
    width: rwp(60),
    height: rhp(60),
    borderRadius: 12,
    backgroundColor: colors.greyColor,
  },
  optContainerInside: {
    height: rhp(54),
    backgroundColor: colors.lightGrey,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  optImage: {
    resizeMode: 'contain',
    height: rhp(40),
    width: rwp(40),
  },
  fireworksAnimation: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '10%',
    left: '25%',
    transform: [{translateX: -100}],
  },

  bottomBar: {
    alignSelf: 'center',
    marginBottom: rhp(10),
    width: '80%',
    height: rhp(4),
    backgroundColor: colors.disabled,
    borderRadius: 20,
  },
  topBar: {
    width: '20%',
    height: rhp(4),
    backgroundColor: colors.green,
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
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },

  modalMessage: {
    fontSize: rfs(30),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.backgroundClr,
    margin: 20,
    textAlign: 'center',
  },
  modalSubMsg: {
    fontSize: rfs(22),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.grey,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: colors.parrot,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalImg: {
    resizeMode: 'cover',
    height: rhp(250),
    width: rwp(250),
  },
});
