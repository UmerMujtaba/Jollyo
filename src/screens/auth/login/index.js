import React, {useState} from 'react';
import {Alert, ImageBackground, View} from 'react-native';
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
import {navigate} from '../../../navigationHandler/navigationRef';
import {styles} from './styles';

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
      navigate('BottomStack', {screen: ScreenNames.homeScreen});
    } catch (error) {
      console.error(error);
      console.log(error);
      Alert.alert(
        'Error',
        'Login failed. Please check your credentials and try again.',
      );
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
        inputEmailText={{fontSize: rfs(24)}}
        inputPasswordText={{fontSize: rfs(24)}}
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
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      )}
    </ImageBackground>
  );
};
export default LoginScreen;
