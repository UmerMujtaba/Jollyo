import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp,
  wp
} from '../../../constants';


export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    marginBottom: rhp(20),
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.YELLOW.lightYellow,
    width: wp(95),
    height: rhp(100),
    borderRadius: 20,
  },
  insideContainer: {
    backgroundColor: colors.YELLOW.darkYellow,
    height: rhp(93),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: rhp(10),
  },
  monthText: {
    color: colors.WHITE.white,
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    letterSpacing: 2,
  },
  dayContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 16,
  },
  selectedDayContainer: {
    backgroundColor: colors.PINK.pink,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  dayText: {
    color: colors.BLACK.pureBlack,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    marginBottom: rhp(10),
  },
  selectedDayText: {
    color: colors.WHITE.white,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  dateText: {
    color: colors.BLACK.pureBlack,
    fontSize: rfs(18),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
  selectedDateText: {
    color: colors.WHITE.white,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});
