import React, {useState} from 'react';
import {Alert, ImageBackground, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../../assets/images';
import AuthPrompt from '../../../components/atoms/authPrompt';
import {TouchableButton} from '../../../components/atoms/button';
import {HeadingText} from '../../../components/atoms/heading';
import InputField from '../../../components/molecules/inputField';
import InputFieldContainer from '../../../components/organisms/inputFieldContainer';
import {rfs, rhp} from '../../../constants/dimensions';
import {ScreenNames, Strings} from '../../../constants/strings';
import firebaseHelperFunctions from '../../../helper/firebaseHelperFunctions';
import {useKeyboard} from '../../../hooks';
import {navigate} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';

const SignUpScreen = () => {
  const keyboardStatus = useKeyboard();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] =
    useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const goToLogin = () => {
    navigate(ScreenNames.loginScreen);
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
      await firebaseHelperFunctions.signUpWithEmail(email, password);
      Alert.alert('Success', 'Account created successfully!');
      navigate(ScreenNames.profile);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to create account. Please try again.');
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
      />

      <View style={{paddingHorizontal: 20}}>
        <InputField
          heading={Strings.confirmPassword}
          keyboardType="default"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          inputText={[{fontSize: rfs(24)}]}
        />
      </View>

      <AuthPrompt
        title={Strings.alreadyHaveAnAccount}
        buttonText={Strings.login}
        onPress={goToLogin}
      />

      <TouchableButton
        title={Strings.register}
        btnPropStyle={{marginTop: rhp(20)}}
        onPress={handleRegister}
      />

      {!keyboardStatus && (
        <View
          style={{flex: 1, justifyContent: 'flex-end', marginBottom: rhp(10)}}>
          <FastImage
            source={images.cubImage}
            style={styles.imgStyle}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      )}
    </ImageBackground>
  );
};

export default SignUpScreen;