import {StyleSheet} from 'react-native';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';
import {rfs, rhp, rwp} from '../../../constants/dimensions';


export const styles = StyleSheet.create({
  container: {
    height: rhp(160),
    width: rwp(158),
    backgroundColor: colors.BLUE.secondary,
    borderRadius: 12,
  },
  img: {
    resizeMode: 'cover',
    height: rhp(160),
    width: rwp(155),
    borderRadius: 12,
  },
  imgURI: {
    position: 'absolute',
    // resizeMode: 'cover',
    top: 5,
    height: rhp(150),
    width: rwp(158),
    alignSelf: 'center',
    borderRadius: 12,
  },
});
