import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenNames} from '../../constants/strings';
import HomeScreen from '../../screens/bottom/home';

const HomeStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={ScreenNames.homeScreen}>
      <HomeStack.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={navigationOptions}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
