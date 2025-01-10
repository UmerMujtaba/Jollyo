import {createSlice} from '@reduxjs/toolkit';

const mergeRewards = (existingRewards, newRewards) => {
  const allRewards = [...existingRewards, ...newRewards];
  const uniqueRewards = allRewards.filter(
    (value, index, self) =>
      index === self.findIndex(t => t.name === value.name),
  );
  return uniqueRewards;
};

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
      const newReward = action.payload;
      if (!state.animalsReward.some(reward => reward.name === newReward.name)) {
        state.animalsReward.push(newReward);
      }
    },
    addNumberSticker: (state, action) => {
      const newReward = action.payload;
      if (!state.numbersReward.some(reward => reward.name === newReward.name)) {
        state.numbersReward.push(newReward);
      }
    },
    addShapeSticker: (state, action) => {
      const newReward = action.payload;
      if (!state.shapesReward.some(reward => reward.name === newReward.name)) {
        state.shapesReward.push(newReward);
      }
    },
    addQuizSticker: (state, action) => {
      const newReward = action.payload;
      if (!state.quizzesReward.some(reward => reward.name === newReward.name)) {
        state.quizzesReward.push(newReward);
      }
    },
    setFetchedRewards: (state, action) => {
      const rewardsData = action.payload;

      state.animalsReward = mergeRewards(
        state.animalsReward,
        rewardsData.animalsReward,
      );
      state.numbersReward = mergeRewards(
        state.numbersReward,
        rewardsData.numbersReward,
      );
      state.shapesReward = mergeRewards(
        state.shapesReward,
        rewardsData.shapesReward,
      );
      state.quizzesReward = mergeRewards(
        state.quizzesReward,
        rewardsData.quizzesReward,
      );
    },
    resetRewardsData: state => {
      state.animalsReward = '';
      state.numbersReward = '';
      state.shapesReward = '';
      state.quizzesReward = '';
    },
  },
});

export const {
  addAnimalSticker,
  addNumberSticker,
  addShapeSticker,
  addQuizSticker,
  setFetchedRewards,
  resetRewardsData,
} = rewardSlice.actions;

export default rewardSlice.reducer;
