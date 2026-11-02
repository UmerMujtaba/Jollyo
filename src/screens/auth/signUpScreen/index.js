import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { images } from '../../../assets/images';
import {
  AuthPrompt,
  HeadingText,
  TouchableButton,
} from '../../../components/atoms';
import { rfs, rhp, wp } from '../../../constants/dimensions';
import { ScreenNames, Strings } from '../../../constants/strings';
import {
  navigate,
  navigateReset,
} from '../../../navigationHandler/navigationRef';
import { setNewUser } from '../../../redux/slices/userDataSlice';
import { styles } from './styles';
import { InputFieldContainer } from '../../../components/organisms';
import { InputField } from '../../../components/molecules';
import { signUpWithEmail } from '../../../helper';
import { useKeyboard } from '../../../hooks';

const SignUpScreen = () => {
  const keyboardStatus = useKeyboard();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');

  const [showPassword, setShowPassword] = useState(false);

  const goToLogin = () => {
    navigate(ScreenNames.loginScreen);
  };

  const saveEmailToFirebase = async user => {
    try {
      if (user?.uid) {
        await firestore().collection('users').doc(user.uid).set({
          email: email,
        });
        dispatch(setNewUser(true));
        console.log('User email saved to Firebase successfully!');
      } else {
        console.error('User is not authenticated');
      }
    } catch (error) {
      console.error('Error saving email to Firebase:', error);
    }
  };

  const handleRegister = async () => {
    setEmailErrorMessage('');
    setPasswordErrorMessage('');
    setConfirmPasswordErrorMessage('');

    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters.');
      return;
    }

    try {
      await signUpWithEmail(email, password);
      const user = auth().currentUser;

      if (user) {
        console.log('User account created!');
        await saveEmailToFirebase(user);

        navigateReset(ScreenNames.profile);
      } else {
        Alert.alert('Error', 'User is not authenticated.');
        // Alert.alert('Error', 'User is not authenticated.');
      }
    } catch (error) {
      console.error(error);
      // Alert.alert(error, error.message);
      Alert.alert('error', 'Failed to create account. Please try again.');
    }
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <HeadingText />
      <InputFieldContainer
        headingOne={Strings.email}
        headingTwo={Strings.password}
        EmailValue={email}
        onEmailChangeText={setEmail}
        PasswordValue={password}
        onPasswordChangeText={setPassword}
        secureTextEntry
        inputEmailText={[styles.emailInputField]}
        inputPasswordText={[styles.passwordInputField]}
        emailAutCapitalize={'none'}
        passwordAutoCapitalize={'none'}
      />

      <View style={styles.passwordContainer}>
        <View style={{ flex: 1 }}>
          <InputField
            heading={Strings.confirmPassword}
            keyboardType="default"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showPassword}
            inputText={[{ fontSize: rfs(6) }]}
            autoCapitalize={'none'}
          />
        </View>
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={images.icons.eyeIcon}
            style={[styles.eyeIcon, { opacity: showPassword ? 1 : 0.5 }]}
          />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: rhp(15) }}>
        <AuthPrompt
          title={Strings.alreadyHaveAnAccount}
          buttonText={Strings.login}
          onPress={goToLogin}
        />
      </View>

      <TouchableButton
        title={Strings.register}
        btnPropStyle={{ marginTop: rhp(20), width: wp(80) }}
        btnInside={{ width: wp(80) }}
        onPress={handleRegister}
      />

      {!keyboardStatus && (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <FastImage
            source={images.cubConfusedImage}
            style={styles.imgStyle}
            resizeMode={FastImage.resizeMode.contain}
            defaultSource={images.defaultImg}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default SignUpScreen;
