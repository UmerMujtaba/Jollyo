import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';
import { hp, rhp } from '../../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp(10),
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.WHITE.disabled,
    alignSelf: 'flex-end',
    marginTop: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  bodyInside: {
    flex: 1,
    marginTop: rhp(8),
    backgroundColor: colors.WHITE.white,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
