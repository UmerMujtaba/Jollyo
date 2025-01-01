import {StyleSheet} from 'react-native';
import {rhp} from '../../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.backgroundClr,
    paddingTop: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    marginTop: rhp(20),
    marginBottom: rhp(20),
  },
  contentContainerStyle: {
    paddingVertical: rhp(20),
    paddingBottom: rhp(100),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
