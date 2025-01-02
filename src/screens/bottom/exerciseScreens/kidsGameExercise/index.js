import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import LottieView from 'lottie-react-native';
import {
  setExerciseIndex,
  setProgress,
  setRandomGame,
  setCorrectGame,
  setSelectedGame,
  setSelectionStatus,
  setShowLottie,
  setIsCorrect,
  resetGame,
} from '../../../../redux/slices/gameExerciseSlice';
import {GameExerciseData} from '../../../../utils/kidsGameScreenData';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {addQuizSticker} from '../../../../redux/slices/rewardsSlice';
import StickerModal from '../../../../components/atoms/stickerModal';
import {useNetworkImageHandler, useStickerManager} from '../../../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TouchableButton} from '../../../../components/atoms/button';
import RestartPrompt from '../../../../components/atoms/restartPromptContainer';
import {isTablet, rhp} from '../../../../constants/dimensions';
import {Strings} from '../../../../constants/strings';

const getRandomQuestions = () => {
  let selected = [];
  while (selected.length < 4) {
    const randomIndex = Math.floor(Math.random() * GameExerciseData.length);
    if (!selected.includes(randomIndex)) {
      selected.push(randomIndex);
    }
  }
  return selected.map(index => GameExerciseData[index]);
};

const KidsGameExercise = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [showRestartPrompt, setShowRestartPrompt] = useState(false);
  const {getStickerForExercise} = useStickerManager();

  const {
    exerciseIndex,
    randomGame,
    correctGame,
    selectedGame,
    selectionStatus,
    showLottie,
    isCorrect,
  } = useSelector(state => state.gamesExerciseReducer);

  // const totalExercises = 2;
  const totalExercises = GameExerciseData.length;

  // Initialize progress as an Animated.Value
  const progressAnim = useState(new Animated.Value(0))[0];
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  const setNewRandomGame = () => {
    const selectedGame = getRandomQuestions();
    dispatch(setRandomGame(selectedGame));

    const correctIndex = Math.floor(Math.random() * selectedGame.length);
    dispatch(setCorrectGame(selectedGame[correctIndex].name));

    dispatch(setSelectionStatus([null, null, null, null]));
    dispatch(setSelectedGame([false, false, false, false]));

    Animated.timing(progressAnim, {
      toValue: (exerciseIndex / totalExercises) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleSelection = index => {
    if (!isConnected || imageError) {
      console.log(
        'Cannot select option. No internet connection or image loading error.',
      );
      Alert.alert('Internet Required', 'Please turn on your Internet.', [
        {text: 'OK'},
      ]);
      return;
    }

    dispatch(setSelectedGame([false, false, false, false]));
    const updatedSelections = [...selectedGame];
    updatedSelections[index] = true;
    dispatch(setSelectedGame(updatedSelections));

    const updatedStatus = [...selectionStatus];
    if (randomGame[index].name === correctGame) {
      updatedStatus[index] = true;
      dispatch(setIsCorrect('correct'));
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
        handleNext('correct');
      }, 3000);
    } else {
      updatedStatus[index] = false;
      dispatch(setIsCorrect('incorrect'));
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
        dispatch(setSelectionStatus([null, null, null, null]));
        dispatch(setSelectedGame([false, false, false, false]));
      }, 3000);
    }
    dispatch(setSelectionStatus(updatedStatus));

    if (exerciseIndex === totalExercises && isCorrect === 'correct') {
      const sticker = getStickerForExercise();
      setEarnedSticker(sticker);
      setShowStickerModal(true);
      dispatch(addQuizSticker(sticker));
      AsyncStorage.setItem('KidsGameExerciseCompleted', 'true');
    }
  };

  const handleNext = value => {
    if (value === 'correct' && exerciseIndex < totalExercises) {
      dispatch(setExerciseIndex(exerciseIndex + 1));
      setNewRandomGame();
    } else if (isCorrect === 'incorrect') {
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
      }, 3000);
    }
    if (exerciseIndex === totalExercises) {
      setShowRestartPrompt(true);
    }
  };

  const handleRestart = () => {
    dispatch(setExerciseIndex(1));
    setNewRandomGame();
    setShowRestartPrompt(false);

    AsyncStorage.removeItem('KidsGameExerciseCompleted');
  };

  const handleBack = () => {
    if (exerciseIndex > 1) {
      dispatch(setExerciseIndex(exerciseIndex - 1));
      setNewRandomGame();
    }
  };

  useEffect(() => {
    if (exerciseIndex <= totalExercises) {
      setNewRandomGame();
    }
  }, [exerciseIndex]);

  useEffect(() => {
    const checkIfCompleted = async () => {
      const completed = await AsyncStorage.getItem('exerciseCompleted');
      if (completed === 'true') {
        setShowRestartPrompt(true);
      }
    };
    checkIfCompleted();
  }, []);

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          // marginBottom: rhp(15),
        }}>
        <CustomAppBar
          title={'Quiz'}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {!showRestartPrompt ? (
            <View style={styles.bottomBody}>
              <View style={styles.questionRow}>
                <TouchableOpacity style={styles.btn} onPress={''}>
                  <View style={[styles.btn, styles.btnInside]}>
                    <FastImage
                      source={images.icons.loudSpeaker}
                      style={styles.backIconStyle}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.question}>
                  {Strings.chooseTheCorrectWord}
                </Text>
              </View>

              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseText}>Exercise</Text>
                <Text style={styles.exerciseCountText}>
                  {exerciseIndex} / {totalExercises}
                </Text>
              </View>

              <View style={styles.progressBarContainer}>
                <Animated.View
                  style={[
                    styles.progressBar,
                    {
                      width: progressAnim.interpolate({
                        inputRange: [0, 100],
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

              <View style={styles.gameContainer}>
                {randomGame.map((game, index) => (
                  <View key={index} style={styles.gameCard}>
                    <TouchableOpacity
                      hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                      style={[
                        styles.checkbox(selectedGame[index]),
                        selectedGame[index]
                          ? selectionStatus[index] === true
                            ? styles.checkedGreen
                            : styles.checkedRed
                          : styles.unchecked,
                      ]}
                      onPress={() => handleSelection(index)}>
                      {/* <FastImage
                        defaultSource={images.defaultImg}
                        source={{uri: game.image}}
                        style={styles.gameImage}
                      /> */}

                      <FastImage
                        defaultSource={images.defaultImg}
                        source={
                          imageError || !isConnected
                            ? images.defaultImg
                            : {uri: game.image}
                        }
                        style={styles.gameImage}
                        onError={() => setImageError(true)}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              <View
                style={{
                  marginTop: isTablet ? rhp(80) : rhp(0),
                  alignItems: 'center',
                }}>
                <TouchableOpacity style={[styles.btnStyle]}>
                  <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                    <Text style={styles.btnText}>{correctGame}</Text>
                  </View>
                </TouchableOpacity>
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

export default KidsGameExercise;
