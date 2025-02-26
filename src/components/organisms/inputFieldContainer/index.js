import React from 'react';
import { View } from 'react-native';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';
import { InputField } from '../../molecules';

export const InputFieldContainer = ({
  headingOne,
  headingTwo,
  EmailValue,
  PasswordValue,
  onEmailChangeText,
  onPasswordChangeText,
  secureTextEntry,
  showEmailSoftInputOnFocus,
  showPasswordSoftInputOnFocus,
  emailAutoCorrect,
  passwordAutoCorrect,
  emailAutoFocus,
  passwordAutoFocus,
  emailReturnKeyType,
  PasswordReturnKeyType,
  emailBlurOnSubmit,
  PasswordBlurOnSubmit,
  onEmailSubmitEditing,
  onPasswordSubmitEditing,
  // maxLength,
  emailAutCapitalize,
  passwordAutoCapitalize,
  inputEmailText,
  inputPasswordText,
}) => {
  return (
    <View style={styles.container}>
      <InputField
        autoCapitalize={emailAutCapitalize}
        heading={headingOne}
        keyboardType={Strings.emailType}
        value={EmailValue}
        onChangeText={onEmailChangeText}
        showSoftInputOnFocus={showEmailSoftInputOnFocus}
        autoFocus={emailAutoFocus}
        returnKeyType={emailReturnKeyType}
        blurOnSubmit={emailBlurOnSubmit}
        autoCorrect={emailAutoCorrect}
        onSubmitEditing={onEmailSubmitEditing}
        // maxLength={maxLength}
        inputText={inputEmailText}
      />
      <InputField
        autoCapitalize={passwordAutoCapitalize}
        heading={headingTwo}
        keyboardType={Strings.default}
        value={PasswordValue}
        onChangeText={onPasswordChangeText}
        secureTextEntry={secureTextEntry}
        showSoftInputOnFocus={showPasswordSoftInputOnFocus}
        autoFocus={passwordAutoFocus}
        returnKeyType={PasswordReturnKeyType}
        blurOnSubmit={PasswordBlurOnSubmit}
        autoCorrect={passwordAutoCorrect}
        onSubmitEditing={onPasswordSubmitEditing}
        // maxLength={maxLength}
        inputText={inputPasswordText}
      />
    </View>
  );
};


