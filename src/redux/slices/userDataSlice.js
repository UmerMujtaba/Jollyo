import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react';

const initialState = {
  username: '',
  gender: null,
  age: 1,
  imagePath: '',
  userId: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload.gender;
      state.imagePath = action.payload.imagePath;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserData: (state, action) => {
      const {username, gender, age, imagePath} = action.payload;

      state.username = username;
      state.gender = gender;
      state.age = age;
      state.imagePath = imagePath || '';
    },
    resetUserData: state => {
      state.username = '';
      state.gender = null;
      state.age = 1;
      state.imagePath = '';
    },
  },
});

export const {
  setUsername,
  setGender,
  setAge,
  setUserId,
  resetUserData,
  setUserData,
} = UserSlice.actions;

export default UserSlice.reducer;
