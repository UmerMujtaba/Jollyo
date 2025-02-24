import {StyleSheet} from 'react-native';
import fonts from '../../../constants/fonts';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';

export const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rwp(20),
    backgroundColor: 'orange',
    height: rhp(65),
    borderTopLeftRadius: 30,
    borderColor: 'transparent',
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    height: isTablet ? rhp(45) : rhp(50),
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.ORANGE.blackishOrange,
    // height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
  },
  tabButtonInside: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
