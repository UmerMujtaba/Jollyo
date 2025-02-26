import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Sound from 'react-native-sound';
import { styles } from './styles';
import { useSound } from '../../../hooks';

Sound.setCategory('Playback');

export const TouchableButton = ({
  onPress,
  title,
  btnPropStyle,
  btnInside,
  btnTextProp,
}) => {
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

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

