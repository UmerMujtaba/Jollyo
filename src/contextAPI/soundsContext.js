import React, {createContext, useState, useEffect} from 'react';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export const SoundContext = createContext();

export const SoundProvider = ({children}) => {
  const [sounds, setSounds] = useState({});

  const loadSound = soundFile => {
    return new Promise((resolve, reject) => {
      const sound = new Sound(soundFile, error => {
        console.log('🚀 ~ sound ~ soundFile:', soundFile);
        if (error) {
          console.error('Failed to load sound', error);
          reject(error);
        } else {
          resolve(sound);
        }
      });
      console.log('🚀 ~ sound ~ soundFile:', soundFile);
    });
  };

  const playSound = async soundFile => {
    try {
      const sound = await loadSound(soundFile);
      console.log('🚀 ~ playSound ~ sound:', sound);
      sound.play(success => {
        if (success) {
          console.log('Playback finished successfully');
        } else {
          console.error('Playback failed due to audio decoding errors');
        }
        sound.release();
      });
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  return (
    <SoundContext.Provider value={{playSound}}>
      {children}
    </SoundContext.Provider>
  );
};
