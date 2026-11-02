import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
    height: rhp(88),
    width: wp(90),
    marginBottom: rhp(10),
    marginVertical: rhp(2),
  },
  innerCOntainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgStyle: {
    height:  wp(20),
    width: wp(20),
    borderRadius:  wp(4),
  },
  detailContainer: {
    width: isTablet ? wp(60) : wp(55),
    flexDirection: 'column',
    paddingVertical: rhp(5),
    paddingHorizontal: rwp(10),
  },
  poemName: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
       fontSize:wp(6),

    letterSpacing: 2,
  },
  poemDuration: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.ORANGE.mildOrange,
        fontSize:wp(4),

    letterSpacing: 1,
    marginVertical: rhp(10),
  },
  iconStyle: {
           fontSize:wp(5),

    marginTop: isTablet ? rhp(5) : rhp(2),
    marginHorizontal: isTablet ? rwp(5) : rwp(2),
  },
  iconStyle2: {
        fontSize:wp(5),

    marginTop: isTablet ? rhp(5) : rhp(2),
    marginHorizontal: isTablet ? rwp(10) : rwp(10),
  },
});
