import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {rhp, rwp} from '../../constants/dimensions';
import {navigate} from '../../navigationHandler/navigationRef';
import {MainExerciseData} from '../../utils/mainExerciseData';
import SelectionContainer from '../atoms/selectionContainer';
import Sound from 'react-native-sound';
import useSound from '../../hooks/buttonClickHook';
import {useNavigation} from '@react-navigation/native';

Sound.setCategory('Playback');

const ScrollableSelectionList = () => {
  const navigation = useNavigation();
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

  const handlePress = item => {
    playSound();
    console.log(item);

    setTimeout(() => {
      navigation.navigate(item.screen);
    }, 600);
  };
  const renderItem = ({item, index}) => (
    <SelectionContainer
      imageSource={item.imageSource}
      heading={item.heading}
      index={index}
      onPress={() => handlePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MainExerciseData}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: rhp(180),
  },
  contentContainer: {
    marginInline: rwp(10),
    paddingBottom: rhp(70),
  },
});

export default ScrollableSelectionList;
