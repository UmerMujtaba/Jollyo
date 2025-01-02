import {Dimensions, Platform, StyleSheet} from 'react-native';
import {isTablet, rfs, rhp, rwp, width} from '../../../constants/dimensions'; // Make sure these constants are correct
import {colors} from '../../../constants/colors'; // Make sure the color constants are defined
import fonts from '../../../constants/fonts'; // Make sure your fonts are defined if needed

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundClr, // You can change this to a different background color if needed
  },
  topCircle: {
    backgroundColor: 'white',
    // backgroundColor: isTablet ? colors.backgroundClr : colors.red,
    height: rwp(500),
    width: rwp(500),
    borderRadius: rwp(250),
    overflow: 'hidden',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 0,
    top: isTablet ? rhp(-270) : rhp(-100),
    // top: rwp(-100),
  },
  carouselImg: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height * 0.37,
    marginBottom: 30,
  },

  carouserTitle: {
    fontSize: rfs(32),
    textAlign: 'center',
    color: 'orange',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    marginBottom: rhp(20),
    marginTop: rhp(60),
  },
  carouserSubTitle: {
    fontSize: rfs(26),
    textAlign: 'center',
    color: 'white',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    marginBottom: rhp(20),
  },
  renderItem_parentView1: {
    marginTop: rhp(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: rwp(20),
    width: Dimensions.get('screen').width * 0.9,
  },
  dotsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: rhp(10),
    marginBottom: rhp(40),
  },
  dotColor: (index, currentIndex) => ({
    height: isTablet ? rwp(8) : rwp(10),
    width: isTablet ? rwp(8) : rwp(10),
    backgroundColor: currentIndex == index ? colors.darkOrange : 'white',
    marginHorizontal: rwp(5),
    alignSelf: 'center',
    borderRadius: isTablet ? rwp(4) : rwp(5),
    elevation: 5,
  }),
});
