import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fonts from '../../constants/fonts';
import {colors} from '../../constants/colors';
import {rfs, rhp} from '../../constants/dimensions';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = 60;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

const HorizontalNumberList = ({selectedNumber, setSelectedNumber}) => {
  const flatListRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');

  const data = [
    {key: 'spacer-left'},
    ...Array.from({length: 11}, (_, i) => ({number: i + 1})),
    {key: 'spacer-right'},
  ];

  const scrollToIndex = index => {
    const validIndex = Math.max(1, Math.min(index, data.length - 2));
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: validIndex,
        viewPosition: 0.5,
      });
    }
    const selectedAge = data[validIndex]?.number || 1;
    setSelectedNumber(selectedAge);

    if (selectedAge < 2) {
      setErrorMessage('Age must be at least 2');
    } else {
      setErrorMessage('');
    }
  };

  const handleMomentumScrollEnd = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_WIDTH);
    scrollToIndex(index);
  };

  return (
    <View style={{height: 120, marginTop: 20, alignItems: 'center'}}>
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
      />
      <Text style={styles.selectedTextDisplay}>Age: {selectedNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: ITEM_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: colors.darkPink,
    height: rhp(80),
    width: rhp(80),
    borderRadius: rhp(40),
  },
  text: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.darkOrange,
    fontSize: rfs(32),
  },
  selectedText: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.white,
    fontSize: rfs(32),
  },
  selectedTextDisplay: {
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
    color: colors.white,
    fontSize: rfs(24),
    textAlign: 'center',
    marginTop: rhp(5),
  },
});

export default HorizontalNumberList;
