import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: rhp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(24),
  },
  count: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
    fontSize: rfs(18),
  },
});
