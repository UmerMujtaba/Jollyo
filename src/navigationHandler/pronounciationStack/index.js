import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../../constants/strings';
import AlphabetsScreen from '../../screens/bottom/pronounciationScreens/alphabets';
import NumbersScreen from '../../screens/bottom/pronounciationScreens/numbers';
import ShapesScreen from '../../screens/bottom/pronounciationScreens/shapes';
import AnimalsScreen from '../../screens/bottom/pronounciationScreens/animals';
import Vehicle from '../../screens/bottom/pronounciationScreens/vehicle';
import ColorsScreen from '../../screens/bottom/pronounciationScreens/colors';
import Pronunciation from '../../screens/bottom/pronounciation';
import PoemsScreen from '../../screens/bottom/pronounciationScreens/poems';

const PronunciationStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right',
});

const PronunciationNavigator = () => {
  return (
    <PronunciationStack.Navigator initialRouteName={ScreenNames.pronunciation}>
      <PronunciationStack.Screen
        name={ScreenNames.pronunciation}
        component={Pronunciation}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.alphabetsScreen}
        component={AlphabetsScreen}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.numbersScreen}
        component={NumbersScreen}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.shapesScreen}
        component={ShapesScreen}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.animalsScreen}
        component={AnimalsScreen}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.vehicleScreen}
        component={Vehicle}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.colorsScreen}
        component={ColorsScreen}
        options={navigationOptions}
      />
      <PronunciationStack.Screen
        name={ScreenNames.poemsScreen}
        component={PoemsScreen}
        options={{headerShown: false}}
      />
    </PronunciationStack.Navigator>
  );
};

export default PronunciationNavigator;
