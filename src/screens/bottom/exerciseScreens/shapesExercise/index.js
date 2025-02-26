import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Animated,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../../assets/images';
import { colors } from '../../../../constants/colors';
import { isTablet, rhp } from '../../../../constants/dimensions';
import { Strings } from '../../../../constants/strings';
import { useNetworkImageHandler, useRewardManager, useStickerManager } from '../../../../hooks';
import {
  addShapeSticker
} from '../../../../redux/slices/rewardsSlice';
import {
  setCurrentExerciseIndex,
  setIsCorrect,
  setRandomShapes,
  setSelectedOption,
  setShowLottie
} from '../../../../redux/slices/shapesExerciseSlice';
import { shapesExerciseData } from '../../../../utils/shapesExerciseData';
import { styles } from './styles';
import { CustomAppBar, CustomBottomTab, ExerciseHeader, RestartPrompt, StickerModal } from '../../../../components/atoms';

const ShapesExercise = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const progressAnim = useState(new Animated.Value(0))[0];
  const [user, setUser] = useState(null);
  const [earnedSticker, setEarnedSticker] = useState(null);
  const [showStickerModal, setShowStickerModal] = useState(false);
  const [rewardGiven, setRewardGiven] = useState(false);
  const [showRestartPrompt, setShowRestartPrompt] = useState(false);
  const {getStickerForExercise} = useStickerManager();
  const {awardRewardToUser} = useRewardManager();

  const {
    currentExerciseIndex,
    selectedOption,
    isCorrect,
    randomShapes,
    showLottie,
  } = useSelector(state => state.shapesExerciseReducer);

  // const totalExercises = 2;
  const totalExercises = shapesExerciseData.length;
  const progress = ((currentExerciseIndex + 1) / totalExercises) * 100;
  const {imageError, setImageError, isConnected} = useNetworkImageHandler();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (currentExerciseIndex === totalExercises) {
      setShowRestartPrompt(true);
    } else {
      dispatch(setRandomShapes());
    }
  }, [currentExerciseIndex, dispatch]);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [currentExerciseIndex, progress]);

  useEffect(() => {
    if (
      currentExerciseIndex === totalExercises - 1 &&
      isCorrect === 'correct' &&
      !rewardGiven
    ) {
      const rewardData = getStickerForExercise();
      setEarnedSticker(rewardData);
      setShowStickerModal(true);
      dispatch(addShapeSticker(rewardData));
      AsyncStorage.setItem('ShapesExerciseCompleted', 'true');
      awardRewardToUser('shapesReward', [rewardData]);
      setRewardGiven(true);
    }
  }, [
    currentExerciseIndex,
    isCorrect,
    totalExercises,
    dispatch,
    getStickerForExercise,
    awardRewardToUser,
    rewardGiven,
  ]);

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
    } else {
      dispatch(setIsCorrect('incorrect'));
      dispatch(setShowLottie(true));
      setTimeout(() => {
        dispatch(setShowLottie(false));
        // handleNext('correct');
      }, 3000);
    }
  };

  // Handle the next button click
  const handleNext = () => {
    if (isCorrect === 'correct' && currentExerciseIndex < totalExercises) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex + 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      // dispatch(setPlayFireworks(false));
      // setIsFireworksPlaying(false);
    }

    if (currentExerciseIndex === totalExercises) {
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
    setRewardGiven(false);
  };

  const handleBack = () => {
    if (currentExerciseIndex > 0) {
      dispatch(setCurrentExerciseIndex(currentExerciseIndex - 1));
      dispatch(setIsCorrect(null));
      dispatch(setSelectedOption(null));
      // dispatch(setPlayFireworks(false));
      // setIsFireworksPlaying(false);
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.shapes}
          questionMark
          speaker
          onSpeakerPress={() => Alert.alert('Under Process')}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          {!showRestartPrompt ? (
            <View style={styles.bottomBody}>
              <ExerciseHeader
                letter={Strings.shapesSet}
                currentExerciseIndex={currentExerciseIndex + 1}
                totalExercises={shapesExerciseData.length}
                progress={progress}
              />
              <View style={styles.imgContainerBorder}>
                <View style={styles.imgContainer}>
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
                            ? colors.GREEN.correct
                            : isCorrect === 'incorrect'
                            ? colors.RED.wrong
                            : colors.transparent,
                      },
                    ]}
                    onPress={() => handleOptionSelect(shape)}>
                    <View
                      style={[
                        styles.optContainer,
                        styles.optContainerInside,
                        selectedOption?.name === shape.name && {
                          backgroundColor:
                            isCorrect === 'correct'
                              ? colors.GREEN.parrot
                              : isCorrect === 'incorrect'
                              ? colors.RED.red
                              : colors.transparent,
                        },
                      ]}>
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

          {isCorrect === 'correct' && (
            <LottieView
              source={require('../../../../assets/lottie/fireworks.json')}
              autoPlay
              loop={false}
              style={styles.fireworksAnimation}
              onAnimationFinish={() => {
                handleNext();
              }}
            />
          )}
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
          {showStickerModal && (
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
