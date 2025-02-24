import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {isTablet, rhp, rwp} from '../../constants/dimensions';
import {premiumData} from '../../utils/premiumData';
import { PremiumComponent } from '../atoms';

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
const styles = StyleSheet.create({
  flatListContainer: {
    marginBottom: rhp(30),
    paddingRight: isTablet ? rwp(5) : rwp(0),
  },
});
