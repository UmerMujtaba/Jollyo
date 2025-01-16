import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../../constants/colors';
import {isTablet, rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
  },
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.WHITE.disabled,
    alignSelf: 'flex-end',
    marginTop: rhp(10),
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
  bottomBody: {
    paddingHorizontal: rwp(10),
  },
  question: {
    fontSize: rfs(24),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  exerciseContainer: {
    marginVertical: rhp(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rwp(8),
  },
  exerciseText: {
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
  },

  exerciseCountText: {
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.PURPLE.backgroundClr,
  },
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
    // resizeMode: 'contain',
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

  progressBarContainer: {
    width: '98%',
    alignSelf: 'center',
    height: rhp(10),
    backgroundColor: colors.WHITE.disabled,
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.PURPLE.backgroundClr,
  },
  fireworksAnimation: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    position: 'absolute',
    zIndex: 1,
  },

  gameContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  gameCard: {
    alignItems: 'center',
    marginBottom: 20,
  },
  gameImage: {
    width: isTablet ? rwp(120) : rwp(140),
    height: isTablet ? rhp(120) : rhp(140),
    margin: 16,
    borderRadius: isTablet ? rhp(40) : rwp(20),
  },
  checkbox: pressed => ({
    borderRadius: rwp(8),
    width: isTablet ? rwp(135) : rwp(170),
    height: isTablet ? rhp(135) : rhp(170),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.46,
    transform: [{scale: pressed ? 0.9 : 1}, {translateY: pressed ? 4 : 0}],
    transition: 'all 0.1s ease',
  }),

  checkedGreen: {
    backgroundColor: colors.GREEN.parrot,
  },

  checkedRed: {
    backgroundColor: colors.RED.red,
  },

  btnStyle: {
    width: wp(45),
    height: rhp(50),
    backgroundColor: colors.ORANGE.blackishOrange,
    // alignSelf: 'center',
    borderRadius: 16,
    flexDirection: 'row',
  },
  btnText: {
    width: '60%',
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.WHITE.white,
    alignSelf: 'center',
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  noGame: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.ORANGE.darkOrange,
  },
});
