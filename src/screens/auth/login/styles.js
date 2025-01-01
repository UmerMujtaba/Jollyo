import {StyleSheet} from 'react-native';
import {hp, rfs, rhp, rwp, wp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr
  },
  imgStyle: {
    resizeMode: 'contain',
    height: rhp(300),
    width: rwp(300),
    alignSelf: 'center',
  },
});
