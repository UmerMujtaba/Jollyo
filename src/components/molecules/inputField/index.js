import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { CustomTextInput } from '../../atoms';

export const InputField = ({
  heading,
  keyboardType,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  showSoftInputOnFocus,
  autoCorrect,
  autoFocus,
  onSubmitEditing,
  blurOnSubmit,
  maxLength,
  inputText,
  returnKeyType,
  autoCapitalize,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <CustomTextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        showSoftInputOnFocus={showSoftInputOnFocus}
        autoFocus={autoFocus}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        autoCorrect={autoCorrect}
        onSubmitEditing={onSubmitEditing}
        maxLength={maxLength}
        inputText={inputText}
      />
    </View>
  );
};


