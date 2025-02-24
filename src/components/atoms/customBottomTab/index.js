import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { images } from '../../../assets/images';
import useSound from '../../../hooks/buttonClickHook';
import { rfs, rhp, rwp } from '../../../constants/dimensions';
import { styles } from './styles';

Sound.setCategory('Playback');

export const CustomBottomTab = ({onNext, onBack, onSpeak}) => {
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );
  const handleNext = () => {
    playSound();
    onNext();
  };

  const handleBack = () => {
    playSound();
    onBack();
  };
  const handleOnSpeak = () => {
    playSound();
    onSpeak();
  };
  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity onPress={handleBack} style={styles.tabButton}>
        <TouchableOpacity
          style={[styles.tabButton, styles.tabButtonInside]}
          onPress={handleBack}>
          <Ionicons name={'arrow-back'} color={'white'} size={rfs(24)} />
        </TouchableOpacity>
      </TouchableOpacity>

      {onSpeak && (
        <TouchableOpacity onPress={handleOnSpeak} style={styles.tabButton}>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButtonInside]}
            onPress={handleOnSpeak}>
            <FastImage
              source={images.icons.speakIcon}
              style={{resizeMode: 'contain', height: rhp(20), width: rwp(20)}}
            />
            {/* {isPlaying ? (
            <Ionicons name={'pause-outline'} color={'white'} size={rfs(24)} />
          ) : (
            <Ionicons name={'play-outline'} color={'white'} size={rfs(24)} />
          )} */}
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleNext} style={styles.tabButton}>
        <TouchableOpacity
          style={[styles.tabButton, styles.tabButtonInside]}
          onPress={handleNext}>
          <Ionicons name={'arrow-forward'} color={'white'} size={rfs(24)} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
