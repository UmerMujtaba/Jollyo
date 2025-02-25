import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {images} from '../../../assets/images';
import {rhp} from '../../../constants/dimensions';
import {styles} from './styles';
import {Strings} from '../../../constants/strings';
import auth from '@react-native-firebase/auth';
import { CustomAppBar } from '../../../components/atoms';
import { fetchRewards } from '../../../helper';
const RewardsScreen = () => {
  const {animalsReward, numbersReward, shapesReward, quizzesReward} =
    useSelector(state => state.rewardsReducer);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentUser = auth().currentUser;

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchRewards(currentUser.uid));
    }
  }, [currentUser]);

  const rewardSections = [
    {title: 'Animal Rewards', data: animalsReward},
    {title: 'Number Rewards', data: numbersReward},
    {title: 'Shape Rewards', data: shapesReward},
    {title: 'Quiz Rewards', data: quizzesReward},
  ];
  // console.log('🚀 ~ RewardsScreen ~ rewardSections:', rewardSections);

  const renderRewardItem = ({item}) => {
    const imageSource = item.image || images.defaultImg;
    return (
      <View style={styles.rewardItem}>
        <Image
          source={imageSource}
          style={styles.rewardImage}
          defaultSource={images.defaultImg}
        />
        <Text style={styles.rewardName}>{item.name}</Text>
      </View>
    );
  };

  const renderSection = section => {
    if (section.data.length === 0) {
      return (
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.emptySection}>
            <Image source={images.defaultImg} style={styles.rewardImage} />
            <Text style={styles.rewardName}>{Strings.noRewards}</Text>
          </View>
        </View>
      );
    }

    return (
      <View key={section.title} style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{section.title}</Text>
        <FlatList
          data={section.data}
          renderItem={renderRewardItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        />
      </View>
    );
  };

  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <CustomAppBar
        title={Strings.yourRewards}
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        style={{marginBottom: rhp(50)}}
        showsVerticalScrollIndicator={false}>
        {rewardSections.map((section, index) => renderSection(section))}
      </ScrollView>
    </ImageBackground>
  );
};

export default RewardsScreen;

// import React, {useState, useEffect, useRef} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// // Hole positions (You can customize this to have more or fewer holes)
// const HOLES = [
//   {left: 50, top: 100},
//   {left: 150, top: 100},
//   {left: 250, top: 100},
//   {left: 50, top: 200},
//   {left: 150, top: 200},
//   {left: 250, top: 200},
// ];

// const RewardsScreen = () => {
//   const [score, setScore] = useState(0);
//   const [gameOver, setGameOver] = useState(false);
//   const [activeMole, setActiveMole] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(30); // Set time for game
//   const timerRef = useRef(null);

//   // Start a timer countdown
//   useEffect(() => {
//     if (timeLeft <= 0) {
//       setGameOver(true);
//       clearInterval(timerRef.current);
//     } else {
//       timerRef.current = setInterval(() => {
//         setTimeLeft(prevTime => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [timeLeft]);

//   // Randomly activate a mole every 1-2 seconds
//   useEffect(() => {
//     if (!gameOver) {
//       const moleInterval = setInterval(() => {
//         const randomHole = Math.floor(Math.random() * HOLES.length);
//         setActiveMole(randomHole); // Randomly pick a mole hole to show
//       }, Math.random() * 1000 + 1000); // Random interval between 1 to 2 seconds

//       return () => clearInterval(moleInterval);
//     }
//   }, [gameOver]);

//   const handleMoleTap = index => {
//     if (index === activeMole) {
//       setScore(score + 1); // Increase score when the mole is tapped
//       setActiveMole(null); // Hide mole after it’s tapped
//     }
//   };

//   const restartGame = () => {
//     setScore(0);
//     setGameOver(false);
//     setTimeLeft(30);
//     setActiveMole(null);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.scoreText}>Score: {score}</Text>
//       <Text style={styles.timerText}>Time Left: {timeLeft}s</Text>
//       <View style={styles.holesContainer}>
//         {HOLES.map((hole, index) => (
//           <View
//             key={index}
//             style={[styles.hole, {left: hole.left, top: hole.top}]}>
//             {activeMole === index && (
//               <TouchableOpacity
//                 style={styles.mole}
//                 onPress={() => handleMoleTap(index)}>
//                 <Text style={styles.moleText}>🐭</Text> {/* Mole emoji */}
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}
//       </View>

//       {gameOver && (
//         <View style={styles.gameOverContainer}>
//           <Text style={styles.gameOverText}>
//             Game Over! Your Score: {score}
//           </Text>
//           <TouchableOpacity style={styles.restartButton} onPress={restartGame}>
//             <Text style={styles.restartText}>Restart</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//   },
//   scoreText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   timerText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
//   holesContainer: {
//     width: '100%',
//     height: '60%',
//     position: 'relative',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 20,
//   },
//   hole: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#777',
//     borderRadius: 30,
//     margin: 10,
//     position: 'absolute',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   mole: {
//     width: 50,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   moleText: {
//     fontSize: 30,
//   },
//   gameOverContainer: {
//     position: 'absolute',
//     top: '40%',
//     alignItems: 'center',
//   },
//   gameOverText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   restartButton: {
//     backgroundColor: '#28a745',
//     padding: 10,
//     borderRadius: 5,
//   },
//   restartText: {
//     color: '#fff',
//     fontSize: 18,
//   },
// });

// export default RewardsScreen;
