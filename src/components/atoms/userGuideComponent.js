import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {isTablet, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';

const UserGuideComponent = ({count, title, subTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.countRow}>
        <View style={styles.line}></View>
        <View style={styles.dottedBorderContainer}>
          <View style={styles.borderContainer}>
            <View style={styles.filledContainer}>
              <Text style={styles.countText}>{count}</Text>
            </View>
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subHeading}>{subTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignSelf: 'center',
    marginTop: rhp(30),
    width: wp(80),
  },
  countRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },
  line: {
    height: rhp(1),
    width: rwp(110),
    backgroundColor: colors.darkOrange,
  },
  dottedBorderContainer: {
    height: isTablet ? rwp(30) : rwp(50),
    width: isTablet ? rwp(30) : rwp(50),
    borderRadius: isTablet ? rwp(15) : rwp(25),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderContainer: {
    height: isTablet ? rwp(22) : rwp(35),
    width: isTablet ? rwp(22) : rwp(35),
    borderRadius: isTablet ? rwp(11) : rwp(17.5),
    borderWidth: isTablet ? 2 : 1,
    borderColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledContainer: {
    height: isTablet ? rwp(16) : rwp(20),
    width: isTablet ? rwp(16) : rwp(20),
    borderRadius: isTablet ? rwp(8) : rwp(10),
    backgroundColor: colors.darkOrange,
    justifyContent: 'center',
  },
  countText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    color: colors.white,
    fontSize: rfs(12),
    textAlign: 'center',
  },
  heading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    textAlign: 'center',
    fontSize: rfs(24),
  },
  subHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
    color: colors.white,
    // textAlign: 'center',
    fontSize: rfs(16),
    marginTop: rhp(10),
  },
});

export default UserGuideComponent;
