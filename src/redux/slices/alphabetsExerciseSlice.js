import {createSlice} from '@reduxjs/toolkit';
import {alphabetData} from '../../utils/alphabetsScreenData';

const initialState = {
  alphabetsExerciseList: alphabetData.map(lesson => ({
    ...lesson,
    progress: 0,
  })),
};

const alphabetsExerciseSlice = createSlice({
  name: 'alphabetsExercise',
  initialState,
  reducers: {
    setAlphabetProgress: (state, action) => {
      const {index, progress} = action.payload;
      state.alphabetsExerciseList[index].progress = progress;
    },
    resetProgress: state => {
      state.alphabetsExerciseList = state.alphabetsExerciseList.map(lesson => ({
        ...lesson,
        progress: 0,
      }));
    },
  },
});

export const {setAlphabetProgress, resetProgress} =
  alphabetsExerciseSlice.actions;
export default alphabetsExerciseSlice.reducer;
