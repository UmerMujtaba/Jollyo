import { StyleSheet } from "react-native";
import {
  isTablet,
  rhp,
  rwp
} from '../../../constants';


export const styles = StyleSheet.create({
  flatListContainer: {
    marginBottom: rhp(30),
    paddingRight: isTablet ? rwp(5) : rwp(0),
  },
});
