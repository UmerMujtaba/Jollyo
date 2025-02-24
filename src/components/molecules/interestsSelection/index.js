import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { InterestsData } from '../../../utils/interestsData';
import { InterestsTouchableComponent } from '../../atoms';
import { styles } from './styles';

export const InterestsSelection = ({onSelectionChange}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemPress = item => {
    setSelectedItems(prevSelectedItems => {
      const updatedSelectedItems = prevSelectedItems.includes(item)
        ? prevSelectedItems.filter(i => i !== item)
        : [...prevSelectedItems, item];

      // Notify the parent about the updated selection
      onSelectionChange(updatedSelectedItems);

      return updatedSelectedItems;
    });
  };

  const logSelectedItems = () => {
    console.log('Selected Items: ', selectedItems);
  };

  // Data with titles and image sources
  return (
    <View style={styles.container}>
      <FlatList
        data={InterestsData}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <InterestsTouchableComponent
            title={item.title}
            imageSource={item.imageSource}
            onPress={() => {
              handleItemPress(item.title);
              logSelectedItems();
            }}
            isSelected={selectedItems.includes(item.title)}
          />
        )}
        contentContainerStyle={styles.scrollContainer}
      />
    </View>
  );
};


