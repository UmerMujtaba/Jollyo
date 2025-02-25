import {useDispatch} from 'react-redux';
import {
  addAnimalSticker,
  addNumberSticker,
  addQuizSticker,
  addShapeSticker,
} from '../redux/slices/rewardsSlice';
import auth from '@react-native-firebase/auth';
import { saveUserReward } from '../helper';

const useRewardManager = () => {
  const dispatch = useDispatch();

  const awardRewardToUser = async (rewardType, rewardDataArray) => {
    const currentUser = auth().currentUser;

    if (currentUser) {
      const userId = currentUser.uid;
      // console.log('🚀 ~ awardRewardToUser ~ userId:', userId);

      for (const rewardData of rewardDataArray) {
        try {
          await saveUserReward(userId, rewardType, rewardData);
          console.log(`Reward ${rewardData.name} saved to Firestore!`);

          switch (rewardType) {
            case 'animalsReward':
              dispatch(addAnimalSticker(rewardData));
              break;
            case 'numbersReward':
              dispatch(addNumberSticker(rewardData));
              break;
            case 'shapesReward':
              dispatch(addShapeSticker(rewardData));
              break;
            case 'quizzesReward':
              dispatch(addQuizSticker(rewardData));
              break;
            default:
              console.error('Invalid reward type');
              return;
          }
        } catch (error) {
          console.error('Error saving reward:', error);
        }
      }
    } else {
      console.error('No user is currently authenticated');
    }
  };

  return {awardRewardToUser};
};

export default useRewardManager;
