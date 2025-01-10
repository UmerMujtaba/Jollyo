import React from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../../assets/images';
import {Strings} from '../../../constants/strings';
import {styles} from './styles';
import CustomAppBar from '../../../components/atoms/customAppBar';
import {rhp} from '../../../constants/dimensions';
import UserGuideComponent from '../../../components/atoms/userGuideComponent';
import UserGuideComponentList from '../../../components/molecules/userGuideComponentList';

const UserGuide = ({navigation}) => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{marginTop: rhp(25)}}>
        <CustomAppBar
          title={'U s e r  G u i d e'}
          // questionMark
          // onQuestionPress={handleQuestionPress}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <UserGuideComponentList />
      </View>
    </ImageBackground>
  );
};
export default UserGuide;
