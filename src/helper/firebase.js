// src/utils/firebase.js
import firestore from '@react-native-firebase/firestore';
import { setFetchedRewards } from '../redux/slices';

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

export const fetchRewards = userId => async dispatch => {
  try {
    const rewardsRef = firestore()
      .collection('users')
      .doc(userId)
      .collection('rewards');

    const rewardsSnapshot = await rewardsRef.get();

    const rewardsData = {
      animalsReward: [],
      numbersReward: [],
      shapesReward: [],
      quizzesReward: [],
    };

    rewardsSnapshot.forEach(doc => {
      if (rewardsData[doc.id]) {
        rewardsData[doc.id] = doc.data().rewards || [];
      }
    });

    // Dispatch the action to set the fetched rewards and ensure no duplicates
    dispatch(setFetchedRewards(rewardsData));
    console.log('🚀 ~ rewardsData:', rewardsData);
  } catch (error) {
    console.log('Error fetching rewards:', error);
  }
};

export const saveUserReward = async (userId, rewardType, rewardData) => {
  console.log(
    '🚀 ~ saveUserReward ~ userId:',
    userId,
    'rewardType:',
    rewardType,
    'rewardData:',
    rewardData,
  );
  try {
    const userRewardsCollection = firestore()
      .collection('users')
      .doc(userId)
      .collection('rewards');

    const categoryDocRef = userRewardsCollection.doc(rewardType);

    const docSnapshot = await categoryDocRef.get();
    console.log('🚀 ~ Firestore Document Snapshot:', docSnapshot.exists);

    await categoryDocRef.set(
      {
        rewards: firestore.FieldValue.arrayUnion(rewardData),
      },
      {merge: true},
    );

    console.log(
      `Reward ${rewardData.name} saved to user's ${rewardType} category successfully!`,
    );
  } catch (error) {
    console.error('Error saving reward to Firestore:', error);
    if (error.code) {
      console.error('Firestore Error Code:', error.code);
    }
  }
};
