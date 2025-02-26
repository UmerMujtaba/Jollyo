import {useState, useEffect, useCallback} from 'react';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

export const useSound = soundUrl => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const newSound = new Sound(soundUrl, null, error => {
      if (error) {
        console.log('Error loading sound', error);
      } else {
        setSound(newSound);
      }
    });

    return () => {
      if (newSound) {
        newSound.release();
      }
    };
  }, [soundUrl]);

  const playSound = useCallback(() => {
    if (sound) {
      sound.play(success => {
        if (!success) {
          console.log('Playback failed due to audio decoding errors');
        }
      });
    }
  }, [sound]);

  return playSound;
};

export default useSound;