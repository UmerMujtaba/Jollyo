import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenNames } from '../../constants/strings';
import KidsInterestSelectionScreen from '../../screens/auth/intersets';
import LoginScreen from '../../screens/auth/login';
import onBoardingScreen from '../../screens/auth/onBoarding';
import ProfileScreen from '../../screens/auth/profile';
import SignUpScreen from '../../screens/auth/signUpScreen';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

export const Auth = () => {
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

