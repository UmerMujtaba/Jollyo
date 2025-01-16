import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {rhp, rwp} from '../../constants/dimensions';
import {useNetworkImageHandler} from '../../hooks';

Sound.setCategory('Playback');

const AlphabetComponent = ({
  letter,
  soundFile,
  URI,
  playingSound,
  setPlayingSound,
  onPress,
}) => {
  const [sound, setSound] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  useEffect(() => {
    const loadSound = () => {
      setIsLoading(true);
      const s = new Sound(soundFile, '', error => {
        if (error) {
          console.log('Failed to load sound:', error);

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

  const playPause = () => {
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

    if (sound) {
      setIsPlaying(true);
      setPlayingSound(letter);
      sound.play(success => {
        if (success) {
          console.log(`Playback finished successfully for ${letter}`);
        } else {
          console.error('Playback failed due to audio decoding errors');
          console.log('Playback failed due to audio decoding errors');
        }
        setIsPlaying(false);
        setPlayingSound(null);
      });
    } else {
      console.error(`No sound loaded for letter ${letter}`);
      console.log(`No sound loaded for letter ${letter}`);
    }
  };

  if (isLoading && !isConnected) {
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

const styles = StyleSheet.create({
  container: {
    height: rhp(160),
    width: rwp(158),
    backgroundColor: colors.BLUE.secondary,
    borderRadius: 12,
  },
  img: {
    resizeMode: 'cover',
    height: rhp(160),
    width: rwp(155),
    borderRadius: 12,
  },
  imgURI: {
    position: 'absolute',
    // resizeMode: 'cover',
    top: 5,
    height: rhp(150),
    width: rwp(158),
    alignSelf: 'center',
    borderRadius: 12,
  },
});

export default AlphabetComponent;
