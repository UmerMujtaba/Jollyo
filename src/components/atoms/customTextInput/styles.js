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
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.WHITE.disabled,
    fontSize: rfs(14),
    color: colors.BLACK.pureBlack,
    marginBottom: rhp(20),
  },
  inputStyle: {
    flex: 1,
    color: colors.BLACK.pureBlack,
    fontSize: rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});

