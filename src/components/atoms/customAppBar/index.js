import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Sound from 'react-native-sound';
import { useSelector } from 'react-redux';
import { images } from '../../../assets/images';
import {
  colors,
  rhp
} from '../../../constants';
import { ProfileRoundedAvatar } from '../ProfileRoundedAvatar';
import { styles } from './styles';
import { useSound } from '../../../hooks';

Sound.setCategory('Playback');

export const CustomAppBar = ({
  title,
  back,
  questionMark,
  onQuestionPress,
  onSpeakerPress,
  speaker,
  onBackPress,
  notification,
  onNotificationPress,
  cont,
  textProp,
}) => {
  // const navigation = useNavigation();
  const {username, imagePath} = useSelector(state => state.userReducer);
  // console.log(
  //   `🚀 ~ GamesScreen ~ username: ${username}, imagePath: ${imagePath}`,
  // );
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    }
  };

  const handleQuestionPress = () => {
    if (playSound) {
      playSound();
    }
    if (onQuestionPress) {
      onQuestionPress();
    }
  };

  const handleSpeakerPress = () => {
    // if (playSound) {
    //   playSound(); // Play the sound
    // }
    if (onSpeakerPress) {
      onSpeakerPress();
    }
  };

  const handleNotificationPress = () => {
    if (playSound) {
      playSound();
    }
    if (onNotificationPress) {
      onNotificationPress();
    }
  };

  return (
    <View style={[styles.container, cont]}>
      <View style={{width: '20%'}}>
        {back && (
          <View style={styles.btnStyle}>
            <TouchableOpacity
              style={[styles.btnStyle, styles.insideBtnStyle]}
              onPress={handleBackPress}>
              <FastImage
                source={images.icons.backIcon}
                style={styles.backIconStyle}
                resizeMode={FastImage.resizeMode.contain}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.textWrapper}>
        <Text style={[styles.textHeading, textProp]}>{title}</Text>
        {notification && (
          <View style={{marginTop: rhp(10)}}>
            <ProfileRoundedAvatar
              imageSource={imagePath}
              mainContainer={{backgroundColor: colors.PINK.darkPink}}
              innerContainer={{backgroundColor: colors.PINK.lightPink}}
              // isSelected={selectedAvatar === 'girl'}
            />
          </View>
        )}
      </View>

      <View style={{width: '20%'}}>
        {questionMark && (
          <TouchableOpacity
            style={styles.questionBtnStyle}
            onPress={speaker ? handleSpeakerPress : handleQuestionPress}>
            <View
              style={[styles.questionBtnStyle, styles.insideQuestionBtnStyle]}>
              <FastImage
                source={
                  speaker ? images.icons.loudSpeaker : images.icons.questionIcon
                }
                // source={images.icons.questionIcon}
                style={styles.backIconStyle}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
        )}
        {notification && (
          <TouchableOpacity
            style={styles.questionBtnStyle}
            onPress={handleNotificationPress}>
            <View
              style={[styles.questionBtnStyle, styles.insideQuestionBtnStyle]}>
              <FastImage
                source={images.icons.notificationsIcon}
                style={styles.backIconStyle}
                resizeMode={FastImage.resizeMode.contain}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

