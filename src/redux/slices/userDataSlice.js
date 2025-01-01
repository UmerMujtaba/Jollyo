import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gender: null,
  age: 1,
  imagePath: '',
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

    resetUserData: state => {
      state.username = '';
      state.gender = null;
      state.age = 1;
      state.imagePath = '';
    },
  },
});

export const {setUsername, setGender, setAge, resetUserData} =
  UserSlice.actions;

export default UserSlice.reducer;
