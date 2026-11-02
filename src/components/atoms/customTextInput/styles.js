import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: wp(0.1),
    borderBottomColor: colors.WHITE.withWithOpacity,
    fontSize: rfs(6),
    color: colors.BLACK.pureBlack,
    marginBottom: rhp(14),
  },
  inputStyle: {
    flex: 1,
    color: colors.BLACK.pureBlack,
    fontSize: rfs(6),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});

