import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import {rfs, rhp, rwp} from '../../../constants/dimensions';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
  },
  emptySection: {
    width: rwp(100),
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: rhp(10),
    paddingHorizontal: rwp(10),
  },
  sectionTitle: {
    marginTop: rhp(10),
    fontSize: rfs(27),
    marginBottom: rhp(10),
    color: colors.ORANGE.darkOrange,
    letterSpacing: 1,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  horizontalList: {
    paddingLeft: rwp(10),
  },
  rewardItem: {
    alignItems: 'center',
    marginHorizontal: rwp(8),
    padding: 10,
  },
  rewardImage: {
    width: rwp(100),
    height: rwp(100),
    resizeMode: 'cover',
    borderRadius: rwp(50),
  },
  rewardName: {
    textAlign: 'center',
    marginTop: rhp(10),
    fontSize: rfs(18),
    marginBottom: rhp(10),
    color: colors.WHITE.white,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});
