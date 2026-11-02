import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rwp
} from '../../../constants';

export const styles = StyleSheet.create({
  timerText: {
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    marginRight: rwp(20),
  },
});
