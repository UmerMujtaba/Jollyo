import {StyleSheet} from 'react-native';
import fonts from '../../../../constants/fonts';
import {hp, rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
import {colors} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },

  btnContainer: {
    backgroundColor: colors.WHITE.whiteGrey,
    borderRadius: 12,
    height: rhp(45),
    // width: rwp(100),
  },
  btnContainerInside: {
    height: rhp(40),
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderWidth: 0.5,
  },
  animalName: {
    paddingHorizontal: rwp(15),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    color: colors.PURPLE.backgroundClr,
    textAlign: 'center',
    paddingTop: rhp(5),
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginTop: rhp(20),
    marginBottom: rhp(20),
  },
  contentContainerStyle: {
    paddingVertical: rhp(20),
    paddingBottom: rhp(150),
  },
});
