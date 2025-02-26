import React from 'react';
import { Text, View } from 'react-native';
import {
  rhp,
  rwp
} from '../../../constants';
import { styles } from './styles';

export const ExerciseSetHeader = ({title, count, description}) => {
  return (
    <View style={{paddingHorizontal: rwp(20)}}>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.count}>{count}</Text>
      </View>
      <Text style={[styles.count, {marginBottom: rhp(20)}]}>{description}</Text>
    </View>
  );
};

