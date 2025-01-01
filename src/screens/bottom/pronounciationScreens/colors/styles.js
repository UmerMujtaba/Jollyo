import {StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {rfs, rhp, rwp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 20,
  },

  btnContainer: {
    backgroundColor: colors.whiteGrey,
    borderRadius: 12,
    height: rhp(45),
  },
  btnContainerInside: {
    height: rhp(40),
    backgroundColor: colors.white,
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
    color: colors.backgroundClr,
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
  circleWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: rhp(10),
  },
  circle: {
    width: rhp(160),
    height: rhp(160),
    borderRadius: rhp(80),
    justifyContent: 'center',
    alignItems: 'center',
    margin: rhp(10),
  },
  letterText: color => ({
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(30),
    color: color === '#000000' ? 'white' : 'black',
  }),
});
