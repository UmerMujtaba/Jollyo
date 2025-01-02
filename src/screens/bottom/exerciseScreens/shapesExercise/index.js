import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import ExerciseHeader from '../../../../components/atoms/exerciseHeader';
import StickerModal from '../../../../components/atoms/stickerModal';
import {colors} from '../../../../constants/colors';
import {Strings} from '../../../../constants/strings';
import {
  addNumberSticker,
  addShapeSticker,
} from '../../../../redux/slices/rewardsSlice';
import {
  setCurrentExerciseIndex,
  setIsCorrect,
  setPlayFireworks,
  setRandomShapes,
  setSelectedOption,
  setShowModal,
} from '../../../../redux/slices/shapesExerciseSlice';
import {shapesExerciseData} from '../../../../utils/shapesExerciseData';
import {styles} from './styles';
import {useNetworkImageHandler, useStickerManager} from '../../../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RestartPrompt from '../../../../components/atoms/restartPromptContainer';
import {isTablet, rhp} from '../../../../constants/dimensions';

const ShapesExercise = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const progressAnim = useState(new Animated.Value(0))[0];
  const fireworksSoundRef = useRef(null);
  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [showRestartPrompt, setShowRestartPrompt] = useState(false);
  const {getStickerForExercise} = useStickerManager();

  const {
    currentExerciseIndex,
    selectedOption,
    isCorrect,
    randomShapes,
    playFireworks,
  } = useSelector(state => state.shapesExerciseReducer);

  const [isFireworksPlaying, setIsFireworksPlaying] = useState(false);

  const totalExercises = shapesExerciseData.length;
  const progress = ((currentExerciseIndex + 1) / totalExercises) * 100;
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  useEffect(() => {
    fireworksSoundRef.current = new Sound(
      'https://res.cloudinary.com/dtpvy8gil/video/upload/v1732912980/samples/fireworks_kyowvx.wav',
      null,
      error => {
        if (error) {
          console.log('Error loading sound', error);
        }
      },
    );

    return () => {
      if (fireworksSoundRef.current) {
        fireworksSoundRef.current.release();
      }
    };
  }, []);

  useEffect(() => {
    if (currentExerciseIndex === 9) {
      setShowRestartPrompt(true);
    } else {
      dispatch(setRandomShapes());
    }
  }, [currentExerciseIndex, dispatch]);
  // const progress = ((currentExerciseIndex + 1) / 10) * 100;

  // Update progress animation if needed
  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();

    if (currentExerciseIndex === 9 && isCorrect === 'correct') {
      const sticker = getStickerForExercise();
      setEarnedSticker(sticker);
      setShowStickerModal(true);
      dispatch(addShapeSticker(sticker));
      AsyncStorage.setItem('ShapesExerciseCompleted', 'true');
    }
  }, [currentExerciseIndex, isCorrect, dispatch]);

  const handleOptionSelect = option => {
    if (!isConnected || imageError) {
      console.log(
        'Cannot select option. No internet connection or image loading error.',
      );
      Alert.alert('Internet Required', 'Please turn on your Internet.', [
        {text: 'OK'},
      ]);
      return;
    }
    dispatch(setSelectedOption(option));
    const correctShape = randomShapes[0];
    if (option.name === correctShape.name) {
      dispatch(setIsCorrect('correct'));
      dispatch(setPlayFireworks(true));
      setIsFireworksPlaying(true);

      if (fireworksSoundRef.current) {
        fireworksSoundRef.current.play(success => {
          if (success) {
            console.log('Fireworks sound played successfully');
          } else {
            console.log('Error playing sound');
          }
        });
      }
    } else {
      dispatch(setIsCorrect('incorrect'));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }
  };

  // Handle the next button click
  const handleNext = () => {
    if (isCorrect === 'correct' && currentExerciseIndex < 9) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex + 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }

    if (currentExerciseIndex === 9) {
      setShowRestartPrompt(true);
    }
  };

  const handleRestart = () => {
    console.log('Handle Restart triggered');

    dispatch(setCurrentExerciseIndex(1));
    dispatch(setRandomShapes());
    setShowRestartPrompt(false);

    console.log('Reset complete, hiding restart prompt');

    AsyncStorage.removeItem('ShapesExerciseCompleted');
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex - 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      dispatch(setPlayFireworks(false));
      setIsFireworksPlaying(false);
    }
  };

  const closeModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          // marginBottom: rhp(15),
        }}>
        <CustomAppBar
          title={'Shapes'}
          questionMark
          speaker
          onSpeakerPress={''}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {!showRestartPrompt ? (
            <View style={styles.bottomBody}>
              <ExerciseHeader
                letter={'Shapes Set'}
                currentExerciseIndex={currentExerciseIndex + 1}
                totalExercises={shapesExerciseData.length}
                progress={progress}
              />
              <View style={styles.imgContainerBorder}>
                <View style={styles.imgContainer}>
                  {/* <FastImage
                    source={{uri: randomShapes[0]?.image}}
                    style={styles.imgStyle}
                  /> */}

                  <FastImage
                    defaultSource={images.defaultImg}
                    source={
                      imageError || !isConnected
                        ? images.defaultImg
                        : {uri: randomShapes[0]?.image}
                    }
                    style={styles.imgStyle}
                    onError={() => setImageError(true)}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>
              </View>
              <Text style={styles.questionText}>
                {Strings.pleaseSelectCorrectShape}
              </Text>

              <View style={styles.boxRow}>
                {randomShapes.map((shape, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optContainer,
                      selectedOption?.name === shape.name && {
                        backgroundColor:
                          isCorrect === 'correct'
                            ? colors.correct
                            : isCorrect === 'incorrect'
                            ? colors.wrong
                            : colors.transparent,
                      },
                    ]}
                    onPress={() => handleOptionSelect(shape)}>
                    <View
                      style={[styles.optContainer, styles.optContainerInside]}>
                      {/* <FastImage
                        source={{uri: shape.image}}
                        style={styles.optImage}
                      /> */}

                      <FastImage
                        defaultSource={images.defaultImg}
                        source={
                          imageError || !isConnected
                            ? images.defaultImg
                            : {uri: shape.image}
                        }
                        style={styles.optImage}
                        onError={() => setImageError(true)}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            <RestartPrompt onRestart={handleRestart} />
          )}

          {isCorrect === 'correct' && playFireworks && (
            <LottieView
              source={require('../../../../assets/lottie/fireworks.json')}
              autoPlay
              loop={false}
              style={styles.fireworksAnimation}
              onAnimationFinish={() => {
                if (isFireworksPlaying) {
                  handleNext();
                }
              }}
            />
          )}

          {isCorrect === 'correct' && (
            <StickerModal
              isVisible={showStickerModal}
              earnedSticker={earnedSticker}
              onClose={() => {
                setShowStickerModal(false);
              }}
            />
          )}

          <CustomBottomTab onNext={handleNext} onBack={handleBack} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default ShapesExercise;
