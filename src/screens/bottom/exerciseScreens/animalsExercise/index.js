import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import CustomBottomTab from '../../../../components/atoms/customBottomTab';
import NumbersQuestionBar from '../../../../components/atoms/numbersQuestionBar';
import StickerModal from '../../../../components/atoms/stickerModal';
import {Strings} from '../../../../constants/strings';
import {
  setCorrectAnimal,
  setExerciseIndex,
  setIsCorrect,
  setProgress,
  setRandomAnimals,
  setSelectedAnimals,
  setSelectionStatus,
  setShowLottie,
} from '../../../../redux/slices/animalExerciseSlice';
import {addAnimalSticker} from '../../../../redux/slices/rewardsSlice';
import {AnimalsData} from '../../../../utils/animalsData';
import {styles} from './styles';
import {useNetworkImageHandler, useStickerManager} from '../../../../hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RestartPrompt from '../../../../components/atoms/restartPromptContainer';
import {isTablet, rhp} from '../../../../constants/dimensions';
import useRewardManager from '../../../../hooks/useRewardManager';
import auth from '@react-native-firebase/auth';

const AnimalsExercise = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [showRestartPrompt, setShowRestartPrompt] = useState(false);
  const shuffledAnimals = [...AnimalsData];
  // const totalExercises = 2;
  const totalExercises = shuffledAnimals.length;
  const {getStickerForExercise} = useStickerManager();
  const progressAnim = useState(new Animated.Value(0))[0];
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();
  const {awardRewardToUser} = useRewardManager();
  const {
    exerciseIndex,
    progress,
    selectedAnimals,
    selectionStatus,
    randomAnimals,
    correctAnimal,
    showLottie,
    isCorrect,
  } = useSelector(state => state.animalExerciseReducer);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (exerciseIndex <= totalExercises) {
      setNewRandomAnimals();
    }
  }, [exerciseIndex]);

  useEffect(() => {
    const checkIfCompleted = async () => {
      const completed = await AsyncStorage.getItem('AnimalsExerciseCompleted');
      if (completed === 'true') {
        setShowRestartPrompt(true);
      }
    };
    checkIfCompleted();
  }, []);

  const setNewRandomAnimals = () => {
    shuffledAnimals.sort(() => Math.random() - 0.5);
    const randomizedAnimals = shuffledAnimals.slice(0, 4);
    dispatch(setRandomAnimals(randomizedAnimals));
    const randomIndex = Math.floor(Math.random() * randomizedAnimals.length);
    dispatch(setCorrectAnimal(randomizedAnimals[randomIndex].letter));
    dispatch(setSelectionStatus([null, null, null, null]));
    dispatch(setSelectedAnimals([false, false, false, false]));

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

    const updatedSelections = [false, false, false, false];
    updatedSelections[index] = true;
    dispatch(setSelectedAnimals(updatedSelections));

    const updatedStatus = [...selectionStatus];
    if (randomAnimals[index].letter === correctAnimal) {
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
        dispatch(setSelectedAnimals([false, false, false, false]));
      }, 3000);
    }
    dispatch(setSelectionStatus(updatedStatus));

    if (exerciseIndex === totalExercises && isCorrect === 'correct') {
      console.log(
        'Animal Quiz Exercise completed and correct, showing sticker modal.',
      );
      const rewardData = getStickerForExercise();
      console.log('🚀 ~ AnimalsQuizExercise ~ rewardData:', rewardData);
      setShowStickerModal(true);
      setEarnedSticker(rewardData);
      console.log(
        '🚀 ~ AnimalsQuizExercise ~ setEarnedSticker:',
        earnedSticker,
      );
      awardRewardToUser('animalsReward', [rewardData]);
      dispatch(addAnimalSticker(rewardData));
      setShowStickerModal(true);

      AsyncStorage.setItem('AnimalsExerciseCompleted', 'true');
    }
  };

  const handleNext = value => {
    if (value === 'correct' && exerciseIndex < totalExercises) {
      dispatch(setExerciseIndex(exerciseIndex + 1));
      setNewRandomAnimals();
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
    setNewRandomAnimals();
    setShowRestartPrompt(false);

    AsyncStorage.removeItem('AnimalsExerciseCompleted');
  };
  const handleBack = () => {
    if (exerciseIndex > 1) {
      dispatch(setExerciseIndex(exerciseIndex - 1));
      setNewRandomAnimals();
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.animals}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {!showRestartPrompt ? (
            <View style={styles.bottomBody}>
              <NumbersQuestionBar title={Strings.canYouChooseTheCorrect} />

              <View style={styles.exerciseContainer}>
                <Text style={styles.exerciseText}>{Strings.exercise}</Text>
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
                  duration={3000}
                />
              )}

              <View style={styles.animalContainer}>
                {Array.isArray(randomAnimals) && randomAnimals.length > 0 ? (
                  randomAnimals.map((animal, index) => (
                    <View key={index} style={styles.animalCard}>
                      <TouchableOpacity
                        hitSlop={{top: 5, bottom: 5, left: 5, right: 5}}
                        style={[
                          styles.checkbox(selectedAnimals[index]),
                          selectedAnimals[index]
                            ? selectionStatus[index] === true
                              ? styles.checkedGreen
                              : styles.checkedRed
                            : styles.unchecked,
                        ]}
                        onPress={() => handleSelection(index)}>
                        <FastImage
                          defaultSource={images.defaultImg}
                          source={
                            imageError || !isConnected
                              ? images.defaultImg
                              : {uri: animal.image}
                          }
                          style={styles.animalImage}
                          onError={() => setImageError(true)}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                      </TouchableOpacity>

                      {/* {selectedAnimals[index] &&
                        (selectionStatus[index] === true ? (
                          <FontAwesome6
                            name="check"
                            size={16}
                            color="white"
                            style={styles.btnText}
                          />
                        ) : (
                          <EntypoIcon
                            name="cross"
                            size={16}
                            color="white"
                            style={styles.btnText}
                          />
                        ))} */}
                    </View>
                  ))
                ) : (
                  <Text>{Strings.noAnimalAvailable}</Text>
                )}
              </View>

              <TouchableOpacity style={[styles.btnStyle]}>
                <View style={[styles.btnStyle, styles.insideBtnStyle]}>
                  <Text style={styles.btnText}>{correctAnimal}</Text>
                </View>
              </TouchableOpacity>
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
              // setTimeout(() => {
              //   navigation.goBack();
              // }, 2000);
            }}
          />
        )}
        <CustomBottomTab onNext={handleNext} onBack={handleBack} />
      </View>
    </ImageBackground>
  );
};

export default AnimalsExercise;
//
