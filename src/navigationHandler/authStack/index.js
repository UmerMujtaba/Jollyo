import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/strings';
import onBoardingScreen from '../../screens/auth/onBoarding';
import OtPScreen from '../../screens/auth/otp';
import ProfileScreen from '../../screens/auth/profile';
import KidsInterestSelectionScreen from '../../screens/auth/intersets';
import LoginScreen from '../../screens/auth/login';
import SignUpScreen from '../../screens/auth/signUpScreen';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.BoardingScreen}>
      {/* <AuthStack.Navigator initialRouteName={ScreenNames.profile}> */}
      <AuthStack.Screen
        name={ScreenNames.BoardingScreen}
        component={onBoardingScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.loginScreen}
        component={LoginScreen}
        options={navigationOptions}
      />

      <AuthStack.Screen
        name={ScreenNames.registerationScreen}
        component={SignUpScreen}
        options={navigationOptions}
      />
      {/* <AuthStack.Screen
        name={ScreenNames.otpScreen}
        component={OtPScreen}
        options={navigationOptions}
      /> */}
      <AuthStack.Screen
        name={ScreenNames.profile}
        component={ProfileScreen}
        options={navigationOptions}
      />
      <AuthStack.Screen
        name={ScreenNames.interestScreen}
        component={KidsInterestSelectionScreen}
        options={navigationOptions}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
