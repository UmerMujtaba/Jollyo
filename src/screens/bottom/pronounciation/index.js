import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../../assets/images';
import {styles} from './styles';
import {isTablet, rhp} from '../../../constants/dimensions';
import {Strings} from '../../../constants/strings';
import { CustomAppBar } from '../../../components/atoms';
import { SoundItemListContainer } from '../../../components/molecules';

const Pronunciation = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
        }}>
        <CustomAppBar
          title={Strings.pronunciation}
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <SoundItemListContainer />
      </View>
    </ImageBackground>
  );
};

export default Pronunciation;
