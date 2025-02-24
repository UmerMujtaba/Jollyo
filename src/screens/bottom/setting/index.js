import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../assets/images';
import { CalendarComponent, CustomAppBar, ManageScreenTimer } from '../../../components/atoms';
import { setUserData } from '../../../redux/slices/userDataSlice';
import { styles } from './styles';
import { MenuContainer } from '../../../components/molecules';

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
  console.log('User data fetched and dispatched:', {
    username,
    gender,
    age,
    // imagePath,
  });

  return (
    <ImageBackground style={styles.container} source={images.backgroundImage}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bdy}>
          <CustomAppBar
            onBackPress={() => navigation.goBack()}
            notification
            onNotificationPress={() => {}}
            back
            cont={styles.appBarCont}
          />
          <Text style={styles.nameStyle}>{username}</Text>

          <CalendarComponent />
          {/* <Text style={styles.logoutText}>Time spent in app:</Text> */}
          <MenuContainer />
          <ManageScreenTimer />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SettingsScreen;
