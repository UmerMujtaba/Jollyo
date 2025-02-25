import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  isTablet,
  rfs,
  rhp,
  rwp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: rhp(150),
    width: '97%',
    backgroundColor: colors.WHITE.whiteGrey,
    borderRadius: 25,
    borderColor: '#E2E2E2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: rhp(20),
  },
  progressBar: {
    marginVertical: rhp(10),
  },
  insideContainer: {
    height: rhp(140),
    width: '100%',
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderWidth: 0.5,
  },
  leftContainer: {
    paddingHorizontal: rwp(20),
    paddingVertical: rhp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(24),
  },
  timeTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.GREY.grey,
    fontSize: rfs(18),
    marginBottom: rhp(10),
  },
  imgStyle: {
    resizeMode: 'cover',
    height: rhp(140),
    width: isTablet ? rwp(130) : rwp(150),
    borderRadius: 25,
  },
});
