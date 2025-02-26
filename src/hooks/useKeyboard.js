import {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';

export const useKeyboard = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    // Listener for when the keyboard is opened
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        setKeyboardStatus(true);
        console.log('Keyboard height: ', event.endCoordinates.height);
      },
    );

    // Listener for when the keyboard is closed
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardStatus(false);
      },
    );

    // Cleanup listeners when the component is unmounted
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return keyboardStatus; // Return current keyboard status
};

