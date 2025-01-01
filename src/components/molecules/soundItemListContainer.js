import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {rhp} from '../../constants/dimensions';
import {soundData} from '../../utils/soundsListData';
import SoundItemComponent from '../atoms/soundItemComponent';
import {navigate} from '../../navigationHandler/navigationRef';

const handlePress = screenName => {
  console.log('🚀 ~ handlePress ~ screenName:', screenName);
  navigate(screenName);
};

const SoundItemListContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        data={soundData}
        renderItem={({item}) => (
          <SoundItemComponent
            title={item.title}
            onPress={() => handlePress(item.screenName)}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: rhp(20),
    marginBottom: rhp(10),
  },

  columnWrapperStyle: {
    flexDirection: 'column',
  },
  contentContainerStyle: {
    paddingBottom: rhp(180),
  },
});
export default SoundItemListContainer;
