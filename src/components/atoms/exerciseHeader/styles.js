import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: rhp(20),
    paddingHorizontal: rwp(20),
    height: rhp(150),
    width: '100%',
    // backgroundColor: 'red',
    marginBottom: rhp(40),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(24),
  },
  bottomBar: {
    marginTop: rhp(20),
    width: '100%',
    height: 4,
    backgroundColor: colors.WHITE.disabled,
    borderRadius: 20,
  },
  topBar: {
    width: '20%',
    height: 4,
    backgroundColor: colors.GREEN.green,
    borderRadius: 20,
  },
  description: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(22),
    marginTop: rhp(20),
  },
  progressBar: {
    marginVertical: rhp(10),
  },
});
