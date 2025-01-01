import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {rhp, rwp} from '../../constants/dimensions';
import {navigate} from '../../navigationHandler/navigationRef';
import {MainExerciseData} from '../../utils/mainExerciseData';
import SelectionContainer from '../atoms/selectionContainer';

const ScrollableSelectionList = () => {
  const renderItem = ({item, index}) => (
    <SelectionContainer
      imageSource={item.imageSource}
      heading={item.heading}
      index={index}
      onPress={() => {
        console.log(item);
        navigate(item.screen);
      }}
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
