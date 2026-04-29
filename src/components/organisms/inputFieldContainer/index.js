import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../../constants/strings';
import { styles } from './styles';
import { InputField } from '../../molecules';
import { images } from '../../../assets/images';

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
  const [showPassword, setShowPassword] = useState(false);

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
      <View style={styles.passwordContainer}>
        <View style={{ flex: 1 }}>
          <InputField
            autoCapitalize={passwordAutoCapitalize}
            heading={headingTwo}
            keyboardType={Strings.default}
            value={PasswordValue}
            onChangeText={onPasswordChangeText}
            secureTextEntry={!showPassword}
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
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Image
            source={images.icons.eyeIcon}
            style={[styles.eyeIcon, { opacity: showPassword ? 1 : 0.5 }]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
