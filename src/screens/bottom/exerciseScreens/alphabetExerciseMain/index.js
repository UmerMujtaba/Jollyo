import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  Button,
  Image,
  ImageBackground,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Tts from 'react-native-tts';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import {Strings} from '../../../../constants/strings';
import {styles} from './styles';
import {useSelector, useDispatch} from 'react-redux';
import {setAlphabetProgress} from '../../../../redux/slices/alphabetsExerciseSlice';
import {useNetworkImageHandler} from '../../../../hooks';
import {isTablet, rhp} from '../../../../constants/dimensions';
import RNHapticFeedback from 'react-native-haptic-feedback';
import Voice from '@react-native-voice/voice';
import LottieView from 'lottie-react-native';

const AlphabetsExerciseMain = ({route}) => {
  const navigation = useNavigation();
  const {letterData, index} = route.params;
  const dispatch = useDispatch();
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();
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

  console.log(
    '🚀 ~ AlphabetsExerciseMain ~ currentExercise:',
    currentExercise.name,
  );
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
    Voice.onSpeechError = e => {
      console.log('Speech error: ', e);
      Alert.alert('Oops!', 'Try again!');
    };

    Voice.isAvailable().then(available => {
      if (!available) {
        console.error('Voice is not available on this device');
      }
    });

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [currentExerciseIndex]);

  const handleNext = () => {
    if (!isConnected || imageError) {
      console.log(
        'Cannot select option. No internet connection or image loading error.',
      );
      Alert.alert('Internet Required', 'Please turn on your Internet.', [
        {text: 'OK'},
      ]);
      return;
    }
    if (currentExerciseIndex < letterData.exercises.length - 1) {
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        dispatch(setAlphabetProgress({index, progress: newIndex}));
        return newIndex;
      });
    }
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(prevIndex => {
        const newIndex = prevIndex - 1;
        dispatch(setAlphabetProgress({index, progress: newIndex}));
        return newIndex;
      });
    }
  };

  const handleSpeakerPress = () => {
    Tts.setDefaultVoice('com.apple.speech.synthesis.voice.Albert');
    Tts.setDefaultPitch(0.7);
    Tts.setDefaultRate(0.5, true);

    let word = currentExercise.name;
    console.log('🚀 ~ handleSpeakerPress ~ word:', word);
    if (!isConnected || imageError) {
      console.log(
        'Cannot select option. No internet connection or image loading error.',
      );
      Alert.alert('Internet Required', 'Please turn on your Internet.', [
        {text: 'OK'},
      ]);
      return;
    } else {
      Tts.speak(word);
    }
  };

  const onSpeechStart = () => {
    console.log('Speech recognition started');
    setIsListening(true);
  };

  const onSpeechEnd = () => {
    console.log('Speech recognition ended');
    setIsListening(false);
  };

  const onSpeechResults = e => {
    let targetPhrase = currentExercise.name;
    console.log(
      '🚀 ~ AlphabetsExerciseMain ~ targetPhrase @@@@@@(in onSpeechResults)@@@@:',
      targetPhrase,
    );
    console.log('Speech results: ', e);
    const spokenText = e.value[0];
    setRecognizedText(spokenText);
    console.log('🚀 ~ AlphabetsExerciseMain ~ spokenText:', spokenText);

    const normalizedSpokenText = spokenText.toLowerCase().trim();
    console.log(
      '🚀 ~ AlphabetsExerciseMain ~ normalizedSpokenText:',
      normalizedSpokenText,
    );

    const normalizedTargetPhrase = targetPhrase.toLowerCase().trim();
    console.log(
      '🚀 ~ AlphabetsExerciseMain ~ normalizedTargetPhrase:',
      normalizedTargetPhrase,
    );

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

  const startListening = () => {
    console.log('inside on start listening');
    Voice.start('en-US').catch(error => {
      console.log('Error starting Voice: ', error);
      Alert.alert(
        'Voice Recognition Error',
        `An error occurred while starting voice recognition: ${
          error.message || error
        }`,
        [{text: 'OK'}],
      );
    });
  };

  const stopListening = () => {
    console.log('inside on listening end');
    Voice.stop();
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
    setIsListening(prevState => !prevState);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          marginBottom: rhp(15),
        }}>
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
                  : {uri: currentExercise.image}
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
          onRequestClose={() => setShowModal(false)}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => setShowModal(false)}>
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
                onPress={() => setShowModal(false)}>
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
