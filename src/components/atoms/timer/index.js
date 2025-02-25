import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${
      remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds
    }`;
  };

  return <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>;
};
