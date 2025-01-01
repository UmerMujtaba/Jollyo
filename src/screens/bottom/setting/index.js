import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ImageBackground, ScrollView, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import CalendarComponent from '../../../components/atoms/calendar';
import CustomAppBar from '../../../components/atoms/customAppBar';
import MenuContainer from '../../../components/molecules/menuContainer';
import {styles} from './styles';
import ManageScreenTimer from '../../../components/atoms/manageScreenTimer';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const {username, gender, age} = useSelector(state => state.userReducer);
  const {elapsedTime} = useSelector(state => state.timerReducer);

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <CustomAppBar
        onBackPress={() => navigation.goBack()}
        notification
        onNotificationPress={() => {}}
        back
      />
      <Text style={styles.nameStyle}>{username}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <CalendarComponent />
        <Text style={styles.logoutText}>Time spent in app:</Text>
        <MenuContainer />
        <ManageScreenTimer />
      </ScrollView>
    </ImageBackground>
  );
};

export default SettingsScreen;
