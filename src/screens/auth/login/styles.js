import {StyleSheet} from 'react-native';
import {hp, isTablet, rfs, rhp, rwp, wp} from '../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: hp(35),
    width: wp(100),
    position: 'absolute',
    bottom: -25,
    alignSelf: 'flex-end',
  },
});
