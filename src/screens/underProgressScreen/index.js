import React from 'react';
import {Image, ImageBackground, StatusBar, View} from 'react-native';
import {styles} from './styles';
import { images } from '../../assets/images';
import { navigateBack } from '../../navigationHandler/navigationRef';
import {  wp } from '../../constants/dimensions';
import { TouchableButton } from '../../components/atoms';

const UnderProgressScreen = ({navigation}) => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Image
        resizeMode="contain"
        source={images.underProgress}
        style={styles.progressImg}
      />
      <TouchableButton title={'Go Back'}
      onPress={()=>navigateBack()}
      btnInside={{width: wp(60)}}
      btnPropStyle={{width:wp(60)}}/>
    </ImageBackground>
  );
};
export default UnderProgressScreen;
