import {StyleSheet} from 'react-native';
import {hp, isTablet, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr
  },
  imgStyle: {
    // resizeMode: 'cover',
    // height: isTablet ? rhp(300) : rhp(300),
    // width: isTablet ? rwp(300) : rwp(300),
    height: rhp(300),
    width: rwp(300),
    alignSelf: 'center',
  },
});
