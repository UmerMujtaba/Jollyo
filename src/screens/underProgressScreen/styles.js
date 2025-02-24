import {StyleSheet} from 'react-native';
import { hp, wp } from '../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  body: {
    alignItems: 'center',
  },
  progressImg: {
    width: '100%',
    height: hp(80),
    alignSelf: 'center',
  },
});
