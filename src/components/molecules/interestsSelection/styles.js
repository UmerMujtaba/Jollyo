import { StyleSheet } from "react-native";
import {
  rwp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: rwp(10),
  },
});
