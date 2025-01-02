import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import SoundItemListContainer from '../../../components/molecules/soundItemListContainer';
import {styles} from './styles';
import {isTablet, rhp} from '../../../constants/dimensions';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View
        style={{
          marginTop: isTablet ? rhp(20) : rhp(10),
          // marginBottom: rhp(15),
        }}>
        <CustomAppBar
          title={'Pronunciations'}
          onBackPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.body}>
        <SoundItemListContainer />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
