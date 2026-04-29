import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { premiumData } from '../../../utils/premiumData';
import { PremiumComponent } from '../../atoms';
import { styles } from './styles';

export const PremiumList = () => {
  return (
    <FlatList
      data={premiumData}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <PremiumComponent
          month={item.month}
          price={item.price}
          sub={item.sub}
          btnTitle={item.btnText}
        />
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
