import React, {useEffect, useState} from 'react';
import {AppState, Alert, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setElapsedTime, resetElapsedTime} from '../redux/slices/timerSlice';

const THREE_HOURS_IN_SECONDS = 3 * 60 * 60;

export const useTimer = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch();
  const elapsedTime = useSelector(state => state.timerReducer);

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    if (appState === 'active') {
      startTimer();
    }

    return () => {
      subscription.remove();
      clearInterval(timer);
      
    };
  }, [appState]);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      const persistedElapsedTime = elapsedTime;
      startTimer(persistedElapsedTime);
    } else {
      stopTimer();
    }
    setAppState(nextAppState);
  };

  const startTimer = (initialTime = elapsedTime) => {
    clearInterval(timer);
    console.log('🚀 ~ return ~ timer:', timer);
    const newTimer = setInterval(() => {
      const newElapsedTime = initialTime + 1;
      dispatch(setElapsedTime(newElapsedTime));

      if (newElapsedTime >= THREE_HOURS_IN_SECONDS) {
        stopTimer();
        showPopup();
      }
    }, 1000);

    setTimer(newTimer);
    console.log('🚀 ~ return ~ timer:', timer);
  };

  const stopTimer = () => {
    clearInterval(timer);
    dispatch(setElapsedTime(elapsedTime));
    console.log('🚀 ~ stopTimer ~ elapsedTime:', elapsedTime);
  };

  const showPopup = () => {
    Alert.alert(
      'Time Exceeded',
      'You have exceeded the 3-hour limit.',
      [
        {
          text: 'Done',
          onPress: () => {
            dispatch(resetElapsedTime());
            clearInterval(timer);
            
          },
        },
      ],
      {cancelable: false},
    );
  };

  return <View>{/* <Text>Elapsed Time: {timer} minutes</Text> */}</View>;
};
