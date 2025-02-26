import { StyleSheet } from "react-native";
import {
  colors,
  fonts,
  rfs,
  rhp,
  rwp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: rhp(30),
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: rwp(20),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(24),
    color: colors.WHITE.white,
    textAlign: 'center',
    marginBottom: rhp(40),
  },
});