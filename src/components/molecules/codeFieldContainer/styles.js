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
    paddingHorizontal: rwp(20),
    marginTop: rhp(20),
  },
  headingText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.YELLOW.mildYellow,
  },
});
