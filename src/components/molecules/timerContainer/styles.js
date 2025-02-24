import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { rfs, rhp } from "../../../constants/dimensions";
import fonts from "../../../constants/fonts";


export const styles = StyleSheet.create({
  container: {
    marginTop: rhp(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendTxt: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    color: colors.YELLOW.mildYellow,
    textDecorationLine: 'underline',
  },
});