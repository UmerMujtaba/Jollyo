import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { hp, rfs, rhp, rwp, wp } from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: rwp(10),
  },
  appBarContainer: {
    paddingTop: hp(5),
    paddingBottom: hp(2),
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImg: {
    width: hp(8),
    height: hp(8),
    marginRight: wp(4),
    borderRadius: hp(10),
  },
  nameHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: wp(5.5),
    color: colors.WHITE.white,
    letterSpacing: 5,
  },
  welcome: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: wp(4.5),
    color: colors.ORANGE.darkOrange,
    letterSpacing: 2,
  },
});
