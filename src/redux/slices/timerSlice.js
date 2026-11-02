import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  elapsedTime: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setElapsedTime: (state, action) => {
      state.elapsedTime = action.payload;
    },
    resetElapsedTime: state => {
      state.elapsedTime = 0;
    },
  },
});

export const {setElapsedTime, resetElapsedTime} = timerSlice.actions;
export default timerSlice.reducer;
