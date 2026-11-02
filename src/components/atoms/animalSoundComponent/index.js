import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  View
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-nitro-sound';
import { images } from '../../../assets/images';
import {
  colors,
  rhp
} from '../../../constants';
import { useNetworkImageHandler } from '../../../hooks';
import { styles } from './styles';

export const AnimalSoundComponent = ({
  letter,
  soundFile,
  URI,
  setPlayingSound,
  onPress,
}) => {
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    let listener;
    const setupListener = () => {
      listener = Sound.addPlaybackEndListener(() => {
        setPlayingSound(null);
        if (listener) {
          Sound.removePlaybackEndListener(listener);
        }
      });
    }

    return () => {
      if (listener) {
        Sound.removePlaybackEndListener(listener);
      }
    };
  }, [setPlayingSound]);

  const playPause = async () => {
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

    try {
      setPlayingSound(letter);
      await Sound.startPlayer(soundFile);
    } catch (error) {
      console.error(`Failed to play sound for ${letter}:`, error);
      setPlayingSound(null);
    }
  };


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

