import crashlytics from '@react-native-firebase/crashlytics';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Tts from 'react-native-tts';
import { images } from '../../../assets/images';
import { styles } from './styles';
export const NumbersQuestionBar = ({title, name}) => {
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
