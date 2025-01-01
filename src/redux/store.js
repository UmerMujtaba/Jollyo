import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import alphabetsExerciseReducer from './slices/alphabetsExerciseSlice';
import numbersExerciseReducer from './slices/numbersExerciseSlice';
import shapesExerciseReducer from './slices/shapesExerciseSlice';
import animalExerciseReducer from './slices/animalExerciseSlice';
import gamesExerciseReducer from './slices/gameExerciseSlice';
import rewardsReducer from './slices/rewardsSlice';
import userReducer from './slices/userDataSlice';
import timerReducer from './slices/timerSlice';

const reducers = combineReducers({
  alphabetsExerciseReducer,
  numbersExerciseReducer,
  shapesExerciseReducer,
  animalExerciseReducer,
  gamesExerciseReducer,
  rewardsReducer,
  userReducer,
  timerReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: [
  //   'alphabetsExercise',
  //   'numbersExercise',
  //   'shapesExercise',
  //   'animalsExercise',
  //   'gamesExercise',
  //   'rewards',
  // ],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: false,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export {persistor, store};
