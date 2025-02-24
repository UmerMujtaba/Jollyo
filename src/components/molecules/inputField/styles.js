import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";
import { rfs } from "../../../constants/dimensions";


export const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.YELLOW.mildYellow,
    letterSpacing: 1,
  },
});