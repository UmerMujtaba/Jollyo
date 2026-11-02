import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Timer } from '../../atoms';
import { styles } from './styles';
import { Strings } from '../../../constants';

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
