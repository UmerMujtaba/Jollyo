import React from 'react';
import {Modal, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors} from '../../constants/colors';
import fonts from '../../constants/fonts';
import {hp, rfs, rhp, rwp, wp} from '../../constants/dimensions';

const StickerModal = ({isVisible, earnedSticker, onClose}) => {
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
            You earned a sticker: {earnedSticker?.name || 'Unknown Sticker'}
          </Text>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    height: hp(70),
    width: wp(100),
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickerImage: {
    width: rwp(260),
    height: rhp(260),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  stickerText: {
    paddingHorizontal: rwp(15),
    marginTop: rhp(10),
    fontSize: rfs(28),
    textAlign: 'center',
    color: colors.backgroundClr,
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
  closeButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.darkOrange,
    borderRadius: 16,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Fredoka.Bold,
  },
};

export default StickerModal;
