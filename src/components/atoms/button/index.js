import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useSound } from '../../../hooks';
import { soundAssets } from '../../../constants';



export const TouchableButton = ({
  onPress,
  title,
  btnPropStyle,
  btnInside,
  btnTextProp,
}) => {
  const playSound = useSound(soundAssets.click);

  const handlePress = () => {
    playSound();

    if (onPress) {
      setTimeout(() => {
        onPress();
      }, 600);
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.btnStyle, btnPropStyle]}>
      <View style={[styles.btnStyle, styles.insideBtnStyle, btnInside]}>
        <Text style={[styles.btnText, btnTextProp]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

