import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';

export const HeadingText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.appName}</Text>
    </View>
  );
};

