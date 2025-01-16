import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {isTablet, rfs, rhp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';

const ToggleView = () => {
  const [currentText, setCurrentText] = useState('COVER');
  const [position, setPosition] = useState('COVER');

  const toggleText = () => {
    setCurrentText(currentText === 'COVER' ? 'LYRICS' : 'COVER');
    setPosition(position === 'COVER' ? 'LYRICS' : 'COVER');
  };

  const greenViewStyle = {
    transform: [
      {
        translateX: position === 'COVER' ? 0 : wp(22),
      },
    ],
    borderWidth: isTablet ? 1 : 0.5,
    borderColor: colors.GREY.grey,
    backgroundColor: colors.GREY.greyWithOpacity,
    borderRadius: 40,
    height: rhp(35),
    width: wp(22),
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={greenViewStyle} onPress={toggleText}>
        <Text style={styles.activeText}>{currentText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: isTablet ? 1 : 0.5,
    borderColor: colors.GREY.grey,
    height: rhp(35),
    width: wp(44),
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },

  activeText: {
    color: colors.BLACK.pureBlack,
    textAlign: 'center',
    fontSize: isTablet ? rfs(18) : rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});

export default ToggleView;
