import { StyleSheet } from "react-native";
import { rhp, rwp } from "../../../constants/dimensions";


export const styles = StyleSheet.create({
  container: {
    paddingTop: rhp(20),
    marginBottom: rhp(10),
  },

  columnWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentContainerStyle: {
    paddingBottom: rhp(180),
  },
});