import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {ImageBackground, ScrollView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import CalendarComponent from '../../../components/atoms/calendar';
import CustomAppBar from '../../../components/atoms/customAppBar';
import MenuContainer from '../../../components/molecules/menuContainer';
import {styles} from './styles';
import ManageScreenTimer from '../../../components/atoms/manageScreenTimer';
import {setUserData} from '../../../redux/slices/userDataSlice';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const {username, gender, age} = useSelector(state => state.userReducer);
  const {elapsedTime} = useSelector(state => state.timerReducer);
  const dispatch = useDispatch();
  const userId = auth().currentUser?.uid;

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const userDoc = await firestore()
            .collection('users')
            .doc(userId)
            .get();

          if (userDoc.exists) {
            const userData = userDoc.data();
            const {username, gender, age, imagePath} = userData;

            dispatch(
              setUserData({
                username: userData.username,
                gender: userData.gender,
                age: userData.age,
                imagePath: userData.imagePath,
              }),
            );

            console.log('User data fetched and dispatched:', {
              username,
              gender,
              age,
              imagePath,
            });
          } else {
            console.log('No user data found');
          }
        } catch (error) {
          console.error('Error fetching user data: ', error);
        }
      } else {
        console.error('User not authenticated');
      }
    };

    fetchUserData();
  }, [userId, dispatch]);
  console.log(
    `🚀 ~ SettingsScreen ~ username: ${username},  age: ${age}, gender: ${gender}`,
  );

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <CustomAppBar
        onBackPress={() => navigation.goBack()}
        notification
        onNotificationPress={() => {}}
        back
        cont={styles.appBarCont}
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
