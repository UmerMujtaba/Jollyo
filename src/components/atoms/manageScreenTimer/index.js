import Slider from '@react-native-community/slider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { AppState, Text, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';
// import RNExitApp from 'react-native-exit-app';
export const ManageScreenTimer = () => {
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  const saveScreenTimeToFirebase = async time => {
    console.log('saveScreenTimeToFirebase');

    const user = auth().currentUser;
    if (user) {
      const userDoc = firestore().collection('users').doc(user.uid);
      await userDoc.set(
        {
          screenTimeLimit: time,
        },
        {merge: true},
      );
    }
  };

  // Function to get screen time from Firestore
  const getScreenTimeFromFirebase = async () => {
    console.log('inside get screen time');
    const user = auth().currentUser;
    if (user) {
      const userDoc = await firestore().collection('users').doc(user.uid).get();
      return userDoc.exists ? userDoc.data().screenTimeLimit : 0;
    }
    return 0;
  };

  const isFocused = useIsFocused();

  // Format time in hours
  const getFormattedTime = value => {
    const hours = Math.floor(value / 3600); // Calculate hours
    const minutes = Math.floor((value % 3600) / 60); // Calculate minutes
    const seconds = value % 60; // Calculate seconds

    // Display in the format of "HH:MM:SS"
    return `${hours < 10 ? '0' + hours : hours}:${
      minutes < 10 ? '0' + minutes : minutes
    }:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  // Handle slider change and save to Firebase
  const handleSliderChange = useCallback(
    debounce(async value => {
      setStrokeWidth(value);
      await saveScreenTimeToFirebase(value);
    }, 100),
    [],
  );

  // Start timer logic
  const startTimer = () => {
    if (!timerRunning) {
      setTimerRunning(true);
      const interval = setInterval(() => {
        setRemainingTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            // RNExitApp.exitApp(); // Exit the app once the time is up
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000); // Update every second
    }
  };

  // Pause timer logic
  const stopTimer = () => {
    setTimerRunning(false);
  };

  // Fetch saved time from Firebase when the app is loaded
  useEffect(() => {
    // Fetch screen time from Firebase only when the component is mounted or on initial render
    const fetchTime = async () => {
      const time = await getScreenTimeFromFirebase();
      setRemainingTime(time * 3600); // Convert hours to seconds
    };

    fetchTime(); // Call this function only once when the component mounts
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  useEffect(() => {
    // Start the timer when the app is in the foreground
    if (isFocused && remainingTime > 0) {
      startTimer();
    }

    // Listen for AppState changes to track when the app goes to the background or is killed
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        setAppState(nextAppState);
        if (nextAppState === 'background' || nextAppState === 'inactive') {
          stopTimer(); // Stop the timer when the app goes to background
        } else if (nextAppState === 'active') {
          startTimer(); // Resume the timer when the app comes back to the foreground
        }
      },
    );

    // Clean up the app state listener when the component unmounts
    return () => {
      appStateListener.remove();
    };
  }, [isFocused, remainingTime]); // Only track focus and app state changes, not `remainingTime`

  // Display time left in formatted text
  const formattedTime = getFormattedTime(remainingTime);

  // const getFormattedTime = value => {
  //   const hours = Math.round(value);
  //   if (hours === 1) {
  //     return `${hours} hour`;
  //   } else {
  //     return `${hours} hours`;
  //   }
  // };

  // const handleSliderChange = useCallback(
  //   debounce(value => setStrokeWidth(value), 100),
  //   [],
  // );

  return (
    <View style={styles.container}>
      <View style={[styles.container, styles.innerContainer]}>
        <Text style={styles.header}>{Strings.manageScreenTime}</Text>
        <Text style={styles.title}>{Strings.setALimitOnTheScreenTime}</Text>
        <Text style={styles.timeText}>{getFormattedTime(strokeWidth)}</Text>
        <Text style={styles.timeText}>{formattedTime}</Text>
        <View>
          <Slider
            minimumTrackTintColor={colors.PURPLE.backgroundClr}
            maximumTrackTintColor={colors.BLACK.pureBlack}
            value={strokeWidth}
            onValueChange={handleSliderChange}
            onSlidingComplete={async () => {
              await saveScreenTimeToFirebase(strokeWidth);
              console.log(strokeWidth);
            }}
            style={styles.slider}
            minimumValue={0}
            maximumValue={10}
            step={1}
            thumbTintColor={colors.PURPLE.backgroundClr}
          />
        </View>
      </View>
    </View>
  );
};
