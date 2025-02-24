import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
     alignItems: 'center',
     marginTop: rhp(60),
   },
   heading: {
     fontSize: rfs(80),
     fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
     color: colors.YELLOW.mildYellow,
     letterSpacing: 3,
   },
});
