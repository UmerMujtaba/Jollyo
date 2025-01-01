import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  animalsReward: [],
  numbersReward: [],
  shapesReward: [],
  quizzesReward: [],
};

const rewardSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    addAnimalSticker: (state, action) => {
      state.animalsReward.push(action.payload);
    },
    addNumberSticker: (state, action) => {
      state.numbersReward.push(action.payload);
    },
    addShapeSticker: (state, action) => {
      state.shapesReward.push(action.payload);
    },
    addQuizSticker: (state, action) => {
      state.quizzesReward.push(action.payload);
    },
  },
});

export const {
  addAnimalSticker,
  addNumberSticker,
  addShapeSticker,
  addQuizSticker,
} = rewardSlice.actions;

export default rewardSlice.reducer;
