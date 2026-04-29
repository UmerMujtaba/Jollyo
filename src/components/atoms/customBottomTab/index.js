import { MaterialIcons } from '@react-native-vector-icons/material-icons';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { hp, soundAssets, wp } from '../../../constants';
import { useSound } from '../../../hooks';
import { styles } from './styles';

export const CustomBottomTab = ({ onNext, onBack, onSpeak }) => {
  const playSound = useSound(soundAssets.click);
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
          onPress={handleBack}
        >
          <MaterialIcons name={'arrow-back'} color={'white'} size={wp(6)} />
        </TouchableOpacity>
      </TouchableOpacity>

      {onSpeak && (
        <TouchableOpacity onPress={handleOnSpeak} style={styles.tabButton}>
          <TouchableOpacity
            style={[styles.tabButton, styles.tabButtonInside]}
            onPress={handleOnSpeak}
          >
            <FastImage
              source={images.icons.speakIcon}
              style={{ resizeMode: 'contain', height: hp(3.5), width: wp(3.5) }}
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
          onPress={handleNext}
        >
          <MaterialIcons name={'arrow-forward'} color={'white'} size={wp(6)} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};
