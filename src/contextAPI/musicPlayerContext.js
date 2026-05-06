import React, { createContext, useState, useContext, useEffect } from 'react';
import Sound from 'react-native-nitro-sound';

const MusicPlayerContext = createContext();

export const MusicPlayerProvider = ({ children }) => {
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

  const loadSound = React.useCallback(async url => {
    try {
      // Clear previous state and listener
      await Sound.stopPlayer();
      Sound.removePlayBackListener();
      setCurrentTime(0);
      setProgress(0);
      setDuration(0);

      await Sound.startPlayer(url);
      await Sound.setSubscriptionDuration(0.1); // Update every 100ms
      setIsPlaying(true);

      Sound.addPlayBackListener(e => {
        if (e.duration > 0) {
          const currentSecs = e.currentPosition / 1000;
          const durationSecs = e.duration / 1000;

          setCurrentTime(currentSecs);
          setDuration(durationSecs);
          setProgress(e.currentPosition / e.duration);

          if (e.currentPosition >= e.duration - 100) {
            setIsPlaying(false);
            Sound.stopPlayer();
            Sound.removePlayBackListener();
          }
        }
      });
    } catch (error) {
      console.log('Error loading sound', error);
    }
  }, []);

  const stopSound = React.useCallback(async () => {
    try {
      await Sound.stopPlayer();
      Sound.removePlayBackListener();
      setIsPlaying(false);
      setCurrentTime(0);
      setProgress(0);
    } catch (error) {
      console.log('Error stopping sound', error);
    }
  }, []);

  const togglePlayPause = React.useCallback(async () => {
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
  }, [isPlaying]);

  const skipForward = React.useCallback(async () => {
    try {
      let newPosition = (currentTime + 20) * 1000;
      if (newPosition > duration * 1000) newPosition = duration * 1000;
      await Sound.seekToPlayer(newPosition);
    } catch (error) {
      console.log('Error skipping forward', error);
    }
  }, [currentTime, duration]);

  const skipBackward = React.useCallback(async () => {
    try {
      let newPosition = (currentTime - 10) * 1000;
      if (newPosition < 0) newPosition = 0;
      await Sound.seekToPlayer(newPosition);
    } catch (error) {
      console.log('Error skipping backward', error);
    }
  }, [currentTime]);

  const onSeek = React.useCallback(async value => {
    try {
      await Sound.seekToPlayer(value * 1000);
      setCurrentTime(value);
    } catch (error) {
      console.log('Error seeking', error);
    }
  }, []);

  return (
    <MusicPlayerContext.Provider
      value={{
        sound: {
          stop: stopSound,
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
      }}
    >
      {children}
    </MusicPlayerContext.Provider>
  );
};

export const useMusicPlayer = () => {
  return useContext(MusicPlayerContext);
};
