import React from 'react';
import { Text, View } from 'react-native';
import {
  Strings
} from '../../../constants';
import { OtpField } from '../../atoms';
import { styles } from './styles';

export const OtpFieldContainer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>{Strings.enterOtp}</Text>
      <OtpField />
    </View>
  );
};
