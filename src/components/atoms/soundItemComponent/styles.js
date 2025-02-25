import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  hp,
  isTablet,
  rfs,
  rhp,
  rwp,
  wp
} from '../../../constants';

export const styles = StyleSheet.create({
  container: {
      height: isTablet ? hp(30) : hp(28),
      width: isTablet ? wp(42) : wp(45),
      backgroundColor: colors.ORANGE.pureOrangeWithOpacity,
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      marginBottom: rhp(20),
      marginHorizontal: isTablet ? rwp(12) : rwp(8),
    },
    imgStyle: {
      height: isTablet ? rhp(200) : rhp(180),
      width: isTablet ? wp(42) : wp(45),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 5,
    },
    titleStyle: {
      fontFamily: fonts.SF_PRO_TEXT.Fredoka.CondensedSemiBold,
      letterSpacing: isTablet ? 5 : 3,
      color: 'white',
      paddingVertical: rhp(10),
      fontSize: rfs(24),
    },
});
