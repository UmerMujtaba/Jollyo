import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Modal,
  PermissionsAndroid,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RNHapticFeedback from 'react-native-haptic-feedback';
import Tts from 'react-native-tts';
import Voice from '@dev-amirzubair/react-native-voice';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../../assets/images';
import {
  CustomAppBar,
  CustomBottomTab,
  ExerciseHeader,
} from '../../../../components/atoms';
import { hp, rhp } from '../../../../constants/dimensions';
import { Strings } from '../../../../constants/strings';
import { useNetworkImageHandler } from '../../../../hooks';
import { setAlphabetProgress } from '../../../../redux/slices/alphabetsExerciseSlice';
import { styles } from './styles';

const AlphabetsExerciseMain = ({ route }) => {
  const navigation = useNavigation();
  const { letterData, index } = route.params;
  const dispatch = useDispatch();
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const { imageError, setImageError, isConnected } = useNetworkImageHandler();
  const progressAnim = useState(new Animated.Value(1))[0];
  const [showModal, setShowModal] = useState(false);
  const progressFromRedux = useSelector(
    state =>
      state.alphabetsExerciseReducer.alphabetsExerciseList[index]?.progress,
  );

  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(
    progressFromRedux || 0,
  );
  const currentExercise = letterData.exercises[currentExerciseIndex];
  const currentExerciseRef = React.useRef(currentExercise);

  useEffect(() => {
    currentExerciseRef.current = currentExercise;
  }, [currentExercise]);

  const progress = currentExerciseIndex / letterData.exercises.length;

  if (!letterData || !letterData.exercises) {
    return <Text>{Strings.errorInvalidData}</Text>;
  }

  useEffect(() => {
    const progress = (currentExerciseIndex / letterData.exercises.length) * 100;
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentExerciseIndex, letterData.exercises.length, progressAnim]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    setIsListening(true);
  };

  const onSpeechEnd = e => {
    setIsListening(false);
  };

  const onSpeechResults = e => {
    if (e.value && e.value.length > 0) {
      const spokenText = e.value[0];
      setRecognizedText(spokenText);
      handleSpeechResults(spokenText);
    }
  };

  const onSpeechError = e => {
    console.log('Speech error: ', e.error);
    setIsListening(false);
    Alert.alert('Oops!', 'Try again!');
  };

  const handleNext = () => {
    if (!isConnected || imageError) {
      console.log(
        'Cannot select option. No internet connection or image loading error.',
      );
      Alert.alert('Internet Required', 'Please turn on your Internet.', [
        { text: 'OK' },
      ]);
      return;
    }
    if (currentExerciseIndex < letterData.exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        dispatch(setAlphabetProgress({ index, progress: newIndex }));
        return newIndex;
      });
      setRecognizedText('');
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        dispatch(setAlphabetProgress({ index, progress: newIndex }));
        return newIndex;
      });
    }
  };

  const handleSpeakerPress = async () => {
    try {
      const word = currentExercise.name; // make sure this is defined

      // Safe way - suppress the stop error completely
      // Tts.stop().catch(() => {}); // Ignore any error from stop()

      // Small delay so previous speech actually stops
      await new Promise(resolve => setTimeout(resolve, 150));

      // Speak with inline options (avoid setDefault* methods)
      Tts.speak(word, {
        rate: 0.48, // speed
        pitch: 1.0, // pitch
        // language: 'en-US',   // try 'ur-PK' if needed
      });
    } catch (error) {
      console.error('TTS error:', error);
    }
  };

  const handleSpeechResults = spokenText => {
    let targetPhrase = currentExerciseRef.current.name;
    console.log('🚀 ~ handleSpeechResults ~ targetPhrase:', targetPhrase);

    const normalizedSpokenText = spokenText.toLowerCase().trim();
    const normalizedTargetPhrase = targetPhrase.toLowerCase().trim();

    if (normalizedSpokenText === normalizedTargetPhrase) {
      setShowModal(true);
    } else {
      RNHapticFeedback.trigger('impactHeavy', {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      });
      Alert.alert('Oops!', 'Try again!');
    }
  };

  const requestMicrophonePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          {
            title: 'Microphone Permission',
            message:
              'App needs access to your microphone to capture your voice.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  };

  const startListening = async () => {
    const hasPermission = await requestMicrophonePermission();
    if (!hasPermission) {
      Alert.alert('Permission Denied', 'Microphone access is required.');
      return;
    }
    try {
      setRecognizedText('Listening...');
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: hp(4),
          marginBottom: rhp(15),
        }}
      >
        <CustomAppBar
          title={Strings.alphabets}
          questionMark
          speaker
          onSpeakerPress={handleSpeakerPress}
          onBackPress={goBack}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ExerciseHeader
            letter={`Lesson ${letterData.letter}`}
            currentExerciseIndex={currentExerciseIndex + 1}
            totalExercises={letterData.exercises.length}
            progress={progress}
          />
          <View style={styles.imgContainer}>
            <FastImage
              defaultSource={images.defaultImg}
              source={
                imageError || !isConnected
                  ? images.defaultImg
                  : { uri: currentExercise.image }
              }
              style={styles.imgStyle}
              onError={() => setImageError(true)}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>
          <Text style={styles.letterText}>{letterData.letter}</Text>
          <Text style={styles.itemName}>{currentExercise.name}</Text>
          <Text style={styles.speechedText}>
            Recognized Text: {recognizedText}
          </Text>
        </View>
      </View>

      {showModal && (
        <Modal
          visible={showModal}
          animationType="slide"
          transparent={true}
          statusBarTranslucent={true}
          onRequestClose={() => setShowModal(false)}
        >
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setShowModal(false)}
          >
            <View style={styles.modalContent}>
              <LottieView
                source={require('../../../../assets/lottie/giftBox.json')}
                autoPlay
                loop={true}
                style={styles.fireworksAnimation}
                duration={5000}
              />
              <Text style={styles.stickerText}>{Strings.wellDone}</Text>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setShowModal(false)}
              >
                <Text style={styles.closeButtonText}>{Strings.close}</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
      <CustomBottomTab
        onNext={handleNext}
        onBack={handleBack}
        onSpeak={toggleListening}
      />
    </ImageBackground>
  );
};

export default AlphabetsExerciseMain;
