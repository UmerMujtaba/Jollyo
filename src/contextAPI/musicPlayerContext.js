import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from 'react';
import Sound from 'react-native-sound';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({children}) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const soundRef = useRef(null);

  useEffect(() => {
    return () => {
      if (sound) {
        sound.release();
      }
    };
  }, [sound]);

  const loadSound = url => {
    const newSound = new Sound(url, null, error => {
      if (error) {
        console.log('Error loading sound', error);
        return;
      }
      setDuration(newSound.getDuration());
      setSound(newSound);

      if (newSound) {
        newSound.play(() => {
          setIsPlaying(true);
        });
      }
    });
    soundRef.current = newSound;
  };

  const togglePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play(() => setIsPlaying(false));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const skipForward = () => {
    if (sound) {
      let newPosition = currentTime + 20;
      if (newPosition > duration) newPosition = duration;
      sound.setCurrentTime(newPosition);
      setCurrentTime(newPosition);
    }
  };

  const skipBackward = () => {
    if (sound) {
      let newPosition = currentTime - 10;
      if (newPosition < 0) newPosition = 0;
      sound.setCurrentTime(newPosition);
      setCurrentTime(newPosition);
    }
  };

  const onSeek = value => {
    if (sound) {
      sound.setCurrentTime(value);
      setCurrentTime(value);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        sound.getCurrentTime(currentTime => {
          setCurrentTime(currentTime);
          setProgress(currentTime / duration);
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound, isPlaying, duration]);

  return (
    <MusicPlayerContext.Provider
      value={{
        sound,
        isPlaying,
        currentTime,
        duration,
        progress,
        loadSound,
        setCurrentTime,
        setProgress,
        setDuration,
        togglePlayPause,
        skipForward,
        skipBackward,
        onSeek,
      }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};
