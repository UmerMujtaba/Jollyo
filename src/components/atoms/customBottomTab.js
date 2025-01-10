import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import useSound from '../../hooks/buttonClickHook';

Sound.setCategory('Playback');

const CustomBottomTab = ({onNext, onBack, onSpeak}) => {
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

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rwp(20),
    backgroundColor: 'orange',
    height: rhp(65),
    borderTopLeftRadius: 30,
    borderColor: 'transparent',
    borderTopRightRadius: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  tabButton: {
    alignItems: 'center',
    height: isTablet ? rhp(45) : rhp(50),
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.blackishOrange,
    // height: rhp(50),
    alignSelf: 'center',
    borderRadius: 12,
  },
  tabButtonInside: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
});

export default CustomBottomTab;
