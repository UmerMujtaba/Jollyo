import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  hp,
  rfs,
  rhp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
     alignItems: 'center',
     marginTop: hp(8),
   },
   heading: {
     fontSize: wp(20),
     fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
     color: colors.YELLOW.mildYellow,
     letterSpacing: 3,
   },
});
