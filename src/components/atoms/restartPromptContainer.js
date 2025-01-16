import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images';
import {colors} from '../../constants/colors';
import {hp, rfs, rhp, rwp, wp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
import {TouchableButton} from './button';

const RestartPrompt = ({onRestart}) => {
  return (
    <View style={styles.restartPromptContainer}>
      <Text style={styles.restartPromptText}>
        You have completed exercise !
      </Text>
      <FastImage
        source={images.bearCompletion}
        resizeMode={FastImage.resizeMode.contain}
        style={styles.completeImg}
        defaultSource={images.defaultImg}
      />
      <Text style={[styles.restartPromptText, {fontSize: rfs(20)}]}>
        Do you want to start again ?
      </Text>
      <TouchableButton
        btnInside={styles.btnRestart}
        btnPropStyle={styles.btnRestart}
        title={'Restart'}
        onPress={onRestart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restartPromptContainer: {
    position: 'absolute',
    top: '14%',
    backgroundColor: colors.backgroundClr,
    paddingHorizontal: rwp(40),
    paddingVertical: rhp(20),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  restartPromptText: {
    fontSize: rfs(24),
    color: colors.darkOrange,
    paddingVertical: rhp(10),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  btnRestart: {
    width: wp(30),
  },
  completeImg: {
    width: wp(60),
    height: hp(35),
  },
});
export default RestartPrompt;
