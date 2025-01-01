import {createSlice} from '@reduxjs/toolkit';
import {Animated} from 'react-native';

const initialState = {
  exerciseIndex: 1,
  randomCount: 1,
  options: [],
  progress: new Animated.Value(0),
  feedbackColor: 'transparent',
  isCorrect: '',
  showLottie: false,
};

const numbersExerciseSlice = createSlice({
  name: 'numbersExercise',
  initialState,
  reducers: {
    setExerciseIndex: (state, action) => {
      state.exerciseIndex = action.payload;
    },
    setRandomCount: (state, action) => {
      state.randomCount = action.payload || Math.floor(Math.random() * 10) + 1;
    },
    setOptions: (state, action) => {
      state.options = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = new Animated.Value(action.payload);
    },
    setFeedbackColor: (state, action) => {
      state.feedbackColor = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload;
    },
    setShowLottie: (state, action) => {
      state.showLottie = action.payload;
    },
    resetExercise: state => {
      state.exerciseIndex = 1;
      state.randomCount = 1;
      state.options = [];
      state.progress = new Animated.Value(0);
      state.feedbackColor = 'transparent';
      state.isCorrect = '';
      state.showLottie = false;
    },
  },
});

export const {
  setExerciseIndex,
  setRandomCount,
  setOptions,
  setProgress,
  setFeedbackColor,
  setIsCorrect,
  setShowLottie,
  resetExercise,
} = numbersExerciseSlice.actions;

export default numbersExerciseSlice.reducer;
