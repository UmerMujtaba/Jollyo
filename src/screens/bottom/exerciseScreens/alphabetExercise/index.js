import React from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../../../assets/images';
import CustomAppBar from '../../../../components/atoms/customAppBar';
import {styles} from './styles';
import ExerciseSetHeader from '../../../../components/atoms/exerciseSetHeader';
import {navigate} from '../../../../navigationHandler/navigationRef';
import ExerciseLessonComponent from '../../../../components/atoms/exerciseLessonComponent';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {isTablet, rhp} from '../../../../constants/dimensions';

const AlphabetsExercise = () => {
  const navigation = useNavigation();
  const alphabetsExerciseList = useSelector(
    state => state.alphabetsExerciseReducer.alphabetsExerciseList,
  );

  // if (!alphabetsExerciseList || alphabetsExerciseList.length === 0) {
  //   return <Text>Loading...</Text>; // or some other loading state
  // }
  return (
    <ImageBackground source={images.backgroundImage} style={styles.container}>
      <View style={{marginTop: isTablet ? rhp(20) : rhp(10)}}>
        <CustomAppBar
          title={'Alphabets'}
          questionMark
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
            }}>
            <ExerciseSetHeader
              title={'Alphabets Set'}
              count={'1/26'}
              description={'26 sets and letters'}
            />
            {alphabetsExerciseList.map((lesson, index) => (
              <View style={{alignSelf: 'center'}} key={index}>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                  }}>
                  <ExerciseLessonComponent
                    heading={lesson.name}
                    totalExercises={lesson.exercises.length}
                    imageSource={lesson.image}
                    onPress={() =>
                      navigate(lesson.screen, {
                        letterData: lesson,
                        index: index,
                      })
                    }
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
