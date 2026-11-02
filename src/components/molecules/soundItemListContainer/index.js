import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useSound from '../../../hooks/buttonClickHook';
import { styles } from './styles';
import { soundAssets } from '../../../constants';

import { PronunciationsDataList } from '../../../utils/soundsListData';
import { SoundItemComponent } from '../../atoms';


export const SoundItemListContainer = () => {
  const navigation = useNavigation();
  const playSound = useSound(soundAssets.click);

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
            imageSource={item.imageUri}
          />
        )}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

