import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { images } from '../../../../assets/images';
import { isTablet, rhp, ScreenNames, Strings, soundAssets } from '../../../../constants';
import { styles } from './styles';

import {
  CustomAppBar,
  ExerciseLessonComponent,
  ExerciseSetHeader,
} from '../../../../components/atoms';
import { useSound } from '../../../../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';

const AlphabetsExercise = () => {
  const navigation = useNavigation();
  const alphabetsExerciseList = useSelector(
    state => state.alphabetsExerciseReducer.alphabetsExerciseList,
  );

  // if (!alphabetsExerciseList || alphabetsExerciseList.length === 0) {
  //   return <Text>Loading...</Text>; // or some other loading state
  // }

  const playSound = useSound(soundAssets.click);

  const handlePress = (item, index) => {
    playSound();

    console.log(item);

    setTimeout(() => {
      navigation.navigate(item.screen, {
        letterData: item,
        index: index,
      });
    }, 600);
  };
  const handleQuestionPress = () => {
    navigation.navigate(ScreenNames.userGuide);
  };
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View style={{ marginTop: isTablet ? rhp(20) : rhp(10) }}>
        <CustomAppBar
          title={Strings.alphabets}
          questionMark
          onQuestionPress={handleQuestionPress}
          onBackPress={() => navigation.goBack()}
          back
        />
      </View>
      <View style={styles.body}>
        <View style={[styles.body, styles.bodyInside]}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
          >
            <ExerciseSetHeader
              title={Strings.alphabetsSet}
              count={'1/26'}
              description={Strings.twentySixLetter}
            />
            {alphabetsExerciseList.map((lesson, index) => (
              <View style={{ alignSelf: 'center' }} key={index}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}
                >
                  <ExerciseLessonComponent
                    heading={lesson.name}
                    totalExercises={lesson.exercises.length}
                    imageSource={lesson.image}
                    onPress={() => handlePress(lesson, index)}
                    progress={lesson.progress}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AlphabetsExercise;
