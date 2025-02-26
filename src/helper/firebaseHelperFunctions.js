// firebaseAuth.js

import auth from '@react-native-firebase/auth';

export const signUpWithEmail = async (email, password) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
    console.log('User account created!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signInWithEmail = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    console.log('User signed in!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
    console.log('User signed out!');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const isUserLoggedIn = () => {
  return auth().currentUser !== null;
};

export const getCurrentUser = () => {
  return auth().currentUser;
};


