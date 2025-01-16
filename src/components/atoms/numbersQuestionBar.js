import crashlytics from '@react-native-firebase/crashlytics';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Tts from 'react-native-tts';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
const NumbersQuestionBar = ({title, name}) => {
  const handleSpeakerPress = () => {
    Tts.speak(title);
    Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
    Tts.setDefaultPitch(0.7);
    Tts.setDefaultRate(0.3, true);

    crashlytics().crash();
    crashlytics().log('🚀 ~ handleSpeakerPress Button was pressed!');
  };

  return (
    <View style={styles.questionRow}>
      <TouchableOpacity style={styles.btn} onPress={handleSpeakerPress}>
        <View style={[styles.btn, styles.btnInside]}>
          <FastImage
            source={images.icons.loudSpeaker}
            style={styles.backIconStyle}
            resizeMode={FastImage.resizeMode.contain}
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
    backgroundColor: colors.ORANGE.blackishOrange,
    height: isTablet ? rhp(45) : rhp(50),
    width: isTablet ? rwp(35) : rwp(45),
    borderRadius: 16,
  },
  btnInside: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.ORANGE.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  question: {
    fontSize: rfs(32),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.ORANGE.darkOrange,
    paddingHorizontal: 20,
  },
});
export default NumbersQuestionBar;
