// src/utils/firebase.js
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const usersCollection = firestore().collection('users');

export const storeUserData = async (userId, name, gender, age) => {
  try {
    await usersCollection.doc(userId).set({
      name,
      gender,
      age,
    });
    console.log('User data stored in Firestore');
  } catch (error) {
    console.error('Error storing user data:', error);
  }
};

export const fetchUserData = async userId => {
  try {
    const userDoc = await usersCollection.doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.log('User data not found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};
