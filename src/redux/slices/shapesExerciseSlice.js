import {createSlice} from '@reduxjs/toolkit';
import {shapesExerciseData} from '../../utils/shapesExerciseData';

const initialState = {
  currentExerciseIndex: 0,
  selectedOption: null,
  isCorrect: null,
  randomShapes: [],
  playFireworks: false,
  showModal: false,
};

const shapesExerciseSlice = createSlice({
  name: 'shapesExercise',
  initialState,
  reducers: {
    setCurrentExerciseIndex: (state, action) => {
      state.currentExerciseIndex = action.payload;
    },
    setSelectedOption: (state, action) => {
      state.selectedOption = action.payload;
    },
    setIsCorrect: (state, action) => {
      state.isCorrect = action.payload;
    },
    setRandomShapes: state => {
      const options = [];
      const correctShape =
        shapesExerciseData[
          Math.floor(Math.random() * shapesExerciseData.length)
        ];

      options.push(correctShape);

      while (options.length < 3) {
        const randomShape =
          shapesExerciseData[
            Math.floor(Math.random() * shapesExerciseData.length)
          ];
        if (!options.some(option => option.name === randomShape.name)) {
          options.push(randomShape);
        }
      }

      state.randomShapes = options.sort(() => Math.random() - 0.5);
    },
    setPlayFireworks: (state, action) => {
      state.playFireworks = action.payload;
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    resetState: state => {
      state.currentExerciseIndex = 0;
      state.selectedOption = null;
      state.isCorrect = null;
      state.randomShapes = [];
      state.playFireworks = false;
      state.showModal = false;
    },
  },
});

export const {
  setCurrentExerciseIndex,
  setSelectedOption,
  setIsCorrect,
  setRandomShapes,
  setPlayFireworks,
  setShowModal,
  resetState,
} = shapesExerciseSlice.actions;

export default shapesExerciseSlice.reducer;
