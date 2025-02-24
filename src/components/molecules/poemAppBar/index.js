import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { styles } from './styles';
import { ToggleView } from '../../atoms';
import { images } from '../../../assets/images';

export const PoemAppBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarView}>
      <View style={styles.space}>
        <View style={styles.btnStyle}>
          <TouchableOpacity
            style={[styles.btnStyle, styles.insideBtnStyle]}
            onPress={() => navigation.goBack()}>
            <FastImage
              source={images.icons.backIcon}
              style={styles.backIconStyle}
              resizeMode={FastImage.resizeMode.contain}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ToggleView />
      <View style={styles.space} />
    </View>
  );
};

