import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { Strings } from '../../../constants/strings';
import { Timer } from '../../atoms';

export const TimerContainer = () => {
  const [resetKey, setResetKey] = useState(0);

  const handleResendCode = () => {
    setResetKey(prevKey => prevKey + 1);
  };
  return (
    <View style={styles.container}>
      <Timer key={resetKey} />
      <TouchableOpacity onPress={handleResendCode}>
        <Text style={styles.resendTxt}>{Strings.resendCode}</Text>
      </TouchableOpacity>
    </View>
  );
};
