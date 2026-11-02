import React, { useState } from 'react';
import { Platform, Text, View } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { styles } from './styles';

export const OtpField = () => {
  const [otpCode, setOtpCode] = useState(null);
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const [results, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  return (
    <View style={styles.otpContainer}>
      <CodeField
        ref={ref}
        {...results}
        caretHidden={false}
        value={value}
        onChangeText={text => {
          setValue(text);
          setOtpCode(text);
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({
          android: 'sms-otp',
          default: 'one-time-code',
        })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
          <View
            style={[styles.cell, isFocused && styles.focusedCell]}
            key={index}
            onLayout={getCellOnLayoutHandler(index)}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

