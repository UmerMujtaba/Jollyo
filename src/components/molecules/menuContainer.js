import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Sound from 'react-native-sound';
import {useDispatch} from 'react-redux';
import {images} from '../../assets/images';
import {ScreenNames, Strings} from '../../constants/strings';
import firebaseHelperFunctions from '../../helper/firebaseHelperFunctions';
import useSound from '../../hooks/buttonClickHook';
import {resetProgress} from '../../redux/slices/alphabetsExerciseSlice';
import {resetRewardsData} from '../../redux/slices/rewardsSlice';
import {resetUserData} from '../../redux/slices/userDataSlice';
import MenuItemTile from '../atoms/menuTile';
import {resetAnimals} from '../../redux/slices/animalExerciseSlice';
import {resetGame} from '../../redux/slices/gameExerciseSlice';
import {resetState} from '../../redux/slices/shapesExerciseSlice';
import {resetExercise} from '../../redux/slices/numbersExerciseSlice';
import {navigateReset} from '../../navigationHandler/navigationRef';

Sound.setCategory('Playback');

const MenuContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

  const handleClearData = () => {
    if (playSound) {
      playSound();
    }
    dispatch(resetUserData());
    // dispatch(resetTimer());
    dispatch(resetRewardsData());
    dispatch(resetProgress());
    dispatch(resetAnimals());
    dispatch(resetGame());
    dispatch(resetState());
    dispatch(resetExercise());

    setTimeout(() => {
      firebaseHelperFunctions.signOut();
      navigateReset(ScreenNames.AuthStack, {screen: ScreenNames.loginScreen});
    }, 400);
  };

  const handlePremium = () => {
    if (playSound) {
      playSound();
    }
    navigation.navigate(ScreenNames.premiumScreen);
  };
  const handleUserGuide = () => {
    if (playSound) {
      playSound();
    }
    navigation.navigate(ScreenNames.userGuide);
  };

  return (
    <View style={styles.container}>
      <MenuItemTile
        title={Strings.kidsProfileSetting}
        subHeading={Strings.manageYourKidsProfile}
        imageSource={images.icons.profileIcon}
        onPress={handlePremium}
      />
      <MenuItemTile
        title={Strings.kidActivityStats}
        subHeading={Strings.reviewYourKidGoals}
        imageSource={images.icons.statsIcon}
        onPress={handlePremium}
      />
      <MenuItemTile
        title={Strings.userGuide}
        subHeading={Strings.goThroughGuideForApp}
        imageSource={images.icons.guideIcon}
        onPress={handleUserGuide}
      />
      <MenuItemTile
        title={Strings.logout}
        subHeading={Strings.seeYouSoon}
        imageSource={images.icons.logoutIcon}
        onPress={handleClearData}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'teal',
    // paddingVertical: 10,
  },
});
export default MenuContainer;
