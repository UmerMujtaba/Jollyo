import { StyleSheet } from "react-native";
import { colors, rhp, rwp } from "../../../constants";


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: rwp(20),
    marginTop: rhp(20),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 0,
    bottom: rhp(24),
    padding: rwp(5),
    zIndex: 1,
  },
  eyeIcon: {
    width: rwp(24),
    height: rhp(24),
    tintColor: colors.WHITE.white,
    resizeMode: 'contain',
  },
});