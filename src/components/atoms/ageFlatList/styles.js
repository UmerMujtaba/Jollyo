import { StyleSheet } from 'react-native';
import {
  colors,
  fonts,
  rfs,
  rhp,
  rwp,
  wp
} from '../../../constants';


const ITEM_WIDTH = wp(20);
export const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: colors.PINK.darkPink,
    height: ITEM_WIDTH, 
    width: ITEM_WIDTH,
    borderRadius: ITEM_WIDTH / 2,
  },
  text: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(6),
  },
  selectedText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(6),
    textAlign: 'center',
    // marginTop: rhp(10),

  },
  selectedTextDisplay: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: rfs(6),
    textAlign: 'center',
    marginTop: rhp(10),
  },
});