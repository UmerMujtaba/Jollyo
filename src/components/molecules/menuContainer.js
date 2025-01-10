import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import MenuItemTile from '../atoms/menuTile';
import {images} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetUserData} from '../../redux/slices/userDataSlice';
import {resetTimer} from '../../redux/slices/timerSlice';
import firebaseHelperFunctions from '../../helper/firebaseHelperFunctions';
import {ScreenNames} from '../../constants/strings';
import {resetRewardsData} from '../../redux/slices/rewardsSlice';
import useSound from '../../hooks/buttonClickHook';
import Sound from 'react-native-sound';

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
    setTimeout(() => {
      firebaseHelperFunctions.signOut();
      navigation.navigate('AuthStack', {screen: 'registerationScreen'});
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
        title={'Kids Profile Setting'}
        subHeading={'Manage your kids profile'}
        imageSource={images.icons.profileIcon}
        onPress={handlePremium}
      />
      <MenuItemTile
        title={'Kid Activity Stats'}
        subHeading={'Review your kid goals/progress'}
        imageSource={images.icons.statsIcon}
        onPress={handlePremium}
      />
      <MenuItemTile
        title={'User Guide'}
        subHeading={'Go through guide for app intro!'}
        imageSource={images.icons.guideIcon}
        onPress={handleUserGuide}
      />
      <MenuItemTile
        title={'Logout'}
        subHeading={'See you soon!'}
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
