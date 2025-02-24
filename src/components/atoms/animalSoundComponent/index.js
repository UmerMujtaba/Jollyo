import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    TouchableOpacity,
    View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import { images } from '../../../assets/images';
import { colors } from '../../../constants/colors';
import { rhp } from '../../../constants/dimensions';
import { useNetworkImageHandler } from '../../../hooks';
import { styles } from './styles';

Sound.setCategory('Playback');

let currentSoundInstance = null;
export const AnimalSoundComponent = ({
  letter,
  soundFile,
  URI,
  playingSound,
  setPlayingSound,
  currentSound,
  setCurrentSound,
  onPress,
}) => {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const loadSound = () => {
      setIsLoading(true);

      const s = new Sound(soundFile, '', error => {
        if (error) {
          console.error(`Failed to load sound for ${letter}:`, error);
          setIsLoading(false);
        } else {
          console.log(`Loaded sound for letter ${letter}`);
          setSound(s);
          setIsLoading(false);
        }
      });
    };

    loadSound();

    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [letter, soundFile]);

  const stopCurrentSound = callback => {
    if (currentSound) {
      currentSound.stop(() => {
        currentSound.release();
        setCurrentSound(null);
        callback && callback();
      });
    } else {
      callback && callback();
    }
  };

  const playSound = () => {
    setPlayingSound(letter);
    sound.play(success => {
      if (success) {
        console.log(`Playback finished for ${letter}`);
      } else {
        console.error('Playback failed due to audio decoding errors.');
      }
      setPlayingSound(null);
    });
  };

  const playPause = () => {
    if (isButtonDisabled) return;
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 1000);

    if (!isConnected) {
      Alert.alert(
        'No Internet Connection',
        'Please check your connection and try again.',
        [{text: 'OK'}],
      );
      return;
    }

    stopCurrentSound(() => {
      setCurrentSound(sound);
      playSound();
    });
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color={colors.ORANGE.darkOrange} />;
  }

  return (
    <View
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress || playPause}>
      <TouchableOpacity
        style={[
          styles.container,
          {
            height: rhp(150),
            backgroundColor: colors.BLUE.secondary,
            borderTopColor: 'orange',
            borderLeftColor: 'orange',
            borderRightColor: 'orange',
            borderBottomColor: 'white',
            justifyContent: 'center',
          },
        ]}
        activeOpacity={0.7}
        onPress={onPress || playPause}>
        <FastImage
          defaultSource={images.defaultImg}
          source={imageError || !isConnected ? images.defaultImg : {uri: URI}}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.img}
          onError={() => setImageError(true)}
        />
      </TouchableOpacity>
    </View>
  );
};

