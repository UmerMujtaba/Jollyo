import React, { forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { styles } from './styles';

export const CustomTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      keyboardType,
      secureTextEntry,
      style,
      showSoftInputOnFocus,
      autoFocus,
      returnKeyType,
      blurOnSubmit,
      autoCorrect,
      onSubmitEditing,
      maxLength,
      inputText,
      autoCapitalize,
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, style]}>
        <TextInput
          ref={ref}
          autoCapitalize={autoCapitalize}
          placeholder={placeholder}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          style={[styles.inputStyle, inputText]}
          showSoftInputOnFocus={showSoftInputOnFocus}
          autoFocus={autoFocus}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          blurOnSubmit={blurOnSubmit}
          autoCorrect={autoCorrect}
          maxLength={maxLength}
        />
      </View>
    );
  },
);

