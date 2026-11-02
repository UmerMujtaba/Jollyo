import { StyleSheet } from "react-native";
import {
  colors,
  fonts,
  hp,
  rfs,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    marginTop: hp(4),
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: wp(10),
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(4.5),
    color: colors.WHITE.white,
    textAlign: 'center',
    marginBottom: hp(4),
  },
});