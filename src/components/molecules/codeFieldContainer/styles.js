import { StyleSheet } from "react-native";
import { rfs, rhp, rwp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";
import { colors } from "../../../constants/colors";


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
