// useSpeechToText.js
import {useState, useEffect} from 'react';
import Voice from '@react-native-voice/voice';

const useSpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    Voice.onSpeechStart = () => {
      setIsListening(true);
      setRecognizedText('');
      setError('');
    };

    Voice.onSpeechEnd = () => {
      setIsListening(false);
    };

    Voice.onSpeechError = e => {
      setError(e.error);
      setIsListening(false);
    };

    Voice.onSpeechResults = e => {
      setRecognizedText(e.value[0]);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
    } catch (e) {
      setError(e.message);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      setError(e.message);
    }
  };

  const cancelListening = async () => {
    try {
      await Voice.cancel();
      setIsListening(false);
    } catch (e) {
      setError(e.message);
    }
  };

  return {
    isListening,
    recognizedText,
    error,
    startListening,
    stopListening,
    cancelListening,
  };
};

export default useSpeechToText;
