import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import NumbersQuestionBar from '../../../../components/atoms/numbersQuestionBar';
import {colors} from '../../../../constants/colors';
import {Strings} from '../../../../constants/strings';
import {styles} from './styles';
import {
  setExerciseIndex,
  setRandomCount,
  setOptions,
  setProgress,
  setFeedbackColor,
  setIsCorrect,
  setShowLottie,
} from '../../../../redux/slices/numbersExerciseSlice';
import StickerModal from '../../../../components/atoms/stickerModal';
import {addNumberSticker} from '../../../../redux/slices/rewardsSlice';
import {useNetworkImageHandler, useStickerManager} from '../../../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RestartPrompt from '../../../../components/atoms/restartPromptContainer';
import {isTablet, rhp} from '../../../../constants/dimensions';

const QuestionImages = {
  image1: images.cubImage,
};

const NumbersExercise = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [showRestartPrompt, setShowRestartPrompt] = useState(false);
  const {getStickerForExercise} = useStickerManager();
  const {
    exerciseIndex,
    randomCount,
    options,
    progress,
    feedbackColor,
    isCorrect,
    showLottie,
  } = useSelector(state => state.numbersExerciseReducer);

  const totalExercises = 12;
  console.log('🚀 ~ NumbersExercise ~ totalExercises:', totalExercises);
  const animatedProgress = useState(
    new Animated.Value(exerciseIndex / totalExercises),
  )[0];
  // const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  const generateOptions = () => {
    const correctAnswer = randomCount;
    const options = [correctAnswer];

    while (options.length < 5) {
      const randomOption = Math.floor(Math.random() * 10) + 1;
      if (!options.includes(randomOption) && randomOption !== correctAnswer) {
        options.push(randomOption);
      }
    }

    return options.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    const newOptions = generateOptions();
    dispatch(setOptions(newOptions));
  }, [randomCount]);

  useEffect(() => {
    dispatch(setFeedbackColor('transparent'));
    const checkIfCompleted = async () => {
      const completed = await AsyncStorage.getItem('NumbersExerciseCompleted');
      if (completed === 'true') {
        setShowRestartPrompt(true);
      }
    };
    checkIfCompleted();
  }, []);

  useEffect(() => {
    Animated.timing(animatedProgress, {
      toValue: exerciseIndex / totalExercises,
      duration: 500,
      useNativeDriver: false,
    }).start();

    dispatch(setProgress(exerciseIndex / totalExercises));
  }, [exerciseIndex]);

  const handleSelection = number => {
    dispatch(setIsCorrect(number === randomCount ? 'correct' : 'incorrect'));
    dispatch(
      setFeedbackColor(
        number === randomCount ? colors.backgroundClr : colors.darkOrange,
      ),
    );
    dispatch(setShowLottie(true));

    if (number === randomCount) {
      setTimeout(() => {
        dispatch(setShowLottie(false));
        handleNext('correct');
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(setShowLottie(false));
      }, 3000);
    }

    if (exerciseIndex === totalExercises && isCorrect === 'correct') {
      const sticker = getStickerForExercise();
      setEarnedSticker(sticker);
      setShowStickerModal(true);
      dispatch(addNumberSticker(sticker));
      AsyncStorage.setItem('NumbersExerciseCompleted', 'true');
    }
  };

  const handleNext = value => {
    if (value === 'correct' || isCorrect === 'correct') {
      if (exerciseIndex < totalExercises) {
        dispatch(setExerciseIndex(exerciseIndex + 1));
        dispatch(setRandomCount());
        dispatch(setFeedbackColor('transparent'));
      }
    } else if (isCorrect === 'incorrect') {
      setTimeout(() => {
        dispatch(setShowLottie(false));
      }, 3000);
    }
  };

  const handleRestart = () => {
    dispatch(setExerciseIndex(1));
    generateOptions();
    setShowRestartPrompt(false);
    // dispatch(setFeedbackColor('transparent'));
    // setIsCorrect('');
    AsyncStorage.removeItem('NumbersExerciseCompleted');
  };

  const handleBack = () => {
    if (exerciseIndex > 1) {
      dispatch(setExerciseIndex(exerciseIndex - 1));
      dispatch(setRandomCount());
    }
  };

  const renderImages = () => {
    let imagesArray = [];
    for (let i = 0; i < randomCount; i++) {
      imagesArray.push(
        <FastImage
          key={i}
          source={QuestionImages.image1}
          style={styles.image}
          resizeMode={FastImage.resizeMode.contain}
        />,
      );
    }
    return imagesArray;
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          // marginBottom: rhp(15),
        }}>
        <CustomAppBar
          title={'Numbers'}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {!showRestartPrompt ? (
            <View style={styles.bottomBody}>
              <NumbersQuestionBar title={Strings.howMany} />

              <View style={styles.exerciseContainer}>
                <View>
                  <Text style={styles.exerciseText}>{Strings.exercise}</Text>
                </View>
                <View>
                  <Text style={styles.exerciseCountText}>
                    {exerciseIndex} / {totalExercises}
                  </Text>
                </View>
              </View>

              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBar,
                    {
                      width: animatedProgress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0%', '100%'],
                      }),
                    },
                  ]}
                />
              </View>

              {showLottie && (
                <LottieView
                  source={
                    isCorrect === 'correct'
                      ? require('../../../../assets/lottie/fireworks.json')
                      : require('../../../../assets/lottie/error.json')
                  }
                  autoPlay
                  loop={false}
                  style={styles.fireworksAnimation}
                />
              )}
              <View style={styles.imagesContainer}>{renderImages()}</View>
              <View style={styles.optionsContainer}>
                {options.map(number => (
                  <TouchableOpacity
                    key={number}
                    style={[
                      styles.optionButton,
                      number === randomCount && {
                        backgroundColor: feedbackColor,
                      },
                    ]}
                    onPress={() => handleSelection(number)}>
                    <Text style={styles.optionText}>{number}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            <RestartPrompt onRestart={handleRestart} />
          )}
        </View>

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
    </ImageBackground>
  );
};
export default NumbersExercise;
