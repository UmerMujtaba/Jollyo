import {images} from '../assets/images';
import {ScreenNames} from '../constants/strings';

export const MainExerciseData = [
  {
    id: 1,
    imageSource: images.alphabets.alphabetsGroup,
    heading: 'Alphabets',
    screen: ScreenNames.alphabetExerciseScreen,
  },
  {
    id: 2,
    imageSource: images.numbers.numbersGroup,
    heading: 'Numbers',
    screen: ScreenNames.numbersExerciseScreen,
  },
  {
    id: 4,
    imageSource: images.shapes.shapesGroup,
    heading: 'Shapes',
    screen: ScreenNames.shapesExerciseScreen,
  },
  {
    id: 5,
    imageSource: images.animals.animalsGroup,
    heading: 'Animals',
    screen: ScreenNames.animalsExerciseScreen,
  },
  {
    id: 6,
    imageSource: images.games.gamingKidsGroup,
    heading: 'Quiz Game',
    screen: ScreenNames.kidsGameExerciseScreen,
  },
];
