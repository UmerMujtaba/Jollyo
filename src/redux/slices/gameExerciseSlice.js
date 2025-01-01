import {createSlice} from '@reduxjs/toolkit';
import {Animated} from 'react-native';

const initialState = {
  exerciseIndex: 1,
  progress: new Animated.Value(0),
  randomGame: [],
  correctGame: null,
  selectedGame: [false, false, false, false],
  selectionStatus: [null, null, null, null],
  showLottie: false,
  isCorrect: '',
};

const gamesExerciseSlice = createSlice({
  name: 'gamesExercise',
  initialState,
  reducers: {
    setExerciseIndex: (state, action) => {
      state.exerciseIndex = action.payload;
    },
    setProgress: (state, action) => {
      state.progress.setValue(action.payload);
    },
    setRandomGame: (state, action) => {
      state.randomGame = action.payload;
    },
    setCorrectGame: (state, action) => {
      state.correctGame = action.payload;
    },
    setSelectedGame: (state, action) => {
      state.selectedGame = action.payload;
    },
    setSelectionStatus: (state, action) => {
      state.selectionStatus = action.payload;
    },
    setShowLottie: (state, action) => {
      state.showLottie = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload;
    },
    resetGame: state => {
      state.selectedGame = [false, false, false, false];
      state.selectionStatus = [null, null, null, null];
      state.isCorrect = '';
    },
  },
});

export const {
  setExerciseIndex,
  setProgress,
  setRandomGame,
  setCorrectGame,
  setSelectedGame,
  setSelectionStatus,
  setShowLottie,
  setIsCorrect,
  resetGame,
} = gamesExerciseSlice.actions;

export default gamesExerciseSlice.reducer;
