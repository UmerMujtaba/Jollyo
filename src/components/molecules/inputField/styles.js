import { StyleSheet } from "react-native";
import {
  colors,
  fonts,
  rfs
} from '../../../constants';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.YELLOW.mildYellow,
    letterSpacing: 1,
  },
});