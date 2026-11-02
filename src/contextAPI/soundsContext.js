import React, {createContext} from 'react';
import Sound from 'react-native-nitro-sound';

export const SoundContext = createContext();

export const SoundProvider = ({children}) => {
  const playSound = async soundFile => {
    try {
      console.log('🚀 ~ playSound ~ soundFile:', soundFile);
      await Sound.startPlayer(soundFile);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <SoundContext.Provider value={{playSound}}>
      {children}
    </SoundContext.Provider>
  );
};

