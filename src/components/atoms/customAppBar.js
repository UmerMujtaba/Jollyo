import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {isTablet, rfs, rhp, rwp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import ProfileRoundedAvatar from './profileAvatar';
const CustomAppBar = ({
  title,
  back,
  questionMark,
  onQuestionPress,
  onSpeakerPress,
  speaker,
  onBackPress,
  notification,
  onNotificationPress,
}) => {
  // const navigation = useNavigation();
  const {username, imagePath} = useSelector(state => state.userReducer);
  console.log(
    `🚀 ~ GamesScreen ~ username: ${username}, imagePath: ${imagePath}`,
  );

  return (
    <View style={styles.container}>
      <View style={{width: '20%'}}>
        {back && (
          <View style={styles.btnStyle}>
            <TouchableOpacity
              style={[styles.btnStyle, styles.insideBtnStyle]}
              onPress={onBackPress}>
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
        <Text style={styles.textHeading}>{title}</Text>
        {notification && (
          <ProfileRoundedAvatar
            imageSource={imagePath}
            mainContainer={{backgroundColor: colors.darkPink}}
            innerContainer={{backgroundColor: colors.lightPink}}
            // isSelected={selectedAvatar === 'girl'}
          />
        )}
      </View>

      <View style={{width: '20%'}}>
        {questionMark && (
          <TouchableOpacity
            style={styles.questionBtnStyle}
            onPress={speaker ? onSpeakerPress : onQuestionPress}>
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
            onPress={onNotificationPress}>
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: rwp(10),
    // paddingVertical: isTablet ? rhp(10) : rhp(10),
    marginTop: isTablet ? rhp(10) : rhp(15),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  btnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.blackishOrange,
    height: isTablet ? rhp(45) : rhp(50),
    // alignSelf: 'center',
    borderRadius: 16,
  },
  insideBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.darkOrange,
    borderTopColor: 'orange',
    borderLeftColor: 'orange',
    borderRightColor: 'orange',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  questionBtnStyle: {
    width: isTablet ? rwp(35) : rwp(45),
    backgroundColor: colors.darkPink,
    height: isTablet ? rhp(45) : rhp(50),
    alignSelf: 'flex-end',
    borderRadius: 16,
  },
  insideQuestionBtnStyle: {
    height: isTablet ? rhp(39) : rhp(44),
    backgroundColor: colors.lightPink,
    borderTopColor: 'pink',
    borderLeftColor: 'pink',
    borderRightColor: 'pink',
    borderBottomColor: 'white',
    justifyContent: 'center',
  },
  backIconStyle: {
    // resizeMode: 'contain',
    height: rhp(20),
    width: rwp(20),
    alignSelf: 'center',
  },
  textWrapper: {
    width: '60%',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.white,
    fontSize: rfs(28),
  },
});

export default CustomAppBar;
