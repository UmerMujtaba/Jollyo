import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

export const TouchableButton = ({onPress, title, btnPropStyle, btnInside}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, btnPropStyle]}>
      <View style={[styles.btnStyle, styles.insideBtnStyle, btnInside]}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    width: wp(90),
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    // justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.white,
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
