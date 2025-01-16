import React from 'react';
import {ImageBackground, StatusBar, View} from 'react-native';
import {images} from '../../../assets/images';
import CustomAppBar from '../../../components/atoms/customAppBar';
import UserGuideComponentList from '../../../components/molecules/userGuideComponentList';
import {rhp} from '../../../constants/dimensions';
import {styles} from './styles';
import {Strings} from '../../../constants/strings';

const UserGuide = ({navigation}) => {
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={{marginTop: rhp(25)}}>
        <CustomAppBar
          title={Strings.userGuideHeading}
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
