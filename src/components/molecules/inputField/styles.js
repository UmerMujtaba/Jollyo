import { StyleSheet } from 'react-native';
import { colors, fonts, rfs, wp } from '../../../constants';

export const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(5),
    color: colors.YELLOW.mildYellow,
    letterSpacing: 1,
    marginBottom: wp(2),
  },
});
