import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useEffect } from 'react';
import { ImageBackground, StatusBar, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { images } from '../../../assets/images';
import { ScrollableSelectionList } from '../../../components/molecules';
import { Strings } from '../../../constants/strings';
import { setUserData } from '../../../redux/slices/userDataSlice';
import { styles } from './styles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const userId = auth().currentUser?.uid;
  const {username, imagePath, age, gender, isNewUser} = useSelector(
    state => state.userReducer,
  );
  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        console.log('🚀 ~ fetchUserData ~ userId:', userId);
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
            console.log('No user data found for this user');
          }
        } catch (error) {
          console.error('Error fetching user data: ', error.message || error);
        }
      } else {
        console.error('User not authenticated');
      }
    };

    fetchUserData();
  }, [userId, dispatch]);

  console.log('User data fetched and dispatched:', {
    username,
    gender,
    age,
    imagePath,
  });
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <View style={styles.appBarContainer}>
        <FastImage
          source={imagePath}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.avatarImg}
          defaultSource={images.defaultImg}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.nameHeading}>{`Hi, ${username}`}</Text>
          <Text style={styles.welcome}>
            {isNewUser ? Strings.welcome : Strings.welcomeAgain}
          </Text>
        </View>
      </View>
      <ScrollableSelectionList />
    </ImageBackground>
  );
};
export default HomeScreen;
