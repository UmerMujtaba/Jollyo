import React from 'react';
import { Image, Modal, Text, TouchableOpacity, View } from 'react-native';
import {
  Strings
} from '../../../constants';
import { styles } from './styles';

export const StickerModal = ({isVisible, earnedSticker, onClose}) => {
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.modalContainer} onPress={onClose}>
        <View style={styles.modalContent}>
          {earnedSticker?.image && (
            <Image source={earnedSticker.image} style={styles.stickerImage} />
          )}

          <Text style={styles.stickerText}>
            {`${Strings.youEarnedASticker} ${
              earnedSticker?.name || Strings.unknownSticker
            }`}
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>{Strings.close}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

