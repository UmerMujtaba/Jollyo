import {StyleSheet} from 'react-native';
import {isTablet, rfs, rhp, rwp} from '../../../constants/dimensions';
import {colors} from '../../../constants/colors';
import fonts from '../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: rwp(10),
    marginTop: isTablet ? rhp(10) : rhp(15),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    height: isTablet ? rhp(45) : rhp(50),
    backgroundColor: colors.ORANGE.blackishOrange,
    borderRadius: 16,
  },
  insideBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },

  questionBtnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.PINK.darkPink,
    height: isTablet ? rhp(45) : rhp(50),
    alignSelf: 'flex-end',
    borderRadius: 16,
  },
  insideQuestionBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.PINK.lightPink,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  textWrapper: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.WHITE.white,
    fontSize: isTablet ? rfs(24) : rfs(22),
  },
});
