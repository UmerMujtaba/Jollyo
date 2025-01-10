import {StyleSheet} from 'react-native';
import {isTablet, rfs, rhp, rwp, wp} from '../../../../constants/dimensions';
import fonts from '../../../../constants/fonts';
import {colors} from '../../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: rhp(20),
  },
  appBarView: {
    marginTop: isTablet ? rhp(20) : rhp(10),
  },
  appBarTitle: {
    fontSize: rfs(26),
  },
  columnWrapperStyle: {
    flexDirection: 'row',
    marginBottom: rhp(20),
  },
  contentContainerStyle: {
    paddingVertical: rhp(20),
    paddingBottom: rhp(300),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: rwp(15),
    marginTop: rhp(20),
  },
  headerText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    fontSize: rfs(24),
    letterSpacing: 2,
  },
  roundedContainer: {
    marginTop: rhp(20),
    height: rhp(48),
    width: wp(90),
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: rwp(10),
  },
  iconStyle: {
    fontSize: rfs(24),
    marginTop: rhp(2),
    marginHorizontal: rwp(5),
  },
  textInput: {
    flex: 1,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    color: colors.darkOrange,
    fontSize: rfs(16),
    letterSpacing: 2,
    paddingHorizontal: rwp(5),
  },
  absoluteView: {
    backgroundColor: 'red',
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    height: rhp(60),
    width: rhp(60),
    borderRadius: rhp(30),
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: isTablet ? rhp(300) : rhp(270),
    zIndex: 1,
    right: rwp(30),
    // transform: [{translateX: '-50%'}, {translateY: '-50%'}],
  },
  nameTitle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.white,
    fontSize: rfs(20),
    letterSpacing: 2,
    paddingHorizontal: rwp(20),
  },
});
