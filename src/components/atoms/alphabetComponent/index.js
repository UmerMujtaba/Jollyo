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

export const AlphabetComponent = ({
  letter,
  soundFile,
  URI,
  playingSound,
  setPlayingSound,
  onPress,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  useEffect(() => {
    let listener;
    if (isPlaying) {
      listener = Sound.addPlaybackEndListener(() => {
        setIsPlaying(false);
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
  }, [isPlaying, setPlayingSound]);

  const playPause = async () => {
    if (!isConnected) {
      // Alert the user about the lack of internet connection
      Alert.alert(
        'No Internet Connection',
        'Please check your connection and try again.',
        [{text: 'OK'}],
        {cancelable: false},
      );
      return;
    }
    if (isPlaying) {
      console.log('Sound is already playing. Please wait for it to finish.');
      return;
    }

    if (playingSound && playingSound !== letter) {
      console.log('Another sound is already playing. Please wait.');
      return;
    }

    try {
      setIsPlaying(true);
      setPlayingSound(letter);
      await Sound.startPlayer(soundFile);
      console.log(`Playback started for ${letter}`);
    } catch (error) {
      console.error(`Failed to play sound for letter ${letter}:`, error);
      setIsPlaying(false);
      setPlayingSound(null);
    }
  };

  if (!isConnected) {
    return (
      <ActivityIndicator size={'large'} color={colors.ORANGE.darkOrange} />
    );
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
