import {createSlice} from '@reduxjs/toolkit';
import {Animated} from 'react-native';

const initialState = {
  exerciseIndex: 1,
  progress: new Animated.Value(0),
  selectedAnimals: [false, false, false, false],
  selectionStatus: [null, null, null, null],
  randomAnimals: [],
  correctAnimal: null,
  showLottie: false,
  isCorrect: '',
};

const animalsExerciseSlice = createSlice({
  name: 'animalsExercise',
  initialState,
  reducers: {
    setExerciseIndex: (state, action) => {
      state.exerciseIndex = action.payload;
    },
    setProgress: (state, action) => {
      state.progress.setValue(action.payload);
    },
    setSelectedAnimals: (state, action) => {
      state.selectedAnimals = action.payload;
    },
    setSelectionStatus: (state, action) => {
      state.selectionStatus = action.payload;
    },
    setRandomAnimals: (state, action) => {
      state.randomAnimals = action.payload;
    },
    setShowLottie: (state, action) => {
      state.showLottie = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload;
    },

    setCorrectAnimal: (state, action) => {
      state.correctAnimal = action.payload;
    },
    resetAnimals: state => {
      state.exerciseIndex = 1;
      state.progress = 1;
      state.selectedAnimals = '';
      state.selectionStatus = '';
      state.randomAnimals = '';
      state.showLottie = '';
      state.isCorrect = '';
      state.correctAnimal = '';
    },
  },
});

export const {
  setExerciseIndex,
  setProgress,
  setSelectedAnimals,
  setSelectionStatus,
  setRandomAnimals,
  setShowLottie,
  setIsCorrect,
  setCorrectAnimal,
  resetAnimals,
} = animalsExerciseSlice.actions;

export default animalsExerciseSlice.reducer;
