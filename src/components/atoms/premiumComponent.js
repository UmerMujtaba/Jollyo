import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {isTablet, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {TouchableButton} from './button';

const PremiumComponent = ({month, price, sub, btnTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerHeading}>{month}</Text>
      </View>
      <Text style={styles.priceText}>{`Rs ${price}`}</Text>
      <Text style={styles.sub}>{sub}</Text>
      <TouchableButton
        btnInside={{width: wp(20), height: rhp(34)}}
        btnPropStyle={{width: wp(20), height: rhp(40)}}
        title={btnTitle}
        btnTextProp={{fontSize: rfs(16)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: isTablet ? rwp(120) : rwp(140),
    height: rhp(170),
    borderWidth: 1,
    borderColor: colors.yellow,
    borderRadius: 24,
    // marginHorizontal: rwp(5),
    marginLeft: rwp(10),
  },
  topContainer: {
    width: 'auto',
    height: rhp(50),
    backgroundColor: colors.yellow,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainerHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    fontSize: rfs(20),
    letterSpacing: 1,
    color: colors.backgroundClr,
  },
  priceText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(18),
    letterSpacing: 1,
    color: colors.blacK,
    textAlign: 'center',
    paddingTop: rhp(10),
  },
  sub: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(16),
    letterSpacing: 1,
    color: colors.grey,
    textAlign: 'center',
    paddingTop: rhp(5),
    marginBottom: rhp(10),
  },
});
export default PremiumComponent;
