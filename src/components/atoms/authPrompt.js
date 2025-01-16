import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {isTablet, rfs, rhp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';

const AuthPrompt = ({onPress, title, buttonText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    color: colors.ORANGE.blackishOrange,
    fontSize: rfs(18),
    lineHeight: isTablet ? rhp(21.56) : rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Regular,
  },
  btnText: {
    color: colors.ORANGE.darkOrange,
    fontSize: rfs(18),
    lineHeight: isTablet ? rhp(21.56) : rhp(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});
export default AuthPrompt;
