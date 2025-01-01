// firebaseAuth.js

import auth from '@react-native-firebase/auth';

const signUpWithEmail = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signInWithEmail = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const signOut = async () => {
  try {
    await auth().signOut();
    console.log('User signed out!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const isUserLoggedIn = () => {
  return auth().currentUser !== null;
};

const getCurrentUser = () => {
  return auth().currentUser;
};

export default {
  signInWithEmail,
  signUpWithEmail,
  signOut,
  isUserLoggedIn,
  getCurrentUser,
};
