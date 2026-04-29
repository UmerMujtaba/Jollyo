import { StyleSheet } from 'react-native';
import { hp, rhp } from '../../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr,
    paddingTop: hp(8),
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginTop: rhp(20),
    marginBottom: rhp(20),
  },
  contentContainerStyle: {
    paddingVertical: rhp(20),
  },
});
