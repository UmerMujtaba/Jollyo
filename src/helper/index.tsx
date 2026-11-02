import {
  fetchRewards,
  storeUserData,
  fetchUserData,
  saveUserReward,
} from './firebase';

import { signInWithEmail,signUpWithEmail,signOut,isUserLoggedIn,getCurrentUser } from './firebaseHelperFunctions';

export {
  fetchRewards,
  storeUserData,
  fetchUserData,
  saveUserReward,
  signInWithEmail,
  signUpWithEmail,
  signOut,
  isUserLoggedIn,
  getCurrentUser,
};