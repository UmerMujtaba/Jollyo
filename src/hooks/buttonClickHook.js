import {useCallback} from 'react';
import Sound from 'react-native-nitro-sound';

export const useSound = soundUrl => {
  const playSound = useCallback(async () => {
    try {
      if (soundUrl) {
        await Sound.startPlayer(soundUrl);
        console.log('Playback started for:', soundUrl);
      }
    } catch (error) {
      console.log('Error playing sound', error);
    }
  }, [soundUrl]);

  return playSound;
};

export default useSound;