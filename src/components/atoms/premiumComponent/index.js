import React from 'react';
import { Text, View } from 'react-native';
import { rfs, rhp, wp } from '../../../constants/dimensions';
import { TouchableButton } from '../button';
import { styles } from './styles';

export const PremiumComponent = ({month, price, sub, btnTitle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.topContainerHeading}>{month}</Text>
      </View>
      <Text style={styles.priceText}>{`Rs ${price}`}</Text>
      <Text style={styles.sub}>{sub}</Text>
      <TouchableButton
        btnInside={{width: wp(20), height: rhp(34)}}
        btnPropStyle={{width: wp(20), height: rhp(40)}}
        title={btnTitle}
        btnTextProp={{fontSize: rfs(16)}}
      />
    </View>
  );
};

