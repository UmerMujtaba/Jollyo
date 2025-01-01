import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigationRef';
import Auth from './authStack';
import {ScreenNames} from '../constants/strings';
import Bottom from './bottomStack';
import ShapesExercise from '../screens/bottom/exerciseScreens/shapesExercise';
import NumbersExercise from '../screens/bottom/exerciseScreens/numbersExercise';
import AnimalsExercise from '../screens/bottom/exerciseScreens/animalsExercise';
import AlphabetsExercise from '../screens/bottom/exerciseScreens/alphabetExercise';
import AlphabetsExerciseMain from '../screens/bottom/exerciseScreens/alphabetExerciseMain';
import KidsGameExercise from '../screens/bottom/exerciseScreens/kidsGameExercise';

const NavigationStack = createNativeStackNavigator();

export const NavigationHandler = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationStack.Navigator initialRouteName={ScreenNames.AuthStack}>
        {/* <NavigationStack.Navigator initialRouteName={ScreenNames.BottomStack}> */}
        <NavigationStack.Screen
          name={ScreenNames.AuthStack}
          component={Auth}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.BottomStack}
          component={Bottom}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.alphabetExerciseScreen}
          component={AlphabetsExercise}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.shapesExerciseScreen}
          component={ShapesExercise}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.numbersExerciseScreen}
          component={NumbersExercise}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.animalsExerciseScreen}
          component={AnimalsExercise}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.alphabetExerciseMainScreen}
          component={AlphabetsExerciseMain}
          options={{headerShown: false}}
        />
        <NavigationStack.Screen
          name={ScreenNames.kidsGameExerciseScreen}
          component={KidsGameExercise}
          options={{headerShown: false}}
        />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
