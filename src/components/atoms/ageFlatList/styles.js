import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp,
  rwp
} from '../../../constants';


const ITEM_WIDTH = rwp(60);
export const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: colors.PINK.darkPink,
    height: rhp(80),
    width: rhp(80),
    borderRadius: rhp(40),
  },
  text: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(32),
  },
  selectedText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(32),
  },
  selectedTextDisplay: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(24),
    textAlign: 'center',
    marginTop: rhp(5),
  },
});