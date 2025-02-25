import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  isTablet,
  rfs,
  rhp,
  rwp
} from '../../../constants';
export const styles = StyleSheet.create({
  questionRow: {
    marginTop: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  btn: {
    backgroundColor: colors.ORANGE.blackishOrange,
    height: isTablet ? rhp(45) : rhp(50),
    width: isTablet ? rwp(35) : rwp(45),
    borderRadius: 16,
  },
  btnInside: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  question: {
    fontSize: rfs(32),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    paddingHorizontal: 20,
  },
});
