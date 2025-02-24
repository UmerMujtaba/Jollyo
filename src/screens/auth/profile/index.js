import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {ImageBackground, StatusBar, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import {ScreenNames, Strings} from '../../../constants/strings';
import {
  setAge,
  setGender,
  setUsername,
} from '../../../redux/slices/userDataSlice';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {rhp} from '../../../constants/dimensions';
import {navigateReset} from '../../../navigationHandler/navigationRef';
import {colors} from '../../../constants/colors';
import { CustomTextInput, HeadingText, HorizontalNumberList, TouchableButton } from '../../../components/atoms';
import { ProfilesAvatarContainer } from '../../../components/molecules';

const ProfileScreen = () => {
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const userId = auth().currentUser?.uid;
  // const [userData, setUserData] = useState(null);

  const {username, gender, age, imagePath} = useSelector(
    state => state.userReducer,
  );
  console.log(
    '🚀 ~ ProfileScreen ~ username, gender, age:',
    username,
    gender,
    age,
    imagePath,
  );

  const secondInputRef = useRef();

  const saveUserDataToFirebase = async () => {
    try {
      if (userId) {
        await firestore()
          .collection('users') // Create or access 'users' collection
          .doc(userId) // Use the userId as the document ID
          .update({
            username: username,
            gender: gender,
            age: age,
            imagePath: imagePath,
            createdAt: firestore.FieldValue.serverTimestamp(),
          });

        console.log('User data saved to Firebase successfully!');
      } else {
        console.error('User is not authenticated');
      }
    } catch (error) {
      console.error('Error saving user data to Firebase: ', error);
    }
  };

  const handleUsernameChange = text => {
    dispatch(setUsername(text));
    setUsernameErrorMessage('');
    setErrorMessage('');
  };

  const validateUsername = () => {
    if (username.trim().length < 3) {
      setUsernameErrorMessage('Username must be at least 3 characters');
      return false;
    }
    return true;
  };

  const handleNextPress = () => {
    if (validateUsername() && gender && age) {
      saveUserDataToFirebase();
      navigateReset(ScreenNames.interestScreen);
      const item = {username: username, gender: gender, age: age};
      console.log('🚀 ~ ProfileScreen ~ item:', item);
    } else {
      setErrorMessage('Please fill in all the details');
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={colors.PURPLE.backgroundClr}
      />
      <HeadingText />
      <ProfilesAvatarContainer
        onGenderSelect={selectedGender => dispatch(setGender(selectedGender))}
      />
      <Text style={styles.nameHeading}>{Strings.childName}</Text>
      <CustomTextInput
        inputText={[
          styles.inputFont,
          usernameErrorMessage && styles.errorBorder,
        ]}
        style={styles.inputFieldStyle(usernameErrorMessage)}
        returnKeyType="next"
        onSubmitEditing={() =>
          secondInputRef.current && secondInputRef.current.focus()
        }
        value={username}
        onChangeText={handleUsernameChange}
      />
      {usernameErrorMessage && (
        <Text style={styles.errorMessage}>{usernameErrorMessage}</Text>
      )}

      <Text style={styles.ageHeading}>{Strings.yourAge}</Text>
      <HorizontalNumberList
        selectedNumber={age}
        setSelectedNumber={selectedAge => dispatch(setAge(selectedAge))}
      />
      {/* {errorMessage && ToastAndroid.show(errorMessage, ToastAndroid.LONG)} */}
      <TouchableButton
        title="Next"
        btnPropStyle={{marginTop: rhp(50)}}
        onPress={handleNextPress}
      />
    </ImageBackground>
  );
};

export default ProfileScreen;
