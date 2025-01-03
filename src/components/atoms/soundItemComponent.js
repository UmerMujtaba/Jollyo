import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';

const SoundItemComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.container, styles.bgCon]}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(95),
    backgroundColor: colors.blackishOrange,
    height: rhp(94),
    borderRadius: isTablet ? 30 : 20,
    marginBottom: rhp(20),
  },
  bgCon: {
    height: rhp(84),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  titleStyle: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(24),
    color: colors.white,
    textAlign: 'center',
  },
});

export default SoundItemComponent;
