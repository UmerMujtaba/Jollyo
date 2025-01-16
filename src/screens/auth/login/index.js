import React, {useState} from 'react';
import {Alert, ImageBackground, StatusBar, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../../assets/images';
import AuthPrompt from '../../../components/atoms/authPrompt';
import {TouchableButton} from '../../../components/atoms/button';
import {HeadingText} from '../../../components/atoms/heading';
import InputFieldContainer from '../../../components/organisms/inputFieldContainer';
import {rfs, rhp} from '../../../constants/dimensions';
import {ScreenNames, Strings} from '../../../constants/strings';
import firebaseHelperFunctions from '../../../helper/firebaseHelperFunctions';
import {useKeyboard} from '../../../hooks';
import {
  navigate,
  navigateReset,
} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {colors} from '../../../constants/colors';

const LoginScreen = () => {
  const keyboardStatus = useKeyboard();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    navigate(ScreenNames.registerationScreen);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    try {
      await firebaseHelperFunctions.signInWithEmail(email, password);
      console.log('User logged in successfully!');

      const user = auth().currentUser;
      if (user) {
        const userEmail = user.email;
        console.log('🚀 ~ handleLogin ~ userEmail:', userEmail);

        const userDoc = await firestore()
          .collection('users')
          .where('email', '==', userEmail)
          .get();

        if (!userDoc.empty) {
          const userData = userDoc.docs[0].data();
          console.log('User data fetched:', userData);

          // Optionally, you can store this data in a global state or Redux store
          // dispatch(setUserData(userData));

          navigateReset('BottomStack', {screen: ScreenNames.homeScreen});
        } else {
          console.log('User data not found in Firestore');
          Alert.alert('Error', 'User data not found.');
        }
      } else {
        Alert.alert('Error', 'User is not authenticated.');
      }
    } catch (error) {
      console.error('Login failed', error);
      Alert.alert(
        'Error',
        'Login failed. Please check your credentials and try again.',
      );
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <StatusBar
        backgroundColor={colors.PURPLE.backgroundClr}
        translucent={true}
      />
      <HeadingText />
      <InputFieldContainer
        headingOne={Strings.email}
        headingTwo={Strings.password}
        EmailValue={email}
        onEmailChangeText={setEmail}
        PasswordValue={password}
        onPasswordChangeText={setPassword}
        secureTextEntry
        inputEmailText={{fontSize: rfs(24)}}
        inputPasswordText={{fontSize: rfs(24)}}
        emailAutCapitalize={'none'}
        passwordAutoCapitalize={'none'}
      />

      <AuthPrompt
        title={Strings.dntHaveAnAccount}
        buttonText={Strings.register}
        onPress={goToRegister}
      />
      <TouchableButton
        title={Strings.login}
        btnPropStyle={{marginTop: rhp(50)}}
        onPress={handleLogin}
      />
      {!keyboardStatus && (
        <View
          style={{flex: 1, justifyContent: 'flex-end', marginBottom: rhp(30)}}>
          <FastImage
            source={images.cubImage}
            style={styles.imgStyle}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={images.defaultImg}
          />
        </View>
      )}
    </ImageBackground>
  );
};
export default LoginScreen;
