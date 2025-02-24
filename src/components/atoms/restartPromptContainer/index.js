import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { images } from '../../../assets/images';
import { rfs } from '../../../constants/dimensions';
import { TouchableButton } from '../button';
import { styles } from './styles';

export const RestartPrompt = ({onRestart}) => {
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

