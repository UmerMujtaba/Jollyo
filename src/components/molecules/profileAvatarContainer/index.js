import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { images } from '../../../assets/images';
import {
  Strings
} from '../../../constants';
import { ProfileRoundedAvatar } from '../../atoms';
import { styles } from './styles';


export const ProfilesAvatarContainer = ({onGenderSelect}) => {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleAvatarSelect = avatar => {
    setSelectedAvatar(avatar);

    const avatarData = {
      gender: avatar,
      imagePath: avatar === 'girl' ? images.girlAvatar : images.boyAvatar, // Update to correct image source
    };
    onGenderSelect(avatarData);

    console.log('🚀 ~ handleAvatarSelect ~ avatarData:', avatarData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{Strings.creatingProfileFor}</Text>
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={() => handleAvatarSelect('girl')}>
          <ProfileRoundedAvatar
            imageSource={images.girlAvatar}
            isSelected={selectedAvatar === 'girl'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAvatarSelect('boy')}>
          <ProfileRoundedAvatar
            imageSource={images.boyAvatar}
            isSelected={selectedAvatar === 'boy'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};


