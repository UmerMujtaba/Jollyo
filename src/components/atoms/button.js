import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import Sound from 'react-native-sound';
import useSound from '../../hooks/buttonClickHook';

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

const styles = StyleSheet.create({
  btnStyle: {
    width: wp(90),
    backgroundColor: colors.ORANGE.blackishOrange,
    height: rhp(50),
    alignSelf: 'center',
    borderRadius: 16,
    // justifyContent: 'center'
  },
  btnText: {
    textAlign: 'center',
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
    fontSize: rfs(20),
    color: colors.WHITE.white,
  },
  insideBtnStyle: {
    height: rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});
