import React from 'react';
import { Text, View } from 'react-native';
import { rfs, rhp, wp, hp } from '../../../constants';
import { TouchableButton } from '../button';
import { styles } from './styles';

export const PremiumComponent = ({ month, price, sub, btnTitle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerHeading}>{month}</Text>
      </View>
      <Text style={styles.priceText}>{`Rs ${price}`}</Text>
      <Text style={styles.sub}>{sub}</Text>
      <View style={{ flex: 1 }} />
      <TouchableButton
        btnInside={{ width: wp(19), height: hp(6) }}
        btnPropStyle={{ width: wp(21), height: hp(6.5) }}
        title={btnTitle}
        btnTextProp={{ fontSize: wp(3.5) }}
      />
    </View>
  );
};
