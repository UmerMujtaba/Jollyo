import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import Sound from 'react-native-nitro-sound';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({children}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return () => {
      Sound.stopPlayer();
      Sound.removePlayBackListener();
    };
  }, []);

  const loadSound = async url => {
    try {
      await Sound.startPlayer(url);
      setIsPlaying(true);
      
      Sound.addPlayBackListener(e => {
        const currentSecs = e.currentPosition / 1000;
        const durationSecs = e.duration / 1000;
        
        setCurrentTime(currentSecs);
        setDuration(durationSecs);
        setProgress(e.currentPosition / e.duration);
        
        if (e.currentPosition >= e.duration - 100) { // Some tolerance
          setIsPlaying(false);
          Sound.stopPlayer();
        }
      });
    } catch (error) {
      console.log('Error loading sound', error);
    }
  };

  const stopSound = async () => {
    await Sound.stopPlayer();
    setIsPlaying(false);
    Sound.removePlayBackListener();
  };

  const togglePlayPause = async () => {
    try {
      if (isPlaying) {
        await Sound.pausePlayer();
        setIsPlaying(false);
      } else {
        await Sound.resumePlayer();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Error toggling play/pause', error);
    }
  };

  const skipForward = async () => {
    try {
      let newPosition = (currentTime + 20) * 1000;
      if (newPosition > duration * 1000) newPosition = duration * 1000;
      await Sound.seekToPlayer(newPosition);
    } catch (error) {
      console.log('Error skipping forward', error);
    }
  };

  const skipBackward = async () => {
    try {
      let newPosition = (currentTime - 10) * 1000;
      if (newPosition < 0) newPosition = 0;
      await Sound.seekToPlayer(newPosition);
    } catch (error) {
      console.log('Error skipping backward', error);
    }
  };

  const onSeek = async value => {
    try {
      await Sound.seekToPlayer(value * 1000);
      setCurrentTime(value);
    } catch (error) {
      console.log('Error seeking', error);
    }
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        sound: {
          stop: async () => {
            await Sound.stopPlayer();
            setIsPlaying(false);
          },
        },
        isPlaying,

        currentTime,
        duration,
        progress,
        loadSound,
        stopSound,
        setCurrentTime,
        setProgress,
        setDuration,
        setIsPlaying,
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
