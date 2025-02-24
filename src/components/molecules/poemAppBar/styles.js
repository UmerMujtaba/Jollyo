import { StyleSheet } from "react-native";
import { isTablet, rhp, rwp, wp } from "../../../constants/dimensions";
import { colors } from "../../../constants/colors";


export const styles = StyleSheet.create({
  appBarView: {
    marginVertical: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  btnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.ORANGE.blackishOrange,
    height: isTablet ? rhp(45) : rhp(50),
    borderRadius: 16,
  },
  insideBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  space: {
    width: wp(28),
  },
});