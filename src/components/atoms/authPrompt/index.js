import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const AuthPrompt = ({onPress, title, buttonText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{title}</Text>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
        <Text style={styles.btnText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

