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
import { isIOS } from '../../../constants/dimensions';

export const styles = StyleSheet.create({
  container: {
      height: hp(26),
           width:  wp(45),

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
      height:  hp(20),
      width:  wp(45),
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
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
      letterSpacing: 3,
      color: 'white',
      paddingVertical: rhp(10),
      fontSize: wp(5.5),
    },
});
