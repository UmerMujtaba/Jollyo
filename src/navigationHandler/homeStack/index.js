import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/strings';
import HomeScreen from '../../screens/bottom/home';
import AlphabetsScreen from '../../screens/bottom/pronounciationScreens/alphabets';
import NumbersScreen from '../../screens/bottom/pronounciationScreens/numbers';
import ShapesScreen from '../../screens/bottom/pronounciationScreens/shapes';
import AnimalsScreen from '../../screens/bottom/pronounciationScreens/animals';
import Vehicle from '../../screens/bottom/pronounciationScreens/vehicle';
import ColorsScreen from '../../screens/bottom/pronounciationScreens/colors';

const GameStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const GameNavigator = () => {
  return (
    <GameStack.Navigator initialRouteName={ScreenNames.homeScreen}>
      <GameStack.Screen
        name={ScreenNames.homeScreen}
        component={HomeScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.alphabetsScreen}
        component={AlphabetsScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.numbersScreen}
        component={NumbersScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.shapesScreen}
        component={ShapesScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.animalsScreen}
        component={AnimalsScreen}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.vehicleScreen}
        component={Vehicle}
        options={navigationOptions}
      />
      <GameStack.Screen
        name={ScreenNames.colorsScreen}
        component={ColorsScreen}
        options={navigationOptions}
      />
    </GameStack.Navigator>
  );
};

export default GameNavigator;
