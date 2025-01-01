import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import {Strings} from '../../constants/strings';
import {rfs, rhp, rwp, wp} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';
import Tts from 'react-native-tts';
import FastImage from 'react-native-fast-image';

const NumbersQuestionBar = ({title, name}) => {
  const handleSpeakerPress = () => {
    Tts.speak(title);
    Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
    Tts.setDefaultPitch(0.7);
    Tts.setDefaultRate(0.5, true);
  };

  return (
    <View style={styles.questionRow}>
      <TouchableOpacity style={styles.btn} onPress={handleSpeakerPress}>
        <View style={[styles.btn, styles.btnInside]}>
          <FastImage
            source={images.icons.loudSpeaker}
            style={styles.backIconStyle}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.question}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  questionRow: {
    marginTop: rhp(20),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
  },
  btn: {
    backgroundColor: colors.blackishOrange,
    height: rhp(50),
    width: wp(12),
    borderRadius: 16,
  },
  btnInside: {
    height: rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    resizeMode: 'contain',
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  question: {
    fontSize: rfs(32),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    paddingHorizontal: 20,
  },
});
export default NumbersQuestionBar;
