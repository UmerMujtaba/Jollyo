import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { isTablet, rhp, wp } from '../../../constants/dimensions';

export const ToggleView = () => {
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
