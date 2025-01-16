import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Sound from 'react-native-sound';
import {rhp} from '../../constants/dimensions';
import useSound from '../../hooks/buttonClickHook';
import {PronunciationsDataList} from '../../utils/soundsListData';
import SoundItemComponent from '../atoms/soundItemComponent';

Sound.setCategory('Playback');

const SoundItemListContainer = () => {
  const navigation = useNavigation();
  const playSound = useSound(
    'https://res.cloudinary.com/dtpvy8gil/video/upload/v1736403972/click_sound_ifctk3.mp3',
  );

  const handlePress = screenName => {
    if (playSound) {
      playSound();
    }

    setTimeout(() => {
      console.log('Navigating to:', screenName);
      navigation.navigate(screenName);
    }, 600);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={PronunciationsDataList}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
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
