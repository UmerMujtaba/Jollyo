import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp
} from '../../../constants';

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
