import React, {forwardRef} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {colors} from '../../constants/colors';
import {rfs, rhp} from '../../constants/dimensions';
import fonts from '../../constants/fonts';
const CustomTextInput = forwardRef(
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.disabled,
    fontSize: rfs(14),
    color: 'black',
    marginBottom: rhp(20),
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    fontSize: rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Medium,
  },
});

export default CustomTextInput;
