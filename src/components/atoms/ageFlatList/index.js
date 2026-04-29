import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {
  hp,
  rhp,
  rwp,
  Strings,
} from '../../../constants';
import { styles } from './styles';


const {width} = Dimensions.get('window');
const ITEM_WIDTH = rwp(60);
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

export const HorizontalNumberList = ({selectedNumber, setSelectedNumber}) => {
  const flatListRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const data = [
    {key: 'spacer-left'},
    ...Array.from({length: 11}, (_, i) => ({number: i + 1})),
    {key: 'spacer-right'},
  ];

  const scrollToIndex = (index, animated = true) => {
    const validIndex = Math.max(1, Math.min(index, data.length - 2));
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated,
        index: validIndex,
        viewPosition: 0.5,
      });
    }
    const selectedAge = data[validIndex]?.number || 1;
    if (selectedAge !== selectedNumber) {
      setSelectedNumber(selectedAge);
    }

    if (selectedAge < 2) {
      setErrorMessage('Age must be at least 2');
    } else {
      setErrorMessage('');
    }
  };

  const handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    const validIndex = Math.max(1, Math.min(index, data.length - 2));
    
    const selectedAge = data[validIndex]?.number || 1;
    if (selectedAge !== selectedNumber) {
      setSelectedNumber(selectedAge);
    }
  };

  return (
    <View style={{height: hp(14), marginTop: hp(2), }}>
      <FlatList
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        contentContainerStyle={{paddingHorizontal: SPACER_WIDTH}}
        keyExtractor={(item, index) =>
          item.number?.toString() || `spacer-${index}`
        }
        renderItem={({item, index}) => {
          if (item.key) return <View style={{width: ITEM_WIDTH}} />;
          const isSelected = item.number === selectedNumber;
          return (
            <TouchableOpacity
              onPress={() => scrollToIndex(index)}
              style={[styles.item, isSelected && styles.selectedItem]}>
              <Text style={[styles.text, isSelected && styles.selectedText]}>
                {item.number}
              </Text>
            </TouchableOpacity>
          );
        }}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        getItemLayout={(data, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
      />
      <Text
        style={styles.selectedTextDisplay}></Text>
    </View>
  );
};
